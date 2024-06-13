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
  InworlControlAction,
  InworldPacketType,
  SessionTokenProps,
  TriggerParameter,
  User,
  UserProfile,
  UserProfileField,
} from './common/data_structures';
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
import { PacketId } from './entities/packets/packet_id.entity';
import { Actor, Routing } from './entities/packets/routing.entity';
import { TextEvent } from './entities/packets/text.entity';
import { TriggerEvent } from './entities/packets/trigger.entity';
import { Scene } from './entities/scene.entity';
import { Session } from './entities/session.entity';
import { SessionToken } from './entities/session_token.entity';
import { ConversationService } from './services/conversation.service';
import {
  FeedbackDislikeProps,
  FeedbackLikeProps,
} from './services/feedback.service';
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
  ConversationService,
  DialogParticipant,
  DialogPhrase,
  DislikeType,
  EmotionBehavior,
  EmotionBehaviorCode,
  EmotionEvent,
  EmotionStrength,
  EmotionStrengthCode,
  ErrorReconnectionType,
  ErrorResourceType,
  ErrorType,
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
  InworldTriggers,
  PacketId,
  PreviousDialog,
  Routing,
  Scene,
  ServiceError,
  Session,
  SessionContinuation,
  SessionContinuationProps,
  SessionToken,
  SessionTokenProps,
  status,
  TextEvent,
  TriggerEvent,
  TriggerParameter,
  User,
  UserProfile,
  UserProfileField,
};
