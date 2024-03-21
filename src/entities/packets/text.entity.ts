import { TextEvent as ProtoTextEvent } from '@proto/ai/inworld/packets/packets_pb';

export class TextEvent {
  readonly text: string;
  readonly final: boolean;

  constructor({ text, final }: { text: string; final: boolean }) {
    this.text = text;
    this.final = final;
  }

  static fromProto(proto: ProtoTextEvent) {
    return new TextEvent({
      text: proto.getText(),
      final: proto.getFinal(),
    });
  }
}
