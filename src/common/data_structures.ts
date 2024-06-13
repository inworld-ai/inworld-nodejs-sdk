import {
  CapabilitiesConfiguration,
  ClientConfiguration as ControlClientConfiguration,
  SessionConfiguration,
  UserConfiguration,
} from '@proto/ai/inworld/engine/configuration/configuration_pb';
import {
  Continuation,
  CurrentSceneStatus,
  InworldPacket as ProtoPacket,
} from '@proto/ai/inworld/packets/packets_pb';
import { Character } from 'entities/character.entity';

import { SessionContinuationProps } from '../entities/continuation/session_continuation.entity';
import { InworldPacket } from '../entities/packets/inworld_packet.entity';
import { SessionToken } from '../entities/session_token.entity';
import { ConversationService } from '../services/conversation.service';

export interface ApiKey {
  key: string;
  secret: string;
}

export interface Capabilities {
  audio?: boolean;
  debugInfo?: boolean;
  emotions?: boolean;
  interruptions?: boolean;
  narratedActions?: boolean;
  phonemes?: boolean;
  silence?: boolean;
}

export interface UserProfileField {
  id: string;
  value: string;
}

export interface UserProfile {
  fields: UserProfileField[];
}

export interface User {
  fullName?: string;
  profile?: UserProfile;
}

export interface Client {
  id?: string;
}

export interface SessionControlProps {
  capabilities?: CapabilitiesConfiguration;
  sessionConfiguration?: SessionConfiguration;
  userConfiguration?: UserConfiguration;
  clientConfiguration?: ControlClientConfiguration;
  continuation?: Continuation;
}

export interface ConnectionConfig {
  autoReconnect?: boolean;
  disconnectTimeout?: number;
}

export interface ClientConfiguration {
  gameSessionId?: string;
  connection?: ConnectionConfig;
  capabilities?: Capabilities;
}

export interface InternalClientConfiguration {
  gameSessionId?: string;
  connection?: ConnectionConfig;
  capabilities: CapabilitiesConfiguration;
}

export type Awaitable<T> = T | PromiseLike<T>;
export type GenerateSessionTokenFn = () => Promise<SessionToken>;

export interface CancelResponsesProps {
  interactionId?: string;
  utteranceId?: string[];
}

export interface SessionTokenProps {
  token: string;
  type: string;
  expirationTime: Date;
  sessionId: string;
}

export interface GetterSetter<T> {
  get: () => Awaitable<T | undefined>;
  set: (entity: T) => Awaitable<any>;
}

export enum ConnectionState {
  ACTIVE = 'ACTIVE',
  ACTIVATING = 'ACTIVATING',
  INACTIVE = 'INACTIVE',
}

export interface Extension<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  convertPacketFromProto?: (proto: ProtoPacket) => InworldPacketT;
  beforeLoadScene?: (packets: ProtoPacket[]) => ProtoPacket[];
  afterLoadScene?: (res: CurrentSceneStatus) => void;
}

export interface TriggerParameter {
  name: string;
  value: string;
}

export interface SendTriggerPacketParams {
  parameters?: TriggerParameter[];
  conversationId: string;
  character?: Character;
}

export enum InworldPacketType {
  UNKNOWN = 'UNKNOWN',
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  TRIGGER = 'TRIGGER',
  EMOTION = 'EMOTION',
  CONTROL = 'CONTROL',
  SILENCE = 'SILENCE',
  CANCEL_RESPONSE = 'CANCEL_RESPONSE',
  NARRATED_ACTION = 'NARRATED_ACTION',
  SCENE_MUTATION_REQUEST = 'SCENE_MUTATION_REQUEST',
  SCENE_MUTATION_RESPONSE = 'SCENE_MUTATION_RESPONSE',
  CONVERSATION_UPDATE = 'CONVERSATION_UPDATE',
  CONVERSATION_EVENT = 'CONVERSATION_EVENT',
}

export enum InworlControlAction {
  UNKNOWN = 'UNKNOWN',
  INTERACTION_END = 'INTERACTION_END',
  TTS_PLAYBACK_MUTE = 'TTS_PLAYBACK_MUTE',
  TTS_PLAYBACK_UNMUTE = 'TTS_PLAYBACK_UNMUTE',
  WARNING = 'WARNING',
  CONVERSATION_UPDATE = 'CONVERSATION_UPDATE',
  CONVERSATION_EVENT = 'CONVERSATION_EVENT',
}

export enum InworldConversationEventType {
  UNKNOWN = 'UNKNOWN',
  STARTED = 'STARTED',
  UPDATED = 'UPDATED',
  EVICTED = 'EVICTED',
}

export enum ConversationState {
  ACTIVE = 'ACTIVE',
  PROCESSING = 'PROCESSING',
  INACTIVE = 'INACTIVE',
}

export interface SendPacketParams {
  conversationId: string;
}

export interface ConversationMapItem<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  service: ConversationService<InworldPacketT>;
  state: ConversationState;
}

export interface ChangeSceneProps {
  capabilities?: Capabilities;
  sessionContinuation?: SessionContinuationProps;
  gameSessionId?: string;
}
