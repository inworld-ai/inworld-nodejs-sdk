import util = require('node:util');

import { SessionAccessToken } from '@proto/ai/inworld/studio/v1alpha/tokens_pb';

import { SessionTokenProps } from '../common/interfaces';

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

  static fromProto(proto: SessionAccessToken) {
    return new SessionToken({
      token: proto.getToken(),
      type: proto.getType(),
      expirationTime: proto.getExpirationTime().toDate(),
      sessionId: proto.getSessionId(),
    });
  }
}

SessionToken.prototype.getToken = util.deprecate(
  SessionToken.prototype.getToken,
  'getToken() is deprecated. Use `token` property instead.',
);

SessionToken.prototype.getType = util.deprecate(
  SessionToken.prototype.getType,
  'getType() is deprecated. Use `type` property instead.',
);

SessionToken.prototype.getSessionId = util.deprecate(
  SessionToken.prototype.getSessionId,
  'getSessionId() is deprecated. Use `sessionId` property instead.',
);

SessionToken.prototype.getExpirationTime = util.deprecate(
  SessionToken.prototype.getExpirationTime,
  'getExpirationTime() is deprecated. Use `expirationTime` property instead.',
);
