import { Scene } from './scene.entity';
import { SessionToken } from './session_token.entity';

export interface SessionProps {
  sessionToken: SessionToken;
  scene: Scene;
}

export class Session {
  sessionToken: SessionToken;
  scene: Scene;

  constructor(props: SessionProps) {
    this.sessionToken = props.sessionToken;
    this.scene = props.scene;
  }

  static serialize(session: Session) {
    return JSON.stringify(session);
  }

  static deserialize(json: string) {
    try {
      const { sessionToken, scene } = JSON.parse(json) as SessionProps;

      return new Session({
        sessionToken: new SessionToken({
          token: sessionToken.token,
          type: sessionToken.type,
          sessionId: sessionToken.sessionId,
          expirationTime: new Date(sessionToken.expirationTime),
        }),
        scene,
      });
    } catch (e) {}
  }
}
