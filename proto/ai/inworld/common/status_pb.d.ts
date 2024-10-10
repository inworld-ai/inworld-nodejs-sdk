// package: ai.inworld.common
// file: ai/inworld/common/status.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class InworldStatus extends jspb.Message { 
    getErrorType(): ErrorType;
    setErrorType(value: ErrorType): InworldStatus;
    getReconnectType(): ReconnectionType;
    setReconnectType(value: ReconnectionType): InworldStatus;

    hasReconnectTime(): boolean;
    clearReconnectTime(): void;
    getReconnectTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReconnectTime(value?: google_protobuf_timestamp_pb.Timestamp): InworldStatus;
    getMaxRetries(): number;
    setMaxRetries(value: number): InworldStatus;

    hasResourceNotFound(): boolean;
    clearResourceNotFound(): void;
    getResourceNotFound(): ResourceNotFoundDetails | undefined;
    setResourceNotFound(value?: ResourceNotFoundDetails): InworldStatus;

    hasVersionConflict(): boolean;
    clearVersionConflict(): void;
    getVersionConflict(): VersionConflictDetails | undefined;
    setVersionConflict(value?: VersionConflictDetails): InworldStatus;

    getErrorDetailsCase(): InworldStatus.ErrorDetailsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InworldStatus.AsObject;
    static toObject(includeInstance: boolean, msg: InworldStatus): InworldStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InworldStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InworldStatus;
    static deserializeBinaryFromReader(message: InworldStatus, reader: jspb.BinaryReader): InworldStatus;
}

export namespace InworldStatus {
    export type AsObject = {
        errorType: ErrorType,
        reconnectType: ReconnectionType,
        reconnectTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        maxRetries: number,
        resourceNotFound?: ResourceNotFoundDetails.AsObject,
        versionConflict?: VersionConflictDetails.AsObject,
    }

    export enum ErrorDetailsCase {
        ERROR_DETAILS_NOT_SET = 0,
        RESOURCE_NOT_FOUND = 5,
        VERSION_CONFLICT = 6,
    }

}

export class ResourceNotFoundDetails extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): ResourceNotFoundDetails;
    getResourceType(): ResourceType;
    setResourceType(value: ResourceType): ResourceNotFoundDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceNotFoundDetails.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceNotFoundDetails): ResourceNotFoundDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceNotFoundDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceNotFoundDetails;
    static deserializeBinaryFromReader(message: ResourceNotFoundDetails, reader: jspb.BinaryReader): ResourceNotFoundDetails;
}

export namespace ResourceNotFoundDetails {
    export type AsObject = {
        resourceId: string,
        resourceType: ResourceType,
    }
}

export class VersionConflictDetails extends jspb.Message { 
    getClientVersion(): number;
    setClientVersion(value: number): VersionConflictDetails;
    getServerVersion(): number;
    setServerVersion(value: number): VersionConflictDetails;
    getRequestIndex(): number;
    setRequestIndex(value: number): VersionConflictDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VersionConflictDetails.AsObject;
    static toObject(includeInstance: boolean, msg: VersionConflictDetails): VersionConflictDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VersionConflictDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VersionConflictDetails;
    static deserializeBinaryFromReader(message: VersionConflictDetails, reader: jspb.BinaryReader): VersionConflictDetails;
}

export namespace VersionConflictDetails {
    export type AsObject = {
        clientVersion: number,
        serverVersion: number,
        requestIndex: number,
    }
}

export enum ErrorType {
    SESSION_TOKEN_EXPIRED = 0,
    SESSION_TOKEN_INVALID = 1,
    SESSION_RESOURCES_EXHAUSTED = 2,
    BILLING_TOKENS_EXHAUSTED = 3,
    ACCOUNT_DISABLED = 4,
    SESSION_INVALID = 5,
    RESOURCE_NOT_FOUND = 6,
    SAFETY_VIOLATION = 7,
    SESSION_EXPIRED = 8,
    AUDIO_SESSION_EXPIRED = 9,
    SESSION_PAUSED = 10,
    VERSION_CONFLICT = 11,
    AUDIO_SESSION_ALREADY_STARTED = 12,
}

export enum ReconnectionType {
    UNDEFINED = 0,
    NO_RETRY = 1,
    IMMEDIATE = 2,
    TIMEOUT = 3,
}

export enum ResourceType {
    RESOURCE_TYPE_UNDEFINED = 0,
    RESOURCE_TYPE_CONVERSATION = 1,
}
