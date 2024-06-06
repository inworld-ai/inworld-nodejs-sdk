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

  static fromProto(proto?: ProtoActor) {
    const type = proto?.getType();

    return new Actor({
      name: proto?.getName() ?? '',
      isPlayer: type === ProtoActor.Type.PLAYER,
      isCharacter: type === ProtoActor.Type.AGENT,
    });
  }
}

export class Routing {
  readonly source: Actor;
  readonly targets: Actor[];

  constructor({ source, targets }: { source: Actor; targets: Actor[] }) {
    this.source = source;
    this.targets = targets;
  }

  static fromProto(proto?: ProtoRouting) {
    const targets = proto?.getTarget()?.getType()
      ? [proto.getTarget()]
      : proto?.getTargetsList() ?? [];

    return new Routing({
      source: Actor.fromProto(proto?.getSource()),
      targets: targets.map((target) => Actor.fromProto(target)),
    });
  }
}
