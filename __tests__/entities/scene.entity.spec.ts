import { LoadSceneResponse } from '@proto/ai/inworld/engine/world-engine_pb';
import { v4 } from 'uuid';

import { Character } from '../../src/entities/character.entity';
import { Scene } from '../../src/entities/scene.entity';
import { createAgent, createCharacter } from '../helpers';

let key: string;
let characters: Array<Character> = [];
let scene: Scene;
let json: string;

beforeEach(() => {
  jest.clearAllMocks();

  key = v4();
  characters = [createCharacter(), createCharacter()];
  scene = new Scene({ characters });
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

  expect(result?.characters).toEqual(scene.characters);
});

test('should convert proto to scene', () => {
  const agents = [createAgent(), createAgent(false)];
  const proto = new LoadSceneResponse().setAgentsList(agents).setKey(key);
  const scene = Scene.fromProto(proto);

  expect(scene.characters[0].id).toEqual(agents[0].getAgentId());
  expect(scene.characters[1].id).toEqual(agents[1].getAgentId());
  expect(scene.characters[1].assets.avatarImg).toEqual(undefined);
});
