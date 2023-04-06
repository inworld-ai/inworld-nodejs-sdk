import { DataChunk } from '@proto/packets_pb';

import { CancelResponsesProps } from '../common/interfaces';
import { Character } from '../entities/character.entity';
import { ConnectionService } from './connection.service';

export class InworldConnectionService {
  private connection: ConnectionService;

  constructor(connection: ConnectionService) {
    this.connection = connection;
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

  async sendTrigger(name: string) {
    return this.connection.send(() =>
      this.connection.getEventFactory().trigger(name),
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
}
