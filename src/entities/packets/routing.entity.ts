import {
  Actor as ProtoActor,
  Routing as ProtoRouting,
} from '@proto/ai/inworld/packets/packets_pb';

export class Actor {
  readonly name: string;
  readonly isPlayer: boolean;
  readonly isCharacter: boolean;

  constructor({
    name,
    isPlayer,
    isCharacter,
  }: {
    name: string;
    isPlayer: boolean;
    isCharacter: boolean;
  }) {
    this.name = name;
    this.isPlayer = isPlayer;
    this.isCharacter = isCharacter;
  }

  static fromProto(proto: ProtoActor) {
    const type = proto.getType();

    return new Actor({
      name: proto.getName(),
      isPlayer: type === ProtoActor.Type.PLAYER,
      isCharacter: type === ProtoActor.Type.AGENT,
    });
  }
}

export class Routing {
  readonly source: Actor;
  readonly target: Actor;

  constructor({ source, target }: { source: Actor; target: Actor }) {
    this.source = source;
    this.target = target;
  }

  static fromProto(proto: ProtoRouting) {
    return new Routing({
      source: Actor.fromProto(proto.getSource()),
      target: Actor.fromProto(proto.getTarget()),
    });
  }
}
