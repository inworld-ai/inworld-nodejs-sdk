import { PacketId as ProtoPacketId } from '@proto/ai/inworld/packets/packets_pb';

export class PacketId {
  readonly packetId: string;
  readonly utteranceId: string;
  readonly interactionId: string;
  readonly correlationId: string | undefined;

  constructor({
    packetId,
    utteranceId,
    interactionId,
    correlationId,
  }: {
    packetId: string;
    utteranceId: string;
    interactionId: string;
    correlationId?: string;
  }) {
    this.packetId = packetId;
    this.utteranceId = utteranceId;
    this.interactionId = interactionId;
    this.correlationId = correlationId;
  }

  static fromProto(proto: ProtoPacketId) {
    return new PacketId({
      packetId: proto.getPacketId(),
      utteranceId: proto.getUtteranceId(),
      interactionId: proto.getInteractionId(),
      correlationId: proto.getCorrelationId(),
    });
  }
}
