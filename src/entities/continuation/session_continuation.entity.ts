import { DialogPhrase, PreviousDialog } from './previous_dialog.entity';

export interface SessionContinuationProps {
  previousDialog?: DialogPhrase[];
}

export class SessionContinuation {
  readonly previousDialog: PreviousDialog | undefined;

  constructor(props: SessionContinuationProps) {
    this.previousDialog = new PreviousDialog(props.previousDialog);
  }
}
