import { credentials, Metadata } from '@grpc/grpc-js';
import { StateSerializationClient } from '@proto/ai/inworld/engine/v1/state_serialization_grpc_pb';
import { GetSessionStateRequest } from '@proto/ai/inworld/engine/v1/state_serialization_pb';
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

export interface SessionState {
  state?: string;
  stateU8?: Uint8Array;
  creationTime?: string;
  version?: {
    interactionId?: string;
  };
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

  async getSessionState(props: getSessionStateProps): Promise<SessionState> {
    const { scene, sessionToken } = props;

    const workspace = SCENE_PATTERN.exec(scene)[1];
    const name = `workspaces/${workspace}/sessions/${sessionToken.sessionId}`;
    const request = new GetSessionStateRequest().setName(name);
    const metadata = this.getMetadata(sessionToken);

    const response = await promisify(
      this.client.getSessionState.bind(this.client),
    )(request, metadata);

    this.logger.debug({
      action: 'Get session state',
      data: {
        address: this.address,
        ssl: this.ssl,
        request: request.toObject(),
        response: response.toObject(),
      },
      sessionId: sessionToken.sessionId,
    });

    const interactionId = response.getVersion()?.getInteractionId();

    return {
      state: response.getState_asB64(),
      stateU8: response.getState_asU8(),
      creationTime: response.getCreationTime()?.toDate().toISOString(),
      ...(interactionId && {
        version: { interactionId },
      }),
    } as SessionState;
  }

  private getMetadata(sessionToken: SessionToken) {
    const metadata = new Metadata();

    metadata.add('authorization', `${sessionToken.type} ${sessionToken.token}`);

    return metadata;
  }
}
