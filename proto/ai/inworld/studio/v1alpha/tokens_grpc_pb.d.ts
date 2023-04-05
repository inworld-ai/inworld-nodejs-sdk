// package: ai.inworld.studio.v1alpha
// file: ai/inworld/studio/v1alpha/tokens.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ai_inworld_studio_v1alpha_tokens_pb from "../../../../ai/inworld/studio/v1alpha/tokens_pb";


import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as options_pb from "../../../../options_pb";

interface ITokensService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generateSessionToken: ITokensService_IGenerateSessionToken;
    generateDefaultSessionToken: ITokensService_IGenerateDefaultSessionToken;
}

interface ITokensService_IGenerateSessionToken extends grpc.MethodDefinition<ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest, ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken> {
    path: "/ai.inworld.studio.v1alpha.Tokens/GenerateSessionToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest>;
    responseSerialize: grpc.serialize<ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken>;
    responseDeserialize: grpc.deserialize<ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken>;
}
interface ITokensService_IGenerateDefaultSessionToken extends grpc.MethodDefinition<ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest, ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken> {
    path: "/ai.inworld.studio.v1alpha.Tokens/GenerateDefaultSessionToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest>;
    responseSerialize: grpc.serialize<ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken>;
    responseDeserialize: grpc.deserialize<ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken>;
}

export const TokensService: ITokensService;

export interface ITokensServer {
    generateSessionToken: grpc.handleUnaryCall<ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest, ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken>;
    generateDefaultSessionToken: grpc.handleUnaryCall<ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest, ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken>;
}

export interface ITokensClient {
    generateSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    generateSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    generateSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    generateDefaultSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    generateDefaultSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    generateDefaultSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
}

export class TokensClient extends grpc.Client implements ITokensClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public generateSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    public generateSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    public generateSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateSessionTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    public generateDefaultSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    public generateDefaultSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
    public generateDefaultSessionToken(request: ai_inworld_studio_v1alpha_tokens_pb.GenerateDefaultSessionTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_studio_v1alpha_tokens_pb.SessionAccessToken) => void): grpc.ClientUnaryCall;
}
