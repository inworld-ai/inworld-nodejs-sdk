import {
  CurrentSceneStatus,
  InworldPacket as ProtoPacket,
} from '@proto/ai/inworld/packets/packets_pb';

import { Character } from '../../entities/character.entity';
import { InworldPacket } from '../../entities/packets/inworld_packet.entity';
import {
  AudioSessionStartPacketParams,
  CancelResponsesProps,
  SendPacketParams,
  TriggerParameter,
} from './index';

export interface Extension<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  convertPacketFromProto?: (proto: ProtoPacket) => InworldPacketT;
  beforeLoadScene?: (packets: ProtoPacket[]) => ProtoPacket[];
  afterLoadScene?: (res: CurrentSceneStatus) => void;
}

export interface ConvesationInterface<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  getConversationId(): string;
  getParticipants(): string[];
  getCharacters(): Character[];
  changeParticipants(participants: string[]): void;
  updateParticipants(participants: string[]): Promise<InworldPacketT>;
  sendText: (text: string) => Promise<InworldPacketT>;
  sendAudio: (chunk: string) => Promise<InworldPacketT>;
  sendTrigger: (
    name: string,
    parameters?: { parameters?: TriggerParameter[]; character?: Character },
  ) => Promise<InworldPacketT>;
  sendAudioSessionStart(
    params?: AudioSessionStartPacketParams,
  ): Promise<InworldPacketT>;
  sendAudioSessionEnd(): Promise<InworldPacketT>;
  sendCancelResponse(
    cancelResponses?: CancelResponsesProps,
  ): Promise<InworldPacketT>;
  sendTTSPlaybackMute(isMuted: boolean): Promise<InworldPacketT>;
  sendNarratedAction(text: string): Promise<InworldPacketT>;
  sendCustomPacket(
    getPacket: (params: SendPacketParams) => ProtoPacket,
  ): Promise<InworldPacketT>;
}
