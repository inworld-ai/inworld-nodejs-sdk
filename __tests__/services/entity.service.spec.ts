import { ClientDuplexStreamImpl } from '@grpc/grpc-js/build/src/call';
import { v4 } from 'uuid';

import { ItemsInEntitiesOperationType } from '../../src/common/data_structures';
import { EventFactory } from '../../src/factories/event';
import { ConnectionService } from '../../src/services/connection.service';
import { EntityService } from '../../src/services/entity.service';
import { KEY, SCENE, SECRET } from '../helpers';

let connection: ConnectionService;
let itemsInEntities: jest.SpyInstance;

beforeEach(() => {
  connection = new ConnectionService({
    apiKey: { key: KEY, secret: SECRET },
    name: SCENE,
    onError: jest.fn(),
  });

  jest
    .spyOn(ClientDuplexStreamImpl.prototype, 'write')
    .mockImplementationOnce(jest.fn());
  jest.spyOn(connection, 'isActive').mockImplementation(() => true);

  itemsInEntities = jest.spyOn(EventFactory, 'itemsInEntities');
});

test('should create or update items', async () => {
  const createOrUpdateItems = jest.spyOn(EventFactory, 'createOrUpdateItems');

  const items = [
    {
      id: v4(),
      displayName: v4(),
      description: v4(),
      properties: {
        key1: v4(),
        key2: v4(),
      },
    },
    {
      id: v4(),
      displayName: v4(),
      description: v4(),
      properties: {
        key1: v4(),
        key2: v4(),
      },
    },
  ];
  const addToEntities = [v4(), v4()];

  await new EntityService(connection).createOrUpdateItems({
    items,
    addToEntities,
  });

  expect(createOrUpdateItems).toHaveBeenCalledTimes(1);
  expect(createOrUpdateItems).toHaveBeenCalledWith({ items, addToEntities });
});

test('should remove items', async () => {
  const removeItems = jest.spyOn(EventFactory, 'removeItems');

  const ids = [v4(), v4()];

  await new EntityService(connection).removeItems(ids);

  expect(removeItems).toHaveBeenCalledTimes(1);
  expect(removeItems).toHaveBeenCalledWith(ids);
});

test.each([
  ItemsInEntitiesOperationType.ADD,
  ItemsInEntitiesOperationType.REMOVE,
  ItemsInEntitiesOperationType.REPLACE,
])('shout execute $type', async (type) => {
  const itemIds = [v4(), v4()];
  const entityNames = [v4(), v4()];

  await new EntityService(connection).itemsInEntities({
    type,
    itemIds,
    entityNames,
  });

  // expect(itemsInEntities).toHaveBeenCalledTimes(1);
  expect(itemsInEntities).toHaveBeenCalledWith({
    type,
    itemIds,
    entityNames,
  });
});
