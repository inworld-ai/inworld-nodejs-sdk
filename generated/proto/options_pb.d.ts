// package: ai.inworld.options
// file: options.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class ExampleValue extends jspb.Message { 
    clearExampleList(): void;
    getExampleList(): Array<google_protobuf_struct_pb.Value>;
    setExampleList(value: Array<google_protobuf_struct_pb.Value>): ExampleValue;
    addExample(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExampleValue.AsObject;
    static toObject(includeInstance: boolean, msg: ExampleValue): ExampleValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExampleValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExampleValue;
    static deserializeBinaryFromReader(message: ExampleValue, reader: jspb.BinaryReader): ExampleValue;
}

export namespace ExampleValue {
    export type AsObject = {
        exampleList: Array<google_protobuf_struct_pb.Value.AsObject>,
    }
}

export const examples: jspb.ExtensionFieldInfo<ExampleValue>;
