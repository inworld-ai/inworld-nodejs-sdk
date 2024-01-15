import { LoadSceneOutputEvent } from '@proto/ai/inworld/packets/packets_pb';

import { Character } from './character.entity';

export interface SceneProps {
  characters: Character[];
}

export class Scene {
  characters: Array<Character> = [];

  constructor(props: SceneProps) {
    this.characters = props.characters;
  }

  static serialize(scene: Scene) {
    return JSON.stringify(scene);
  }

  static deserialize(json: string) {
    try {
      const { characters } = JSON.parse(json) as SceneProps;

      return new Scene({ characters });
    } catch (e) {}
  }

  static fromProto(proto: LoadSceneOutputEvent) {
    const characters = proto
      .getAgentsList()
      .map((agent: LoadSceneOutputEvent.Agent) => {
        // const assets = agent.get;

        return new Character({
          id: agent.getAgentId(),
          resourceName: agent.getBrainName(),
          displayName: agent.getGivenName(),
          assets: {},
          // assets: {
          //   avatarImg: assets?.getAvatarImg(),
          //   avatarImgOriginal: assets?.getAvatarImgOriginal(),
          //   rpmModelUri: assets?.getRpmModelUri(),
          //   rpmImageUriPortrait: assets?.getRpmImageUriPortrait(),
          //   rpmImageUriPosture: assets?.getRpmImageUriPosture(),
          // },
        });
      });

    return new Scene({ characters });
  }
}
