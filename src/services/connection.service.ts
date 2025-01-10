import { ClientDuplexStream } from '@grpc/grpc-js';
import { ClientRequest } from '@proto/ai/inworld/engine/world-engine_pb';
import {
  ControlEvent as ProtoControlEvent,
  CurrentSceneStatus,
  InworldPacket as ProtoPacket,
  LoadedScene,
} from '@proto/ai/inworld/packets/packets_pb';

import {
  ApiKey,
  Awaitable,
  ChangeSceneProps,
  ClientConfiguration,
  ConnectionState,
  ConversationState,
  GenerateSessionTokenFn,
  GetterSetter,
  InternalClientConfiguration,
  InworlControlAction,
  InworldConversationEventType,
  InworldPacketType,
  User,
} from '../common/data_structures';
import {
  ConvesationInterface,
  Extension,
} from '../common/data_structures/extension';
import { Logger } from '../common/logger';
import { Capability } from '../entities/capability.entity';
import { Character } from '../entities/character.entity';
import { SessionContinuation } from '../entities/continuation/session_continuation.entity';
import { InworldError } from '../entities/error.entity';
import { ControlEvent } from '../entities/packets/control.entity';
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
  config?: ClientConfiguration;
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

  private config: InternalClientConfiguration;
  private scene: Scene;
  private sceneIsLoaded = false;
  private sessionToken: SessionToken;
  private stream: ClientDuplexStream<ProtoPacket, ProtoPacket>;
  private connectionProps: ConnectionProps<InworldPacketT>;

  private disconnectTimeoutId: NodeJS.Timeout;

  private eventFactory = new EventFactory();

  private intervals: NodeJS.Timeout[] = [];
  private packetQueue: QueueItem[] = [];
  private packetQueuePercievedLatency: InworldPacket[] = [];

  private engineService = new WorldEngineClientGrpcService<InworldPacketT>();
  private stateService = new StateSerializationClientGrpcService();

  private logger = Logger.getInstance();
  private extension: Extension<InworldPacketT>;

  private MAX_LATENCY_QUEUE_SIZE = 50;

  onDisconnect: () => Awaitable<void>;
  onError: (err: InworldError) => Awaitable<void>;
  onMessage: ((message: ProtoPacket) => Awaitable<void>) | undefined;

  readonly conversations: Map<
    string,
    {
      service: ConvesationInterface<InworldPacketT>;
      state: ConversationState;
    }
  > = new Map();

  constructor(props: ConnectionProps<InworldPacketT>) {
    this.connectionProps = props;
    this.scene = new Scene({
      name: this.connectionProps.name,
    });
    this.config = this.buildConfiguration(this.connectionProps.config);

    this.initializeHandlers();
    this.initializeExtension();
  }

  isActive() {
    return this.state === ConnectionState.ACTIVE;
  }

  isAutoReconnected() {
    return this.config.connection?.autoReconnect ?? true;
  }

  getSceneName() {
    return this.scene.name;
  }

  getClientConfig() {
    return this.connectionProps.config;
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
          config: this.config,
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
          capabilities: props.capabilities,
        }),
        ...(props?.gameSessionId && {
          gameSessionId: props.gameSessionId,
        }),
      },
      sessionContinuation: props?.sessionContinuation
        ? new SessionContinuation(props.sessionContinuation)
        : undefined,
    };

    this.config = this.buildConfiguration(this.connectionProps.config);

    if (!this.isActive()) {
      this.stream = this.engineService.reopenSession({
        sessionToken: this.sessionToken,
        onError: this.onError,
        onDisconnect: this.onDisconnect,
        onMessage: this.onMessage,
      });
    }

    const [, sessionProto] = await this.engineService.updateSession({
      name: name !== this.getSceneName() ? name : undefined,
      sessionToken: this.sessionToken,
      connection: this.stream,
      capabilities: props?.capabilities && this.config.capabilities,
      gameSessionId: props?.gameSessionId,
      extension: this.extension,
      sessionContinuation: this.connectionProps.sessionContinuation,
      onMessage: this.onMessage,
    });

    if (sessionProto) {
      this.setSceneFromProtoEvent(sessionProto);
    }
  }

  async send(getPacket: () => ProtoPacket, props: { force?: boolean } = {}) {
    try {
      this.cancelScheduler();

      if (!this.isActive() && !this.isAutoReconnected()) {
        throw Error('Unable to send data due inactive connection');
      }

      return this.write(getPacket, props);
    } catch (err) {
      this.onError(err);
    }
  }

  private async write(
    getPacket: () => ProtoPacket,
    props: { force?: boolean } = {},
  ) {
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
      const item = {
        getPacket,
        afterWriting: (protoPacket: ProtoPacket) => {
          packet = protoPacket;
        },
      };

      if (props.force) {
        this.packetQueue.unshift(item);
      } else {
        this.packetQueue.push(item);
      }

      await this.open();
    }

    return resolvePacket();
  }

  private writeToStream(getPacket: () => ProtoPacket) {
    const packet = getPacket();
    const inworldPacket = InworldPacket.fromProto(packet);

    if (
      inworldPacket.isNonSpeechPacket() ||
      inworldPacket.isPlayerTypeInText() ||
      inworldPacket.isPushToTalkAudioSessionStart()
    ) {
      this.pushToPerceivedLatencyQueue([inworldPacket]);
    } else if (inworldPacket.isAudioSessionEnd()) {
      const { indexStart, indexEnd } = this.findLastAudioSessionIndexes();

      if (indexStart >= 0 && indexEnd < indexStart) {
        this.pushToPerceivedLatencyQueue([inworldPacket]);
      }
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

  // Handle percieved latency
  markPacketAsHandled(packet: InworldPacket) {
    if (!this.config.capabilities.getPerceivedLatencyReport()) {
      return;
    }

    const sentIndex = this.packetQueuePercievedLatency.findIndex((item) => {
      const { packetId } = item;
      const relyOnSpeech =
        this.config.capabilities.getAudio() &&
        packet.isAudio() &&
        (item.isSpeechRecognitionResult() ||
          item.isPlayerTypeInText() ||
          item.isAudioSessionEnd());
      const relyOnNonSpeech =
        item.isNonSpeechPacket() || !this.config.capabilities.getAudio();

      return (
        (relyOnSpeech || relyOnNonSpeech) &&
        packetId.interactionId &&
        packetId.interactionId === packet.packetId.interactionId
      );
    });

    if (sentIndex > -1) {
      this.send(() =>
        this.getEventFactory().perceivedLatency({
          sent: this.packetQueuePercievedLatency[sentIndex],
          received: packet,
        }),
      );
      this.packetQueuePercievedLatency.splice(sentIndex, 1);
    }
  }

  private scheduleDisconnect() {
    if (this.config?.connection?.disconnectTimeout) {
      this.cancelScheduler();
      this.disconnectTimeoutId = setTimeout(
        () => this.close(),
        this.config.connection.disconnectTimeout,
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

      if (inworldPacket.isSpeechRecognitionResult()) {
        const { indexStart, indexEnd } = this.findLastAudioSessionIndexes();

        if (indexStart >= 0) {
          const audioSessionEnd = this.packetQueuePercievedLatency?.[indexEnd];
          const upatedAudioSessionEnd = new InworldPacket({
            packetId: {
              ...audioSessionEnd?.packetId,
              interactionId: inworldPacket.packetId.interactionId,
            },
            control: new ControlEvent({
              action: InworlControlAction.AUDIO_SESSION_END,
            }),
            routing: audioSessionEnd?.routing,
            date: audioSessionEnd?.date,
            type: InworldPacketType.CONTROL,
            proto: new ProtoPacket(),
          });

          this.pushToPerceivedLatencyQueue([upatedAudioSessionEnd]);
        } else {
          this.pushToPerceivedLatencyQueue([inworldPacket]);
        }

        // const audioSessionEnds = this.packetQueuePercievedLatency.filter(
        //   // Find last audio session end packet without interaction id.
        //   // If interaction id is present, we already have a pair.
        //   (p) => p.isAudioSessionEnd() && !p.packetId.interactionId,
        // );
        // const audioSessionEnd = audioSessionEnds?.[audioSessionEnds.length - 1];

        // if (
        //   audioSessionEnd &&
        //   InworldPacket.closeEnough(audioSessionEnd, inworldPacket)
        // ) {
        //   const upatedAudioSessionEnd = new InworldPacket({
        //     packetId: {
        //       ...audioSessionEnd.packetId,
        //       interactionId: inworldPacket.packetId.interactionId,
        //     },
        //     control: new ControlEvent({
        //       action: InworlControlAction.AUDIO_SESSION_END,
        //     }),
        //     routing: audioSessionEnd.routing,
        //     date: audioSessionEnd.date,
        //     type: InworldPacketType.CONTROL,
        //   });

        //   this.pushToPerceivedLatencyQueue([upatedAudioSessionEnd]);
        // } else {
        //   this.pushToPerceivedLatencyQueue([inworldPacket]);
        // }
      }

      if (
        packet.getControl()?.getAction() ===
          ProtoControlEvent.Action.CURRENT_SCENE_STATUS &&
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
        this.send(() => this.getEventFactory().pong(packet), { force: true });
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

  private initializeExtension() {
    this.extension = {
      convertPacketFromProto: (proto: ProtoPacket) =>
        InworldPacket.fromProto(proto) as InworldPacketT,
      ...this.connectionProps.extension,
    };
  }

  private buildConfiguration(
    clientConfig: ClientConfiguration = {},
  ): InternalClientConfiguration {
    const { connection = {}, capabilities = {}, ...restConfig } = clientConfig;

    return {
      ...restConfig,
      connection,
      capabilities: Capability.toProto(capabilities),
    };
  }

  private pushToPerceivedLatencyQueue(packets: InworldPacket[]) {
    if (!this.config.capabilities.getPerceivedLatencyReport()) {
      return;
    }

    this.packetQueuePercievedLatency.push(...packets);

    if (this.packetQueuePercievedLatency.length > this.MAX_LATENCY_QUEUE_SIZE) {
      this.packetQueuePercievedLatency.shift();
    }
  }

  private findLastAudioSessionIndexes() {
    let indexStart = -1;
    let indexEnd = -1;

    for (
      let i = this.packetQueuePercievedLatency.length - 1;
      i >= 0 && indexStart < 0;
      i--
    ) {
      if (this.packetQueuePercievedLatency[i].isPushToTalkAudioSessionStart()) {
        indexStart = i;
      }
    }

    for (
      let i = this.packetQueuePercievedLatency.length - 1;
      i >= 0 && indexEnd < 0;
      i--
    ) {
      if (this.packetQueuePercievedLatency[i].isAudioSessionEnd()) {
        indexEnd = i;
      }
    }

    return { indexStart, indexEnd };
  }
}
