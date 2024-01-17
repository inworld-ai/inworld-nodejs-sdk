// source: ai/inworld/language_codes/language_codes.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.ai.inworld.language_codes.LanguageCode', null, global);
goog.exportSymbol('proto.ai.inworld.language_codes.languageCodeString', null, global);
goog.exportSymbol('proto.ai.inworld.language_codes.languageName', null, global);
/**
 * @enum {number}
 */
proto.ai.inworld.language_codes.LanguageCode = {
  LANGUAGE_CODE_UNSPECIFIED: 0,
  EN_US: 1,
  ZH_CN: 2,
  KO_KR: 3,
  JA_JP: 4
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `languageCodeString`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.ai.inworld.language_codes.languageCodeString = new jspb.ExtensionFieldInfo(
    100001,
    {languageCodeString: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[100001] = new jspb.ExtensionFieldBinaryInfo(
    proto.ai.inworld.language_codes.languageCodeString,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[100001] = proto.ai.inworld.language_codes.languageCodeString;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `languageName`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.ai.inworld.language_codes.languageName = new jspb.ExtensionFieldInfo(
    100002,
    {languageName: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[100002] = new jspb.ExtensionFieldBinaryInfo(
    proto.ai.inworld.language_codes.languageName,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[100002] = proto.ai.inworld.language_codes.languageName;

goog.object.extend(exports, proto.ai.inworld.language_codes);
