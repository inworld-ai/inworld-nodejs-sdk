import { DataChunk, InworldPacket as ProtoPacket } from '@proto/packets_pb';

import { CancelResponsesProps } from '../common/data_structures';
import { Character } from '../entities/character.entity';
import {
  InworldPacket,
  TriggerParameter,
} from '../entities/inworld_packet.entity';
import { ConnectionService } from './connection.service';

export class InworldConnectionService<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  private connection: ConnectionService<InworldPacketT>;

  constructor(connection: ConnectionService<InworldPacketT>) {
    this.connection = connection;
  }

  async getSessionState() {
    return this.connection.getSessionState();
  }

  async open() {
    return this.connection.openManually();
  }

  close() {
    this.connection.close();
  }

  isActive() {
    return this.connection.isActive();
  }

  async getCharacters() {
    return this.connection.getCharactersList();
  }

  async getCurrentCharacter() {
    await this.connection.getCharactersList();

    return this.connection.getEventFactory().getCurrentCharacter();
  }

  setCurrentCharacter(character: Character) {
    return this.connection.getEventFactory().setCurrentCharacter(character);
  }

  async sendText(text: string) {
    return this.connection.send(() =>
      this.connection.getEventFactory().text(text),
    );
  }

  async sendAudio(chunk: string) {
    return this.connection.send(() =>
      this.connection
        .getEventFactory()
        .dataChunk(chunk, DataChunk.DataType.AUDIO),
    );
  }

  async sendTrigger(name: string, parameters?: TriggerParameter[]) {
    return this.connection.send(() =>
      this.connection.getEventFactory().trigger(name, parameters),
    );
  }

  async sendAudioSessionStart() {
    return this.connection.send(() =>
      this.connection.getEventFactory().audioSessionStart(),
    );
  }

  async sendAudioSessionEnd() {
    return this.connection.send(() =>
      this.connection.getEventFactory().audioSessionEnd(),
    );
  }

  async sendCancelResponse(cancelResponses?: CancelResponsesProps) {
    return this.connection.send(() =>
      this.connection.getEventFactory().cancelResponse(cancelResponses),
    );
  }

  async sendTTSPlaybackMute(isMuted: boolean) {
    return this.connection.send(() =>
      this.connection.getEventFactory().mutePlayback(isMuted),
    );
  }

  async sendCustomPacket(getPacket: () => ProtoPacket) {
    return this.connection.send(() => getPacket());
  }

  baseProtoPacket(props?: { utteranceId?: boolean; interactionId?: boolean }) {
    return this.connection.getEventFactory().baseProtoPacket(props);
  }
}
