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
  logs?: boolean;
  logsWarning?: boolean;
  logsInfo?: boolean;
  logsDebug?: boolean;
  logsInternal?: boolean;
  multiModalActionPlanning?: boolean;
  narratedActions?: boolean;
  perceivedLatencyReport?: boolean;
  phonemes?: boolean;
  pingPongReport?: boolean;
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

export interface CustomParameter {
  name: string;
  value: string;
}
export interface TaskParameter extends CustomParameter {}
export interface TriggerParameter extends CustomParameter {}

export enum InworldPacketType {
  UNKNOWN = 'UNKNOWN',
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  TASK = 'TASK',
  LOG = 'LOG',
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
  ENTITIES_ITEM_OPERATION = 'ENTITIES_ITEM_OPERATION',
  OPERATION_STATUS = 'OPERATION_STATUS',
  LATENCY_REPORT = 'LATENCY_REPORT',
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

export enum InworldLatencyReportType {
  PERCEIVED_LATENCY = 'PERCEIVED_LATENCY',
  PING_PONG = 'PING_PONG',
}

export enum ConversationState {
  ACTIVE = 'ACTIVE',
  PROCESSING = 'PROCESSING',
  INACTIVE = 'INACTIVE',
}

export enum ConversationIntializeState {
  ACTIVE = 'ACTIVE',
  PROCESSING = 'PROCESSING',
  INACTIVE = 'INACTIVE',
}

export enum MicrophoneMode {
  OPEN_MIC = 'OPEN_MIC',
  EXPECT_AUDIO_END = 'EXPECT_AUDIO_END',
}

export enum UnderstandingMode {
  FULL = 'FULL',
  SPEECH_RECOGNITION_ONLY = 'SPEECH_RECOGNITION_ONLY',
}

export interface SendPacketParams {
  conversationId: string;
}

export interface SendCustomPacketParams extends SendPacketParams {
  parameters?: CustomParameter[];
  character?: Character;
}

export interface SendAudioSessionStartPacketParams extends SendPacketParams {
  mode?: MicrophoneMode;
  understandingMode?: UnderstandingMode;
}

export interface AudioSessionStartPacketParams {
  mode?: MicrophoneMode;
  understandingMode?: UnderstandingMode;
}

export interface ConversationMapItem<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  service: ConversationService<InworldPacketT>;
  state: ConversationState;
}

export enum ConversationParticipant {
  USER = 'USER',
}

export interface ChangeSceneProps {
  capabilities?: Capabilities;
  sessionContinuation?: SessionContinuationProps;
  gameSessionId?: string;
}

export enum ItemsInEntitiesOperationType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  REPLACE = 'REPLACE',
}

export interface EntityItemProps {
  id: string;
  displayName?: string;
  description?: string;
  properties?: { [key: string]: string };
}

export interface SceneHistoryItem {
  character: Character;
  packet: ProtoPacket;
}

export enum LogLevel {
  UNSPECIFIED = 'UNSPECIFIED',
  WARNING = 'WARNING',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  INTERNAL = 'INTERNAL',
}
