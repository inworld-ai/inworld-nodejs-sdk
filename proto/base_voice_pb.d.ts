// package: ai.inworld.voices
// file: base_voice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as language_codes_pb from "./language_codes_pb";
import * as voices_pb from "./voices_pb";

export class BaseVoice extends jspb.Message { 
    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): BaseVoice;
    addLanguageCodes(value: string, index?: number): string;
    getName(): string;
    setName(value: string): BaseVoice;
    getGender(): voices_pb.Gender;
    setGender(value: voices_pb.Gender): BaseVoice;
    getNaturalSampleRateHertz(): number;
    setNaturalSampleRateHertz(value: number): BaseVoice;
    getAge(): voices_pb.Age;
    setAge(value: voices_pb.Age): BaseVoice;
    clearLanguagesList(): void;
    getLanguagesList(): Array<language_codes_pb.LanguageCode>;
    setLanguagesList(value: Array<language_codes_pb.LanguageCode>): BaseVoice;
    addLanguages(value: language_codes_pb.LanguageCode, index?: number): language_codes_pb.LanguageCode;

    hasElevenlabsMetadata(): boolean;
    clearElevenlabsMetadata(): void;
    getElevenlabsMetadata(): voices_pb.Voice.ElevenLabsMetadata | undefined;
    setElevenlabsMetadata(value?: voices_pb.Voice.ElevenLabsMetadata): BaseVoice;

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
        gender: voices_pb.Gender,
        naturalSampleRateHertz: number,
        age: voices_pb.Age,
        languagesList: Array<language_codes_pb.LanguageCode>,
        elevenlabsMetadata?: voices_pb.Voice.ElevenLabsMetadata.AsObject,
    }

    export enum TtsMetadataCase {
        TTS_METADATA_NOT_SET = 0,
        ELEVENLABS_METADATA = 100,
    }

}
