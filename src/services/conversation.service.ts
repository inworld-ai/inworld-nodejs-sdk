import {
  DataChunk,
  InworldPacket as ProtoPacket,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import {
  AudioSessionStartPacketParams,
  CancelResponsesProps,
  ConversationParticipant,
  ConversationState,
  SendPacketParams,
  TriggerParameter,
} from '../common/data_structures';
import { MULTI_CHAR_NARRATED_ACTIONS } from '../common/errors';
import { Character } from '../entities/character.entity';
import { InworldPacket } from '../entities/packets/inworld_packet.entity';
import { EventFactory } from '../factories/event';
import { ConnectionService } from './connection.service';

export interface PacketQueueItem<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  getPacket: () => ProtoPacket;
  afterWriting: (packet: InworldPacketT) => void;
}

export class ConversationService<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  private connection: ConnectionService<InworldPacketT>;
  private conversationId: string;
  private participants: string[];
  private addCharacters?: (names: string[]) => Promise<void>;
  private packetQueue: PacketQueueItem<InworldPacketT>[] = [];

  constructor(
    connection: ConnectionService<InworldPacketT>,
    {
      participants,
      conversationId,
      addCharacters,
    }: {
      participants: string[];
      conversationId?: string;
      addCharacters: (names: string[]) => Promise<void>;
    },
  ) {
    this.connection = connection;
    this.conversationId = conversationId ?? v4();
    this.participants = participants;
    this.addCharacters = addCharacters;
  }

  getConversationId() {
    return this.conversationId;
  }

  getParticipants() {
    return this.participants;
  }

  getCharacters() {
    return this.connection.getCharactersByResourceNames(
      this.getCharacterParticipants(),
    );
  }

  changeParticipants(participants: string[]) {
    this.participants = participants;
  }

  async updateParticipants(participants: string[]) {
    const conversationId = this.getConversationId();
    const conversation = this.connection.conversations.get(conversationId);

    if (!conversation) {
      throw Error(`Conversation ${conversationId} not found`);
    }

    if (
      ![ConversationState.ACTIVE, ConversationState.INACTIVE].includes(
        conversation.state,
      )
    ) {
      return;
    }

    this.connection.conversations.set(conversationId, {
      service: conversation.service,
      state: ConversationState.PROCESSING,
    });

    // Load characters if they are not loaded
    const charactersNamesOnly = this.getCharacterParticipants(participants);
    let characters = await this.connection.getCharactersList();
    const charactersToAdd = charactersNamesOnly.filter(
      (p) => !characters.find((c) => c.resourceName === p),
    );

    if (charactersToAdd.length) {
      await this.addCharacters(charactersToAdd);
    }
    characters = (await this.connection.getCharactersList()).filter((c) =>
      charactersNamesOnly.includes(c.resourceName),
    );

    // Update conversation
    const conversationParticipants = characters.map((c) => c.id);
    if (participants.includes(ConversationParticipant.USER)) {
      conversationParticipants.push(ConversationParticipant.USER);
    }

    const sent = await this.connection.send(() =>
      EventFactory.conversation(conversationParticipants, {
        conversationId: this.getConversationId(),
      }),
    );

    await this.resolveInterval(
      () => {
        const found = this.connection.conversations.get(
          sent.packetId.conversationId,
        );

        return found?.state === ConversationState.ACTIVE;
      },
      () => {
        this.participants = participants;
        this.releaseQueue();
      },
    );

    return sent;
  }

  async sendText(text: string) {
    return this.ensureConversation(() =>
      this.connection
        .getEventFactory()
        .text(text, { conversationId: this.getConversationId() }),
    );
  }

  async sendAudio(chunk: string) {
    return this.ensureConversation(() =>
      this.connection
        .getEventFactory()
        .dataChunk(chunk, DataChunk.DataType.AUDIO, {
          conversationId: this.getConversationId(),
        }),
    );
  }

  async sendTrigger(
    name: string,
    parameters?: { parameters?: TriggerParameter[]; character?: Character },
  ) {
    return this.ensureConversation(() =>
      this.connection.getEventFactory().trigger(name, {
        ...parameters,
        conversationId: this.getConversationId(),
      }),
    );
  }

  async sendAudioSessionStart(params?: AudioSessionStartPacketParams) {
    return this.ensureConversation(() =>
      this.connection.getEventFactory().audioSessionStart({
        ...params,
        conversationId: this.getConversationId(),
      }),
    );
  }

  async sendAudioSessionEnd() {
    return this.ensureConversation(() => {
      return this.connection.getEventFactory().audioSessionEnd({
        conversationId: this.getConversationId(),
      });
    });
  }

  async sendCancelResponse(cancelResponses?: CancelResponsesProps) {
    const characters = this.getCharacters();

    if (characters.length != 1) {
      return;
    }

    return this.ensureConversation(() =>
      this.connection.getEventFactory().cancelResponse({
        ...cancelResponses,
        character: characters[0],
      }),
    );
  }

  async sendTTSPlaybackMute(isMuted: boolean) {
    return this.ensureConversation(() => {
      return this.connection.getEventFactory().mutePlayback(isMuted, {
        conversationId: this.getConversationId(),
      });
    });
  }

  async sendNarratedAction(text: string) {
    if (this.getCharacterParticipants().length > 1) {
      throw Error(MULTI_CHAR_NARRATED_ACTIONS);
    }

    return this.ensureConversation(() =>
      this.connection.getEventFactory().narratedAction(text, {
        conversationId: this.getConversationId(),
      }),
    );
  }

  async sendCustomPacket(getPacket: (params: SendPacketParams) => ProtoPacket) {
    return this.ensureConversation(() =>
      getPacket({
        conversationId: this.getConversationId(),
      }),
    );
  }

  private async ensureConversation(getPacket: () => ProtoPacket) {
    const conversationId = this.getConversationId();
    const conversation = this.connection.conversations.get(conversationId);

    if (!conversation) {
      throw Error(`Conversation ${conversationId} not found`);
    }

    if (conversation.state === ConversationState.ACTIVE) {
      return this.connection.send(getPacket);
    } else if (conversation.state === ConversationState.PROCESSING) {
      let packet: InworldPacketT;

      this.packetQueue.push({
        getPacket,
        afterWriting: (inworldPacket: InworldPacketT) => {
          packet = inworldPacket;
        },
      });

      return this.resolveInterval<InworldPacketT>(
        () => !!packet,
        () => packet,
      );
    }

    this.connection.conversations.set(this.getConversationId(), {
      service: conversation.service,
      state: ConversationState.PROCESSING,
    });

    const conversationParticipants = conversation.service
      .getCharacters()
      .map((c) => c.id);
    if (
      conversation.service
        .getParticipants()
        .includes(ConversationParticipant.USER)
    ) {
      conversationParticipants.push(ConversationParticipant.USER);
    }
    const conversationPacket = await this.connection.send(() =>
      EventFactory.conversation(conversationParticipants, {
        conversationId: this.getConversationId(),
      }),
    );

    await this.resolveInterval(() => {
      const found = this.connection.conversations.get(
        conversationPacket.packetId.conversationId,
      );

      return found?.state === ConversationState.ACTIVE;
    });

    const sent = await this.connection.send(getPacket);

    this.releaseQueue();

    return sent;
  }

  private async resolveInterval<T = void>(
    done: () => boolean,
    resolve?: () => T,
  ) {
    return new Promise<T>((r) => {
      const interval = setInterval(() => {
        if (done()) {
          clearInterval(interval);
          this.connection.removeInterval(interval);
          r(resolve?.() as T);
        }
      }, 10);

      this.connection.addInterval(interval);
    });
  }

  private releaseQueue() {
    this.packetQueue.forEach(async (item: PacketQueueItem<InworldPacketT>) => {
      const inworldPacket = await this.connection.send(item.getPacket);
      item.afterWriting(inworldPacket);
    });
    this.packetQueue = [];
  }

  private getCharacterParticipants(participants = this.participants) {
    return participants.filter((p) => p !== ConversationParticipant.USER);
  }
}
