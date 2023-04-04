import { ServiceError } from '@grpc/grpc-js';
import {
  CapabilitiesRequest,
  ClientRequest,
  UserRequest,
} from '@proto/world-engine_pb';

import {
  ApiKey,
  Awaitable,
  Capabilities,
  Client,
  ClientConfiguration,
  GenerateSessionTokenFn,
  InternalClientConfiguration,
  User,
} from '../common/interfaces';
import { InworldPacket } from '../entities/inworld_packet.entity';
import { ConnectionService } from '../services/connection.service';
import { InworldConnectionService } from '../services/inworld_connection.service';

export class InworldClient {
  private apiKey: ApiKey | undefined;
  private user: UserRequest;
  private scene: string = '';
  private client: ClientRequest;
  private config: InternalClientConfiguration;

  private generateSessionTokenFn: GenerateSessionTokenFn;

  private onDisconnect: (() => void) | undefined;
  private onError: ((err: ServiceError) => void) | undefined;
  private onMessage: ((message: InworldPacket) => Awaitable<void>) | undefined;

  constructor() {
    this.config = {
      capabilities: this.ensureCapabilities(),
    };
  }

  setApiKey(apiKey: ApiKey) {
    this.apiKey = apiKey;

    return this;
  }

  setUser(user: User) {
    this.user = new UserRequest().setName(user.fullName);

    return this;
  }

  setClient(client: Client) {
    this.client = new ClientRequest().setId(client.id);

    return this;
  }

  setConfiguration(config: ClientConfiguration) {
    this.config = {
      ...config,
      capabilities: this.ensureCapabilities(config.capabilities),
    };

    return this;
  }

  setScene(name: string) {
    this.scene = name;

    return this;
  }

  setOnDisconnect(fn: () => void) {
    this.onDisconnect = fn;

    return this;
  }

  setOnError(fn: (err: ServiceError) => void) {
    this.onError = fn;

    return this;
  }

  setOnMessage(fn: (message: InworldPacket) => Awaitable<void>) {
    this.onMessage = fn;

    return this;
  }

  setGenerateSessionToken(generateSessionToken: GenerateSessionTokenFn) {
    this.generateSessionTokenFn = generateSessionToken;

    return this;
  }

  async generateSessionToken() {
    this.validateApiKey();

    return new ConnectionService({
      apiKey: this.apiKey!,
    }).generateSessionToken();
  }

  build() {
    this.validate();

    const connection = new ConnectionService({
      apiKey: this.apiKey,
      name: this.scene,
      user: this.user,
      client: this.client,
      config: this.config,
      onError: this.onError,
      onMessage: this.onMessage,
      onDisconnect: this.onDisconnect,
      generateSessionToken: this.generateSessionTokenFn,
    });

    return new InworldConnectionService(connection);
  }

  private ensureCapabilities(capabilities?: Capabilities) {
    return new CapabilitiesRequest()
      .setAudio(capabilities?.audio ?? true)
      .setEmotions(capabilities?.emotions ?? false)
      .setInterruptions(capabilities?.interruptions ?? false)
      .setText(true)
      .setTriggers(true);
  }

  private validateApiKey() {
    if (!this.apiKey?.key || !this.apiKey.secret) {
      throw Error('Api key is required');
    }
  }

  private validate() {
    if (!this.generateSessionTokenFn) {
      this.validateApiKey();
    }

    if (!this.scene) {
      throw Error('Scene name is required');
    }
  }
}
