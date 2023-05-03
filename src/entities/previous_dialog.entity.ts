import { PreviousDialog as ProtoDialog } from '@proto/world-engine_pb';

export enum DialogParticipant {
  UNKNOWN = 'UNKNOWN',
  PLAYER = 'PLAYER',
  CHARACTER = 'CHARACTER',
}
export interface DialogPhrase {
  talker: DialogParticipant;
  phrase: string;
}

export class PreviousDialog {
  private phrases: DialogPhrase[];

  constructor(phrases: DialogPhrase[]) {
    this.phrases = phrases;
  }

  toProto() {
    const phrases = this.phrases.map((item: DialogPhrase) =>
      new ProtoDialog.Phrase().setPhrase(item.phrase).setTalker(item.talker),
    );
    return new ProtoDialog().setPhrasesList(phrases);
  }

  static fromProto(dialog: ProtoDialog) {
    return new PreviousDialog(
      dialog.getPhrasesList().map(
        (item: ProtoDialog.Phrase) =>
          ({
            talker: item.getTalker(),
            phrase: item.getPhrase(),
          } as DialogPhrase),
      ),
    );
  }
}
