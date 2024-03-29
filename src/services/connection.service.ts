import { ClientDuplexStream, ServiceError } from '@grpc/grpc-js';
import { ClientRequest } from '@proto/ai/inworld/engine/world-engine_pb';
import {
  InworldPacket as ProtoPacket,
  LoadedCharacters,
  LoadedScene,
} from '@proto/ai/inworld/packets/packets_pb';

import {
  ApiKey,
  Awaitable,
  ConnectionState,
  Extension,
  GenerateSessionTokenFn,
  GetterSetter,
  InternalClientConfiguration,
  User,
} from '../common/data_structures';
import { Logger } from '../common/logger';
import { Character } from '../entities/character.entity';
import { SessionContinuation } from '../entities/continuation/session_continuation.entity';
import { InworldPacket } from '../entities/packets/inworld_packet.entity';
import { Scene } from '../entities/scene.entity';
import { Session } from '../entities/session.entity';
import { SessionToken } from '../entities/session_token.entity';
import { EventFactory } from '../factories/event';
import { StateSerializationClientGrpcService } from './gprc/state_serialization_client_grpc.service';
import { WorldEngineClientGrpcService } from './gprc/world_engine_client_grpc.service';

interface ConnectionProps<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  apiKey: ApiKey;
  name?: string;
  user?: User;
  client?: ClientRequest;
  config?: InternalClientConfiguration;
  sessionGetterSetter?: GetterSetter<Session>;
  sessionContinuation?: SessionContinuation;
  onDisconnect?: () => Awaitable<void>;
  onError: (err: ServiceError) => Awaitable<void>;
  onMessage?: (message: InworldPacketT) => Awaitable<void>;
  generateSessionToken?: GenerateSessionTokenFn;
  extension?: Extension<InworldPacketT>;
}

interface QueueItem {
  getPacket: () => ProtoPacket;
  afterWriting: (packet: ProtoPacket) => void;
}

export class ConnectionService<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  private state: ConnectionState = ConnectionState.INACTIVE;

  private nextSceneName: string | undefined;
  private scene: Scene;
  private sessionToken: SessionToken;
  private stream: ClientDuplexStream<ProtoPacket, ProtoPacket>;
  private connectionProps: ConnectionProps<InworldPacketT>;

  private disconnectTimeoutId: NodeJS.Timeout;

  private eventFactory = new EventFactory();

  private intervals: NodeJS.Timeout[] = [];
  private packetQueue: QueueItem[] = [];

  private engineService = new WorldEngineClientGrpcService<InworldPacketT>();
  private stateService = new StateSerializationClientGrpcService();

  private onDisconnect: () => Awaitable<void>;
  private onError: (err: ServiceError) => Awaitable<void>;
  private onMessage: ((message: ProtoPacket) => Awaitable<void>) | undefined;

  private logger = Logger.getInstance();

  constructor(props: ConnectionProps<InworldPacketT>) {
    this.connectionProps = props;
    this.scene = new Scene({
      name: this.connectionProps.name,
    });

    this.onDisconnect = async () => {
      this.state = ConnectionState.INACTIVE;
      await this.connectionProps.onDisconnect?.();
    };
    this.onError = this.connectionProps.onError;

    this.onMessage = async (packet: ProtoPacket) => {
      const sessionControlResponse = packet.getSessionControlResponse();

      if (sessionControlResponse?.hasLoadedScene()) {
        this.setSceneFromProtoEvent(sessionControlResponse.getLoadedScene());
      } else if (sessionControlResponse?.hasLoadedCharacters()) {
        this.addCharactersToScene(sessionControlResponse.getLoadedCharacters());
      }

      const inworldPacket = this.convertPacketFromProto(packet);

      this.connectionProps.onMessage?.(inworldPacket);

      if (inworldPacket.isWarning()) {
        this.logger.warn({
          action: 'Receive warning packet',
          data: {
            packet: packet.toObject(),
          },
          sessionId: this.sessionToken?.sessionId,
        });
      } else {
        this.logger.debug({
          action: 'Receive packet',
          data: {
            packet: packet.toObject(),
          },
          sessionId: this.sessionToken?.sessionId,
        });
      }
    };
  }

  isActive() {
    return this.state === ConnectionState.ACTIVE;
  }

  isAutoReconnected() {
    return this.connectionProps.config?.connection?.autoReconnect ?? true;
  }

  getSceneName() {
    return this.scene.name;
  }

  setNextSceneName(name?: string) {
    this.nextSceneName = name;
  }

  async generateSessionToken() {
    const proto = await this.engineService.generateSessionToken(
      this.connectionProps.apiKey,
      this.getSceneName(),
    );

    return SessionToken.fromProto(proto);
  }

  async getSessionState() {
    try {
      const token = await this.ensureSessionToken();
      return this.stateService.getSessionState({
        sessionToken: token,
        scene: this.getSceneName(),
      });
    } catch (err) {
      this.onError(err);
    }
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
    this.stream?.removeAllListeners('data');
    this.stream?.cancel();
    this.clearQueue();

    if (this.stream) {
      this.logger.debug({
        action: 'Close connection',
        sessionId: this.sessionToken?.sessionId,
      });
    }
  }

  getEventFactory() {
    return this.eventFactory;
  }

  async getCharactersList() {
    await this.open();

    return this.scene.characters;
  }

  async getCurrentCharacter() {
    await this.getCharactersList();

    return this.getEventFactory().getCurrentCharacter();
  }

  async setCurrentCharacter(character: Character) {
    return this.getEventFactory().setCurrentCharacter(character);
  }

  async open() {
    if (this.state !== ConnectionState.INACTIVE) return;

    try {
      await this.loadToken();

      const { client, sessionContinuation, user } = this.connectionProps;

      const name = this.getSceneName();
      const [stream, sessionProto] = await this.engineService.openSession({
        client,
        name,
        sessionContinuation,
        user,
        config: this.connectionProps.config,
        extension: this.connectionProps.extension,
        sessionToken: this.sessionToken,
        onError: this.onError,
        onDisconnect: this.onDisconnect,
        ...(this.onMessage && { onMessage: this.onMessage }),
      });

      this.setSceneFromProtoEvent(sessionProto);
      this.stream = stream;
      this.state = ConnectionState.ACTIVE;
      this.releaseQueue();
      this.scheduleDisconnect();
    } catch (err) {
      this.onError(err);
      this.clearQueue();
    }
  }

  async send(getPacket: () => ProtoPacket) {
    try {
      this.cancelScheduler();

      if (!this.isActive() && !this.isAutoReconnected()) {
        throw Error('Unable to send data due inactive connection');
      }

      return this.write(getPacket);
    } catch (err) {
      this.onError(err);
    }
  }

  private async write(getPacket: () => ProtoPacket) {
    let packet: ProtoPacket;

    const resolvePacket = () =>
      new Promise<InworldPacketT>((resolve) => {
        const done = (packet: ProtoPacket) => {
          this.scheduleDisconnect();
          resolve(this.convertPacketFromProto(packet));
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

      await this.open();
    }

    return resolvePacket();
  }

  private writeToStream(getPacket: () => ProtoPacket) {
    const packet = getPacket();

    this.stream?.write(packet);

    this.logger.debug({
      action: 'Send packet',
      data: {
        packet: packet.toObject(),
      },
      sessionId: this.sessionToken?.sessionId,
    });

    return packet;
  }

  private async loadToken() {
    if (this.state === ConnectionState.ACTIVATING) return;

    let session: Session;

    // Try to get session from provided storage
    if (this.connectionProps.sessionGetterSetter) {
      session = await this.connectionProps.sessionGetterSetter.get();
    }

    const previousSessionToken = this.sessionToken;
    await this.ensureSessionToken({
      sessionToken: session?.sessionToken,
      beforeLoading: () => {
        this.state = ConnectionState.ACTIVATING;
      },
    });
    // Try to save session token to provided storage
    if (previousSessionToken !== this.sessionToken) {
      this.connectionProps.sessionGetterSetter?.set({
        sessionToken: this.sessionToken,
      });
    }
  }

  async ensureSessionToken(props?: {
    beforeLoading: () => void;
    sessionToken?: SessionToken;
  }) {
    let sessionToken = props?.sessionToken ?? this.sessionToken;

    if (!sessionToken || SessionToken.isExpired(sessionToken)) {
      const { sessionId } = sessionToken || {};

      // Generate new session token is it's empty or expired
      if (!sessionToken || SessionToken.isExpired(sessionToken)) {
        props?.beforeLoading?.();

        const generateSessionToken =
          this.connectionProps.generateSessionToken ??
          this.generateSessionToken.bind(this);
        sessionToken = await generateSessionToken();

        // Reuse session id to keep context of previous conversation
        if (sessionId) {
          sessionToken = new SessionToken({
            ...sessionToken,
            sessionId,
          });
        }
      }
    }

    this.sessionToken = sessionToken;

    return this.sessionToken;
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
      item.afterWriting(protoPacket);
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

  private convertPacketFromProto(packet: ProtoPacket) {
    return this.connectionProps.extension?.convertPacketFromProto
      ? this.connectionProps.extension.convertPacketFromProto(packet)
      : (InworldPacket.fromProto(packet) as InworldPacketT);
  }

  private ensureCurrentCharacter() {
    const factory = this.getEventFactory();
    const currentCharacter = factory.getCurrentCharacter();
    const sameCharacter = currentCharacter
      ? this.scene.characters.find(
          (c) => c.resourceName === currentCharacter?.resourceName,
        )
      : undefined;

    factory.setCurrentCharacter(sameCharacter ?? this.scene.characters[0]);
  }

  private setSceneFromProtoEvent(proto: LoadedScene) {
    const name = this.nextSceneName || this.getSceneName();

    this.scene = Scene.fromProto(name, proto);

    this.connectionProps.extension?.afterLoadScene?.(proto);
    this.ensureCurrentCharacter();
  }

  private addCharactersToScene(proto: LoadedCharacters) {
    const characters = proto.getAgentsList().map((c) => Character.fromProto(c));

    this.scene = new Scene({
      name: this.scene.name,
      characters: [...new Set(this.scene.characters.concat(characters))],
    });

    this.ensureCurrentCharacter();
  }
}
