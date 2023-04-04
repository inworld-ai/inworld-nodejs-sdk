import { SessionTokenProps } from '../common/interfaces';

export class SessionToken {
  private token: string;
  private type: string;
  private expirationTime: Date;
  private sessionId: string;

  constructor(props: SessionTokenProps) {
    this.token = props.token;
    this.type = props.type;
    this.expirationTime = props.expirationTime;
    this.sessionId = props.sessionId;
  }

  getToken() {
    return this.token;
  }

  getType() {
    return this.type;
  }

  getExpirationTime() {
    return this.expirationTime;
  }

  getSessionId() {
    return this.sessionId;
  }
}
