// package: ai.inworld.engine.v1
// file: ai/inworld/engine/v1/state_serialization.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ai_inworld_engine_v1_state_serialization_pb from "../../../../ai/inworld/engine/v1/state_serialization_pb";



import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IStateSerializationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSessionState: IStateSerializationService_IGetSessionState;
}

interface IStateSerializationService_IGetSessionState extends grpc.MethodDefinition<ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest, ai_inworld_engine_v1_state_serialization_pb.SessionState> {
    path: "/ai.inworld.engine.v1.StateSerialization/GetSessionState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest>;
    responseSerialize: grpc.serialize<ai_inworld_engine_v1_state_serialization_pb.SessionState>;
    responseDeserialize: grpc.deserialize<ai_inworld_engine_v1_state_serialization_pb.SessionState>;
}

export const StateSerializationService: IStateSerializationService;

export interface IStateSerializationServer {
    getSessionState: grpc.handleUnaryCall<ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest, ai_inworld_engine_v1_state_serialization_pb.SessionState>;
}

export interface IStateSerializationClient {
    getSessionState(request: ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_state_serialization_pb.SessionState) => void): grpc.ClientUnaryCall;
    getSessionState(request: ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_state_serialization_pb.SessionState) => void): grpc.ClientUnaryCall;
    getSessionState(request: ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_state_serialization_pb.SessionState) => void): grpc.ClientUnaryCall;
}

export class StateSerializationClient extends grpc.Client implements IStateSerializationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSessionState(request: ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_state_serialization_pb.SessionState) => void): grpc.ClientUnaryCall;
    public getSessionState(request: ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_state_serialization_pb.SessionState) => void): grpc.ClientUnaryCall;
    public getSessionState(request: ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_state_serialization_pb.SessionState) => void): grpc.ClientUnaryCall;
}
