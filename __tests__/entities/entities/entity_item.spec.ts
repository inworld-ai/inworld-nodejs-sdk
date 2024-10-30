import { EntityItem as ProtoEntityItem } from '@proto/ai/inworld/packets/entities/entities_packets_pb';
import { v4 } from 'uuid';

import { EntityItem } from '../../../src/entities/entities/entity_item';

test('should get entity item fields', () => {
  const id = v4();
  const displayName = v4();
  const description = v4();
  const properties = {
    key1: v4(),
    key2: v4(),
  };
  const item = new EntityItem({
    id,
    displayName,
    description,
    properties,
  });

  expect(item.id).toEqual(id);
  expect(item.displayName).toEqual(displayName);
  expect(item.description).toEqual(description);
  expect(item.properties).toEqual(properties);
});

test('should convert from proto', () => {
  const id = v4();
  const displayName = v4();
  const description = v4();
  const properties = {
    key1: v4(),
    key2: v4(),
  };

  const proto = new ProtoEntityItem()
    .setId(id)
    .setDisplayName(displayName)
    .setDescription(description);

  const protoProperties = proto.getPropertiesMap();

  for (const [key, value] of Object.entries(properties)) {
    protoProperties.set(key, value);
  }

  const item = EntityItem.fromProto(proto);

  expect(item.id).toEqual(id);
  expect(item.displayName).toEqual(displayName);
  expect(item.description).toEqual(description);
  expect(item.properties).toEqual(properties);
});

test('should convert to proto', () => {
  const id = v4();
  const displayName = v4();
  const description = v4();
  const properties = {
    key1: v4(),
    key2: v4(),
  };

  const item = new EntityItem({
    id,
    displayName,
    description,
    properties,
  });

  const proto = item.toProto();

  expect(proto.getId()).toEqual(id);
  expect(proto.getDisplayName()).toEqual(displayName);
  expect(proto.getDescription()).toEqual(description);
  expect(Object.fromEntries(proto.getPropertiesMap().entries())).toEqual(
    properties,
  );
});
