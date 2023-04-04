// package: ai.inworld.studio.v1alpha
// file: ai/inworld/studio/v1alpha/tokens.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";


import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as options_pb from "../../../../options_pb";

export class SessionAccessToken extends jspb.Message { 
    getToken(): string;
    setToken(value: string): SessionAccessToken;
    getType(): string;
    setType(value: string): SessionAccessToken;

    hasExpirationTime(): boolean;
    clearExpirationTime(): void;
    getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): SessionAccessToken;
    getSessionId(): string;
    setSessionId(value: string): SessionAccessToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionAccessToken.AsObject;
    static toObject(includeInstance: boolean, msg: SessionAccessToken): SessionAccessToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionAccessToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionAccessToken;
    static deserializeBinaryFromReader(message: SessionAccessToken, reader: jspb.BinaryReader): SessionAccessToken;
}

export namespace SessionAccessToken {
    export type AsObject = {
        token: string,
        type: string,
        expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sessionId: string,
    }
}

export class GenerateSessionTokenRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): GenerateSessionTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateSessionTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateSessionTokenRequest): GenerateSessionTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateSessionTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateSessionTokenRequest;
    static deserializeBinaryFromReader(message: GenerateSessionTokenRequest, reader: jspb.BinaryReader): GenerateSessionTokenRequest;
}

export namespace GenerateSessionTokenRequest {
    export type AsObject = {
        key: string,
    }
}

export class GenerateDefaultSessionTokenRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GenerateDefaultSessionTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateDefaultSessionTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateDefaultSessionTokenRequest): GenerateDefaultSessionTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateDefaultSessionTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateDefaultSessionTokenRequest;
    static deserializeBinaryFromReader(message: GenerateDefaultSessionTokenRequest, reader: jspb.BinaryReader): GenerateDefaultSessionTokenRequest;
}

export namespace GenerateDefaultSessionTokenRequest {
    export type AsObject = {
        parent: string,
    }
}
