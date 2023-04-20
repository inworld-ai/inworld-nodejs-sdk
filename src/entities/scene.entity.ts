import { LoadSceneResponse } from '@proto/world-engine_pb';

import { Character } from './character.entity';

export interface SceneProps {
  characters: Character[];
  key: string;
}

export class Scene {
  characters: Array<Character> = [];
  key: string;

  constructor(props: SceneProps) {
    this.characters = props.characters;
    this.key = props.key;
  }

  static serialize(scene: Scene) {
    return JSON.stringify(scene);
  }

  static deserialize(json: string) {
    try {
      const { characters, key } = JSON.parse(json) as SceneProps;

      return new Scene({ characters, key });
    } catch (e) {}
  }

  static fromProto(proto: LoadSceneResponse) {
    const characters = proto
      .getAgentsList()
      .map((agent: LoadSceneResponse.Agent) => {
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
      });

    return new Scene({
      key: proto.getKey(),
      characters,
    });
  }
}
