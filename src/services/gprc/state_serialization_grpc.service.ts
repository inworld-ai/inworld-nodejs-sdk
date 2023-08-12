import { credentials, Metadata } from '@grpc/grpc-js';
import { StateSerializationClient } from '@proto/state_serialization_grpc_pb';
import {
  GetSessionStateRequest,
  SessionState,
} from '@proto/state_serialization_pb';
import { promisify } from 'util';

import { Config } from '../../common/config';
import { SCENE_PATTERN } from '../../common/constants';
import { grpcOptions } from '../../common/helpers';
import { Logger } from '../../common/logger';
import { SessionToken } from '../../entities/session_token.entity';

export interface getSessionStateProps {
  sessionToken: SessionToken;
  scene: string;
}

export class StateSerializationClientGrpcService {
  private readonly config = Config.getInstance();
  private readonly address = this.config.getHost();
  private readonly ssl = this.config.getSSL();
  private readonly client = new StateSerializationClient(
    this.config.getHost(),
    this.ssl ? credentials.createSsl() : credentials.createInsecure(),
    { ...grpcOptions },
  );

  private logger = Logger.getInstance();

  public async getSessionState(
    props: getSessionStateProps,
  ): Promise<SessionState> {
    const { scene, sessionToken } = props;

    const resource = `workspaces/${SCENE_PATTERN.exec(scene)[1]}`;
    const name = `workspaces/${resource}/sessions/${sessionToken.sessionId}`;
    const request = new GetSessionStateRequest().setName(name);
    const metadata = this.getMetadata(sessionToken);

    const response: SessionState = await promisify(
      this.client.getSessionState.bind(this.client),
    )(request, metadata);

    this.logger.debug({
      action: 'Get session state',
      data: {
        address: this.address,
        ssl: this.ssl,
        metadata: metadata.toJSON(),
        request: request.toObject(),
        response: response.toObject(),
      },
    });

    return response;
  }

  private getMetadata(sessionToken: SessionToken) {
    const metadata = new Metadata();

    metadata.add('session-id', sessionToken.sessionId);
    metadata.add('authorization', `${sessionToken.type} ${sessionToken.token}`);

    return metadata;
  }
}
