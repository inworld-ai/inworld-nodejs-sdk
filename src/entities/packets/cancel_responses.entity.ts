import { MutationEvent as ProtoMutationEvent } from '@proto/ai/inworld/packets/packets_pb';

export class CancelResponsesEvent {
  readonly interactionId: string | undefined;
  readonly utteranceId: string[] | undefined;

  constructor({
    interactionId,
    utteranceId,
  }: {
    interactionId?: string;
    utteranceId?: string[];
  }) {
    this.interactionId = interactionId;
    this.utteranceId = utteranceId;
  }

  static fromProto(proto: ProtoMutationEvent) {
    return new CancelResponsesEvent({
      interactionId: proto.getCancelResponses().getInteractionId(),
      utteranceId: proto.getCancelResponses().getUtteranceIdList(),
    });
  }
}
