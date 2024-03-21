import { ActionEvent as ProtoActionEvent } from '@proto/ai/inworld/packets/packets_pb';

export class NarratedAction {
  readonly text: string;

  constructor({ text }: { text: string }) {
    this.text = text;
  }

  static fromProto(proto: ProtoActionEvent) {
    return new NarratedAction({
      text: proto.getNarratedAction().getContent(),
    });
  }
}
