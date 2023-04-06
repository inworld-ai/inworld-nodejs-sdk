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
  private id: string;
  private resourceName: string;
  private displayName: string;
  private assets: Assets;

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
