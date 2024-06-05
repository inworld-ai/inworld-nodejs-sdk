// package: ai.inworld.engine.v1
// file: ai/inworld/engine/v1/state_serialization.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";



import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetSessionStateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetSessionStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionStateRequest): GetSessionStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionStateRequest;
    static deserializeBinaryFromReader(message: GetSessionStateRequest, reader: jspb.BinaryReader): GetSessionStateRequest;
}

export namespace GetSessionStateRequest {
    export type AsObject = {
        name: string,
    }
}

export class SessionState extends jspb.Message { 
    getState(): Uint8Array | string;
    getState_asU8(): Uint8Array;
    getState_asB64(): string;
    setState(value: Uint8Array | string): SessionState;

    hasCreationTime(): boolean;
    clearCreationTime(): void;
    getCreationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreationTime(value?: google_protobuf_timestamp_pb.Timestamp): SessionState;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): SessionState.Version | undefined;
    setVersion(value?: SessionState.Version): SessionState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionState.AsObject;
    static toObject(includeInstance: boolean, msg: SessionState): SessionState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionState;
    static deserializeBinaryFromReader(message: SessionState, reader: jspb.BinaryReader): SessionState;
}

export namespace SessionState {
    export type AsObject = {
        state: Uint8Array | string,
        creationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        version?: SessionState.Version.AsObject,
    }


    export class Version extends jspb.Message { 
        getInteractionId(): string;
        setInteractionId(value: string): Version;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Version.AsObject;
        static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Version;
        static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
    }

    export namespace Version {
        export type AsObject = {
            interactionId: string,
        }
    }

}
