import { Actor, InworlControlType, InworldPacket } from '@inworld/nodejs-sdk';

import { Player } from './player';
import { DISPLAY_WHEN } from './types';

interface ConversationQueueItem {
  packet: InworldPacket;
  isApplied: boolean;
}

interface CancelResponses {
  [key: string]: boolean;
}

export class Conversation {
  private player: Player;
  private order: DISPLAY_WHEN = DISPLAY_WHEN.BEFORE_AUDIO_PLAYING;
  private queue: ConversationQueueItem[] = [];
  private cancelResponses: CancelResponses = {};

  constructor() {
    this.player = new Player();
  }

  setDisplayOrder(order: DISPLAY_WHEN) {
    this.order = order;
  }

  playAudio(packet: InworldPacket) {
    if (this.cancelResponses[packet.packetId.interactionId]) {
      return;
    }

    this.queue.push({ packet, isApplied: false });

    this.player.addToQueue({
      packet,
      onAfterPlaying: (packet: InworldPacket) => {
        this.markAsApplied(
          ({ audio, packetId }: InworldPacket) =>
            !!audio && packetId.utteranceId === packet.packetId.utteranceId,
        );

        if (this.order === DISPLAY_WHEN.AFTER_AUDIO_PLAYING) {
          const found = this.markAsApplied(
            ({ text, packetId }: InworldPacket) =>
              !!text && packetId.utteranceId === packet.packetId.utteranceId,
          );

          if (found) {
            this.renderPacket(found.packet);
          }
        }

        const interactionEnd = this.queue.find(
          (item: ConversationQueueItem) =>
            item.packet.control?.type === InworlControlType.INTERACTION_END,
        );

        if (interactionEnd) {
          this.endInteraction(interactionEnd.packet);
        }
      },
      onBeforePlaying: (packet: InworldPacket) => {
        if (this.order === DISPLAY_WHEN.BEFORE_AUDIO_PLAYING) {
          const text = this.markAsApplied(
            ({ text, packetId }: InworldPacket) =>
              !!text && packetId.utteranceId === packet.packetId.utteranceId,
          );
          if (text) {
            this.renderPacket(text.packet);
          }
        }

        const action = this.markAsApplied(
          ({ narratedAction, packetId }: InworldPacket) =>
            !!narratedAction &&
            packetId.interactionId === packet.packetId.interactionId,
        );

        if (action) {
          this.renderPacket(action.packet);
        }
      },
    });
  }

  stopAudio() {
    this.player.stop();
  }

  endInteraction(packet: InworldPacket) {
    const { interactionId } = packet.packetId;

    const notApplied = this.queue.find(
      (item: ConversationQueueItem) =>
        item.packet.packetId.interactionId === interactionId && !item.isApplied,
    );

    // All packets are applied
    // Exlude currently finished interaction
    if (!notApplied) {
      this.queue = this.queue.filter(
        (item: ConversationQueueItem) =>
          item.packet.packetId.interactionId !== interactionId,
      );
      delete this.cancelResponses[interactionId];
    } else {
      this.queue.push({ packet, isApplied: true });
    }
  }

  displayText(packet: InworldPacket) {
    if (packet.text && packet.text.final) {
      if (this.cancelResponses[packet.packetId.interactionId]) {
        return;
      }

      const { utteranceId } = packet.packetId;

      const audioIsApplied = this.queue.find(
        (item: ConversationQueueItem) =>
          !!item.packet.audio &&
          item.isApplied &&
          item.packet.packetId.utteranceId === utteranceId,
      );

      if (audioIsApplied) {
        this.renderPacket(packet);
      } else {
        this.queue.push({ packet, isApplied: false });
      }
    }
  }

  displayAction(packet: InworldPacket) {
    if (packet.narratedAction?.text) {
      if (this.cancelResponses[packet.packetId.interactionId]) {
        return;
      }

      const { interactionId } = packet.packetId;

      const audioIsApplied = this.queue.find(
        (item: ConversationQueueItem) =>
          !!item.packet.audio &&
          item.isApplied &&
          item.packet.packetId.interactionId === interactionId,
      );

      if (audioIsApplied) {
        this.renderPacket(packet);
      } else {
        this.queue.push({ packet, isApplied: false });
      }
    }
  }

  interrupt(packet: InworldPacket) {
    if (!this.player.getIsPlaying()) return false;

    const { interactionId: interruptionId } = packet.packetId;

    const currentPacket = this.player.getCurrentPacket();

    if (
      currentPacket?.packetId?.interactionId &&
      currentPacket.packetId.interactionId !== interruptionId
    ) {
      const { interactionId } = currentPacket.packetId;

      const audioPackets = this.player
        .getPacketsInQueue()
        .filter(
          ({ packetId: { interactionId } }: InworldPacket) =>
            interactionId === currentPacket.packetId.interactionId &&
            interactionId !== interruptionId,
        );

      this.stopAudio();

      const utteranceId = [
        currentPacket.packetId.utteranceId,
        ...audioPackets
          .filter(
            (packet: InworldPacket) =>
              packet.packetId.interactionId === interactionId,
          )
          .map((packet: InworldPacket) => packet.packetId.utteranceId),
      ];
      const cancelResponses = {
        interactionId,
        utteranceId,
      };

      if (interactionId) {
        this.cancelResponses = {
          ...this.cancelResponses,
          [interactionId]: true,
        };

        this.queue = this.queue.filter(
          (item: ConversationQueueItem) =>
            item.packet.packetId.interactionId !== interactionId &&
            !!item.packet.text,
        );
      }

      return cancelResponses;
    }
  }

  private markAsApplied = (compare: (item: InworldPacket) => Boolean) => {
    const found = this.queue.find(
      (item: ConversationQueueItem) => !item.isApplied && compare(item.packet),
    );

    if (found) {
      found.isApplied = true;
    }

    return found;
  };

  private renderPacket(packet: InworldPacket) {
    const i = packet.packetId.interactionId;
    const u = packet.packetId.utteranceId;

    if (packet.text?.text) {
      console.log(
        `${this.renderEventRouting(packet)} (i=${i}, u=${u}): ${
          packet.text.text
        }`,
      );
    } else if (packet.narratedAction?.text) {
      console.log(
        `${this.renderEventRouting(packet)} (i=${i}, u=${u}): *${
          packet.narratedAction.text
        }*`,
      );
    }
  }

  private renderEventRouting = (packet: InworldPacket) => {
    return `${this.renderActor(packet.routing.source)} to ${this.renderActor(
      packet.routing.target,
    )}`;
  };

  private renderActor = (actor: Actor) => {
    if (actor.isPlayer) return 'Player';
    else if (actor.isCharacter) return `Character(${actor.name})`;
    else return 'Unknown';
  };
}
