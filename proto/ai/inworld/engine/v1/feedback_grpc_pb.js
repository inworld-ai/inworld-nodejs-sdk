// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ai_inworld_engine_v1_feedback_pb = require('../../../../ai/inworld/engine/v1/feedback_pb.js');




var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_ai_inworld_engine_v1_CreateInteractionFeedbackRequest(arg) {
  if (!(arg instanceof ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.v1.CreateInteractionFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_v1_CreateInteractionFeedbackRequest(buffer_arg) {
  return ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_v1_DeleteInteractionFeedbackRequest(arg) {
  if (!(arg instanceof ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.v1.DeleteInteractionFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_v1_DeleteInteractionFeedbackRequest(buffer_arg) {
  return ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_v1_InteractionFeedback(arg) {
  if (!(arg instanceof ai_inworld_engine_v1_feedback_pb.InteractionFeedback)) {
    throw new Error('Expected argument of type ai.inworld.engine.v1.InteractionFeedback');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_v1_InteractionFeedback(buffer_arg) {
  return ai_inworld_engine_v1_feedback_pb.InteractionFeedback.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Contains methods to post feedback
var FeedbackService = exports.FeedbackService = {
  // Creates a feedback for session message from agent
createInteractionFeedback: {
    path: '/ai.inworld.engine.v1.Feedback/CreateInteractionFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ai_inworld_engine_v1_feedback_pb.CreateInteractionFeedbackRequest,
    responseType: ai_inworld_engine_v1_feedback_pb.InteractionFeedback,
    requestSerialize: serialize_ai_inworld_engine_v1_CreateInteractionFeedbackRequest,
    requestDeserialize: deserialize_ai_inworld_engine_v1_CreateInteractionFeedbackRequest,
    responseSerialize: serialize_ai_inworld_engine_v1_InteractionFeedback,
    responseDeserialize: deserialize_ai_inworld_engine_v1_InteractionFeedback,
  },
  // Deletes a feedback
deleteInteractionFeedback: {
    path: '/ai.inworld.engine.v1.Feedback/DeleteInteractionFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ai_inworld_engine_v1_feedback_pb.DeleteInteractionFeedbackRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_inworld_engine_v1_DeleteInteractionFeedbackRequest,
    requestDeserialize: deserialize_ai_inworld_engine_v1_DeleteInteractionFeedbackRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FeedbackClient = grpc.makeGenericClientConstructor(FeedbackService);
