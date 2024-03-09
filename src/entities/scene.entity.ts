import { Agent, LoadedScene } from '@proto/ai/inworld/packets/packets_pb';

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

  static fromProto(name: string, proto: LoadedScene) {
    const characters = (proto.getAgentsList() ?? []).map((agent: Agent) =>
      Character.fromProto(agent),
    );

    return new Scene({ name, characters });
  }
}
