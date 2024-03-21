import { ServiceError } from '@grpc/grpc-js';
import { CapabilitiesConfiguration } from '@proto/ai/inworld/engine/configuration/configuration_pb';
import { ClientRequest } from '@proto/ai/inworld/engine/world-engine_pb';

import {
  ApiKey,
  Awaitable,
  Capabilities,
  Client,
  ClientConfiguration,
  Extension,
  GenerateSessionTokenFn,
  GetterSetter,
  InternalClientConfiguration,
  User,
} from '../common/data_structures';
import { SCENE_HAS_INVALID_FORMAT } from '../common/errors';
import { Logger } from '../common/logger';
import {
  SessionContinuation,
  SessionContinuationProps,
} from '../entities/continuation/session_continuation.entity';
import { InworldPacket } from '../entities/packets/inworld_packet.entity';
import { Session } from '../entities/session.entity';
import { sceneHasValidFormat } from '../guard/scene';
import { ConnectionService } from '../services/connection.service';
import { InworldConnectionService } from '../services/inworld_connection.service';

export class InworldClient<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  private apiKey: ApiKey | undefined;
  private user: User;
  private scene: string = '';
  private client: ClientRequest;
  private config: ClientConfiguration = {};
  private sessionContinuation: SessionContinuation;

  private generateSessionTokenFn: GenerateSessionTokenFn;
  private sessionGetterSetter: GetterSetter<Session>;

  private onDisconnect: (() => Awaitable<void>) | undefined;
  private onError: ((err: ServiceError) => Awaitable<void>) | undefined;
  private onMessage: ((message: InworldPacketT) => Awaitable<void>) | undefined;

  private extension: Extension<InworldPacketT>;

  private logger = Logger.getInstance();

  constructor() {
    this.onError = (err: ServiceError) => {
      this.logError(err);
      console.error(err);
    };
  }

  setApiKey(apiKey: ApiKey) {
    this.apiKey = apiKey;

    return this;
  }

  setUser(user: User) {
    this.user = user;

    return this;
  }

  setClient(client: Client) {
    this.client = new ClientRequest().setId(client.id);

    return this;
  }

  setConfiguration(config: ClientConfiguration) {
    this.config = config;

    return this;
  }

  setScene(name: string) {
    this.scene = name;

    return this;
  }

  setOnDisconnect(fn: () => Awaitable<void>) {
    this.onDisconnect = fn;

    return this;
  }

  setOnError(fn: (err: ServiceError) => Awaitable<void>) {
    this.onError = async (err: ServiceError) => {
      this.logError(err);
      await fn(err);
    };

    return this;
  }

  setOnMessage(fn: (message: InworldPacketT) => Awaitable<void>) {
    this.onMessage = fn;

    return this;
  }

  setGenerateSessionToken(generateSessionToken: GenerateSessionTokenFn) {
    this.generateSessionTokenFn = generateSessionToken;

    return this;
  }

  setOnSession(props: GetterSetter<Session>) {
    this.sessionGetterSetter = props;

    return this;
  }

  setExtension(extension: Extension<InworldPacketT>) {
    this.extension = extension;

    return this;
  }

  setSessionContinuation(sessionContinuation: SessionContinuationProps) {
    this.sessionContinuation = new SessionContinuation(sessionContinuation);

    return this;
  }

  async generateSessionToken() {
    this.validate();

    return new ConnectionService({
      apiKey: this.apiKey,
      name: this.scene,
      onError: this.onError,
    }).generateSessionToken();
  }

  build() {
    this.validate();

    const connection = new ConnectionService({
      apiKey: this.apiKey,
      name: this.scene,
      user: this.user,
      client: this.client,
      config: this.buildConfiguration(),
      onError: this.onError,
      onMessage: this.onMessage,
      onDisconnect: this.onDisconnect,
      generateSessionToken: this.generateSessionTokenFn,
      sessionGetterSetter: this.sessionGetterSetter,
      sessionContinuation: this.sessionContinuation,
      extension: this.extension,
    });

    return new InworldConnectionService<InworldPacketT>(connection);
  }

  private buildConfiguration(): InternalClientConfiguration {
    const { connection = {}, capabilities = {}, ...restConfig } = this.config;

    return {
      ...restConfig,
      connection,
      capabilities: this.buildCapabilities(capabilities),
    };
  }

  private buildCapabilities(
    capabilities: Capabilities,
  ): CapabilitiesConfiguration {
    const request = new CapabilitiesConfiguration()
      .setAudio(capabilities.audio ?? true)
      .setEmotions(capabilities.emotions ?? false)
      .setInterruptions(capabilities.interruptions ?? false)
      .setNarratedActions(capabilities.narratedActions ?? false)
      .setPhonemeInfo(capabilities.phonemes ?? false)
      .setSilenceEvents(capabilities.silence ?? false);

    return request;
  }

  private validateApiKey() {
    if (!this.apiKey?.key || !this.apiKey.secret) {
      throw Error('Api key is required');
    }
  }

  private validateScene() {
    if (!this.scene) {
      throw Error('Scene name is required');
    }

    if (!sceneHasValidFormat(this.scene)) {
      throw Error(SCENE_HAS_INVALID_FORMAT);
    }
  }

  private validate() {
    if (!this.generateSessionTokenFn) {
      this.validateApiKey();
    }

    this.validateScene();
  }

  private logError = (err: ServiceError) => {
    this.logger.error(err);
  };
}
