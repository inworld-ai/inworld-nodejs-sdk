import { credentials, Metadata } from '@grpc/grpc-js';
import { FeedbackClient } from '@proto/ai/inworld/engine/v1/feedback_grpc_pb';
import {
  CreateInteractionFeedbackRequest,
  InteractionFeedback,
} from '@proto/ai/inworld/engine/v1/feedback_pb';
import { promisify } from 'util';

import { Config } from '../../common/config';
import { grpcOptions } from '../../common/helpers';
import { Logger } from '../../common/logger';
import { SessionToken } from '../../entities/session_token.entity';

export interface createInteractionFeedbackProps {
  sessionToken: SessionToken;
  characterId: string;
  interactionId: string;
  interactionFeedback: InteractionFeedback;
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

  public async createInteractionFeedback(
    props: createInteractionFeedbackProps,
  ): Promise<void> {
    const { characterId, interactionFeedback, interactionId, sessionToken } =
      props;
    const { sessionId: session } = sessionToken;

    const metadata = this.getMetadata(sessionToken);
    const request = new CreateInteractionFeedbackRequest()
      .setInteractionFeedback(interactionFeedback)
      .setParent(
        `session/${session}/agents/${characterId}/interactions/${interactionId}`,
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

    return response;
  }

  private getMetadata(sessionToken: SessionToken) {
    const metadata = new Metadata();

    metadata.add('session-id', sessionToken.sessionId);
    metadata.add('authorization', `${sessionToken.type} ${sessionToken.token}`);

    return metadata;
  }
}
