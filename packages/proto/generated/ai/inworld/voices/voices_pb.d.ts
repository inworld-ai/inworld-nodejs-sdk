// package: ai.inworld.voices
// file: ai/inworld/voices/voices.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as ai_inworld_language_codes_language_codes_pb from "../../../ai/inworld/language_codes/language_codes_pb";

export class InworldV2Metadata extends jspb.Message { 
    getVoiceId(): string;
    setVoiceId(value: string): InworldV2Metadata;
    getAccent(): Accent;
    setAccent(value: Accent): InworldV2Metadata;
    getCustom(): boolean;
    setCustom(value: boolean): InworldV2Metadata;

    hasVoiceAdjectives(): boolean;
    clearVoiceAdjectives(): void;
    getVoiceAdjectives(): InworldV2Metadata.VoiceAdjectives | undefined;
    setVoiceAdjectives(value?: InworldV2Metadata.VoiceAdjectives): InworldV2Metadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InworldV2Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: InworldV2Metadata): InworldV2Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InworldV2Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InworldV2Metadata;
    static deserializeBinaryFromReader(message: InworldV2Metadata, reader: jspb.BinaryReader): InworldV2Metadata;
}

export namespace InworldV2Metadata {
    export type AsObject = {
        voiceId: string,
        accent: Accent,
        custom: boolean,
        voiceAdjectives?: InworldV2Metadata.VoiceAdjectives.AsObject,
    }


    export class VoiceAdjectives extends jspb.Message { 
        clearAdjectivesList(): void;
        getAdjectivesList(): Array<string>;
        setAdjectivesList(value: Array<string>): VoiceAdjectives;
        addAdjectives(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): VoiceAdjectives.AsObject;
        static toObject(includeInstance: boolean, msg: VoiceAdjectives): VoiceAdjectives.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: VoiceAdjectives, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): VoiceAdjectives;
        static deserializeBinaryFromReader(message: VoiceAdjectives, reader: jspb.BinaryReader): VoiceAdjectives;
    }

    export namespace VoiceAdjectives {
        export type AsObject = {
            adjectivesList: Array<string>,
        }
    }

}

export class Voice extends jspb.Message { 
    getBasename(): string;
    setBasename(value: string): Voice;
    getTtsType(): TTSType;
    setTtsType(value: TTSType): Voice;
    getGender(): Gender;
    setGender(value: Gender): Voice;
    getPitch(): number;
    setPitch(value: number): Voice;
    getSpeakingRate(): number;
    setSpeakingRate(value: number): Voice;
    getRoboticVoiceFilterLevel(): number;
    setRoboticVoiceFilterLevel(value: number): Voice;

    getPhonemesOverridesMap(): jspb.Map<string, string>;
    clearPhonemesOverridesMap(): void;
    getAge(): Age;
    setAge(value: Age): Voice;
    getLanguageCode(): string;
    setLanguageCode(value: string): Voice;
    getLanguage(): ai_inworld_language_codes_language_codes_pb.LanguageCode;
    setLanguage(value: ai_inworld_language_codes_language_codes_pb.LanguageCode): Voice;
    getAccent(): Accent;
    setAccent(value: Accent): Voice;

    hasElevenlabsMetadata(): boolean;
    clearElevenlabsMetadata(): void;
    getElevenlabsMetadata(): Voice.ElevenLabsMetadata | undefined;
    setElevenlabsMetadata(value?: Voice.ElevenLabsMetadata): Voice;

    hasInworldV2Metadata(): boolean;
    clearInworldV2Metadata(): void;
    getInworldV2Metadata(): InworldV2Metadata | undefined;
    setInworldV2Metadata(value?: InworldV2Metadata): Voice;

    getTtsMetadataCase(): Voice.TtsMetadataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Voice.AsObject;
    static toObject(includeInstance: boolean, msg: Voice): Voice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Voice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Voice;
    static deserializeBinaryFromReader(message: Voice, reader: jspb.BinaryReader): Voice;
}

export namespace Voice {
    export type AsObject = {
        basename: string,
        ttsType: TTSType,
        gender: Gender,
        pitch: number,
        speakingRate: number,
        roboticVoiceFilterLevel: number,

        phonemesOverridesMap: Array<[string, string]>,
        age: Age,
        languageCode: string,
        language: ai_inworld_language_codes_language_codes_pb.LanguageCode,
        accent: Accent,
        elevenlabsMetadata?: Voice.ElevenLabsMetadata.AsObject,
        inworldV2Metadata?: InworldV2Metadata.AsObject,
    }


    export class ElevenLabsMetadata extends jspb.Message { 
        getVoiceId(): string;
        setVoiceId(value: string): ElevenLabsMetadata;
        clearHighQualityBaseModelIdsList(): void;
        getHighQualityBaseModelIdsList(): Array<string>;
        setHighQualityBaseModelIdsList(value: Array<string>): ElevenLabsMetadata;
        addHighQualityBaseModelIds(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ElevenLabsMetadata.AsObject;
        static toObject(includeInstance: boolean, msg: ElevenLabsMetadata): ElevenLabsMetadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ElevenLabsMetadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ElevenLabsMetadata;
        static deserializeBinaryFromReader(message: ElevenLabsMetadata, reader: jspb.BinaryReader): ElevenLabsMetadata;
    }

    export namespace ElevenLabsMetadata {
        export type AsObject = {
            voiceId: string,
            highQualityBaseModelIdsList: Array<string>,
        }
    }


    export enum TtsMetadataCase {
        TTS_METADATA_NOT_SET = 0,
        ELEVENLABS_METADATA = 100,
        INWORLD_V2_METADATA = 101,
    }

}

export enum Gender {
    VOICE_GENDER_UNSPECIFIED = 0,
    VOICE_GENDER_MALE = 1,
    VOICE_GENDER_FEMALE = 2,
    VOICE_GENDER_NEUTRAL = 3,
}

export enum Age {
    VOICE_AGE_UNSPECIFIED = 0,
    VOICE_AGE_YOUNG = 1,
    VOICE_AGE_MIDDLE_AGED = 2,
    VOICE_AGE_OLD = 3,
}

export enum TTSType {
    TTS_TYPE_STANDARD = 0,
    TTS_TYPE_ADVANCED = 1,
    TTS_TYPE_ELEVEN_LABS = 2,
    TTS_TYPE_ADVANCED_V2 = 3,
}

export enum Accent {
    ACCENT_UNSPECIFIED = 0,
    ACCENT_BRITISH = 1,
    ACCENT_RUSSIAN = 2,
    ACCENT_AUSTRALIAN = 3,
    ACCENT_GERMAN = 4,
    ACCENT_FRENCH = 5,
}
