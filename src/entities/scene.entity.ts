import {
  Agent,
  SessionControlResponseEvent,
} from '@proto/ai/inworld/packets/packets_pb';

import { Character } from './character.entity';

export interface SceneProps {
  name: string;
  characters?: Character[];
}

export class Scene {
  name: string;
  characters: Array<Character>;

  constructor(props: SceneProps) {
    this.name = props.name;
    this.characters = props.characters ?? [];
  }

  static serialize(scene: Scene) {
    return JSON.stringify(scene);
  }

  static deserialize(json: string) {
    try {
      const { name, characters } = JSON.parse(json) as SceneProps;

      return new Scene({ name, characters });
    } catch (e) {}
  }

  static fromProto(name: string, proto: SessionControlResponseEvent) {
    const characters = (proto.getLoadedScene()?.getAgentsList() ?? []).map(
      (agent: Agent) => {
        const assets = agent.getCharacterAssets();

        return new Character({
          id: agent.getAgentId(),
          resourceName: agent.getBrainName(),
          displayName: agent.getGivenName(),
          assets: {
            avatarImg: assets?.getAvatarImg(),
            avatarImgOriginal: assets?.getAvatarImgOriginal(),
            rpmModelUri: assets?.getRpmModelUri(),
            rpmImageUriPortrait: assets?.getRpmImageUriPortrait(),
            rpmImageUriPosture: assets?.getRpmImageUriPosture(),
          },
        });
      },
    );

    return new Scene({ name, characters });
  }
}
