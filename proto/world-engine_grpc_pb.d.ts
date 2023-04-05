// package: ai.inworld.engine
// file: world-engine.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as world_engine_pb from "./world-engine_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as packets_pb from "./packets_pb";
import * as voices_pb from "./voices_pb";

interface IWorldEngineService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    session: IWorldEngineService_ISession;
    createWorld: IWorldEngineService_ICreateWorld;
    loadScene: IWorldEngineService_ILoadScene;
    logError: IWorldEngineService_ILogError;
    voicePreview: IWorldEngineService_IVoicePreview;
    listBaseVoices: IWorldEngineService_IListBaseVoices;
    generateToken: IWorldEngineService_IGenerateToken;
    pingCharacter: IWorldEngineService_IPingCharacter;
    createInteractionFeedback: IWorldEngineService_ICreateInteractionFeedback;
}

interface IWorldEngineService_ISession extends grpc.MethodDefinition<packets_pb.InworldPacket, packets_pb.InworldPacket> {
    path: "/ai.inworld.engine.WorldEngine/Session";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<packets_pb.InworldPacket>;
    requestDeserialize: grpc.deserialize<packets_pb.InworldPacket>;
    responseSerialize: grpc.serialize<packets_pb.InworldPacket>;
    responseDeserialize: grpc.deserialize<packets_pb.InworldPacket>;
}
interface IWorldEngineService_ICreateWorld extends grpc.MethodDefinition<world_engine_pb.CreateWorldRequest, world_engine_pb.CreateWorldResponse> {
    path: "/ai.inworld.engine.WorldEngine/CreateWorld";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<world_engine_pb.CreateWorldRequest>;
    requestDeserialize: grpc.deserialize<world_engine_pb.CreateWorldRequest>;
    responseSerialize: grpc.serialize<world_engine_pb.CreateWorldResponse>;
    responseDeserialize: grpc.deserialize<world_engine_pb.CreateWorldResponse>;
}
interface IWorldEngineService_ILoadScene extends grpc.MethodDefinition<world_engine_pb.LoadSceneRequest, world_engine_pb.LoadSceneResponse> {
    path: "/ai.inworld.engine.WorldEngine/LoadScene";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<world_engine_pb.LoadSceneRequest>;
    requestDeserialize: grpc.deserialize<world_engine_pb.LoadSceneRequest>;
    responseSerialize: grpc.serialize<world_engine_pb.LoadSceneResponse>;
    responseDeserialize: grpc.deserialize<world_engine_pb.LoadSceneResponse>;
}
interface IWorldEngineService_ILogError extends grpc.MethodDefinition<world_engine_pb.LogErrorRequest, google_protobuf_empty_pb.Empty> {
    path: "/ai.inworld.engine.WorldEngine/LogError";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<world_engine_pb.LogErrorRequest>;
    requestDeserialize: grpc.deserialize<world_engine_pb.LogErrorRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IWorldEngineService_IVoicePreview extends grpc.MethodDefinition<world_engine_pb.VoicePreviewRequest, world_engine_pb.VoicePreviewResponse> {
    path: "/ai.inworld.engine.WorldEngine/VoicePreview";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<world_engine_pb.VoicePreviewRequest>;
    requestDeserialize: grpc.deserialize<world_engine_pb.VoicePreviewRequest>;
    responseSerialize: grpc.serialize<world_engine_pb.VoicePreviewResponse>;
    responseDeserialize: grpc.deserialize<world_engine_pb.VoicePreviewResponse>;
}
interface IWorldEngineService_IListBaseVoices extends grpc.MethodDefinition<world_engine_pb.ListBaseVoicesRequest, world_engine_pb.ListBaseVoicesResponce> {
    path: "/ai.inworld.engine.WorldEngine/ListBaseVoices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<world_engine_pb.ListBaseVoicesRequest>;
    requestDeserialize: grpc.deserialize<world_engine_pb.ListBaseVoicesRequest>;
    responseSerialize: grpc.serialize<world_engine_pb.ListBaseVoicesResponce>;
    responseDeserialize: grpc.deserialize<world_engine_pb.ListBaseVoicesResponce>;
}
interface IWorldEngineService_IGenerateToken extends grpc.MethodDefinition<world_engine_pb.GenerateTokenRequest, world_engine_pb.AccessToken> {
    path: "/ai.inworld.engine.WorldEngine/GenerateToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<world_engine_pb.GenerateTokenRequest>;
    requestDeserialize: grpc.deserialize<world_engine_pb.GenerateTokenRequest>;
    responseSerialize: grpc.serialize<world_engine_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<world_engine_pb.AccessToken>;
}
interface IWorldEngineService_IPingCharacter extends grpc.MethodDefinition<world_engine_pb.PingCharacterRequest, google_protobuf_empty_pb.Empty> {
    path: "/ai.inworld.engine.WorldEngine/PingCharacter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<world_engine_pb.PingCharacterRequest>;
    requestDeserialize: grpc.deserialize<world_engine_pb.PingCharacterRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IWorldEngineService_ICreateInteractionFeedback extends grpc.MethodDefinition<world_engine_pb.CreateInteractionFeedbackRequest, google_protobuf_empty_pb.Empty> {
    path: "/ai.inworld.engine.WorldEngine/CreateInteractionFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<world_engine_pb.CreateInteractionFeedbackRequest>;
    requestDeserialize: grpc.deserialize<world_engine_pb.CreateInteractionFeedbackRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const WorldEngineService: IWorldEngineService;

export interface IWorldEngineServer {
    session: grpc.handleBidiStreamingCall<packets_pb.InworldPacket, packets_pb.InworldPacket>;
    createWorld: grpc.handleUnaryCall<world_engine_pb.CreateWorldRequest, world_engine_pb.CreateWorldResponse>;
    loadScene: grpc.handleUnaryCall<world_engine_pb.LoadSceneRequest, world_engine_pb.LoadSceneResponse>;
    logError: grpc.handleUnaryCall<world_engine_pb.LogErrorRequest, google_protobuf_empty_pb.Empty>;
    voicePreview: grpc.handleUnaryCall<world_engine_pb.VoicePreviewRequest, world_engine_pb.VoicePreviewResponse>;
    listBaseVoices: grpc.handleUnaryCall<world_engine_pb.ListBaseVoicesRequest, world_engine_pb.ListBaseVoicesResponce>;
    generateToken: grpc.handleUnaryCall<world_engine_pb.GenerateTokenRequest, world_engine_pb.AccessToken>;
    pingCharacter: grpc.handleUnaryCall<world_engine_pb.PingCharacterRequest, google_protobuf_empty_pb.Empty>;
    createInteractionFeedback: grpc.handleUnaryCall<world_engine_pb.CreateInteractionFeedbackRequest, google_protobuf_empty_pb.Empty>;
}

export interface IWorldEngineClient {
    session(): grpc.ClientDuplexStream<packets_pb.InworldPacket, packets_pb.InworldPacket>;
    session(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<packets_pb.InworldPacket, packets_pb.InworldPacket>;
    session(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<packets_pb.InworldPacket, packets_pb.InworldPacket>;
    createWorld(request: world_engine_pb.CreateWorldRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.CreateWorldResponse) => void): grpc.ClientUnaryCall;
    createWorld(request: world_engine_pb.CreateWorldRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.CreateWorldResponse) => void): grpc.ClientUnaryCall;
    createWorld(request: world_engine_pb.CreateWorldRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.CreateWorldResponse) => void): grpc.ClientUnaryCall;
    loadScene(request: world_engine_pb.LoadSceneRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    loadScene(request: world_engine_pb.LoadSceneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    loadScene(request: world_engine_pb.LoadSceneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    logError(request: world_engine_pb.LogErrorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logError(request: world_engine_pb.LogErrorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logError(request: world_engine_pb.LogErrorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    voicePreview(request: world_engine_pb.VoicePreviewRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    voicePreview(request: world_engine_pb.VoicePreviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    voicePreview(request: world_engine_pb.VoicePreviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    listBaseVoices(request: world_engine_pb.ListBaseVoicesRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    listBaseVoices(request: world_engine_pb.ListBaseVoicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    listBaseVoices(request: world_engine_pb.ListBaseVoicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    generateToken(request: world_engine_pb.GenerateTokenRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    generateToken(request: world_engine_pb.GenerateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    generateToken(request: world_engine_pb.GenerateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    pingCharacter(request: world_engine_pb.PingCharacterRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    pingCharacter(request: world_engine_pb.PingCharacterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    pingCharacter(request: world_engine_pb.PingCharacterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createInteractionFeedback(request: world_engine_pb.CreateInteractionFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createInteractionFeedback(request: world_engine_pb.CreateInteractionFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createInteractionFeedback(request: world_engine_pb.CreateInteractionFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class WorldEngineClient extends grpc.Client implements IWorldEngineClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public session(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<packets_pb.InworldPacket, packets_pb.InworldPacket>;
    public session(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<packets_pb.InworldPacket, packets_pb.InworldPacket>;
    public createWorld(request: world_engine_pb.CreateWorldRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.CreateWorldResponse) => void): grpc.ClientUnaryCall;
    public createWorld(request: world_engine_pb.CreateWorldRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.CreateWorldResponse) => void): grpc.ClientUnaryCall;
    public createWorld(request: world_engine_pb.CreateWorldRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.CreateWorldResponse) => void): grpc.ClientUnaryCall;
    public loadScene(request: world_engine_pb.LoadSceneRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    public loadScene(request: world_engine_pb.LoadSceneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    public loadScene(request: world_engine_pb.LoadSceneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.LoadSceneResponse) => void): grpc.ClientUnaryCall;
    public logError(request: world_engine_pb.LogErrorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logError(request: world_engine_pb.LogErrorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logError(request: world_engine_pb.LogErrorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public voicePreview(request: world_engine_pb.VoicePreviewRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    public voicePreview(request: world_engine_pb.VoicePreviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    public voicePreview(request: world_engine_pb.VoicePreviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.VoicePreviewResponse) => void): grpc.ClientUnaryCall;
    public listBaseVoices(request: world_engine_pb.ListBaseVoicesRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    public listBaseVoices(request: world_engine_pb.ListBaseVoicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    public listBaseVoices(request: world_engine_pb.ListBaseVoicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.ListBaseVoicesResponce) => void): grpc.ClientUnaryCall;
    public generateToken(request: world_engine_pb.GenerateTokenRequest, callback: (error: grpc.ServiceError | null, response: world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public generateToken(request: world_engine_pb.GenerateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public generateToken(request: world_engine_pb.GenerateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: world_engine_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public pingCharacter(request: world_engine_pb.PingCharacterRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public pingCharacter(request: world_engine_pb.PingCharacterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public pingCharacter(request: world_engine_pb.PingCharacterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createInteractionFeedback(request: world_engine_pb.CreateInteractionFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createInteractionFeedback(request: world_engine_pb.CreateInteractionFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createInteractionFeedback(request: world_engine_pb.CreateInteractionFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
