import {
  Agent,
  CurrentSceneStatus,
} from '@proto/ai/inworld/packets/packets_pb';

import { Character } from './character.entity';

export interface SceneProps {
  name: string;
  characters?: Character[];
  description?: string;
  displayName?: string;
}

export class Scene {
  readonly name: string;
  readonly characters: Array<Character>;
  readonly description: string;
  readonly displayName: string;

  constructor(props: SceneProps) {
    this.name = props.name;
    this.characters = props.characters ?? [];
    this.description = props.description ?? '';
    this.displayName = props.displayName ?? '';
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

  static fromProto(proto: CurrentSceneStatus) {
    return new Scene({
      name: proto.getSceneName(),
      characters: proto
        .getAgentsList()
        .map((agent: Agent) => Character.fromProto(agent)),
      description: proto.getSceneDescription(),
      displayName: proto.getSceneDisplayName(),
    });
  }

  getCharactersByIds(ids: string[]) {
    return this.characters.filter((c) => ids.includes(c.id));
  }

  getCharactersByResourceNames(names: string[]) {
    return this.characters.filter((c) => names.includes(c.resourceName));
  }
}
