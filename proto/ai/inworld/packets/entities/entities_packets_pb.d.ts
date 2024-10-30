// package: ai.inworld.packets.entities
// file: ai/inworld/packets/entities/entities_packets.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EntityItem extends jspb.Message { 
    getId(): string;
    setId(value: string): EntityItem;
    getDisplayName(): string;
    setDisplayName(value: string): EntityItem;
    getDescription(): string;
    setDescription(value: string): EntityItem;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityItem.AsObject;
    static toObject(includeInstance: boolean, msg: EntityItem): EntityItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityItem;
    static deserializeBinaryFromReader(message: EntityItem, reader: jspb.BinaryReader): EntityItem;
}

export namespace EntityItem {
    export type AsObject = {
        id: string,
        displayName: string,
        description: string,

        propertiesMap: Array<[string, string]>,
    }
}

export class ItemsOperationEvent extends jspb.Message { 

    hasCreateOrUpdateItems(): boolean;
    clearCreateOrUpdateItems(): void;
    getCreateOrUpdateItems(): CreateOrUpdateItemsOperation | undefined;
    setCreateOrUpdateItems(value?: CreateOrUpdateItemsOperation): ItemsOperationEvent;

    hasRemoveItems(): boolean;
    clearRemoveItems(): void;
    getRemoveItems(): RemoveItemsOperation | undefined;
    setRemoveItems(value?: RemoveItemsOperation): ItemsOperationEvent;

    hasItemsInEntities(): boolean;
    clearItemsInEntities(): void;
    getItemsInEntities(): ItemsInEntitiesOperation | undefined;
    setItemsInEntities(value?: ItemsInEntitiesOperation): ItemsOperationEvent;

    getOperationCase(): ItemsOperationEvent.OperationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemsOperationEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ItemsOperationEvent): ItemsOperationEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemsOperationEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemsOperationEvent;
    static deserializeBinaryFromReader(message: ItemsOperationEvent, reader: jspb.BinaryReader): ItemsOperationEvent;
}

export namespace ItemsOperationEvent {
    export type AsObject = {
        createOrUpdateItems?: CreateOrUpdateItemsOperation.AsObject,
        removeItems?: RemoveItemsOperation.AsObject,
        itemsInEntities?: ItemsInEntitiesOperation.AsObject,
    }

    export enum OperationCase {
        OPERATION_NOT_SET = 0,
        CREATE_OR_UPDATE_ITEMS = 1,
        REMOVE_ITEMS = 3,
        ITEMS_IN_ENTITIES = 4,
    }

}

export class CreateOrUpdateItemsOperation extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<EntityItem>;
    setItemsList(value: Array<EntityItem>): CreateOrUpdateItemsOperation;
    addItems(value?: EntityItem, index?: number): EntityItem;
    clearAddToEntitiesList(): void;
    getAddToEntitiesList(): Array<string>;
    setAddToEntitiesList(value: Array<string>): CreateOrUpdateItemsOperation;
    addAddToEntities(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrUpdateItemsOperation.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrUpdateItemsOperation): CreateOrUpdateItemsOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrUpdateItemsOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrUpdateItemsOperation;
    static deserializeBinaryFromReader(message: CreateOrUpdateItemsOperation, reader: jspb.BinaryReader): CreateOrUpdateItemsOperation;
}

export namespace CreateOrUpdateItemsOperation {
    export type AsObject = {
        itemsList: Array<EntityItem.AsObject>,
        addToEntitiesList: Array<string>,
    }
}

export class RemoveItemsOperation extends jspb.Message { 
    clearItemIdsList(): void;
    getItemIdsList(): Array<string>;
    setItemIdsList(value: Array<string>): RemoveItemsOperation;
    addItemIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveItemsOperation.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveItemsOperation): RemoveItemsOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveItemsOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveItemsOperation;
    static deserializeBinaryFromReader(message: RemoveItemsOperation, reader: jspb.BinaryReader): RemoveItemsOperation;
}

export namespace RemoveItemsOperation {
    export type AsObject = {
        itemIdsList: Array<string>,
    }
}

export class ItemsInEntitiesOperation extends jspb.Message { 
    getType(): ItemsInEntitiesOperation.Type;
    setType(value: ItemsInEntitiesOperation.Type): ItemsInEntitiesOperation;
    clearItemIdsList(): void;
    getItemIdsList(): Array<string>;
    setItemIdsList(value: Array<string>): ItemsInEntitiesOperation;
    addItemIds(value: string, index?: number): string;
    clearEntityNamesList(): void;
    getEntityNamesList(): Array<string>;
    setEntityNamesList(value: Array<string>): ItemsInEntitiesOperation;
    addEntityNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemsInEntitiesOperation.AsObject;
    static toObject(includeInstance: boolean, msg: ItemsInEntitiesOperation): ItemsInEntitiesOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemsInEntitiesOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemsInEntitiesOperation;
    static deserializeBinaryFromReader(message: ItemsInEntitiesOperation, reader: jspb.BinaryReader): ItemsInEntitiesOperation;
}

export namespace ItemsInEntitiesOperation {
    export type AsObject = {
        type: ItemsInEntitiesOperation.Type,
        itemIdsList: Array<string>,
        entityNamesList: Array<string>,
    }

    export enum Type {
    UNSPECIFIED = 0,
    ADD = 1,
    REMOVE = 2,
    REPLACE = 3,
    }

}
