// package: ai.inworld.packets
// file: packets.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Actor extends jspb.Message { 
    getType(): Actor.Type;
    setType(value: Actor.Type): Actor;
    getName(): string;
    setName(value: string): Actor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Actor.AsObject;
    static toObject(includeInstance: boolean, msg: Actor): Actor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Actor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Actor;
    static deserializeBinaryFromReader(message: Actor, reader: jspb.BinaryReader): Actor;
}

export namespace Actor {
    export type AsObject = {
        type: Actor.Type,
        name: string,
    }

    export enum Type {
    UNKNOWN = 0,
    PLAYER = 1,
    AGENT = 2,
    }

}

export class Routing extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): Actor | undefined;
    setSource(value?: Actor): Routing;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Actor | undefined;
    setTarget(value?: Actor): Routing;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Routing.AsObject;
    static toObject(includeInstance: boolean, msg: Routing): Routing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Routing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Routing;
    static deserializeBinaryFromReader(message: Routing, reader: jspb.BinaryReader): Routing;
}

export namespace Routing {
    export type AsObject = {
        source?: Actor.AsObject,
        target?: Actor.AsObject,
    }
}

export class PacketId extends jspb.Message { 
    getPacketId(): string;
    setPacketId(value: string): PacketId;
    getUtteranceId(): string;
    setUtteranceId(value: string): PacketId;
    getInteractionId(): string;
    setInteractionId(value: string): PacketId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PacketId.AsObject;
    static toObject(includeInstance: boolean, msg: PacketId): PacketId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PacketId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PacketId;
    static deserializeBinaryFromReader(message: PacketId, reader: jspb.BinaryReader): PacketId;
}

export namespace PacketId {
    export type AsObject = {
        packetId: string,
        utteranceId: string,
        interactionId: string,
    }
}

export class InworldPacket extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): InworldPacket;

    hasRouting(): boolean;
    clearRouting(): void;
    getRouting(): Routing | undefined;
    setRouting(value?: Routing): InworldPacket;
    getOldPacketId(): string;
    setOldPacketId(value: string): InworldPacket;

    hasPacketId(): boolean;
    clearPacketId(): void;
    getPacketId(): PacketId | undefined;
    setPacketId(value?: PacketId): InworldPacket;

    hasText(): boolean;
    clearText(): void;
    getText(): TextEvent | undefined;
    setText(value?: TextEvent): InworldPacket;

    hasControl(): boolean;
    clearControl(): void;
    getControl(): ControlEvent | undefined;
    setControl(value?: ControlEvent): InworldPacket;

    hasAudioChunk(): boolean;
    clearAudioChunk(): void;
    getAudioChunk(): AudioChunk | undefined;
    setAudioChunk(value?: AudioChunk): InworldPacket;

    hasGesture(): boolean;
    clearGesture(): void;
    getGesture(): GestureEvent | undefined;
    setGesture(value?: GestureEvent): InworldPacket;

    hasCustom(): boolean;
    clearCustom(): void;
    getCustom(): CustomEvent | undefined;
    setCustom(value?: CustomEvent): InworldPacket;

    hasCancelresponses(): boolean;
    clearCancelresponses(): void;
    getCancelresponses(): CancelResponsesEvent | undefined;
    setCancelresponses(value?: CancelResponsesEvent): InworldPacket;

    hasEmotion(): boolean;
    clearEmotion(): void;
    getEmotion(): EmotionEvent | undefined;
    setEmotion(value?: EmotionEvent): InworldPacket;

    hasDataChunk(): boolean;
    clearDataChunk(): void;
    getDataChunk(): DataChunk | undefined;
    setDataChunk(value?: DataChunk): InworldPacket;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): ActionEvent | undefined;
    setAction(value?: ActionEvent): InworldPacket;

    hasMutation(): boolean;
    clearMutation(): void;
    getMutation(): MutationEvent | undefined;
    setMutation(value?: MutationEvent): InworldPacket;

    hasLoadSceneOutput(): boolean;
    clearLoadSceneOutput(): void;
    getLoadSceneOutput(): LoadSceneOutputEvent | undefined;
    setLoadSceneOutput(value?: LoadSceneOutputEvent): InworldPacket;

    getPacketCase(): InworldPacket.PacketCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InworldPacket.AsObject;
    static toObject(includeInstance: boolean, msg: InworldPacket): InworldPacket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InworldPacket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InworldPacket;
    static deserializeBinaryFromReader(message: InworldPacket, reader: jspb.BinaryReader): InworldPacket;
}

export namespace InworldPacket {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        routing?: Routing.AsObject,
        oldPacketId: string,
        packetId?: PacketId.AsObject,
        text?: TextEvent.AsObject,
        control?: ControlEvent.AsObject,
        audioChunk?: AudioChunk.AsObject,
        gesture?: GestureEvent.AsObject,
        custom?: CustomEvent.AsObject,
        cancelresponses?: CancelResponsesEvent.AsObject,
        emotion?: EmotionEvent.AsObject,
        dataChunk?: DataChunk.AsObject,
        action?: ActionEvent.AsObject,
        mutation?: MutationEvent.AsObject,
        loadSceneOutput?: LoadSceneOutputEvent.AsObject,
    }

    export enum PacketCase {
        PACKET_NOT_SET = 0,
        TEXT = 2,
        CONTROL = 3,
        AUDIO_CHUNK = 4,
        GESTURE = 5,
        CUSTOM = 8,
        CANCELRESPONSES = 10,
        EMOTION = 11,
        DATA_CHUNK = 12,
        ACTION = 13,
        MUTATION = 15,
        LOAD_SCENE_OUTPUT = 16,
    }

}

export class TextEvent extends jspb.Message { 
    getText(): string;
    setText(value: string): TextEvent;
    getSourceType(): TextEvent.SourceType;
    setSourceType(value: TextEvent.SourceType): TextEvent;
    getFinal(): boolean;
    setFinal(value: boolean): TextEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TextEvent): TextEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextEvent;
    static deserializeBinaryFromReader(message: TextEvent, reader: jspb.BinaryReader): TextEvent;
}

export namespace TextEvent {
    export type AsObject = {
        text: string,
        sourceType: TextEvent.SourceType,
        pb_final: boolean,
    }

    export enum SourceType {
    UNKNOWN = 0,
    SPEECH_TO_TEXT = 1,
    TYPED_IN = 2,
    GENERATED = 3,
    FILLER = 4,
    }

}

export class ControlEvent extends jspb.Message { 
    getAction(): ControlEvent.Action;
    setAction(value: ControlEvent.Action): ControlEvent;
    getDescription(): string;
    setDescription(value: string): ControlEvent;

    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): google_protobuf_struct_pb.Struct | undefined;
    setPayload(value?: google_protobuf_struct_pb.Struct): ControlEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ControlEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ControlEvent): ControlEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ControlEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ControlEvent;
    static deserializeBinaryFromReader(message: ControlEvent, reader: jspb.BinaryReader): ControlEvent;
}

export namespace ControlEvent {
    export type AsObject = {
        action: ControlEvent.Action,
        description: string,
        payload?: google_protobuf_struct_pb.Struct.AsObject,
    }

    export enum Action {
    UNKNOWN = 0,
    AUDIO_SESSION_START = 1,
    AUDIO_SESSION_END = 2,
    INTERACTION_END = 3,
    TTS_PLAYBACK_START = 4,
    TTS_PLAYBACK_END = 5,
    TTS_PLAYBACK_MUTE = 6,
    TTS_PLAYBACK_UNMUTE = 7,
    WARNING = 8,
    SESSION_END = 9,
    }

}

export class AudioChunk extends jspb.Message { 
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): AudioChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioChunk.AsObject;
    static toObject(includeInstance: boolean, msg: AudioChunk): AudioChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioChunk;
    static deserializeBinaryFromReader(message: AudioChunk, reader: jspb.BinaryReader): AudioChunk;
}

export namespace AudioChunk {
    export type AsObject = {
        chunk: Uint8Array | string,
    }
}

export class GestureEvent extends jspb.Message { 
    getType(): GestureEvent.Type;
    setType(value: GestureEvent.Type): GestureEvent;
    getPlayback(): Playback;
    setPlayback(value: Playback): GestureEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GestureEvent.AsObject;
    static toObject(includeInstance: boolean, msg: GestureEvent): GestureEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GestureEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GestureEvent;
    static deserializeBinaryFromReader(message: GestureEvent, reader: jspb.BinaryReader): GestureEvent;
}

export namespace GestureEvent {
    export type AsObject = {
        type: GestureEvent.Type,
        playback: Playback,
    }

    export enum Type {
    GREETING = 0,
    FAREWELL = 1,
    AGREEMENT = 2,
    DISAGREEMENT = 3,
    GRATITUDE = 4,
    CELEBRATION = 5,
    BOREDOM = 6,
    UNCERTAINTY = 7,
    }

}

export class CustomEvent extends jspb.Message { 
    getName(): string;
    setName(value: string): CustomEvent;
    getPlayback(): Playback;
    setPlayback(value: Playback): CustomEvent;
    clearParametersList(): void;
    getParametersList(): Array<CustomEvent.Parameter>;
    setParametersList(value: Array<CustomEvent.Parameter>): CustomEvent;
    addParameters(value?: CustomEvent.Parameter, index?: number): CustomEvent.Parameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomEvent.AsObject;
    static toObject(includeInstance: boolean, msg: CustomEvent): CustomEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomEvent;
    static deserializeBinaryFromReader(message: CustomEvent, reader: jspb.BinaryReader): CustomEvent;
}

export namespace CustomEvent {
    export type AsObject = {
        name: string,
        playback: Playback,
        parametersList: Array<CustomEvent.Parameter.AsObject>,
    }


    export class Parameter extends jspb.Message { 
        getName(): string;
        setName(value: string): Parameter;
        getValue(): string;
        setValue(value: string): Parameter;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Parameter.AsObject;
        static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Parameter;
        static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
    }

    export namespace Parameter {
        export type AsObject = {
            name: string,
            value: string,
        }
    }

}

export class CancelResponsesEvent extends jspb.Message { 
    getInteractionId(): string;
    setInteractionId(value: string): CancelResponsesEvent;
    clearUtteranceIdList(): void;
    getUtteranceIdList(): Array<string>;
    setUtteranceIdList(value: Array<string>): CancelResponsesEvent;
    addUtteranceId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelResponsesEvent.AsObject;
    static toObject(includeInstance: boolean, msg: CancelResponsesEvent): CancelResponsesEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelResponsesEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelResponsesEvent;
    static deserializeBinaryFromReader(message: CancelResponsesEvent, reader: jspb.BinaryReader): CancelResponsesEvent;
}

export namespace CancelResponsesEvent {
    export type AsObject = {
        interactionId: string,
        utteranceIdList: Array<string>,
    }
}

export class EmotionEvent extends jspb.Message { 
    getJoy(): number;
    setJoy(value: number): EmotionEvent;
    getFear(): number;
    setFear(value: number): EmotionEvent;
    getTrust(): number;
    setTrust(value: number): EmotionEvent;
    getSurprise(): number;
    setSurprise(value: number): EmotionEvent;
    getBehavior(): EmotionEvent.SpaffCode;
    setBehavior(value: EmotionEvent.SpaffCode): EmotionEvent;
    getStrength(): EmotionEvent.Strength;
    setStrength(value: EmotionEvent.Strength): EmotionEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmotionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: EmotionEvent): EmotionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmotionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmotionEvent;
    static deserializeBinaryFromReader(message: EmotionEvent, reader: jspb.BinaryReader): EmotionEvent;
}

export namespace EmotionEvent {
    export type AsObject = {
        joy: number,
        fear: number,
        trust: number,
        surprise: number,
        behavior: EmotionEvent.SpaffCode,
        strength: EmotionEvent.Strength,
    }

    export enum SpaffCode {
    NEUTRAL = 0,
    DISGUST = 1,
    CONTEMPT = 2,
    BELLIGERENCE = 3,
    DOMINEERING = 4,
    CRITICISM = 5,
    ANGER = 6,
    TENSION = 7,
    TENSE_HUMOR = 8,
    DEFENSIVENESS = 9,
    WHINING = 10,
    SADNESS = 11,
    STONEWALLING = 12,
    INTEREST = 13,
    VALIDATION = 14,
    AFFECTION = 15,
    HUMOR = 16,
    SURPRISE = 17,
    JOY = 18,
    }

    export enum Strength {
    UNSPECIFIED = 0,
    WEAK = 1,
    STRONG = 2,
    NORMAL = 3,
    }

}

export class DataChunk extends jspb.Message { 

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): DataChunk;

    hasDurationMs(): boolean;
    clearDurationMs(): void;
    getDurationMs(): number;
    setDurationMs(value: number): DataChunk;
    getType(): DataChunk.DataType;
    setType(value: DataChunk.DataType): DataChunk;
    clearAdditionalPhonemeInfoList(): void;
    getAdditionalPhonemeInfoList(): Array<AdditionalPhonemeInfo>;
    setAdditionalPhonemeInfoList(value: Array<AdditionalPhonemeInfo>): DataChunk;
    addAdditionalPhonemeInfo(value?: AdditionalPhonemeInfo, index?: number): AdditionalPhonemeInfo;

    getDataCase(): DataChunk.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataChunk.AsObject;
    static toObject(includeInstance: boolean, msg: DataChunk): DataChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataChunk;
    static deserializeBinaryFromReader(message: DataChunk, reader: jspb.BinaryReader): DataChunk;
}

export namespace DataChunk {
    export type AsObject = {
        chunk: Uint8Array | string,
        durationMs: number,
        type: DataChunk.DataType,
        additionalPhonemeInfoList: Array<AdditionalPhonemeInfo.AsObject>,
    }

    export enum DataType {
    UNSPECIFIED = 0,
    AUDIO = 1,
    ANIMATION = 2,
    SILENCE = 3,
    STATE = 4,
    }


    export enum DataCase {
        DATA_NOT_SET = 0,
        CHUNK = 1,
        DURATION_MS = 3,
    }

}

export class AdditionalPhonemeInfo extends jspb.Message { 
    getPhoneme(): string;
    setPhoneme(value: string): AdditionalPhonemeInfo;

    hasStartOffset(): boolean;
    clearStartOffset(): void;
    getStartOffset(): google_protobuf_duration_pb.Duration | undefined;
    setStartOffset(value?: google_protobuf_duration_pb.Duration): AdditionalPhonemeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdditionalPhonemeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AdditionalPhonemeInfo): AdditionalPhonemeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdditionalPhonemeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdditionalPhonemeInfo;
    static deserializeBinaryFromReader(message: AdditionalPhonemeInfo, reader: jspb.BinaryReader): AdditionalPhonemeInfo;
}

export namespace AdditionalPhonemeInfo {
    export type AsObject = {
        phoneme: string,
        startOffset?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ActionEvent extends jspb.Message { 

    hasNarratedAction(): boolean;
    clearNarratedAction(): void;
    getNarratedAction(): NarratedAction | undefined;
    setNarratedAction(value?: NarratedAction): ActionEvent;
    getPlayback(): Playback;
    setPlayback(value: Playback): ActionEvent;

    getActionCase(): ActionEvent.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ActionEvent): ActionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionEvent;
    static deserializeBinaryFromReader(message: ActionEvent, reader: jspb.BinaryReader): ActionEvent;
}

export namespace ActionEvent {
    export type AsObject = {
        narratedAction?: NarratedAction.AsObject,
        playback: Playback,
    }

    export enum ActionCase {
        ACTION_NOT_SET = 0,
        NARRATED_ACTION = 1,
    }

}

export class NarratedAction extends jspb.Message { 
    getContent(): string;
    setContent(value: string): NarratedAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NarratedAction.AsObject;
    static toObject(includeInstance: boolean, msg: NarratedAction): NarratedAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NarratedAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NarratedAction;
    static deserializeBinaryFromReader(message: NarratedAction, reader: jspb.BinaryReader): NarratedAction;
}

export namespace NarratedAction {
    export type AsObject = {
        content: string,
    }
}

export class MutationEvent extends jspb.Message { 

    hasCancelResponses(): boolean;
    clearCancelResponses(): void;
    getCancelResponses(): CancelResponses | undefined;
    setCancelResponses(value?: CancelResponses): MutationEvent;

    hasRegenerateResponse(): boolean;
    clearRegenerateResponse(): void;
    getRegenerateResponse(): RegenerateResponse | undefined;
    setRegenerateResponse(value?: RegenerateResponse): MutationEvent;

    hasApplyResponse(): boolean;
    clearApplyResponse(): void;
    getApplyResponse(): ApplyResponse | undefined;
    setApplyResponse(value?: ApplyResponse): MutationEvent;

    hasLoadScene(): boolean;
    clearLoadScene(): void;
    getLoadScene(): LoadScene | undefined;
    setLoadScene(value?: LoadScene): MutationEvent;

    getMutationCase(): MutationEvent.MutationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MutationEvent.AsObject;
    static toObject(includeInstance: boolean, msg: MutationEvent): MutationEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MutationEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MutationEvent;
    static deserializeBinaryFromReader(message: MutationEvent, reader: jspb.BinaryReader): MutationEvent;
}

export namespace MutationEvent {
    export type AsObject = {
        cancelResponses?: CancelResponses.AsObject,
        regenerateResponse?: RegenerateResponse.AsObject,
        applyResponse?: ApplyResponse.AsObject,
        loadScene?: LoadScene.AsObject,
    }

    export enum MutationCase {
        MUTATION_NOT_SET = 0,
        CANCEL_RESPONSES = 1,
        REGENERATE_RESPONSE = 2,
        APPLY_RESPONSE = 3,
        LOAD_SCENE = 4,
    }

}

export class CancelResponses extends jspb.Message { 
    getInteractionId(): string;
    setInteractionId(value: string): CancelResponses;
    clearUtteranceIdList(): void;
    getUtteranceIdList(): Array<string>;
    setUtteranceIdList(value: Array<string>): CancelResponses;
    addUtteranceId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelResponses.AsObject;
    static toObject(includeInstance: boolean, msg: CancelResponses): CancelResponses.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelResponses, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelResponses;
    static deserializeBinaryFromReader(message: CancelResponses, reader: jspb.BinaryReader): CancelResponses;
}

export namespace CancelResponses {
    export type AsObject = {
        interactionId: string,
        utteranceIdList: Array<string>,
    }
}

export class RegenerateResponse extends jspb.Message { 
    getInteractionId(): string;
    setInteractionId(value: string): RegenerateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegenerateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegenerateResponse): RegenerateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegenerateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegenerateResponse;
    static deserializeBinaryFromReader(message: RegenerateResponse, reader: jspb.BinaryReader): RegenerateResponse;
}

export namespace RegenerateResponse {
    export type AsObject = {
        interactionId: string,
    }
}

export class ApplyResponse extends jspb.Message { 

    hasPacketId(): boolean;
    clearPacketId(): void;
    getPacketId(): PacketId | undefined;
    setPacketId(value?: PacketId): ApplyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ApplyResponse): ApplyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplyResponse;
    static deserializeBinaryFromReader(message: ApplyResponse, reader: jspb.BinaryReader): ApplyResponse;
}

export namespace ApplyResponse {
    export type AsObject = {
        packetId?: PacketId.AsObject,
    }
}

export class LoadScene extends jspb.Message { 
    getName(): string;
    setName(value: string): LoadScene;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadScene.AsObject;
    static toObject(includeInstance: boolean, msg: LoadScene): LoadScene.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadScene, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadScene;
    static deserializeBinaryFromReader(message: LoadScene, reader: jspb.BinaryReader): LoadScene;
}

export namespace LoadScene {
    export type AsObject = {
        name: string,
    }
}

export class LoadSceneOutputEvent extends jspb.Message { 
    clearAgentsList(): void;
    getAgentsList(): Array<LoadSceneOutputEvent.Agent>;
    setAgentsList(value: Array<LoadSceneOutputEvent.Agent>): LoadSceneOutputEvent;
    addAgents(value?: LoadSceneOutputEvent.Agent, index?: number): LoadSceneOutputEvent.Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadSceneOutputEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LoadSceneOutputEvent): LoadSceneOutputEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadSceneOutputEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadSceneOutputEvent;
    static deserializeBinaryFromReader(message: LoadSceneOutputEvent, reader: jspb.BinaryReader): LoadSceneOutputEvent;
}

export namespace LoadSceneOutputEvent {
    export type AsObject = {
        agentsList: Array<LoadSceneOutputEvent.Agent.AsObject>,
    }


    export class Agent extends jspb.Message { 
        getAgentId(): string;
        setAgentId(value: string): Agent;
        getBrainName(): string;
        setBrainName(value: string): Agent;
        getGivenName(): string;
        setGivenName(value: string): Agent;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Agent.AsObject;
        static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Agent;
        static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
    }

    export namespace Agent {
        export type AsObject = {
            agentId: string,
            brainName: string,
            givenName: string,
        }
    }

}

export enum Playback {
    UNSPECIFIED = 0,
    INTERACTION = 1,
    INTERACTION_END = 2,
    UTTERANCE = 3,
}
