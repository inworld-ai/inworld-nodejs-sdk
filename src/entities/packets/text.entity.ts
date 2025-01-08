import { TextEvent as ProtoTextEvent } from '@proto/ai/inworld/packets/packets_pb';

import { InworldTextPacketType } from '../../common/data_structures';

export class TextEvent {
  readonly text: string;
  readonly final: boolean;
  readonly type: InworldTextPacketType;

  constructor({
    text,
    final,
    type = InworldTextPacketType.TYPED_IN,
  }: {
    text: string;
    final: boolean;
    type?: InworldTextPacketType;
  }) {
    this.text = text;
    this.final = final;
    this.type = type;
  }

  static fromProto(proto: ProtoTextEvent) {
    return new TextEvent({
      text: proto.getText(),
      final: proto.getFinal(),
      type: TextEvent.getType(proto.getSourceType()),
    });
  }

  private static getType(protoType: ProtoTextEvent.SourceType) {
    switch (protoType) {
      case ProtoTextEvent.SourceType.SPEECH_TO_TEXT:
        return InworldTextPacketType.SPEECH_TO_TEXT;
      case ProtoTextEvent.SourceType.TYPED_IN:
        return InworldTextPacketType.TYPED_IN;
      case ProtoTextEvent.SourceType.GENERATED:
        return InworldTextPacketType.GENERATED;
      case ProtoTextEvent.SourceType.FILLER:
        return InworldTextPacketType.FILLER;
      default:
        return InworldTextPacketType.UNKNOWN;
    }
  }
}
