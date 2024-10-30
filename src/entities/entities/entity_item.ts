import { EntityItem as ProtoEntityItem } from '@proto/ai/inworld/packets/entities/entities_packets_pb';

import { EntityItemProps } from '../../common/data_structures';

export class EntityItem {
  readonly id: string;
  readonly displayName: string | undefined;
  readonly description: string | undefined;
  readonly properties: Record<string, string> = {};

  constructor({ id, displayName, description, properties }: EntityItemProps) {
    this.id = id;

    if (displayName) {
      this.displayName = displayName;
    }

    if (description) {
      this.description = description;
    }

    if (Object.keys(properties).length > 0) {
      this.properties = properties;
    }
  }

  static fromProto(proto: ProtoEntityItem) {
    return new EntityItem({
      id: proto.getId(),
      displayName: proto.getDisplayName(),
      description: proto.getDescription(),
      properties: Object.fromEntries(proto.getPropertiesMap().entries()),
    });
  }

  toProto(): ProtoEntityItem {
    const proto = new ProtoEntityItem()
      .setId(this.id)
      .setDisplayName(this.displayName)
      .setDescription(this.description);

    const properties = proto.getPropertiesMap();

    for (const [key, value] of Object.entries(this.properties)) {
      properties.set(key, value);
    }

    return proto;
  }
}
