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
}
