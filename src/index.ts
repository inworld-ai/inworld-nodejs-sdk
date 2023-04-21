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
  SessionTokenProps,
  User,
} from './common/interfaces';
import { Character } from './entities/character.entity';
import { EmotionBehavior } from './entities/emotion-behavior.entity';
import { EmotionStrength } from './entities/emotion-strength.entity';
import {
  Actor,
  AudioEvent,
  InworlControlType,
  InworldPacket,
  InworldPacketType,
  PacketId,
  Routing,
  TextEvent,
  TriggerParameter,
} from './entities/inworld_packet.entity';
import { Scene } from './entities/scene.entity';
import { Session } from './entities/session.entity';
import { SessionToken } from './entities/session_token.entity';
import { InworldConnectionService } from './services/inworld_connection.service';

const config = Config.getInstance();
const getStudioHost = () => config.getStudioHost();
const getEngineHost = () => config.getEngineHost();

export {
  Actor,
  ApiKey,
  AudioEvent,
  CancelResponsesProps,
  Capabilities,
  Character,
  ClientConfiguration,
  ConnectionConfig,
  EmotionBehavior,
  EmotionStrength,
  getEngineHost,
  getStudioHost,
  InworlControlType,
  InworldClient,
  InworldConnectionService,
  InworldPacket,
  InworldPacketType,
  PacketId,
  Routing,
  Scene,
  ServiceError,
  Session,
  SessionToken,
  SessionTokenProps,
  status,
  TextEvent,
  TriggerParameter,
  User,
};
