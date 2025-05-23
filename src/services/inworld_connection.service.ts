import { InworldPacket as ProtoPacket } from '@proto/ai/inworld/packets/packets_pb';

import {
  AudioSessionStartPacketParams,
  CancelResponsesProps,
  ChangeSceneProps,
  ConversationIntializeState,
  ConversationParticipant,
  PerceivedLatencyReportProps,
  TriggerParameter,
} from '../common/data_structures';
import { ConversationState } from '../common/data_structures';
import {
  CHARACTER_HAS_INVALID_FORMAT,
  CURRENT_CHARACTER_NOT_SET,
  SCENE_HAS_INVALID_FORMAT,
} from '../common/errors';
import { Character } from '../entities/character.entity';
import { InworldPacket } from '../entities/packets/inworld_packet.entity';
import { EventFactory } from '../factories/event';
import { characterHasValidFormat, sceneHasValidFormat } from '../guard/scene';
import { ConnectionService } from './connection.service';
import { ConversationService } from './conversation.service';
import { EntityService } from './entity.service';
import { FeedbackService } from './feedback.service';

export class InworldConnectionService<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  readonly feedback: FeedbackService<InworldPacketT>;
  readonly entity: EntityService<InworldPacketT>;

  private connection: ConnectionService<InworldPacketT>;
  private oneToOneConversation: ConversationService<InworldPacketT>;
  private oneToOneConversationIntializeState =
    ConversationIntializeState.INACTIVE;

  constructor(connection: ConnectionService<InworldPacketT>) {
    this.connection = connection;
    this.feedback = new FeedbackService(connection);
    this.entity = new EntityService(connection);
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

  getCapabilities() {
    return this.connection.getClientConfig().capabilities;
  }

  async getCharacters() {
    return this.connection.getCharactersList();
  }

  async getCurrentCharacter() {
    return this.connection.getCurrentCharacter();
  }

  getCharacterById(id: string) {
    return this.connection.getCharactersByIds([id])[0];
  }

  getCharacterByResourceName(name: string) {
    return this.connection.getCharactersByResourceNames([name])[0];
  }

  async setCurrentCharacter(character: Character) {
    this.connection.setCurrentCharacter(character);

    if (!this.oneToOneConversation) {
      this.oneToOneConversation = new ConversationService<InworldPacketT>(
        this.connection,
        {
          participants: [character.resourceName, ConversationParticipant.USER],
          addCharacters: this.addCharacters.bind(this),
        },
      );

      this.addConversationToConnection(this.oneToOneConversation);
    } else {
      this.oneToOneConversation.changeParticipants([character.resourceName]);
    }

    if (
      this.connection.conversations.get(
        this.oneToOneConversation.getConversationId(),
      ).state === ConversationState.ACTIVE
    ) {
      await this.oneToOneConversation.updateParticipants([
        character.resourceName,
        ConversationParticipant.USER,
      ]);
    }
  }

  async getCurrentConversation() {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation;
  }

  getConversations() {
    return [...this.connection.conversations.entries()].map(
      ([conversationId, conversation]) => ({
        conversationId,
        characters: conversation.service.getCharacters(),
      }),
    );
  }

  async sendText(text: string) {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendText(text);
  }

  async sendAudio(chunk: string) {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendAudio(chunk);
  }

  async sendTrigger(
    name: string,
    parameters?: TriggerParameter[] | { parameters: TriggerParameter[] },
  ) {
    await this.ensureOneToOneConversation();

    const character = await this.getCurrentCharacter();

    if (parameters && Array.isArray(parameters)) {
      // TODO: Remove this deprecation warning in the next major release.
      console.warn(
        'Passing parameters as an array is deprecated. Please use an object instead.',
      );

      return this.oneToOneConversation.sendTrigger(name, {
        parameters,
        character,
      });
    } else if (!parameters || !Array.isArray(parameters)) {
      return this.oneToOneConversation.sendTrigger(name, {
        parameters:
          parameters && !Array.isArray(parameters)
            ? parameters.parameters
            : undefined,
        character,
      });
    }
  }

  async sendAudioSessionStart(params?: AudioSessionStartPacketParams) {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendAudioSessionStart(params);
  }

  async sendAudioSessionEnd() {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendAudioSessionEnd();
  }

  async sendTTSPlaybackMute(isMuted: boolean) {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendTTSPlaybackMute(isMuted);
  }

  async sendCancelResponse(cancelResponses?: CancelResponsesProps) {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendCancelResponse(cancelResponses);
  }

  async sendNarratedAction(text: string) {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendNarratedAction(text);
  }

  async sendPerceivedLatenctReport(props: PerceivedLatencyReportProps) {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendPerceivedLatenctReport(props);
  }

  async reloadScene() {
    // TODO: Remove this deprecation warning in the next major release.
    console.warn('Reload scene is deprecated. Please use changeScene instead.');

    await this.changeScene(this.connection.getSceneName());
  }

  async changeScene(name: string, props?: ChangeSceneProps) {
    if (!sceneHasValidFormat(name)) {
      throw Error(SCENE_HAS_INVALID_FORMAT);
    }

    // Clear all conversations
    if (name !== this.connection.getSceneName()) {
      const id = this.oneToOneConversation?.getConversationId();
      const existingConversation = this.connection.conversations.get(id);

      if (existingConversation) {
        this.connection.conversations.delete(id);
      }

      this.oneToOneConversation = undefined;
      this.oneToOneConversationIntializeState =
        ConversationIntializeState.INACTIVE;
    }

    return this.connection.change(name, props);
  }

  async addCharacters(names: string[]) {
    const invalid = names.find((name) => !characterHasValidFormat(name));

    if (invalid) {
      throw Error(CHARACTER_HAS_INVALID_FORMAT);
    }

    const result = await this.connection.send(() =>
      EventFactory.loadCharacters(names),
    );

    await this.resolveInterval(() => {
      const found = this.connection.getCharactersByResourceNames(names);

      return found.length && found.length === names.length;
    });

    return result;
  }

  async removeCharacters(names: string[]) {
    const invalid = names.find((name) => !characterHasValidFormat(name));

    if (invalid) {
      throw Error(CHARACTER_HAS_INVALID_FORMAT);
    }

    const ids = (await this.getCharacters())
      .filter((c) => names.includes(c.resourceName))
      .map((c) => c.id);

    const result = await this.connection.send(() =>
      EventFactory.unloadCharacters(ids),
    );

    this.connection.removeCharacters(names);

    this.connection.conversations.forEach((conversation) => {
      conversation.service.changeParticipants(
        conversation.service
          .getCharacters()
          .filter((c) => !names.includes(c.resourceName))
          .map((c) => c.resourceName),
      );
    });

    return result;
  }

  async sendCustomPacket(getPacket: () => ProtoPacket) {
    await this.ensureOneToOneConversation();

    return this.oneToOneConversation.sendCustomPacket(getPacket);
  }

  startConversation(participants: string[]) {
    const service = new ConversationService(this.connection, {
      participants,
      addCharacters: this.addCharacters.bind(this),
    });

    this.connection.conversations.set(service.getConversationId(), {
      service,
      state: ConversationState.INACTIVE,
    });

    return service;
  }

  baseProtoPacket(props?: {
    utteranceId?: boolean;
    interactionId?: boolean;
    conversationId?: string;
    characters?: Character[];
  }) {
    return this.connection.getEventFactory().baseProtoPacket(props);
  }

  markPacketAsHandled(packet: InworldPacketT) {
    return this.connection.markPacketAsHandled(packet);
  }

  private async ensureOneToOneConversation() {
    if (
      this.oneToOneConversationIntializeState ===
      ConversationIntializeState.INACTIVE
    ) {
      this.oneToOneConversationIntializeState =
        ConversationIntializeState.PROCESSING;
      const character = await this.getCurrentCharacter();

      if (!character) {
        throw Error(CURRENT_CHARACTER_NOT_SET);
      }

      this.oneToOneConversation = new ConversationService<InworldPacketT>(
        this.connection,
        {
          participants: [character.resourceName, ConversationParticipant.USER],
          addCharacters: this.addCharacters.bind(this),
        },
      );

      this.addConversationToConnection(this.oneToOneConversation);
      this.oneToOneConversationIntializeState =
        ConversationIntializeState.ACTIVE;
    } else {
      return new Promise<void>((resolve) => {
        const interval = setInterval(() => {
          if (
            this.oneToOneConversationIntializeState ===
            ConversationIntializeState.ACTIVE
          ) {
            clearInterval(interval);
            this.connection.removeInterval(interval);
            resolve();
          }
        }, 10);

        this.connection.addInterval(interval);
      });
    }
  }

  private async resolveInterval(done: () => boolean) {
    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (done()) {
          clearInterval(interval);
          this.connection.removeInterval(interval);
          resolve();
        }
      }, 10);

      this.connection.addInterval(interval);
    });
  }

  private addConversationToConnection(
    conversation: ConversationService<InworldPacketT>,
  ) {
    if (!this.connection.conversations.has(conversation.getConversationId())) {
      this.connection.conversations.set(conversation.getConversationId(), {
        service: conversation,
        state: ConversationState.INACTIVE,
      });
    }
  }
}
