import { SessionAccessToken } from '@proto/ai/inworld/studio/v1alpha/tokens_pb';
import { v4 } from 'uuid';

import { protoTimestamp } from '../../src/common/helpers';
import { SessionToken } from '../../src/entities/session_token.entity';
import { session } from '../helpers';

const json = JSON.stringify(session);

test('should get session fields', () => {
  const token = v4();
  const type = v4();
  const sessionId = v4();
  const expirationTime = new Date();

  const session = new SessionToken({
    token,
    type,
    sessionId,
    expirationTime,
  });

  expect(session.token).toEqual(token);
  expect(session.type).toEqual(type);
  expect(session.sessionId).toEqual(sessionId);
  expect(session.expirationTime).toEqual(expirationTime);
});

test('should serialize', () => {
  expect(SessionToken.serialize(session)).toEqual(json);
});

test('should deserialize', () => {
  const result = SessionToken.deserialize(json);

  expect(result.token).toEqual(session.token);
  expect(result.type).toEqual(session.type);
  expect(result.sessionId).toEqual(session.sessionId);
  expect(result.expirationTime).toEqual(session.expirationTime);
});

test('should convert proto to token', () => {
  const token = v4();
  const type = v4();
  const sessionId = v4();
  const expirationTime = new Date();

  const proto = new SessionAccessToken()
    .setToken(token)
    .setType(type)
    .setSessionId(sessionId)
    .setExpirationTime(protoTimestamp(expirationTime));
  const scene = SessionToken.fromProto(proto);

  expect(scene.token).toEqual(proto.getToken());
  expect(scene.type).toEqual(proto.getType());
  expect(scene.sessionId).toEqual(proto.getSessionId());
  expect(scene.expirationTime).toEqual(proto.getExpirationTime().toDate());
});

describe('isExpired', () => {
  test('should detect expired session', () => {
    const token = v4();
    const type = v4();
    const sessionId = v4();
    const expirationTime = new Date();

    const session = new SessionToken({
      token,
      type,
      sessionId,
      expirationTime,
    });

    expect(SessionToken.isExpired(session)).toEqual(true);
  });

  test('should not detect expired session', () => {
    expect(SessionToken.isExpired(session)).toEqual(false);
  });
});
