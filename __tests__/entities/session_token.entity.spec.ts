import { AccessToken } from '@proto/ai/inworld/engine/world-engine_pb';
import { v4 } from 'uuid';

import { protoTimestamp } from '../../src/common/helpers';
import { SessionToken } from '../../src/entities/session_token.entity';
import { sessionToken } from '../helpers';

const json = JSON.stringify(sessionToken);

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
  expect(SessionToken.serialize(sessionToken)).toEqual(json);
});

test('should deserialize', () => {
  const result = SessionToken.deserialize(json);

  expect(result.token).toEqual(sessionToken.token);
  expect(result.type).toEqual(sessionToken.type);
  expect(result.sessionId).toEqual(sessionToken.sessionId);
  expect(result.expirationTime).toEqual(sessionToken.expirationTime);
});

test('should convert proto to token', () => {
  const token = v4();
  const type = v4();
  const sessionId = v4();
  const expirationTime = new Date();

  const proto = new AccessToken()
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
    expect(SessionToken.isExpired(sessionToken)).toEqual(false);
  });
});
