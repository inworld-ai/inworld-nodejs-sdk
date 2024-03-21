import {
  DataChunk,
  InworldPacket as ProtoPacket,
} from '@proto/ai/inworld/packets/packets_pb';

import { CancelResponsesProps } from '../common/data_structures';
import {
  CHARACTER_HAS_INVALID_FORMAT,
  SCENE_HAS_INVALID_FORMAT,
  SCENE_NAME_THE_SAME,
} from '../common/errors';
import { Character } from '../entities/character.entity';
import { InworldPacket } from '../entities/packets/inworld_packet.entity';
import { TriggerParameter } from '../entities/packets/trigger.entity';
import { EventFactory } from '../factories/event';
import { characterHasValidFormat, sceneHasValidFormat } from '../guard/scene';
import { ConnectionService } from './connection.service';
import { FeedbackService } from './feedback.service';

export class InworldConnectionService<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  readonly feedback: FeedbackService<InworldPacketT>;
  private connection: ConnectionService<InworldPacketT>;

  constructor(connection: ConnectionService<InworldPacketT>) {
    this.connection = connection;
    this.feedback = new FeedbackService(connection);
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
    return this.connection.getCurrentCharacter();
  }

  setCurrentCharacter(character: Character) {
    return this.connection.setCurrentCharacter(character);
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

  async sendNarratedAction(text: string) {
    return this.connection.send(() =>
      this.connection.getEventFactory().narratedAction(text),
    );
  }

  async reloadScene() {
    return this.connection.send(() =>
      EventFactory.loadScene(this.connection.getSceneName()),
    );
  }

  async changeScene(name: string) {
    if (!sceneHasValidFormat(name)) {
      throw Error(SCENE_HAS_INVALID_FORMAT);
    }

    if (this.connection.getSceneName() === name) {
      throw Error(SCENE_NAME_THE_SAME);
    }

    this.connection.setNextSceneName(name);

    return this.connection.send(() => EventFactory.loadScene(name));
  }

  async addCharacters(names: string[]) {
    const invalid = names.find((name) => !characterHasValidFormat(name));

    if (invalid) {
      throw Error(CHARACTER_HAS_INVALID_FORMAT);
    }

    return this.connection.send(() => EventFactory.loadCharacters(names));
  }

  async sendCustomPacket(getPacket: () => ProtoPacket) {
    return this.connection.send(() => getPacket());
  }

  baseProtoPacket(props?: { utteranceId?: boolean; interactionId?: boolean }) {
    return this.connection.getEventFactory().baseProtoPacket(props);
  }
}
