import { DislikeType, Feedback } from '../entities/feedback.entity';
import { InworldPacket } from '../entities/inworld_packet.entity';
import { ConnectionService } from './connection.service';
import { FeedbackClientGrpcService } from './gprc/feedback_client_grpc.service';

interface SendFeedbackProps {
  comment?: string;
  isLike?: boolean;
  types?: DislikeType[];
  interactionId: string;
  characterId?: string;
}

export interface BaseFeedbackProps {
  interactionId: string;
  characterId?: string;
}

export interface FeedbackLikeProps extends BaseFeedbackProps {}

export interface FeedbackDislikeProps extends BaseFeedbackProps {
  comment?: string;
  types?: DislikeType[];
}

export class FeedbackService<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  private connection: ConnectionService<InworldPacketT>;
  private grpcService = new FeedbackClientGrpcService();

  constructor(connection: ConnectionService<InworldPacketT>) {
    this.connection = connection;
  }

  async like(props: FeedbackLikeProps) {
    return this.send({ ...props, isLike: true });
  }

  async dislike(props: FeedbackDislikeProps) {
    return this.send({ ...props, isLike: false });
  }

  async undo(name: string) {
    const sessionToken = await this.connection.ensureSessionToken();

    return this.grpcService.deleteInteractionFeedback({
      name,
      sessionToken,
    });
  }

  private async send(props: SendFeedbackProps) {
    const characterId =
      props.characterId ?? (await this.connection.getCurrentCharacter()).id;
    const sessionToken = await this.connection.ensureSessionToken();
    const interactionFeedback = new Feedback({
      isLike: props.isLike,
      types: props.types,
      comment: props.comment,
    }).toProto();

    return this.grpcService.createInteractionFeedback({
      characterId,
      interactionFeedback,
      interactionId: props.interactionId,
      sessionToken,
    });
  }
}
