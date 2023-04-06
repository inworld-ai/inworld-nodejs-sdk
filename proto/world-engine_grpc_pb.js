// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var world$engine_pb = require('./world-engine_pb.js');
;
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var packets_pb = require('./packets_pb.js');
var voices_pb = require('./voices_pb.js');

function serialize_ai_inworld_engine_AccessToken(arg) {
  if (!(arg instanceof world$engine_pb.AccessToken)) {
    throw new Error('Expected argument of type ai.inworld.engine.AccessToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_AccessToken(buffer_arg) {
  return world$engine_pb.AccessToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_CreateInteractionFeedbackRequest(arg) {
  if (!(arg instanceof world$engine_pb.CreateInteractionFeedbackRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.CreateInteractionFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_CreateInteractionFeedbackRequest(buffer_arg) {
  return world$engine_pb.CreateInteractionFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_CreateWorldRequest(arg) {
  if (!(arg instanceof world$engine_pb.CreateWorldRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.CreateWorldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_CreateWorldRequest(buffer_arg) {
  return world$engine_pb.CreateWorldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_CreateWorldResponse(arg) {
  if (!(arg instanceof world$engine_pb.CreateWorldResponse)) {
    throw new Error('Expected argument of type ai.inworld.engine.CreateWorldResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_CreateWorldResponse(buffer_arg) {
  return world$engine_pb.CreateWorldResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_GenerateTokenRequest(arg) {
  if (!(arg instanceof world$engine_pb.GenerateTokenRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.GenerateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_GenerateTokenRequest(buffer_arg) {
  return world$engine_pb.GenerateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_ListBaseVoicesRequest(arg) {
  if (!(arg instanceof world$engine_pb.ListBaseVoicesRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.ListBaseVoicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_ListBaseVoicesRequest(buffer_arg) {
  return world$engine_pb.ListBaseVoicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_ListBaseVoicesResponce(arg) {
  if (!(arg instanceof world$engine_pb.ListBaseVoicesResponce)) {
    throw new Error('Expected argument of type ai.inworld.engine.ListBaseVoicesResponce');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_ListBaseVoicesResponce(buffer_arg) {
  return world$engine_pb.ListBaseVoicesResponce.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_LoadSceneRequest(arg) {
  if (!(arg instanceof world$engine_pb.LoadSceneRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.LoadSceneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_LoadSceneRequest(buffer_arg) {
  return world$engine_pb.LoadSceneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_LoadSceneResponse(arg) {
  if (!(arg instanceof world$engine_pb.LoadSceneResponse)) {
    throw new Error('Expected argument of type ai.inworld.engine.LoadSceneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_LoadSceneResponse(buffer_arg) {
  return world$engine_pb.LoadSceneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_LogErrorRequest(arg) {
  if (!(arg instanceof world$engine_pb.LogErrorRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.LogErrorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_LogErrorRequest(buffer_arg) {
  return world$engine_pb.LogErrorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_PingCharacterRequest(arg) {
  if (!(arg instanceof world$engine_pb.PingCharacterRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.PingCharacterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_PingCharacterRequest(buffer_arg) {
  return world$engine_pb.PingCharacterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_VoicePreviewRequest(arg) {
  if (!(arg instanceof world$engine_pb.VoicePreviewRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.VoicePreviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_VoicePreviewRequest(buffer_arg) {
  return world$engine_pb.VoicePreviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_VoicePreviewResponse(arg) {
  if (!(arg instanceof world$engine_pb.VoicePreviewResponse)) {
    throw new Error('Expected argument of type ai.inworld.engine.VoicePreviewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_VoicePreviewResponse(buffer_arg) {
  return world$engine_pb.VoicePreviewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_packets_InworldPacket(arg) {
  if (!(arg instanceof packets_pb.InworldPacket)) {
    throw new Error('Expected argument of type ai.inworld.packets.InworldPacket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_packets_InworldPacket(buffer_arg) {
  return packets_pb.InworldPacket.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service that exposes bidirectional interaction session RPC. Effective runtime
// of the inworld.ai.
var WorldEngineService = exports.WorldEngineService = {
  // Bidirectional events based Session.
session: {
    path: '/ai.inworld.engine.WorldEngine/Session',
    requestStream: true,
    responseStream: true,
    requestType: packets_pb.InworldPacket,
    responseType: packets_pb.InworldPacket,
    requestSerialize: serialize_ai_inworld_packets_InworldPacket,
    requestDeserialize: deserialize_ai_inworld_packets_InworldPacket,
    responseSerialize: serialize_ai_inworld_packets_InworldPacket,
    responseDeserialize: deserialize_ai_inworld_packets_InworldPacket,
  },
  // RPC to create world for the interaction session.
createWorld: {
    path: '/ai.inworld.engine.WorldEngine/CreateWorld',
    requestStream: false,
    responseStream: false,
    requestType: world$engine_pb.CreateWorldRequest,
    responseType: world$engine_pb.CreateWorldResponse,
    requestSerialize: serialize_ai_inworld_engine_CreateWorldRequest,
    requestDeserialize: deserialize_ai_inworld_engine_CreateWorldRequest,
    responseSerialize: serialize_ai_inworld_engine_CreateWorldResponse,
    responseDeserialize: deserialize_ai_inworld_engine_CreateWorldResponse,
  },
  // RPC to load world for the interaction session.
loadScene: {
    path: '/ai.inworld.engine.WorldEngine/LoadScene',
    requestStream: false,
    responseStream: false,
    requestType: world$engine_pb.LoadSceneRequest,
    responseType: world$engine_pb.LoadSceneResponse,
    requestSerialize: serialize_ai_inworld_engine_LoadSceneRequest,
    requestDeserialize: deserialize_ai_inworld_engine_LoadSceneRequest,
    responseSerialize: serialize_ai_inworld_engine_LoadSceneResponse,
    responseDeserialize: deserialize_ai_inworld_engine_LoadSceneResponse,
  },
  // RPC to log errors for the interaction session.
logError: {
    path: '/ai.inworld.engine.WorldEngine/LogError',
    requestStream: false,
    responseStream: false,
    requestType: world$engine_pb.LogErrorRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_inworld_engine_LogErrorRequest,
    requestDeserialize: deserialize_ai_inworld_engine_LogErrorRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RPC to get voice preview
voicePreview: {
    path: '/ai.inworld.engine.WorldEngine/VoicePreview',
    requestStream: false,
    responseStream: false,
    requestType: world$engine_pb.VoicePreviewRequest,
    responseType: world$engine_pb.VoicePreviewResponse,
    requestSerialize: serialize_ai_inworld_engine_VoicePreviewRequest,
    requestDeserialize: deserialize_ai_inworld_engine_VoicePreviewRequest,
    responseSerialize: serialize_ai_inworld_engine_VoicePreviewResponse,
    responseDeserialize: deserialize_ai_inworld_engine_VoicePreviewResponse,
  },
  // RPC to load list of base voices.
listBaseVoices: {
    path: '/ai.inworld.engine.WorldEngine/ListBaseVoices',
    requestStream: false,
    responseStream: false,
    requestType: world$engine_pb.ListBaseVoicesRequest,
    responseType: world$engine_pb.ListBaseVoicesResponce,
    requestSerialize: serialize_ai_inworld_engine_ListBaseVoicesRequest,
    requestDeserialize: deserialize_ai_inworld_engine_ListBaseVoicesRequest,
    responseSerialize: serialize_ai_inworld_engine_ListBaseVoicesResponce,
    responseDeserialize: deserialize_ai_inworld_engine_ListBaseVoicesResponce,
  },
  // Generates a JWT to access the world engine API with a given API key
// A valid HMAC-SHA signature matching the API key in the request should be provided as authorization
generateToken: {
    path: '/ai.inworld.engine.WorldEngine/GenerateToken',
    requestStream: false,
    responseStream: false,
    requestType: world$engine_pb.GenerateTokenRequest,
    responseType: world$engine_pb.AccessToken,
    requestSerialize: serialize_ai_inworld_engine_GenerateTokenRequest,
    requestDeserialize: deserialize_ai_inworld_engine_GenerateTokenRequest,
    responseSerialize: serialize_ai_inworld_engine_AccessToken,
    responseDeserialize: deserialize_ai_inworld_engine_AccessToken,
  },
  // Temporary method
// Accepts character ID string
// Requires basic authorization with an active key and secret
// TODO: Remove when synchronous API is integrated
pingCharacter: {
    path: '/ai.inworld.engine.WorldEngine/PingCharacter',
    requestStream: false,
    responseStream: false,
    requestType: world$engine_pb.PingCharacterRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_inworld_engine_PingCharacterRequest,
    requestDeserialize: deserialize_ai_inworld_engine_PingCharacterRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createInteractionFeedback: {
    path: '/ai.inworld.engine.WorldEngine/CreateInteractionFeedback',
    requestStream: false,
    responseStream: false,
    requestType: world$engine_pb.CreateInteractionFeedbackRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_inworld_engine_CreateInteractionFeedbackRequest,
    requestDeserialize: deserialize_ai_inworld_engine_CreateInteractionFeedbackRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.WorldEngineClient = grpc.makeGenericClientConstructor(WorldEngineService);
