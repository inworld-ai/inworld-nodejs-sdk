// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ai_inworld_engine_world$engine_pb = require('../../../ai/inworld/engine/world-engine_pb.js');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ai_inworld_packets_packets_pb = require('../../../ai/inworld/packets/packets_pb.js');
var ai_inworld_voices_voices_pb = require('../../../ai/inworld/voices/voices_pb.js');
var ai_inworld_voices_base_voice_pb = require('../../../ai/inworld/voices/base_voice_pb.js');
var ai_inworld_language_codes_language_codes_pb = require('../../../ai/inworld/language_codes/language_codes_pb.js');

function serialize_ai_inworld_engine_AccessToken(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.AccessToken)) {
    throw new Error('Expected argument of type ai.inworld.engine.AccessToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_AccessToken(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.AccessToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_GenerateTokenRequest(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.GenerateTokenRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.GenerateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_GenerateTokenRequest(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.GenerateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_ListBaseVoicesRequest(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.ListBaseVoicesRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.ListBaseVoicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_ListBaseVoicesRequest(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.ListBaseVoicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_ListBaseVoicesResponce(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.ListBaseVoicesResponce)) {
    throw new Error('Expected argument of type ai.inworld.engine.ListBaseVoicesResponce');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_ListBaseVoicesResponce(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.ListBaseVoicesResponce.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_LoadSceneRequest(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.LoadSceneRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.LoadSceneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_LoadSceneRequest(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.LoadSceneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_LoadSceneResponse(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.LoadSceneResponse)) {
    throw new Error('Expected argument of type ai.inworld.engine.LoadSceneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_LoadSceneResponse(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.LoadSceneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_LogErrorRequest(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.LogErrorRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.LogErrorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_LogErrorRequest(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.LogErrorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_VoicePreviewRequest(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.VoicePreviewRequest)) {
    throw new Error('Expected argument of type ai.inworld.engine.VoicePreviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_VoicePreviewRequest(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.VoicePreviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_engine_VoicePreviewResponse(arg) {
  if (!(arg instanceof ai_inworld_engine_world$engine_pb.VoicePreviewResponse)) {
    throw new Error('Expected argument of type ai.inworld.engine.VoicePreviewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_engine_VoicePreviewResponse(buffer_arg) {
  return ai_inworld_engine_world$engine_pb.VoicePreviewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_inworld_packets_InworldPacket(arg) {
  if (!(arg instanceof ai_inworld_packets_packets_pb.InworldPacket)) {
    throw new Error('Expected argument of type ai.inworld.packets.InworldPacket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_inworld_packets_InworldPacket(buffer_arg) {
  return ai_inworld_packets_packets_pb.InworldPacket.deserializeBinary(new Uint8Array(buffer_arg));
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
// Requires LoadScene RPC to be called before.
session: {
    path: '/ai.inworld.engine.WorldEngine/Session',
    requestStream: true,
    responseStream: true,
    requestType: ai_inworld_packets_packets_pb.InworldPacket,
    responseType: ai_inworld_packets_packets_pb.InworldPacket,
    requestSerialize: serialize_ai_inworld_packets_InworldPacket,
    requestDeserialize: deserialize_ai_inworld_packets_InworldPacket,
    responseSerialize: serialize_ai_inworld_packets_InworldPacket,
    responseDeserialize: deserialize_ai_inworld_packets_InworldPacket,
  },
  // Bidirectional events based Session.
// Allows to open session with one rpc call.
// All necessary configuration should be passed before data packets.
// Configuration provided by SessionControlEvent and MutationEvent.
// The Client capabilities, user settings, client settings and scene are required to start session.
// Packets processed in the order of input.
openSession: {
    path: '/ai.inworld.engine.WorldEngine/OpenSession',
    requestStream: true,
    responseStream: true,
    requestType: ai_inworld_packets_packets_pb.InworldPacket,
    responseType: ai_inworld_packets_packets_pb.InworldPacket,
    requestSerialize: serialize_ai_inworld_packets_InworldPacket,
    requestDeserialize: deserialize_ai_inworld_packets_InworldPacket,
    responseSerialize: serialize_ai_inworld_packets_InworldPacket,
    responseDeserialize: deserialize_ai_inworld_packets_InworldPacket,
  },
  // RPC to load world for the interaction session.
loadScene: {
    path: '/ai.inworld.engine.WorldEngine/LoadScene',
    requestStream: false,
    responseStream: false,
    requestType: ai_inworld_engine_world$engine_pb.LoadSceneRequest,
    responseType: ai_inworld_engine_world$engine_pb.LoadSceneResponse,
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
    requestType: ai_inworld_engine_world$engine_pb.LogErrorRequest,
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
    requestType: ai_inworld_engine_world$engine_pb.VoicePreviewRequest,
    responseType: ai_inworld_engine_world$engine_pb.VoicePreviewResponse,
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
    requestType: ai_inworld_engine_world$engine_pb.ListBaseVoicesRequest,
    responseType: ai_inworld_engine_world$engine_pb.ListBaseVoicesResponce,
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
    requestType: ai_inworld_engine_world$engine_pb.GenerateTokenRequest,
    responseType: ai_inworld_engine_world$engine_pb.AccessToken,
    requestSerialize: serialize_ai_inworld_engine_GenerateTokenRequest,
    requestDeserialize: deserialize_ai_inworld_engine_GenerateTokenRequest,
    responseSerialize: serialize_ai_inworld_engine_AccessToken,
    responseDeserialize: deserialize_ai_inworld_engine_AccessToken,
  },
};

exports.WorldEngineClient = grpc.makeGenericClientConstructor(WorldEngineService);
