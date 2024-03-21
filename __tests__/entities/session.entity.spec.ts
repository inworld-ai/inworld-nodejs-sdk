import { v4 } from 'uuid';

import { Scene } from '../../src/entities/scene.entity';
import { Session } from '../../src/entities/session.entity';
import { createCharacter, SCENE, sessionToken } from '../helpers';

let scene: Scene = {
  name: SCENE,
  key: v4(),
  characters: [createCharacter(), createCharacter()],
};
let session: Session;
let json: string;

beforeEach(() => {
  jest.clearAllMocks();

  session = new Session({
    scene,
    sessionToken,
  });
  json = JSON.stringify(session);
});

test('should return session fields', () => {
  expect(session.scene).toEqual(scene);
  expect(session.sessionToken).toEqual(sessionToken);
});

test('should serialize', () => {
  expect(Session.serialize(session)).toEqual(json);
});

test('should deserialize', () => {
  const result = Session.deserialize(json);

  expect(result.scene).toEqual(session.scene);
  expect(result.sessionToken).toEqual(session.sessionToken);
});
