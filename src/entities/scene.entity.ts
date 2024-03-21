import { LoadSceneResponse } from '@proto/ai/inworld/engine/world-engine_pb';

import { Character } from './character.entity';

export interface SceneProps {
  name: string;
  characters?: Character[];
  key?: string;
}

export class Scene {
  name: string;
  characters: Array<Character> = [];
  key: string;

  constructor(props: SceneProps) {
    this.name = props.name;
    this.characters = props.characters ?? [];
    this.key = props.key ?? '';
  }

  static serialize(scene: Scene) {
    return JSON.stringify(scene);
  }

  static deserialize(json: string) {
    try {
      const { characters, key, name } = JSON.parse(json) as SceneProps;

      return new Scene({ characters, key, name });
    } catch (e) {}
  }

  static fromProto(name: string, proto: LoadSceneResponse) {
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
      name,
      key: proto.getKey(),
      characters,
    });
  }
}
