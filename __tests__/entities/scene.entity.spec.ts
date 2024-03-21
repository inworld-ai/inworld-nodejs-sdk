import {
  LoadedScene,
  SessionControlResponseEvent,
} from '@proto/ai/inworld/packets/packets_pb';

import { Character } from '../../src/entities/character.entity';
import { Scene } from '../../src/entities/scene.entity';
import { createAgent, createCharacter, SCENE } from '../helpers';

let characters: Array<Character> = [];
let scene: Scene;
let json: string;

beforeEach(() => {
  jest.clearAllMocks();

  characters = [createCharacter(), createCharacter()];
  scene = new Scene({ name: SCENE, characters });
  json = JSON.stringify(scene);
});

test('should return scene fields', () => {
  expect(scene.characters).toEqual(characters);
});

test('should serialize', () => {
  expect(Scene.serialize(scene)).toEqual(json);
});

test('should deserialize', () => {
  const result = Scene.deserialize(json);

  expect(result?.name).toEqual(scene.name);
  expect(result?.characters).toEqual(scene.characters);
});

test('should convert proto to scene', () => {
  const agents = [createAgent(), createAgent(false)];

  const proto = new SessionControlResponseEvent().setLoadedScene(
    new LoadedScene().setAgentsList(agents),
  );
  const scene = Scene.fromProto(SCENE, proto);

  expect(scene.characters[0].id).toEqual(agents[0].getAgentId());
  expect(scene.characters[1].id).toEqual(agents[1].getAgentId());
  expect(scene.characters[1].assets.avatarImg).toEqual(undefined);
});
