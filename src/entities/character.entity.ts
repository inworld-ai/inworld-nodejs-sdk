import { Agent } from '@proto/ai/inworld/packets/packets_pb';

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

  static fromProto(proto: Agent) {
    const assets = proto.getCharacterAssets();

    return new Character({
      id: proto.getAgentId(),
      resourceName: proto.getBrainName(),
      displayName: proto.getGivenName(),
      assets: {
        avatarImg: assets?.getAvatarImg(),
        avatarImgOriginal: assets?.getAvatarImgOriginal(),
        rpmModelUri: assets?.getRpmModelUri(),
        rpmImageUriPortrait: assets?.getRpmImageUriPortrait(),
        rpmImageUriPosture: assets?.getRpmImageUriPosture(),
      },
    });
  }
}
