// package: ai.inworld.engine.configuration
// file: ai/inworld/engine/configuration/configuration.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CapabilitiesConfiguration extends jspb.Message { 
    getAudio(): boolean;
    setAudio(value: boolean): CapabilitiesConfiguration;
    getInterruptions(): boolean;
    setInterruptions(value: boolean): CapabilitiesConfiguration;
    getEmotions(): boolean;
    setEmotions(value: boolean): CapabilitiesConfiguration;
    getTurnBasedStt(): boolean;
    setTurnBasedStt(value: boolean): CapabilitiesConfiguration;
    getEmotionStreaming(): boolean;
    setEmotionStreaming(value: boolean): CapabilitiesConfiguration;
    getSilenceEvents(): boolean;
    setSilenceEvents(value: boolean): CapabilitiesConfiguration;
    getPhonemeInfo(): boolean;
    setPhonemeInfo(value: boolean): CapabilitiesConfiguration;
    getContinuation(): boolean;
    setContinuation(value: boolean): CapabilitiesConfiguration;
    getSessionCancellation(): boolean;
    setSessionCancellation(value: boolean): CapabilitiesConfiguration;
    getNarratedActions(): boolean;
    setNarratedActions(value: boolean): CapabilitiesConfiguration;
    getRegenerateResponse(): boolean;
    setRegenerateResponse(value: boolean): CapabilitiesConfiguration;
    getRelations(): boolean;
    setRelations(value: boolean): CapabilitiesConfiguration;
    getDebugInfo(): boolean;
    setDebugInfo(value: boolean): CapabilitiesConfiguration;
    getTtsMp3(): boolean;
    setTtsMp3(value: boolean): CapabilitiesConfiguration;
    getMultiAgent(): boolean;
    setMultiAgent(value: boolean): CapabilitiesConfiguration;
    getAudio2face(): boolean;
    setAudio2face(value: boolean): CapabilitiesConfiguration;
    getInspect(): boolean;
    setInspect(value: boolean): CapabilitiesConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CapabilitiesConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: CapabilitiesConfiguration): CapabilitiesConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CapabilitiesConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CapabilitiesConfiguration;
    static deserializeBinaryFromReader(message: CapabilitiesConfiguration, reader: jspb.BinaryReader): CapabilitiesConfiguration;
}

export namespace CapabilitiesConfiguration {
    export type AsObject = {
        audio: boolean,
        interruptions: boolean,
        emotions: boolean,
        turnBasedStt: boolean,
        emotionStreaming: boolean,
        silenceEvents: boolean,
        phonemeInfo: boolean,
        continuation: boolean,
        sessionCancellation: boolean,
        narratedActions: boolean,
        regenerateResponse: boolean,
        relations: boolean,
        debugInfo: boolean,
        ttsMp3: boolean,
        multiAgent: boolean,
        audio2face: boolean,
        inspect: boolean,
    }
}

export class UserConfiguration extends jspb.Message { 
    getName(): string;
    setName(value: string): UserConfiguration;
    getId(): string;
    setId(value: string): UserConfiguration;

    hasUserSettings(): boolean;
    clearUserSettings(): void;
    getUserSettings(): UserConfiguration.UserSettings | undefined;
    setUserSettings(value?: UserConfiguration.UserSettings): UserConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: UserConfiguration): UserConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserConfiguration;
    static deserializeBinaryFromReader(message: UserConfiguration, reader: jspb.BinaryReader): UserConfiguration;
}

export namespace UserConfiguration {
    export type AsObject = {
        name: string,
        id: string,
        userSettings?: UserConfiguration.UserSettings.AsObject,
    }


    export class UserSettings extends jspb.Message { 
        getViewTranscriptConsent(): boolean;
        setViewTranscriptConsent(value: boolean): UserSettings;

        hasPlayerProfile(): boolean;
        clearPlayerProfile(): void;
        getPlayerProfile(): UserConfiguration.UserSettings.PlayerProfile | undefined;
        setPlayerProfile(value?: UserConfiguration.UserSettings.PlayerProfile): UserSettings;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UserSettings.AsObject;
        static toObject(includeInstance: boolean, msg: UserSettings): UserSettings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UserSettings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UserSettings;
        static deserializeBinaryFromReader(message: UserSettings, reader: jspb.BinaryReader): UserSettings;
    }

    export namespace UserSettings {
        export type AsObject = {
            viewTranscriptConsent: boolean,
            playerProfile?: UserConfiguration.UserSettings.PlayerProfile.AsObject,
        }


        export class PlayerProfile extends jspb.Message { 
            clearFieldsList(): void;
            getFieldsList(): Array<UserConfiguration.UserSettings.PlayerProfile.PlayerField>;
            setFieldsList(value: Array<UserConfiguration.UserSettings.PlayerProfile.PlayerField>): PlayerProfile;
            addFields(value?: UserConfiguration.UserSettings.PlayerProfile.PlayerField, index?: number): UserConfiguration.UserSettings.PlayerProfile.PlayerField;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PlayerProfile.AsObject;
            static toObject(includeInstance: boolean, msg: PlayerProfile): PlayerProfile.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PlayerProfile, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PlayerProfile;
            static deserializeBinaryFromReader(message: PlayerProfile, reader: jspb.BinaryReader): PlayerProfile;
        }

        export namespace PlayerProfile {
            export type AsObject = {
                fieldsList: Array<UserConfiguration.UserSettings.PlayerProfile.PlayerField.AsObject>,
            }


            export class PlayerField extends jspb.Message { 
                getFieldId(): string;
                setFieldId(value: string): PlayerField;
                getFieldValue(): string;
                setFieldValue(value: string): PlayerField;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): PlayerField.AsObject;
                static toObject(includeInstance: boolean, msg: PlayerField): PlayerField.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: PlayerField, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): PlayerField;
                static deserializeBinaryFromReader(message: PlayerField, reader: jspb.BinaryReader): PlayerField;
            }

            export namespace PlayerField {
                export type AsObject = {
                    fieldId: string,
                    fieldValue: string,
                }
            }

        }

    }

}

export class ClientConfiguration extends jspb.Message { 
    getId(): string;
    setId(value: string): ClientConfiguration;
    getVersion(): string;
    setVersion(value: string): ClientConfiguration;
    getDescription(): string;
    setDescription(value: string): ClientConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: ClientConfiguration): ClientConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientConfiguration;
    static deserializeBinaryFromReader(message: ClientConfiguration, reader: jspb.BinaryReader): ClientConfiguration;
}

export namespace ClientConfiguration {
    export type AsObject = {
        id: string,
        version: string,
        description: string,
    }
}

export class SessionConfiguration extends jspb.Message { 
    getGameSessionId(): string;
    setGameSessionId(value: string): SessionConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: SessionConfiguration): SessionConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionConfiguration;
    static deserializeBinaryFromReader(message: SessionConfiguration, reader: jspb.BinaryReader): SessionConfiguration;
}

export namespace SessionConfiguration {
    export type AsObject = {
        gameSessionId: string,
    }
}
