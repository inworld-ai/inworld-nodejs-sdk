import { ClientDuplexStream, ServiceError } from '@grpc/grpc-js';
import { InworldPacket as ProtoPacket } from '@proto/packets_pb';
import {
  ClientRequest,
  LoadSceneResponse,
  UserRequest,
} from '@proto/world-engine_pb';
import internal = require('stream');
import { clearTimeout } from 'timers';

import {
  ApiKey,
  Awaitable,
  ConnectionState,
  GenerateSessionTokenFn,
  InternalClientConfiguration,
} from '../common/interfaces';
import { Character } from '../entities/character.entity';
import { InworldPacket } from '../entities/inworld_packet.entity';
import { SessionToken } from '../entities/session_token.entity';
import { EventFactory } from '../factories/event';
import { TokenClientGrpcService } from './gprc/token_client_grpc.service';
import { WorldEngineClientGrpcService } from './gprc/world_engine_client_grpc.service';

interface ConnectionProps {
  apiKey: ApiKey;
  name?: string;
  user?: UserRequest;
  client?: ClientRequest;
  config?: InternalClientConfiguration;
  onDisconnect?: () => void;
  onError?: (err: ServiceError) => void;
  onMessage?: (message: InworldPacket) => Awaitable<void>;
  generateSessionToken?: GenerateSessionTokenFn;
}

export interface QueueItem {
  getPacket: () => ProtoPacket;
  afterWriting?: (packet: ProtoPacket) => void;
}

const TIME_DIFF_MS = 50 * 60 * 1000; // 5 minutes

export class ConnectionService {
  private state: ConnectionState = ConnectionState.INACTIVE;

  private scene: LoadSceneResponse;
  private session: SessionToken;
  private stream: ClientDuplexStream<ProtoPacket, ProtoPacket>;
  private connectionProps: ConnectionProps;

  private characters: Array<Character> = [];

  private disconnectTimeoutId: NodeJS.Timeout;

  private eventFactory = new EventFactory();

  private intervals: NodeJS.Timeout[] = [];
  private packetQueue: QueueItem[] = [];

  private onDisconnect: () => void;
  private onError: (err: ServiceError) => void;
  private onMessage: ((message: ProtoPacket) => Awaitable<void>) | undefined;

  constructor(props: ConnectionProps) {
    this.connectionProps = props;

    this.onDisconnect = () => {
      this.state = ConnectionState.INACTIVE;
      this.connectionProps.onDisconnect?.();
    };
    this.onError =
      this.connectionProps.onError ??
      ((err: ServiceError) => console.error(err));

    if (this.connectionProps.onMessage) {
      this.onMessage = async (packet: ProtoPacket) =>
        this.connectionProps.onMessage(
          this.eventFactory.convertToInworldPacket(packet),
        );
    }
  }

  isActive() {
    return this.state === ConnectionState.ACTIVE;
  }

  isAutoReconnected() {
    return this.connectionProps.config?.connection?.autoReconnect ?? true;
  }

  async generateSessionToken() {
    const sessionToken =
      await new TokenClientGrpcService().generateSessionToken(
        this.connectionProps.apiKey,
      );

    return new SessionToken({
      token: sessionToken.getToken(),
      type: sessionToken.getType(),
      expirationTime: sessionToken.getExpirationTime().toDate(),
      sessionId: sessionToken.getSessionId(),
    });
  }

  async openManually() {
    try {
      if (this.isAutoReconnected()) {
        throw Error(
          'Impossible to open connection manually with `autoReconnect` enabled',
        );
      }

      if (this.isActive()) {
        throw Error('Connection is already open');
      }

      return this.open();
    } catch (err) {
      this.onError(err);
    }
  }

  close() {
    this.cancelScheduler();
    this.state = ConnectionState.INACTIVE;
    if (this.connectionProps.onMessage) {
      this.stream?.removeListener('data', this.onMessage);
    }
    this.stream?.cancel();
    this.clearQueue();
  }

  getEventFactory() {
    return this.eventFactory;
  }

  async getCharactersList() {
    await this.loadScene();

    return this.characters;
  }

  async open() {
    try {
      await this.loadScene();

      if (this.state === ConnectionState.LOADED) {
        this.state = ConnectionState.ACTIVATING;
        const engineService = new WorldEngineClientGrpcService();

        this.stream = engineService.session({
          session: this.session,
          onError: this.onError,
          onDisconnect: this.onDisconnect,
          ...(this.onMessage && { onMessage: this.onMessage }),
        });

        this.state = ConnectionState.ACTIVE;
        this.releaseQueue();

        this.scheduleDisconnect();
      }
    } catch (err) {
      this.onError(err);
      this.clearQueue();
    }
  }

  async send(getPacket: () => ProtoPacket) {
    try {
      this.cancelScheduler();

      if (this.isActive()) {
        return this.write(getPacket);
      }

      if (this.isAutoReconnected()) {
        await this.open();
        await this.loadCharactersList();

        return this.write(getPacket);
      }

      throw Error('Unable to send data due inactive connection');
    } catch (err) {
      this.onError(err);
    }
  }

  private async loadCharactersList() {
    if (!this.scene) {
      await this.loadScene();
    }

    this.characters = (this.scene?.getAgentsList() || []).map(
      (agent: LoadSceneResponse.Agent) => {
        const assets = agent.getCharacterAssets();

        return new Character({
          id: agent.getAgentId(),
          resourceName: agent.getBrainName(),
          displayName: agent.getGivenName(),
          assets: {
            avatarImg: assets?.getAvatarImg(),
            avatarImgOriginal: assets?.getAvatarImgOriginal(),
            rpmModelUri: assets?.getRpmModelUri(),
            rpmImageUriPortrait: assets?.getRpmImageUriPortrait(),
            rpmImageUriPosture: assets?.getRpmImageUriPosture(),
          },
        });
      },
    );

    if (!this.getEventFactory().getCurrentCharacter() && this.characters[0]) {
      this.getEventFactory().setCurrentCharacter(this.characters[0]);
    }
  }

  private write(getPacket: () => ProtoPacket) {
    let packet: ProtoPacket;

    const resolvePacket = () =>
      new Promise<InworldPacket>((resolve) => {
        const done = (packet: ProtoPacket) => {
          this.scheduleDisconnect();
          resolve(this.getEventFactory().convertToInworldPacket(packet));
        };

        if (packet) {
          return done(packet);
        }

        const interval = setInterval(() => {
          if (packet || this.state === ConnectionState.INACTIVE) {
            clearInterval(interval);

            this.intervals = this.intervals.filter(
              (i: NodeJS.Timeout) => i !== interval,
            );

            done(packet);
          }
        }, 10);
        this.intervals.push(interval);
      });

    if (this.isActive()) {
      packet = this.writeToStream(getPacket);
    } else {
      this.packetQueue.push({
        getPacket,
        afterWriting: (protoPacket: ProtoPacket) => {
          packet = protoPacket;
        },
      });
    }

    return resolvePacket();
  }

  private writeToStream(getPacket: () => ProtoPacket) {
    const packet = getPacket();

    this.stream?.write(getPacket());

    return packet;
  }

  private async loadScene() {
    if (this.state === ConnectionState.LOADING) return;

    const { client, name, user } = this.connectionProps;
    const generateSessionToken =
      this.connectionProps.generateSessionToken ||
      this.generateSessionToken.bind(this);

    try {
      const sessionId = this.session?.getSessionId();
      const expirationTime = this.session?.getExpirationTime();

      // Generate new session token is it's empty or expired
      if (
        !expirationTime ||
        new Date(expirationTime).getTime() - new Date().getTime() <=
          TIME_DIFF_MS
      ) {
        this.state = ConnectionState.LOADING;
        this.session = await generateSessionToken();

        // Reuse session id to keep context of previous conversation
        if (sessionId) {
          this.session = new SessionToken({
            sessionId,
            token: this.session.getToken(),
            type: this.session.getType(),
            expirationTime: this.session.getExpirationTime(),
          });
        }
      }

      const engineService = new WorldEngineClientGrpcService();

      if (!this.scene) {
        this.scene = await engineService.loadScene({
          capabilities: this.connectionProps.config.capabilities,
          client,
          name,
          user,
          session: this.session,
        });

        await this.loadCharactersList();
      }

      if (
        [ConnectionState.LOADING, ConnectionState.INACTIVE].includes(this.state)
      ) {
        this.state = ConnectionState.LOADED;
      }
    } catch (err) {
      this.onError(err);
    }
  }

  private scheduleDisconnect() {
    if (this.connectionProps.config?.connection?.disconnectTimeout) {
      this.cancelScheduler();
      this.disconnectTimeoutId = setTimeout(
        () => this.close(),
        this.connectionProps.config.connection.disconnectTimeout,
      );
    }
  }

  private cancelScheduler() {
    if (this.disconnectTimeoutId) {
      clearTimeout(this.disconnectTimeoutId);
    }
  }

  private releaseQueue() {
    this.packetQueue.forEach((item: QueueItem) => {
      const protoPacket = this.writeToStream(item.getPacket);
      item.afterWriting?.(protoPacket);
    });

    this.packetQueue = [];
  }

  private clearQueue() {
    this.intervals.forEach((i: NodeJS.Timeout) => {
      clearInterval(i);
    });

    this.intervals = [];
    this.packetQueue = [];
  }
}
