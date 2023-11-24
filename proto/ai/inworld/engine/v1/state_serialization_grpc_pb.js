// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ai_inworld_engine_v1_state_serialization_pb = require('../../../../ai/inworld/engine/v1/state_serialization_pb.js');




var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_ai_inworld_engine_v1_GetSessionStateRequest(arg) {
  if (!(arg instanceof ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.v1.GetSessionStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_v1_GetSessionStateRequest(buffer_arg) {
  return ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_v1_SessionState(arg) {
  if (!(arg instanceof ai_inworld_engine_v1_state_serialization_pb.SessionState)) {
    throw new Error('Expected argument of type ai.inworld.engine.v1.SessionState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_v1_SessionState(buffer_arg) {
  return ai_inworld_engine_v1_state_serialization_pb.SessionState.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that exposes access to runtime state.
var StateSerializationService = exports.StateSerializationService = {
  // Get the state of the active session.
getSessionState: {
    path: '/ai.inworld.engine.v1.StateSerialization/GetSessionState',
    requestStream: false,
    responseStream: false,
    requestType: ai_inworld_engine_v1_state_serialization_pb.GetSessionStateRequest,
    responseType: ai_inworld_engine_v1_state_serialization_pb.SessionState,
    requestSerialize: serialize_ai_inworld_engine_v1_GetSessionStateRequest,
    requestDeserialize: deserialize_ai_inworld_engine_v1_GetSessionStateRequest,
    responseSerialize: serialize_ai_inworld_engine_v1_SessionState,
    responseDeserialize: deserialize_ai_inworld_engine_v1_SessionState,
  },
};

exports.StateSerializationClient = grpc.makeGenericClientConstructor(StateSerializationService);
