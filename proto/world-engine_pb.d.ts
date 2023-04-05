// package: ai.inworld.engine
// file: world-engine.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as packets_pb from "./packets_pb";
import * as voices_pb from "./voices_pb";

export class InteractionFeedback extends jspb.Message { 
    getIslike(): boolean;
    setIslike(value: boolean): InteractionFeedback;
    clearTypeList(): void;
    getTypeList(): Array<InteractionDislikeType>;
    setTypeList(value: Array<InteractionDislikeType>): InteractionFeedback;
    addType(value: InteractionDislikeType, index?: number): InteractionDislikeType;
    getComment(): string;
    setComment(value: string): InteractionFeedback;

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
        islike: boolean,
        typeList: Array<InteractionDislikeType>,
        comment: string,
    }
}

export class CreateInteractionFeedbackRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateInteractionFeedbackRequest;

    hasFeedback(): boolean;
    clearFeedback(): void;
    getFeedback(): InteractionFeedback | undefined;
    setFeedback(value?: InteractionFeedback): CreateInteractionFeedbackRequest;

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
        feedback?: InteractionFeedback.AsObject,
    }
}

export class PingCharacterRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): PingCharacterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingCharacterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PingCharacterRequest): PingCharacterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingCharacterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingCharacterRequest;
    static deserializeBinaryFromReader(message: PingCharacterRequest, reader: jspb.BinaryReader): PingCharacterRequest;
}

export namespace PingCharacterRequest {
    export type AsObject = {
        name: string,
    }
}

export class CapabilitiesRequest extends jspb.Message { 
    getAudio(): boolean;
    setAudio(value: boolean): CapabilitiesRequest;
    getText(): boolean;
    setText(value: boolean): CapabilitiesRequest;
    getGestures(): boolean;
    setGestures(value: boolean): CapabilitiesRequest;
    getInterruptions(): boolean;
    setInterruptions(value: boolean): CapabilitiesRequest;
    getTriggers(): boolean;
    setTriggers(value: boolean): CapabilitiesRequest;
    getEmotions(): boolean;
    setEmotions(value: boolean): CapabilitiesRequest;
    getAnimations(): boolean;
    setAnimations(value: boolean): CapabilitiesRequest;
    getTurnBasedStt(): boolean;
    setTurnBasedStt(value: boolean): CapabilitiesRequest;
    getEmotionStreaming(): boolean;
    setEmotionStreaming(value: boolean): CapabilitiesRequest;
    getSilenceEvents(): boolean;
    setSilenceEvents(value: boolean): CapabilitiesRequest;
    getPhonemeInfo(): boolean;
    setPhonemeInfo(value: boolean): CapabilitiesRequest;
    getContinuation(): boolean;
    setContinuation(value: boolean): CapabilitiesRequest;
    getSessionCancellation(): boolean;
    setSessionCancellation(value: boolean): CapabilitiesRequest;
    getNarratedActions(): boolean;
    setNarratedActions(value: boolean): CapabilitiesRequest;
    getRegenerateResponse(): boolean;
    setRegenerateResponse(value: boolean): CapabilitiesRequest;
    getLoadSceneInSession(): boolean;
    setLoadSceneInSession(value: boolean): CapabilitiesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CapabilitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CapabilitiesRequest): CapabilitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CapabilitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CapabilitiesRequest;
    static deserializeBinaryFromReader(message: CapabilitiesRequest, reader: jspb.BinaryReader): CapabilitiesRequest;
}

export namespace CapabilitiesRequest {
    export type AsObject = {
        audio: boolean,
        text: boolean,
        gestures: boolean,
        interruptions: boolean,
        triggers: boolean,
        emotions: boolean,
        animations: boolean,
        turnBasedStt: boolean,
        emotionStreaming: boolean,
        silenceEvents: boolean,
        phonemeInfo: boolean,
        continuation: boolean,
        sessionCancellation: boolean,
        narratedActions: boolean,
        regenerateResponse: boolean,
        loadSceneInSession: boolean,
    }
}

export class UserRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): UserRequest;
    getId(): string;
    setId(value: string): UserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequest;
    static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
    export type AsObject = {
        name: string,
        id: string,
    }
}

export class ClientRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ClientRequest;
    getVersion(): string;
    setVersion(value: string): ClientRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClientRequest): ClientRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientRequest;
    static deserializeBinaryFromReader(message: ClientRequest, reader: jspb.BinaryReader): ClientRequest;
}

export namespace ClientRequest {
    export type AsObject = {
        id: string,
        version: string,
    }
}

export class CreateWorldRequest extends jspb.Message { 
    getProtoWorldName(): string;
    setProtoWorldName(value: string): CreateWorldRequest;
    clearCreateAgentRequestsList(): void;
    getCreateAgentRequestsList(): Array<CreateWorldRequest.CreateAgentRequest>;
    setCreateAgentRequestsList(value: Array<CreateWorldRequest.CreateAgentRequest>): CreateWorldRequest;
    addCreateAgentRequests(value?: CreateWorldRequest.CreateAgentRequest, index?: number): CreateWorldRequest.CreateAgentRequest;

    hasCapabilities(): boolean;
    clearCapabilities(): void;
    getCapabilities(): CapabilitiesRequest | undefined;
    setCapabilities(value?: CapabilitiesRequest): CreateWorldRequest;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserRequest | undefined;
    setUser(value?: UserRequest): CreateWorldRequest;

    hasClient(): boolean;
    clearClient(): void;
    getClient(): CreateWorldRequest.ClientRequest | undefined;
    setClient(value?: CreateWorldRequest.ClientRequest): CreateWorldRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWorldRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWorldRequest): CreateWorldRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWorldRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWorldRequest;
    static deserializeBinaryFromReader(message: CreateWorldRequest, reader: jspb.BinaryReader): CreateWorldRequest;
}

export namespace CreateWorldRequest {
    export type AsObject = {
        protoWorldName: string,
        createAgentRequestsList: Array<CreateWorldRequest.CreateAgentRequest.AsObject>,
        capabilities?: CapabilitiesRequest.AsObject,
        user?: UserRequest.AsObject,
        client?: CreateWorldRequest.ClientRequest.AsObject,
    }


    export class CreateAgentRequest extends jspb.Message { 
        getBrainName(): string;
        setBrainName(value: string): CreateAgentRequest;
        getLanguageCode(): string;
        setLanguageCode(value: string): CreateAgentRequest;
        getVoicePreset(): VoicePreset;
        setVoicePreset(value: VoicePreset): CreateAgentRequest;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CreateAgentRequest.AsObject;
        static toObject(includeInstance: boolean, msg: CreateAgentRequest): CreateAgentRequest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CreateAgentRequest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CreateAgentRequest;
        static deserializeBinaryFromReader(message: CreateAgentRequest, reader: jspb.BinaryReader): CreateAgentRequest;
    }

    export namespace CreateAgentRequest {
        export type AsObject = {
            brainName: string,
            languageCode: string,
            voicePreset: VoicePreset,
        }
    }

    export class ClientRequest extends jspb.Message { 
        getId(): string;
        setId(value: string): ClientRequest;
        getVersion(): string;
        setVersion(value: string): ClientRequest;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ClientRequest.AsObject;
        static toObject(includeInstance: boolean, msg: ClientRequest): ClientRequest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ClientRequest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ClientRequest;
        static deserializeBinaryFromReader(message: ClientRequest, reader: jspb.BinaryReader): ClientRequest;
    }

    export namespace ClientRequest {
        export type AsObject = {
            id: string,
            version: string,
        }
    }

}

export class CreateWorldResponse extends jspb.Message { 
    clearAgentsList(): void;
    getAgentsList(): Array<CreateWorldResponse.Agent>;
    setAgentsList(value: Array<CreateWorldResponse.Agent>): CreateWorldResponse;
    addAgents(value?: CreateWorldResponse.Agent, index?: number): CreateWorldResponse.Agent;
    getKey(): string;
    setKey(value: string): CreateWorldResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWorldResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWorldResponse): CreateWorldResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWorldResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWorldResponse;
    static deserializeBinaryFromReader(message: CreateWorldResponse, reader: jspb.BinaryReader): CreateWorldResponse;
}

export namespace CreateWorldResponse {
    export type AsObject = {
        agentsList: Array<CreateWorldResponse.Agent.AsObject>,
        key: string,
    }


    export class Agent extends jspb.Message { 
        getAgentId(): string;
        setAgentId(value: string): Agent;
        getBrainName(): string;
        setBrainName(value: string): Agent;

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
        }
    }

}

export class LoadSceneRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): LoadSceneRequest;

    hasCapabilities(): boolean;
    clearCapabilities(): void;
    getCapabilities(): CapabilitiesRequest | undefined;
    setCapabilities(value?: CapabilitiesRequest): LoadSceneRequest;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserRequest | undefined;
    setUser(value?: UserRequest): LoadSceneRequest;

    hasClient(): boolean;
    clearClient(): void;
    getClient(): ClientRequest | undefined;
    setClient(value?: ClientRequest): LoadSceneRequest;

    hasAudioSettings(): boolean;
    clearAudioSettings(): void;
    getAudioSettings(): AudioSettings | undefined;
    setAudioSettings(value?: AudioSettings): LoadSceneRequest;

    hasUserSettings(): boolean;
    clearUserSettings(): void;
    getUserSettings(): UserSettings | undefined;
    setUserSettings(value?: UserSettings): LoadSceneRequest;

    hasSessionContinuation(): boolean;
    clearSessionContinuation(): void;
    getSessionContinuation(): SessionContinuation | undefined;
    setSessionContinuation(value?: SessionContinuation): LoadSceneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadSceneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoadSceneRequest): LoadSceneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadSceneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadSceneRequest;
    static deserializeBinaryFromReader(message: LoadSceneRequest, reader: jspb.BinaryReader): LoadSceneRequest;
}

export namespace LoadSceneRequest {
    export type AsObject = {
        name: string,
        capabilities?: CapabilitiesRequest.AsObject,
        user?: UserRequest.AsObject,
        client?: ClientRequest.AsObject,
        audioSettings?: AudioSettings.AsObject,
        userSettings?: UserSettings.AsObject,
        sessionContinuation?: SessionContinuation.AsObject,
    }
}

export class AudioSettings extends jspb.Message { 
    getSttSampleRateHertz(): number;
    setSttSampleRateHertz(value: number): AudioSettings;
    getTtsSampleRateHertz(): number;
    setTtsSampleRateHertz(value: number): AudioSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioSettings.AsObject;
    static toObject(includeInstance: boolean, msg: AudioSettings): AudioSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioSettings;
    static deserializeBinaryFromReader(message: AudioSettings, reader: jspb.BinaryReader): AudioSettings;
}

export namespace AudioSettings {
    export type AsObject = {
        sttSampleRateHertz: number,
        ttsSampleRateHertz: number,
    }
}

export class UserSettings extends jspb.Message { 
    getViewTranscriptConsent(): boolean;
    setViewTranscriptConsent(value: boolean): UserSettings;

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
    }
}

export class SessionContinuation extends jspb.Message { 

    hasContinuationInfo(): boolean;
    clearContinuationInfo(): void;
    getContinuationInfo(): SessionContinuation.ContinuationInfo | undefined;
    setContinuationInfo(value?: SessionContinuation.ContinuationInfo): SessionContinuation;

    hasPreviousDialog(): boolean;
    clearPreviousDialog(): void;
    getPreviousDialog(): PreviousDialog | undefined;
    setPreviousDialog(value?: PreviousDialog): SessionContinuation;
    getPreviousState(): Uint8Array | string;
    getPreviousState_asU8(): Uint8Array;
    getPreviousState_asB64(): string;
    setPreviousState(value: Uint8Array | string): SessionContinuation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionContinuation.AsObject;
    static toObject(includeInstance: boolean, msg: SessionContinuation): SessionContinuation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionContinuation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionContinuation;
    static deserializeBinaryFromReader(message: SessionContinuation, reader: jspb.BinaryReader): SessionContinuation;
}

export namespace SessionContinuation {
    export type AsObject = {
        continuationInfo?: SessionContinuation.ContinuationInfo.AsObject,
        previousDialog?: PreviousDialog.AsObject,
        previousState: Uint8Array | string,
    }


    export class ContinuationInfo extends jspb.Message { 
        getMillisPassed(): number;
        setMillisPassed(value: number): ContinuationInfo;

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
            millisPassed: number,
        }
    }

}

export class PreviousDialog extends jspb.Message { 
    clearPhrasesList(): void;
    getPhrasesList(): Array<PreviousDialog.Phrase>;
    setPhrasesList(value: Array<PreviousDialog.Phrase>): PreviousDialog;
    addPhrases(value?: PreviousDialog.Phrase, index?: number): PreviousDialog.Phrase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreviousDialog.AsObject;
    static toObject(includeInstance: boolean, msg: PreviousDialog): PreviousDialog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreviousDialog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreviousDialog;
    static deserializeBinaryFromReader(message: PreviousDialog, reader: jspb.BinaryReader): PreviousDialog;
}

export namespace PreviousDialog {
    export type AsObject = {
        phrasesList: Array<PreviousDialog.Phrase.AsObject>,
    }


    export class Phrase extends jspb.Message { 
        getTalker(): PreviousDialog.DialogParticipant;
        setTalker(value: PreviousDialog.DialogParticipant): Phrase;
        getPhrase(): string;
        setPhrase(value: string): Phrase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Phrase.AsObject;
        static toObject(includeInstance: boolean, msg: Phrase): Phrase.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Phrase, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Phrase;
        static deserializeBinaryFromReader(message: Phrase, reader: jspb.BinaryReader): Phrase;
    }

    export namespace Phrase {
        export type AsObject = {
            talker: PreviousDialog.DialogParticipant,
            phrase: string,
        }
    }


    export enum DialogParticipant {
    UNKNOWN = 0,
    PLAYER = 1,
    CHARACTER = 2,
    }

}

export class PreviousState extends jspb.Message { 
    clearStateHoldersList(): void;
    getStateHoldersList(): Array<PreviousState.StateHolder>;
    setStateHoldersList(value: Array<PreviousState.StateHolder>): PreviousState;
    addStateHolders(value?: PreviousState.StateHolder, index?: number): PreviousState.StateHolder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreviousState.AsObject;
    static toObject(includeInstance: boolean, msg: PreviousState): PreviousState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreviousState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreviousState;
    static deserializeBinaryFromReader(message: PreviousState, reader: jspb.BinaryReader): PreviousState;
}

export namespace PreviousState {
    export type AsObject = {
        stateHoldersList: Array<PreviousState.StateHolder.AsObject>,
    }


    export class StateHolder extends jspb.Message { 
        getBrainName(): string;
        setBrainName(value: string): StateHolder;
        getState(): Uint8Array | string;
        getState_asU8(): Uint8Array;
        getState_asB64(): string;
        setState(value: Uint8Array | string): StateHolder;

        hasPreviousDialog(): boolean;
        clearPreviousDialog(): void;
        getPreviousDialog(): PreviousDialog | undefined;
        setPreviousDialog(value?: PreviousDialog): StateHolder;
        clearPacketsList(): void;
        getPacketsList(): Array<packets_pb.InworldPacket>;
        setPacketsList(value: Array<packets_pb.InworldPacket>): StateHolder;
        addPackets(value?: packets_pb.InworldPacket, index?: number): packets_pb.InworldPacket;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StateHolder.AsObject;
        static toObject(includeInstance: boolean, msg: StateHolder): StateHolder.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StateHolder, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StateHolder;
        static deserializeBinaryFromReader(message: StateHolder, reader: jspb.BinaryReader): StateHolder;
    }

    export namespace StateHolder {
        export type AsObject = {
            brainName: string,
            state: Uint8Array | string,
            previousDialog?: PreviousDialog.AsObject,
            packetsList: Array<packets_pb.InworldPacket.AsObject>,
        }
    }

}

export class LoadSceneResponse extends jspb.Message { 
    clearAgentsList(): void;
    getAgentsList(): Array<LoadSceneResponse.Agent>;
    setAgentsList(value: Array<LoadSceneResponse.Agent>): LoadSceneResponse;
    addAgents(value?: LoadSceneResponse.Agent, index?: number): LoadSceneResponse.Agent;
    getKey(): string;
    setKey(value: string): LoadSceneResponse;

    hasPreviousState(): boolean;
    clearPreviousState(): void;
    getPreviousState(): PreviousState | undefined;
    setPreviousState(value?: PreviousState): LoadSceneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadSceneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoadSceneResponse): LoadSceneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadSceneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadSceneResponse;
    static deserializeBinaryFromReader(message: LoadSceneResponse, reader: jspb.BinaryReader): LoadSceneResponse;
}

export namespace LoadSceneResponse {
    export type AsObject = {
        agentsList: Array<LoadSceneResponse.Agent.AsObject>,
        key: string,
        previousState?: PreviousState.AsObject,
    }


    export class Agent extends jspb.Message { 
        getAgentId(): string;
        setAgentId(value: string): Agent;
        getBrainName(): string;
        setBrainName(value: string): Agent;
        getGivenName(): string;
        setGivenName(value: string): Agent;

        hasCharacterAssets(): boolean;
        clearCharacterAssets(): void;
        getCharacterAssets(): LoadSceneResponse.Agent.CharacterAssets | undefined;
        setCharacterAssets(value?: LoadSceneResponse.Agent.CharacterAssets): Agent;

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
            characterAssets?: LoadSceneResponse.Agent.CharacterAssets.AsObject,
        }


        export class CharacterAssets extends jspb.Message { 
            getRpmModelUri(): string;
            setRpmModelUri(value: string): CharacterAssets;
            getRpmImageUriPortrait(): string;
            setRpmImageUriPortrait(value: string): CharacterAssets;
            getRpmImageUriPosture(): string;
            setRpmImageUriPosture(value: string): CharacterAssets;
            getAvatarImg(): string;
            setAvatarImg(value: string): CharacterAssets;
            getAvatarImgOriginal(): string;
            setAvatarImgOriginal(value: string): CharacterAssets;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CharacterAssets.AsObject;
            static toObject(includeInstance: boolean, msg: CharacterAssets): CharacterAssets.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CharacterAssets, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CharacterAssets;
            static deserializeBinaryFromReader(message: CharacterAssets, reader: jspb.BinaryReader): CharacterAssets;
        }

        export namespace CharacterAssets {
            export type AsObject = {
                rpmModelUri: string,
                rpmImageUriPortrait: string,
                rpmImageUriPosture: string,
                avatarImg: string,
                avatarImgOriginal: string,
            }
        }

    }

}

export class LogErrorRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): LogErrorRequest;
    getMessage(): string;
    setMessage(value: string): LogErrorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogErrorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogErrorRequest): LogErrorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogErrorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogErrorRequest;
    static deserializeBinaryFromReader(message: LogErrorRequest, reader: jspb.BinaryReader): LogErrorRequest;
}

export namespace LogErrorRequest {
    export type AsObject = {
        key: string,
        message: string,
    }
}

export class VoicePreviewRequest extends jspb.Message { 
    getText(): string;
    setText(value: string): VoicePreviewRequest;

    hasEmotions(): boolean;
    clearEmotions(): void;
    getEmotions(): packets_pb.EmotionEvent | undefined;
    setEmotions(value?: packets_pb.EmotionEvent): VoicePreviewRequest;

    hasVoice(): boolean;
    clearVoice(): void;
    getVoice(): voices_pb.Voice | undefined;
    setVoice(value?: voices_pb.Voice): VoicePreviewRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoicePreviewRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VoicePreviewRequest): VoicePreviewRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoicePreviewRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoicePreviewRequest;
    static deserializeBinaryFromReader(message: VoicePreviewRequest, reader: jspb.BinaryReader): VoicePreviewRequest;
}

export namespace VoicePreviewRequest {
    export type AsObject = {
        text: string,
        emotions?: packets_pb.EmotionEvent.AsObject,
        voice?: voices_pb.Voice.AsObject,
    }
}

export class VoicePreviewResponse extends jspb.Message { 
    getAudio(): Uint8Array | string;
    getAudio_asU8(): Uint8Array;
    getAudio_asB64(): string;
    setAudio(value: Uint8Array | string): VoicePreviewResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoicePreviewResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VoicePreviewResponse): VoicePreviewResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoicePreviewResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoicePreviewResponse;
    static deserializeBinaryFromReader(message: VoicePreviewResponse, reader: jspb.BinaryReader): VoicePreviewResponse;
}

export namespace VoicePreviewResponse {
    export type AsObject = {
        audio: Uint8Array | string,
    }
}

export class ListBaseVoicesRequest extends jspb.Message { 
    getLanguageCode(): string;
    setLanguageCode(value: string): ListBaseVoicesRequest;
    clearTtsTypesList(): void;
    getTtsTypesList(): Array<voices_pb.TTSType>;
    setTtsTypesList(value: Array<voices_pb.TTSType>): ListBaseVoicesRequest;
    addTtsTypes(value: voices_pb.TTSType, index?: number): voices_pb.TTSType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBaseVoicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBaseVoicesRequest): ListBaseVoicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBaseVoicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBaseVoicesRequest;
    static deserializeBinaryFromReader(message: ListBaseVoicesRequest, reader: jspb.BinaryReader): ListBaseVoicesRequest;
}

export namespace ListBaseVoicesRequest {
    export type AsObject = {
        languageCode: string,
        ttsTypesList: Array<voices_pb.TTSType>,
    }
}

export class ListBaseVoicesResponce extends jspb.Message { 
    clearGooglevoicesList(): void;
    getGooglevoicesList(): Array<ListBaseVoicesResponce.BaseVoice>;
    setGooglevoicesList(value: Array<ListBaseVoicesResponce.BaseVoice>): ListBaseVoicesResponce;
    addGooglevoices(value?: ListBaseVoicesResponce.BaseVoice, index?: number): ListBaseVoicesResponce.BaseVoice;
    clearInworldvoicesList(): void;
    getInworldvoicesList(): Array<ListBaseVoicesResponce.BaseVoice>;
    setInworldvoicesList(value: Array<ListBaseVoicesResponce.BaseVoice>): ListBaseVoicesResponce;
    addInworldvoices(value?: ListBaseVoicesResponce.BaseVoice, index?: number): ListBaseVoicesResponce.BaseVoice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBaseVoicesResponce.AsObject;
    static toObject(includeInstance: boolean, msg: ListBaseVoicesResponce): ListBaseVoicesResponce.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBaseVoicesResponce, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBaseVoicesResponce;
    static deserializeBinaryFromReader(message: ListBaseVoicesResponce, reader: jspb.BinaryReader): ListBaseVoicesResponce;
}

export namespace ListBaseVoicesResponce {
    export type AsObject = {
        googlevoicesList: Array<ListBaseVoicesResponce.BaseVoice.AsObject>,
        inworldvoicesList: Array<ListBaseVoicesResponce.BaseVoice.AsObject>,
    }


    export class BaseVoice extends jspb.Message { 
        clearLanguageCodesList(): void;
        getLanguageCodesList(): Array<string>;
        setLanguageCodesList(value: Array<string>): BaseVoice;
        addLanguageCodes(value: string, index?: number): string;
        getName(): string;
        setName(value: string): BaseVoice;
        getGender(): voices_pb.Gender;
        setGender(value: voices_pb.Gender): BaseVoice;
        getNaturalsampleratehertz(): number;
        setNaturalsampleratehertz(value: number): BaseVoice;

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
            naturalsampleratehertz: number,
        }
    }

}

export class AccessToken extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AccessToken;
    getType(): string;
    setType(value: string): AccessToken;

    hasExpirationTime(): boolean;
    clearExpirationTime(): void;
    getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): AccessToken;
    getSessionId(): string;
    setSessionId(value: string): AccessToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessToken.AsObject;
    static toObject(includeInstance: boolean, msg: AccessToken): AccessToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessToken;
    static deserializeBinaryFromReader(message: AccessToken, reader: jspb.BinaryReader): AccessToken;
}

export namespace AccessToken {
    export type AsObject = {
        token: string,
        type: string,
        expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sessionId: string,
    }
}

export class GenerateTokenRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): GenerateTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateTokenRequest): GenerateTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateTokenRequest;
    static deserializeBinaryFromReader(message: GenerateTokenRequest, reader: jspb.BinaryReader): GenerateTokenRequest;
}

export namespace GenerateTokenRequest {
    export type AsObject = {
        key: string,
    }
}

export enum InteractionDislikeType {
    DISLIKE_TYPE_UNSPECIFIED = 0,
    DISLIKE_TYPE_IRRELEVANT = 1,
    DISLIKE_TYPE_UNSAFE = 2,
    DISLIKE_TYPE_UNTRUE = 3,
    DISLIKE_TYPE_INCORRECT_USE_KNOWLEDGE = 4,
    DISLIKE_TYPE_UNEXPECTED_ACTION = 5,
    DISLIKE_TYPE_UNEXPECTED_GOAL_BEHAVIOR = 6,
    DISLIKE_TYPE_REPETITION = 7,
}

export enum VoicePreset {
    VOICE_PRESET_UNSPECIFIED = 0,
    VOICE_PRESET_FEMALE_1 = 1,
    VOICE_PRESET_FEMALE_2 = 2,
    VOICE_PRESET_FEMALE_3 = 3,
    VOICE_PRESET_FEMALE_4 = 4,
    VOICE_PRESET_FEMALE_5 = 5,
    VOICE_PRESET_MALE_1 = 6,
    VOICE_PRESET_MALE_2 = 7,
    VOICE_PRESET_MALE_3 = 8,
    VOICE_PRESET_MALE_4 = 9,
    VOICE_PRESET_MALE_5 = 10,
    INWORLD_VOICE_PRESET_MALE_1 = 11,
    INWORLD_VOICE_PRESET_MALE_2 = 12,
    INWORLD_VOICE_PRESET_FEMALE_1 = 13,
    INWORLD_VOICE_PRESET_FEMALE_2 = 14,
    INWORLD_VOICE_PRESET_MALE_3 = 15,
    INWORLD_VOICE_PRESET_MALE_4 = 16,
    INWORLD_VOICE_PRESET_MALE_5 = 17,
    INWORLD_VOICE_PRESET_FEMALE_3 = 18,
    INWORLD_VOICE_PRESET_FEMALE_4 = 19,
    INWORLD_VOICE_PRESET_ROBOT_MALE_1 = 20,
    INWORLD_VOICE_PRESET_ROBOT_MALE_2 = 21,
    INWORLD_VOICE_PRESET_ROBOT_MALE_3 = 22,
    INWORLD_VOICE_PRESET_ROBOT_MALE_4 = 23,
    INWORLD_VOICE_PRESET_ROBOT_MALE_5 = 24,
    INWORLD_VOICE_PRESET_ROBOT_FEMALE_1 = 25,
    INWORLD_VOICE_PRESET_ROBOT_FEMALE_2 = 26,
    INWORLD_VOICE_PRESET_ROBOT_FEMALE_3 = 27,
    INWORLD_VOICE_PRESET_ROBOT_FEMALE_4 = 28,
    INWORLD_VOICE_PRESET_SPIKE = 29,
    INWORLD_VOICE_PRESET_TWILIGHT = 30,
    INWORLD_VOICE_PRESET_FLUTTERSHY = 31,
    INWORLD_VOICE_PRESET_ROBOT_SPIKE = 32,
    INWORLD_VOICE_PRESET_ROBOT_TWILIGHT = 33,
    INWORLD_VOICE_PRESET_ROBOT_FLUTTERSHY = 34,
}
