// package: ai.inworld.engine.v1
// file: ai/inworld/engine/v1/feedback.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";



import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class InteractionFeedback extends jspb.Message { 
    getIsLike(): boolean;
    setIsLike(value: boolean): InteractionFeedback;
    clearTypeList(): void;
    getTypeList(): Array<InteractionDislikeType>;
    setTypeList(value: Array<InteractionDislikeType>): InteractionFeedback;
    addType(value: InteractionDislikeType, index?: number): InteractionDislikeType;
    getComment(): string;
    setComment(value: string): InteractionFeedback;
    getName(): string;
    setName(value: string): InteractionFeedback;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InteractionFeedback.AsObject;
    static toObject(includeInstance: boolean, msg: InteractionFeedback): InteractionFeedback.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InteractionFeedback, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InteractionFeedback;
    static deserializeBinaryFromReader(message: InteractionFeedback, reader: jspb.BinaryReader): InteractionFeedback;
}

export namespace InteractionFeedback {
    export type AsObject = {
        isLike: boolean,
        typeList: Array<InteractionDislikeType>,
        comment: string,
        name: string,
    }
}

export class CreateInteractionFeedbackRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateInteractionFeedbackRequest;

    hasInteractionFeedback(): boolean;
    clearInteractionFeedback(): void;
    getInteractionFeedback(): InteractionFeedback | undefined;
    setInteractionFeedback(value?: InteractionFeedback): CreateInteractionFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInteractionFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInteractionFeedbackRequest): CreateInteractionFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInteractionFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInteractionFeedbackRequest;
    static deserializeBinaryFromReader(message: CreateInteractionFeedbackRequest, reader: jspb.BinaryReader): CreateInteractionFeedbackRequest;
}

export namespace CreateInteractionFeedbackRequest {
    export type AsObject = {
        parent: string,
        interactionFeedback?: InteractionFeedback.AsObject,
    }
}

export class DeleteInteractionFeedbackRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteInteractionFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInteractionFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInteractionFeedbackRequest): DeleteInteractionFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInteractionFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInteractionFeedbackRequest;
    static deserializeBinaryFromReader(message: DeleteInteractionFeedbackRequest, reader: jspb.BinaryReader): DeleteInteractionFeedbackRequest;
}

export namespace DeleteInteractionFeedbackRequest {
    export type AsObject = {
        name: string,
    }
}

export enum InteractionDislikeType {
    INTERACTION_DISLIKE_TYPE_UNSPECIFIED = 0,
    INTERACTION_DISLIKE_TYPE_IRRELEVANT = 1,
    INTERACTION_DISLIKE_TYPE_UNSAFE = 2,
    INTERACTION_DISLIKE_TYPE_UNTRUE = 3,
    INTERACTION_DISLIKE_TYPE_INCORRECT_USE_KNOWLEDGE = 4,
    INTERACTION_DISLIKE_TYPE_UNEXPECTED_ACTION = 5,
    INTERACTION_DISLIKE_TYPE_UNEXPECTED_GOAL_BEHAVIOR = 6,
    INTERACTION_DISLIKE_TYPE_REPETITION = 7,
    INTERACTION_DISLIKE_TYPE_OUT_OF_CHARACTER = 8,
    INTERACTION_DISLIKE_TYPE_TOO_LONG = 9,
}
