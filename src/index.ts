/**
 * Copyright 2022 Theai, Inc. (DBA Inworld)
 *
 * Use of this source code is governed by the Inworld.ai Software Development Kit License Agreement
 * that can be found in the LICENSE.md file or at https://www.inworld.ai/sdk-license
 */
const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@proto': `${__dirname}/../proto`,
  '@root': `${__dirname}../../../`,
});

import { ServiceError, status } from '@grpc/grpc-js';

import { InworldClient } from './clients/inworld.client';
import { Config } from './common/config';
import {
  ApiKey,
  CancelResponsesProps,
  Capabilities,
  ClientConfiguration,
  ConnectionConfig,
  ConversationParticipant,
  EntityItemProps,
  InworlControlAction,
  InworldPacketType,
  InworldTextPacketType,
  ItemsInEntitiesOperationType,
  LogsEventLogDetail,
  MicrophoneMode,
  ProtobufValue,
  TaskParameter,
  TriggerParameter,
  UnderstandingMode,
  User,
  UserProfile,
  UserProfileField,
} from './common/data_structures';
import { Extension } from './common/data_structures/extension';
import * as InworldTriggers from './common/inworld_triggers';
import { Character } from './entities/character.entity';
import {
  DialogParticipant,
  DialogPhrase,
  PreviousDialog,
} from './entities/continuation/previous_dialog.entity';
import {
  SessionContinuation,
  SessionContinuationProps,
} from './entities/continuation/session_continuation.entity';
import {
  ErrorReconnectionType,
  ErrorResourceType,
  ErrorType,
  InworldError,
} from './entities/error.entity';
import { DislikeType, Feedback } from './entities/feedback.entity';
import { AudioEvent } from './entities/packets/audio.entity';
import { EmotionEvent } from './entities/packets/emotion/emotion.entity';
import {
  EmotionBehavior,
  EmotionBehaviorCode,
} from './entities/packets/emotion/emotion_behavior.entity';
import {
  EmotionStrength,
  EmotionStrengthCode,
} from './entities/packets/emotion/emotion_strength.entity';
import { InworldPacket } from './entities/packets/inworld_packet.entity';
import { PerceivedLatencyReportPrecisionType } from './entities/packets/latency/perceived_latency_report';
import { LogsEvent } from './entities/packets/log.entity';
import { PacketId } from './entities/packets/packet_id.entity';
import { Actor, Routing } from './entities/packets/routing.entity';
import { TextEvent } from './entities/packets/text.entity';
import { TriggerEvent } from './entities/packets/trigger.entity';
import { Scene } from './entities/scene.entity';
import { Session } from './entities/session.entity';
import {
  SessionToken,
  SessionTokenProps,
} from './entities/session_token.entity';
import { ConversationService } from './services/conversation.service';
import {
  FeedbackDislikeProps,
  FeedbackLikeProps,
} from './services/feedback.service';
import { SessionState } from './services/gprc/state_serialization_client_grpc.service';
import { InworldConnectionService } from './services/inworld_connection.service';

const config = Config.getInstance();
const getHost = () => config.getHost();
const getSSL = () => config.getSSL();

export {
  Actor,
  ApiKey,
  AudioEvent,
  CancelResponsesProps,
  Capabilities,
  Character,
  ClientConfiguration,
  ConnectionConfig,
  ConversationParticipant,
  ConversationService,
  DialogParticipant,
  DialogPhrase,
  DislikeType,
  EmotionBehavior,
  EmotionBehaviorCode,
  EmotionEvent,
  EmotionStrength,
  EmotionStrengthCode,
  EntityItemProps,
  ErrorReconnectionType,
  ErrorResourceType,
  ErrorType,
  Extension,
  Feedback,
  FeedbackDislikeProps,
  FeedbackLikeProps,
  getHost,
  getSSL,
  InworlControlAction,
  InworldClient,
  InworldConnectionService,
  InworldError,
  InworldPacket,
  InworldPacketType,
  InworldTextPacketType,
  InworldTriggers,
  ItemsInEntitiesOperationType,
  LogsEvent,
  LogsEventLogDetail,
  MicrophoneMode,
  PacketId,
  PerceivedLatencyReportPrecisionType,
  PreviousDialog,
  ProtobufValue,
  Routing,
  Scene,
  ServiceError,
  Session,
  SessionContinuation,
  SessionContinuationProps,
  SessionState,
  SessionToken,
  SessionTokenProps,
  status,
  TaskParameter,
  TextEvent,
  TriggerEvent,
  TriggerParameter,
  UnderstandingMode,
  User,
  UserProfile,
  UserProfileField,
};
