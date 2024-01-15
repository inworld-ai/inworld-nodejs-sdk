import { Session } from '../../src/entities/session.entity';
import { sessionToken } from '../helpers';

let session: Session;
let json: string;

beforeEach(() => {
  jest.clearAllMocks();

  session = new Session({
    sessionToken,
  });
  json = JSON.stringify(session);
});

test('should return session fields', () => {
  expect(session.sessionToken).toEqual(sessionToken);
});

test('should serialize', () => {
  expect(Session.serialize(session)).toEqual(json);
});

test('should deserialize', () => {
  const result = Session.deserialize(json);

  expect(result?.sessionToken).toEqual(session.sessionToken);
});
