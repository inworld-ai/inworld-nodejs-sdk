// source: ai/inworld/common/status.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ai.inworld.common.ErrorType', null, global);
goog.exportSymbol('proto.ai.inworld.common.InworldStatus', null, global);
goog.exportSymbol('proto.ai.inworld.common.InworldStatus.ErrorDetailsCase', null, global);
goog.exportSymbol('proto.ai.inworld.common.ReconnectionType', null, global);
goog.exportSymbol('proto.ai.inworld.common.ResourceNotFoundDetails', null, global);
goog.exportSymbol('proto.ai.inworld.common.ResourceType', null, global);
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
proto.ai.inworld.common.InworldStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.common.InworldStatus.oneofGroups_);
};
goog.inherits(proto.ai.inworld.common.InworldStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.common.InworldStatus.displayName = 'proto.ai.inworld.common.InworldStatus';
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
proto.ai.inworld.common.ResourceNotFoundDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.common.ResourceNotFoundDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.common.ResourceNotFoundDetails.displayName = 'proto.ai.inworld.common.ResourceNotFoundDetails';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ai.inworld.common.InworldStatus.oneofGroups_ = [[5]];

/**
 * @enum {number}
 */
proto.ai.inworld.common.InworldStatus.ErrorDetailsCase = {
  ERROR_DETAILS_NOT_SET: 0,
  RESOURCE_NOT_FOUND: 5
};

/**
 * @return {proto.ai.inworld.common.InworldStatus.ErrorDetailsCase}
 */
proto.ai.inworld.common.InworldStatus.prototype.getErrorDetailsCase = function() {
  return /** @type {proto.ai.inworld.common.InworldStatus.ErrorDetailsCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.common.InworldStatus.oneofGroups_[0]));
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
proto.ai.inworld.common.InworldStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.common.InworldStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.common.InworldStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.common.InworldStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reconnectType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reconnectTime: (f = msg.getReconnectTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    maxRetries: jspb.Message.getFieldWithDefault(msg, 4, 0),
    resourceNotFound: (f = msg.getResourceNotFound()) && proto.ai.inworld.common.ResourceNotFoundDetails.toObject(includeInstance, f)
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
 * @return {!proto.ai.inworld.common.InworldStatus}
 */
proto.ai.inworld.common.InworldStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.common.InworldStatus;
  return proto.ai.inworld.common.InworldStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.common.InworldStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.common.InworldStatus}
 */
proto.ai.inworld.common.InworldStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ai.inworld.common.ErrorType} */ (reader.readEnum());
      msg.setErrorType(value);
      break;
    case 2:
      var value = /** @type {!proto.ai.inworld.common.ReconnectionType} */ (reader.readEnum());
      msg.setReconnectType(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReconnectTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxRetries(value);
      break;
    case 5:
      var value = new proto.ai.inworld.common.ResourceNotFoundDetails;
      reader.readMessage(value,proto.ai.inworld.common.ResourceNotFoundDetails.deserializeBinaryFromReader);
      msg.setResourceNotFound(value);
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
proto.ai.inworld.common.InworldStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.common.InworldStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.common.InworldStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.common.InworldStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReconnectType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReconnectTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMaxRetries();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getResourceNotFound();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ai.inworld.common.ResourceNotFoundDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrorType error_type = 1;
 * @return {!proto.ai.inworld.common.ErrorType}
 */
proto.ai.inworld.common.InworldStatus.prototype.getErrorType = function() {
  return /** @type {!proto.ai.inworld.common.ErrorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ai.inworld.common.ErrorType} value
 * @return {!proto.ai.inworld.common.InworldStatus} returns this
 */
proto.ai.inworld.common.InworldStatus.prototype.setErrorType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ReconnectionType reconnect_type = 2;
 * @return {!proto.ai.inworld.common.ReconnectionType}
 */
proto.ai.inworld.common.InworldStatus.prototype.getReconnectType = function() {
  return /** @type {!proto.ai.inworld.common.ReconnectionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.common.ReconnectionType} value
 * @return {!proto.ai.inworld.common.InworldStatus} returns this
 */
proto.ai.inworld.common.InworldStatus.prototype.setReconnectType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp reconnect_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ai.inworld.common.InworldStatus.prototype.getReconnectTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ai.inworld.common.InworldStatus} returns this
*/
proto.ai.inworld.common.InworldStatus.prototype.setReconnectTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.common.InworldStatus} returns this
 */
proto.ai.inworld.common.InworldStatus.prototype.clearReconnectTime = function() {
  return this.setReconnectTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.common.InworldStatus.prototype.hasReconnectTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 max_retries = 4;
 * @return {number}
 */
proto.ai.inworld.common.InworldStatus.prototype.getMaxRetries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.common.InworldStatus} returns this
 */
proto.ai.inworld.common.InworldStatus.prototype.setMaxRetries = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional ResourceNotFoundDetails resource_not_found = 5;
 * @return {?proto.ai.inworld.common.ResourceNotFoundDetails}
 */
proto.ai.inworld.common.InworldStatus.prototype.getResourceNotFound = function() {
  return /** @type{?proto.ai.inworld.common.ResourceNotFoundDetails} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.common.ResourceNotFoundDetails, 5));
};


/**
 * @param {?proto.ai.inworld.common.ResourceNotFoundDetails|undefined} value
 * @return {!proto.ai.inworld.common.InworldStatus} returns this
*/
proto.ai.inworld.common.InworldStatus.prototype.setResourceNotFound = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ai.inworld.common.InworldStatus.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.common.InworldStatus} returns this
 */
proto.ai.inworld.common.InworldStatus.prototype.clearResourceNotFound = function() {
  return this.setResourceNotFound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.common.InworldStatus.prototype.hasResourceNotFound = function() {
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
proto.ai.inworld.common.ResourceNotFoundDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.common.ResourceNotFoundDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.common.ResourceNotFoundDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.common.ResourceNotFoundDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ai.inworld.common.ResourceNotFoundDetails}
 */
proto.ai.inworld.common.ResourceNotFoundDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.common.ResourceNotFoundDetails;
  return proto.ai.inworld.common.ResourceNotFoundDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.common.ResourceNotFoundDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.common.ResourceNotFoundDetails}
 */
proto.ai.inworld.common.ResourceNotFoundDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 2:
      var value = /** @type {!proto.ai.inworld.common.ResourceType} */ (reader.readEnum());
      msg.setResourceType(value);
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
proto.ai.inworld.common.ResourceNotFoundDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.common.ResourceNotFoundDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.common.ResourceNotFoundDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.common.ResourceNotFoundDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string resource_id = 1;
 * @return {string}
 */
proto.ai.inworld.common.ResourceNotFoundDetails.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.common.ResourceNotFoundDetails} returns this
 */
proto.ai.inworld.common.ResourceNotFoundDetails.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ResourceType resource_type = 2;
 * @return {!proto.ai.inworld.common.ResourceType}
 */
proto.ai.inworld.common.ResourceNotFoundDetails.prototype.getResourceType = function() {
  return /** @type {!proto.ai.inworld.common.ResourceType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.common.ResourceType} value
 * @return {!proto.ai.inworld.common.ResourceNotFoundDetails} returns this
 */
proto.ai.inworld.common.ResourceNotFoundDetails.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.ai.inworld.common.ErrorType = {
  SESSION_TOKEN_EXPIRED: 0,
  SESSION_TOKEN_INVALID: 1,
  SESSION_RESOURCES_EXHAUSTED: 2,
  BILLING_TOKENS_EXHAUSTED: 3,
  ACCOUNT_DISABLED: 4,
  SESSION_INVALID: 5,
  RESOURCE_NOT_FOUND: 6,
  SAFETY_VIOLATION: 7,
  SESSION_EXPIRED: 8,
  AUDIO_SESSION_EXPIRED: 9,
  SESSION_PAUSED: 10
};

/**
 * @enum {number}
 */
proto.ai.inworld.common.ReconnectionType = {
  UNDEFINED: 0,
  NO_RETRY: 1,
  IMMEDIATE: 2,
  TIMEOUT: 3
};

/**
 * @enum {number}
 */
proto.ai.inworld.common.ResourceType = {
  RESOURCE_TYPE_UNDEFINED: 0,
  RESOURCE_TYPE_CONVERSATION: 1
};

goog.object.extend(exports, proto.ai.inworld.common);