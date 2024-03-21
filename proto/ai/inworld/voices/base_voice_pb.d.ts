// package: ai.inworld.voices
// file: ai/inworld/voices/base_voice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as ai_inworld_language_codes_language_codes_pb from "../../../ai/inworld/language_codes/language_codes_pb";
import * as ai_inworld_voices_voices_pb from "../../../ai/inworld/voices/voices_pb";

export class BaseVoice extends jspb.Message { 
    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): BaseVoice;
    addLanguageCodes(value: string, index?: number): string;
    getName(): string;
    setName(value: string): BaseVoice;
    getGender(): ai_inworld_voices_voices_pb.Gender;
    setGender(value: ai_inworld_voices_voices_pb.Gender): BaseVoice;
    getNaturalSampleRateHertz(): number;
    setNaturalSampleRateHertz(value: number): BaseVoice;
    getAge(): ai_inworld_voices_voices_pb.Age;
    setAge(value: ai_inworld_voices_voices_pb.Age): BaseVoice;
    clearLanguagesList(): void;
    getLanguagesList(): Array<ai_inworld_language_codes_language_codes_pb.LanguageCode>;
    setLanguagesList(value: Array<ai_inworld_language_codes_language_codes_pb.LanguageCode>): BaseVoice;
    addLanguages(value: ai_inworld_language_codes_language_codes_pb.LanguageCode, index?: number): ai_inworld_language_codes_language_codes_pb.LanguageCode;

    hasElevenlabsMetadata(): boolean;
    clearElevenlabsMetadata(): void;
    getElevenlabsMetadata(): ai_inworld_voices_voices_pb.Voice.ElevenLabsMetadata | undefined;
    setElevenlabsMetadata(value?: ai_inworld_voices_voices_pb.Voice.ElevenLabsMetadata): BaseVoice;

    hasInworldV2Metadata(): boolean;
    clearInworldV2Metadata(): void;
    getInworldV2Metadata(): ai_inworld_voices_voices_pb.InworldV2Metadata | undefined;
    setInworldV2Metadata(value?: ai_inworld_voices_voices_pb.InworldV2Metadata): BaseVoice;

    getTtsMetadataCase(): BaseVoice.TtsMetadataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BaseVoice.AsObject;
    static toObject(includeInstance: boolean, msg: BaseVoice): BaseVoice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BaseVoice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BaseVoice;
    static deserializeBinaryFromReader(message: BaseVoice, reader: jspb.BinaryReader): BaseVoice;
}

export namespace BaseVoice {
    export type AsObject = {
        languageCodesList: Array<string>,
        name: string,
        gender: ai_inworld_voices_voices_pb.Gender,
        naturalSampleRateHertz: number,
        age: ai_inworld_voices_voices_pb.Age,
        languagesList: Array<ai_inworld_language_codes_language_codes_pb.LanguageCode>,
        elevenlabsMetadata?: ai_inworld_voices_voices_pb.Voice.ElevenLabsMetadata.AsObject,
        inworldV2Metadata?: ai_inworld_voices_voices_pb.InworldV2Metadata.AsObject,
    }

    export enum TtsMetadataCase {
        TTS_METADATA_NOT_SET = 0,
        ELEVENLABS_METADATA = 100,
        INWORLD_V2_METADATA = 101,
    }

}
