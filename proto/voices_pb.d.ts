// package: ai.inworld.voices
// file: voices.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

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
    }
}

export enum Gender {
    VOICE_GENDER_UNSPECIFIED = 0,
    VOICE_GENDER_MALE = 1,
    VOICE_GENDER_FEMALE = 2,
    VOICE_GENDER_NEUTRAL = 3,
}

export enum TTSType {
    TTS_TYPE_STANDARD = 0,
    TTS_TYPE_ADVANCED = 1,
}
