import { credentials, Metadata } from '@grpc/grpc-js';
import { FeedbackClient } from '@proto/ai/inworld/engine/v1/feedback_grpc_pb';
import {
  CreateInteractionFeedbackRequest,
  DeleteInteractionFeedbackRequest,
  InteractionFeedback,
} from '@proto/ai/inworld/engine/v1/feedback_pb';
import { promisify } from 'util';

import { Config } from '../../common/config';
import { SCENE_PATTERN } from '../../common/constants';
import { grpcOptions } from '../../common/helpers';
import { Logger } from '../../common/logger';
import { Feedback } from '../../entities/feedback.entity';
import { SessionToken } from '../../entities/session_token.entity';

export interface CreateInteractionFeedbackProps {
  scene: string;
  correlationId?: string;
  sessionToken: SessionToken;
  interactionId: string;
  interactionFeedback: InteractionFeedback;
}

export interface DeletenteractionFeedbackProps {
  sessionToken: SessionToken;
  name: string;
}

export class FeedbackClientGrpcService {
  private readonly config = Config.getInstance();
  private readonly address = this.config.getHost();
  private readonly ssl = this.config.getSSL();
  private readonly client = new FeedbackClient(
    this.config.getHost(),
    this.ssl ? credentials.createSsl() : credentials.createInsecure(),
    { ...grpcOptions },
  );

  private logger = Logger.getInstance();

  async createInteractionFeedback(
    props: CreateInteractionFeedbackProps,
  ): Promise<Feedback> {
    const {
      scene,
      correlationId = 'default',
      interactionFeedback,
      interactionId,
      sessionToken,
    } = props;
    const { sessionId: session } = sessionToken;
    const workspace = SCENE_PATTERN.exec(scene)[1];

    const metadata = this.getMetadata(sessionToken);
    const request = new CreateInteractionFeedbackRequest()
      .setInteractionFeedback(interactionFeedback)
      .setParent(
        `workspaces/${workspace}/` +
          `sessions/${session}/` +
          `interactions/${interactionId}/` +
          `groups/${correlationId}`,
      );

    const response = await promisify(
      this.client.createInteractionFeedback.bind(this.client),
    )(request, metadata);

    this.logger.debug({
      action: 'Create interaction feedback',
      data: {
        address: this.address,
        ssl: this.ssl,
        metadata: metadata.toJSON(),
        request: request.toObject(),
        response: response.toObject(),
      },
    });

    return Feedback.fromProto(response);
  }

  async deleteInteractionFeedback(
    props: DeletenteractionFeedbackProps,
  ): Promise<void> {
    const { name, sessionToken } = props;

    const metadata = this.getMetadata(sessionToken);
    const request = new DeleteInteractionFeedbackRequest().setName(name);

    const response = await promisify(
      this.client.deleteInteractionFeedback.bind(this.client),
    )(request, metadata);

    this.logger.debug({
      action: 'Delete interaction feedback',
      data: {
        address: this.address,
        ssl: this.ssl,
        metadata: metadata.toJSON(),
        request: request.toObject(),
        response: response.toObject(),
      },
    });
  }
  private getMetadata(sessionToken: SessionToken) {
    const metadata = new Metadata();

    metadata.add('session-id', sessionToken.sessionId);
    metadata.add('authorization', `${sessionToken.type} ${sessionToken.token}`);

    return metadata;
  }
}
