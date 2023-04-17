import util = require('node:util');

export interface CharacterProps {
  id: string;
  resourceName: string;
  displayName: string;
  assets: Assets;
}

export interface Assets {
  avatarImg?: string;
  avatarImgOriginal?: string;
  rpmModelUri?: string;
  rpmImageUriPortrait?: string;
  rpmImageUriPosture?: string;
}

export class Character {
  id: string;
  resourceName: string;
  displayName: string;
  assets: Assets;

  constructor(props: CharacterProps) {
    this.id = props.id;
    this.resourceName = props.resourceName;
    this.displayName = props.displayName;
    this.assets = props.assets;
  }

  getId() {
    return this.id;
  }

  getResourceName() {
    return this.resourceName;
  }

  getDisplayName() {
    return this.displayName;
  }

  getAssets() {
    return this.assets;
  }
}

Character.prototype.getId = util.deprecate(
  Character.prototype.getId,
  'getId() is deprecated. Use `id` property instead.',
);

Character.prototype.getDisplayName = util.deprecate(
  Character.prototype.getDisplayName,
  'getDisplayName() is deprecated. Use `displayName` property instead.',
);

Character.prototype.getResourceName = util.deprecate(
  Character.prototype.getResourceName,
  'getResourceName() is deprecated. Use `resourceName` property instead.',
);

Character.prototype.getAssets = util.deprecate(
  Character.prototype.getAssets,
  'getAssets() is deprecated. Use `assets` property instead.',
);
