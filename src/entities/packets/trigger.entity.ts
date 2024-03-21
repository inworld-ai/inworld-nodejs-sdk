import { CustomEvent as ProtoTriggerEvent } from '@proto/ai/inworld/packets/packets_pb';

export interface TriggerParameter {
  name: string;
  value: string;
}

export class TriggerEvent {
  readonly name: string;
  readonly parameters: TriggerParameter[] = [];

  constructor({
    name,
    parameters = [],
  }: {
    name: string;
    parameters?: TriggerParameter[];
  }) {
    this.name = name;
    this.parameters = parameters;
  }

  static fromProto(proto: ProtoTriggerEvent) {
    return new TriggerEvent({
      name: proto.getName(),
      parameters: proto
        .getParametersList()
        .map((p) => ({ name: p.getName(), value: p.getValue() })),
    });
  }
}
