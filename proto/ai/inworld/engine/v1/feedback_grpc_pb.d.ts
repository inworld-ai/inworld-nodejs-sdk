// package: ai.inworld.engine.v1
// file: ai/inworld/engine/v1/feedback.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ai_inworld_engine_v1_feedback_pb from "../../../../ai/inworld/engine/v1/feedback_pb";



import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IFeedbackService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createInteractionFeedback: IFeedbackService_ICreateInteractionFeedback;
    deleteInteractionFeedback: IFeedbackService_IDeleteInteractionFeedback;
}

interface IFeedbackService_ICreateInteractionFeedback extends grpc.MethodDefinition<ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest, ai_inworld_engine_v1_feedback_pb.InteractionFeedback> {
    path: "/ai.inworld.engine.v1.Feedback/CreateInteractionFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest>;
    responseSerialize: grpc.serialize<ai_inworld_engine_v1_feedback_pb.InteractionFeedback>;
    responseDeserialize: grpc.deserialize<ai_inworld_engine_v1_feedback_pb.InteractionFeedback>;
}
interface IFeedbackService_IDeleteInteractionFeedback extends grpc.MethodDefinition<ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest, google_protobuf_empty_pb.Empty> {
    path: "/ai.inworld.engine.v1.Feedback/DeleteInteractionFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const FeedbackService: IFeedbackService;

export interface IFeedbackServer {
    createInteractionFeedback: grpc.handleUnaryCall<ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest, ai_inworld_engine_v1_feedback_pb.InteractionFeedback>;
    deleteInteractionFeedback: grpc.handleUnaryCall<ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest, google_protobuf_empty_pb.Empty>;
}

export interface IFeedbackClient {
    createInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_feedback_pb.InteractionFeedback) => void): grpc.ClientUnaryCall;
    createInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_feedback_pb.InteractionFeedback) => void): grpc.ClientUnaryCall;
    createInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_feedback_pb.InteractionFeedback) => void): grpc.ClientUnaryCall;
    deleteInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class FeedbackClient extends grpc.Client implements IFeedbackClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_feedback_pb.InteractionFeedback) => void): grpc.ClientUnaryCall;
    public createInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_feedback_pb.InteractionFeedback) => void): grpc.ClientUnaryCall;
    public createInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ai_inworld_engine_v1_feedback_pb.InteractionFeedback) => void): grpc.ClientUnaryCall;
    public deleteInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteInteractionFeedback(request: ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
