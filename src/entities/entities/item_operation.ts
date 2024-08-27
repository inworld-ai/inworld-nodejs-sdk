import {
  CreateOrUpdateItemsOperation as ProtoCreateOrUpdateItemsOperation,
  ItemsInEntitiesOperation as ProtoItemsInEntitiesOperation,
  ItemsOperationEvent as ProtoItemsOperationEvent,
  RemoveItemsOperation as ProtoRemoveItemsOperation,
} from '@proto/ai/inworld/packets/entities_packets_pb';

import { ItemsInEntitiesOperationType } from '../../common/data_structures';
import { EntityItem } from './entity_item';

export type CreateOrUpdateItemsOperation = {
  items: EntityItem[];
  addToEntities: string[];
};

export type RemoveItemsOperation = {
  itemIds?: string[];
};

export type ItemsInEntitiesOperation = {
  type?: ItemsInEntitiesOperationType;
  itemIds?: string[];
  entityNames?: string[];
};

export class ItemOperation {
  createOrUpdateItems: CreateOrUpdateItemsOperation | undefined;
  removeItems: RemoveItemsOperation | undefined;
  itemsInEntities: ItemsInEntitiesOperation | undefined;

  constructor({
    createOrUpdateItems,
    removeItems,
    itemsInEntities,
  }: {
    createOrUpdateItems?: CreateOrUpdateItemsOperation;
    removeItems?: RemoveItemsOperation;
    itemsInEntities?: ItemsInEntitiesOperation;
  }) {
    if (createOrUpdateItems) {
      this.createOrUpdateItems = createOrUpdateItems;
    }

    if (removeItems) {
      this.removeItems = removeItems;
    }

    if (itemsInEntities) {
      this.itemsInEntities = itemsInEntities;
    }
  }

  static fromProto(proto: ProtoItemsOperationEvent) {
    const itemsInEntities = proto.getItemsInEntities();
    const type = itemsInEntities?.getType();
    const ids = proto.getRemoveItems()?.getItemIdsList();

    return new ItemOperation({
      createOrUpdateItems: {
        items: proto
          .getCreateOrUpdateItems()
          ?.getItemsList()
          ?.map((item) => EntityItem.fromProto(item)),
        addToEntities: proto.getCreateOrUpdateItems()?.getAddToEntitiesList(),
      },
      ...(ids && { removeItems: { itemIds: ids } }),
      itemsInEntities: {
        ...(type && { type: this.convertOperationTypeFromProto(type) }),
        itemIds: itemsInEntities?.getItemIdsList(),
        entityNames: itemsInEntities?.getEntityNamesList(),
      },
    });
  }

  toProto(): ProtoItemsOperationEvent {
    if (this.createOrUpdateItems) {
      return new ProtoItemsOperationEvent().setCreateOrUpdateItems(
        new ProtoCreateOrUpdateItemsOperation()
          .setAddToEntitiesList(this.createOrUpdateItems.addToEntities)
          .setItemsList(
            this.createOrUpdateItems.items?.map((item) => item.toProto()) || [],
          ),
      );
    }

    if (this.removeItems) {
      return new ProtoItemsOperationEvent().setRemoveItems(
        new ProtoRemoveItemsOperation().setItemIdsList(
          this.removeItems.itemIds,
        ),
      );
    }

    if (this.itemsInEntities) {
      return new ProtoItemsOperationEvent().setItemsInEntities(
        new ProtoItemsInEntitiesOperation()
          .setType(
            this.itemsInEntities.type
              ? ItemOperation.convertOperationTypeToProto(
                  this.itemsInEntities.type,
                )
              : ProtoItemsInEntitiesOperation.Type.UNSPECIFIED,
          )
          .setItemIdsList(this.itemsInEntities.itemIds)
          .setEntityNamesList(this.itemsInEntities.entityNames),
      );
    }
  }

  private static convertOperationTypeToProto(
    type: ItemsInEntitiesOperationType,
  ) {
    switch (type) {
      case ItemsInEntitiesOperationType.ADD:
        return ProtoItemsInEntitiesOperation.Type.ADD;
      case ItemsInEntitiesOperationType.REMOVE:
        return ProtoItemsInEntitiesOperation.Type.REMOVE;
      case ItemsInEntitiesOperationType.REPLACE:
        return ProtoItemsInEntitiesOperation.Type.REPLACE;
    }
  }

  private static convertOperationTypeFromProto(
    type: ProtoItemsInEntitiesOperation.Type,
  ) {
    switch (type) {
      case ProtoItemsInEntitiesOperation.Type.ADD:
        return ItemsInEntitiesOperationType.ADD;
      case ProtoItemsInEntitiesOperation.Type.REMOVE:
        return ItemsInEntitiesOperationType.REMOVE;
      case ProtoItemsInEntitiesOperation.Type.REPLACE:
        return ItemsInEntitiesOperationType.REPLACE;
    }
  }
}
