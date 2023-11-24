import { PreviousDialog as ProtoDialog } from '@proto/ai/inworld/engine/world-engine_pb';

export enum DialogParticipant {
  UNKNOWN = 'UNKNOWN',
  PLAYER = 'PLAYER',
  CHARACTER = 'CHARACTER',
}
export interface DialogPhrase {
  talker: DialogParticipant;
  phrase: string;
}

export class DialogTalker {
  static toProto(talker: DialogParticipant) {
    switch (talker) {
      case DialogParticipant.PLAYER:
        return ProtoDialog.DialogParticipant.PLAYER;
      case DialogParticipant.CHARACTER:
        return ProtoDialog.DialogParticipant.CHARACTER;
      default:
        return ProtoDialog.DialogParticipant.UNKNOWN;
    }
  }

  static fromProto(talker: ProtoDialog.DialogParticipant) {
    switch (talker) {
      case ProtoDialog.DialogParticipant.PLAYER:
        return DialogParticipant.PLAYER;
      case ProtoDialog.DialogParticipant.CHARACTER:
        return DialogParticipant.CHARACTER;
      default:
        return DialogParticipant.UNKNOWN;
    }
  }
}

export class PreviousDialog {
  readonly phrases: DialogPhrase[];

  constructor(phrases: DialogPhrase[]) {
    this.phrases = phrases;
  }

  toProto() {
    const phrases = this.phrases.map((item: DialogPhrase) =>
      new ProtoDialog.Phrase()
        .setPhrase(item.phrase)
        .setTalker(DialogTalker.toProto(item.talker)),
    );
    return new ProtoDialog().setPhrasesList(phrases);
  }

  static fromProto(dialog: ProtoDialog) {
    return new PreviousDialog(
      dialog.getPhrasesList().map(
        (item: ProtoDialog.Phrase) =>
          ({
            talker: DialogTalker.fromProto(item.getTalker()),
            phrase: item.getPhrase(),
          } as DialogPhrase),
      ),
    );
  }
}
