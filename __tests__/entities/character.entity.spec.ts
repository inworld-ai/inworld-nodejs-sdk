import { v4 } from 'uuid';

import { Assets, Character } from '../../src/entities/character.entity';

test('should get character fields', () => {
  const id = v4();
  const resourceName = v4();
  const displayName = v4();
  const assets: Assets = {
    avatarImg: v4(),
    avatarImgOriginal: v4(),
    rpmModelUri: v4(),
    rpmImageUriPortrait: v4(),
    rpmImageUriPosture: v4(),
  };
  const character = new Character({ id, assets, resourceName, displayName });

  expect(character.id).toEqual(id);
  expect(character.resourceName).toEqual(resourceName);
  expect(character.displayName).toEqual(displayName);
  expect(character.assets).toEqual(assets);
});

test('should get character fields in the deprecated way', () => {
  const id = v4();
  const resourceName = v4();
  const displayName = v4();
  const assets: Assets = {
    avatarImg: v4(),
    avatarImgOriginal: v4(),
    rpmModelUri: v4(),
    rpmImageUriPortrait: v4(),
    rpmImageUriPosture: v4(),
  };
  const character = new Character({ id, assets, resourceName, displayName });

  expect(character.getId()).toEqual(id);
  expect(character.getResourceName()).toEqual(resourceName);
  expect(character.getDisplayName()).toEqual(displayName);
  expect(character.getAssets()).toEqual(assets);
});
