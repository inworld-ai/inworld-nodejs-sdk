import { SessionToken } from './session_token.entity';

export interface SessionProps {
  sessionToken: SessionToken;
}

export class Session {
  sessionToken: SessionToken;

  constructor(props: SessionProps) {
    this.sessionToken = props.sessionToken;
  }

  static serialize(session: Session) {
    return JSON.stringify(session);
  }

  static deserialize(json: string) {
    try {
      const { sessionToken } = JSON.parse(json) as SessionProps;

      return new Session({
        sessionToken: new SessionToken({
          token: sessionToken.token,
          type: sessionToken.type,
          sessionId: sessionToken.sessionId,
          expirationTime: new Date(sessionToken.expirationTime),
        }),
      });
    } catch (e) {}
  }
}
