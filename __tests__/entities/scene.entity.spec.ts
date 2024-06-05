import { LoadedScene } from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { Character } from '../../src/entities/character.entity';
import { Scene } from '../../src/entities/scene.entity';
import { createAgent, createCharacter, SCENE } from '../helpers';

let characters: Array<Character> = [];
let name: string;
let scene: Scene;
let json: string;

beforeEach(() => {
  jest.clearAllMocks();

  name = SCENE;
  characters = [createCharacter(), createCharacter()];
  scene = new Scene({ name, characters });
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

  const proto = new LoadedScene().setAgentsList(agents).setSceneName(SCENE);
  const scene = Scene.fromProto(proto);

  expect(scene.characters[0].id).toEqual(agents[0].getAgentId());
  expect(scene.characters[1].id).toEqual(agents[1].getAgentId());
  expect(scene.characters[1].assets.avatarImg).toEqual(undefined);
});

test('should find character by id', () => {
  const [character] = scene.getCharactersByIds([characters[0].id]);

  expect(character).toEqual(characters[0]);
});

test('should return undefined when character not found', () => {
  const [character] = scene.getCharactersByIds([v4()]);

  expect(character).toBeUndefined();
});

test('should find character by resource name', () => {
  const [character] = scene.getCharactersByResourceNames([
    characters[0].resourceName,
  ]);

  expect(character).toEqual(characters[0]);
});

test('should return undefined when character not found by resource name', () => {
  const [character] = scene.getCharactersByResourceNames([v4()]);

  expect(character).toBeUndefined();
});
