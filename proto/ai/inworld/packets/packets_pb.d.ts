// package: ai.inworld.packets
// file: ai/inworld/packets/packets.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ai_inworld_options_options_pb from "../../../ai/inworld/options/options_pb";
import * as ai_inworld_engine_configuration_configuration_pb from "../../../ai/inworld/engine/configuration/configuration_pb";
import * as ai_inworld_language_codes_language_codes_pb from "../../../ai/inworld/language_codes/language_codes_pb";

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
    WORLD = 3,
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
    getCorrelationId(): string;
    setCorrelationId(value: string): PacketId;

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
        correlationId: string,
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

    hasDebugInfo(): boolean;
    clearDebugInfo(): void;
    getDebugInfo(): DebugInfoEvent | undefined;
    setDebugInfo(value?: DebugInfoEvent): InworldPacket;

    hasSessionControl(): boolean;
    clearSessionControl(): void;
    getSessionControl(): SessionControlEvent | undefined;
    setSessionControl(value?: SessionControlEvent): InworldPacket;

    hasSessionControlResponse(): boolean;
    clearSessionControlResponse(): void;
    getSessionControlResponse(): SessionControlResponseEvent | undefined;
    setSessionControlResponse(value?: SessionControlResponseEvent): InworldPacket;

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
        packetId?: PacketId.AsObject,
        text?: TextEvent.AsObject,
        control?: ControlEvent.AsObject,
        audioChunk?: AudioChunk.AsObject,
        custom?: CustomEvent.AsObject,
        cancelresponses?: CancelResponsesEvent.AsObject,
        emotion?: EmotionEvent.AsObject,
        dataChunk?: DataChunk.AsObject,
        action?: ActionEvent.AsObject,
        mutation?: MutationEvent.AsObject,
        loadSceneOutput?: LoadSceneOutputEvent.AsObject,
        debugInfo?: DebugInfoEvent.AsObject,
        sessionControl?: SessionControlEvent.AsObject,
        sessionControlResponse?: SessionControlResponseEvent.AsObject,
    }

    export enum PacketCase {
        PACKET_NOT_SET = 0,
        TEXT = 2,
        CONTROL = 3,
        AUDIO_CHUNK = 4,
        CUSTOM = 8,
        CANCELRESPONSES = 10,
        EMOTION = 11,
        DATA_CHUNK = 12,
        ACTION = 13,
        MUTATION = 15,
        LOAD_SCENE_OUTPUT = 16,
        DEBUG_INFO = 18,
        SESSION_CONTROL = 19,
        SESSION_CONTROL_RESPONSE = 20,
    }

}

export class TextEvent extends jspb.Message { 
    getText(): string;
    setText(value: string): TextEvent;
    getSourceType(): TextEvent.SourceType;
    setSourceType(value: TextEvent.SourceType): TextEvent;
    getFinal(): boolean;
    setFinal(value: boolean): TextEvent;

    hasModelInfo(): boolean;
    clearModelInfo(): void;
    getModelInfo(): TextEvent.ModelInfo | undefined;
    setModelInfo(value?: TextEvent.ModelInfo): TextEvent;

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
        modelInfo?: TextEvent.ModelInfo.AsObject,
    }


    export class ModelInfo extends jspb.Message { 
        getService(): string;
        setService(value: string): ModelInfo;
        getModel(): string;
        setModel(value: string): ModelInfo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ModelInfo.AsObject;
        static toObject(includeInstance: boolean, msg: ModelInfo): ModelInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ModelInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ModelInfo;
        static deserializeBinaryFromReader(message: ModelInfo, reader: jspb.BinaryReader): ModelInfo;
    }

    export namespace ModelInfo {
        export type AsObject = {
            service: string,
            model: string,
        }
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
    getAudioformat(): DataChunk.AudioFormat;
    setAudioformat(value: DataChunk.AudioFormat): DataChunk;

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
        audioformat: DataChunk.AudioFormat,
    }

    export enum DataType {
    UNSPECIFIED = 0,
    AUDIO = 1,
    SILENCE = 3,
    STATE = 4,
    }

    export enum AudioFormat {
    UNSPECIFIED_AUDIO_FORMAT = 0,
    AUDIO_MP3 = 1,
    AUDIO_PCM_16000 = 2,
    AUDIO_PCM_22050 = 3,
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

export class RelationInfo extends jspb.Message { 

    hasRelationState(): boolean;
    clearRelationState(): void;
    getRelationState(): RelationInfo.RelationAttributes | undefined;
    setRelationState(value?: RelationInfo.RelationAttributes): RelationInfo;

    hasRelationUpdate(): boolean;
    clearRelationUpdate(): void;
    getRelationUpdate(): RelationInfo.RelationAttributes | undefined;
    setRelationUpdate(value?: RelationInfo.RelationAttributes): RelationInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelationInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RelationInfo): RelationInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelationInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelationInfo;
    static deserializeBinaryFromReader(message: RelationInfo, reader: jspb.BinaryReader): RelationInfo;
}

export namespace RelationInfo {
    export type AsObject = {
        relationState?: RelationInfo.RelationAttributes.AsObject,
        relationUpdate?: RelationInfo.RelationAttributes.AsObject,
    }


    export class RelationAttributes extends jspb.Message { 
        getTrust(): number;
        setTrust(value: number): RelationAttributes;
        getRespect(): number;
        setRespect(value: number): RelationAttributes;
        getFamiliar(): number;
        setFamiliar(value: number): RelationAttributes;
        getFlirtatious(): number;
        setFlirtatious(value: number): RelationAttributes;
        getAttraction(): number;
        setAttraction(value: number): RelationAttributes;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RelationAttributes.AsObject;
        static toObject(includeInstance: boolean, msg: RelationAttributes): RelationAttributes.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RelationAttributes, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RelationAttributes;
        static deserializeBinaryFromReader(message: RelationAttributes, reader: jspb.BinaryReader): RelationAttributes;
    }

    export namespace RelationAttributes {
        export type AsObject = {
            trust: number,
            respect: number,
            familiar: number,
            flirtatious: number,
            attraction: number,
        }
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

    hasModifyExactResponse(): boolean;
    clearModifyExactResponse(): void;
    getModifyExactResponse(): ModifyExactResponse | undefined;
    setModifyExactResponse(value?: ModifyExactResponse): MutationEvent;

    hasLoadCharacters(): boolean;
    clearLoadCharacters(): void;
    getLoadCharacters(): LoadCharacters | undefined;
    setLoadCharacters(value?: LoadCharacters): MutationEvent;

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
        modifyExactResponse?: ModifyExactResponse.AsObject,
        loadCharacters?: LoadCharacters.AsObject,
    }

    export enum MutationCase {
        MUTATION_NOT_SET = 0,
        CANCEL_RESPONSES = 1,
        REGENERATE_RESPONSE = 2,
        APPLY_RESPONSE = 3,
        LOAD_SCENE = 4,
        MODIFY_EXACT_RESPONSE = 5,
        LOAD_CHARACTERS = 6,
    }

}

export class SessionControlResponseEvent extends jspb.Message { 

    hasLoadedScene(): boolean;
    clearLoadedScene(): void;
    getLoadedScene(): LoadedScene | undefined;
    setLoadedScene(value?: LoadedScene): SessionControlResponseEvent;

    hasLoadedCharacters(): boolean;
    clearLoadedCharacters(): void;
    getLoadedCharacters(): LoadedCharacters | undefined;
    setLoadedCharacters(value?: LoadedCharacters): SessionControlResponseEvent;

    getResponseCase(): SessionControlResponseEvent.ResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionControlResponseEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SessionControlResponseEvent): SessionControlResponseEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionControlResponseEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionControlResponseEvent;
    static deserializeBinaryFromReader(message: SessionControlResponseEvent, reader: jspb.BinaryReader): SessionControlResponseEvent;
}

export namespace SessionControlResponseEvent {
    export type AsObject = {
        loadedScene?: LoadedScene.AsObject,
        loadedCharacters?: LoadedCharacters.AsObject,
    }

    export enum ResponseCase {
        RESPONSE_NOT_SET = 0,
        LOADED_SCENE = 1,
        LOADED_CHARACTERS = 2,
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

export class LoadedScene extends jspb.Message { 
    clearAgentsList(): void;
    getAgentsList(): Array<Agent>;
    setAgentsList(value: Array<Agent>): LoadedScene;
    addAgents(value?: Agent, index?: number): Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadedScene.AsObject;
    static toObject(includeInstance: boolean, msg: LoadedScene): LoadedScene.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadedScene, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadedScene;
    static deserializeBinaryFromReader(message: LoadedScene, reader: jspb.BinaryReader): LoadedScene;
}

export namespace LoadedScene {
    export type AsObject = {
        agentsList: Array<Agent.AsObject>,
    }
}

export class LoadCharacters extends jspb.Message { 
    clearNameList(): void;
    getNameList(): Array<LoadCharacters.CharacterName>;
    setNameList(value: Array<LoadCharacters.CharacterName>): LoadCharacters;
    addName(value?: LoadCharacters.CharacterName, index?: number): LoadCharacters.CharacterName;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadCharacters.AsObject;
    static toObject(includeInstance: boolean, msg: LoadCharacters): LoadCharacters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadCharacters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadCharacters;
    static deserializeBinaryFromReader(message: LoadCharacters, reader: jspb.BinaryReader): LoadCharacters;
}

export namespace LoadCharacters {
    export type AsObject = {
        nameList: Array<LoadCharacters.CharacterName.AsObject>,
    }


    export class CharacterName extends jspb.Message { 
        getName(): string;
        setName(value: string): CharacterName;
        getLanguageCode(): ai_inworld_language_codes_language_codes_pb.LanguageCode;
        setLanguageCode(value: ai_inworld_language_codes_language_codes_pb.LanguageCode): CharacterName;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CharacterName.AsObject;
        static toObject(includeInstance: boolean, msg: CharacterName): CharacterName.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CharacterName, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CharacterName;
        static deserializeBinaryFromReader(message: CharacterName, reader: jspb.BinaryReader): CharacterName;
    }

    export namespace CharacterName {
        export type AsObject = {
            name: string,
            languageCode: ai_inworld_language_codes_language_codes_pb.LanguageCode,
        }
    }

}

export class LoadedCharacters extends jspb.Message { 
    clearAgentsList(): void;
    getAgentsList(): Array<Agent>;
    setAgentsList(value: Array<Agent>): LoadedCharacters;
    addAgents(value?: Agent, index?: number): Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadedCharacters.AsObject;
    static toObject(includeInstance: boolean, msg: LoadedCharacters): LoadedCharacters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadedCharacters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadedCharacters;
    static deserializeBinaryFromReader(message: LoadedCharacters, reader: jspb.BinaryReader): LoadedCharacters;
}

export namespace LoadedCharacters {
    export type AsObject = {
        agentsList: Array<Agent.AsObject>,
    }
}

export class UnloadCharacters extends jspb.Message { 
    clearAgentsList(): void;
    getAgentsList(): Array<Agent>;
    setAgentsList(value: Array<Agent>): UnloadCharacters;
    addAgents(value?: Agent, index?: number): Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnloadCharacters.AsObject;
    static toObject(includeInstance: boolean, msg: UnloadCharacters): UnloadCharacters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnloadCharacters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnloadCharacters;
    static deserializeBinaryFromReader(message: UnloadCharacters, reader: jspb.BinaryReader): UnloadCharacters;
}

export namespace UnloadCharacters {
    export type AsObject = {
        agentsList: Array<Agent.AsObject>,
    }
}

export class ModifyExactResponse extends jspb.Message { 
    getInteractionId(): string;
    setInteractionId(value: string): ModifyExactResponse;
    getExactText(): string;
    setExactText(value: string): ModifyExactResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyExactResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyExactResponse): ModifyExactResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyExactResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyExactResponse;
    static deserializeBinaryFromReader(message: ModifyExactResponse, reader: jspb.BinaryReader): ModifyExactResponse;
}

export namespace ModifyExactResponse {
    export type AsObject = {
        interactionId: string,
        exactText: string,
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

export class DebugInfoEvent extends jspb.Message { 

    hasRelation(): boolean;
    clearRelation(): void;
    getRelation(): RelationInfo | undefined;
    setRelation(value?: RelationInfo): DebugInfoEvent;

    getInfoCase(): DebugInfoEvent.InfoCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DebugInfoEvent.AsObject;
    static toObject(includeInstance: boolean, msg: DebugInfoEvent): DebugInfoEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DebugInfoEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DebugInfoEvent;
    static deserializeBinaryFromReader(message: DebugInfoEvent, reader: jspb.BinaryReader): DebugInfoEvent;
}

export namespace DebugInfoEvent {
    export type AsObject = {
        relation?: RelationInfo.AsObject,
    }

    export enum InfoCase {
        INFO_NOT_SET = 0,
        RELATION = 1,
    }

}

export class SessionControlEvent extends jspb.Message { 

    hasSessionConfiguration(): boolean;
    clearSessionConfiguration(): void;
    getSessionConfiguration(): ai_inworld_engine_configuration_configuration_pb.SessionConfiguration | undefined;
    setSessionConfiguration(value?: ai_inworld_engine_configuration_configuration_pb.SessionConfiguration): SessionControlEvent;

    hasUserConfiguration(): boolean;
    clearUserConfiguration(): void;
    getUserConfiguration(): ai_inworld_engine_configuration_configuration_pb.UserConfiguration | undefined;
    setUserConfiguration(value?: ai_inworld_engine_configuration_configuration_pb.UserConfiguration): SessionControlEvent;

    hasClientConfiguration(): boolean;
    clearClientConfiguration(): void;
    getClientConfiguration(): ai_inworld_engine_configuration_configuration_pb.ClientConfiguration | undefined;
    setClientConfiguration(value?: ai_inworld_engine_configuration_configuration_pb.ClientConfiguration): SessionControlEvent;

    hasCapabilitiesConfiguration(): boolean;
    clearCapabilitiesConfiguration(): void;
    getCapabilitiesConfiguration(): ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration | undefined;
    setCapabilitiesConfiguration(value?: ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration): SessionControlEvent;

    hasContinuation(): boolean;
    clearContinuation(): void;
    getContinuation(): Continuation | undefined;
    setContinuation(value?: Continuation): SessionControlEvent;

    getSessionControlCase(): SessionControlEvent.SessionControlCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionControlEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SessionControlEvent): SessionControlEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionControlEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionControlEvent;
    static deserializeBinaryFromReader(message: SessionControlEvent, reader: jspb.BinaryReader): SessionControlEvent;
}

export namespace SessionControlEvent {
    export type AsObject = {
        sessionConfiguration?: ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.AsObject,
        userConfiguration?: ai_inworld_engine_configuration_configuration_pb.UserConfiguration.AsObject,
        clientConfiguration?: ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.AsObject,
        capabilitiesConfiguration?: ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.AsObject,
        continuation?: Continuation.AsObject,
    }

    export enum SessionControlCase {
        SESSION_CONTROL_NOT_SET = 0,
        SESSION_CONFIGURATION = 1,
        USER_CONFIGURATION = 2,
        CLIENT_CONFIGURATION = 3,
        CAPABILITIES_CONFIGURATION = 4,
        CONTINUATION = 5,
    }

}

export class Continuation extends jspb.Message { 

    hasContinuationInfo(): boolean;
    clearContinuationInfo(): void;
    getContinuationInfo(): Continuation.ContinuationInfo | undefined;
    setContinuationInfo(value?: Continuation.ContinuationInfo): Continuation;
    getContinuationType(): Continuation.ContinuationType;
    setContinuationType(value: Continuation.ContinuationType): Continuation;

    hasDialogHistory(): boolean;
    clearDialogHistory(): void;
    getDialogHistory(): DialogHistory | undefined;
    setDialogHistory(value?: DialogHistory): Continuation;
    getExternallySavedState(): Uint8Array | string;
    getExternallySavedState_asU8(): Uint8Array;
    getExternallySavedState_asB64(): string;
    setExternallySavedState(value: Uint8Array | string): Continuation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Continuation.AsObject;
    static toObject(includeInstance: boolean, msg: Continuation): Continuation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Continuation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Continuation;
    static deserializeBinaryFromReader(message: Continuation, reader: jspb.BinaryReader): Continuation;
}

export namespace Continuation {
    export type AsObject = {
        continuationInfo?: Continuation.ContinuationInfo.AsObject,
        continuationType: Continuation.ContinuationType,
        dialogHistory?: DialogHistory.AsObject,
        externallySavedState: Uint8Array | string,
    }


    export class ContinuationInfo extends jspb.Message { 

        hasPassedTime(): boolean;
        clearPassedTime(): void;
        getPassedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setPassedTime(value?: google_protobuf_timestamp_pb.Timestamp): ContinuationInfo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ContinuationInfo.AsObject;
        static toObject(includeInstance: boolean, msg: ContinuationInfo): ContinuationInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ContinuationInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ContinuationInfo;
        static deserializeBinaryFromReader(message: ContinuationInfo, reader: jspb.BinaryReader): ContinuationInfo;
    }

    export namespace ContinuationInfo {
        export type AsObject = {
            passedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }


    export enum ContinuationType {
    CONTINUATION_TYPE_UNKNOWN = 0,
    CONTINUATION_TYPE_EXTERNALLY_SAVED_STATE = 1,
    CONTINUATION_TYPE_DIALOG_HISTORY = 2,
    }

}

export class DialogHistory extends jspb.Message { 
    clearHistoryList(): void;
    getHistoryList(): Array<DialogHistory.HistoryItem>;
    setHistoryList(value: Array<DialogHistory.HistoryItem>): DialogHistory;
    addHistory(value?: DialogHistory.HistoryItem, index?: number): DialogHistory.HistoryItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DialogHistory.AsObject;
    static toObject(includeInstance: boolean, msg: DialogHistory): DialogHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DialogHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DialogHistory;
    static deserializeBinaryFromReader(message: DialogHistory, reader: jspb.BinaryReader): DialogHistory;
}

export namespace DialogHistory {
    export type AsObject = {
        historyList: Array<DialogHistory.HistoryItem.AsObject>,
    }


    export class HistoryItem extends jspb.Message { 

        hasActor(): boolean;
        clearActor(): void;
        getActor(): Actor | undefined;
        setActor(value?: Actor): HistoryItem;
        getText(): string;
        setText(value: string): HistoryItem;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HistoryItem.AsObject;
        static toObject(includeInstance: boolean, msg: HistoryItem): HistoryItem.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HistoryItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HistoryItem;
        static deserializeBinaryFromReader(message: HistoryItem, reader: jspb.BinaryReader): HistoryItem;
    }

    export namespace HistoryItem {
        export type AsObject = {
            actor?: Actor.AsObject,
            text: string,
        }
    }

}

export class Relations extends jspb.Message { 

    hasActor(): boolean;
    clearActor(): void;
    getActor(): Actor | undefined;
    setActor(value?: Actor): Relations;
    clearRelationsList(): void;
    getRelationsList(): Array<Relations.Relation>;
    setRelationsList(value: Array<Relations.Relation>): Relations;
    addRelations(value?: Relations.Relation, index?: number): Relations.Relation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Relations.AsObject;
    static toObject(includeInstance: boolean, msg: Relations): Relations.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Relations, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Relations;
    static deserializeBinaryFromReader(message: Relations, reader: jspb.BinaryReader): Relations;
}

export namespace Relations {
    export type AsObject = {
        actor?: Actor.AsObject,
        relationsList: Array<Relations.Relation.AsObject>,
    }


    export class Relation extends jspb.Message { 
        getType(): string;
        setType(value: string): Relation;
        getLabel(): string;
        setLabel(value: string): Relation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Relation.AsObject;
        static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Relation;
        static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
    }

    export namespace Relation {
        export type AsObject = {
            type: string,
            label: string,
        }
    }

}

export enum Playback {
    UNSPECIFIED = 0,
    INTERACTION = 1,
    INTERACTION_END = 2,
    UTTERANCE = 3,
}
