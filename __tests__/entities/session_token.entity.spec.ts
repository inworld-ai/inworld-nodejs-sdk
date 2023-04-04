import { v4 } from 'uuid';

import { SessionToken } from '../../src/entities/session_token.entity';

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

  expect(session.getToken()).toEqual(token);
  expect(session.getType()).toEqual(type);
  expect(session.getSessionId()).toEqual(sessionId);
  expect(session.getExpirationTime()).toEqual(expirationTime);
});
