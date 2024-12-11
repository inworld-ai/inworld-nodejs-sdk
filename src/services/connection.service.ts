import { ClientDuplexStream } from '@grpc/grpc-js';
import { ClientRequest } from '@proto/ai/inworld/engine/world-engine_pb';
import {
  ControlEvent,
  CurrentSceneStatus,
  InworldPacket as ProtoPacket,
  LoadedScene,
} from '@proto/ai/inworld/packets/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';

import {
  ApiKey,
  Awaitable,
  ChangeSceneProps,
  ConnectionState,
  ConversationMapItem,
  ConversationState,
  Extension,
  GenerateSessionTokenFn,
  GetterSetter,
  InternalClientConfiguration,
  InworldConversationEventType,
  User,
} from '../common/data_structures';
import { calculateTimeDifference } from '../common/helpers';
import { Logger } from '../common/logger';
import { Capability } from '../entities/capability.entity';
import { Character } from '../entities/character.entity';
import { SessionContinuation } from '../entities/continuation/session_continuation.entity';
import { InworldError } from '../entities/error.entity';
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
  onError: (err: InworldError) => Awaitable<void>;
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

  private scene: Scene;
  private sceneIsLoaded = false;
  private sessionToken: SessionToken;
  private stream: ClientDuplexStream<ProtoPacket, ProtoPacket>;
  private connectionProps: ConnectionProps<InworldPacketT>;

  private disconnectTimeoutId: NodeJS.Timeout;

  private eventFactory = new EventFactory();

  private intervals: NodeJS.Timeout[] = [];
  private packetQueue: QueueItem[] = [];
  private packetQueuePercievedLatency: ProtoPacket[] = [];

  private engineService = new WorldEngineClientGrpcService<InworldPacketT>();
  private stateService = new StateSerializationClientGrpcService();

  private logger = Logger.getInstance();
  private extension: Extension<InworldPacketT>;

  onDisconnect: () => Awaitable<void>;
  onError: (err: InworldError) => Awaitable<void>;
  onMessage: ((message: ProtoPacket) => Awaitable<void>) | undefined;

  readonly conversations: Map<string, ConversationMapItem<InworldPacketT>> =
    new Map();

  constructor(props: ConnectionProps<InworldPacketT>) {
    this.connectionProps = props;
    this.scene = new Scene({
      name: this.connectionProps.name,
    });

    this.initializeHandlers();
    this.initializeExtension();
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

  getCharactersByIds(ids: string[]) {
    return this.scene.getCharactersByIds(ids);
  }

  getCharactersByResourceNames(names: string[]) {
    return this.scene.getCharactersByResourceNames(names);
  }

  setCurrentCharacter(character: Character) {
    this.getEventFactory().setCurrentCharacter(character);
  }

  removeCharacters(names: string[]) {
    this.scene = new Scene({
      ...this.scene,
      characters: this.scene.characters.filter(
        (c) => !names.includes(c.resourceName),
      ),
    });
  }

  async open() {
    if (this.state !== ConnectionState.INACTIVE) return;

    try {
      await this.loadToken();

      let stream: ClientDuplexStream<ProtoPacket, ProtoPacket>;
      let sessionProto: LoadedScene;

      if (this.sceneIsLoaded) {
        stream = this.engineService.reopenSession({
          sessionToken: this.sessionToken,
          onError: this.onError,
          onDisconnect: this.onDisconnect,
          onMessage: this.onMessage,
        });
      } else {
        const { client, sessionContinuation, user } = this.connectionProps;

        [stream, sessionProto] = await this.engineService.openSession({
          client,
          sessionContinuation,
          user,
          name: this.getSceneName(),
          config: this.connectionProps.config,
          extension: this.extension,
          sessionToken: this.sessionToken,
          onError: this.onError,
          onDisconnect: this.onDisconnect,
          onMessage: this.onMessage,
        });

        this.sceneIsLoaded = true;
        this.setSceneFromProtoEvent(sessionProto);
      }

      this.stream = stream;
      this.state = ConnectionState.ACTIVE;
      this.releaseQueue();
      this.scheduleDisconnect();
    } catch (err) {
      this.onError(err);
      this.clearQueue();
    }
  }

  async change(name: string, props?: ChangeSceneProps) {
    if (!this.sceneIsLoaded) {
      throw Error('Unable to change scene that is not loaded yet');
    }

    this.connectionProps = {
      ...this.connectionProps,
      config: {
        ...this.connectionProps.config,
        ...(props?.capabilities && {
          capabilities: Capability.toProto(props.capabilities),
        }),
        ...(props?.gameSessionId && {
          gameSessionId: props.gameSessionId,
        }),
      },
      sessionContinuation: props?.sessionContinuation
        ? new SessionContinuation(props.sessionContinuation)
        : undefined,
    };

    if (!this.isActive()) {
      this.stream = this.engineService.reopenSession({
        sessionToken: this.sessionToken,
        onError: this.onError,
        onDisconnect: this.onDisconnect,
        onMessage: this.onMessage,
      });
    }

    const [, sessionProto] = await this.engineService.updateSession({
      name,
      sessionToken: this.sessionToken,
      connection: this.stream,
      capabilities:
        props?.capabilities && this.connectionProps.config.capabilities,
      gameSessionId: props?.gameSessionId,
      extension: this.extension,
      sessionContinuation: this.connectionProps.sessionContinuation,
      onMessage: this.onMessage,
    });

    this.setSceneFromProtoEvent(sessionProto);
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

    if (!!packet.getText()) {
      this.packetQueuePercievedLatency.push(packet);
    }

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

  addInterval(interval: NodeJS.Timeout) {
    this.intervals.push(interval);
  }

  removeInterval(interval: NodeJS.Timeout) {
    this.intervals = this.intervals.filter((i) => i !== interval);
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
    this.packetQueuePercievedLatency = [];
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
    factory.setCharacters(this.scene.characters);
  }

  private setSceneFromProtoEvent(proto: CurrentSceneStatus) {
    this.scene = Scene.fromProto(proto);

    this.connectionProps.extension?.afterLoadScene?.(proto);
    this.ensureCurrentCharacter();
  }

  private initializeHandlers() {
    this.onDisconnect = async () => {
      this.state = ConnectionState.INACTIVE;

      this.conversations.forEach((conversation) => {
        conversation.state = ConversationState.INACTIVE;
      });

      await this.connectionProps.onDisconnect?.();
    };

    this.onError = this.connectionProps.onError;

    this.onMessage = async (packet: ProtoPacket) => {
      const inworldPacket = this.convertPacketFromProto(packet);
      const conversationId = inworldPacket.packetId.conversationId;
      const conversation =
        conversationId && this.conversations.get(conversationId);

      const sceneStatus = packet.getControl()?.getCurrentSceneStatus();

      // Handle percieved latency
      if (this.packetQueuePercievedLatency.length > 0) {
        let packetQueuePercievedLatencyIndex: number = -1;
        for (let i = 0; i < this.packetQueuePercievedLatency.length; i++) {
          const packetSent: ProtoPacket = this.packetQueuePercievedLatency[i];
          if (
            packet.getPacketId().getCorrelationId() &&
            packet.getPacketId().getCorrelationId() ===
              packetSent.getPacketId().getCorrelationId()
          ) {
            packetQueuePercievedLatencyIndex = i;
            break;
          }
        }
        if (packetQueuePercievedLatencyIndex > -1) {
          const packetSent: ProtoPacket =
            this.packetQueuePercievedLatency[packetQueuePercievedLatencyIndex];

          const duration = calculateTimeDifference(
            packetSent.getTimestamp(),
            packet.getTimestamp(),
          );

          this.sendPerceivedLatencyReport(duration);
          this.packetQueuePercievedLatency.splice(
            packetQueuePercievedLatencyIndex,
            1,
          );
        }
      }

      if (
        packet.getControl()?.getAction() ===
          ControlEvent.Action.CURRENT_SCENE_STATUS &&
        sceneStatus
      ) {
        this.setSceneFromProtoEvent(sceneStatus);
      }

      // Update conversation state.
      if (inworldPacket.control?.conversation && conversation) {
        this.conversations.set(inworldPacket.packetId.conversationId, {
          service: conversation.service,
          state: [
            InworldConversationEventType.STARTED,
            InworldConversationEventType.UPDATED,
          ].includes(inworldPacket.control.conversation.type)
            ? ConversationState.ACTIVE
            : ConversationState.INACTIVE,
        });
      }

      // Handle latency ping pong.
      if (inworldPacket.isPingPongReport()) {
        this.sendPingPongResponse(packet);
        // Don't pass text packet outside.
        return;
      }

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

  private sendPingPongResponse(packet: ProtoPacket) {
    this.send(() => this.getEventFactory().pong(packet));
  }

  private sendPerceivedLatencyReport(latencyPerceived: Duration) {
    this.send(() => this.getEventFactory().perceivedLatency(latencyPerceived));
  }

  private initializeExtension() {
    this.extension = {
      convertPacketFromProto: (proto: ProtoPacket) =>
        InworldPacket.fromProto(proto) as InworldPacketT,
      ...this.connectionProps.extension,
    };
  }
}
