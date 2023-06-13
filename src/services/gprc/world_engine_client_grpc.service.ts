import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';
import { InworldPacket as ProtoPacket } from '@proto/packets_pb';
import { WorldEngineClient } from '@proto/world-engine_grpc_pb';
import {
  CapabilitiesRequest,
  ClientRequest,
  LoadSceneRequest,
  LoadSceneResponse,
  UserRequest,
} from '@proto/world-engine_pb';
import { promisify } from 'util';

import { Config } from '../../common/config';
import { CLIENT_ID } from '../../common/constants';
import { Awaitable } from '../../common/data_structures';
import { grpcOptions } from '../../common/helpers';
import { Logger } from '../../common/logger';
import { SessionToken } from '../../entities/session_token.entity';

export interface LoadSceneProps {
  name: string;
  client?: ClientRequest;
  user?: UserRequest;
  sessionToken: SessionToken;
  capabilities: CapabilitiesRequest;
  setLoadSceneProps?: (request: LoadSceneRequest) => LoadSceneRequest;
}
export interface SessionProps {
  sessionToken: SessionToken;
  onDisconnect?: () => void;
  onError?: (err: ServiceError) => void;
  onMessage?: (message: ProtoPacket) => Awaitable<void>;
}

export class WorldEngineClientGrpcService {
  private readonly config = Config.getInstance();
  private readonly address = this.config.getEngineHost();
  private readonly ssl = this.config.getEngineSsl();
  private readonly credentials = this.ssl
    ? credentials.createSsl()
    : credentials.createInsecure();
  private readonly grpcOptions = { ...grpcOptions };
  private readonly client = new WorldEngineClient(
    this.address,
    this.credentials,
    this.grpcOptions,
  );

  private logger = Logger.getInstance();

  public async loadScene(props: LoadSceneProps) {
    const { name, sessionToken, user, capabilities } = props;

    const request = new LoadSceneRequest();
    request.setName(name);
    request.setCapabilities(capabilities);

    if (user) {
      request.setUser(user);
    }

    request.setClient(
      new ClientRequest().setId(props.client?.getId() || CLIENT_ID),
    );

    const metadata = this.getMetadata(sessionToken);
    const finalRequest = props.setLoadSceneProps
      ? props.setLoadSceneProps(request)
      : request;

    const response: LoadSceneResponse = await promisify(
      this.client.loadScene.bind(this.client),
    )(finalRequest, metadata);

    this.logger.debug({
      action: 'Load scene',
      data: {
        address: this.address,
        ssl: this.ssl,
        grpcOptions: this.grpcOptions,
        metadata: metadata.toJSON(),
        request: request.toObject(),
        response: response.toObject(),
      },
      sessionId: sessionToken.sessionId,
    });

    return response;
  }

  public session(props: SessionProps) {
    const { sessionToken, onDisconnect, onError, onMessage } = props;

    const metadata = this.getMetadata(sessionToken);
    const connection = this.client.session(metadata);

    this.logger.debug({
      action: 'Open session',
      data: {
        address: this.address,
        ssl: this.ssl,
        grpcOptions: this.grpcOptions,
        metadata: metadata.toJSON(),
      },
      sessionId: sessionToken.sessionId,
    });

    if (onMessage) {
      connection.on('data', onMessage);
    }

    if (onDisconnect) {
      connection.on('close', onDisconnect);
    }

    if (onError) {
      connection.on('error', (err: ServiceError) => {
        onError(err);
        connection.end();
      });
    }

    return connection;
  }

  private getMetadata(sessionToken: SessionToken) {
    const metadata = new Metadata();

    metadata.add('session-id', sessionToken.sessionId);
    metadata.add('authorization', `${sessionToken.type} ${sessionToken.token}`);

    return metadata;
  }
}
