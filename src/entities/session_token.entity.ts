import { AccessToken } from '@proto/world-engine_pb';

import { SessionTokenProps } from '../common/data_structures';

const TIME_DIFF_MS = 50 * 60 * 1000; // 5 minutes

export class SessionToken {
  token: string;
  type: string;
  expirationTime: Date;
  sessionId: string;

  constructor(props: SessionTokenProps) {
    this.token = props.token;
    this.type = props.type;
    this.expirationTime = props.expirationTime;
    this.sessionId = props.sessionId;
  }

  static isExpired(token: SessionToken) {
    const expirationTime = token.expirationTime;

    return (
      new Date(expirationTime).getTime() - new Date().getTime() <= TIME_DIFF_MS
    );
  }

  static serialize(token: SessionToken) {
    return JSON.stringify({
      ...token,
      expirationTime: token.expirationTime.toISOString(),
    });
  }

  static deserialize(json: string) {
    try {
      const { token, type, expirationTime, sessionId } = JSON.parse(
        json,
      ) as SessionTokenProps;

      return new SessionToken({
        token,
        type,
        sessionId,
        expirationTime: new Date(expirationTime),
      });
    } catch (e) {}
  }

  static fromProto(proto: AccessToken) {
    return new SessionToken({
      token: proto.getToken(),
      type: proto.getType(),
      expirationTime: proto.getExpirationTime().toDate(),
      sessionId: proto.getSessionId(),
    });
  }
}
