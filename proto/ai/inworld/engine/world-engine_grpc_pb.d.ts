// package: ai.inworld.engine
// file: ai/inworld/engine/world-engine.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ai_inworld_engine_world_engine_pb from "../../../ai/inworld/engine/world-engine_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ai_inworld_packets_packets_pb from "../../../ai/inworld/packets/packets_pb";
import * as ai_inworld_voices_voices_pb from "../../../ai/inworld/voices/voices_pb";
import * as ai_inworld_voices_base_voice_pb from "../../../ai/inworld/voices/base_voice_pb";
import * as ai_inworld_language_codes_language_codes_pb from "../../../ai/inworld/language_codes/language_codes_pb";

interface IWorldEngineService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    session: IWorldEngineService_ISession;
    openSession: IWorldEngineService_IOpenSession;
    loadScene: IWorldEngineService_ILoadScene;
    logError: IWorldEngineService_ILogError;
    voicePreview: IWorldEngineService_IVoicePreview;
    listBaseVoices: IWorldEngineService_IListBaseVoices;
    generateToken: IWorldEngineService_IGenerateToken;
}

interface IWorldEngineService_ISession extends grpc.MethodDefinition<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket> {
    path: "/ai.inworld.engine.WorldEngine/Session";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<ai_inworld_packets_packets_pb.InworldPacket>;
    requestDeserialize: grpc.deserialize<ai_inworld_packets_packets_pb.InworldPacket>;
    responseSerialize: grpc.serialize<ai_inworld_packets_packets_pb.InworldPacket>;
    responseDeserialize: grpc.deserialize<ai_inworld_packets_packets_pb.InworldPacket>;
}
interface IWorldEngineService_IOpenSession extends grpc.MethodDefinition<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket> {
    path: "/ai.inworld.engine.WorldEngine/OpenSession";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<ai_inworld_packets_packets_pb.InworldPacket>;
    requestDeserialize: grpc.deserialize<ai_inworld_packets_packets_pb.InworldPacket>;
    responseSerialize: grpc.serialize<ai_inworld_packets_packets_pb.InworldPacket>;
    responseDeserialize: grpc.deserialize<ai_inworld_packets_packets_pb.InworldPacket>;
}
interface IWorldEngineService_ILoadScene extends grpc.MethodDefinition<ai_inworld_engine_world_engine_pb.LoadSceneRequest, ai_inworld_engine_world_engine_pb.LoadSceneResponse> {
    path: "/ai.inworld.engine.WorldEngine/LoadScene";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.LoadSceneRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.LoadSceneRequest>;
    responseSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.LoadSceneResponse>;
    responseDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.LoadSceneResponse>;
}
interface IWorldEngineService_ILogError extends grpc.MethodDefinition<ai_inworld_engine_world_engine_pb.LogErrorRequest, google_protobuf_empty_pb.Empty> {
    path: "/ai.inworld.engine.WorldEngine/LogError";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.LogErrorRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.LogErrorRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IWorldEngineService_IVoicePreview extends grpc.MethodDefinition<ai_inworld_engine_world_engine_pb.VoicePreviewRequest, ai_inworld_engine_world_engine_pb.VoicePreviewResponse> {
    path: "/ai.inworld.engine.WorldEngine/VoicePreview";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.VoicePreviewRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.VoicePreviewRequest>;
    responseSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.VoicePreviewResponse>;
    responseDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.VoicePreviewResponse>;
}
interface IWorldEngineService_IListBaseVoices extends grpc.MethodDefinition<ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest, ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce> {
    path: "/ai.inworld.engine.WorldEngine/ListBaseVoices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest>;
    responseSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce>;
    responseDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce>;
}
interface IWorldEngineService_IGenerateToken extends grpc.MethodDefinition<ai_inworld_engine_world_engine_pb.GenerateTokenRequest, ai_inworld_engine_world_engine_pb.AccessToken> {
    path: "/ai.inworld.engine.WorldEngine/GenerateToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.GenerateTokenRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.GenerateTokenRequest>;
    responseSerialize: grpc.serialize<ai_inworld_engine_world_engine_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<ai_inworld_engine_world_engine_pb.AccessToken>;
}

export const WorldEngineService: IWorldEngineService;

export interface IWorldEngineServer {
    session: grpc.handleBidiStreamingCall<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    openSession: grpc.handleBidiStreamingCall<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    loadScene: grpc.handleUnaryCall<ai_inworld_engine_world_engine_pb.LoadSceneRequest, ai_inworld_engine_world_engine_pb.LoadSceneResponse>;
    logError: grpc.handleUnaryCall<ai_inworld_engine_world_engine_pb.LogErrorRequest, google_protobuf_empty_pb.Empty>;
    voicePreview: grpc.handleUnaryCall<ai_inworld_engine_world_engine_pb.VoicePreviewRequest, ai_inworld_engine_world_engine_pb.VoicePreviewResponse>;
    listBaseVoices: grpc.handleUnaryCall<ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest, ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce>;
    generateToken: grpc.handleUnaryCall<ai_inworld_engine_world_engine_pb.GenerateTokenRequest, ai_inworld_engine_world_engine_pb.AccessToken>;
}

export interface IWorldEngineClient {
    session(): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    session(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    session(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    openSession(): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    openSession(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    openSession(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    loadScene(request: ai_inworld_engine_world_engine_pb.LoadSceneRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    loadScene(request: ai_inworld_engine_world_engine_pb.LoadSceneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    loadScene(request: ai_inworld_engine_world_engine_pb.LoadSceneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    logError(request: ai_inworld_engine_world_engine_pb.LogErrorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logError(request: ai_inworld_engine_world_engine_pb.LogErrorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logError(request: ai_inworld_engine_world_engine_pb.LogErrorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    voicePreview(request: ai_inworld_engine_world_engine_pb.VoicePreviewRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    voicePreview(request: ai_inworld_engine_world_engine_pb.VoicePreviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    voicePreview(request: ai_inworld_engine_world_engine_pb.VoicePreviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    listBaseVoices(request: ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    listBaseVoices(request: ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    listBaseVoices(request: ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    generateToken(request: ai_inworld_engine_world_engine_pb.GenerateTokenRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    generateToken(request: ai_inworld_engine_world_engine_pb.GenerateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    generateToken(request: ai_inworld_engine_world_engine_pb.GenerateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
}

export class WorldEngineClient extends grpc.Client implements IWorldEngineClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public session(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    public session(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    public openSession(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    public openSession(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ai_inworld_packets_packets_pb.InworldPacket, ai_inworld_packets_packets_pb.InworldPacket>;
    public loadScene(request: ai_inworld_engine_world_engine_pb.LoadSceneRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    public loadScene(request: ai_inworld_engine_world_engine_pb.LoadSceneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    public loadScene(request: ai_inworld_engine_world_engine_pb.LoadSceneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    public logError(request: ai_inworld_engine_world_engine_pb.LogErrorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logError(request: ai_inworld_engine_world_engine_pb.LogErrorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logError(request: ai_inworld_engine_world_engine_pb.LogErrorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public voicePreview(request: ai_inworld_engine_world_engine_pb.VoicePreviewRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    public voicePreview(request: ai_inworld_engine_world_engine_pb.VoicePreviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    public voicePreview(request: ai_inworld_engine_world_engine_pb.VoicePreviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    public listBaseVoices(request: ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    public listBaseVoices(request: ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    public listBaseVoices(request: ai_inworld_engine_world_engine_pb.ListBaseVoicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    public generateToken(request: ai_inworld_engine_world_engine_pb.GenerateTokenRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public generateToken(request: ai_inworld_engine_world_engine_pb.GenerateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public generateToken(request: ai_inworld_engine_world_engine_pb.GenerateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
}
