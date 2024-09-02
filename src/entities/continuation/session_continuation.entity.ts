import { DialogPhrase, PreviousDialog } from './previous_dialog.entity';

export interface SessionContinuationProps {
  previousDialog?: DialogPhrase[];
  previousState?: string;
}

export class SessionContinuation {
  readonly previousState: string | Uint8Array | undefined;
  readonly previousDialog: PreviousDialog | undefined;

  constructor(props: SessionContinuationProps) {
    if (props.previousDialog) {
      this.previousDialog = new PreviousDialog(props.previousDialog);
    }

    this.previousState = props.previousState;
  }
}
