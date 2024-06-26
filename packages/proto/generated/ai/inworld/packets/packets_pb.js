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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
var ai_inworld_options_options_pb = require('../../../ai/inworld/options/options_pb.js');
goog.object.extend(proto, ai_inworld_options_options_pb);
var ai_inworld_engine_configuration_configuration_pb = require('../../../ai/inworld/engine/configuration/configuration_pb.js');
goog.object.extend(proto, ai_inworld_engine_configuration_configuration_pb);
var ai_inworld_language_codes_language_codes_pb = require('../../../ai/inworld/language_codes/language_codes_pb.js');
goog.object.extend(proto, ai_inworld_language_codes_language_codes_pb);
var ai_inworld_packets_entities_packets_pb = require('../../../ai/inworld/packets/entities_packets_pb.js');
goog.object.extend(proto, ai_inworld_packets_entities_packets_pb);
goog.exportSymbol('proto.ai.inworld.packets.ActionEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ActionEvent.ActionCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Actor', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Actor.Type', null, global);
goog.exportSymbol('proto.ai.inworld.packets.AdditionalPhonemeInfo', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Agent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Agent.CharacterAssets', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ApplyResponse', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ApplyResponse.ApplyResponseType', null, global);
goog.exportSymbol('proto.ai.inworld.packets.AudioChunk', null, global);
goog.exportSymbol('proto.ai.inworld.packets.AudioSessionStartPayload', null, global);
goog.exportSymbol('proto.ai.inworld.packets.AudioSessionStartPayload.MicrophoneMode', null, global);
goog.exportSymbol('proto.ai.inworld.packets.CancelResponses', null, global);
goog.exportSymbol('proto.ai.inworld.packets.CancelResponsesEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Continuation', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Continuation.ContinuationInfo', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Continuation.ContinuationType', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ControlEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ControlEvent.Action', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ControlEvent.PayloadStructuredCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ConversationEventPayload', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ConversationEventPayload.ConversationEventType', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ConversationUpdatePayload', null, global);
goog.exportSymbol('proto.ai.inworld.packets.CurrentSceneStatus', null, global);
goog.exportSymbol('proto.ai.inworld.packets.CustomEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.CustomEvent.Parameter', null, global);
goog.exportSymbol('proto.ai.inworld.packets.CustomEvent.Type', null, global);
goog.exportSymbol('proto.ai.inworld.packets.DataChunk', null, global);
goog.exportSymbol('proto.ai.inworld.packets.DataChunk.AudioFormat', null, global);
goog.exportSymbol('proto.ai.inworld.packets.DataChunk.DataCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.DataChunk.DataType', null, global);
goog.exportSymbol('proto.ai.inworld.packets.DebugInfoEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.DebugInfoEvent.InfoCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.DialogHistory', null, global);
goog.exportSymbol('proto.ai.inworld.packets.DialogHistory.HistoryItem', null, global);
goog.exportSymbol('proto.ai.inworld.packets.EmotionEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.EmotionEvent.SpaffCode', null, global);
goog.exportSymbol('proto.ai.inworld.packets.EmotionEvent.Strength', null, global);
goog.exportSymbol('proto.ai.inworld.packets.InworldPacket', null, global);
goog.exportSymbol('proto.ai.inworld.packets.InworldPacket.PacketCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LatencyReportEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LatencyReportEvent.ReportCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LoadCharacters', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LoadCharacters.CharacterName', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LoadScene', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LoadSceneOutputEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LoadSceneOutputEvent.Agent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LoadedCharacters', null, global);
goog.exportSymbol('proto.ai.inworld.packets.LoadedScene', null, global);
goog.exportSymbol('proto.ai.inworld.packets.ModifyExactResponse', null, global);
goog.exportSymbol('proto.ai.inworld.packets.MutationEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.MutationEvent.MutationCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.NarratedAction', null, global);
goog.exportSymbol('proto.ai.inworld.packets.OperationStatusEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.PacketId', null, global);
goog.exportSymbol('proto.ai.inworld.packets.PerceivedLatencyReport', null, global);
goog.exportSymbol('proto.ai.inworld.packets.PerceivedLatencyReport.Precision', null, global);
goog.exportSymbol('proto.ai.inworld.packets.PingPongReport', null, global);
goog.exportSymbol('proto.ai.inworld.packets.PingPongReport.Type', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Playback', null, global);
goog.exportSymbol('proto.ai.inworld.packets.RegenerateResponse', null, global);
goog.exportSymbol('proto.ai.inworld.packets.RelationInfo', null, global);
goog.exportSymbol('proto.ai.inworld.packets.RelationInfo.RelationAttributes', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Relations', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Relations.Relation', null, global);
goog.exportSymbol('proto.ai.inworld.packets.Routing', null, global);
goog.exportSymbol('proto.ai.inworld.packets.SessionConfigurationPayload', null, global);
goog.exportSymbol('proto.ai.inworld.packets.SessionControlEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.SessionControlEvent.SessionControlCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.SessionControlResponseEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.SessionControlResponseEvent.ResponseCase', null, global);
goog.exportSymbol('proto.ai.inworld.packets.SessionHistoryRequest', null, global);
goog.exportSymbol('proto.ai.inworld.packets.SessionHistoryResponse', null, global);
goog.exportSymbol('proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem', null, global);
goog.exportSymbol('proto.ai.inworld.packets.TextEvent', null, global);
goog.exportSymbol('proto.ai.inworld.packets.TextEvent.ModelInfo', null, global);
goog.exportSymbol('proto.ai.inworld.packets.TextEvent.SourceType', null, global);
goog.exportSymbol('proto.ai.inworld.packets.UnloadCharacters', null, global);
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
proto.ai.inworld.packets.Actor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.Actor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.Actor.displayName = 'proto.ai.inworld.packets.Actor';
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
proto.ai.inworld.packets.Routing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.Routing.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.Routing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.Routing.displayName = 'proto.ai.inworld.packets.Routing';
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
proto.ai.inworld.packets.PacketId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.PacketId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.PacketId.displayName = 'proto.ai.inworld.packets.PacketId';
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
proto.ai.inworld.packets.InworldPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.packets.InworldPacket.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.InworldPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.InworldPacket.displayName = 'proto.ai.inworld.packets.InworldPacket';
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
proto.ai.inworld.packets.TextEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.TextEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.TextEvent.displayName = 'proto.ai.inworld.packets.TextEvent';
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
proto.ai.inworld.packets.TextEvent.ModelInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.TextEvent.ModelInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.TextEvent.ModelInfo.displayName = 'proto.ai.inworld.packets.TextEvent.ModelInfo';
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
proto.ai.inworld.packets.ControlEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.packets.ControlEvent.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.ControlEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.ControlEvent.displayName = 'proto.ai.inworld.packets.ControlEvent';
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
proto.ai.inworld.packets.AudioSessionStartPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.AudioSessionStartPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.AudioSessionStartPayload.displayName = 'proto.ai.inworld.packets.AudioSessionStartPayload';
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
proto.ai.inworld.packets.AudioChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.AudioChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.AudioChunk.displayName = 'proto.ai.inworld.packets.AudioChunk';
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
proto.ai.inworld.packets.CustomEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.CustomEvent.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.CustomEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.CustomEvent.displayName = 'proto.ai.inworld.packets.CustomEvent';
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
proto.ai.inworld.packets.CustomEvent.Parameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.CustomEvent.Parameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.CustomEvent.Parameter.displayName = 'proto.ai.inworld.packets.CustomEvent.Parameter';
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
proto.ai.inworld.packets.CancelResponsesEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.CancelResponsesEvent.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.CancelResponsesEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.CancelResponsesEvent.displayName = 'proto.ai.inworld.packets.CancelResponsesEvent';
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
proto.ai.inworld.packets.EmotionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.EmotionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.EmotionEvent.displayName = 'proto.ai.inworld.packets.EmotionEvent';
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
proto.ai.inworld.packets.DataChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.DataChunk.repeatedFields_, proto.ai.inworld.packets.DataChunk.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.DataChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.DataChunk.displayName = 'proto.ai.inworld.packets.DataChunk';
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
proto.ai.inworld.packets.AdditionalPhonemeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.AdditionalPhonemeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.AdditionalPhonemeInfo.displayName = 'proto.ai.inworld.packets.AdditionalPhonemeInfo';
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
proto.ai.inworld.packets.ActionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.packets.ActionEvent.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.ActionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.ActionEvent.displayName = 'proto.ai.inworld.packets.ActionEvent';
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
proto.ai.inworld.packets.NarratedAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.NarratedAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.NarratedAction.displayName = 'proto.ai.inworld.packets.NarratedAction';
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
proto.ai.inworld.packets.RelationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.RelationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.RelationInfo.displayName = 'proto.ai.inworld.packets.RelationInfo';
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
proto.ai.inworld.packets.RelationInfo.RelationAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.RelationInfo.RelationAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.RelationInfo.RelationAttributes.displayName = 'proto.ai.inworld.packets.RelationInfo.RelationAttributes';
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
proto.ai.inworld.packets.LatencyReportEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.packets.LatencyReportEvent.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.LatencyReportEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.LatencyReportEvent.displayName = 'proto.ai.inworld.packets.LatencyReportEvent';
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
proto.ai.inworld.packets.PingPongReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.PingPongReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.PingPongReport.displayName = 'proto.ai.inworld.packets.PingPongReport';
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
proto.ai.inworld.packets.PerceivedLatencyReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.PerceivedLatencyReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.PerceivedLatencyReport.displayName = 'proto.ai.inworld.packets.PerceivedLatencyReport';
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
proto.ai.inworld.packets.MutationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.packets.MutationEvent.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.MutationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.MutationEvent.displayName = 'proto.ai.inworld.packets.MutationEvent';
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
proto.ai.inworld.packets.SessionControlResponseEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.packets.SessionControlResponseEvent.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.SessionControlResponseEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.SessionControlResponseEvent.displayName = 'proto.ai.inworld.packets.SessionControlResponseEvent';
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
proto.ai.inworld.packets.CancelResponses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.CancelResponses.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.CancelResponses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.CancelResponses.displayName = 'proto.ai.inworld.packets.CancelResponses';
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
proto.ai.inworld.packets.RegenerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.RegenerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.RegenerateResponse.displayName = 'proto.ai.inworld.packets.RegenerateResponse';
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
proto.ai.inworld.packets.ApplyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.ApplyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.ApplyResponse.displayName = 'proto.ai.inworld.packets.ApplyResponse';
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
proto.ai.inworld.packets.LoadScene = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.LoadScene, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.LoadScene.displayName = 'proto.ai.inworld.packets.LoadScene';
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
proto.ai.inworld.packets.LoadedScene = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.LoadedScene.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.LoadedScene, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.LoadedScene.displayName = 'proto.ai.inworld.packets.LoadedScene';
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
proto.ai.inworld.packets.LoadCharacters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.LoadCharacters.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.LoadCharacters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.LoadCharacters.displayName = 'proto.ai.inworld.packets.LoadCharacters';
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
proto.ai.inworld.packets.LoadCharacters.CharacterName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.LoadCharacters.CharacterName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.LoadCharacters.CharacterName.displayName = 'proto.ai.inworld.packets.LoadCharacters.CharacterName';
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
proto.ai.inworld.packets.LoadedCharacters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.LoadedCharacters.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.LoadedCharacters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.LoadedCharacters.displayName = 'proto.ai.inworld.packets.LoadedCharacters';
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
proto.ai.inworld.packets.UnloadCharacters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.UnloadCharacters.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.UnloadCharacters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.UnloadCharacters.displayName = 'proto.ai.inworld.packets.UnloadCharacters';
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
proto.ai.inworld.packets.CurrentSceneStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.CurrentSceneStatus.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.CurrentSceneStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.CurrentSceneStatus.displayName = 'proto.ai.inworld.packets.CurrentSceneStatus';
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
proto.ai.inworld.packets.ModifyExactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.ModifyExactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.ModifyExactResponse.displayName = 'proto.ai.inworld.packets.ModifyExactResponse';
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
proto.ai.inworld.packets.LoadSceneOutputEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.LoadSceneOutputEvent.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.LoadSceneOutputEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.LoadSceneOutputEvent.displayName = 'proto.ai.inworld.packets.LoadSceneOutputEvent';
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
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.LoadSceneOutputEvent.Agent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.displayName = 'proto.ai.inworld.packets.LoadSceneOutputEvent.Agent';
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
proto.ai.inworld.packets.Agent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.Agent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.Agent.displayName = 'proto.ai.inworld.packets.Agent';
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
proto.ai.inworld.packets.Agent.CharacterAssets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.Agent.CharacterAssets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.Agent.CharacterAssets.displayName = 'proto.ai.inworld.packets.Agent.CharacterAssets';
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
proto.ai.inworld.packets.DebugInfoEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.packets.DebugInfoEvent.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.DebugInfoEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.DebugInfoEvent.displayName = 'proto.ai.inworld.packets.DebugInfoEvent';
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
proto.ai.inworld.packets.SessionControlEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_);
};
goog.inherits(proto.ai.inworld.packets.SessionControlEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.SessionControlEvent.displayName = 'proto.ai.inworld.packets.SessionControlEvent';
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
proto.ai.inworld.packets.SessionConfigurationPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.SessionConfigurationPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.SessionConfigurationPayload.displayName = 'proto.ai.inworld.packets.SessionConfigurationPayload';
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
proto.ai.inworld.packets.Continuation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.Continuation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.Continuation.displayName = 'proto.ai.inworld.packets.Continuation';
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
proto.ai.inworld.packets.Continuation.ContinuationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.Continuation.ContinuationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.Continuation.ContinuationInfo.displayName = 'proto.ai.inworld.packets.Continuation.ContinuationInfo';
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
proto.ai.inworld.packets.DialogHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.DialogHistory.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.DialogHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.DialogHistory.displayName = 'proto.ai.inworld.packets.DialogHistory';
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
proto.ai.inworld.packets.DialogHistory.HistoryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.DialogHistory.HistoryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.DialogHistory.HistoryItem.displayName = 'proto.ai.inworld.packets.DialogHistory.HistoryItem';
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
proto.ai.inworld.packets.Relations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.Relations.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.Relations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.Relations.displayName = 'proto.ai.inworld.packets.Relations';
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
proto.ai.inworld.packets.Relations.Relation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.Relations.Relation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.Relations.Relation.displayName = 'proto.ai.inworld.packets.Relations.Relation';
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
proto.ai.inworld.packets.SessionHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.SessionHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.SessionHistoryRequest.displayName = 'proto.ai.inworld.packets.SessionHistoryRequest';
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
proto.ai.inworld.packets.SessionHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.SessionHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.SessionHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.SessionHistoryResponse.displayName = 'proto.ai.inworld.packets.SessionHistoryResponse';
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
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.displayName = 'proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem';
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
proto.ai.inworld.packets.ConversationUpdatePayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.ConversationUpdatePayload.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.ConversationUpdatePayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.ConversationUpdatePayload.displayName = 'proto.ai.inworld.packets.ConversationUpdatePayload';
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
proto.ai.inworld.packets.ConversationEventPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.packets.ConversationEventPayload.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.packets.ConversationEventPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.ConversationEventPayload.displayName = 'proto.ai.inworld.packets.ConversationEventPayload';
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
proto.ai.inworld.packets.OperationStatusEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.packets.OperationStatusEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.packets.OperationStatusEvent.displayName = 'proto.ai.inworld.packets.OperationStatusEvent';
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
proto.ai.inworld.packets.Actor.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.Actor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.Actor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Actor.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.Actor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.Actor;
  return proto.ai.inworld.packets.Actor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.Actor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.Actor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ai.inworld.packets.Actor.Type} */ (reader.readEnum());
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
proto.ai.inworld.packets.Actor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.Actor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.Actor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Actor.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.Actor.Type = {
  UNKNOWN: 0,
  PLAYER: 1,
  AGENT: 2,
  WORLD: 3
};

/**
 * optional Type type = 1;
 * @return {!proto.ai.inworld.packets.Actor.Type}
 */
proto.ai.inworld.packets.Actor.prototype.getType = function() {
  return /** @type {!proto.ai.inworld.packets.Actor.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ai.inworld.packets.Actor.Type} value
 * @return {!proto.ai.inworld.packets.Actor} returns this
 */
proto.ai.inworld.packets.Actor.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ai.inworld.packets.Actor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Actor} returns this
 */
proto.ai.inworld.packets.Actor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.Routing.repeatedFields_ = [3];



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
proto.ai.inworld.packets.Routing.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.Routing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.Routing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Routing.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && proto.ai.inworld.packets.Actor.toObject(includeInstance, f),
    target: (f = msg.getTarget()) && proto.ai.inworld.packets.Actor.toObject(includeInstance, f),
    targetsList: jspb.Message.toObjectList(msg.getTargetsList(),
    proto.ai.inworld.packets.Actor.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.Routing}
 */
proto.ai.inworld.packets.Routing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.Routing;
  return proto.ai.inworld.packets.Routing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.Routing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.Routing}
 */
proto.ai.inworld.packets.Routing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Actor;
      reader.readMessage(value,proto.ai.inworld.packets.Actor.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.Actor;
      reader.readMessage(value,proto.ai.inworld.packets.Actor.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 3:
      var value = new proto.ai.inworld.packets.Actor;
      reader.readMessage(value,proto.ai.inworld.packets.Actor.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.Routing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.Routing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.Routing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Routing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.Actor.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ai.inworld.packets.Actor.serializeBinaryToWriter
    );
  }
  f = message.getTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ai.inworld.packets.Actor.serializeBinaryToWriter
    );
  }
};


/**
 * optional Actor source = 1;
 * @return {?proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.Routing.prototype.getSource = function() {
  return /** @type{?proto.ai.inworld.packets.Actor} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Actor, 1));
};


/**
 * @param {?proto.ai.inworld.packets.Actor|undefined} value
 * @return {!proto.ai.inworld.packets.Routing} returns this
*/
proto.ai.inworld.packets.Routing.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.Routing} returns this
 */
proto.ai.inworld.packets.Routing.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.Routing.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Actor target = 2;
 * @return {?proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.Routing.prototype.getTarget = function() {
  return /** @type{?proto.ai.inworld.packets.Actor} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Actor, 2));
};


/**
 * @param {?proto.ai.inworld.packets.Actor|undefined} value
 * @return {!proto.ai.inworld.packets.Routing} returns this
*/
proto.ai.inworld.packets.Routing.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.Routing} returns this
 */
proto.ai.inworld.packets.Routing.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.Routing.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Actor targets = 3;
 * @return {!Array<!proto.ai.inworld.packets.Actor>}
 */
proto.ai.inworld.packets.Routing.prototype.getTargetsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.Actor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.Actor, 3));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.Actor>} value
 * @return {!proto.ai.inworld.packets.Routing} returns this
*/
proto.ai.inworld.packets.Routing.prototype.setTargetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ai.inworld.packets.Actor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.Routing.prototype.addTargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ai.inworld.packets.Actor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.Routing} returns this
 */
proto.ai.inworld.packets.Routing.prototype.clearTargetsList = function() {
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
proto.ai.inworld.packets.PacketId.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.PacketId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.PacketId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.PacketId.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.PacketId}
 */
proto.ai.inworld.packets.PacketId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.PacketId;
  return proto.ai.inworld.packets.PacketId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.PacketId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.PacketId}
 */
proto.ai.inworld.packets.PacketId.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.PacketId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.PacketId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.PacketId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.PacketId.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.PacketId.prototype.getPacketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.PacketId} returns this
 */
proto.ai.inworld.packets.PacketId.prototype.setPacketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string utterance_id = 2;
 * @return {string}
 */
proto.ai.inworld.packets.PacketId.prototype.getUtteranceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.PacketId} returns this
 */
proto.ai.inworld.packets.PacketId.prototype.setUtteranceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string interaction_id = 3;
 * @return {string}
 */
proto.ai.inworld.packets.PacketId.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.PacketId} returns this
 */
proto.ai.inworld.packets.PacketId.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string correlation_id = 4;
 * @return {string}
 */
proto.ai.inworld.packets.PacketId.prototype.getCorrelationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.PacketId} returns this
 */
proto.ai.inworld.packets.PacketId.prototype.setCorrelationId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string conversation_id = 5;
 * @return {string}
 */
proto.ai.inworld.packets.PacketId.prototype.getConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.PacketId} returns this
 */
proto.ai.inworld.packets.PacketId.prototype.setConversationId = function(value) {
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
proto.ai.inworld.packets.InworldPacket.oneofGroups_ = [[2,3,4,8,10,11,12,13,15,16,18,19,20,22,23,24]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.InworldPacket.PacketCase = {
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
  LATENCY_REPORT: 22,
  OPERATION_STATUS: 23,
  ENTITIES_ITEMS_OPERATION: 24
};

/**
 * @return {proto.ai.inworld.packets.InworldPacket.PacketCase}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getPacketCase = function() {
  return /** @type {proto.ai.inworld.packets.InworldPacket.PacketCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0]));
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
proto.ai.inworld.packets.InworldPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.InworldPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.InworldPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.InworldPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    routing: (f = msg.getRouting()) && proto.ai.inworld.packets.Routing.toObject(includeInstance, f),
    packetId: (f = msg.getPacketId()) && proto.ai.inworld.packets.PacketId.toObject(includeInstance, f),
    text: (f = msg.getText()) && proto.ai.inworld.packets.TextEvent.toObject(includeInstance, f),
    control: (f = msg.getControl()) && proto.ai.inworld.packets.ControlEvent.toObject(includeInstance, f),
    audioChunk: (f = msg.getAudioChunk()) && proto.ai.inworld.packets.AudioChunk.toObject(includeInstance, f),
    custom: (f = msg.getCustom()) && proto.ai.inworld.packets.CustomEvent.toObject(includeInstance, f),
    cancelresponses: (f = msg.getCancelresponses()) && proto.ai.inworld.packets.CancelResponsesEvent.toObject(includeInstance, f),
    emotion: (f = msg.getEmotion()) && proto.ai.inworld.packets.EmotionEvent.toObject(includeInstance, f),
    dataChunk: (f = msg.getDataChunk()) && proto.ai.inworld.packets.DataChunk.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.ai.inworld.packets.ActionEvent.toObject(includeInstance, f),
    mutation: (f = msg.getMutation()) && proto.ai.inworld.packets.MutationEvent.toObject(includeInstance, f),
    loadSceneOutput: (f = msg.getLoadSceneOutput()) && proto.ai.inworld.packets.LoadSceneOutputEvent.toObject(includeInstance, f),
    debugInfo: (f = msg.getDebugInfo()) && proto.ai.inworld.packets.DebugInfoEvent.toObject(includeInstance, f),
    sessionControl: (f = msg.getSessionControl()) && proto.ai.inworld.packets.SessionControlEvent.toObject(includeInstance, f),
    sessionControlResponse: (f = msg.getSessionControlResponse()) && proto.ai.inworld.packets.SessionControlResponseEvent.toObject(includeInstance, f),
    latencyReport: (f = msg.getLatencyReport()) && proto.ai.inworld.packets.LatencyReportEvent.toObject(includeInstance, f),
    operationStatus: (f = msg.getOperationStatus()) && proto.ai.inworld.packets.OperationStatusEvent.toObject(includeInstance, f),
    entitiesItemsOperation: (f = msg.getEntitiesItemsOperation()) && ai_inworld_packets_entities_packets_pb.ItemsOperationEvent.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.InworldPacket}
 */
proto.ai.inworld.packets.InworldPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.InworldPacket;
  return proto.ai.inworld.packets.InworldPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.InworldPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.InworldPacket}
 */
proto.ai.inworld.packets.InworldPacket.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ai.inworld.packets.Routing;
      reader.readMessage(value,proto.ai.inworld.packets.Routing.deserializeBinaryFromReader);
      msg.setRouting(value);
      break;
    case 9:
      var value = new proto.ai.inworld.packets.PacketId;
      reader.readMessage(value,proto.ai.inworld.packets.PacketId.deserializeBinaryFromReader);
      msg.setPacketId(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.TextEvent;
      reader.readMessage(value,proto.ai.inworld.packets.TextEvent.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 3:
      var value = new proto.ai.inworld.packets.ControlEvent;
      reader.readMessage(value,proto.ai.inworld.packets.ControlEvent.deserializeBinaryFromReader);
      msg.setControl(value);
      break;
    case 4:
      var value = new proto.ai.inworld.packets.AudioChunk;
      reader.readMessage(value,proto.ai.inworld.packets.AudioChunk.deserializeBinaryFromReader);
      msg.setAudioChunk(value);
      break;
    case 8:
      var value = new proto.ai.inworld.packets.CustomEvent;
      reader.readMessage(value,proto.ai.inworld.packets.CustomEvent.deserializeBinaryFromReader);
      msg.setCustom(value);
      break;
    case 10:
      var value = new proto.ai.inworld.packets.CancelResponsesEvent;
      reader.readMessage(value,proto.ai.inworld.packets.CancelResponsesEvent.deserializeBinaryFromReader);
      msg.setCancelresponses(value);
      break;
    case 11:
      var value = new proto.ai.inworld.packets.EmotionEvent;
      reader.readMessage(value,proto.ai.inworld.packets.EmotionEvent.deserializeBinaryFromReader);
      msg.setEmotion(value);
      break;
    case 12:
      var value = new proto.ai.inworld.packets.DataChunk;
      reader.readMessage(value,proto.ai.inworld.packets.DataChunk.deserializeBinaryFromReader);
      msg.setDataChunk(value);
      break;
    case 13:
      var value = new proto.ai.inworld.packets.ActionEvent;
      reader.readMessage(value,proto.ai.inworld.packets.ActionEvent.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 15:
      var value = new proto.ai.inworld.packets.MutationEvent;
      reader.readMessage(value,proto.ai.inworld.packets.MutationEvent.deserializeBinaryFromReader);
      msg.setMutation(value);
      break;
    case 16:
      var value = new proto.ai.inworld.packets.LoadSceneOutputEvent;
      reader.readMessage(value,proto.ai.inworld.packets.LoadSceneOutputEvent.deserializeBinaryFromReader);
      msg.setLoadSceneOutput(value);
      break;
    case 18:
      var value = new proto.ai.inworld.packets.DebugInfoEvent;
      reader.readMessage(value,proto.ai.inworld.packets.DebugInfoEvent.deserializeBinaryFromReader);
      msg.setDebugInfo(value);
      break;
    case 19:
      var value = new proto.ai.inworld.packets.SessionControlEvent;
      reader.readMessage(value,proto.ai.inworld.packets.SessionControlEvent.deserializeBinaryFromReader);
      msg.setSessionControl(value);
      break;
    case 20:
      var value = new proto.ai.inworld.packets.SessionControlResponseEvent;
      reader.readMessage(value,proto.ai.inworld.packets.SessionControlResponseEvent.deserializeBinaryFromReader);
      msg.setSessionControlResponse(value);
      break;
    case 22:
      var value = new proto.ai.inworld.packets.LatencyReportEvent;
      reader.readMessage(value,proto.ai.inworld.packets.LatencyReportEvent.deserializeBinaryFromReader);
      msg.setLatencyReport(value);
      break;
    case 23:
      var value = new proto.ai.inworld.packets.OperationStatusEvent;
      reader.readMessage(value,proto.ai.inworld.packets.OperationStatusEvent.deserializeBinaryFromReader);
      msg.setOperationStatus(value);
      break;
    case 24:
      var value = new ai_inworld_packets_entities_packets_pb.ItemsOperationEvent;
      reader.readMessage(value,ai_inworld_packets_entities_packets_pb.ItemsOperationEvent.deserializeBinaryFromReader);
      msg.setEntitiesItemsOperation(value);
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
proto.ai.inworld.packets.InworldPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.InworldPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.InworldPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.InworldPacket.serializeBinaryToWriter = function(message, writer) {
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
      proto.ai.inworld.packets.Routing.serializeBinaryToWriter
    );
  }
  f = message.getPacketId();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ai.inworld.packets.PacketId.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ai.inworld.packets.TextEvent.serializeBinaryToWriter
    );
  }
  f = message.getControl();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ai.inworld.packets.ControlEvent.serializeBinaryToWriter
    );
  }
  f = message.getAudioChunk();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ai.inworld.packets.AudioChunk.serializeBinaryToWriter
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ai.inworld.packets.CustomEvent.serializeBinaryToWriter
    );
  }
  f = message.getCancelresponses();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ai.inworld.packets.CancelResponsesEvent.serializeBinaryToWriter
    );
  }
  f = message.getEmotion();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ai.inworld.packets.EmotionEvent.serializeBinaryToWriter
    );
  }
  f = message.getDataChunk();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ai.inworld.packets.DataChunk.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ai.inworld.packets.ActionEvent.serializeBinaryToWriter
    );
  }
  f = message.getMutation();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ai.inworld.packets.MutationEvent.serializeBinaryToWriter
    );
  }
  f = message.getLoadSceneOutput();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ai.inworld.packets.LoadSceneOutputEvent.serializeBinaryToWriter
    );
  }
  f = message.getDebugInfo();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.ai.inworld.packets.DebugInfoEvent.serializeBinaryToWriter
    );
  }
  f = message.getSessionControl();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.ai.inworld.packets.SessionControlEvent.serializeBinaryToWriter
    );
  }
  f = message.getSessionControlResponse();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.ai.inworld.packets.SessionControlResponseEvent.serializeBinaryToWriter
    );
  }
  f = message.getLatencyReport();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.ai.inworld.packets.LatencyReportEvent.serializeBinaryToWriter
    );
  }
  f = message.getOperationStatus();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.ai.inworld.packets.OperationStatusEvent.serializeBinaryToWriter
    );
  }
  f = message.getEntitiesItemsOperation();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      ai_inworld_packets_entities_packets_pb.ItemsOperationEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Routing routing = 6;
 * @return {?proto.ai.inworld.packets.Routing}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getRouting = function() {
  return /** @type{?proto.ai.inworld.packets.Routing} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Routing, 6));
};


/**
 * @param {?proto.ai.inworld.packets.Routing|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setRouting = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearRouting = function() {
  return this.setRouting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasRouting = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PacketId packet_id = 9;
 * @return {?proto.ai.inworld.packets.PacketId}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getPacketId = function() {
  return /** @type{?proto.ai.inworld.packets.PacketId} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.PacketId, 9));
};


/**
 * @param {?proto.ai.inworld.packets.PacketId|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setPacketId = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearPacketId = function() {
  return this.setPacketId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasPacketId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional TextEvent text = 2;
 * @return {?proto.ai.inworld.packets.TextEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getText = function() {
  return /** @type{?proto.ai.inworld.packets.TextEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.TextEvent, 2));
};


/**
 * @param {?proto.ai.inworld.packets.TextEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ControlEvent control = 3;
 * @return {?proto.ai.inworld.packets.ControlEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getControl = function() {
  return /** @type{?proto.ai.inworld.packets.ControlEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.ControlEvent, 3));
};


/**
 * @param {?proto.ai.inworld.packets.ControlEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setControl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearControl = function() {
  return this.setControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasControl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AudioChunk audio_chunk = 4;
 * @return {?proto.ai.inworld.packets.AudioChunk}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getAudioChunk = function() {
  return /** @type{?proto.ai.inworld.packets.AudioChunk} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.AudioChunk, 4));
};


/**
 * @param {?proto.ai.inworld.packets.AudioChunk|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setAudioChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearAudioChunk = function() {
  return this.setAudioChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasAudioChunk = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CustomEvent custom = 8;
 * @return {?proto.ai.inworld.packets.CustomEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getCustom = function() {
  return /** @type{?proto.ai.inworld.packets.CustomEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.CustomEvent, 8));
};


/**
 * @param {?proto.ai.inworld.packets.CustomEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setCustom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CancelResponsesEvent cancelResponses = 10;
 * @return {?proto.ai.inworld.packets.CancelResponsesEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getCancelresponses = function() {
  return /** @type{?proto.ai.inworld.packets.CancelResponsesEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.CancelResponsesEvent, 10));
};


/**
 * @param {?proto.ai.inworld.packets.CancelResponsesEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setCancelresponses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearCancelresponses = function() {
  return this.setCancelresponses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasCancelresponses = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional EmotionEvent emotion = 11;
 * @return {?proto.ai.inworld.packets.EmotionEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getEmotion = function() {
  return /** @type{?proto.ai.inworld.packets.EmotionEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.EmotionEvent, 11));
};


/**
 * @param {?proto.ai.inworld.packets.EmotionEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setEmotion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearEmotion = function() {
  return this.setEmotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasEmotion = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DataChunk data_chunk = 12;
 * @return {?proto.ai.inworld.packets.DataChunk}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getDataChunk = function() {
  return /** @type{?proto.ai.inworld.packets.DataChunk} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.DataChunk, 12));
};


/**
 * @param {?proto.ai.inworld.packets.DataChunk|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setDataChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearDataChunk = function() {
  return this.setDataChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasDataChunk = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ActionEvent action = 13;
 * @return {?proto.ai.inworld.packets.ActionEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getAction = function() {
  return /** @type{?proto.ai.inworld.packets.ActionEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.ActionEvent, 13));
};


/**
 * @param {?proto.ai.inworld.packets.ActionEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasAction = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional MutationEvent mutation = 15;
 * @return {?proto.ai.inworld.packets.MutationEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getMutation = function() {
  return /** @type{?proto.ai.inworld.packets.MutationEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.MutationEvent, 15));
};


/**
 * @param {?proto.ai.inworld.packets.MutationEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setMutation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearMutation = function() {
  return this.setMutation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasMutation = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional LoadSceneOutputEvent load_scene_output = 16;
 * @return {?proto.ai.inworld.packets.LoadSceneOutputEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getLoadSceneOutput = function() {
  return /** @type{?proto.ai.inworld.packets.LoadSceneOutputEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.LoadSceneOutputEvent, 16));
};


/**
 * @param {?proto.ai.inworld.packets.LoadSceneOutputEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setLoadSceneOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearLoadSceneOutput = function() {
  return this.setLoadSceneOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasLoadSceneOutput = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional DebugInfoEvent debug_info = 18;
 * @return {?proto.ai.inworld.packets.DebugInfoEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getDebugInfo = function() {
  return /** @type{?proto.ai.inworld.packets.DebugInfoEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.DebugInfoEvent, 18));
};


/**
 * @param {?proto.ai.inworld.packets.DebugInfoEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setDebugInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearDebugInfo = function() {
  return this.setDebugInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasDebugInfo = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional SessionControlEvent session_control = 19;
 * @return {?proto.ai.inworld.packets.SessionControlEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getSessionControl = function() {
  return /** @type{?proto.ai.inworld.packets.SessionControlEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.SessionControlEvent, 19));
};


/**
 * @param {?proto.ai.inworld.packets.SessionControlEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setSessionControl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearSessionControl = function() {
  return this.setSessionControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasSessionControl = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional SessionControlResponseEvent session_control_response = 20;
 * @return {?proto.ai.inworld.packets.SessionControlResponseEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getSessionControlResponse = function() {
  return /** @type{?proto.ai.inworld.packets.SessionControlResponseEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.SessionControlResponseEvent, 20));
};


/**
 * @param {?proto.ai.inworld.packets.SessionControlResponseEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setSessionControlResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearSessionControlResponse = function() {
  return this.setSessionControlResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasSessionControlResponse = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional LatencyReportEvent latency_report = 22;
 * @return {?proto.ai.inworld.packets.LatencyReportEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getLatencyReport = function() {
  return /** @type{?proto.ai.inworld.packets.LatencyReportEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.LatencyReportEvent, 22));
};


/**
 * @param {?proto.ai.inworld.packets.LatencyReportEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setLatencyReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearLatencyReport = function() {
  return this.setLatencyReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasLatencyReport = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional OperationStatusEvent operation_status = 23;
 * @return {?proto.ai.inworld.packets.OperationStatusEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getOperationStatus = function() {
  return /** @type{?proto.ai.inworld.packets.OperationStatusEvent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.OperationStatusEvent, 23));
};


/**
 * @param {?proto.ai.inworld.packets.OperationStatusEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setOperationStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearOperationStatus = function() {
  return this.setOperationStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasOperationStatus = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional entities.ItemsOperationEvent entities_items_operation = 24;
 * @return {?proto.ai.inworld.packets.entities.ItemsOperationEvent}
 */
proto.ai.inworld.packets.InworldPacket.prototype.getEntitiesItemsOperation = function() {
  return /** @type{?proto.ai.inworld.packets.entities.ItemsOperationEvent} */ (
    jspb.Message.getWrapperField(this, ai_inworld_packets_entities_packets_pb.ItemsOperationEvent, 24));
};


/**
 * @param {?proto.ai.inworld.packets.entities.ItemsOperationEvent|undefined} value
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
*/
proto.ai.inworld.packets.InworldPacket.prototype.setEntitiesItemsOperation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.ai.inworld.packets.InworldPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.InworldPacket} returns this
 */
proto.ai.inworld.packets.InworldPacket.prototype.clearEntitiesItemsOperation = function() {
  return this.setEntitiesItemsOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.InworldPacket.prototype.hasEntitiesItemsOperation = function() {
  return jspb.Message.getField(this, 24) != null;
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
proto.ai.inworld.packets.TextEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.TextEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.TextEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.TextEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pb_final: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    modelInfo: (f = msg.getModelInfo()) && proto.ai.inworld.packets.TextEvent.ModelInfo.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.TextEvent}
 */
proto.ai.inworld.packets.TextEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.TextEvent;
  return proto.ai.inworld.packets.TextEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.TextEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.TextEvent}
 */
proto.ai.inworld.packets.TextEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.ai.inworld.packets.TextEvent.SourceType} */ (reader.readEnum());
      msg.setSourceType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinal(value);
      break;
    case 4:
      var value = new proto.ai.inworld.packets.TextEvent.ModelInfo;
      reader.readMessage(value,proto.ai.inworld.packets.TextEvent.ModelInfo.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.TextEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.TextEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.TextEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.TextEvent.serializeBinaryToWriter = function(message, writer) {
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
      proto.ai.inworld.packets.TextEvent.ModelInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ai.inworld.packets.TextEvent.SourceType = {
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
proto.ai.inworld.packets.TextEvent.ModelInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.TextEvent.ModelInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.TextEvent.ModelInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.TextEvent.ModelInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.TextEvent.ModelInfo}
 */
proto.ai.inworld.packets.TextEvent.ModelInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.TextEvent.ModelInfo;
  return proto.ai.inworld.packets.TextEvent.ModelInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.TextEvent.ModelInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.TextEvent.ModelInfo}
 */
proto.ai.inworld.packets.TextEvent.ModelInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.TextEvent.ModelInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.TextEvent.ModelInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.TextEvent.ModelInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.TextEvent.ModelInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.TextEvent.ModelInfo.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.TextEvent.ModelInfo} returns this
 */
proto.ai.inworld.packets.TextEvent.ModelInfo.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.ai.inworld.packets.TextEvent.ModelInfo.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.TextEvent.ModelInfo} returns this
 */
proto.ai.inworld.packets.TextEvent.ModelInfo.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.ai.inworld.packets.TextEvent.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.TextEvent} returns this
 */
proto.ai.inworld.packets.TextEvent.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SourceType source_type = 2;
 * @return {!proto.ai.inworld.packets.TextEvent.SourceType}
 */
proto.ai.inworld.packets.TextEvent.prototype.getSourceType = function() {
  return /** @type {!proto.ai.inworld.packets.TextEvent.SourceType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.packets.TextEvent.SourceType} value
 * @return {!proto.ai.inworld.packets.TextEvent} returns this
 */
proto.ai.inworld.packets.TextEvent.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool final = 3;
 * @return {boolean}
 */
proto.ai.inworld.packets.TextEvent.prototype.getFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ai.inworld.packets.TextEvent} returns this
 */
proto.ai.inworld.packets.TextEvent.prototype.setFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional ModelInfo model_info = 4;
 * @return {?proto.ai.inworld.packets.TextEvent.ModelInfo}
 */
proto.ai.inworld.packets.TextEvent.prototype.getModelInfo = function() {
  return /** @type{?proto.ai.inworld.packets.TextEvent.ModelInfo} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.TextEvent.ModelInfo, 4));
};


/**
 * @param {?proto.ai.inworld.packets.TextEvent.ModelInfo|undefined} value
 * @return {!proto.ai.inworld.packets.TextEvent} returns this
*/
proto.ai.inworld.packets.TextEvent.prototype.setModelInfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.TextEvent} returns this
 */
proto.ai.inworld.packets.TextEvent.prototype.clearModelInfo = function() {
  return this.setModelInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.TextEvent.prototype.hasModelInfo = function() {
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
proto.ai.inworld.packets.ControlEvent.oneofGroups_ = [[4,5,6,7,8]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.ControlEvent.PayloadStructuredCase = {
  PAYLOAD_STRUCTURED_NOT_SET: 0,
  CONVERSATION_UPDATE: 4,
  CONVERSATION_EVENT: 5,
  AUDIO_SESSION_START: 6,
  CURRENT_SCENE_STATUS: 7,
  SESSION_CONFIGURATION: 8
};

/**
 * @return {proto.ai.inworld.packets.ControlEvent.PayloadStructuredCase}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getPayloadStructuredCase = function() {
  return /** @type {proto.ai.inworld.packets.ControlEvent.PayloadStructuredCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.ControlEvent.oneofGroups_[0]));
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
proto.ai.inworld.packets.ControlEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.ControlEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.ControlEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ControlEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    conversationUpdate: (f = msg.getConversationUpdate()) && proto.ai.inworld.packets.ConversationUpdatePayload.toObject(includeInstance, f),
    conversationEvent: (f = msg.getConversationEvent()) && proto.ai.inworld.packets.ConversationEventPayload.toObject(includeInstance, f),
    audioSessionStart: (f = msg.getAudioSessionStart()) && proto.ai.inworld.packets.AudioSessionStartPayload.toObject(includeInstance, f),
    currentSceneStatus: (f = msg.getCurrentSceneStatus()) && proto.ai.inworld.packets.CurrentSceneStatus.toObject(includeInstance, f),
    sessionConfiguration: (f = msg.getSessionConfiguration()) && proto.ai.inworld.packets.SessionConfigurationPayload.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.ControlEvent}
 */
proto.ai.inworld.packets.ControlEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.ControlEvent;
  return proto.ai.inworld.packets.ControlEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.ControlEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.ControlEvent}
 */
proto.ai.inworld.packets.ControlEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ai.inworld.packets.ControlEvent.Action} */ (reader.readEnum());
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
      var value = new proto.ai.inworld.packets.ConversationUpdatePayload;
      reader.readMessage(value,proto.ai.inworld.packets.ConversationUpdatePayload.deserializeBinaryFromReader);
      msg.setConversationUpdate(value);
      break;
    case 5:
      var value = new proto.ai.inworld.packets.ConversationEventPayload;
      reader.readMessage(value,proto.ai.inworld.packets.ConversationEventPayload.deserializeBinaryFromReader);
      msg.setConversationEvent(value);
      break;
    case 6:
      var value = new proto.ai.inworld.packets.AudioSessionStartPayload;
      reader.readMessage(value,proto.ai.inworld.packets.AudioSessionStartPayload.deserializeBinaryFromReader);
      msg.setAudioSessionStart(value);
      break;
    case 7:
      var value = new proto.ai.inworld.packets.CurrentSceneStatus;
      reader.readMessage(value,proto.ai.inworld.packets.CurrentSceneStatus.deserializeBinaryFromReader);
      msg.setCurrentSceneStatus(value);
      break;
    case 8:
      var value = new proto.ai.inworld.packets.SessionConfigurationPayload;
      reader.readMessage(value,proto.ai.inworld.packets.SessionConfigurationPayload.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.ControlEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.ControlEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.ControlEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ControlEvent.serializeBinaryToWriter = function(message, writer) {
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
      proto.ai.inworld.packets.ConversationUpdatePayload.serializeBinaryToWriter
    );
  }
  f = message.getConversationEvent();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ai.inworld.packets.ConversationEventPayload.serializeBinaryToWriter
    );
  }
  f = message.getAudioSessionStart();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ai.inworld.packets.AudioSessionStartPayload.serializeBinaryToWriter
    );
  }
  f = message.getCurrentSceneStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ai.inworld.packets.CurrentSceneStatus.serializeBinaryToWriter
    );
  }
  f = message.getSessionConfiguration();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ai.inworld.packets.SessionConfigurationPayload.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ai.inworld.packets.ControlEvent.Action = {
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
 * @return {!proto.ai.inworld.packets.ControlEvent.Action}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getAction = function() {
  return /** @type {!proto.ai.inworld.packets.ControlEvent.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ai.inworld.packets.ControlEvent.Action} value
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
 */
proto.ai.inworld.packets.ControlEvent.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
 */
proto.ai.inworld.packets.ControlEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct payload = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
*/
proto.ai.inworld.packets.ControlEvent.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
 */
proto.ai.inworld.packets.ControlEvent.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.ControlEvent.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConversationUpdatePayload conversation_update = 4;
 * @return {?proto.ai.inworld.packets.ConversationUpdatePayload}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getConversationUpdate = function() {
  return /** @type{?proto.ai.inworld.packets.ConversationUpdatePayload} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.ConversationUpdatePayload, 4));
};


/**
 * @param {?proto.ai.inworld.packets.ConversationUpdatePayload|undefined} value
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
*/
proto.ai.inworld.packets.ControlEvent.prototype.setConversationUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ai.inworld.packets.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
 */
proto.ai.inworld.packets.ControlEvent.prototype.clearConversationUpdate = function() {
  return this.setConversationUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.ControlEvent.prototype.hasConversationUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ConversationEventPayload conversation_event = 5;
 * @return {?proto.ai.inworld.packets.ConversationEventPayload}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getConversationEvent = function() {
  return /** @type{?proto.ai.inworld.packets.ConversationEventPayload} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.ConversationEventPayload, 5));
};


/**
 * @param {?proto.ai.inworld.packets.ConversationEventPayload|undefined} value
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
*/
proto.ai.inworld.packets.ControlEvent.prototype.setConversationEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ai.inworld.packets.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
 */
proto.ai.inworld.packets.ControlEvent.prototype.clearConversationEvent = function() {
  return this.setConversationEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.ControlEvent.prototype.hasConversationEvent = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AudioSessionStartPayload audio_session_start = 6;
 * @return {?proto.ai.inworld.packets.AudioSessionStartPayload}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getAudioSessionStart = function() {
  return /** @type{?proto.ai.inworld.packets.AudioSessionStartPayload} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.AudioSessionStartPayload, 6));
};


/**
 * @param {?proto.ai.inworld.packets.AudioSessionStartPayload|undefined} value
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
*/
proto.ai.inworld.packets.ControlEvent.prototype.setAudioSessionStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ai.inworld.packets.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
 */
proto.ai.inworld.packets.ControlEvent.prototype.clearAudioSessionStart = function() {
  return this.setAudioSessionStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.ControlEvent.prototype.hasAudioSessionStart = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CurrentSceneStatus current_scene_status = 7;
 * @return {?proto.ai.inworld.packets.CurrentSceneStatus}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getCurrentSceneStatus = function() {
  return /** @type{?proto.ai.inworld.packets.CurrentSceneStatus} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.CurrentSceneStatus, 7));
};


/**
 * @param {?proto.ai.inworld.packets.CurrentSceneStatus|undefined} value
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
*/
proto.ai.inworld.packets.ControlEvent.prototype.setCurrentSceneStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ai.inworld.packets.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
 */
proto.ai.inworld.packets.ControlEvent.prototype.clearCurrentSceneStatus = function() {
  return this.setCurrentSceneStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.ControlEvent.prototype.hasCurrentSceneStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SessionConfigurationPayload session_configuration = 8;
 * @return {?proto.ai.inworld.packets.SessionConfigurationPayload}
 */
proto.ai.inworld.packets.ControlEvent.prototype.getSessionConfiguration = function() {
  return /** @type{?proto.ai.inworld.packets.SessionConfigurationPayload} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.SessionConfigurationPayload, 8));
};


/**
 * @param {?proto.ai.inworld.packets.SessionConfigurationPayload|undefined} value
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
*/
proto.ai.inworld.packets.ControlEvent.prototype.setSessionConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ai.inworld.packets.ControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.ControlEvent} returns this
 */
proto.ai.inworld.packets.ControlEvent.prototype.clearSessionConfiguration = function() {
  return this.setSessionConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.ControlEvent.prototype.hasSessionConfiguration = function() {
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
proto.ai.inworld.packets.AudioSessionStartPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.AudioSessionStartPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.AudioSessionStartPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.AudioSessionStartPayload.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.AudioSessionStartPayload}
 */
proto.ai.inworld.packets.AudioSessionStartPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.AudioSessionStartPayload;
  return proto.ai.inworld.packets.AudioSessionStartPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.AudioSessionStartPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.AudioSessionStartPayload}
 */
proto.ai.inworld.packets.AudioSessionStartPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ai.inworld.packets.AudioSessionStartPayload.MicrophoneMode} */ (reader.readEnum());
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
proto.ai.inworld.packets.AudioSessionStartPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.AudioSessionStartPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.AudioSessionStartPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.AudioSessionStartPayload.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.AudioSessionStartPayload.MicrophoneMode = {
  UNSPECIFIED: 0,
  OPEN_MIC: 1,
  EXPECT_AUDIO_END: 2
};

/**
 * optional MicrophoneMode mode = 1;
 * @return {!proto.ai.inworld.packets.AudioSessionStartPayload.MicrophoneMode}
 */
proto.ai.inworld.packets.AudioSessionStartPayload.prototype.getMode = function() {
  return /** @type {!proto.ai.inworld.packets.AudioSessionStartPayload.MicrophoneMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ai.inworld.packets.AudioSessionStartPayload.MicrophoneMode} value
 * @return {!proto.ai.inworld.packets.AudioSessionStartPayload} returns this
 */
proto.ai.inworld.packets.AudioSessionStartPayload.prototype.setMode = function(value) {
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
proto.ai.inworld.packets.AudioChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.AudioChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.AudioChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.AudioChunk.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.AudioChunk}
 */
proto.ai.inworld.packets.AudioChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.AudioChunk;
  return proto.ai.inworld.packets.AudioChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.AudioChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.AudioChunk}
 */
proto.ai.inworld.packets.AudioChunk.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.AudioChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.AudioChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.AudioChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.AudioChunk.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.AudioChunk.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.ai.inworld.packets.AudioChunk.prototype.getChunk_asB64 = function() {
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
proto.ai.inworld.packets.AudioChunk.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ai.inworld.packets.AudioChunk} returns this
 */
proto.ai.inworld.packets.AudioChunk.prototype.setChunk = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.CustomEvent.repeatedFields_ = [3];



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
proto.ai.inworld.packets.CustomEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.CustomEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.CustomEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CustomEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playback: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.ai.inworld.packets.CustomEvent.Parameter.toObject, includeInstance),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ai.inworld.packets.CustomEvent}
 */
proto.ai.inworld.packets.CustomEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.CustomEvent;
  return proto.ai.inworld.packets.CustomEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.CustomEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.CustomEvent}
 */
proto.ai.inworld.packets.CustomEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.ai.inworld.packets.Playback} */ (reader.readEnum());
      msg.setPlayback(value);
      break;
    case 3:
      var value = new proto.ai.inworld.packets.CustomEvent.Parameter;
      reader.readMessage(value,proto.ai.inworld.packets.CustomEvent.Parameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 4:
      var value = /** @type {!proto.ai.inworld.packets.CustomEvent.Type} */ (reader.readEnum());
      msg.setType(value);
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
proto.ai.inworld.packets.CustomEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.CustomEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.CustomEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CustomEvent.serializeBinaryToWriter = function(message, writer) {
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
      proto.ai.inworld.packets.CustomEvent.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ai.inworld.packets.CustomEvent.Type = {
  UNSPECIFIED: 0,
  TRIGGER: 1,
  TASK: 2
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
proto.ai.inworld.packets.CustomEvent.Parameter.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.CustomEvent.Parameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.CustomEvent.Parameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CustomEvent.Parameter.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.CustomEvent.Parameter}
 */
proto.ai.inworld.packets.CustomEvent.Parameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.CustomEvent.Parameter;
  return proto.ai.inworld.packets.CustomEvent.Parameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.CustomEvent.Parameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.CustomEvent.Parameter}
 */
proto.ai.inworld.packets.CustomEvent.Parameter.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.CustomEvent.Parameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.CustomEvent.Parameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.CustomEvent.Parameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CustomEvent.Parameter.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.CustomEvent.Parameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.CustomEvent.Parameter} returns this
 */
proto.ai.inworld.packets.CustomEvent.Parameter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.ai.inworld.packets.CustomEvent.Parameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.CustomEvent.Parameter} returns this
 */
proto.ai.inworld.packets.CustomEvent.Parameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ai.inworld.packets.CustomEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.CustomEvent} returns this
 */
proto.ai.inworld.packets.CustomEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Playback playback = 2;
 * @return {!proto.ai.inworld.packets.Playback}
 */
proto.ai.inworld.packets.CustomEvent.prototype.getPlayback = function() {
  return /** @type {!proto.ai.inworld.packets.Playback} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.packets.Playback} value
 * @return {!proto.ai.inworld.packets.CustomEvent} returns this
 */
proto.ai.inworld.packets.CustomEvent.prototype.setPlayback = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Parameter parameters = 3;
 * @return {!Array<!proto.ai.inworld.packets.CustomEvent.Parameter>}
 */
proto.ai.inworld.packets.CustomEvent.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.CustomEvent.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.CustomEvent.Parameter, 3));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.CustomEvent.Parameter>} value
 * @return {!proto.ai.inworld.packets.CustomEvent} returns this
*/
proto.ai.inworld.packets.CustomEvent.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ai.inworld.packets.CustomEvent.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.CustomEvent.Parameter}
 */
proto.ai.inworld.packets.CustomEvent.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ai.inworld.packets.CustomEvent.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.CustomEvent} returns this
 */
proto.ai.inworld.packets.CustomEvent.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * optional Type type = 4;
 * @return {!proto.ai.inworld.packets.CustomEvent.Type}
 */
proto.ai.inworld.packets.CustomEvent.prototype.getType = function() {
  return /** @type {!proto.ai.inworld.packets.CustomEvent.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ai.inworld.packets.CustomEvent.Type} value
 * @return {!proto.ai.inworld.packets.CustomEvent} returns this
 */
proto.ai.inworld.packets.CustomEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.CancelResponsesEvent.repeatedFields_ = [2];



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
proto.ai.inworld.packets.CancelResponsesEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.CancelResponsesEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.CancelResponsesEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CancelResponsesEvent.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.CancelResponsesEvent}
 */
proto.ai.inworld.packets.CancelResponsesEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.CancelResponsesEvent;
  return proto.ai.inworld.packets.CancelResponsesEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.CancelResponsesEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.CancelResponsesEvent}
 */
proto.ai.inworld.packets.CancelResponsesEvent.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.CancelResponsesEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.CancelResponsesEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.CancelResponsesEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CancelResponsesEvent.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.CancelResponsesEvent.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.CancelResponsesEvent} returns this
 */
proto.ai.inworld.packets.CancelResponsesEvent.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string utterance_id = 2;
 * @return {!Array<string>}
 */
proto.ai.inworld.packets.CancelResponsesEvent.prototype.getUtteranceIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ai.inworld.packets.CancelResponsesEvent} returns this
 */
proto.ai.inworld.packets.CancelResponsesEvent.prototype.setUtteranceIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.CancelResponsesEvent} returns this
 */
proto.ai.inworld.packets.CancelResponsesEvent.prototype.addUtteranceId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.CancelResponsesEvent} returns this
 */
proto.ai.inworld.packets.CancelResponsesEvent.prototype.clearUtteranceIdList = function() {
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
proto.ai.inworld.packets.EmotionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.EmotionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.EmotionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.EmotionEvent.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.EmotionEvent}
 */
proto.ai.inworld.packets.EmotionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.EmotionEvent;
  return proto.ai.inworld.packets.EmotionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.EmotionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.EmotionEvent}
 */
proto.ai.inworld.packets.EmotionEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.ai.inworld.packets.EmotionEvent.SpaffCode} */ (reader.readEnum());
      msg.setBehavior(value);
      break;
    case 6:
      var value = /** @type {!proto.ai.inworld.packets.EmotionEvent.Strength} */ (reader.readEnum());
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
proto.ai.inworld.packets.EmotionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.EmotionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.EmotionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.EmotionEvent.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.EmotionEvent.SpaffCode = {
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
proto.ai.inworld.packets.EmotionEvent.Strength = {
  UNSPECIFIED: 0,
  WEAK: 1,
  STRONG: 2,
  NORMAL: 3
};

/**
 * optional float joy = 1;
 * @return {number}
 */
proto.ai.inworld.packets.EmotionEvent.prototype.getJoy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.EmotionEvent} returns this
 */
proto.ai.inworld.packets.EmotionEvent.prototype.setJoy = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float fear = 2;
 * @return {number}
 */
proto.ai.inworld.packets.EmotionEvent.prototype.getFear = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.EmotionEvent} returns this
 */
proto.ai.inworld.packets.EmotionEvent.prototype.setFear = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float trust = 3;
 * @return {number}
 */
proto.ai.inworld.packets.EmotionEvent.prototype.getTrust = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.EmotionEvent} returns this
 */
proto.ai.inworld.packets.EmotionEvent.prototype.setTrust = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float surprise = 4;
 * @return {number}
 */
proto.ai.inworld.packets.EmotionEvent.prototype.getSurprise = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.EmotionEvent} returns this
 */
proto.ai.inworld.packets.EmotionEvent.prototype.setSurprise = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional SpaffCode behavior = 5;
 * @return {!proto.ai.inworld.packets.EmotionEvent.SpaffCode}
 */
proto.ai.inworld.packets.EmotionEvent.prototype.getBehavior = function() {
  return /** @type {!proto.ai.inworld.packets.EmotionEvent.SpaffCode} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ai.inworld.packets.EmotionEvent.SpaffCode} value
 * @return {!proto.ai.inworld.packets.EmotionEvent} returns this
 */
proto.ai.inworld.packets.EmotionEvent.prototype.setBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Strength strength = 6;
 * @return {!proto.ai.inworld.packets.EmotionEvent.Strength}
 */
proto.ai.inworld.packets.EmotionEvent.prototype.getStrength = function() {
  return /** @type {!proto.ai.inworld.packets.EmotionEvent.Strength} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ai.inworld.packets.EmotionEvent.Strength} value
 * @return {!proto.ai.inworld.packets.EmotionEvent} returns this
 */
proto.ai.inworld.packets.EmotionEvent.prototype.setStrength = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.DataChunk.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ai.inworld.packets.DataChunk.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.DataChunk.DataCase = {
  DATA_NOT_SET: 0,
  CHUNK: 1,
  DURATION_MS: 3
};

/**
 * @return {proto.ai.inworld.packets.DataChunk.DataCase}
 */
proto.ai.inworld.packets.DataChunk.prototype.getDataCase = function() {
  return /** @type {proto.ai.inworld.packets.DataChunk.DataCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.DataChunk.oneofGroups_[0]));
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
proto.ai.inworld.packets.DataChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.DataChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.DataChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.DataChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunk: msg.getChunk_asB64(),
    durationMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    additionalPhonemeInfoList: jspb.Message.toObjectList(msg.getAdditionalPhonemeInfoList(),
    proto.ai.inworld.packets.AdditionalPhonemeInfo.toObject, includeInstance),
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
 * @return {!proto.ai.inworld.packets.DataChunk}
 */
proto.ai.inworld.packets.DataChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.DataChunk;
  return proto.ai.inworld.packets.DataChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.DataChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.DataChunk}
 */
proto.ai.inworld.packets.DataChunk.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.ai.inworld.packets.DataChunk.DataType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.ai.inworld.packets.AdditionalPhonemeInfo;
      reader.readMessage(value,proto.ai.inworld.packets.AdditionalPhonemeInfo.deserializeBinaryFromReader);
      msg.addAdditionalPhonemeInfo(value);
      break;
    case 5:
      var value = /** @type {!proto.ai.inworld.packets.DataChunk.AudioFormat} */ (reader.readEnum());
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
proto.ai.inworld.packets.DataChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.DataChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.DataChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.DataChunk.serializeBinaryToWriter = function(message, writer) {
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
      proto.ai.inworld.packets.AdditionalPhonemeInfo.serializeBinaryToWriter
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
proto.ai.inworld.packets.DataChunk.DataType = {
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
proto.ai.inworld.packets.DataChunk.AudioFormat = {
  UNSPECIFIED_AUDIO_FORMAT: 0,
  AUDIO_MP3: 1,
  AUDIO_PCM_16000: 2,
  AUDIO_PCM_22050: 3
};

/**
 * optional bytes chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ai.inworld.packets.DataChunk.prototype.getChunk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes chunk = 1;
 * This is a type-conversion wrapper around `getChunk()`
 * @return {string}
 */
proto.ai.inworld.packets.DataChunk.prototype.getChunk_asB64 = function() {
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
proto.ai.inworld.packets.DataChunk.prototype.getChunk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ai.inworld.packets.DataChunk} returns this
 */
proto.ai.inworld.packets.DataChunk.prototype.setChunk = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ai.inworld.packets.DataChunk.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ai.inworld.packets.DataChunk} returns this
 */
proto.ai.inworld.packets.DataChunk.prototype.clearChunk = function() {
  return jspb.Message.setOneofField(this, 1, proto.ai.inworld.packets.DataChunk.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.DataChunk.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 duration_ms = 3;
 * @return {number}
 */
proto.ai.inworld.packets.DataChunk.prototype.getDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.DataChunk} returns this
 */
proto.ai.inworld.packets.DataChunk.prototype.setDurationMs = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ai.inworld.packets.DataChunk.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ai.inworld.packets.DataChunk} returns this
 */
proto.ai.inworld.packets.DataChunk.prototype.clearDurationMs = function() {
  return jspb.Message.setOneofField(this, 3, proto.ai.inworld.packets.DataChunk.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.DataChunk.prototype.hasDurationMs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DataType type = 2;
 * @return {!proto.ai.inworld.packets.DataChunk.DataType}
 */
proto.ai.inworld.packets.DataChunk.prototype.getType = function() {
  return /** @type {!proto.ai.inworld.packets.DataChunk.DataType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.packets.DataChunk.DataType} value
 * @return {!proto.ai.inworld.packets.DataChunk} returns this
 */
proto.ai.inworld.packets.DataChunk.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated AdditionalPhonemeInfo additional_phoneme_info = 4;
 * @return {!Array<!proto.ai.inworld.packets.AdditionalPhonemeInfo>}
 */
proto.ai.inworld.packets.DataChunk.prototype.getAdditionalPhonemeInfoList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.AdditionalPhonemeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.AdditionalPhonemeInfo, 4));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.AdditionalPhonemeInfo>} value
 * @return {!proto.ai.inworld.packets.DataChunk} returns this
*/
proto.ai.inworld.packets.DataChunk.prototype.setAdditionalPhonemeInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ai.inworld.packets.AdditionalPhonemeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.AdditionalPhonemeInfo}
 */
proto.ai.inworld.packets.DataChunk.prototype.addAdditionalPhonemeInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ai.inworld.packets.AdditionalPhonemeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.DataChunk} returns this
 */
proto.ai.inworld.packets.DataChunk.prototype.clearAdditionalPhonemeInfoList = function() {
  return this.setAdditionalPhonemeInfoList([]);
};


/**
 * optional AudioFormat audioFormat = 5;
 * @return {!proto.ai.inworld.packets.DataChunk.AudioFormat}
 */
proto.ai.inworld.packets.DataChunk.prototype.getAudioformat = function() {
  return /** @type {!proto.ai.inworld.packets.DataChunk.AudioFormat} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ai.inworld.packets.DataChunk.AudioFormat} value
 * @return {!proto.ai.inworld.packets.DataChunk} returns this
 */
proto.ai.inworld.packets.DataChunk.prototype.setAudioformat = function(value) {
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
proto.ai.inworld.packets.AdditionalPhonemeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.AdditionalPhonemeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.AdditionalPhonemeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.AdditionalPhonemeInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.AdditionalPhonemeInfo}
 */
proto.ai.inworld.packets.AdditionalPhonemeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.AdditionalPhonemeInfo;
  return proto.ai.inworld.packets.AdditionalPhonemeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.AdditionalPhonemeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.AdditionalPhonemeInfo}
 */
proto.ai.inworld.packets.AdditionalPhonemeInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.AdditionalPhonemeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.AdditionalPhonemeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.AdditionalPhonemeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.AdditionalPhonemeInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.AdditionalPhonemeInfo.prototype.getPhoneme = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.AdditionalPhonemeInfo} returns this
 */
proto.ai.inworld.packets.AdditionalPhonemeInfo.prototype.setPhoneme = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration start_offset = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.ai.inworld.packets.AdditionalPhonemeInfo.prototype.getStartOffset = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.ai.inworld.packets.AdditionalPhonemeInfo} returns this
*/
proto.ai.inworld.packets.AdditionalPhonemeInfo.prototype.setStartOffset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.AdditionalPhonemeInfo} returns this
 */
proto.ai.inworld.packets.AdditionalPhonemeInfo.prototype.clearStartOffset = function() {
  return this.setStartOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.AdditionalPhonemeInfo.prototype.hasStartOffset = function() {
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
proto.ai.inworld.packets.ActionEvent.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.ActionEvent.ActionCase = {
  ACTION_NOT_SET: 0,
  NARRATED_ACTION: 1
};

/**
 * @return {proto.ai.inworld.packets.ActionEvent.ActionCase}
 */
proto.ai.inworld.packets.ActionEvent.prototype.getActionCase = function() {
  return /** @type {proto.ai.inworld.packets.ActionEvent.ActionCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.ActionEvent.oneofGroups_[0]));
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
proto.ai.inworld.packets.ActionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.ActionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.ActionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ActionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    narratedAction: (f = msg.getNarratedAction()) && proto.ai.inworld.packets.NarratedAction.toObject(includeInstance, f),
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
 * @return {!proto.ai.inworld.packets.ActionEvent}
 */
proto.ai.inworld.packets.ActionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.ActionEvent;
  return proto.ai.inworld.packets.ActionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.ActionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.ActionEvent}
 */
proto.ai.inworld.packets.ActionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.NarratedAction;
      reader.readMessage(value,proto.ai.inworld.packets.NarratedAction.deserializeBinaryFromReader);
      msg.setNarratedAction(value);
      break;
    case 2:
      var value = /** @type {!proto.ai.inworld.packets.Playback} */ (reader.readEnum());
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
proto.ai.inworld.packets.ActionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.ActionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.ActionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ActionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNarratedAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.NarratedAction.serializeBinaryToWriter
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
 * @return {?proto.ai.inworld.packets.NarratedAction}
 */
proto.ai.inworld.packets.ActionEvent.prototype.getNarratedAction = function() {
  return /** @type{?proto.ai.inworld.packets.NarratedAction} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.NarratedAction, 1));
};


/**
 * @param {?proto.ai.inworld.packets.NarratedAction|undefined} value
 * @return {!proto.ai.inworld.packets.ActionEvent} returns this
*/
proto.ai.inworld.packets.ActionEvent.prototype.setNarratedAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ai.inworld.packets.ActionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.ActionEvent} returns this
 */
proto.ai.inworld.packets.ActionEvent.prototype.clearNarratedAction = function() {
  return this.setNarratedAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.ActionEvent.prototype.hasNarratedAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Playback playback = 2;
 * @return {!proto.ai.inworld.packets.Playback}
 */
proto.ai.inworld.packets.ActionEvent.prototype.getPlayback = function() {
  return /** @type {!proto.ai.inworld.packets.Playback} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.packets.Playback} value
 * @return {!proto.ai.inworld.packets.ActionEvent} returns this
 */
proto.ai.inworld.packets.ActionEvent.prototype.setPlayback = function(value) {
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
proto.ai.inworld.packets.NarratedAction.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.NarratedAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.NarratedAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.NarratedAction.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.NarratedAction}
 */
proto.ai.inworld.packets.NarratedAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.NarratedAction;
  return proto.ai.inworld.packets.NarratedAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.NarratedAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.NarratedAction}
 */
proto.ai.inworld.packets.NarratedAction.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.NarratedAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.NarratedAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.NarratedAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.NarratedAction.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.NarratedAction.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.NarratedAction} returns this
 */
proto.ai.inworld.packets.NarratedAction.prototype.setContent = function(value) {
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
proto.ai.inworld.packets.RelationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.RelationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.RelationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.RelationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    relationState: (f = msg.getRelationState()) && proto.ai.inworld.packets.RelationInfo.RelationAttributes.toObject(includeInstance, f),
    relationUpdate: (f = msg.getRelationUpdate()) && proto.ai.inworld.packets.RelationInfo.RelationAttributes.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.RelationInfo}
 */
proto.ai.inworld.packets.RelationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.RelationInfo;
  return proto.ai.inworld.packets.RelationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.RelationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.RelationInfo}
 */
proto.ai.inworld.packets.RelationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.RelationInfo.RelationAttributes;
      reader.readMessage(value,proto.ai.inworld.packets.RelationInfo.RelationAttributes.deserializeBinaryFromReader);
      msg.setRelationState(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.RelationInfo.RelationAttributes;
      reader.readMessage(value,proto.ai.inworld.packets.RelationInfo.RelationAttributes.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.RelationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.RelationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.RelationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.RelationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelationState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.RelationInfo.RelationAttributes.serializeBinaryToWriter
    );
  }
  f = message.getRelationUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ai.inworld.packets.RelationInfo.RelationAttributes.serializeBinaryToWriter
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
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.RelationInfo.RelationAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.RelationInfo.RelationAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.RelationInfo.RelationAttributes}
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.RelationInfo.RelationAttributes;
  return proto.ai.inworld.packets.RelationInfo.RelationAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.RelationInfo.RelationAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.RelationInfo.RelationAttributes}
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.RelationInfo.RelationAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.RelationInfo.RelationAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.getTrust = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.RelationInfo.RelationAttributes} returns this
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.setTrust = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 respect = 2;
 * @return {number}
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.getRespect = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.RelationInfo.RelationAttributes} returns this
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.setRespect = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 familiar = 3;
 * @return {number}
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.getFamiliar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.RelationInfo.RelationAttributes} returns this
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.setFamiliar = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 flirtatious = 4;
 * @return {number}
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.getFlirtatious = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.RelationInfo.RelationAttributes} returns this
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.setFlirtatious = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 attraction = 5;
 * @return {number}
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.getAttraction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.packets.RelationInfo.RelationAttributes} returns this
 */
proto.ai.inworld.packets.RelationInfo.RelationAttributes.prototype.setAttraction = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional RelationAttributes relation_state = 1;
 * @return {?proto.ai.inworld.packets.RelationInfo.RelationAttributes}
 */
proto.ai.inworld.packets.RelationInfo.prototype.getRelationState = function() {
  return /** @type{?proto.ai.inworld.packets.RelationInfo.RelationAttributes} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.RelationInfo.RelationAttributes, 1));
};


/**
 * @param {?proto.ai.inworld.packets.RelationInfo.RelationAttributes|undefined} value
 * @return {!proto.ai.inworld.packets.RelationInfo} returns this
*/
proto.ai.inworld.packets.RelationInfo.prototype.setRelationState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.RelationInfo} returns this
 */
proto.ai.inworld.packets.RelationInfo.prototype.clearRelationState = function() {
  return this.setRelationState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.RelationInfo.prototype.hasRelationState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RelationAttributes relation_update = 2;
 * @return {?proto.ai.inworld.packets.RelationInfo.RelationAttributes}
 */
proto.ai.inworld.packets.RelationInfo.prototype.getRelationUpdate = function() {
  return /** @type{?proto.ai.inworld.packets.RelationInfo.RelationAttributes} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.RelationInfo.RelationAttributes, 2));
};


/**
 * @param {?proto.ai.inworld.packets.RelationInfo.RelationAttributes|undefined} value
 * @return {!proto.ai.inworld.packets.RelationInfo} returns this
*/
proto.ai.inworld.packets.RelationInfo.prototype.setRelationUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.RelationInfo} returns this
 */
proto.ai.inworld.packets.RelationInfo.prototype.clearRelationUpdate = function() {
  return this.setRelationUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.RelationInfo.prototype.hasRelationUpdate = function() {
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
proto.ai.inworld.packets.LatencyReportEvent.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.LatencyReportEvent.ReportCase = {
  REPORT_NOT_SET: 0,
  PING_PONG: 1,
  PERCEIVED_LATENCY: 2
};

/**
 * @return {proto.ai.inworld.packets.LatencyReportEvent.ReportCase}
 */
proto.ai.inworld.packets.LatencyReportEvent.prototype.getReportCase = function() {
  return /** @type {proto.ai.inworld.packets.LatencyReportEvent.ReportCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.LatencyReportEvent.oneofGroups_[0]));
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
proto.ai.inworld.packets.LatencyReportEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.LatencyReportEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.LatencyReportEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LatencyReportEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    pingPong: (f = msg.getPingPong()) && proto.ai.inworld.packets.PingPongReport.toObject(includeInstance, f),
    perceivedLatency: (f = msg.getPerceivedLatency()) && proto.ai.inworld.packets.PerceivedLatencyReport.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.LatencyReportEvent}
 */
proto.ai.inworld.packets.LatencyReportEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.LatencyReportEvent;
  return proto.ai.inworld.packets.LatencyReportEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.LatencyReportEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.LatencyReportEvent}
 */
proto.ai.inworld.packets.LatencyReportEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.PingPongReport;
      reader.readMessage(value,proto.ai.inworld.packets.PingPongReport.deserializeBinaryFromReader);
      msg.setPingPong(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.PerceivedLatencyReport;
      reader.readMessage(value,proto.ai.inworld.packets.PerceivedLatencyReport.deserializeBinaryFromReader);
      msg.setPerceivedLatency(value);
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
proto.ai.inworld.packets.LatencyReportEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.LatencyReportEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.LatencyReportEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LatencyReportEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPingPong();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.PingPongReport.serializeBinaryToWriter
    );
  }
  f = message.getPerceivedLatency();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ai.inworld.packets.PerceivedLatencyReport.serializeBinaryToWriter
    );
  }
};


/**
 * optional PingPongReport ping_pong = 1;
 * @return {?proto.ai.inworld.packets.PingPongReport}
 */
proto.ai.inworld.packets.LatencyReportEvent.prototype.getPingPong = function() {
  return /** @type{?proto.ai.inworld.packets.PingPongReport} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.PingPongReport, 1));
};


/**
 * @param {?proto.ai.inworld.packets.PingPongReport|undefined} value
 * @return {!proto.ai.inworld.packets.LatencyReportEvent} returns this
*/
proto.ai.inworld.packets.LatencyReportEvent.prototype.setPingPong = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ai.inworld.packets.LatencyReportEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.LatencyReportEvent} returns this
 */
proto.ai.inworld.packets.LatencyReportEvent.prototype.clearPingPong = function() {
  return this.setPingPong(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.LatencyReportEvent.prototype.hasPingPong = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PerceivedLatencyReport perceived_latency = 2;
 * @return {?proto.ai.inworld.packets.PerceivedLatencyReport}
 */
proto.ai.inworld.packets.LatencyReportEvent.prototype.getPerceivedLatency = function() {
  return /** @type{?proto.ai.inworld.packets.PerceivedLatencyReport} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.PerceivedLatencyReport, 2));
};


/**
 * @param {?proto.ai.inworld.packets.PerceivedLatencyReport|undefined} value
 * @return {!proto.ai.inworld.packets.LatencyReportEvent} returns this
*/
proto.ai.inworld.packets.LatencyReportEvent.prototype.setPerceivedLatency = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ai.inworld.packets.LatencyReportEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.LatencyReportEvent} returns this
 */
proto.ai.inworld.packets.LatencyReportEvent.prototype.clearPerceivedLatency = function() {
  return this.setPerceivedLatency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.LatencyReportEvent.prototype.hasPerceivedLatency = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ai.inworld.packets.PingPongReport.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.PingPongReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.PingPongReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.PingPongReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pingPacketId: (f = msg.getPingPacketId()) && proto.ai.inworld.packets.PacketId.toObject(includeInstance, f),
    pingTimestamp: (f = msg.getPingTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.PingPongReport}
 */
proto.ai.inworld.packets.PingPongReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.PingPongReport;
  return proto.ai.inworld.packets.PingPongReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.PingPongReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.PingPongReport}
 */
proto.ai.inworld.packets.PingPongReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ai.inworld.packets.PingPongReport.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.PacketId;
      reader.readMessage(value,proto.ai.inworld.packets.PacketId.deserializeBinaryFromReader);
      msg.setPingPacketId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPingTimestamp(value);
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
proto.ai.inworld.packets.PingPongReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.PingPongReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.PingPongReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.PingPongReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPingPacketId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ai.inworld.packets.PacketId.serializeBinaryToWriter
    );
  }
  f = message.getPingTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ai.inworld.packets.PingPongReport.Type = {
  UNSPECIFIED: 0,
  PING: 1,
  PONG: 2
};

/**
 * optional Type type = 1;
 * @return {!proto.ai.inworld.packets.PingPongReport.Type}
 */
proto.ai.inworld.packets.PingPongReport.prototype.getType = function() {
  return /** @type {!proto.ai.inworld.packets.PingPongReport.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ai.inworld.packets.PingPongReport.Type} value
 * @return {!proto.ai.inworld.packets.PingPongReport} returns this
 */
proto.ai.inworld.packets.PingPongReport.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional PacketId ping_packet_id = 2;
 * @return {?proto.ai.inworld.packets.PacketId}
 */
proto.ai.inworld.packets.PingPongReport.prototype.getPingPacketId = function() {
  return /** @type{?proto.ai.inworld.packets.PacketId} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.PacketId, 2));
};


/**
 * @param {?proto.ai.inworld.packets.PacketId|undefined} value
 * @return {!proto.ai.inworld.packets.PingPongReport} returns this
*/
proto.ai.inworld.packets.PingPongReport.prototype.setPingPacketId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.PingPongReport} returns this
 */
proto.ai.inworld.packets.PingPongReport.prototype.clearPingPacketId = function() {
  return this.setPingPacketId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.PingPongReport.prototype.hasPingPacketId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp ping_timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ai.inworld.packets.PingPongReport.prototype.getPingTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ai.inworld.packets.PingPongReport} returns this
*/
proto.ai.inworld.packets.PingPongReport.prototype.setPingTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.PingPongReport} returns this
 */
proto.ai.inworld.packets.PingPongReport.prototype.clearPingTimestamp = function() {
  return this.setPingTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.PingPongReport.prototype.hasPingTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ai.inworld.packets.PerceivedLatencyReport.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.PerceivedLatencyReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.PerceivedLatencyReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.PerceivedLatencyReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    precision: jspb.Message.getFieldWithDefault(msg, 1, 0),
    latency: (f = msg.getLatency()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.PerceivedLatencyReport}
 */
proto.ai.inworld.packets.PerceivedLatencyReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.PerceivedLatencyReport;
  return proto.ai.inworld.packets.PerceivedLatencyReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.PerceivedLatencyReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.PerceivedLatencyReport}
 */
proto.ai.inworld.packets.PerceivedLatencyReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ai.inworld.packets.PerceivedLatencyReport.Precision} */ (reader.readEnum());
      msg.setPrecision(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLatency(value);
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
proto.ai.inworld.packets.PerceivedLatencyReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.PerceivedLatencyReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.PerceivedLatencyReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.PerceivedLatencyReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrecision();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLatency();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ai.inworld.packets.PerceivedLatencyReport.Precision = {
  UNSPECIFIED: 0,
  FINE: 1,
  ESTIMATED: 2,
  PUSH_TO_TALK: 3,
  NON_SPEECH: 4
};

/**
 * optional Precision precision = 1;
 * @return {!proto.ai.inworld.packets.PerceivedLatencyReport.Precision}
 */
proto.ai.inworld.packets.PerceivedLatencyReport.prototype.getPrecision = function() {
  return /** @type {!proto.ai.inworld.packets.PerceivedLatencyReport.Precision} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ai.inworld.packets.PerceivedLatencyReport.Precision} value
 * @return {!proto.ai.inworld.packets.PerceivedLatencyReport} returns this
 */
proto.ai.inworld.packets.PerceivedLatencyReport.prototype.setPrecision = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Duration latency = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.ai.inworld.packets.PerceivedLatencyReport.prototype.getLatency = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.ai.inworld.packets.PerceivedLatencyReport} returns this
*/
proto.ai.inworld.packets.PerceivedLatencyReport.prototype.setLatency = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.PerceivedLatencyReport} returns this
 */
proto.ai.inworld.packets.PerceivedLatencyReport.prototype.clearLatency = function() {
  return this.setLatency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.PerceivedLatencyReport.prototype.hasLatency = function() {
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
proto.ai.inworld.packets.MutationEvent.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.MutationEvent.MutationCase = {
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
 * @return {proto.ai.inworld.packets.MutationEvent.MutationCase}
 */
proto.ai.inworld.packets.MutationEvent.prototype.getMutationCase = function() {
  return /** @type {proto.ai.inworld.packets.MutationEvent.MutationCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.MutationEvent.oneofGroups_[0]));
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
proto.ai.inworld.packets.MutationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.MutationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.MutationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.MutationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    cancelResponses: (f = msg.getCancelResponses()) && proto.ai.inworld.packets.CancelResponses.toObject(includeInstance, f),
    regenerateResponse: (f = msg.getRegenerateResponse()) && proto.ai.inworld.packets.RegenerateResponse.toObject(includeInstance, f),
    applyResponse: (f = msg.getApplyResponse()) && proto.ai.inworld.packets.ApplyResponse.toObject(includeInstance, f),
    loadScene: (f = msg.getLoadScene()) && proto.ai.inworld.packets.LoadScene.toObject(includeInstance, f),
    modifyExactResponse: (f = msg.getModifyExactResponse()) && proto.ai.inworld.packets.ModifyExactResponse.toObject(includeInstance, f),
    loadCharacters: (f = msg.getLoadCharacters()) && proto.ai.inworld.packets.LoadCharacters.toObject(includeInstance, f),
    unloadCharacters: (f = msg.getUnloadCharacters()) && proto.ai.inworld.packets.UnloadCharacters.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.MutationEvent}
 */
proto.ai.inworld.packets.MutationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.MutationEvent;
  return proto.ai.inworld.packets.MutationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.MutationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.MutationEvent}
 */
proto.ai.inworld.packets.MutationEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.CancelResponses;
      reader.readMessage(value,proto.ai.inworld.packets.CancelResponses.deserializeBinaryFromReader);
      msg.setCancelResponses(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.RegenerateResponse;
      reader.readMessage(value,proto.ai.inworld.packets.RegenerateResponse.deserializeBinaryFromReader);
      msg.setRegenerateResponse(value);
      break;
    case 3:
      var value = new proto.ai.inworld.packets.ApplyResponse;
      reader.readMessage(value,proto.ai.inworld.packets.ApplyResponse.deserializeBinaryFromReader);
      msg.setApplyResponse(value);
      break;
    case 4:
      var value = new proto.ai.inworld.packets.LoadScene;
      reader.readMessage(value,proto.ai.inworld.packets.LoadScene.deserializeBinaryFromReader);
      msg.setLoadScene(value);
      break;
    case 5:
      var value = new proto.ai.inworld.packets.ModifyExactResponse;
      reader.readMessage(value,proto.ai.inworld.packets.ModifyExactResponse.deserializeBinaryFromReader);
      msg.setModifyExactResponse(value);
      break;
    case 6:
      var value = new proto.ai.inworld.packets.LoadCharacters;
      reader.readMessage(value,proto.ai.inworld.packets.LoadCharacters.deserializeBinaryFromReader);
      msg.setLoadCharacters(value);
      break;
    case 7:
      var value = new proto.ai.inworld.packets.UnloadCharacters;
      reader.readMessage(value,proto.ai.inworld.packets.UnloadCharacters.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.MutationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.MutationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.MutationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.MutationEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCancelResponses();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.CancelResponses.serializeBinaryToWriter
    );
  }
  f = message.getRegenerateResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ai.inworld.packets.RegenerateResponse.serializeBinaryToWriter
    );
  }
  f = message.getApplyResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ai.inworld.packets.ApplyResponse.serializeBinaryToWriter
    );
  }
  f = message.getLoadScene();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ai.inworld.packets.LoadScene.serializeBinaryToWriter
    );
  }
  f = message.getModifyExactResponse();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ai.inworld.packets.ModifyExactResponse.serializeBinaryToWriter
    );
  }
  f = message.getLoadCharacters();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ai.inworld.packets.LoadCharacters.serializeBinaryToWriter
    );
  }
  f = message.getUnloadCharacters();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ai.inworld.packets.UnloadCharacters.serializeBinaryToWriter
    );
  }
};


/**
 * optional CancelResponses cancel_responses = 1;
 * @return {?proto.ai.inworld.packets.CancelResponses}
 */
proto.ai.inworld.packets.MutationEvent.prototype.getCancelResponses = function() {
  return /** @type{?proto.ai.inworld.packets.CancelResponses} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.CancelResponses, 1));
};


/**
 * @param {?proto.ai.inworld.packets.CancelResponses|undefined} value
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
*/
proto.ai.inworld.packets.MutationEvent.prototype.setCancelResponses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ai.inworld.packets.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
 */
proto.ai.inworld.packets.MutationEvent.prototype.clearCancelResponses = function() {
  return this.setCancelResponses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.MutationEvent.prototype.hasCancelResponses = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RegenerateResponse regenerate_response = 2;
 * @return {?proto.ai.inworld.packets.RegenerateResponse}
 */
proto.ai.inworld.packets.MutationEvent.prototype.getRegenerateResponse = function() {
  return /** @type{?proto.ai.inworld.packets.RegenerateResponse} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.RegenerateResponse, 2));
};


/**
 * @param {?proto.ai.inworld.packets.RegenerateResponse|undefined} value
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
*/
proto.ai.inworld.packets.MutationEvent.prototype.setRegenerateResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ai.inworld.packets.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
 */
proto.ai.inworld.packets.MutationEvent.prototype.clearRegenerateResponse = function() {
  return this.setRegenerateResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.MutationEvent.prototype.hasRegenerateResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ApplyResponse apply_response = 3;
 * @return {?proto.ai.inworld.packets.ApplyResponse}
 */
proto.ai.inworld.packets.MutationEvent.prototype.getApplyResponse = function() {
  return /** @type{?proto.ai.inworld.packets.ApplyResponse} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.ApplyResponse, 3));
};


/**
 * @param {?proto.ai.inworld.packets.ApplyResponse|undefined} value
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
*/
proto.ai.inworld.packets.MutationEvent.prototype.setApplyResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ai.inworld.packets.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
 */
proto.ai.inworld.packets.MutationEvent.prototype.clearApplyResponse = function() {
  return this.setApplyResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.MutationEvent.prototype.hasApplyResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LoadScene load_scene = 4;
 * @return {?proto.ai.inworld.packets.LoadScene}
 */
proto.ai.inworld.packets.MutationEvent.prototype.getLoadScene = function() {
  return /** @type{?proto.ai.inworld.packets.LoadScene} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.LoadScene, 4));
};


/**
 * @param {?proto.ai.inworld.packets.LoadScene|undefined} value
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
*/
proto.ai.inworld.packets.MutationEvent.prototype.setLoadScene = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ai.inworld.packets.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
 */
proto.ai.inworld.packets.MutationEvent.prototype.clearLoadScene = function() {
  return this.setLoadScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.MutationEvent.prototype.hasLoadScene = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ModifyExactResponse modify_exact_response = 5;
 * @return {?proto.ai.inworld.packets.ModifyExactResponse}
 */
proto.ai.inworld.packets.MutationEvent.prototype.getModifyExactResponse = function() {
  return /** @type{?proto.ai.inworld.packets.ModifyExactResponse} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.ModifyExactResponse, 5));
};


/**
 * @param {?proto.ai.inworld.packets.ModifyExactResponse|undefined} value
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
*/
proto.ai.inworld.packets.MutationEvent.prototype.setModifyExactResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ai.inworld.packets.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
 */
proto.ai.inworld.packets.MutationEvent.prototype.clearModifyExactResponse = function() {
  return this.setModifyExactResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.MutationEvent.prototype.hasModifyExactResponse = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LoadCharacters load_characters = 6;
 * @return {?proto.ai.inworld.packets.LoadCharacters}
 */
proto.ai.inworld.packets.MutationEvent.prototype.getLoadCharacters = function() {
  return /** @type{?proto.ai.inworld.packets.LoadCharacters} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.LoadCharacters, 6));
};


/**
 * @param {?proto.ai.inworld.packets.LoadCharacters|undefined} value
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
*/
proto.ai.inworld.packets.MutationEvent.prototype.setLoadCharacters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ai.inworld.packets.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
 */
proto.ai.inworld.packets.MutationEvent.prototype.clearLoadCharacters = function() {
  return this.setLoadCharacters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.MutationEvent.prototype.hasLoadCharacters = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional UnloadCharacters unload_characters = 7;
 * @return {?proto.ai.inworld.packets.UnloadCharacters}
 */
proto.ai.inworld.packets.MutationEvent.prototype.getUnloadCharacters = function() {
  return /** @type{?proto.ai.inworld.packets.UnloadCharacters} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.UnloadCharacters, 7));
};


/**
 * @param {?proto.ai.inworld.packets.UnloadCharacters|undefined} value
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
*/
proto.ai.inworld.packets.MutationEvent.prototype.setUnloadCharacters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ai.inworld.packets.MutationEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.MutationEvent} returns this
 */
proto.ai.inworld.packets.MutationEvent.prototype.clearUnloadCharacters = function() {
  return this.setUnloadCharacters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.MutationEvent.prototype.hasUnloadCharacters = function() {
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
proto.ai.inworld.packets.SessionControlResponseEvent.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  LOADED_SCENE: 1,
  LOADED_CHARACTERS: 2,
  SESSION_HISTORY: 3
};

/**
 * @return {proto.ai.inworld.packets.SessionControlResponseEvent.ResponseCase}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.getResponseCase = function() {
  return /** @type {proto.ai.inworld.packets.SessionControlResponseEvent.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.SessionControlResponseEvent.oneofGroups_[0]));
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
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.SessionControlResponseEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.SessionControlResponseEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionControlResponseEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadedScene: (f = msg.getLoadedScene()) && proto.ai.inworld.packets.LoadedScene.toObject(includeInstance, f),
    loadedCharacters: (f = msg.getLoadedCharacters()) && proto.ai.inworld.packets.LoadedCharacters.toObject(includeInstance, f),
    sessionHistory: (f = msg.getSessionHistory()) && proto.ai.inworld.packets.SessionHistoryResponse.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.SessionControlResponseEvent}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.SessionControlResponseEvent;
  return proto.ai.inworld.packets.SessionControlResponseEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.SessionControlResponseEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.SessionControlResponseEvent}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.LoadedScene;
      reader.readMessage(value,proto.ai.inworld.packets.LoadedScene.deserializeBinaryFromReader);
      msg.setLoadedScene(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.LoadedCharacters;
      reader.readMessage(value,proto.ai.inworld.packets.LoadedCharacters.deserializeBinaryFromReader);
      msg.setLoadedCharacters(value);
      break;
    case 3:
      var value = new proto.ai.inworld.packets.SessionHistoryResponse;
      reader.readMessage(value,proto.ai.inworld.packets.SessionHistoryResponse.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.SessionControlResponseEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.SessionControlResponseEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionControlResponseEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadedScene();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.LoadedScene.serializeBinaryToWriter
    );
  }
  f = message.getLoadedCharacters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ai.inworld.packets.LoadedCharacters.serializeBinaryToWriter
    );
  }
  f = message.getSessionHistory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ai.inworld.packets.SessionHistoryResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional LoadedScene loaded_scene = 1;
 * @return {?proto.ai.inworld.packets.LoadedScene}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.getLoadedScene = function() {
  return /** @type{?proto.ai.inworld.packets.LoadedScene} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.LoadedScene, 1));
};


/**
 * @param {?proto.ai.inworld.packets.LoadedScene|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlResponseEvent} returns this
*/
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.setLoadedScene = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ai.inworld.packets.SessionControlResponseEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlResponseEvent} returns this
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.clearLoadedScene = function() {
  return this.setLoadedScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.hasLoadedScene = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LoadedCharacters loaded_characters = 2;
 * @return {?proto.ai.inworld.packets.LoadedCharacters}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.getLoadedCharacters = function() {
  return /** @type{?proto.ai.inworld.packets.LoadedCharacters} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.LoadedCharacters, 2));
};


/**
 * @param {?proto.ai.inworld.packets.LoadedCharacters|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlResponseEvent} returns this
*/
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.setLoadedCharacters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ai.inworld.packets.SessionControlResponseEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlResponseEvent} returns this
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.clearLoadedCharacters = function() {
  return this.setLoadedCharacters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.hasLoadedCharacters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SessionHistoryResponse session_history = 3;
 * @return {?proto.ai.inworld.packets.SessionHistoryResponse}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.getSessionHistory = function() {
  return /** @type{?proto.ai.inworld.packets.SessionHistoryResponse} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.SessionHistoryResponse, 3));
};


/**
 * @param {?proto.ai.inworld.packets.SessionHistoryResponse|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlResponseEvent} returns this
*/
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.setSessionHistory = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ai.inworld.packets.SessionControlResponseEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlResponseEvent} returns this
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.clearSessionHistory = function() {
  return this.setSessionHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlResponseEvent.prototype.hasSessionHistory = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.CancelResponses.repeatedFields_ = [2];



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
proto.ai.inworld.packets.CancelResponses.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.CancelResponses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.CancelResponses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CancelResponses.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.CancelResponses}
 */
proto.ai.inworld.packets.CancelResponses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.CancelResponses;
  return proto.ai.inworld.packets.CancelResponses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.CancelResponses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.CancelResponses}
 */
proto.ai.inworld.packets.CancelResponses.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.CancelResponses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.CancelResponses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.CancelResponses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CancelResponses.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.CancelResponses.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.CancelResponses} returns this
 */
proto.ai.inworld.packets.CancelResponses.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string utterance_id = 2;
 * @return {!Array<string>}
 */
proto.ai.inworld.packets.CancelResponses.prototype.getUtteranceIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ai.inworld.packets.CancelResponses} returns this
 */
proto.ai.inworld.packets.CancelResponses.prototype.setUtteranceIdList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.CancelResponses} returns this
 */
proto.ai.inworld.packets.CancelResponses.prototype.addUtteranceId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.CancelResponses} returns this
 */
proto.ai.inworld.packets.CancelResponses.prototype.clearUtteranceIdList = function() {
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
proto.ai.inworld.packets.RegenerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.RegenerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.RegenerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.RegenerateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.RegenerateResponse}
 */
proto.ai.inworld.packets.RegenerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.RegenerateResponse;
  return proto.ai.inworld.packets.RegenerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.RegenerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.RegenerateResponse}
 */
proto.ai.inworld.packets.RegenerateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.RegenerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.RegenerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.RegenerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.RegenerateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.RegenerateResponse.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.RegenerateResponse} returns this
 */
proto.ai.inworld.packets.RegenerateResponse.prototype.setInteractionId = function(value) {
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
proto.ai.inworld.packets.ApplyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.ApplyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.ApplyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ApplyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetId: (f = msg.getPacketId()) && proto.ai.inworld.packets.PacketId.toObject(includeInstance, f),
    applyResponseType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ai.inworld.packets.ApplyResponse}
 */
proto.ai.inworld.packets.ApplyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.ApplyResponse;
  return proto.ai.inworld.packets.ApplyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.ApplyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.ApplyResponse}
 */
proto.ai.inworld.packets.ApplyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.PacketId;
      reader.readMessage(value,proto.ai.inworld.packets.PacketId.deserializeBinaryFromReader);
      msg.setPacketId(value);
      break;
    case 2:
      var value = /** @type {!proto.ai.inworld.packets.ApplyResponse.ApplyResponseType} */ (reader.readEnum());
      msg.setApplyResponseType(value);
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
proto.ai.inworld.packets.ApplyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.ApplyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.ApplyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ApplyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacketId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.PacketId.serializeBinaryToWriter
    );
  }
  f = message.getApplyResponseType();
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
proto.ai.inworld.packets.ApplyResponse.ApplyResponseType = {
  APPLY_RESPONSE_TYPE_DEFAULT: 0,
  APPLY_RESPONSE_TYPE_COMMIT: 1
};

/**
 * optional PacketId packet_id = 1;
 * @return {?proto.ai.inworld.packets.PacketId}
 */
proto.ai.inworld.packets.ApplyResponse.prototype.getPacketId = function() {
  return /** @type{?proto.ai.inworld.packets.PacketId} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.PacketId, 1));
};


/**
 * @param {?proto.ai.inworld.packets.PacketId|undefined} value
 * @return {!proto.ai.inworld.packets.ApplyResponse} returns this
*/
proto.ai.inworld.packets.ApplyResponse.prototype.setPacketId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.ApplyResponse} returns this
 */
proto.ai.inworld.packets.ApplyResponse.prototype.clearPacketId = function() {
  return this.setPacketId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.ApplyResponse.prototype.hasPacketId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ApplyResponseType apply_response_type = 2;
 * @return {!proto.ai.inworld.packets.ApplyResponse.ApplyResponseType}
 */
proto.ai.inworld.packets.ApplyResponse.prototype.getApplyResponseType = function() {
  return /** @type {!proto.ai.inworld.packets.ApplyResponse.ApplyResponseType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.packets.ApplyResponse.ApplyResponseType} value
 * @return {!proto.ai.inworld.packets.ApplyResponse} returns this
 */
proto.ai.inworld.packets.ApplyResponse.prototype.setApplyResponseType = function(value) {
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
proto.ai.inworld.packets.LoadScene.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.LoadScene.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.LoadScene} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadScene.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.LoadScene}
 */
proto.ai.inworld.packets.LoadScene.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.LoadScene;
  return proto.ai.inworld.packets.LoadScene.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.LoadScene} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.LoadScene}
 */
proto.ai.inworld.packets.LoadScene.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.LoadScene.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.LoadScene.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.LoadScene} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadScene.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.LoadScene.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadScene} returns this
 */
proto.ai.inworld.packets.LoadScene.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.LoadedScene.repeatedFields_ = [1];



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
proto.ai.inworld.packets.LoadedScene.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.LoadedScene.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.LoadedScene} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadedScene.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.ai.inworld.packets.Agent.toObject, includeInstance),
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
 * @return {!proto.ai.inworld.packets.LoadedScene}
 */
proto.ai.inworld.packets.LoadedScene.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.LoadedScene;
  return proto.ai.inworld.packets.LoadedScene.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.LoadedScene} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.LoadedScene}
 */
proto.ai.inworld.packets.LoadedScene.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Agent;
      reader.readMessage(value,proto.ai.inworld.packets.Agent.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.LoadedScene.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.LoadedScene.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.LoadedScene} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadedScene.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.Agent.serializeBinaryToWriter
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
 * @return {!Array<!proto.ai.inworld.packets.Agent>}
 */
proto.ai.inworld.packets.LoadedScene.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.Agent, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.Agent>} value
 * @return {!proto.ai.inworld.packets.LoadedScene} returns this
*/
proto.ai.inworld.packets.LoadedScene.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.Agent}
 */
proto.ai.inworld.packets.LoadedScene.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.LoadedScene} returns this
 */
proto.ai.inworld.packets.LoadedScene.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};


/**
 * optional string scene_name = 2;
 * @return {string}
 */
proto.ai.inworld.packets.LoadedScene.prototype.getSceneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadedScene} returns this
 */
proto.ai.inworld.packets.LoadedScene.prototype.setSceneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scene_description = 3;
 * @return {string}
 */
proto.ai.inworld.packets.LoadedScene.prototype.getSceneDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadedScene} returns this
 */
proto.ai.inworld.packets.LoadedScene.prototype.setSceneDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scene_display_name = 4;
 * @return {string}
 */
proto.ai.inworld.packets.LoadedScene.prototype.getSceneDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadedScene} returns this
 */
proto.ai.inworld.packets.LoadedScene.prototype.setSceneDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.LoadCharacters.repeatedFields_ = [1];



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
proto.ai.inworld.packets.LoadCharacters.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.LoadCharacters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.LoadCharacters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadCharacters.toObject = function(includeInstance, msg) {
  var f, obj = {
    nameList: jspb.Message.toObjectList(msg.getNameList(),
    proto.ai.inworld.packets.LoadCharacters.CharacterName.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.LoadCharacters}
 */
proto.ai.inworld.packets.LoadCharacters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.LoadCharacters;
  return proto.ai.inworld.packets.LoadCharacters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.LoadCharacters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.LoadCharacters}
 */
proto.ai.inworld.packets.LoadCharacters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.LoadCharacters.CharacterName;
      reader.readMessage(value,proto.ai.inworld.packets.LoadCharacters.CharacterName.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.LoadCharacters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.LoadCharacters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.LoadCharacters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadCharacters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNameList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.LoadCharacters.CharacterName.serializeBinaryToWriter
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
proto.ai.inworld.packets.LoadCharacters.CharacterName.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.LoadCharacters.CharacterName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.LoadCharacters.CharacterName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadCharacters.CharacterName.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.LoadCharacters.CharacterName}
 */
proto.ai.inworld.packets.LoadCharacters.CharacterName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.LoadCharacters.CharacterName;
  return proto.ai.inworld.packets.LoadCharacters.CharacterName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.LoadCharacters.CharacterName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.LoadCharacters.CharacterName}
 */
proto.ai.inworld.packets.LoadCharacters.CharacterName.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.LoadCharacters.CharacterName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.LoadCharacters.CharacterName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.LoadCharacters.CharacterName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadCharacters.CharacterName.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.LoadCharacters.CharacterName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadCharacters.CharacterName} returns this
 */
proto.ai.inworld.packets.LoadCharacters.CharacterName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ai.inworld.language_codes.LanguageCode language_code = 2;
 * @return {!proto.ai.inworld.language_codes.LanguageCode}
 */
proto.ai.inworld.packets.LoadCharacters.CharacterName.prototype.getLanguageCode = function() {
  return /** @type {!proto.ai.inworld.language_codes.LanguageCode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.language_codes.LanguageCode} value
 * @return {!proto.ai.inworld.packets.LoadCharacters.CharacterName} returns this
 */
proto.ai.inworld.packets.LoadCharacters.CharacterName.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated CharacterName name = 1;
 * @return {!Array<!proto.ai.inworld.packets.LoadCharacters.CharacterName>}
 */
proto.ai.inworld.packets.LoadCharacters.prototype.getNameList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.LoadCharacters.CharacterName>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.LoadCharacters.CharacterName, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.LoadCharacters.CharacterName>} value
 * @return {!proto.ai.inworld.packets.LoadCharacters} returns this
*/
proto.ai.inworld.packets.LoadCharacters.prototype.setNameList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.LoadCharacters.CharacterName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.LoadCharacters.CharacterName}
 */
proto.ai.inworld.packets.LoadCharacters.prototype.addName = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.LoadCharacters.CharacterName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.LoadCharacters} returns this
 */
proto.ai.inworld.packets.LoadCharacters.prototype.clearNameList = function() {
  return this.setNameList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.LoadedCharacters.repeatedFields_ = [1];



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
proto.ai.inworld.packets.LoadedCharacters.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.LoadedCharacters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.LoadedCharacters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadedCharacters.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.ai.inworld.packets.Agent.toObject, includeInstance),
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
 * @return {!proto.ai.inworld.packets.LoadedCharacters}
 */
proto.ai.inworld.packets.LoadedCharacters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.LoadedCharacters;
  return proto.ai.inworld.packets.LoadedCharacters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.LoadedCharacters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.LoadedCharacters}
 */
proto.ai.inworld.packets.LoadedCharacters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Agent;
      reader.readMessage(value,proto.ai.inworld.packets.Agent.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.LoadedCharacters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.LoadedCharacters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.LoadedCharacters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadedCharacters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.Agent.serializeBinaryToWriter
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
 * @return {!Array<!proto.ai.inworld.packets.Agent>}
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.Agent, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.Agent>} value
 * @return {!proto.ai.inworld.packets.LoadedCharacters} returns this
*/
proto.ai.inworld.packets.LoadedCharacters.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.Agent}
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.LoadedCharacters} returns this
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};


/**
 * optional string scene_name = 2;
 * @return {string}
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.getSceneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadedCharacters} returns this
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.setSceneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scene_description = 3;
 * @return {string}
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.getSceneDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadedCharacters} returns this
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.setSceneDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scene_display_name = 4;
 * @return {string}
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.getSceneDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadedCharacters} returns this
 */
proto.ai.inworld.packets.LoadedCharacters.prototype.setSceneDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.UnloadCharacters.repeatedFields_ = [1];



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
proto.ai.inworld.packets.UnloadCharacters.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.UnloadCharacters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.UnloadCharacters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.UnloadCharacters.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.ai.inworld.packets.Agent.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.UnloadCharacters}
 */
proto.ai.inworld.packets.UnloadCharacters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.UnloadCharacters;
  return proto.ai.inworld.packets.UnloadCharacters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.UnloadCharacters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.UnloadCharacters}
 */
proto.ai.inworld.packets.UnloadCharacters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Agent;
      reader.readMessage(value,proto.ai.inworld.packets.Agent.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.UnloadCharacters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.UnloadCharacters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.UnloadCharacters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.UnloadCharacters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.Agent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Agent agents = 1;
 * @return {!Array<!proto.ai.inworld.packets.Agent>}
 */
proto.ai.inworld.packets.UnloadCharacters.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.Agent, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.Agent>} value
 * @return {!proto.ai.inworld.packets.UnloadCharacters} returns this
*/
proto.ai.inworld.packets.UnloadCharacters.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.Agent}
 */
proto.ai.inworld.packets.UnloadCharacters.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.UnloadCharacters} returns this
 */
proto.ai.inworld.packets.UnloadCharacters.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.CurrentSceneStatus.repeatedFields_ = [1];



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
proto.ai.inworld.packets.CurrentSceneStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.CurrentSceneStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.CurrentSceneStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CurrentSceneStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.ai.inworld.packets.Agent.toObject, includeInstance),
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
 * @return {!proto.ai.inworld.packets.CurrentSceneStatus}
 */
proto.ai.inworld.packets.CurrentSceneStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.CurrentSceneStatus;
  return proto.ai.inworld.packets.CurrentSceneStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.CurrentSceneStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.CurrentSceneStatus}
 */
proto.ai.inworld.packets.CurrentSceneStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Agent;
      reader.readMessage(value,proto.ai.inworld.packets.Agent.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.CurrentSceneStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.CurrentSceneStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.CurrentSceneStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.CurrentSceneStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.Agent.serializeBinaryToWriter
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
 * @return {!Array<!proto.ai.inworld.packets.Agent>}
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.Agent, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.Agent>} value
 * @return {!proto.ai.inworld.packets.CurrentSceneStatus} returns this
*/
proto.ai.inworld.packets.CurrentSceneStatus.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.Agent}
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.CurrentSceneStatus} returns this
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};


/**
 * optional string scene_name = 2;
 * @return {string}
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.getSceneName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.CurrentSceneStatus} returns this
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.setSceneName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scene_description = 3;
 * @return {string}
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.getSceneDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.CurrentSceneStatus} returns this
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.setSceneDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scene_display_name = 4;
 * @return {string}
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.getSceneDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.CurrentSceneStatus} returns this
 */
proto.ai.inworld.packets.CurrentSceneStatus.prototype.setSceneDisplayName = function(value) {
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
proto.ai.inworld.packets.ModifyExactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.ModifyExactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.ModifyExactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ModifyExactResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.ModifyExactResponse}
 */
proto.ai.inworld.packets.ModifyExactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.ModifyExactResponse;
  return proto.ai.inworld.packets.ModifyExactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.ModifyExactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.ModifyExactResponse}
 */
proto.ai.inworld.packets.ModifyExactResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.ModifyExactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.ModifyExactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.ModifyExactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ModifyExactResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.ModifyExactResponse.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.ModifyExactResponse} returns this
 */
proto.ai.inworld.packets.ModifyExactResponse.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string exact_text = 2;
 * @return {string}
 */
proto.ai.inworld.packets.ModifyExactResponse.prototype.getExactText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.ModifyExactResponse} returns this
 */
proto.ai.inworld.packets.ModifyExactResponse.prototype.setExactText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.repeatedFields_ = [1];



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
proto.ai.inworld.packets.LoadSceneOutputEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.LoadSceneOutputEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.LoadSceneOutputEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent}
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.LoadSceneOutputEvent;
  return proto.ai.inworld.packets.LoadSceneOutputEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.LoadSceneOutputEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent}
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.LoadSceneOutputEvent.Agent;
      reader.readMessage(value,proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.LoadSceneOutputEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.LoadSceneOutputEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.LoadSceneOutputEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.serializeBinaryToWriter
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
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent}
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.LoadSceneOutputEvent.Agent;
  return proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent}
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.prototype.getAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent} returns this
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.prototype.setAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string brain_name = 2;
 * @return {string}
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.prototype.getBrainName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent} returns this
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.prototype.setBrainName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string given_name = 3;
 * @return {string}
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent} returns this
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.Agent.prototype.setGivenName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Agent agents = 1;
 * @return {!Array<!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent>}
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.LoadSceneOutputEvent.Agent, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent>} value
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent} returns this
*/
proto.ai.inworld.packets.LoadSceneOutputEvent.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent.Agent}
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.LoadSceneOutputEvent.Agent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.LoadSceneOutputEvent} returns this
 */
proto.ai.inworld.packets.LoadSceneOutputEvent.prototype.clearAgentsList = function() {
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
proto.ai.inworld.packets.Agent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.Agent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.Agent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Agent.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    brainName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    givenName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    characterAssets: (f = msg.getCharacterAssets()) && proto.ai.inworld.packets.Agent.CharacterAssets.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.Agent}
 */
proto.ai.inworld.packets.Agent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.Agent;
  return proto.ai.inworld.packets.Agent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.Agent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.Agent}
 */
proto.ai.inworld.packets.Agent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ai.inworld.packets.Agent.CharacterAssets;
      reader.readMessage(value,proto.ai.inworld.packets.Agent.CharacterAssets.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.Agent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.Agent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.Agent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Agent.serializeBinaryToWriter = function(message, writer) {
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
      proto.ai.inworld.packets.Agent.CharacterAssets.serializeBinaryToWriter
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
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.Agent.CharacterAssets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.Agent.CharacterAssets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Agent.CharacterAssets.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.Agent.CharacterAssets}
 */
proto.ai.inworld.packets.Agent.CharacterAssets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.Agent.CharacterAssets;
  return proto.ai.inworld.packets.Agent.CharacterAssets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.Agent.CharacterAssets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.Agent.CharacterAssets}
 */
proto.ai.inworld.packets.Agent.CharacterAssets.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.Agent.CharacterAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.Agent.CharacterAssets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Agent.CharacterAssets.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.getRpmModelUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Agent.CharacterAssets} returns this
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.setRpmModelUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string rpm_image_uri_portrait = 2;
 * @return {string}
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.getRpmImageUriPortrait = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Agent.CharacterAssets} returns this
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.setRpmImageUriPortrait = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string rpm_image_uri_posture = 3;
 * @return {string}
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.getRpmImageUriPosture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Agent.CharacterAssets} returns this
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.setRpmImageUriPosture = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avatar_img = 4;
 * @return {string}
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.getAvatarImg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Agent.CharacterAssets} returns this
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.setAvatarImg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string avatar_img_original = 5;
 * @return {string}
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.getAvatarImgOriginal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Agent.CharacterAssets} returns this
 */
proto.ai.inworld.packets.Agent.CharacterAssets.prototype.setAvatarImgOriginal = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string agent_id = 1;
 * @return {string}
 */
proto.ai.inworld.packets.Agent.prototype.getAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Agent} returns this
 */
proto.ai.inworld.packets.Agent.prototype.setAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string brain_name = 2;
 * @return {string}
 */
proto.ai.inworld.packets.Agent.prototype.getBrainName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Agent} returns this
 */
proto.ai.inworld.packets.Agent.prototype.setBrainName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string given_name = 3;
 * @return {string}
 */
proto.ai.inworld.packets.Agent.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Agent} returns this
 */
proto.ai.inworld.packets.Agent.prototype.setGivenName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CharacterAssets character_assets = 4;
 * @return {?proto.ai.inworld.packets.Agent.CharacterAssets}
 */
proto.ai.inworld.packets.Agent.prototype.getCharacterAssets = function() {
  return /** @type{?proto.ai.inworld.packets.Agent.CharacterAssets} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Agent.CharacterAssets, 4));
};


/**
 * @param {?proto.ai.inworld.packets.Agent.CharacterAssets|undefined} value
 * @return {!proto.ai.inworld.packets.Agent} returns this
*/
proto.ai.inworld.packets.Agent.prototype.setCharacterAssets = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.Agent} returns this
 */
proto.ai.inworld.packets.Agent.prototype.clearCharacterAssets = function() {
  return this.setCharacterAssets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.Agent.prototype.hasCharacterAssets = function() {
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
proto.ai.inworld.packets.DebugInfoEvent.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.DebugInfoEvent.InfoCase = {
  INFO_NOT_SET: 0,
  RELATION: 1
};

/**
 * @return {proto.ai.inworld.packets.DebugInfoEvent.InfoCase}
 */
proto.ai.inworld.packets.DebugInfoEvent.prototype.getInfoCase = function() {
  return /** @type {proto.ai.inworld.packets.DebugInfoEvent.InfoCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.DebugInfoEvent.oneofGroups_[0]));
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
proto.ai.inworld.packets.DebugInfoEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.DebugInfoEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.DebugInfoEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.DebugInfoEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    relation: (f = msg.getRelation()) && proto.ai.inworld.packets.RelationInfo.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.DebugInfoEvent}
 */
proto.ai.inworld.packets.DebugInfoEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.DebugInfoEvent;
  return proto.ai.inworld.packets.DebugInfoEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.DebugInfoEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.DebugInfoEvent}
 */
proto.ai.inworld.packets.DebugInfoEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.RelationInfo;
      reader.readMessage(value,proto.ai.inworld.packets.RelationInfo.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.DebugInfoEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.DebugInfoEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.DebugInfoEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.DebugInfoEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.RelationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional RelationInfo relation = 1;
 * @return {?proto.ai.inworld.packets.RelationInfo}
 */
proto.ai.inworld.packets.DebugInfoEvent.prototype.getRelation = function() {
  return /** @type{?proto.ai.inworld.packets.RelationInfo} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.RelationInfo, 1));
};


/**
 * @param {?proto.ai.inworld.packets.RelationInfo|undefined} value
 * @return {!proto.ai.inworld.packets.DebugInfoEvent} returns this
*/
proto.ai.inworld.packets.DebugInfoEvent.prototype.setRelation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ai.inworld.packets.DebugInfoEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.DebugInfoEvent} returns this
 */
proto.ai.inworld.packets.DebugInfoEvent.prototype.clearRelation = function() {
  return this.setRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.DebugInfoEvent.prototype.hasRelation = function() {
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
proto.ai.inworld.packets.SessionControlEvent.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.ai.inworld.packets.SessionControlEvent.SessionControlCase = {
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
 * @return {proto.ai.inworld.packets.SessionControlEvent.SessionControlCase}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.getSessionControlCase = function() {
  return /** @type {proto.ai.inworld.packets.SessionControlEvent.SessionControlCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_[0]));
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
proto.ai.inworld.packets.SessionControlEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.SessionControlEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.SessionControlEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionControlEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionConfiguration: (f = msg.getSessionConfiguration()) && ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.toObject(includeInstance, f),
    userConfiguration: (f = msg.getUserConfiguration()) && ai_inworld_engine_configuration_configuration_pb.UserConfiguration.toObject(includeInstance, f),
    clientConfiguration: (f = msg.getClientConfiguration()) && ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.toObject(includeInstance, f),
    capabilitiesConfiguration: (f = msg.getCapabilitiesConfiguration()) && ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.toObject(includeInstance, f),
    continuation: (f = msg.getContinuation()) && proto.ai.inworld.packets.Continuation.toObject(includeInstance, f),
    sessionHistoryRequest: (f = msg.getSessionHistoryRequest()) && proto.ai.inworld.packets.SessionHistoryRequest.toObject(includeInstance, f),
    sessionConfigurationPayload: (f = msg.getSessionConfigurationPayload()) && proto.ai.inworld.packets.SessionConfigurationPayload.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.SessionControlEvent}
 */
proto.ai.inworld.packets.SessionControlEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.SessionControlEvent;
  return proto.ai.inworld.packets.SessionControlEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.SessionControlEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.SessionControlEvent}
 */
proto.ai.inworld.packets.SessionControlEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ai.inworld.packets.Continuation;
      reader.readMessage(value,proto.ai.inworld.packets.Continuation.deserializeBinaryFromReader);
      msg.setContinuation(value);
      break;
    case 6:
      var value = new proto.ai.inworld.packets.SessionHistoryRequest;
      reader.readMessage(value,proto.ai.inworld.packets.SessionHistoryRequest.deserializeBinaryFromReader);
      msg.setSessionHistoryRequest(value);
      break;
    case 7:
      var value = new proto.ai.inworld.packets.SessionConfigurationPayload;
      reader.readMessage(value,proto.ai.inworld.packets.SessionConfigurationPayload.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.SessionControlEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.SessionControlEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.SessionControlEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionControlEvent.serializeBinaryToWriter = function(message, writer) {
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
      proto.ai.inworld.packets.Continuation.serializeBinaryToWriter
    );
  }
  f = message.getSessionHistoryRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ai.inworld.packets.SessionHistoryRequest.serializeBinaryToWriter
    );
  }
  f = message.getSessionConfigurationPayload();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ai.inworld.packets.SessionConfigurationPayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional ai.inworld.engine.configuration.SessionConfiguration session_configuration = 1;
 * @return {?proto.ai.inworld.engine.configuration.SessionConfiguration}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.getSessionConfiguration = function() {
  return /** @type{?proto.ai.inworld.engine.configuration.SessionConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.SessionConfiguration, 1));
};


/**
 * @param {?proto.ai.inworld.engine.configuration.SessionConfiguration|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
*/
proto.ai.inworld.packets.SessionControlEvent.prototype.setSessionConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.clearSessionConfiguration = function() {
  return this.setSessionConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.hasSessionConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ai.inworld.engine.configuration.UserConfiguration user_configuration = 2;
 * @return {?proto.ai.inworld.engine.configuration.UserConfiguration}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.getUserConfiguration = function() {
  return /** @type{?proto.ai.inworld.engine.configuration.UserConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.UserConfiguration, 2));
};


/**
 * @param {?proto.ai.inworld.engine.configuration.UserConfiguration|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
*/
proto.ai.inworld.packets.SessionControlEvent.prototype.setUserConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.clearUserConfiguration = function() {
  return this.setUserConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.hasUserConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ai.inworld.engine.configuration.ClientConfiguration client_configuration = 3;
 * @return {?proto.ai.inworld.engine.configuration.ClientConfiguration}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.getClientConfiguration = function() {
  return /** @type{?proto.ai.inworld.engine.configuration.ClientConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.ClientConfiguration, 3));
};


/**
 * @param {?proto.ai.inworld.engine.configuration.ClientConfiguration|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
*/
proto.ai.inworld.packets.SessionControlEvent.prototype.setClientConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.clearClientConfiguration = function() {
  return this.setClientConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.hasClientConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ai.inworld.engine.configuration.CapabilitiesConfiguration capabilities_configuration = 4;
 * @return {?proto.ai.inworld.engine.configuration.CapabilitiesConfiguration}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.getCapabilitiesConfiguration = function() {
  return /** @type{?proto.ai.inworld.engine.configuration.CapabilitiesConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration, 4));
};


/**
 * @param {?proto.ai.inworld.engine.configuration.CapabilitiesConfiguration|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
*/
proto.ai.inworld.packets.SessionControlEvent.prototype.setCapabilitiesConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.clearCapabilitiesConfiguration = function() {
  return this.setCapabilitiesConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.hasCapabilitiesConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Continuation continuation = 5;
 * @return {?proto.ai.inworld.packets.Continuation}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.getContinuation = function() {
  return /** @type{?proto.ai.inworld.packets.Continuation} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Continuation, 5));
};


/**
 * @param {?proto.ai.inworld.packets.Continuation|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
*/
proto.ai.inworld.packets.SessionControlEvent.prototype.setContinuation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.clearContinuation = function() {
  return this.setContinuation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.hasContinuation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SessionHistoryRequest session_history_request = 6;
 * @return {?proto.ai.inworld.packets.SessionHistoryRequest}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.getSessionHistoryRequest = function() {
  return /** @type{?proto.ai.inworld.packets.SessionHistoryRequest} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.SessionHistoryRequest, 6));
};


/**
 * @param {?proto.ai.inworld.packets.SessionHistoryRequest|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
*/
proto.ai.inworld.packets.SessionControlEvent.prototype.setSessionHistoryRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.clearSessionHistoryRequest = function() {
  return this.setSessionHistoryRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.hasSessionHistoryRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SessionConfigurationPayload session_configuration_payload = 7;
 * @return {?proto.ai.inworld.packets.SessionConfigurationPayload}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.getSessionConfigurationPayload = function() {
  return /** @type{?proto.ai.inworld.packets.SessionConfigurationPayload} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.SessionConfigurationPayload, 7));
};


/**
 * @param {?proto.ai.inworld.packets.SessionConfigurationPayload|undefined} value
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
*/
proto.ai.inworld.packets.SessionControlEvent.prototype.setSessionConfigurationPayload = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ai.inworld.packets.SessionControlEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionControlEvent} returns this
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.clearSessionConfigurationPayload = function() {
  return this.setSessionConfigurationPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionControlEvent.prototype.hasSessionConfigurationPayload = function() {
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
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.SessionConfigurationPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.SessionConfigurationPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionConfigurationPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionConfiguration: (f = msg.getSessionConfiguration()) && ai_inworld_engine_configuration_configuration_pb.SessionConfiguration.toObject(includeInstance, f),
    userConfiguration: (f = msg.getUserConfiguration()) && ai_inworld_engine_configuration_configuration_pb.UserConfiguration.toObject(includeInstance, f),
    clientConfiguration: (f = msg.getClientConfiguration()) && ai_inworld_engine_configuration_configuration_pb.ClientConfiguration.toObject(includeInstance, f),
    capabilitiesConfiguration: (f = msg.getCapabilitiesConfiguration()) && ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration.toObject(includeInstance, f),
    continuation: (f = msg.getContinuation()) && proto.ai.inworld.packets.Continuation.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.SessionConfigurationPayload;
  return proto.ai.inworld.packets.SessionConfigurationPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.SessionConfigurationPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ai.inworld.packets.Continuation;
      reader.readMessage(value,proto.ai.inworld.packets.Continuation.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.SessionConfigurationPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.SessionConfigurationPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionConfigurationPayload.serializeBinaryToWriter = function(message, writer) {
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
      proto.ai.inworld.packets.Continuation.serializeBinaryToWriter
    );
  }
};


/**
 * optional ai.inworld.engine.configuration.SessionConfiguration session_configuration = 1;
 * @return {?proto.ai.inworld.engine.configuration.SessionConfiguration}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.getSessionConfiguration = function() {
  return /** @type{?proto.ai.inworld.engine.configuration.SessionConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.SessionConfiguration, 1));
};


/**
 * @param {?proto.ai.inworld.engine.configuration.SessionConfiguration|undefined} value
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
*/
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.setSessionConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.clearSessionConfiguration = function() {
  return this.setSessionConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.hasSessionConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ai.inworld.engine.configuration.UserConfiguration user_configuration = 2;
 * @return {?proto.ai.inworld.engine.configuration.UserConfiguration}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.getUserConfiguration = function() {
  return /** @type{?proto.ai.inworld.engine.configuration.UserConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.UserConfiguration, 2));
};


/**
 * @param {?proto.ai.inworld.engine.configuration.UserConfiguration|undefined} value
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
*/
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.setUserConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.clearUserConfiguration = function() {
  return this.setUserConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.hasUserConfiguration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ai.inworld.engine.configuration.ClientConfiguration client_configuration = 3;
 * @return {?proto.ai.inworld.engine.configuration.ClientConfiguration}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.getClientConfiguration = function() {
  return /** @type{?proto.ai.inworld.engine.configuration.ClientConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.ClientConfiguration, 3));
};


/**
 * @param {?proto.ai.inworld.engine.configuration.ClientConfiguration|undefined} value
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
*/
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.setClientConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.clearClientConfiguration = function() {
  return this.setClientConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.hasClientConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ai.inworld.engine.configuration.CapabilitiesConfiguration capabilities_configuration = 4;
 * @return {?proto.ai.inworld.engine.configuration.CapabilitiesConfiguration}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.getCapabilitiesConfiguration = function() {
  return /** @type{?proto.ai.inworld.engine.configuration.CapabilitiesConfiguration} */ (
    jspb.Message.getWrapperField(this, ai_inworld_engine_configuration_configuration_pb.CapabilitiesConfiguration, 4));
};


/**
 * @param {?proto.ai.inworld.engine.configuration.CapabilitiesConfiguration|undefined} value
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
*/
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.setCapabilitiesConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.clearCapabilitiesConfiguration = function() {
  return this.setCapabilitiesConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.hasCapabilitiesConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Continuation continuation = 5;
 * @return {?proto.ai.inworld.packets.Continuation}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.getContinuation = function() {
  return /** @type{?proto.ai.inworld.packets.Continuation} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Continuation, 5));
};


/**
 * @param {?proto.ai.inworld.packets.Continuation|undefined} value
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
*/
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.setContinuation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionConfigurationPayload} returns this
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.clearContinuation = function() {
  return this.setContinuation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionConfigurationPayload.prototype.hasContinuation = function() {
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
proto.ai.inworld.packets.Continuation.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.Continuation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.Continuation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Continuation.toObject = function(includeInstance, msg) {
  var f, obj = {
    continuationInfo: (f = msg.getContinuationInfo()) && proto.ai.inworld.packets.Continuation.ContinuationInfo.toObject(includeInstance, f),
    continuationType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dialogHistory: (f = msg.getDialogHistory()) && proto.ai.inworld.packets.DialogHistory.toObject(includeInstance, f),
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
 * @return {!proto.ai.inworld.packets.Continuation}
 */
proto.ai.inworld.packets.Continuation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.Continuation;
  return proto.ai.inworld.packets.Continuation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.Continuation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.Continuation}
 */
proto.ai.inworld.packets.Continuation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Continuation.ContinuationInfo;
      reader.readMessage(value,proto.ai.inworld.packets.Continuation.ContinuationInfo.deserializeBinaryFromReader);
      msg.setContinuationInfo(value);
      break;
    case 2:
      var value = /** @type {!proto.ai.inworld.packets.Continuation.ContinuationType} */ (reader.readEnum());
      msg.setContinuationType(value);
      break;
    case 3:
      var value = new proto.ai.inworld.packets.DialogHistory;
      reader.readMessage(value,proto.ai.inworld.packets.DialogHistory.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.Continuation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.Continuation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.Continuation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Continuation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContinuationInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.Continuation.ContinuationInfo.serializeBinaryToWriter
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
      proto.ai.inworld.packets.DialogHistory.serializeBinaryToWriter
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
proto.ai.inworld.packets.Continuation.ContinuationType = {
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
proto.ai.inworld.packets.Continuation.ContinuationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.Continuation.ContinuationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.Continuation.ContinuationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Continuation.ContinuationInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.Continuation.ContinuationInfo}
 */
proto.ai.inworld.packets.Continuation.ContinuationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.Continuation.ContinuationInfo;
  return proto.ai.inworld.packets.Continuation.ContinuationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.Continuation.ContinuationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.Continuation.ContinuationInfo}
 */
proto.ai.inworld.packets.Continuation.ContinuationInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.Continuation.ContinuationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.Continuation.ContinuationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.Continuation.ContinuationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Continuation.ContinuationInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.Continuation.ContinuationInfo.prototype.getPassedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ai.inworld.packets.Continuation.ContinuationInfo} returns this
*/
proto.ai.inworld.packets.Continuation.ContinuationInfo.prototype.setPassedTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.Continuation.ContinuationInfo} returns this
 */
proto.ai.inworld.packets.Continuation.ContinuationInfo.prototype.clearPassedTime = function() {
  return this.setPassedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.Continuation.ContinuationInfo.prototype.hasPassedTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContinuationInfo continuation_info = 1;
 * @return {?proto.ai.inworld.packets.Continuation.ContinuationInfo}
 */
proto.ai.inworld.packets.Continuation.prototype.getContinuationInfo = function() {
  return /** @type{?proto.ai.inworld.packets.Continuation.ContinuationInfo} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Continuation.ContinuationInfo, 1));
};


/**
 * @param {?proto.ai.inworld.packets.Continuation.ContinuationInfo|undefined} value
 * @return {!proto.ai.inworld.packets.Continuation} returns this
*/
proto.ai.inworld.packets.Continuation.prototype.setContinuationInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.Continuation} returns this
 */
proto.ai.inworld.packets.Continuation.prototype.clearContinuationInfo = function() {
  return this.setContinuationInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.Continuation.prototype.hasContinuationInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContinuationType continuation_type = 2;
 * @return {!proto.ai.inworld.packets.Continuation.ContinuationType}
 */
proto.ai.inworld.packets.Continuation.prototype.getContinuationType = function() {
  return /** @type {!proto.ai.inworld.packets.Continuation.ContinuationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.packets.Continuation.ContinuationType} value
 * @return {!proto.ai.inworld.packets.Continuation} returns this
 */
proto.ai.inworld.packets.Continuation.prototype.setContinuationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional DialogHistory dialog_history = 3;
 * @return {?proto.ai.inworld.packets.DialogHistory}
 */
proto.ai.inworld.packets.Continuation.prototype.getDialogHistory = function() {
  return /** @type{?proto.ai.inworld.packets.DialogHistory} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.DialogHistory, 3));
};


/**
 * @param {?proto.ai.inworld.packets.DialogHistory|undefined} value
 * @return {!proto.ai.inworld.packets.Continuation} returns this
*/
proto.ai.inworld.packets.Continuation.prototype.setDialogHistory = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.Continuation} returns this
 */
proto.ai.inworld.packets.Continuation.prototype.clearDialogHistory = function() {
  return this.setDialogHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.Continuation.prototype.hasDialogHistory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes externally_saved_state = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ai.inworld.packets.Continuation.prototype.getExternallySavedState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes externally_saved_state = 4;
 * This is a type-conversion wrapper around `getExternallySavedState()`
 * @return {string}
 */
proto.ai.inworld.packets.Continuation.prototype.getExternallySavedState_asB64 = function() {
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
proto.ai.inworld.packets.Continuation.prototype.getExternallySavedState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExternallySavedState()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ai.inworld.packets.Continuation} returns this
 */
proto.ai.inworld.packets.Continuation.prototype.setExternallySavedState = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.DialogHistory.repeatedFields_ = [1];



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
proto.ai.inworld.packets.DialogHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.DialogHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.DialogHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.DialogHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.ai.inworld.packets.DialogHistory.HistoryItem.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.DialogHistory}
 */
proto.ai.inworld.packets.DialogHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.DialogHistory;
  return proto.ai.inworld.packets.DialogHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.DialogHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.DialogHistory}
 */
proto.ai.inworld.packets.DialogHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.DialogHistory.HistoryItem;
      reader.readMessage(value,proto.ai.inworld.packets.DialogHistory.HistoryItem.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.DialogHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.DialogHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.DialogHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.DialogHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.DialogHistory.HistoryItem.serializeBinaryToWriter
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
proto.ai.inworld.packets.DialogHistory.HistoryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.DialogHistory.HistoryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.DialogHistory.HistoryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    actor: (f = msg.getActor()) && proto.ai.inworld.packets.Actor.toObject(includeInstance, f),
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
 * @return {!proto.ai.inworld.packets.DialogHistory.HistoryItem}
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.DialogHistory.HistoryItem;
  return proto.ai.inworld.packets.DialogHistory.HistoryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.DialogHistory.HistoryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.DialogHistory.HistoryItem}
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Actor;
      reader.readMessage(value,proto.ai.inworld.packets.Actor.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.DialogHistory.HistoryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.DialogHistory.HistoryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.DialogHistory.HistoryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.Actor.serializeBinaryToWriter
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
 * @return {?proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.prototype.getActor = function() {
  return /** @type{?proto.ai.inworld.packets.Actor} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Actor, 1));
};


/**
 * @param {?proto.ai.inworld.packets.Actor|undefined} value
 * @return {!proto.ai.inworld.packets.DialogHistory.HistoryItem} returns this
*/
proto.ai.inworld.packets.DialogHistory.HistoryItem.prototype.setActor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.DialogHistory.HistoryItem} returns this
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.prototype.clearActor = function() {
  return this.setActor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.prototype.hasActor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.DialogHistory.HistoryItem} returns this
 */
proto.ai.inworld.packets.DialogHistory.HistoryItem.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated HistoryItem history = 1;
 * @return {!Array<!proto.ai.inworld.packets.DialogHistory.HistoryItem>}
 */
proto.ai.inworld.packets.DialogHistory.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.DialogHistory.HistoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.DialogHistory.HistoryItem, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.DialogHistory.HistoryItem>} value
 * @return {!proto.ai.inworld.packets.DialogHistory} returns this
*/
proto.ai.inworld.packets.DialogHistory.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.DialogHistory.HistoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.DialogHistory.HistoryItem}
 */
proto.ai.inworld.packets.DialogHistory.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.DialogHistory.HistoryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.DialogHistory} returns this
 */
proto.ai.inworld.packets.DialogHistory.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.Relations.repeatedFields_ = [2];



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
proto.ai.inworld.packets.Relations.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.Relations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.Relations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Relations.toObject = function(includeInstance, msg) {
  var f, obj = {
    actor: (f = msg.getActor()) && proto.ai.inworld.packets.Actor.toObject(includeInstance, f),
    relationsList: jspb.Message.toObjectList(msg.getRelationsList(),
    proto.ai.inworld.packets.Relations.Relation.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.Relations}
 */
proto.ai.inworld.packets.Relations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.Relations;
  return proto.ai.inworld.packets.Relations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.Relations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.Relations}
 */
proto.ai.inworld.packets.Relations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Actor;
      reader.readMessage(value,proto.ai.inworld.packets.Actor.deserializeBinaryFromReader);
      msg.setActor(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.Relations.Relation;
      reader.readMessage(value,proto.ai.inworld.packets.Relations.Relation.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.Relations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.Relations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.Relations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Relations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.Actor.serializeBinaryToWriter
    );
  }
  f = message.getRelationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ai.inworld.packets.Relations.Relation.serializeBinaryToWriter
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
proto.ai.inworld.packets.Relations.Relation.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.Relations.Relation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.Relations.Relation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Relations.Relation.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.Relations.Relation}
 */
proto.ai.inworld.packets.Relations.Relation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.Relations.Relation;
  return proto.ai.inworld.packets.Relations.Relation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.Relations.Relation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.Relations.Relation}
 */
proto.ai.inworld.packets.Relations.Relation.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.Relations.Relation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.Relations.Relation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.Relations.Relation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.Relations.Relation.serializeBinaryToWriter = function(message, writer) {
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
proto.ai.inworld.packets.Relations.Relation.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Relations.Relation} returns this
 */
proto.ai.inworld.packets.Relations.Relation.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.ai.inworld.packets.Relations.Relation.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.packets.Relations.Relation} returns this
 */
proto.ai.inworld.packets.Relations.Relation.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Actor actor = 1;
 * @return {?proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.Relations.prototype.getActor = function() {
  return /** @type{?proto.ai.inworld.packets.Actor} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Actor, 1));
};


/**
 * @param {?proto.ai.inworld.packets.Actor|undefined} value
 * @return {!proto.ai.inworld.packets.Relations} returns this
*/
proto.ai.inworld.packets.Relations.prototype.setActor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.Relations} returns this
 */
proto.ai.inworld.packets.Relations.prototype.clearActor = function() {
  return this.setActor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.Relations.prototype.hasActor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Relation relations = 2;
 * @return {!Array<!proto.ai.inworld.packets.Relations.Relation>}
 */
proto.ai.inworld.packets.Relations.prototype.getRelationsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.Relations.Relation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.Relations.Relation, 2));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.Relations.Relation>} value
 * @return {!proto.ai.inworld.packets.Relations} returns this
*/
proto.ai.inworld.packets.Relations.prototype.setRelationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ai.inworld.packets.Relations.Relation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.Relations.Relation}
 */
proto.ai.inworld.packets.Relations.prototype.addRelations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ai.inworld.packets.Relations.Relation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.Relations} returns this
 */
proto.ai.inworld.packets.Relations.prototype.clearRelationsList = function() {
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
proto.ai.inworld.packets.SessionHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.SessionHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.SessionHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionHistoryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ai.inworld.packets.SessionHistoryRequest}
 */
proto.ai.inworld.packets.SessionHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.SessionHistoryRequest;
  return proto.ai.inworld.packets.SessionHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.SessionHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.SessionHistoryRequest}
 */
proto.ai.inworld.packets.SessionHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ai.inworld.packets.SessionHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.SessionHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.SessionHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.SessionHistoryResponse.repeatedFields_ = [1];



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
proto.ai.inworld.packets.SessionHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.SessionHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.SessionHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionHistoryItemsList: jspb.Message.toObjectList(msg.getSessionHistoryItemsList(),
    proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse}
 */
proto.ai.inworld.packets.SessionHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.SessionHistoryResponse;
  return proto.ai.inworld.packets.SessionHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.SessionHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse}
 */
proto.ai.inworld.packets.SessionHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem;
      reader.readMessage(value,proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.SessionHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.SessionHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.SessionHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionHistoryItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.repeatedFields_ = [2];



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
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    agent: (f = msg.getAgent()) && proto.ai.inworld.packets.Agent.toObject(includeInstance, f),
    packetsList: jspb.Message.toObjectList(msg.getPacketsList(),
    proto.ai.inworld.packets.InworldPacket.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem}
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem;
  return proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem}
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Agent;
      reader.readMessage(value,proto.ai.inworld.packets.Agent.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 2:
      var value = new proto.ai.inworld.packets.InworldPacket;
      reader.readMessage(value,proto.ai.inworld.packets.InworldPacket.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ai.inworld.packets.Agent.serializeBinaryToWriter
    );
  }
  f = message.getPacketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ai.inworld.packets.InworldPacket.serializeBinaryToWriter
    );
  }
};


/**
 * optional Agent agent = 1;
 * @return {?proto.ai.inworld.packets.Agent}
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.getAgent = function() {
  return /** @type{?proto.ai.inworld.packets.Agent} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.packets.Agent, 1));
};


/**
 * @param {?proto.ai.inworld.packets.Agent|undefined} value
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem} returns this
*/
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem} returns this
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated InworldPacket packets = 2;
 * @return {!Array<!proto.ai.inworld.packets.InworldPacket>}
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.getPacketsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.InworldPacket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.InworldPacket, 2));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.InworldPacket>} value
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem} returns this
*/
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.setPacketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ai.inworld.packets.InworldPacket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.InworldPacket}
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.addPackets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ai.inworld.packets.InworldPacket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem} returns this
 */
proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem.prototype.clearPacketsList = function() {
  return this.setPacketsList([]);
};


/**
 * repeated SessionHistoryItem session_history_items = 1;
 * @return {!Array<!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem>}
 */
proto.ai.inworld.packets.SessionHistoryResponse.prototype.getSessionHistoryItemsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem>} value
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse} returns this
*/
proto.ai.inworld.packets.SessionHistoryResponse.prototype.setSessionHistoryItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem}
 */
proto.ai.inworld.packets.SessionHistoryResponse.prototype.addSessionHistoryItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.SessionHistoryResponse.SessionHistoryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.SessionHistoryResponse} returns this
 */
proto.ai.inworld.packets.SessionHistoryResponse.prototype.clearSessionHistoryItemsList = function() {
  return this.setSessionHistoryItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.ConversationUpdatePayload.repeatedFields_ = [1];



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
proto.ai.inworld.packets.ConversationUpdatePayload.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.ConversationUpdatePayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.ConversationUpdatePayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ConversationUpdatePayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantsList: jspb.Message.toObjectList(msg.getParticipantsList(),
    proto.ai.inworld.packets.Actor.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.packets.ConversationUpdatePayload}
 */
proto.ai.inworld.packets.ConversationUpdatePayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.ConversationUpdatePayload;
  return proto.ai.inworld.packets.ConversationUpdatePayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.ConversationUpdatePayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.ConversationUpdatePayload}
 */
proto.ai.inworld.packets.ConversationUpdatePayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Actor;
      reader.readMessage(value,proto.ai.inworld.packets.Actor.deserializeBinaryFromReader);
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
proto.ai.inworld.packets.ConversationUpdatePayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.ConversationUpdatePayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.ConversationUpdatePayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ConversationUpdatePayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.Actor.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Actor participants = 1;
 * @return {!Array<!proto.ai.inworld.packets.Actor>}
 */
proto.ai.inworld.packets.ConversationUpdatePayload.prototype.getParticipantsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.Actor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.Actor, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.Actor>} value
 * @return {!proto.ai.inworld.packets.ConversationUpdatePayload} returns this
*/
proto.ai.inworld.packets.ConversationUpdatePayload.prototype.setParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.Actor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.ConversationUpdatePayload.prototype.addParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.Actor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.ConversationUpdatePayload} returns this
 */
proto.ai.inworld.packets.ConversationUpdatePayload.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.packets.ConversationEventPayload.repeatedFields_ = [1];



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
proto.ai.inworld.packets.ConversationEventPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.ConversationEventPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.ConversationEventPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ConversationEventPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantsList: jspb.Message.toObjectList(msg.getParticipantsList(),
    proto.ai.inworld.packets.Actor.toObject, includeInstance),
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
 * @return {!proto.ai.inworld.packets.ConversationEventPayload}
 */
proto.ai.inworld.packets.ConversationEventPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.ConversationEventPayload;
  return proto.ai.inworld.packets.ConversationEventPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.ConversationEventPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.ConversationEventPayload}
 */
proto.ai.inworld.packets.ConversationEventPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ai.inworld.packets.Actor;
      reader.readMessage(value,proto.ai.inworld.packets.Actor.deserializeBinaryFromReader);
      msg.addParticipants(value);
      break;
    case 2:
      var value = /** @type {!proto.ai.inworld.packets.ConversationEventPayload.ConversationEventType} */ (reader.readEnum());
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
proto.ai.inworld.packets.ConversationEventPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.ConversationEventPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.ConversationEventPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.ConversationEventPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ai.inworld.packets.Actor.serializeBinaryToWriter
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
proto.ai.inworld.packets.ConversationEventPayload.ConversationEventType = {
  UNKNOWN: 0,
  STARTED: 1,
  UPDATED: 2,
  EVICTED: 3
};

/**
 * repeated Actor participants = 1;
 * @return {!Array<!proto.ai.inworld.packets.Actor>}
 */
proto.ai.inworld.packets.ConversationEventPayload.prototype.getParticipantsList = function() {
  return /** @type{!Array<!proto.ai.inworld.packets.Actor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ai.inworld.packets.Actor, 1));
};


/**
 * @param {!Array<!proto.ai.inworld.packets.Actor>} value
 * @return {!proto.ai.inworld.packets.ConversationEventPayload} returns this
*/
proto.ai.inworld.packets.ConversationEventPayload.prototype.setParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ai.inworld.packets.Actor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ai.inworld.packets.Actor}
 */
proto.ai.inworld.packets.ConversationEventPayload.prototype.addParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ai.inworld.packets.Actor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.packets.ConversationEventPayload} returns this
 */
proto.ai.inworld.packets.ConversationEventPayload.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
};


/**
 * optional ConversationEventType event_type = 2;
 * @return {!proto.ai.inworld.packets.ConversationEventPayload.ConversationEventType}
 */
proto.ai.inworld.packets.ConversationEventPayload.prototype.getEventType = function() {
  return /** @type {!proto.ai.inworld.packets.ConversationEventPayload.ConversationEventType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.packets.ConversationEventPayload.ConversationEventType} value
 * @return {!proto.ai.inworld.packets.ConversationEventPayload} returns this
 */
proto.ai.inworld.packets.ConversationEventPayload.prototype.setEventType = function(value) {
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
proto.ai.inworld.packets.OperationStatusEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.packets.OperationStatusEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.packets.OperationStatusEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.OperationStatusEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.packets.OperationStatusEvent}
 */
proto.ai.inworld.packets.OperationStatusEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.packets.OperationStatusEvent;
  return proto.ai.inworld.packets.OperationStatusEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.packets.OperationStatusEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.packets.OperationStatusEvent}
 */
proto.ai.inworld.packets.OperationStatusEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.ai.inworld.packets.OperationStatusEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.packets.OperationStatusEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.packets.OperationStatusEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.packets.OperationStatusEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.rpc.Status status = 1;
 * @return {?proto.google.rpc.Status}
 */
proto.ai.inworld.packets.OperationStatusEvent.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 1));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.ai.inworld.packets.OperationStatusEvent} returns this
*/
proto.ai.inworld.packets.OperationStatusEvent.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.packets.OperationStatusEvent} returns this
 */
proto.ai.inworld.packets.OperationStatusEvent.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.packets.OperationStatusEvent.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.ai.inworld.packets.Playback = {
  UNSPECIFIED: 0,
  INTERACTION: 1,
  INTERACTION_END: 2,
  UTTERANCE: 3
};

goog.object.extend(exports, proto.ai.inworld.packets);
