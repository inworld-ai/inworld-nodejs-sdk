import { Actor, DialogHistory } from '@proto/ai/inworld/packets/packets_pb';

export enum DialogParticipant {
  UNKNOWN = 'UNKNOWN',
  PLAYER = 'PLAYER',
  CHARACTER = 'CHARACTER',
}
export interface DialogPhrase {
  talker: DialogParticipant;
  phrase: string;
}

export class DialogActor {
  static toProto(talker: DialogParticipant) {
    switch (talker) {
      case DialogParticipant.PLAYER:
        return new Actor().setType(Actor.Type.PLAYER);
      case DialogParticipant.CHARACTER:
        return new Actor().setType(Actor.Type.AGENT);
      default:
        return new Actor().setType(Actor.Type.UNKNOWN);
    }
  }

  static fromProto(actor: Actor) {
    switch (actor.getType()) {
      case Actor.Type.PLAYER:
        return DialogParticipant.PLAYER;
      case Actor.Type.AGENT:
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
      new DialogHistory.HistoryItem()
        .setText(item.phrase)
        .setActor(DialogActor.toProto(item.talker)),
    );
    return new DialogHistory().setHistoryList(phrases);
  }

  static fromProto(dialog: DialogHistory) {
    return new PreviousDialog(
      dialog.getHistoryList().map(
        (item: DialogHistory.HistoryItem) =>
          ({
            talker: DialogActor.fromProto(item.getActor()),
            phrase: item.getText(),
          } as DialogPhrase),
      ),
    );
  }
}
