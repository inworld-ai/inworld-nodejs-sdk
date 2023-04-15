import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';
import { InworldPacket } from '@proto/packets_pb';
import { WorldEngineClient } from '@proto/world-engine_grpc_pb';
import {
  CapabilitiesRequest,
  ClientRequest,
  LoadSceneRequest,
  UserRequest,
} from '@proto/world-engine_pb';
import { promisify } from 'util';

import { Config } from '../../common/config';
import { CLIENT_ID } from '../../common/constants';
import { grpcOptions } from '../../common/helpers';
import { Awaitable } from '../../common/interfaces';
import { SessionToken } from '../../entities/session_token.entity';

export interface LoadSceneProps {
  name: string;
  client?: ClientRequest;
  user?: UserRequest;
  sessionToken: SessionToken;
  capabilities: CapabilitiesRequest;
}
export interface SessionProps {
  sessionToken: SessionToken;
  onDisconnect?: () => void;
  onError?: (err: ServiceError) => void;
  onMessage?: (message: InworldPacket) => Awaitable<void>;
}

export class WorldEngineClientGrpcService {
  private readonly config = Config.getInstance();
  private readonly client = new WorldEngineClient(
    this.config.getEngineHost(),
    this.config.getEngineSsl()
      ? credentials.createSsl()
      : credentials.createInsecure(),
    { ...grpcOptions },
  );

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

    return promisify(this.client.loadScene.bind(this.client))(
      request,
      this.getMetadata(sessionToken),
    );
  }

  public session(props: SessionProps) {
    const { sessionToken, onDisconnect, onError, onMessage } = props;

    const connection = this.client.session(this.getMetadata(sessionToken));

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
