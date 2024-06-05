// source: ai/inworld/packets/packets.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var ai_inworld_options_options_pb = require('../../../ai/inworld/options/options_pb.js');
goog.object.extend(proto, ai_inworld_options_options_pb);
var ai_inworld_engine_configuration_configuration_pb = require('../../../ai/inworld/engine/configuration/configuration_pb.js');
goog.object.extend(proto, ai_inworld_engine_configuration_configuration_pb);
var ai_inworld_language_codes_language_codes_pb = require('../../../ai/inworld/language_codes/language_codes_pb.js');
goog.object.extend(proto, ai_inworld_language_codes_language_codes_pb);
goog.exportSymbol('proto.ActionEvent', null, global);
goog.exportSymbol('proto.ActionEvent.ActionCase', null, global);
goog.exportSymbol('proto.Actor', null, global);
goog.exportSymbol('proto.Actor.Type', null, global);
goog.exportSymbol('proto.AdditionalPhonemeInfo', null, global);
goog.exportSymbol('proto.Agent', null, global);
goog.exportSymbol('proto.Agent.CharacterAssets', null, global);
goog.exportSymbol('proto.ApplyResponse', null, global);
goog.exportSymbol('proto.Audio2FaceAnimationEvent', null, global);
goog.exportSymbol('proto.AudioChunk', null, global);
goog.exportSymbol('proto.AudioSessionStartPayload', null, global);
goog.exportSymbol('proto.AudioSessionStartPayload.MicrophoneMode', null, global);
goog.exportSymbol('proto.CancelResponses', null, global);
goog.exportSymbol('proto.CancelResponsesEvent', null, global);
goog.exportSymbol('proto.Continuation', null, global);
goog.exportSymbol('proto.Continuation.ContinuationInfo', null, global);
goog.exportSymbol('proto.Continuation.ContinuationType', null, global);
goog.exportSymbol('proto.ControlEvent', null, global);
goog.exportSymbol('proto.ControlEvent.Action', null, global);
goog.exportSymbol('proto.ControlEvent.PayloadStructuredCase', null, global);
goog.exportSymbol('proto.ConversationEventPayload', null, global);
goog.exportSymbol('proto.ConversationEventPayload.ConversationEventType', null, global);
goog.exportSymbol('proto.ConversationUpdatePayload', null, global);
goog.exportSymbol('proto.CurrentSceneStatus', null, global);
goog.exportSymbol('proto.CustomEvent', null, global);
goog.exportSymbol('proto.CustomEvent.Parameter', null, global);
goog.exportSymbol('proto.DataChunk', null, global);
goog.exportSymbol('proto.DataChunk.AudioFormat', null, global);
goog.exportSymbol('proto.DataChunk.DataCase', null, global);
goog.exportSymbol('proto.DataChunk.DataType', null, global);
goog.exportSymbol('proto.DebugInfoEvent', null, global);
goog.exportSymbol('proto.DebugInfoEvent.InfoCase', null, global);
goog.exportSymbol('proto.DialogHistory', null, global);
goog.exportSymbol('proto.DialogHistory.HistoryItem', null, global);
goog.exportSymbol('proto.EmotionEvent', null, global);
goog.exportSymbol('proto.EmotionEvent.SpaffCode', null, global);
goog.exportSymbol('proto.EmotionEvent.Strength', null, global);
goog.exportSymbol('proto.InworldPacket', null, global);
goog.exportSymbol('proto.InworldPacket.PacketCase', null, global);
goog.exportSymbol('proto.LoadCharacters', null, global);
goog.exportSymbol('proto.LoadCharacters.CharacterName', null, global);
goog.exportSymbol('proto.LoadScene', null, global);
goog.exportSymbol('proto.LoadSceneOutputEvent', null, global);
goog.exportSymbol('proto.LoadSceneOutputEvent.Agent', null, global);
goog.exportSymbol('proto.LoadedCharacters', null, global);
goog.exportSymbol('proto.LoadedScene', null, global);
goog.exportSymbol('proto.ModifyExactResponse', null, global);
goog.exportSymbol('proto.MutationEvent', null, global);
goog.exportSymbol('proto.MutationEvent.MutationCase', null, global);
goog.exportSymbol('proto.NarratedAction', null, global);
goog.exportSymbol('proto.PacketId', null, global);
goog.exportSymbol('proto.Playback', null, global);
goog.exportSymbol('proto.RegenerateResponse', null, global);
goog.exportSymbol('proto.RelationInfo', null, global);
goog.exportSymbol('proto.RelationInfo.RelationAttributes', null, global);
goog.exportSymbol('proto.Relations', null, global);
goog.exportSymbol('proto.Relations.Relation', null, global);
goog.exportSymbol('proto.Routing', null, global);
goog.exportSymbol('proto.SessionConfigurationPayload', null, global);
goog.exportSymbol('proto.SessionControlEvent', null, global);
goog.exportSymbol('proto.SessionControlEvent.SessionControlCase', null, global);
goog.exportSymbol('proto.SessionControlResponseEvent', null, global);
goog.exportSymbol('proto.SessionControlResponseEvent.ResponseCase', null, global);
goog.exportSymbol('proto.SessionHistoryRequest', null, global);
goog.exportSymbol('proto.SessionHistoryResponse', null, global);
goog.exportSymbol('proto.SessionHistoryResponse.SessionHistoryItem', null, global);
goog.exportSymbol('proto.TextEvent', null, global);
goog.exportSymbol('proto.TextEvent.ModelInfo', null, global);
goog.exportSymbol('proto.TextEvent.SourceType', null, global);
goog.exportSymbol('proto.UnloadCharacters', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Actor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Actor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Actor.displayName = 'proto.Actor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Routing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Routing.repeatedFields_, null);
};
goog.inherits(proto.Routing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Routing.displayName = 'proto.Routing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PacketId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PacketId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PacketId.displayName = 'proto.PacketId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InworldPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.InworldPacket.oneofGroups_);
};
goog.inherits(proto.InworldPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.InworldPacket.displayName = 'proto.InworldPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TextEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TextEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TextEvent.displayName = 'proto.TextEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TextEvent.ModelInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TextEvent.ModelInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TextEvent.ModelInfo.displayName = 'proto.TextEvent.ModelInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ControlEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ControlEvent.oneofGroups_);
};
goog.inherits(proto.ControlEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ControlEvent.displayName = 'proto.ControlEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AudioSessionStartPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AudioSessionStartPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AudioSessionStartPayload.displayName = 'proto.AudioSessionStartPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AudioChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AudioChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AudioChunk.displayName = 'proto.AudioChunk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CustomEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CustomEvent.repeatedFields_, null);
};
goog.inherits(proto.CustomEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CustomEvent.displayName = 'proto.CustomEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CustomEvent.Parameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CustomEvent.Parameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CustomEvent.Parameter.displayName = 'proto.CustomEvent.Parameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CancelResponsesEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CancelResponsesEvent.repeatedFields_, null);
};
goog.inherits(proto.CancelResponsesEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CancelResponsesEvent.displayName = 'proto.CancelResponsesEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EmotionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EmotionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EmotionEvent.displayName = 'proto.EmotionEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DataChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DataChunk.repeatedFields_, proto.DataChunk.oneofGroups_);
};
goog.inherits(proto.DataChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DataChunk.displayName = 'proto.DataChunk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdditionalPhonemeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdditionalPhonemeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdditionalPhonemeInfo.displayName = 'proto.AdditionalPhonemeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ActionEvent.oneofGroups_);
};
goog.inherits(proto.ActionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionEvent.displayName = 'proto.ActionEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NarratedAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NarratedAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NarratedAction.displayName = 'proto.NarratedAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RelationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RelationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RelationInfo.displayName = 'proto.RelationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RelationInfo.RelationAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RelationInfo.RelationAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RelationInfo.RelationAttributes.displayName = 'proto.RelationInfo.RelationAttributes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MutationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.MutationEvent.oneofGroups_);
};
goog.inherits(proto.MutationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MutationEvent.displayName = 'proto.MutationEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SessionControlResponseEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SessionControlResponseEvent.oneofGroups_);
};
goog.inherits(proto.SessionControlResponseEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SessionControlResponseEvent.displayName = 'proto.SessionControlResponseEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CancelResponses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CancelResponses.repeatedFields_, null);
};
goog.inherits(proto.CancelResponses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CancelResponses.displayName = 'proto.CancelResponses';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RegenerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RegenerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RegenerateResponse.displayName = 'proto.RegenerateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ApplyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ApplyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ApplyResponse.displayName = 'proto.ApplyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoadScene = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoadScene, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoadScene.displayName = 'proto.LoadScene';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoadedScene = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LoadedScene.repeatedFields_, null);
};
goog.inherits(proto.LoadedScene, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoadedScene.displayName = 'proto.LoadedScene';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoadCharacters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LoadCharacters.repeatedFields_, null);
};
goog.inherits(proto.LoadCharacters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoadCharacters.displayName = 'proto.LoadCharacters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoadCharacters.CharacterName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoadCharacters.CharacterName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoadCharacters.CharacterName.displayName = 'proto.LoadCharacters.CharacterName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoadedCharacters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LoadedCharacters.repeatedFields_, null);
};
goog.inherits(proto.LoadedCharacters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoadedCharacters.displayName = 'proto.LoadedCharacters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UnloadCharacters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.UnloadCharacters.repeatedFields_, null);
};
goog.inherits(proto.UnloadCharacters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UnloadCharacters.displayName = 'proto.UnloadCharacters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CurrentSceneStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CurrentSceneStatus.repeatedFields_, null);
};
goog.inherits(proto.CurrentSceneStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CurrentSceneStatus.displayName = 'proto.CurrentSceneStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyExactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyExactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyExactResponse.displayName = 'proto.ModifyExactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoadSceneOutputEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LoadSceneOutputEvent.repeatedFields_, null);
};
goog.inherits(proto.LoadSceneOutputEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoadSceneOutputEvent.displayName = 'proto.LoadSceneOutputEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoadSceneOutputEvent.Agent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoadSceneOutputEvent.Agent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoadSceneOutputEvent.Agent.displayName = 'proto.LoadSceneOutputEvent.Agent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Agent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Agent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Agent.displayName = 'proto.Agent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Agent.CharacterAssets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Agent.CharacterAssets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Agent.CharacterAssets.displayName = 'proto.Agent.CharacterAssets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DebugInfoEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.DebugInfoEvent.oneofGroups_);
};
goog.inherits(proto.DebugInfoEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DebugInfoEvent.displayName = 'proto.DebugInfoEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SessionControlEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SessionControlEvent.oneofGroups_);
};
goog.inherits(proto.SessionControlEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SessionControlEvent.displayName = 'proto.SessionControlEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SessionConfigurationPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SessionConfigurationPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SessionConfigurationPayload.displayName = 'proto.SessionConfigurationPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Audio2FaceAnimationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Audio2FaceAnimationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Audio2FaceAnimationEvent.displayName = 'proto.Audio2FaceAnimationEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Continuation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Continuation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Continuation.displayName = 'proto.Continuation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Continuation.ContinuationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Continuation.ContinuationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Continuation.ContinuationInfo.displayName = 'proto.Continuation.ContinuationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DialogHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DialogHistory.repeatedFields_, null);
};
goog.inherits(proto.DialogHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DialogHistory.displayName = 'proto.DialogHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DialogHistory.HistoryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DialogHistory.HistoryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DialogHistory.HistoryItem.displayName = 'proto.DialogHistory.HistoryItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Relations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Relations.repeatedFields_, null);
};
goog.inherits(proto.Relations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Relations.displayName = 'proto.Relations';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Relations.Relation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Relations.Relation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Relations.Relation.displayName = 'proto.Relations.Relation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SessionHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SessionHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SessionHistoryRequest.displayName = 'proto.SessionHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SessionHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SessionHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.SessionHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SessionHistoryResponse.displayName = 'proto.SessionHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SessionHistoryResponse.SessionHistoryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SessionHistoryResponse.SessionHistoryItem.repeatedFields_, null);
};
goog.inherits(proto.SessionHistoryResponse.SessionHistoryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SessionHistoryResponse.SessionHistoryItem.displayName = 'proto.SessionHistoryResponse.SessionHistoryItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConversationUpdatePayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ConversationUpdatePayload.repeatedFields_, null);
};
goog.inherits(proto.ConversationUpdatePayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConversationUpdatePayload.displayName = 'proto.ConversationUpdatePayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConversationEventPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ConversationEventPayload.repeatedFields_, null);
};
goog.inherits(proto.ConversationEventPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConversationEventPayload.displayName = 'proto.ConversationEventPayload';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Actor.prototype.toObject = function(opt_includeInstance) {
  return proto.Actor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Actor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Actor.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Actor}
 */
proto.Actor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Actor;
  return proto.Actor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Actor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Actor}
 */
proto.Actor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Actor.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Actor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Actor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Actor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Actor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Actor.Type = {
  UNKNOWN: 0,
  PLAYER: 1,
  AGENT: 2,
  WORLD: 3
};

/**
 * optional Type type = 1;
 * @return {!proto.Actor.Type}
 */
proto.Actor.prototype.getType = function() {
  return /** @type {!proto.Actor.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Actor.Type} value
 * @return {!proto.Actor} returns this
 */
proto.Actor.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.Actor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Actor} returns this
 */
proto.Actor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Routing.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Routing.prototype.toObject = function(opt_includeInstance) {
  return proto.Routing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Routing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Routing.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && proto.Actor.toObject(includeInstance, f),
    target: (f = msg.getTarget()) && proto.Actor.toObject(includeInstance, f),
    targetsList: jspb.Message.toObjectList(msg.getTargetsList(),
    proto.Actor.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Routing}
 */
proto.Routing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Routing;
  return proto.Routing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Routing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Routing}
 */
proto.Routing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Actor;
      reader.readMessage(value,proto.Actor.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = new proto.Actor;
      reader.readMessage(value,proto.Actor.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 3:
      var value = new proto.Actor;
      reader.readMessage(value,proto.Actor.deserializeBinaryFromReader);
      msg.addTargets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Routing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Routing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Routing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Routing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Actor.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Actor.serializeBinaryToWriter
    );
  }
  f = message.getTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Actor.serializeBinaryToWriter
    );
  }
};


/**
 * optional Actor source = 1;
 * @return {?proto.Actor}
 */
proto.Routing.prototype.getSource = function() {
  return /** @type{?proto.Actor} */ (
    jspb.Message.getWrapperField(this, proto.Actor, 1));
};


/**
 * @param {?proto.Actor|undefined} value
 * @return {!proto.Routing} returns this
*/
proto.Routing.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Routing} returns this
 */
proto.Routing.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Routing.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Actor target = 2;
 * @return {?proto.Actor}
 */
proto.Routing.prototype.getTarget = function() {
  return /** @type{?proto.Actor} */ (
    jspb.Message.getWrapperField(this, proto.Actor, 2));
};


/**
 * @param {?proto.Actor|undefined} value
 * @return {!proto.Routing} returns this
*/
proto.Routing.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Routing} returns this
 */
proto.Routing.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Routing.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Actor targets = 3;
 * @return {!Array<!proto.Actor>}
 */
proto.Routing.prototype.getTargetsList = function() {
  return /** @type{!Array<!proto.Actor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Actor, 3));
};


/**
 * @param {!Array<!proto.Actor>} value
 * @return {!proto.Routing} returns this
*/
proto.Routing.prototype.setTargetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Actor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Actor}
 */
proto.Routing.prototype.addTargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Actor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Routing} returns this
 */
proto.Routing.prototype.clearTargetsList = function() {
  return this.setTargetsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PacketId.prototype.toObject = function(opt_includeInstance) {
  return proto.PacketId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PacketId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PacketId.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    utteranceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    interactionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    correlationId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    conversationId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PacketId}
 */
proto.PacketId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PacketId;
  return proto.PacketId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PacketId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PacketId}
 */
proto.PacketId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPacketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUtteranceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInteractionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrelationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PacketId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PacketId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PacketId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PacketId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUtteranceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInteractionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCorrelationId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getConversationId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string packet_id = 1;
 * @return {string}
 */
proto.PacketId.prototype.getPacketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PacketId} returns this
 */
proto.PacketId.prototype.setPacketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string utterance_id = 2;
 * @return {string}
 */
proto.PacketId.prototype.getUtteranceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PacketId} returns this
 */
proto.PacketId.prototype.setUtteranceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string interaction_id = 3;
 * @return {string}
 */
proto.PacketId.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PacketId} returns this
 */
proto.PacketId.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string correlation_id = 4;
 * @return {string}
 */
proto.PacketId.prototype.getCorrelationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PacketId} returns this
 */
proto.PacketId.prototype.setCorrelationId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string conversation_id = 5;
 * @return {string}
 */
proto.PacketId.prototype.getConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.PacketId} returns this
 */
proto.PacketId.prototype.setConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.InworldPacket.oneofGroups_ = [[2,3,4,8,10,11,12,13,15,16,18,19,20,21]];

/**
 * @enum {number}
 */
proto.InworldPacket.PacketCase = {
  PACKET_NOT_SET: 0,
  TEXT: 2,
  CONTROL: 3,
  AUDIO_CHUNK: 4,
  CUSTOM: 8,
  CANCELRESPONSES: 10,
  EMOTION: 11,
  DATA_CHUNK: 12,
  ACTION: 13,
  MUTATION: 15,
  LOAD_SCENE_OUTPUT: 16,
  DEBUG_INFO: 18,
  SESSION_CONTROL: 19,
  SESSION_CONTROL_RESPONSE: 20,
  A2F_EVENT: 21
};

/**
 * @return {proto.InworldPacket.PacketCase}
 */
proto.InworldPacket.prototype.getPacketCase = function() {
  return /** @type {proto.InworldPacket.PacketCase} */(jspb.Message.computeOneofCase(this, proto.InworldPacket.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InworldPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.InworldPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InworldPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InworldPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    routing: (f = msg.getRouting()) && proto.Routing.toObject(includeInstance, f),
    packetId: (f = msg.getPacketId()) && proto.PacketId.toObject(includeInstance, f),
    text: (f = msg.getText()) && proto.TextEvent.toObject(includeInstance, f),
    control: (f = msg.getControl()) && proto.ControlEvent.toObject(includeInstance, f),
    audioChunk: (f = msg.getAudioChunk()) && proto.AudioChunk.toObject(includeInstance, f),
    custom: (f = msg.getCustom()) && proto.CustomEvent.toObject(includeInstance, f),
    cancelresponses: (f = msg.getCancelresponses()) && proto.CancelResponsesEvent.toObject(includeInstance, f),
    emotion: (f = msg.getEmotion()) && proto.EmotionEvent.toObject(includeInstance, f),
    dataChunk: (f = msg.getDataChunk()) && proto.DataChunk.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.ActionEvent.toObject(includeInstance, f),
    mutation: (f = msg.getMutation()) && proto.MutationEvent.toObject(includeInstance, f),
    loadSceneOutput: (f = msg.getLoadSceneOutput()) && proto.LoadSceneOutputEvent.toObject(includeInstance, f),
    debugInfo: (f = msg.getDebugInfo()) && proto.DebugInfoEvent.toObject(includeInstance, f),
    sessionControl: (f = msg.getSessionControl()) && proto.SessionControlEvent.toObject(includeInstance, f),
    sessionControlResponse: (f = msg.getSessionControlResponse()) && proto.SessionControlResponseEvent.toObject(includeInstance, f),
    a2fEvent: (f = msg.getA2fEvent()) && proto.Audio2FaceAnimationEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InworldPacket}
 */
proto.InworldPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InworldPacket;
  return proto.InworldPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InworldPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InworldPacket}
 */
proto.InworldPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 6:
      var value = new proto.Routing;
      reader.readMessage(value,proto.Routing.deserializeBinaryFromReader);
      msg.setRouting(value);
      break;
    case 9:
      var value = new proto.PacketId;
      reader.readMessage(value,proto.PacketId.deserializeBinaryFromReader);
      msg.setPacketId(value);
      break;
    case 2:
      var value = new proto.TextEvent;
      reader.readMessage(value,proto.TextEvent.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 3:
      var value = new proto.ControlEvent;
      reader.readMessage(value,proto.ControlEvent.deserializeBinaryFromReader);
      msg.setControl(value);
      break;
    case 4:
      var value = new proto.AudioChunk;
      reader.readMessage(value,proto.AudioChunk.deserializeBinaryFromReader);
      msg.setAudioChunk(value);
      break;
    case 8:
      var value = new proto.CustomEvent;
      reader.readMessage(value,proto.CustomEvent.deserializeBinaryFromReader);
      msg.setCustom(value);
      break;
    case 10:
      var value = new proto.CancelResponsesEvent;
      reader.readMessage(value,proto.CancelResponsesEvent.deserializeBinaryFromReader);
      msg.setCancelresponses(value);
      break;
    case 11:
      var value = new proto.EmotionEvent;
      reader.readMessage(value,proto.EmotionEvent.deserializeBinaryFromReader);
      msg.setEmotion(value);
      break;
    case 12:
      var value = new proto.DataChunk;
      reader.readMessage(value,proto.DataChunk.deserializeBinaryFromReader);
      msg.setDataChunk(value);
      break;
    case 13:
      var value = new proto.ActionEvent;
      reader.readMessage(value,proto.ActionEvent.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 15:
      var value = new proto.MutationEvent;
      reader.readMessage(value,proto.MutationEvent.deserializeBinaryFromReader);
      msg.setMutation(value);
      break;
    case 16:
      var value = new proto.LoadSceneOutputEvent;
      reader.readMessage(value,proto.LoadSceneOutputEvent.deserializeBinaryFromReader);
      msg.setLoadSceneOutput(value);
      break;
    case 18:
      var value = new proto.DebugInfoEvent;
      reader.readMessage(value,proto.DebugInfoEvent.deserializeBinaryFromReader);
      msg.setDebugInfo(value);
      break;
    case 19:
      var value = new proto.SessionControlEvent;
      reader.readMessage(value,proto.SessionControlEvent.deserializeBinaryFromReader);
      msg.setSessionControl(value);
      break;
    case 20:
      var value = new proto.SessionControlResponseEvent;
      reader.readMessage(value,proto.SessionControlResponseEvent.deserializeBinaryFromReader);
      msg.setSessionControlResponse(value);
      break;
    case 21:
      var value = new proto.Audio2FaceAnimationEvent;
      reader.readMessage(value,proto.Audio2FaceAnimationEvent.deserializeBinaryFromReader);
      msg.setA2fEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InworldPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.InworldPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.InworldPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InworldPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRouting();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.Routing.serializeBinaryToWriter
    );
  }
  f = message.getPacketId();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.PacketId.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.TextEvent.serializeBinaryToWriter
    );
  }
  f = message.getControl();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ControlEvent.serializeBinaryToWriter
    );
  }
  f = message.getAudioChunk();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.AudioChunk.serializeBinaryToWriter
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.CustomEvent.serializeBinaryToWriter
    );
  }
  f = message.getCancelresponses();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.CancelResponsesEvent.serializeBinaryToWriter
    );
  }
  f = message.getEmotion();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.EmotionEvent.serializeBinaryToWriter
    );
  }
  f = message.getDataChunk();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.DataChunk.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ActionEvent.serializeBinaryToWriter
    );
  }
  f = message.getMutation();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.MutationEvent.serializeBinaryToWriter
    );
  }
  f = message.getLoadSceneOutput();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.LoadSceneOutputEvent.serializeBinaryToWriter
    );
  }
  f = message.getDebugInfo();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.DebugInfoEvent.serializeBinaryToWriter
    );
  }
  f = message.getSessionControl();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.SessionControlEvent.serializeBinaryToWriter
    );
  }
  f = message.getSessionControlResponse();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.SessionControlResponseEvent.serializeBinaryToWriter
    );
  }
  f = message.getA2fEvent();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.Audio2FaceAnimationEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.InworldPacket.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Routing routing = 6;
 * @return {?proto.Routing}
 */
proto.InworldPacket.prototype.getRouting = function() {
  return /** @type{?proto.Routing} */ (
    jspb.Message.getWrapperField(this, proto.Routing, 6));
};


/**
 * @param {?proto.Routing|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setRouting = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearRouting = function() {
  return this.setRouting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasRouting = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PacketId packet_id = 9;
 * @return {?proto.PacketId}
 */
proto.InworldPacket.prototype.getPacketId = function() {
  return /** @type{?proto.PacketId} */ (
    jspb.Message.getWrapperField(this, proto.PacketId, 9));
};


/**
 * @param {?proto.PacketId|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setPacketId = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearPacketId = function() {
  return this.setPacketId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasPacketId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional TextEvent text = 2;
 * @return {?proto.TextEvent}
 */
proto.InworldPacket.prototype.getText = function() {
  return /** @type{?proto.TextEvent} */ (
    jspb.Message.getWrapperField(this, proto.TextEvent, 2));
};


/**
 * @param {?proto.TextEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ControlEvent control = 3;
 * @return {?proto.ControlEvent}
 */
proto.InworldPacket.prototype.getControl = function() {
  return /** @type{?proto.ControlEvent} */ (
    jspb.Message.getWrapperField(this, proto.ControlEvent, 3));
};


/**
 * @param {?proto.ControlEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setControl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearControl = function() {
  return this.setControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasControl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AudioChunk audio_chunk = 4;
 * @return {?proto.AudioChunk}
 */
proto.InworldPacket.prototype.getAudioChunk = function() {
  return /** @type{?proto.AudioChunk} */ (
    jspb.Message.getWrapperField(this, proto.AudioChunk, 4));
};


/**
 * @param {?proto.AudioChunk|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setAudioChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearAudioChunk = function() {
  return this.setAudioChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasAudioChunk = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CustomEvent custom = 8;
 * @return {?proto.CustomEvent}
 */
proto.InworldPacket.prototype.getCustom = function() {
  return /** @type{?proto.CustomEvent} */ (
    jspb.Message.getWrapperField(this, proto.CustomEvent, 8));
};


/**
 * @param {?proto.CustomEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setCustom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CancelResponsesEvent cancelResponses = 10;
 * @return {?proto.CancelResponsesEvent}
 */
proto.InworldPacket.prototype.getCancelresponses = function() {
  return /** @type{?proto.CancelResponsesEvent} */ (
    jspb.Message.getWrapperField(this, proto.CancelResponsesEvent, 10));
};


/**
 * @param {?proto.CancelResponsesEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setCancelresponses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearCancelresponses = function() {
  return this.setCancelresponses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasCancelresponses = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional EmotionEvent emotion = 11;
 * @return {?proto.EmotionEvent}
 */
proto.InworldPacket.prototype.getEmotion = function() {
  return /** @type{?proto.EmotionEvent} */ (
    jspb.Message.getWrapperField(this, proto.EmotionEvent, 11));
};


/**
 * @param {?proto.EmotionEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setEmotion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearEmotion = function() {
  return this.setEmotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasEmotion = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DataChunk data_chunk = 12;
 * @return {?proto.DataChunk}
 */
proto.InworldPacket.prototype.getDataChunk = function() {
  return /** @type{?proto.DataChunk} */ (
    jspb.Message.getWrapperField(this, proto.DataChunk, 12));
};


/**
 * @param {?proto.DataChunk|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setDataChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearDataChunk = function() {
  return this.setDataChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasDataChunk = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ActionEvent action = 13;
 * @return {?proto.ActionEvent}
 */
proto.InworldPacket.prototype.getAction = function() {
  return /** @type{?proto.ActionEvent} */ (
    jspb.Message.getWrapperField(this, proto.ActionEvent, 13));
};


/**
 * @param {?proto.ActionEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasAction = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional MutationEvent mutation = 15;
 * @return {?proto.MutationEvent}
 */
proto.InworldPacket.prototype.getMutation = function() {
  return /** @type{?proto.MutationEvent} */ (
    jspb.Message.getWrapperField(this, proto.MutationEvent, 15));
};


/**
 * @param {?proto.MutationEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setMutation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearMutation = function() {
  return this.setMutation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasMutation = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional LoadSceneOutputEvent load_scene_output = 16;
 * @return {?proto.LoadSceneOutputEvent}
 */
proto.InworldPacket.prototype.getLoadSceneOutput = function() {
  return /** @type{?proto.LoadSceneOutputEvent} */ (
    jspb.Message.getWrapperField(this, proto.LoadSceneOutputEvent, 16));
};


/**
 * @param {?proto.LoadSceneOutputEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setLoadSceneOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearLoadSceneOutput = function() {
  return this.setLoadSceneOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasLoadSceneOutput = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional DebugInfoEvent debug_info = 18;
 * @return {?proto.DebugInfoEvent}
 */
proto.InworldPacket.prototype.getDebugInfo = function() {
  return /** @type{?proto.DebugInfoEvent} */ (
    jspb.Message.getWrapperField(this, proto.DebugInfoEvent, 18));
};


/**
 * @param {?proto.DebugInfoEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setDebugInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearDebugInfo = function() {
  return this.setDebugInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasDebugInfo = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional SessionControlEvent session_control = 19;
 * @return {?proto.SessionControlEvent}
 */
proto.InworldPacket.prototype.getSessionControl = function() {
  return /** @type{?proto.SessionControlEvent} */ (
    jspb.Message.getWrapperField(this, proto.SessionControlEvent, 19));
};


/**
 * @param {?proto.SessionControlEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setSessionControl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearSessionControl = function() {
  return this.setSessionControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasSessionControl = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional SessionControlResponseEvent session_control_response = 20;
 * @return {?proto.SessionControlResponseEvent}
 */
proto.InworldPacket.prototype.getSessionControlResponse = function() {
  return /** @type{?proto.SessionControlResponseEvent} */ (
    jspb.Message.getWrapperField(this, proto.SessionControlResponseEvent, 20));
};


/**
 * @param {?proto.SessionControlResponseEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setSessionControlResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearSessionControlResponse = function() {
  return this.setSessionControlResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasSessionControlResponse = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional Audio2FaceAnimationEvent a2f_event = 21;
 * @return {?proto.Audio2FaceAnimationEvent}
 */
proto.InworldPacket.prototype.getA2fEvent = function() {
  return /** @type{?proto.Audio2FaceAnimationEvent} */ (
    jspb.Message.getWrapperField(this, proto.Audio2FaceAnimationEvent, 21));
};


/**
 * @param {?proto.Audio2FaceAnimationEvent|undefined} value
 * @return {!proto.InworldPacket} returns this
*/
proto.InworldPacket.prototype.setA2fEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.InworldPacket} returns this
 */
proto.InworldPacket.prototype.clearA2fEvent = function() {
  return this.setA2fEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.InworldPacket.prototype.hasA2fEvent = function() {
  return jspb.Message.getField(this, 21) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TextEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.TextEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TextEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TextEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pb_final: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    modelInfo: (f = msg.getModelInfo()) && proto.TextEvent.ModelInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TextEvent}
 */
proto.TextEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TextEvent;
  return proto.TextEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TextEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TextEvent}
 */
proto.TextEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {!proto.TextEvent.SourceType} */ (reader.readEnum());
      msg.setSourceType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinal(value);
      break;
    case 4:
      var value = new proto.TextEvent.ModelInfo;
      reader.readMessage(value,proto.TextEvent.ModelInfo.deserializeBinaryFromReader);
      msg.setModelInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TextEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TextEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TextEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TextEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFinal();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getModelInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.TextEvent.ModelInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.TextEvent.SourceType = {
  UNKNOWN: 0,
  SPEECH_TO_TEXT: 1,
  TYPED_IN: 2,
  GENERATED: 3,
  FILLER: 4
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TextEvent.ModelInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.TextEvent.ModelInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TextEvent.ModelInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TextEvent.ModelInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, ""),
    model: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TextEvent.ModelInfo}
 */
proto.TextEvent.ModelInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TextEvent.ModelInfo;
  return proto.TextEvent.ModelInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TextEvent.ModelInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TextEvent.ModelInfo}
 */
proto.TextEvent.ModelInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TextEvent.ModelInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TextEvent.ModelInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TextEvent.ModelInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TextEvent.ModelInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.TextEvent.ModelInfo.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.TextEvent.ModelInfo} returns this
 */
proto.TextEvent.ModelInfo.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.TextEvent.ModelInfo.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.TextEvent.ModelInfo} returns this
 */
proto.TextEvent.ModelInfo.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.TextEvent.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.TextEvent} returns this
 */
proto.TextEvent.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SourceType source_type = 2;
 * @return {!proto.TextEvent.SourceType}
 */
proto.TextEvent.prototype.getSourceType = function() {
  return /** @type {!proto.TextEvent.SourceType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.TextEvent.SourceType} value
 * @return {!proto.TextEvent} returns this
 */
proto.TextEvent.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool final = 3;
 * @return {boolean}
 */
proto.TextEvent.prototype.getFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.TextEvent} returns this
 */
proto.TextEvent.prototype.setFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional ModelInfo model_info = 4;
 * @return {?proto.TextEvent.ModelInfo}
 */
proto.TextEvent.prototype.getModelInfo = function() {
  return /** @type{?proto.TextEvent.ModelInfo} */ (
    jspb.Message.getWrapperField(this, proto.TextEvent.ModelInfo, 4));
};


/**
 * @param {?proto.TextEvent.ModelInfo|undefined} value
 * @return {!proto.TextEvent} returns this
*/
proto.TextEvent.prototype.setModelInfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.TextEvent} returns this
 */
proto.TextEvent.prototype.clearModelInfo = function() {
  return this.setModelInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TextEvent.prototype.hasModelInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ControlEvent.oneofGroups_ = [[4,5,6,7,8]];

/**
 * @enum {number}
 */
proto.ControlEvent.PayloadStructuredCase = {
  PAYLOAD_STRUCTURED_NOT_SET: 0,
  CONVERSATION_UPDATE: 4,
  CONVERSATION_EVENT: 5,
  AUDIO_SESSION_START: 6,
  CURRENT_SCENE_STATUS: 7,
  SESSION_CONFIGURATION: 8
};

/**
 * @return {proto.ControlEvent.PayloadStructuredCase}
 */
proto.ControlEvent.prototype.getPayloadStructuredCase = function() {
  return /** @type {proto.ControlEvent.PayloadStructuredCase} */(jspb.Message.computeOneofCase(this, proto.ControlEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ControlEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ControlEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ControlEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ControlEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    conversationUpdate: (f = msg.getConversationUpdate()) && proto.ConversationUpdatePayload.toObject(includeInstance, f),
    conversationEvent: (f = msg.getConversationEvent()) && proto.ConversationEventPayload.toObject(includeInstance, f),
    audioSessionStart: (f = msg.getAudioSessionStart()) && proto.AudioSessionStartPayload.toObject(includeInstance, f),
    currentSceneStatus: (f = msg.getCurrentSceneStatus()) && proto.CurrentSceneStatus.toObject(includeInstance, f),
    sessionConfiguration: (f = msg.getSessionConfiguration()) && proto.SessionConfigurationPayload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ControlEvent}
 */
proto.ControlEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ControlEvent;
  return proto.ControlEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ControlEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ControlEvent}
 */
proto.ControlEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ControlEvent.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 4:
      var value = new proto.ConversationUpdatePayload;
      reader.readMessage(value,proto.ConversationUpdatePayload.deserializeBinaryFromReader);
      msg.setConversationUpdate(value);
      break;
    case 5:
      var value = new proto.ConversationEventPayload;
      reader.readMessage(value,proto.ConversationEventPayload.deserializeBinaryFromReader);
      msg.setConversationEvent(value);
      break;
    case 6:
      var value = new proto.AudioSessionStartPayload;
      reader.readMessage(value,proto.AudioSessionStartPayload.deserializeBinaryFromReader);
      msg.setAudioSessionStart(value);
      break;
    case 7:
      var value = new proto.CurrentSceneStatus;
      reader.readMessage(value,proto.CurrentSceneStatus.deserializeBinaryFromReader);
      msg.setCurrentSceneStatus(value);
      break;
    case 8:
      var value = new proto.SessionConfigurationPayload;
      reader.readMessage(value,proto.SessionConfigurationPayload.deserializeBinaryFromReader);
      msg.setSessionConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ControlEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ControlEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ControlEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ControlEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getConversationUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ConversationUpdatePayload.serializeBinaryToWriter
    );
  }
  f = message.getConversationEvent();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ConversationEventPayload.serializeBinaryToWriter
    );
  }
  f = message.getAudioSessionStart();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.AudioSessionStartPayload.serializeBinaryToWriter
    );
  }
  f = message.getCurrentSceneStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.CurrentSceneStatus.serializeBinaryToWriter
    );
  }
  f = message.getSessionConfiguration();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.SessionConfigurationPayload.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ControlEvent.Action = {
  UNKNOWN: 0,
  AUDIO_SESSION_START: 1,
  AUDIO_SESSION_END: 2,
  INTERACTION_END: 3,
  TTS_PLAYBACK_START: 4,
  TTS_PLAYBACK_END: 5,
  TTS_PLAYBACK_MUTE: 6,
  TTS_PLAYBACK_UNMUTE: 7,
  WARNING: 8,
  SESSION_END: 9,
  CONVERSATION_START: 10,
  CONVERSATION_UPDATE: 12,
  CONVERSATION_STARTED: 13,
  CONVERSATION_EVENT: 14,
  CURRENT_SCENE_STATUS: 15,
  SESSION_CONFIGURATION: 16
};

/**
 * optional Action action = 1;
 * @return {!proto.ControlEvent.Action}
 */
proto.ControlEvent.prototype.getAction = function() {
  return /** @type {!proto.ControlEvent.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ControlEvent.Action} value
 * @return {!proto.ControlEvent} returns this
 */
proto.ControlEvent.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.ControlEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ControlEvent} returns this
 */
proto.ControlEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct payload = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ControlEvent.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ControlEvent} returns this
*/
proto.ControlEvent.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ControlEvent} returns this
 */
proto.ControlEvent.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ControlEvent.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConversationUpdatePayload conversation_update = 4;
 * @return {?proto.ConversationUpdatePayload}
 */
proto.ControlEvent.prototype.getConversationUpdate = function() {
  return /** @type{?proto.ConversationUpdatePayload} */ (
    jspb.Message.getWrapperField(this, proto.ConversationUpdatePayload, 4));
};


/**
 * @param {?proto.ConversationUpdatePayload|undefined} value
 * @return {!proto.ControlEvent} returns this
*/
proto.ControlEvent.prototype.setConversationUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ControlEvent} returns this
 */
proto.ControlEvent.prototype.clearConversationUpdate = function() {
  return this.setConversationUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ControlEvent.prototype.hasConversationUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ConversationEventPayload conversation_event = 5;
 * @return {?proto.ConversationEventPayload}
 */
proto.ControlEvent.prototype.getConversationEvent = function() {
  return /** @type{?proto.ConversationEventPayload} */ (
    jspb.Message.getWrapperField(this, proto.ConversationEventPayload, 5));
};


/**
 * @param {?proto.ConversationEventPayload|undefined} value
 * @return {!proto.ControlEvent} returns this
*/
proto.ControlEvent.prototype.setConversationEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ControlEvent} returns this
 */
proto.ControlEvent.prototype.clearConversationEvent = function() {
  return this.setConversationEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ControlEvent.prototype.hasConversationEvent = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AudioSessionStartPayload audio_session_start = 6;
 * @return {?proto.AudioSessionStartPayload}
 */
proto.ControlEvent.prototype.getAudioSessionStart = function() {
  return /** @type{?proto.AudioSessionStartPayload} */ (
    jspb.Message.getWrapperField(this, proto.AudioSessionStartPayload, 6));
};


/**
 * @param {?proto.AudioSessionStartPayload|undefined} value
 * @return {!proto.ControlEvent} returns this
*/
proto.ControlEvent.prototype.setAudioSessionStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ControlEvent} returns this
 */
proto.ControlEvent.prototype.clearAudioSessionStart = function() {
  return this.setAudioSessionStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ControlEvent.prototype.hasAudioSessionStart = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CurrentSceneStatus current_scene_status = 7;
 * @return {?proto.CurrentSceneStatus}
 */
proto.ControlEvent.prototype.getCurrentSceneStatus = function() {
  return /** @type{?proto.CurrentSceneStatus} */ (
    jspb.Message.getWrapperField(this, proto.CurrentSceneStatus, 7));
};


/**
 * @param {?proto.CurrentSceneStatus|undefined} value
 * @return {!proto.ControlEvent} returns this
*/
proto.ControlEvent.prototype.setCurrentSceneStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ControlEvent} returns this
 */
proto.ControlEvent.prototype.clearCurrentSceneStatus = function() {
  return this.setCurrentSceneStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ControlEvent.prototype.hasCurrentSceneStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SessionConfigurationPayload session_configuration = 8;
 * @return {?proto.SessionConfigurationPayload}
 */
proto.ControlEvent.prototype.getSessionConfiguration = function() {
  return /** @type{?proto.SessionConfigurationPayload} */ (
    jspb.Message.getWrapperField(this, proto.SessionConfigurationPayload, 8));
};


/**
 * @param {?proto.SessionConfigurationPayload|undefined} value
 * @return {!proto.ControlEvent} returns this
*/
proto.ControlEvent.prototype.setSessionConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ControlEvent} returns this
 */
proto.ControlEvent.prototype.clearSessionConfiguration = function() {
  return this.setSessionConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ControlEvent.prototype.hasSessionConfiguration = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AudioSessionStartPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.AudioSessionStartPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AudioSessionStartPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AudioSessionStartPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AudioSessionStartPayload}
 */
proto.AudioSessionStartPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AudioSessionStartPayload;
  return proto.AudioSessionStartPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AudioSessionStartPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AudioSessionStartPayload}
 */
proto.AudioSessionStartPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.AudioSessionStartPayload.MicrophoneMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AudioSessionStartPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AudioSessionStartPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AudioSessionStartPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AudioSessionStartPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.AudioSessionStartPayload.MicrophoneMode = {
  UNSPECIFIED: 0,
  OPEN_MIC: 1,
  EXPECT_AUDIO_END: 2
};

/**
 * optional MicrophoneMode mode = 1;
 * @return {!proto.AudioSessionStartPayload.MicrophoneMode}
 */
proto.AudioSessionStartPayload.prototype.getMode = function() {
  return /** @type {!proto.AudioSessionStartPayload.MicrophoneMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.AudioSessionStartPayload.MicrophoneMode} value
 * @return {!proto.AudioSessionStartPayload} returns this
 */
proto.AudioSessionStartPayload.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AudioChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.AudioChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AudioChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AudioChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunk: msg.getChunk_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AudioChunk}
 */
proto.AudioChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AudioChunk;
  return proto.AudioChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AudioChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AudioChunk}
 */
proto.AudioChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AudioChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AudioChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AudioChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AudioChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChunk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.AudioChunk.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.AudioChunk.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.AudioChunk.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.AudioChunk} returns this
 */
proto.AudioChunk.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CustomEvent.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CustomEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.CustomEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CustomEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playback: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.CustomEvent.Parameter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CustomEvent}
 */
proto.CustomEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CustomEvent;
  return proto.CustomEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CustomEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CustomEvent}
 */
proto.CustomEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.Playback} */ (reader.readEnum());
      msg.setPlayback(value);
      break;
    case 3:
      var value = new proto.CustomEvent.Parameter;
      reader.readMessage(value,proto.CustomEvent.Parameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CustomEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CustomEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CustomEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayback();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.CustomEvent.Parameter.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CustomEvent.Parameter.prototype.toObject = function(opt_includeInstance) {
  return proto.CustomEvent.Parameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CustomEvent.Parameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomEvent.Parameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CustomEvent.Parameter}
 */
proto.CustomEvent.Parameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CustomEvent.Parameter;
  return proto.CustomEvent.Parameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CustomEvent.Parameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CustomEvent.Parameter}
 */
proto.CustomEvent.Parameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CustomEvent.Parameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CustomEvent.Parameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CustomEvent.Parameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomEvent.Parameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.CustomEvent.Parameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CustomEvent.Parameter} returns this
 */
proto.CustomEvent.Parameter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.CustomEvent.Parameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CustomEvent.Parameter} returns this
 */
proto.CustomEvent.Parameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.CustomEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CustomEvent} returns this
 */
proto.CustomEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Playback playback = 2;
 * @return {!proto.Playback}
 */
proto.CustomEvent.prototype.getPlayback = function() {
  return /** @type {!proto.Playback} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Playback} value
 * @return {!proto.CustomEvent} returns this
 */
proto.CustomEvent.prototype.setPlayback = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Parameter parameters = 3;
 * @return {!Array<!proto.CustomEvent.Parameter>}
 */
proto.CustomEvent.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.CustomEvent.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CustomEvent.Parameter, 3));
};


/**
 * @param {!Array<!proto.CustomEvent.Parameter>} value
 * @return {!proto.CustomEvent} returns this
*/
proto.CustomEvent.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.CustomEvent.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CustomEvent.Parameter}
 */
proto.CustomEvent.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.CustomEvent.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CustomEvent} returns this
 */
proto.CustomEvent.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CancelResponsesEvent.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CancelResponsesEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.CancelResponsesEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CancelResponsesEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelResponsesEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    interactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    utteranceIdList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CancelResponsesEvent}
 */
proto.CancelResponsesEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CancelResponsesEvent;
  return proto.CancelResponsesEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CancelResponsesEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CancelResponsesEvent}
 */
proto.CancelResponsesEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInteractionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUtteranceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CancelResponsesEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CancelResponsesEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CancelResponsesEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelResponsesEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInteractionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUtteranceIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string interaction_id = 1;
 * @return {string}
 */
proto.CancelResponsesEvent.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CancelResponsesEvent} returns this
 */
proto.CancelResponsesEvent.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string utterance_id = 2;
 * @return {!Array<string>}
 */
proto.CancelResponsesEvent.prototype.getUtteranceIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.CancelResponsesEvent} returns this
 */
proto.CancelResponsesEvent.prototype.setUtteranceIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.CancelResponsesEvent} returns this
 */
proto.CancelResponsesEvent.prototype.addUtteranceId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CancelResponsesEvent} returns this
 */
proto.CancelResponsesEvent.prototype.clearUtteranceIdList = function() {
  return this.setUtteranceIdList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EmotionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.EmotionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EmotionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EmotionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    joy: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    fear: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    trust: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    surprise: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    behavior: jspb.Message.getFieldWithDefault(msg, 5, 0),
    strength: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EmotionEvent}
 */
proto.EmotionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EmotionEvent;
  return proto.EmotionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EmotionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EmotionEvent}
 */
proto.EmotionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJoy(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFear(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTrust(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSurprise(value);
      break;
    case 5:
      var value = /** @type {!proto.EmotionEvent.SpaffCode} */ (reader.readEnum());
      msg.setBehavior(value);
      break;
    case 6:
      var value = /** @type {!proto.EmotionEvent.Strength} */ (reader.readEnum());
      msg.setStrength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EmotionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EmotionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EmotionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EmotionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJoy();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getFear();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTrust();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getSurprise();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStrength();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.EmotionEvent.SpaffCode = {
  NEUTRAL: 0,
  DISGUST: 1,
  CONTEMPT: 2,
  BELLIGERENCE: 3,
  DOMINEERING: 4,
  CRITICISM: 5,
  ANGER: 6,
  TENSION: 7,
  TENSE_HUMOR: 8,
  DEFENSIVENESS: 9,
  WHINING: 10,
  SADNESS: 11,
  STONEWALLING: 12,
  INTEREST: 13,
  VALIDATION: 14,
  AFFECTION: 15,
  HUMOR: 16,
  SURPRISE: 17,
  JOY: 18
};

/**
 * @enum {number}
 */
proto.EmotionEvent.Strength = {
  UNSPECIFIED: 0,
  WEAK: 1,
  STRONG: 2,
  NORMAL: 3
};

/**
 * optional float joy = 1;
 * @return {number}
 */
proto.EmotionEvent.prototype.getJoy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EmotionEvent} returns this
 */
proto.EmotionEvent.prototype.setJoy = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float fear = 2;
 * @return {number}
 */
proto.EmotionEvent.prototype.getFear = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EmotionEvent} returns this
 */
proto.EmotionEvent.prototype.setFear = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float trust = 3;
 * @return {number}
 */
proto.EmotionEvent.prototype.getTrust = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EmotionEvent} returns this
 */
proto.EmotionEvent.prototype.setTrust = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float surprise = 4;
 * @return {number}
 */
proto.EmotionEvent.prototype.getSurprise = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EmotionEvent} returns this
 */
proto.EmotionEvent.prototype.setSurprise = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional SpaffCode behavior = 5;
 * @return {!proto.EmotionEvent.SpaffCode}
 */
proto.EmotionEvent.prototype.getBehavior = function() {
  return /** @type {!proto.EmotionEvent.SpaffCode} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.EmotionEvent.SpaffCode} value
 * @return {!proto.EmotionEvent} returns this
 */
proto.EmotionEvent.prototype.setBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Strength strength = 6;
 * @return {!proto.EmotionEvent.Strength}
 */
proto.EmotionEvent.prototype.getStrength = function() {
  return /** @type {!proto.EmotionEvent.Strength} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.EmotionEvent.Strength} value
 * @return {!proto.EmotionEvent} returns this
 */
proto.EmotionEvent.prototype.setStrength = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DataChunk.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DataChunk.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.DataChunk.DataCase = {
  DATA_NOT_SET: 0,
  CHUNK: 1,
  DURATION_MS: 3
};

/**
 * @return {proto.DataChunk.DataCase}
 */
proto.DataChunk.prototype.getDataCase = function() {
  return /** @type {proto.DataChunk.DataCase} */(jspb.Message.computeOneofCase(this, proto.DataChunk.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DataChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.DataChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DataChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DataChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunk: msg.getChunk_asB64(),
    durationMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    additionalPhonemeInfoList: jspb.Message.toObjectList(msg.getAdditionalPhonemeInfoList(),
    proto.AdditionalPhonemeInfo.toObject, includeInstance),
    audioformat: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DataChunk}
 */
proto.DataChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DataChunk;
  return proto.DataChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DataChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DataChunk}
 */
proto.DataChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunk(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDurationMs(value);
      break;
    case 2:
      var value = /** @type {!proto.DataChunk.DataType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.AdditionalPhonemeInfo;
      reader.readMessage(value,proto.AdditionalPhonemeInfo.deserializeBinaryFromReader);
      msg.addAdditionalPhonemeInfo(value);
      break;
    case 5:
      var value = /** @type {!proto.DataChunk.AudioFormat} */ (reader.readEnum());
      msg.setAudioformat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DataChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DataChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DataChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DataChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAdditionalPhonemeInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.AdditionalPhonemeInfo.serializeBinaryToWriter
    );
  }
  f = message.getAudioformat();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.DataChunk.DataType = {
  UNSPECIFIED: 0,
  AUDIO: 1,
  SILENCE: 3,
  STATE: 4,
  NVIDIA_A2F_ANIMATION: 5,
  NVIDIA_A2F_ANIMATION_HEADER: 6,
  INSPECT: 7
};

/**
 * @enum {number}
 */
proto.DataChunk.AudioFormat = {
  UNSPECIFIED_AUDIO_FORMAT: 0,
  AUDIO_MP3: 1,
  AUDIO_PCM_16000: 2,
  AUDIO_PCM_22050: 3
};

/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.DataChunk.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.DataChunk.prototype.getChunk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunk()));
};


/**
 * optional bytes chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunk()`
 * @return {!Uint8Array}
 */
proto.DataChunk.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.DataChunk} returns this
 */
proto.DataChunk.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.DataChunk.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DataChunk} returns this
 */
proto.DataChunk.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 1, proto.DataChunk.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DataChunk.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 duration_ms = 3;
 * @return {number}
 */
proto.DataChunk.prototype.getDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.DataChunk} returns this
 */
proto.DataChunk.prototype.setDurationMs = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.DataChunk.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DataChunk} returns this
 */
proto.DataChunk.prototype.clearDurationMs = function() {
  return jspb.Message.setOneofField(this, 3, proto.DataChunk.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DataChunk.prototype.hasDurationMs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataType type = 2;
 * @return {!proto.DataChunk.DataType}
 */
proto.DataChunk.prototype.getType = function() {
  return /** @type {!proto.DataChunk.DataType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.DataChunk.DataType} value
 * @return {!proto.DataChunk} returns this
 */
proto.DataChunk.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated AdditionalPhonemeInfo additional_phoneme_info = 4;
 * @return {!Array<!proto.AdditionalPhonemeInfo>}
 */
proto.DataChunk.prototype.getAdditionalPhonemeInfoList = function() {
  return /** @type{!Array<!proto.AdditionalPhonemeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AdditionalPhonemeInfo, 4));
};


/**
 * @param {!Array<!proto.AdditionalPhonemeInfo>} value
 * @return {!proto.DataChunk} returns this
*/
proto.DataChunk.prototype.setAdditionalPhonemeInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.AdditionalPhonemeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AdditionalPhonemeInfo}
 */
proto.DataChunk.prototype.addAdditionalPhonemeInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.AdditionalPhonemeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.DataChunk} returns this
 */
proto.DataChunk.prototype.clearAdditionalPhonemeInfoList = function() {
  return this.setAdditionalPhonemeInfoList([]);
};


/**
 * optional AudioFormat audioFormat = 5;
 * @return {!proto.DataChunk.AudioFormat}
 */
proto.DataChunk.prototype.getAudioformat = function() {
  return /** @type {!proto.DataChunk.AudioFormat} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.DataChunk.AudioFormat} value
 * @return {!proto.DataChunk} returns this
 */
proto.DataChunk.prototype.setAudioformat = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdditionalPhonemeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.AdditionalPhonemeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdditionalPhonemeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdditionalPhonemeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    phoneme: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startOffset: (f = msg.getStartOffset()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdditionalPhonemeInfo}
 */
proto.AdditionalPhonemeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdditionalPhonemeInfo;
  return proto.AdditionalPhonemeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdditionalPhonemeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdditionalPhonemeInfo}
 */
proto.AdditionalPhonemeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneme(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdditionalPhonemeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdditionalPhonemeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdditionalPhonemeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdditionalPhonemeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhoneme();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string phoneme = 1;
 * @return {string}
 */
proto.AdditionalPhonemeInfo.prototype.getPhoneme = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdditionalPhonemeInfo} returns this
 */
proto.AdditionalPhonemeInfo.prototype.setPhoneme = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration start_offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.AdditionalPhonemeInfo.prototype.getStartOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.AdditionalPhonemeInfo} returns this
*/
proto.AdditionalPhonemeInfo.prototype.setStartOffset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AdditionalPhonemeInfo} returns this
 */
proto.AdditionalPhonemeInfo.prototype.clearStartOffset = function() {
  return this.setStartOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdditionalPhonemeInfo.prototype.hasStartOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ActionEvent.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.ActionEvent.ActionCase = {
  ACTION_NOT_SET: 0,
  NARRATED_ACTION: 1
};

/**
 * @return {proto.ActionEvent.ActionCase}
 */
proto.ActionEvent.prototype.getActionCase = function() {
  return /** @type {proto.ActionEvent.ActionCase} */(jspb.Message.computeOneofCase(this, proto.ActionEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    narratedAction: (f = msg.getNarratedAction()) && proto.NarratedAction.toObject(includeInstance, f),
    playback: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionEvent}
 */
proto.ActionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionEvent;
  return proto.ActionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionEvent}
 */
proto.ActionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.NarratedAction;
      reader.readMessage(value,proto.NarratedAction.deserializeBinaryFromReader);
      msg.setNarratedAction(value);
      break;
    case 2:
      var value = /** @type {!proto.Playback} */ (reader.readEnum());
      msg.setPlayback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNarratedAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.NarratedAction.serializeBinaryToWriter
    );
  }
  f = message.getPlayback();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional NarratedAction narrated_action = 1;
 * @return {?proto.NarratedAction}
 */
proto.ActionEvent.prototype.getNarratedAction = function() {
  return /** @type{?proto.NarratedAction} */ (
    jspb.Message.getWrapperField(this, proto.NarratedAction, 1));
};


/**
 * @param {?proto.NarratedAction|undefined} value
 * @return {!proto.ActionEvent} returns this
*/
proto.ActionEvent.prototype.setNarratedAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ActionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ActionEvent} returns this
 */
proto.ActionEvent.prototype.clearNarratedAction = function() {
  return this.setNarratedAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ActionEvent.prototype.hasNarratedAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Playback playback = 2;
 * @return {!proto.Playback}
 */
proto.ActionEvent.prototype.getPlayback = function() {
  return /** @type {!proto.Playback} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Playback} value
 * @return {!proto.ActionEvent} returns this
 */
proto.ActionEvent.prototype.setPlayback = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NarratedAction.prototype.toObject = function(opt_includeInstance) {
  return proto.NarratedAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NarratedAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NarratedAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NarratedAction}
 */
proto.NarratedAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NarratedAction;
  return proto.NarratedAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NarratedAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NarratedAction}
 */
proto.NarratedAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NarratedAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NarratedAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NarratedAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NarratedAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.NarratedAction.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NarratedAction} returns this
 */
proto.NarratedAction.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RelationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.RelationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RelationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RelationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    relationState: (f = msg.getRelationState()) && proto.RelationInfo.RelationAttributes.toObject(includeInstance, f),
    relationUpdate: (f = msg.getRelationUpdate()) && proto.RelationInfo.RelationAttributes.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RelationInfo}
 */
proto.RelationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RelationInfo;
  return proto.RelationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RelationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RelationInfo}
 */
proto.RelationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RelationInfo.RelationAttributes;
      reader.readMessage(value,proto.RelationInfo.RelationAttributes.deserializeBinaryFromReader);
      msg.setRelationState(value);
      break;
    case 2:
      var value = new proto.RelationInfo.RelationAttributes;
      reader.readMessage(value,proto.RelationInfo.RelationAttributes.deserializeBinaryFromReader);
      msg.setRelationUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RelationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RelationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RelationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RelationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelationState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RelationInfo.RelationAttributes.serializeBinaryToWriter
    );
  }
  f = message.getRelationUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RelationInfo.RelationAttributes.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RelationInfo.RelationAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.RelationInfo.RelationAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RelationInfo.RelationAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RelationInfo.RelationAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    trust: jspb.Message.getFieldWithDefault(msg, 1, 0),
    respect: jspb.Message.getFieldWithDefault(msg, 2, 0),
    familiar: jspb.Message.getFieldWithDefault(msg, 3, 0),
    flirtatious: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attraction: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RelationInfo.RelationAttributes}
 */
proto.RelationInfo.RelationAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RelationInfo.RelationAttributes;
  return proto.RelationInfo.RelationAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RelationInfo.RelationAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RelationInfo.RelationAttributes}
 */
proto.RelationInfo.RelationAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrust(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRespect(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFamiliar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFlirtatious(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttraction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RelationInfo.RelationAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RelationInfo.RelationAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RelationInfo.RelationAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RelationInfo.RelationAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrust();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRespect();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFamiliar();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFlirtatious();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAttraction();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 trust = 1;
 * @return {number}
 */
proto.RelationInfo.RelationAttributes.prototype.getTrust = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RelationInfo.RelationAttributes} returns this
 */
proto.RelationInfo.RelationAttributes.prototype.setTrust = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 respect = 2;
 * @return {number}
 */
proto.RelationInfo.RelationAttributes.prototype.getRespect = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RelationInfo.RelationAttributes} returns this
 */
proto.RelationInfo.RelationAttributes.prototype.setRespect = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 familiar = 3;
 * @return {number}
 */
proto.RelationInfo.RelationAttributes.prototype.getFamiliar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.RelationInfo.RelationAttributes} returns this
 */
proto.RelationInfo.RelationAttributes.prototype.setFamiliar = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 flirtatious = 4;
 * @return {number}
 */
proto.RelationInfo.RelationAttributes.prototype.getFlirtatious = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RelationInfo.RelationAttributes} returns this
 */
proto.RelationInfo.RelationAttributes.prototype.setFlirtatious = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 attraction = 5;
 * @return {number}
 */
proto.RelationInfo.RelationAttributes.prototype.getAttraction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.RelationInfo.RelationAttributes} returns this
 */
proto.RelationInfo.RelationAttributes.prototype.setAttraction = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional RelationAttributes relation_state = 1;
 * @return {?proto.RelationInfo.RelationAttributes}
 */
proto.RelationInfo.prototype.getRelationState = function() {
  return /** @type{?proto.RelationInfo.RelationAttributes} */ (
    jspb.Message.getWrapperField(this, proto.RelationInfo.RelationAttributes, 1));
};


/**
 * @param {?proto.RelationInfo.RelationAttributes|undefined} value
 * @return {!proto.RelationInfo} returns this
*/
proto.RelationInfo.prototype.setRelationState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RelationInfo} returns this
 */
proto.RelationInfo.prototype.clearRelationState = function() {
  return this.setRelationState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RelationInfo.prototype.hasRelationState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RelationAttributes relation_update = 2;
 * @return {?proto.RelationInfo.RelationAttributes}
 */
proto.RelationInfo.prototype.getRelationUpdate = function() {
  return /** @type{?proto.RelationInfo.RelationAttributes} */ (
    jspb.Message.getWrapperField(this, proto.RelationInfo.RelationAttributes, 2));
};


/**
 * @param {?proto.RelationInfo.RelationAttributes|undefined} value
 * @return {!proto.RelationInfo} returns this
*/
proto.RelationInfo.prototype.setRelationUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RelationInfo} returns this
 */
proto.RelationInfo.prototype.clearRelationUpdate = function() {
  return this.setRelationUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RelationInfo.prototype.hasRelationUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.MutationEvent.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.MutationEvent.MutationCase = {
  MUTATION_NOT_SET: 0,
  CANCEL_RESPONSES: 1,
  REGENERATE_RESPONSE: 2,
  APPLY_RESPONSE: 3,
  LOAD_SCENE: 4,
  MODIFY_EXACT_RESPONSE: 5,
  LOAD_CHARACTERS: 6,
  UNLOAD_CHARACTERS: 7
};

/**
 * @return {proto.MutationEvent.MutationCase}
 */
proto.MutationEvent.prototype.getMutationCase = function() {
  return /** @type {proto.MutationEvent.MutationCase} */(jspb.Message.computeOneofCase(this, proto.MutationEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MutationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.MutationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MutationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MutationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    cancelResponses: (f = msg.getCancelResponses()) && proto.CancelResponses.toObject(includeInstance, f),
    regenerateResponse: (f = msg.getRegenerateResponse()) && proto.RegenerateResponse.toObject(includeInstance, f),
    applyResponse: (f = msg.getApplyResponse()) && proto.ApplyResponse.toObject(includeInstance, f),
    loadScene: (f = msg.getLoadScene()) && proto.LoadScene.toObject(includeInstance, f),
    modifyExactResponse: (f = msg.getModifyExactResponse()) && proto.ModifyExactResponse.toObject(includeInstance, f),
    loadCharacters: (f = msg.getLoadCharacters()) && proto.LoadCharacters.toObject(includeInstance, f),
    unloadCharacters: (f = msg.getUnloadCharacters()) && proto.UnloadCharacters.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MutationEvent}
 */
proto.MutationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MutationEvent;
  return proto.MutationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MutationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MutationEvent}
 */
proto.MutationEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.CancelResponses;
      reader.readMessage(value,proto.CancelResponses.deserializeBinaryFromReader);
      msg.setCancelResponses(value);
      break;
    case 2:
      var value = new proto.RegenerateResponse;
      reader.readMessage(value,proto.RegenerateResponse.deserializeBinaryFromReader);
      msg.setRegenerateResponse(value);
      break;
    case 3:
      var value = new proto.ApplyResponse;
      reader.readMessage(value,proto.ApplyResponse.deserializeBinaryFromReader);
      msg.setApplyResponse(value);
      break;
    case 4:
      var value = new proto.LoadScene;
      reader.readMessage(value,proto.LoadScene.deserializeBinaryFromReader);
      msg.setLoadScene(value);
      break;
    case 5:
      var value = new proto.ModifyExactResponse;
      reader.readMessage(value,proto.ModifyExactResponse.deserializeBinaryFromReader);
      msg.setModifyExactResponse(value);
      break;
    case 6:
      var value = new proto.LoadCharacters;
      reader.readMessage(value,proto.LoadCharacters.deserializeBinaryFromReader);
      msg.setLoadCharacters(value);
      break;
    case 7:
      var value = new proto.UnloadCharacters;
      reader.readMessage(value,proto.UnloadCharacters.deserializeBinaryFromReader);
      msg.setUnloadCharacters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MutationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MutationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MutationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MutationEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCancelResponses();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.CancelResponses.serializeBinaryToWriter
    );
  }
  f = message.getRegenerateResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RegenerateResponse.serializeBinaryToWriter
    );
  }
  f = message.getApplyResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ApplyResponse.serializeBinaryToWriter
    );
  }
  f = message.getLoadScene();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.LoadScene.serializeBinaryToWriter
    );
  }
  f = message.getModifyExactResponse();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ModifyExactResponse.serializeBinaryToWriter
    );
  }
  f = message.getLoadCharacters();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.LoadCharacters.serializeBinaryToWriter
    );
  }
  f = message.getUnloadCharacters();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.UnloadCharacters.serializeBinaryToWriter
    );
  }
};


/**
 * optional CancelResponses cancel_responses = 1;
 * @return {?proto.CancelResponses}
 */
proto.MutationEvent.prototype.getCancelResponses = function() {
  return /** @type{?proto.CancelResponses} */ (
    jspb.Message.getWrapperField(this, proto.CancelResponses, 1));
};


/**
 * @param {?proto.CancelResponses|undefined} value
 * @return {!proto.MutationEvent} returns this
*/
proto.MutationEvent.prototype.setCancelResponses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MutationEvent} returns this
 */
proto.MutationEvent.prototype.clearCancelResponses = function() {
  return this.setCancelResponses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MutationEvent.prototype.hasCancelResponses = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RegenerateResponse regenerate_response = 2;
 * @return {?proto.RegenerateResponse}
 */
proto.MutationEvent.prototype.getRegenerateResponse = function() {
  return /** @type{?proto.RegenerateResponse} */ (
    jspb.Message.getWrapperField(this, proto.RegenerateResponse, 2));
};


/**
 * @param {?proto.RegenerateResponse|undefined} value
 * @return {!proto.MutationEvent} returns this
*/
proto.MutationEvent.prototype.setRegenerateResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MutationEvent} returns this
 */
proto.MutationEvent.prototype.clearRegenerateResponse = function() {
  return this.setRegenerateResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MutationEvent.prototype.hasRegenerateResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ApplyResponse apply_response = 3;
 * @return {?proto.ApplyResponse}
 */
proto.MutationEvent.prototype.getApplyResponse = function() {
  return /** @type{?proto.ApplyResponse} */ (
    jspb.Message.getWrapperField(this, proto.ApplyResponse, 3));
};


/**
 * @param {?proto.ApplyResponse|undefined} value
 * @return {!proto.MutationEvent} returns this
*/
proto.MutationEvent.prototype.setApplyResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MutationEvent} returns this
 */
proto.MutationEvent.prototype.clearApplyResponse = function() {
  return this.setApplyResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MutationEvent.prototype.hasApplyResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LoadScene load_scene = 4;
 * @return {?proto.LoadScene}
 */
proto.MutationEvent.prototype.getLoadScene = function() {
  return /** @type{?proto.LoadScene} */ (
    jspb.Message.getWrapperField(this, proto.LoadScene, 4));
};


/**
 * @param {?proto.LoadScene|undefined} value
 * @return {!proto.MutationEvent} returns this
*/
proto.MutationEvent.prototype.setLoadScene = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MutationEvent} returns this
 */
proto.MutationEvent.prototype.clearLoadScene = function() {
  return this.setLoadScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MutationEvent.prototype.hasLoadScene = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ModifyExactResponse modify_exact_response = 5;
 * @return {?proto.ModifyExactResponse}
 */
proto.MutationEvent.prototype.getModifyExactResponse = function() {
  return /** @type{?proto.ModifyExactResponse} */ (
    jspb.Message.getWrapperField(this, proto.ModifyExactResponse, 5));
};


/**
 * @param {?proto.ModifyExactResponse|undefined} value
 * @return {!proto.MutationEvent} returns this
*/
proto.MutationEvent.prototype.setModifyExactResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MutationEvent} returns this
 */
proto.MutationEvent.prototype.clearModifyExactResponse = function() {
  return this.setModifyExactResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MutationEvent.prototype.hasModifyExactResponse = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LoadCharacters load_characters = 6;
 * @return {?proto.LoadCharacters}
 */
proto.MutationEvent.prototype.getLoadCharacters = function() {
  return /** @type{?proto.LoadCharacters} */ (
    jspb.Message.getWrapperField(this, proto.LoadCharacters, 6));
};


/**
 * @param {?proto.LoadCharacters|undefined} value
 * @return {!proto.MutationEvent} returns this
*/
proto.MutationEvent.prototype.setLoadCharacters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MutationEvent} returns this
 */
proto.MutationEvent.prototype.clearLoadCharacters = function() {
  return this.setLoadCharacters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MutationEvent.prototype.hasLoadCharacters = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional UnloadCharacters unload_characters = 7;
 * @return {?proto.UnloadCharacters}
 */
proto.MutationEvent.prototype.getUnloadCharacters = function() {
  return /** @type{?proto.UnloadCharacters} */ (
    jspb.Message.getWrapperField(this, proto.UnloadCharacters, 7));
};


/**
 * @param {?proto.UnloadCharacters|undefined} value
 * @return {!proto.MutationEvent} returns this
*/
proto.MutationEvent.prototype.setUnloadCharacters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MutationEvent} returns this
 */
proto.MutationEvent.prototype.clearUnloadCharacters = function() {
  return this.setUnloadCharacters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MutationEvent.prototype.hasUnloadCharacters = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SessionControlResponseEvent.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.SessionControlResponseEvent.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  LOADED_SCENE: 1,
  LOADED_CHARACTERS: 2,
  SESSION_HISTORY: 3
};

/**
 * @return {proto.SessionControlResponseEvent.ResponseCase}
 */
proto.SessionControlResponseEvent.prototype.getResponseCase = function() {
  return /** @type {proto.SessionControlResponseEvent.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.SessionControlResponseEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SessionControlResponseEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.SessionControlResponseEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SessionControlResponseEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionControlResponseEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadedScene: (f = msg.getLoadedScene()) && proto.LoadedScene.toObject(includeInstance, f),
    loadedCharacters: (f = msg.getLoadedCharacters()) && proto.LoadedCharacters.toObject(includeInstance, f),
    sessionHistory: (f = msg.getSessionHistory()) && proto.SessionHistoryResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SessionControlResponseEvent}
 */
proto.SessionControlResponseEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SessionControlResponseEvent;
  return proto.SessionControlResponseEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SessionControlResponseEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SessionControlResponseEvent}
 */
proto.SessionControlResponseEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.LoadedScene;
      reader.readMessage(value,proto.LoadedScene.deserializeBinaryFromReader);
      msg.setLoadedScene(value);
      break;
    case 2:
      var value = new proto.LoadedCharacters;
      reader.readMessage(value,proto.LoadedCharacters.deserializeBinaryFromReader);
      msg.setLoadedCharacters(value);
      break;
    case 3:
      var value = new proto.SessionHistoryResponse;
      reader.readMessage(value,proto.SessionHistoryResponse.deserializeBinaryFromReader);
      msg.setSessionHistory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SessionControlResponseEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SessionControlResponseEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SessionControlResponseEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionControlResponseEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadedScene();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.LoadedScene.serializeBinaryToWriter
    );
  }
  f = message.getLoadedCharacters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.LoadedCharacters.serializeBinaryToWriter
    );
  }
  f = message.getSessionHistory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SessionHistoryResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional LoadedScene loaded_scene = 1;
 * @return {?proto.LoadedScene}
 */
proto.SessionControlResponseEvent.prototype.getLoadedScene = function() {
  return /** @type{?proto.LoadedScene} */ (
    jspb.Message.getWrapperField(this, proto.LoadedScene, 1));
};


/**
 * @param {?proto.LoadedScene|undefined} value
 * @return {!proto.SessionControlResponseEvent} returns this
*/
proto.SessionControlResponseEvent.prototype.setLoadedScene = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.SessionControlResponseEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlResponseEvent} returns this
 */
proto.SessionControlResponseEvent.prototype.clearLoadedScene = function() {
  return this.setLoadedScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlResponseEvent.prototype.hasLoadedScene = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LoadedCharacters loaded_characters = 2;
 * @return {?proto.LoadedCharacters}
 */
proto.SessionControlResponseEvent.prototype.getLoadedCharacters = function() {
  return /** @type{?proto.LoadedCharacters} */ (
    jspb.Message.getWrapperField(this, proto.LoadedCharacters, 2));
};


/**
 * @param {?proto.LoadedCharacters|undefined} value
 * @return {!proto.SessionControlResponseEvent} returns this
*/
proto.SessionControlResponseEvent.prototype.setLoadedCharacters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.SessionControlResponseEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlResponseEvent} returns this
 */
proto.SessionControlResponseEvent.prototype.clearLoadedCharacters = function() {
  return this.setLoadedCharacters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlResponseEvent.prototype.hasLoadedCharacters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SessionHistoryResponse session_history = 3;
 * @return {?proto.SessionHistoryResponse}
 */
proto.SessionControlResponseEvent.prototype.getSessionHistory = function() {
  return /** @type{?proto.SessionHistoryResponse} */ (
    jspb.Message.getWrapperField(this, proto.SessionHistoryResponse, 3));
};


/**
 * @param {?proto.SessionHistoryResponse|undefined} value
 * @return {!proto.SessionControlResponseEvent} returns this
*/
proto.SessionControlResponseEvent.prototype.setSessionHistory = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.SessionControlResponseEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlResponseEvent} returns this
 */
proto.SessionControlResponseEvent.prototype.clearSessionHistory = function() {
  return this.setSessionHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlResponseEvent.prototype.hasSessionHistory = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CancelResponses.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CancelResponses.prototype.toObject = function(opt_includeInstance) {
  return proto.CancelResponses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CancelResponses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelResponses.toObject = function(includeInstance, msg) {
  var f, obj = {
    interactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    utteranceIdList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CancelResponses}
 */
proto.CancelResponses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CancelResponses;
  return proto.CancelResponses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CancelResponses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CancelResponses}
 */
proto.CancelResponses.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInteractionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUtteranceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CancelResponses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CancelResponses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CancelResponses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelResponses.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInteractionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUtteranceIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string interaction_id = 1;
 * @return {string}
 */
proto.CancelResponses.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CancelResponses} returns this
 */
proto.CancelResponses.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string utterance_id = 2;
 * @return {!Array<string>}
 */
proto.CancelResponses.prototype.getUtteranceIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.CancelResponses} returns this
 */
proto.CancelResponses.prototype.setUtteranceIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.CancelResponses} returns this
 */
proto.CancelResponses.prototype.addUtteranceId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CancelResponses} returns this
 */
proto.CancelResponses.prototype.clearUtteranceIdList = function() {
  return this.setUtteranceIdList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RegenerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RegenerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RegenerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RegenerateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    interactionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RegenerateResponse}
 */
proto.RegenerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RegenerateResponse;
  return proto.RegenerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RegenerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RegenerateResponse}
 */
proto.RegenerateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInteractionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RegenerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RegenerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RegenerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RegenerateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInteractionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string interaction_id = 1;
 * @return {string}
 */
proto.RegenerateResponse.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RegenerateResponse} returns this
 */
proto.RegenerateResponse.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ApplyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ApplyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ApplyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ApplyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetId: (f = msg.getPacketId()) && proto.PacketId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ApplyResponse}
 */
proto.ApplyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ApplyResponse;
  return proto.ApplyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ApplyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ApplyResponse}
 */
proto.ApplyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PacketId;
      reader.readMessage(value,proto.PacketId.deserializeBinaryFromReader);
      msg.setPacketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ApplyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ApplyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ApplyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ApplyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacketId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PacketId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PacketId packet_id = 1;
 * @return {?proto.PacketId}
 */
proto.ApplyResponse.prototype.getPacketId = function() {
  return /** @type{?proto.PacketId} */ (
    jspb.Message.getWrapperField(this, proto.PacketId, 1));
};


/**
 * @param {?proto.PacketId|undefined} value
 * @return {!proto.ApplyResponse} returns this
*/
proto.ApplyResponse.prototype.setPacketId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ApplyResponse} returns this
 */
proto.ApplyResponse.prototype.clearPacketId = function() {
  return this.setPacketId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ApplyResponse.prototype.hasPacketId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoadScene.prototype.toObject = function(opt_includeInstance) {
  return proto.LoadScene.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoadScene} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadScene.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoadScene}
 */
proto.LoadScene.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoadScene;
  return proto.LoadScene.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoadScene} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoadScene}
 */
proto.LoadScene.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoadScene.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoadScene.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoadScene} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadScene.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.LoadScene.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadScene} returns this
 */
proto.LoadScene.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LoadedScene.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoadedScene.prototype.toObject = function(opt_includeInstance) {
  return proto.LoadedScene.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoadedScene} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadedScene.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.Agent.toObject, includeInstance),
    sceneName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sceneDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sceneDisplayName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoadedScene}
 */
proto.LoadedScene.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoadedScene;
  return proto.LoadedScene.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoadedScene} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoadedScene}
 */
proto.LoadedScene.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Agent;
      reader.readMessage(value,proto.Agent.deserializeBinaryFromReader);
      msg.addAgents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneDisplayName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoadedScene.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoadedScene.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoadedScene} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadedScene.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Agent.serializeBinaryToWriter
    );
  }
  f = message.getSceneName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSceneDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSceneDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated Agent agents = 1;
 * @return {!Array<!proto.Agent>}
 */
proto.LoadedScene.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Agent, 1));
};


/**
 * @param {!Array<!proto.Agent>} value
 * @return {!proto.LoadedScene} returns this
*/
proto.LoadedScene.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Agent}
 */
proto.LoadedScene.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.LoadedScene} returns this
 */
proto.LoadedScene.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};


/**
 * optional string scene_name = 2;
 * @return {string}
 */
proto.LoadedScene.prototype.getSceneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadedScene} returns this
 */
proto.LoadedScene.prototype.setSceneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scene_description = 3;
 * @return {string}
 */
proto.LoadedScene.prototype.getSceneDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadedScene} returns this
 */
proto.LoadedScene.prototype.setSceneDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scene_display_name = 4;
 * @return {string}
 */
proto.LoadedScene.prototype.getSceneDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadedScene} returns this
 */
proto.LoadedScene.prototype.setSceneDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LoadCharacters.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoadCharacters.prototype.toObject = function(opt_includeInstance) {
  return proto.LoadCharacters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoadCharacters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadCharacters.toObject = function(includeInstance, msg) {
  var f, obj = {
    nameList: jspb.Message.toObjectList(msg.getNameList(),
    proto.LoadCharacters.CharacterName.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoadCharacters}
 */
proto.LoadCharacters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoadCharacters;
  return proto.LoadCharacters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoadCharacters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoadCharacters}
 */
proto.LoadCharacters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.LoadCharacters.CharacterName;
      reader.readMessage(value,proto.LoadCharacters.CharacterName.deserializeBinaryFromReader);
      msg.addName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoadCharacters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoadCharacters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoadCharacters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadCharacters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNameList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.LoadCharacters.CharacterName.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoadCharacters.CharacterName.prototype.toObject = function(opt_includeInstance) {
  return proto.LoadCharacters.CharacterName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoadCharacters.CharacterName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadCharacters.CharacterName.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoadCharacters.CharacterName}
 */
proto.LoadCharacters.CharacterName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoadCharacters.CharacterName;
  return proto.LoadCharacters.CharacterName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoadCharacters.CharacterName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoadCharacters.CharacterName}
 */
proto.LoadCharacters.CharacterName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.ai.inworld.language_codes.LanguageCode} */ (reader.readEnum());
      msg.setLanguageCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoadCharacters.CharacterName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoadCharacters.CharacterName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoadCharacters.CharacterName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadCharacters.CharacterName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.LoadCharacters.CharacterName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadCharacters.CharacterName} returns this
 */
proto.LoadCharacters.CharacterName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ai.inworld.language_codes.LanguageCode language_code = 2;
 * @return {!proto.ai.inworld.language_codes.LanguageCode}
 */
proto.LoadCharacters.CharacterName.prototype.getLanguageCode = function() {
  return /** @type {!proto.ai.inworld.language_codes.LanguageCode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.language_codes.LanguageCode} value
 * @return {!proto.LoadCharacters.CharacterName} returns this
 */
proto.LoadCharacters.CharacterName.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated CharacterName name = 1;
 * @return {!Array<!proto.LoadCharacters.CharacterName>}
 */
proto.LoadCharacters.prototype.getNameList = function() {
  return /** @type{!Array<!proto.LoadCharacters.CharacterName>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.LoadCharacters.CharacterName, 1));
};


/**
 * @param {!Array<!proto.LoadCharacters.CharacterName>} value
 * @return {!proto.LoadCharacters} returns this
*/
proto.LoadCharacters.prototype.setNameList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.LoadCharacters.CharacterName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.LoadCharacters.CharacterName}
 */
proto.LoadCharacters.prototype.addName = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.LoadCharacters.CharacterName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.LoadCharacters} returns this
 */
proto.LoadCharacters.prototype.clearNameList = function() {
  return this.setNameList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LoadedCharacters.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoadedCharacters.prototype.toObject = function(opt_includeInstance) {
  return proto.LoadedCharacters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoadedCharacters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadedCharacters.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.Agent.toObject, includeInstance),
    sceneName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sceneDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sceneDisplayName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoadedCharacters}
 */
proto.LoadedCharacters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoadedCharacters;
  return proto.LoadedCharacters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoadedCharacters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoadedCharacters}
 */
proto.LoadedCharacters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Agent;
      reader.readMessage(value,proto.Agent.deserializeBinaryFromReader);
      msg.addAgents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneDisplayName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoadedCharacters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoadedCharacters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoadedCharacters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadedCharacters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Agent.serializeBinaryToWriter
    );
  }
  f = message.getSceneName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSceneDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSceneDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated Agent agents = 1;
 * @return {!Array<!proto.Agent>}
 */
proto.LoadedCharacters.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Agent, 1));
};


/**
 * @param {!Array<!proto.Agent>} value
 * @return {!proto.LoadedCharacters} returns this
*/
proto.LoadedCharacters.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Agent}
 */
proto.LoadedCharacters.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.LoadedCharacters} returns this
 */
proto.LoadedCharacters.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};


/**
 * optional string scene_name = 2;
 * @return {string}
 */
proto.LoadedCharacters.prototype.getSceneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadedCharacters} returns this
 */
proto.LoadedCharacters.prototype.setSceneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scene_description = 3;
 * @return {string}
 */
proto.LoadedCharacters.prototype.getSceneDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadedCharacters} returns this
 */
proto.LoadedCharacters.prototype.setSceneDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scene_display_name = 4;
 * @return {string}
 */
proto.LoadedCharacters.prototype.getSceneDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadedCharacters} returns this
 */
proto.LoadedCharacters.prototype.setSceneDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.UnloadCharacters.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UnloadCharacters.prototype.toObject = function(opt_includeInstance) {
  return proto.UnloadCharacters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UnloadCharacters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnloadCharacters.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.Agent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UnloadCharacters}
 */
proto.UnloadCharacters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UnloadCharacters;
  return proto.UnloadCharacters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UnloadCharacters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UnloadCharacters}
 */
proto.UnloadCharacters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Agent;
      reader.readMessage(value,proto.Agent.deserializeBinaryFromReader);
      msg.addAgents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UnloadCharacters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UnloadCharacters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UnloadCharacters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnloadCharacters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Agent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Agent agents = 1;
 * @return {!Array<!proto.Agent>}
 */
proto.UnloadCharacters.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Agent, 1));
};


/**
 * @param {!Array<!proto.Agent>} value
 * @return {!proto.UnloadCharacters} returns this
*/
proto.UnloadCharacters.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Agent}
 */
proto.UnloadCharacters.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.UnloadCharacters} returns this
 */
proto.UnloadCharacters.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CurrentSceneStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CurrentSceneStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.CurrentSceneStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CurrentSceneStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CurrentSceneStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.Agent.toObject, includeInstance),
    sceneName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sceneDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sceneDisplayName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CurrentSceneStatus}
 */
proto.CurrentSceneStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CurrentSceneStatus;
  return proto.CurrentSceneStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CurrentSceneStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CurrentSceneStatus}
 */
proto.CurrentSceneStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Agent;
      reader.readMessage(value,proto.Agent.deserializeBinaryFromReader);
      msg.addAgents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneDisplayName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CurrentSceneStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CurrentSceneStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CurrentSceneStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CurrentSceneStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Agent.serializeBinaryToWriter
    );
  }
  f = message.getSceneName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSceneDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSceneDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated Agent agents = 1;
 * @return {!Array<!proto.Agent>}
 */
proto.CurrentSceneStatus.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Agent, 1));
};


/**
 * @param {!Array<!proto.Agent>} value
 * @return {!proto.CurrentSceneStatus} returns this
*/
proto.CurrentSceneStatus.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Agent}
 */
proto.CurrentSceneStatus.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CurrentSceneStatus} returns this
 */
proto.CurrentSceneStatus.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};


/**
 * optional string scene_name = 2;
 * @return {string}
 */
proto.CurrentSceneStatus.prototype.getSceneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CurrentSceneStatus} returns this
 */
proto.CurrentSceneStatus.prototype.setSceneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scene_description = 3;
 * @return {string}
 */
proto.CurrentSceneStatus.prototype.getSceneDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CurrentSceneStatus} returns this
 */
proto.CurrentSceneStatus.prototype.setSceneDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scene_display_name = 4;
 * @return {string}
 */
proto.CurrentSceneStatus.prototype.getSceneDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.CurrentSceneStatus} returns this
 */
proto.CurrentSceneStatus.prototype.setSceneDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyExactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyExactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyExactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyExactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    interactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    exactText: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyExactResponse}
 */
proto.ModifyExactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyExactResponse;
  return proto.ModifyExactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyExactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyExactResponse}
 */
proto.ModifyExactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInteractionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExactText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyExactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyExactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyExactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyExactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInteractionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExactText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string interaction_id = 1;
 * @return {string}
 */
proto.ModifyExactResponse.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyExactResponse} returns this
 */
proto.ModifyExactResponse.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string exact_text = 2;
 * @return {string}
 */
proto.ModifyExactResponse.prototype.getExactText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyExactResponse} returns this
 */
proto.ModifyExactResponse.prototype.setExactText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LoadSceneOutputEvent.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoadSceneOutputEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.LoadSceneOutputEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoadSceneOutputEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadSceneOutputEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.LoadSceneOutputEvent.Agent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoadSceneOutputEvent}
 */
proto.LoadSceneOutputEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoadSceneOutputEvent;
  return proto.LoadSceneOutputEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoadSceneOutputEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoadSceneOutputEvent}
 */
proto.LoadSceneOutputEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.LoadSceneOutputEvent.Agent;
      reader.readMessage(value,proto.LoadSceneOutputEvent.Agent.deserializeBinaryFromReader);
      msg.addAgents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoadSceneOutputEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoadSceneOutputEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoadSceneOutputEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadSceneOutputEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.LoadSceneOutputEvent.Agent.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoadSceneOutputEvent.Agent.prototype.toObject = function(opt_includeInstance) {
  return proto.LoadSceneOutputEvent.Agent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoadSceneOutputEvent.Agent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadSceneOutputEvent.Agent.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    brainName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    givenName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoadSceneOutputEvent.Agent}
 */
proto.LoadSceneOutputEvent.Agent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoadSceneOutputEvent.Agent;
  return proto.LoadSceneOutputEvent.Agent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoadSceneOutputEvent.Agent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoadSceneOutputEvent.Agent}
 */
proto.LoadSceneOutputEvent.Agent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrainName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGivenName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoadSceneOutputEvent.Agent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoadSceneOutputEvent.Agent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoadSceneOutputEvent.Agent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoadSceneOutputEvent.Agent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBrainName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGivenName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string agent_id = 1;
 * @return {string}
 */
proto.LoadSceneOutputEvent.Agent.prototype.getAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadSceneOutputEvent.Agent} returns this
 */
proto.LoadSceneOutputEvent.Agent.prototype.setAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string brain_name = 2;
 * @return {string}
 */
proto.LoadSceneOutputEvent.Agent.prototype.getBrainName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadSceneOutputEvent.Agent} returns this
 */
proto.LoadSceneOutputEvent.Agent.prototype.setBrainName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string given_name = 3;
 * @return {string}
 */
proto.LoadSceneOutputEvent.Agent.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoadSceneOutputEvent.Agent} returns this
 */
proto.LoadSceneOutputEvent.Agent.prototype.setGivenName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Agent agents = 1;
 * @return {!Array<!proto.LoadSceneOutputEvent.Agent>}
 */
proto.LoadSceneOutputEvent.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.LoadSceneOutputEvent.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.LoadSceneOutputEvent.Agent, 1));
};


/**
 * @param {!Array<!proto.LoadSceneOutputEvent.Agent>} value
 * @return {!proto.LoadSceneOutputEvent} returns this
*/
proto.LoadSceneOutputEvent.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.LoadSceneOutputEvent.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.LoadSceneOutputEvent.Agent}
 */
proto.LoadSceneOutputEvent.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.LoadSceneOutputEvent.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.LoadSceneOutputEvent} returns this
 */
proto.LoadSceneOutputEvent.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Agent.prototype.toObject = function(opt_includeInstance) {
  return proto.Agent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Agent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    brainName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    givenName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    characterAssets: (f = msg.getCharacterAssets()) && proto.Agent.CharacterAssets.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Agent}
 */
proto.Agent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Agent;
  return proto.Agent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Agent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Agent}
 */
proto.Agent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrainName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGivenName(value);
      break;
    case 4:
      var value = new proto.Agent.CharacterAssets;
      reader.readMessage(value,proto.Agent.CharacterAssets.deserializeBinaryFromReader);
      msg.setCharacterAssets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Agent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Agent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Agent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBrainName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGivenName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCharacterAssets();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.Agent.CharacterAssets.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Agent.CharacterAssets.prototype.toObject = function(opt_includeInstance) {
  return proto.Agent.CharacterAssets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Agent.CharacterAssets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.CharacterAssets.toObject = function(includeInstance, msg) {
  var f, obj = {
    rpmModelUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rpmImageUriPortrait: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rpmImageUriPosture: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avatarImg: jspb.Message.getFieldWithDefault(msg, 4, ""),
    avatarImgOriginal: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Agent.CharacterAssets}
 */
proto.Agent.CharacterAssets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Agent.CharacterAssets;
  return proto.Agent.CharacterAssets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Agent.CharacterAssets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Agent.CharacterAssets}
 */
proto.Agent.CharacterAssets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRpmModelUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRpmImageUriPortrait(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRpmImageUriPosture(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarImg(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarImgOriginal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Agent.CharacterAssets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Agent.CharacterAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Agent.CharacterAssets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Agent.CharacterAssets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRpmModelUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRpmImageUriPortrait();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRpmImageUriPosture();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvatarImg();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAvatarImgOriginal();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string rpm_model_uri = 1;
 * @return {string}
 */
proto.Agent.CharacterAssets.prototype.getRpmModelUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent.CharacterAssets} returns this
 */
proto.Agent.CharacterAssets.prototype.setRpmModelUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string rpm_image_uri_portrait = 2;
 * @return {string}
 */
proto.Agent.CharacterAssets.prototype.getRpmImageUriPortrait = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent.CharacterAssets} returns this
 */
proto.Agent.CharacterAssets.prototype.setRpmImageUriPortrait = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string rpm_image_uri_posture = 3;
 * @return {string}
 */
proto.Agent.CharacterAssets.prototype.getRpmImageUriPosture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent.CharacterAssets} returns this
 */
proto.Agent.CharacterAssets.prototype.setRpmImageUriPosture = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avatar_img = 4;
 * @return {string}
 */
proto.Agent.CharacterAssets.prototype.getAvatarImg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent.CharacterAssets} returns this
 */
proto.Agent.CharacterAssets.prototype.setAvatarImg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string avatar_img_original = 5;
 * @return {string}
 */
proto.Agent.CharacterAssets.prototype.getAvatarImgOriginal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent.CharacterAssets} returns this
 */
proto.Agent.CharacterAssets.prototype.setAvatarImgOriginal = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string agent_id = 1;
 * @return {string}
 */
proto.Agent.prototype.getAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent} returns this
 */
proto.Agent.prototype.setAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string brain_name = 2;
 * @return {string}
 */
proto.Agent.prototype.getBrainName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent} returns this
 */
proto.Agent.prototype.setBrainName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string given_name = 3;
 * @return {string}
 */
proto.Agent.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Agent} returns this
 */
proto.Agent.prototype.setGivenName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CharacterAssets character_assets = 4;
 * @return {?proto.Agent.CharacterAssets}
 */
proto.Agent.prototype.getCharacterAssets = function() {
  return /** @type{?proto.Agent.CharacterAssets} */ (
    jspb.Message.getWrapperField(this, proto.Agent.CharacterAssets, 4));
};


/**
 * @param {?proto.Agent.CharacterAssets|undefined} value
 * @return {!proto.Agent} returns this
*/
proto.Agent.prototype.setCharacterAssets = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Agent} returns this
 */
proto.Agent.prototype.clearCharacterAssets = function() {
  return this.setCharacterAssets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Agent.prototype.hasCharacterAssets = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DebugInfoEvent.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.DebugInfoEvent.InfoCase = {
  INFO_NOT_SET: 0,
  RELATION: 1
};

/**
 * @return {proto.DebugInfoEvent.InfoCase}
 */
proto.DebugInfoEvent.prototype.getInfoCase = function() {
  return /** @type {proto.DebugInfoEvent.InfoCase} */(jspb.Message.computeOneofCase(this, proto.DebugInfoEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DebugInfoEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DebugInfoEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DebugInfoEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DebugInfoEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    relation: (f = msg.getRelation()) && proto.RelationInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DebugInfoEvent}
 */
proto.DebugInfoEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DebugInfoEvent;
  return proto.DebugInfoEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DebugInfoEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DebugInfoEvent}
 */
proto.DebugInfoEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RelationInfo;
      reader.readMessage(value,proto.RelationInfo.deserializeBinaryFromReader);
      msg.setRelation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DebugInfoEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DebugInfoEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DebugInfoEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DebugInfoEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RelationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional RelationInfo relation = 1;
 * @return {?proto.RelationInfo}
 */
proto.DebugInfoEvent.prototype.getRelation = function() {
  return /** @type{?proto.RelationInfo} */ (
    jspb.Message.getWrapperField(this, proto.RelationInfo, 1));
};


/**
 * @param {?proto.RelationInfo|undefined} value
 * @return {!proto.DebugInfoEvent} returns this
*/
proto.DebugInfoEvent.prototype.setRelation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.DebugInfoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DebugInfoEvent} returns this
 */
proto.DebugInfoEvent.prototype.clearRelation = function() {
  return this.setRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DebugInfoEvent.prototype.hasRelation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SessionControlEvent.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.SessionControlEvent.SessionControlCase = {
  SESSION_CONTROL_NOT_SET: 0,
  SESSION_CONFIGURATION: 1,
  USER_CONFIGURATION: 2,
  CLIENT_CONFIGURATION: 3,
  CAPABILITIES_CONFIGURATION: 4,
  CONTINUATION: 5,
  SESSION_HISTORY_REQUEST: 6,
  SESSION_CONFIGURATION_PAYLOAD: 7
};

/**
 * @return {proto.SessionControlEvent.SessionControlCase}
 */
proto.SessionControlEvent.prototype.getSessionControlCase = function() {
  return /** @type {proto.SessionControlEvent.SessionControlCase} */(jspb.Message.computeOneofCase(this, proto.SessionControlEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SessionControlEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.SessionControlEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SessionControlEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionControlEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionConfiguration: (f = msg.getSessionConfiguration()) && ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.toObject(includeInstance, f),
    userConfiguration: (f = msg.getUserConfiguration()) && ai_inworld_engine_configuration_configuration_pb.UserConfiguration.toObject(includeInstance, f),
    clientConfiguration: (f = msg.getClientConfiguration()) && ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.toObject(includeInstance, f),
    capabilitiesConfiguration: (f = msg.getCapabilitiesConfiguration()) && ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.toObject(includeInstance, f),
    continuation: (f = msg.getContinuation()) && proto.Continuation.toObject(includeInstance, f),
    sessionHistoryRequest: (f = msg.getSessionHistoryRequest()) && proto.SessionHistoryRequest.toObject(includeInstance, f),
    sessionConfigurationPayload: (f = msg.getSessionConfigurationPayload()) && proto.SessionConfigurationPayload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SessionControlEvent}
 */
proto.SessionControlEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SessionControlEvent;
  return proto.SessionControlEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SessionControlEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SessionControlEvent}
 */
proto.SessionControlEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ai_inworld_engine_configuration_configuration_pb.SessionConfiguration;
      reader.readMessage(value,ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.deserializeBinaryFromReader);
      msg.setSessionConfiguration(value);
      break;
    case 2:
      var value = new ai_inworld_engine_configuration_configuration_pb.UserConfiguration;
      reader.readMessage(value,ai_inworld_engine_configuration_configuration_pb.UserConfiguration.deserializeBinaryFromReader);
      msg.setUserConfiguration(value);
      break;
    case 3:
      var value = new ai_inworld_engine_configuration_configuration_pb.ClientConfiguration;
      reader.readMessage(value,ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.deserializeBinaryFromReader);
      msg.setClientConfiguration(value);
      break;
    case 4:
      var value = new ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration;
      reader.readMessage(value,ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.deserializeBinaryFromReader);
      msg.setCapabilitiesConfiguration(value);
      break;
    case 5:
      var value = new proto.Continuation;
      reader.readMessage(value,proto.Continuation.deserializeBinaryFromReader);
      msg.setContinuation(value);
      break;
    case 6:
      var value = new proto.SessionHistoryRequest;
      reader.readMessage(value,proto.SessionHistoryRequest.deserializeBinaryFromReader);
      msg.setSessionHistoryRequest(value);
      break;
    case 7:
      var value = new proto.SessionConfigurationPayload;
      reader.readMessage(value,proto.SessionConfigurationPayload.deserializeBinaryFromReader);
      msg.setSessionConfigurationPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SessionControlEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SessionControlEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SessionControlEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionControlEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getUserConfiguration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ai_inworld_engine_configuration_configuration_pb.UserConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getClientConfiguration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getCapabilitiesConfiguration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getContinuation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.Continuation.serializeBinaryToWriter
    );
  }
  f = message.getSessionHistoryRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SessionHistoryRequest.serializeBinaryToWriter
    );
  }
  f = message.getSessionConfigurationPayload();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.SessionConfigurationPayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional ai.inworld.engine.configuration.SessionConfiguration session_configuration = 1;
 * @return {?proto.configuration.SessionConfiguration}
 */
proto.SessionControlEvent.prototype.getSessionConfiguration = function() {
  return /** @type{?proto.configuration.SessionConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.SessionConfiguration, 1));
};


/**
 * @param {?proto.configuration.SessionConfiguration|undefined} value
 * @return {!proto.SessionControlEvent} returns this
*/
proto.SessionControlEvent.prototype.setSessionConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlEvent} returns this
 */
proto.SessionControlEvent.prototype.clearSessionConfiguration = function() {
  return this.setSessionConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlEvent.prototype.hasSessionConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ai.inworld.engine.configuration.UserConfiguration user_configuration = 2;
 * @return {?proto.configuration.UserConfiguration}
 */
proto.SessionControlEvent.prototype.getUserConfiguration = function() {
  return /** @type{?proto.configuration.UserConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.UserConfiguration, 2));
};


/**
 * @param {?proto.configuration.UserConfiguration|undefined} value
 * @return {!proto.SessionControlEvent} returns this
*/
proto.SessionControlEvent.prototype.setUserConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlEvent} returns this
 */
proto.SessionControlEvent.prototype.clearUserConfiguration = function() {
  return this.setUserConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlEvent.prototype.hasUserConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ai.inworld.engine.configuration.ClientConfiguration client_configuration = 3;
 * @return {?proto.configuration.ClientConfiguration}
 */
proto.SessionControlEvent.prototype.getClientConfiguration = function() {
  return /** @type{?proto.configuration.ClientConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.ClientConfiguration, 3));
};


/**
 * @param {?proto.configuration.ClientConfiguration|undefined} value
 * @return {!proto.SessionControlEvent} returns this
*/
proto.SessionControlEvent.prototype.setClientConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlEvent} returns this
 */
proto.SessionControlEvent.prototype.clearClientConfiguration = function() {
  return this.setClientConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlEvent.prototype.hasClientConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ai.inworld.engine.configuration.CapabilitiesConfiguration capabilities_configuration = 4;
 * @return {?proto.configuration.CapabilitiesConfiguration}
 */
proto.SessionControlEvent.prototype.getCapabilitiesConfiguration = function() {
  return /** @type{?proto.configuration.CapabilitiesConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration, 4));
};


/**
 * @param {?proto.configuration.CapabilitiesConfiguration|undefined} value
 * @return {!proto.SessionControlEvent} returns this
*/
proto.SessionControlEvent.prototype.setCapabilitiesConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlEvent} returns this
 */
proto.SessionControlEvent.prototype.clearCapabilitiesConfiguration = function() {
  return this.setCapabilitiesConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlEvent.prototype.hasCapabilitiesConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Continuation continuation = 5;
 * @return {?proto.Continuation}
 */
proto.SessionControlEvent.prototype.getContinuation = function() {
  return /** @type{?proto.Continuation} */ (
    jspb.Message.getWrapperField(this, proto.Continuation, 5));
};


/**
 * @param {?proto.Continuation|undefined} value
 * @return {!proto.SessionControlEvent} returns this
*/
proto.SessionControlEvent.prototype.setContinuation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlEvent} returns this
 */
proto.SessionControlEvent.prototype.clearContinuation = function() {
  return this.setContinuation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlEvent.prototype.hasContinuation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SessionHistoryRequest session_history_request = 6;
 * @return {?proto.SessionHistoryRequest}
 */
proto.SessionControlEvent.prototype.getSessionHistoryRequest = function() {
  return /** @type{?proto.SessionHistoryRequest} */ (
    jspb.Message.getWrapperField(this, proto.SessionHistoryRequest, 6));
};


/**
 * @param {?proto.SessionHistoryRequest|undefined} value
 * @return {!proto.SessionControlEvent} returns this
*/
proto.SessionControlEvent.prototype.setSessionHistoryRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlEvent} returns this
 */
proto.SessionControlEvent.prototype.clearSessionHistoryRequest = function() {
  return this.setSessionHistoryRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlEvent.prototype.hasSessionHistoryRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SessionConfigurationPayload session_configuration_payload = 7;
 * @return {?proto.SessionConfigurationPayload}
 */
proto.SessionControlEvent.prototype.getSessionConfigurationPayload = function() {
  return /** @type{?proto.SessionConfigurationPayload} */ (
    jspb.Message.getWrapperField(this, proto.SessionConfigurationPayload, 7));
};


/**
 * @param {?proto.SessionConfigurationPayload|undefined} value
 * @return {!proto.SessionControlEvent} returns this
*/
proto.SessionControlEvent.prototype.setSessionConfigurationPayload = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionControlEvent} returns this
 */
proto.SessionControlEvent.prototype.clearSessionConfigurationPayload = function() {
  return this.setSessionConfigurationPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionControlEvent.prototype.hasSessionConfigurationPayload = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SessionConfigurationPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.SessionConfigurationPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SessionConfigurationPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionConfigurationPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionConfiguration: (f = msg.getSessionConfiguration()) && ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.toObject(includeInstance, f),
    userConfiguration: (f = msg.getUserConfiguration()) && ai_inworld_engine_configuration_configuration_pb.UserConfiguration.toObject(includeInstance, f),
    clientConfiguration: (f = msg.getClientConfiguration()) && ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.toObject(includeInstance, f),
    capabilitiesConfiguration: (f = msg.getCapabilitiesConfiguration()) && ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.toObject(includeInstance, f),
    continuation: (f = msg.getContinuation()) && proto.Continuation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SessionConfigurationPayload}
 */
proto.SessionConfigurationPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SessionConfigurationPayload;
  return proto.SessionConfigurationPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SessionConfigurationPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SessionConfigurationPayload}
 */
proto.SessionConfigurationPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ai_inworld_engine_configuration_configuration_pb.SessionConfiguration;
      reader.readMessage(value,ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.deserializeBinaryFromReader);
      msg.setSessionConfiguration(value);
      break;
    case 2:
      var value = new ai_inworld_engine_configuration_configuration_pb.UserConfiguration;
      reader.readMessage(value,ai_inworld_engine_configuration_configuration_pb.UserConfiguration.deserializeBinaryFromReader);
      msg.setUserConfiguration(value);
      break;
    case 3:
      var value = new ai_inworld_engine_configuration_configuration_pb.ClientConfiguration;
      reader.readMessage(value,ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.deserializeBinaryFromReader);
      msg.setClientConfiguration(value);
      break;
    case 4:
      var value = new ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration;
      reader.readMessage(value,ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.deserializeBinaryFromReader);
      msg.setCapabilitiesConfiguration(value);
      break;
    case 5:
      var value = new proto.Continuation;
      reader.readMessage(value,proto.Continuation.deserializeBinaryFromReader);
      msg.setContinuation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SessionConfigurationPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SessionConfigurationPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SessionConfigurationPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionConfigurationPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getUserConfiguration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ai_inworld_engine_configuration_configuration_pb.UserConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getClientConfiguration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getCapabilitiesConfiguration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getContinuation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.Continuation.serializeBinaryToWriter
    );
  }
};


/**
 * optional ai.inworld.engine.configuration.SessionConfiguration session_configuration = 1;
 * @return {?proto.configuration.SessionConfiguration}
 */
proto.SessionConfigurationPayload.prototype.getSessionConfiguration = function() {
  return /** @type{?proto.configuration.SessionConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.SessionConfiguration, 1));
};


/**
 * @param {?proto.configuration.SessionConfiguration|undefined} value
 * @return {!proto.SessionConfigurationPayload} returns this
*/
proto.SessionConfigurationPayload.prototype.setSessionConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionConfigurationPayload} returns this
 */
proto.SessionConfigurationPayload.prototype.clearSessionConfiguration = function() {
  return this.setSessionConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionConfigurationPayload.prototype.hasSessionConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ai.inworld.engine.configuration.UserConfiguration user_configuration = 2;
 * @return {?proto.configuration.UserConfiguration}
 */
proto.SessionConfigurationPayload.prototype.getUserConfiguration = function() {
  return /** @type{?proto.configuration.UserConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.UserConfiguration, 2));
};


/**
 * @param {?proto.configuration.UserConfiguration|undefined} value
 * @return {!proto.SessionConfigurationPayload} returns this
*/
proto.SessionConfigurationPayload.prototype.setUserConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionConfigurationPayload} returns this
 */
proto.SessionConfigurationPayload.prototype.clearUserConfiguration = function() {
  return this.setUserConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionConfigurationPayload.prototype.hasUserConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ai.inworld.engine.configuration.ClientConfiguration client_configuration = 3;
 * @return {?proto.configuration.ClientConfiguration}
 */
proto.SessionConfigurationPayload.prototype.getClientConfiguration = function() {
  return /** @type{?proto.configuration.ClientConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.ClientConfiguration, 3));
};


/**
 * @param {?proto.configuration.ClientConfiguration|undefined} value
 * @return {!proto.SessionConfigurationPayload} returns this
*/
proto.SessionConfigurationPayload.prototype.setClientConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionConfigurationPayload} returns this
 */
proto.SessionConfigurationPayload.prototype.clearClientConfiguration = function() {
  return this.setClientConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionConfigurationPayload.prototype.hasClientConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ai.inworld.engine.configuration.CapabilitiesConfiguration capabilities_configuration = 4;
 * @return {?proto.configuration.CapabilitiesConfiguration}
 */
proto.SessionConfigurationPayload.prototype.getCapabilitiesConfiguration = function() {
  return /** @type{?proto.configuration.CapabilitiesConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration, 4));
};


/**
 * @param {?proto.configuration.CapabilitiesConfiguration|undefined} value
 * @return {!proto.SessionConfigurationPayload} returns this
*/
proto.SessionConfigurationPayload.prototype.setCapabilitiesConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionConfigurationPayload} returns this
 */
proto.SessionConfigurationPayload.prototype.clearCapabilitiesConfiguration = function() {
  return this.setCapabilitiesConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionConfigurationPayload.prototype.hasCapabilitiesConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Continuation continuation = 5;
 * @return {?proto.Continuation}
 */
proto.SessionConfigurationPayload.prototype.getContinuation = function() {
  return /** @type{?proto.Continuation} */ (
    jspb.Message.getWrapperField(this, proto.Continuation, 5));
};


/**
 * @param {?proto.Continuation|undefined} value
 * @return {!proto.SessionConfigurationPayload} returns this
*/
proto.SessionConfigurationPayload.prototype.setContinuation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionConfigurationPayload} returns this
 */
proto.SessionConfigurationPayload.prototype.clearContinuation = function() {
  return this.setContinuation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionConfigurationPayload.prototype.hasContinuation = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Audio2FaceAnimationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.Audio2FaceAnimationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Audio2FaceAnimationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Audio2FaceAnimationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    animdata: jspb.Message.getFieldWithDefault(msg, 1, ""),
    audio: msg.getAudio_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Audio2FaceAnimationEvent}
 */
proto.Audio2FaceAnimationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Audio2FaceAnimationEvent;
  return proto.Audio2FaceAnimationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Audio2FaceAnimationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Audio2FaceAnimationEvent}
 */
proto.Audio2FaceAnimationEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnimdata(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Audio2FaceAnimationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Audio2FaceAnimationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Audio2FaceAnimationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Audio2FaceAnimationEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnimdata();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAudio_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string animdata = 1;
 * @return {string}
 */
proto.Audio2FaceAnimationEvent.prototype.getAnimdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Audio2FaceAnimationEvent} returns this
 */
proto.Audio2FaceAnimationEvent.prototype.setAnimdata = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes audio = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Audio2FaceAnimationEvent.prototype.getAudio = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audio = 2;
 * This is a type-conversion wrapper around `getAudio()`
 * @return {string}
 */
proto.Audio2FaceAnimationEvent.prototype.getAudio_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudio()));
};


/**
 * optional bytes audio = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudio()`
 * @return {!Uint8Array}
 */
proto.Audio2FaceAnimationEvent.prototype.getAudio_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudio()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Audio2FaceAnimationEvent} returns this
 */
proto.Audio2FaceAnimationEvent.prototype.setAudio = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Continuation.prototype.toObject = function(opt_includeInstance) {
  return proto.Continuation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Continuation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Continuation.toObject = function(includeInstance, msg) {
  var f, obj = {
    continuationInfo: (f = msg.getContinuationInfo()) && proto.Continuation.ContinuationInfo.toObject(includeInstance, f),
    continuationType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dialogHistory: (f = msg.getDialogHistory()) && proto.DialogHistory.toObject(includeInstance, f),
    externallySavedState: msg.getExternallySavedState_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Continuation}
 */
proto.Continuation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Continuation;
  return proto.Continuation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Continuation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Continuation}
 */
proto.Continuation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Continuation.ContinuationInfo;
      reader.readMessage(value,proto.Continuation.ContinuationInfo.deserializeBinaryFromReader);
      msg.setContinuationInfo(value);
      break;
    case 2:
      var value = /** @type {!proto.Continuation.ContinuationType} */ (reader.readEnum());
      msg.setContinuationType(value);
      break;
    case 3:
      var value = new proto.DialogHistory;
      reader.readMessage(value,proto.DialogHistory.deserializeBinaryFromReader);
      msg.setDialogHistory(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExternallySavedState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Continuation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Continuation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Continuation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Continuation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContinuationInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Continuation.ContinuationInfo.serializeBinaryToWriter
    );
  }
  f = message.getContinuationType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDialogHistory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.DialogHistory.serializeBinaryToWriter
    );
  }
  f = message.getExternallySavedState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Continuation.ContinuationType = {
  CONTINUATION_TYPE_UNKNOWN: 0,
  CONTINUATION_TYPE_EXTERNALLY_SAVED_STATE: 1,
  CONTINUATION_TYPE_DIALOG_HISTORY: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Continuation.ContinuationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Continuation.ContinuationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Continuation.ContinuationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Continuation.ContinuationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    passedTime: (f = msg.getPassedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Continuation.ContinuationInfo}
 */
proto.Continuation.ContinuationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Continuation.ContinuationInfo;
  return proto.Continuation.ContinuationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Continuation.ContinuationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Continuation.ContinuationInfo}
 */
proto.Continuation.ContinuationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPassedTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Continuation.ContinuationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Continuation.ContinuationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Continuation.ContinuationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Continuation.ContinuationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassedTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp passed_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.Continuation.ContinuationInfo.prototype.getPassedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.Continuation.ContinuationInfo} returns this
*/
proto.Continuation.ContinuationInfo.prototype.setPassedTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Continuation.ContinuationInfo} returns this
 */
proto.Continuation.ContinuationInfo.prototype.clearPassedTime = function() {
  return this.setPassedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Continuation.ContinuationInfo.prototype.hasPassedTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContinuationInfo continuation_info = 1;
 * @return {?proto.Continuation.ContinuationInfo}
 */
proto.Continuation.prototype.getContinuationInfo = function() {
  return /** @type{?proto.Continuation.ContinuationInfo} */ (
    jspb.Message.getWrapperField(this, proto.Continuation.ContinuationInfo, 1));
};


/**
 * @param {?proto.Continuation.ContinuationInfo|undefined} value
 * @return {!proto.Continuation} returns this
*/
proto.Continuation.prototype.setContinuationInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Continuation} returns this
 */
proto.Continuation.prototype.clearContinuationInfo = function() {
  return this.setContinuationInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Continuation.prototype.hasContinuationInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContinuationType continuation_type = 2;
 * @return {!proto.Continuation.ContinuationType}
 */
proto.Continuation.prototype.getContinuationType = function() {
  return /** @type {!proto.Continuation.ContinuationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Continuation.ContinuationType} value
 * @return {!proto.Continuation} returns this
 */
proto.Continuation.prototype.setContinuationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional DialogHistory dialog_history = 3;
 * @return {?proto.DialogHistory}
 */
proto.Continuation.prototype.getDialogHistory = function() {
  return /** @type{?proto.DialogHistory} */ (
    jspb.Message.getWrapperField(this, proto.DialogHistory, 3));
};


/**
 * @param {?proto.DialogHistory|undefined} value
 * @return {!proto.Continuation} returns this
*/
proto.Continuation.prototype.setDialogHistory = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Continuation} returns this
 */
proto.Continuation.prototype.clearDialogHistory = function() {
  return this.setDialogHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Continuation.prototype.hasDialogHistory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes externally_saved_state = 4;
 * @return {!(string|Uint8Array)}
 */
proto.Continuation.prototype.getExternallySavedState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes externally_saved_state = 4;
 * This is a type-conversion wrapper around `getExternallySavedState()`
 * @return {string}
 */
proto.Continuation.prototype.getExternallySavedState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExternallySavedState()));
};


/**
 * optional bytes externally_saved_state = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExternallySavedState()`
 * @return {!Uint8Array}
 */
proto.Continuation.prototype.getExternallySavedState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExternallySavedState()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Continuation} returns this
 */
proto.Continuation.prototype.setExternallySavedState = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DialogHistory.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DialogHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.DialogHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DialogHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DialogHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.DialogHistory.HistoryItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DialogHistory}
 */
proto.DialogHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DialogHistory;
  return proto.DialogHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DialogHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DialogHistory}
 */
proto.DialogHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DialogHistory.HistoryItem;
      reader.readMessage(value,proto.DialogHistory.HistoryItem.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DialogHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DialogHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DialogHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DialogHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.DialogHistory.HistoryItem.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DialogHistory.HistoryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.DialogHistory.HistoryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DialogHistory.HistoryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DialogHistory.HistoryItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    actor: (f = msg.getActor()) && proto.Actor.toObject(includeInstance, f),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DialogHistory.HistoryItem}
 */
proto.DialogHistory.HistoryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DialogHistory.HistoryItem;
  return proto.DialogHistory.HistoryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DialogHistory.HistoryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DialogHistory.HistoryItem}
 */
proto.DialogHistory.HistoryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Actor;
      reader.readMessage(value,proto.Actor.deserializeBinaryFromReader);
      msg.setActor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DialogHistory.HistoryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DialogHistory.HistoryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DialogHistory.HistoryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DialogHistory.HistoryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Actor.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Actor actor = 1;
 * @return {?proto.Actor}
 */
proto.DialogHistory.HistoryItem.prototype.getActor = function() {
  return /** @type{?proto.Actor} */ (
    jspb.Message.getWrapperField(this, proto.Actor, 1));
};


/**
 * @param {?proto.Actor|undefined} value
 * @return {!proto.DialogHistory.HistoryItem} returns this
*/
proto.DialogHistory.HistoryItem.prototype.setActor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DialogHistory.HistoryItem} returns this
 */
proto.DialogHistory.HistoryItem.prototype.clearActor = function() {
  return this.setActor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DialogHistory.HistoryItem.prototype.hasActor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.DialogHistory.HistoryItem.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DialogHistory.HistoryItem} returns this
 */
proto.DialogHistory.HistoryItem.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated HistoryItem history = 1;
 * @return {!Array<!proto.DialogHistory.HistoryItem>}
 */
proto.DialogHistory.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.DialogHistory.HistoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DialogHistory.HistoryItem, 1));
};


/**
 * @param {!Array<!proto.DialogHistory.HistoryItem>} value
 * @return {!proto.DialogHistory} returns this
*/
proto.DialogHistory.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.DialogHistory.HistoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DialogHistory.HistoryItem}
 */
proto.DialogHistory.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.DialogHistory.HistoryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.DialogHistory} returns this
 */
proto.DialogHistory.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Relations.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Relations.prototype.toObject = function(opt_includeInstance) {
  return proto.Relations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Relations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Relations.toObject = function(includeInstance, msg) {
  var f, obj = {
    actor: (f = msg.getActor()) && proto.Actor.toObject(includeInstance, f),
    relationsList: jspb.Message.toObjectList(msg.getRelationsList(),
    proto.Relations.Relation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Relations}
 */
proto.Relations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Relations;
  return proto.Relations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Relations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Relations}
 */
proto.Relations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Actor;
      reader.readMessage(value,proto.Actor.deserializeBinaryFromReader);
      msg.setActor(value);
      break;
    case 2:
      var value = new proto.Relations.Relation;
      reader.readMessage(value,proto.Relations.Relation.deserializeBinaryFromReader);
      msg.addRelations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Relations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Relations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Relations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Relations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Actor.serializeBinaryToWriter
    );
  }
  f = message.getRelationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Relations.Relation.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Relations.Relation.prototype.toObject = function(opt_includeInstance) {
  return proto.Relations.Relation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Relations.Relation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Relations.Relation.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    label: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Relations.Relation}
 */
proto.Relations.Relation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Relations.Relation;
  return proto.Relations.Relation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Relations.Relation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Relations.Relation}
 */
proto.Relations.Relation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Relations.Relation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Relations.Relation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Relations.Relation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Relations.Relation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.Relations.Relation.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Relations.Relation} returns this
 */
proto.Relations.Relation.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.Relations.Relation.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Relations.Relation} returns this
 */
proto.Relations.Relation.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Actor actor = 1;
 * @return {?proto.Actor}
 */
proto.Relations.prototype.getActor = function() {
  return /** @type{?proto.Actor} */ (
    jspb.Message.getWrapperField(this, proto.Actor, 1));
};


/**
 * @param {?proto.Actor|undefined} value
 * @return {!proto.Relations} returns this
*/
proto.Relations.prototype.setActor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Relations} returns this
 */
proto.Relations.prototype.clearActor = function() {
  return this.setActor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Relations.prototype.hasActor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Relation relations = 2;
 * @return {!Array<!proto.Relations.Relation>}
 */
proto.Relations.prototype.getRelationsList = function() {
  return /** @type{!Array<!proto.Relations.Relation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Relations.Relation, 2));
};


/**
 * @param {!Array<!proto.Relations.Relation>} value
 * @return {!proto.Relations} returns this
*/
proto.Relations.prototype.setRelationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Relations.Relation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Relations.Relation}
 */
proto.Relations.prototype.addRelations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Relations.Relation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Relations} returns this
 */
proto.Relations.prototype.clearRelationsList = function() {
  return this.setRelationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SessionHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SessionHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SessionHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SessionHistoryRequest}
 */
proto.SessionHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SessionHistoryRequest;
  return proto.SessionHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SessionHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SessionHistoryRequest}
 */
proto.SessionHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SessionHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SessionHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SessionHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SessionHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SessionHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SessionHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SessionHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionHistoryItemsList: jspb.Message.toObjectList(msg.getSessionHistoryItemsList(),
    proto.SessionHistoryResponse.SessionHistoryItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SessionHistoryResponse}
 */
proto.SessionHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SessionHistoryResponse;
  return proto.SessionHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SessionHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SessionHistoryResponse}
 */
proto.SessionHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SessionHistoryResponse.SessionHistoryItem;
      reader.readMessage(value,proto.SessionHistoryResponse.SessionHistoryItem.deserializeBinaryFromReader);
      msg.addSessionHistoryItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SessionHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SessionHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SessionHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionHistoryItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.SessionHistoryResponse.SessionHistoryItem.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SessionHistoryResponse.SessionHistoryItem.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SessionHistoryResponse.SessionHistoryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.SessionHistoryResponse.SessionHistoryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SessionHistoryResponse.SessionHistoryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionHistoryResponse.SessionHistoryItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    agent: (f = msg.getAgent()) && proto.Agent.toObject(includeInstance, f),
    packetsList: jspb.Message.toObjectList(msg.getPacketsList(),
    proto.InworldPacket.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SessionHistoryResponse.SessionHistoryItem}
 */
proto.SessionHistoryResponse.SessionHistoryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SessionHistoryResponse.SessionHistoryItem;
  return proto.SessionHistoryResponse.SessionHistoryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SessionHistoryResponse.SessionHistoryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SessionHistoryResponse.SessionHistoryItem}
 */
proto.SessionHistoryResponse.SessionHistoryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Agent;
      reader.readMessage(value,proto.Agent.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 2:
      var value = new proto.InworldPacket;
      reader.readMessage(value,proto.InworldPacket.deserializeBinaryFromReader);
      msg.addPackets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SessionHistoryResponse.SessionHistoryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SessionHistoryResponse.SessionHistoryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SessionHistoryResponse.SessionHistoryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SessionHistoryResponse.SessionHistoryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Agent.serializeBinaryToWriter
    );
  }
  f = message.getPacketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.InworldPacket.serializeBinaryToWriter
    );
  }
};


/**
 * optional Agent agent = 1;
 * @return {?proto.Agent}
 */
proto.SessionHistoryResponse.SessionHistoryItem.prototype.getAgent = function() {
  return /** @type{?proto.Agent} */ (
    jspb.Message.getWrapperField(this, proto.Agent, 1));
};


/**
 * @param {?proto.Agent|undefined} value
 * @return {!proto.SessionHistoryResponse.SessionHistoryItem} returns this
*/
proto.SessionHistoryResponse.SessionHistoryItem.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SessionHistoryResponse.SessionHistoryItem} returns this
 */
proto.SessionHistoryResponse.SessionHistoryItem.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SessionHistoryResponse.SessionHistoryItem.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated InworldPacket packets = 2;
 * @return {!Array<!proto.InworldPacket>}
 */
proto.SessionHistoryResponse.SessionHistoryItem.prototype.getPacketsList = function() {
  return /** @type{!Array<!proto.InworldPacket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.InworldPacket, 2));
};


/**
 * @param {!Array<!proto.InworldPacket>} value
 * @return {!proto.SessionHistoryResponse.SessionHistoryItem} returns this
*/
proto.SessionHistoryResponse.SessionHistoryItem.prototype.setPacketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.InworldPacket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.InworldPacket}
 */
proto.SessionHistoryResponse.SessionHistoryItem.prototype.addPackets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.InworldPacket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.SessionHistoryResponse.SessionHistoryItem} returns this
 */
proto.SessionHistoryResponse.SessionHistoryItem.prototype.clearPacketsList = function() {
  return this.setPacketsList([]);
};


/**
 * repeated SessionHistoryItem session_history_items = 1;
 * @return {!Array<!proto.SessionHistoryResponse.SessionHistoryItem>}
 */
proto.SessionHistoryResponse.prototype.getSessionHistoryItemsList = function() {
  return /** @type{!Array<!proto.SessionHistoryResponse.SessionHistoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SessionHistoryResponse.SessionHistoryItem, 1));
};


/**
 * @param {!Array<!proto.SessionHistoryResponse.SessionHistoryItem>} value
 * @return {!proto.SessionHistoryResponse} returns this
*/
proto.SessionHistoryResponse.prototype.setSessionHistoryItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.SessionHistoryResponse.SessionHistoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SessionHistoryResponse.SessionHistoryItem}
 */
proto.SessionHistoryResponse.prototype.addSessionHistoryItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.SessionHistoryResponse.SessionHistoryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.SessionHistoryResponse} returns this
 */
proto.SessionHistoryResponse.prototype.clearSessionHistoryItemsList = function() {
  return this.setSessionHistoryItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ConversationUpdatePayload.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConversationUpdatePayload.prototype.toObject = function(opt_includeInstance) {
  return proto.ConversationUpdatePayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConversationUpdatePayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConversationUpdatePayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantsList: jspb.Message.toObjectList(msg.getParticipantsList(),
    proto.Actor.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConversationUpdatePayload}
 */
proto.ConversationUpdatePayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConversationUpdatePayload;
  return proto.ConversationUpdatePayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConversationUpdatePayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConversationUpdatePayload}
 */
proto.ConversationUpdatePayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Actor;
      reader.readMessage(value,proto.Actor.deserializeBinaryFromReader);
      msg.addParticipants(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConversationUpdatePayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConversationUpdatePayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConversationUpdatePayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConversationUpdatePayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Actor.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Actor participants = 1;
 * @return {!Array<!proto.Actor>}
 */
proto.ConversationUpdatePayload.prototype.getParticipantsList = function() {
  return /** @type{!Array<!proto.Actor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Actor, 1));
};


/**
 * @param {!Array<!proto.Actor>} value
 * @return {!proto.ConversationUpdatePayload} returns this
*/
proto.ConversationUpdatePayload.prototype.setParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Actor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Actor}
 */
proto.ConversationUpdatePayload.prototype.addParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Actor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ConversationUpdatePayload} returns this
 */
proto.ConversationUpdatePayload.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ConversationEventPayload.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConversationEventPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.ConversationEventPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConversationEventPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConversationEventPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantsList: jspb.Message.toObjectList(msg.getParticipantsList(),
    proto.Actor.toObject, includeInstance),
    eventType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConversationEventPayload}
 */
proto.ConversationEventPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConversationEventPayload;
  return proto.ConversationEventPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConversationEventPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConversationEventPayload}
 */
proto.ConversationEventPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Actor;
      reader.readMessage(value,proto.Actor.deserializeBinaryFromReader);
      msg.addParticipants(value);
      break;
    case 2:
      var value = /** @type {!proto.ConversationEventPayload.ConversationEventType} */ (reader.readEnum());
      msg.setEventType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConversationEventPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConversationEventPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConversationEventPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConversationEventPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Actor.serializeBinaryToWriter
    );
  }
  f = message.getEventType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ConversationEventPayload.ConversationEventType = {
  UNKNOWN: 0,
  STARTED: 1,
  UPDATED: 2,
  EVICTED: 3
};

/**
 * repeated Actor participants = 1;
 * @return {!Array<!proto.Actor>}
 */
proto.ConversationEventPayload.prototype.getParticipantsList = function() {
  return /** @type{!Array<!proto.Actor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Actor, 1));
};


/**
 * @param {!Array<!proto.Actor>} value
 * @return {!proto.ConversationEventPayload} returns this
*/
proto.ConversationEventPayload.prototype.setParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Actor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Actor}
 */
proto.ConversationEventPayload.prototype.addParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Actor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ConversationEventPayload} returns this
 */
proto.ConversationEventPayload.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
};


/**
 * optional ConversationEventType event_type = 2;
 * @return {!proto.ConversationEventPayload.ConversationEventType}
 */
proto.ConversationEventPayload.prototype.getEventType = function() {
  return /** @type {!proto.ConversationEventPayload.ConversationEventType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ConversationEventPayload.ConversationEventType} value
 * @return {!proto.ConversationEventPayload} returns this
 */
proto.ConversationEventPayload.prototype.setEventType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.Playback = {
  UNSPECIFIED: 0,
  INTERACTION: 1,
  INTERACTION_END: 2,
  UTTERANCE: 3
};

goog.object.extend(exports, proto);
