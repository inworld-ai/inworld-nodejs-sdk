const { InworlControlType } = require('@inworld/nodejs-sdk');

const { Player } = require('./player.js');
const { DISPLAY_WHEN } = require('./types.js');

class Conversation {
  player;
  order = DISPLAY_WHEN.BEFORE_AUDIO_PLAYING;
  queue = [];
  cancelResponses = {};

  constructor() {
    this.player = new Player();
  }

  setDisplayOrder(order) {
    this.order = order;
  }

  playAudio(packet) {
    if (this.cancelResponses[packet.packetId.interactionId]) {
      return;
    }

    this.player.addToQueue({
      packet,
      onAfterPlaying: (packet) => {
        this.markAsApplied(packet, (packet) => !!packet.audio);

        if (this.order === DISPLAY_WHEN.AFTER_AUDIO_PLAYING) {
          const found = this.markAsApplied(packet, (packet) => !!packet.text);

          if (found) {
            this.renderTextPacket(found.packet);
          }
        }

        const interactionEnd = this.queue.find(
          (item) =>
            item.packet.control?.type === InworlControlType.INTERACTION_END,
        );

        if (interactionEnd) {
          this.endInteraction(interactionEnd.packet);
        }
      },
      ...(this.order === DISPLAY_WHEN.BEFORE_AUDIO_PLAYING && {
        onBeforePlaying: (packet) => {
          const found = this.markAsApplied(packet, (packet) => !!packet.text);
          if (found) {
            this.renderTextPacket(found.packet);
          }
        },
      }),
    });
  }

  stopAudio() {
    this.player.stop();
  }

  endInteraction(packet) {
    const { interactionId } = packet.packetId;

    const notApplied = this.queue.find(
      (item) =>
        item.packet.packetId.interactionId === interactionId && !item.isApplied,
    );

    // All packets are applied
    // Exlude currently finished interaction
    if (!notApplied) {
      this.queue = this.queue.filter(
        (item) => item.packet.packetId.interactionId !== interactionId,
      );
      delete this.cancelResponses[interactionId];
    } else {
      this.queue.push({ packet, isApplied: true });
    }
  }

  displayText(packet) {
    if (packet.text && packet.text.final) {
      if (this.cancelResponses[packet.packetId.interactionId]) {
        return;
      }

      const { utteranceId } = packet.packetId;

      const audioIsApplied = this.queue.find(
        (item) =>
          !!item.packet.audio &&
          item.isApplied &&
          item.packet.packetId.utteranceId === utteranceId,
      );

      if (audioIsApplied) {
        this.renderTextPacket(packet);
      } else {
        this.queue.push({ packet, isApplied: false });
      }
    }
  }

  interrupt(packet) {
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
          ({ packetId: { interactionId } }) =>
            interactionId === currentPacket.packetId.interactionId &&
            interactionId !== interruptionId,
        );

      this.stopAudio();

      const utteranceId = [
        currentPacket.packetId.utteranceId,
        ...audioPackets
          .filter((packet) => packet.packetId.interactionId === interactionId)
          .map((packet) => packet.packetId.utteranceId),
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
          (item) =>
            item.packet.packetId.interactionId !== interactionId &&
            !!item.packet.text,
        );
      }

      return cancelResponses;
    }
  }

  markAsApplied = (packet, compare) => {
    const found = this.queue.find(
      (item) =>
        compare(item.packet) &&
        item.packet.packetId.utteranceId === packet.packetId.utteranceId,
    );

    if (found) {
      found.isApplied = true;
    }

    return found;
  };

  renderTextPacket(packet) {
    const i = packet.packetId.interactionId;
    const u = packet.packetId.utteranceId;

    console.log(
      `${this.renderEventRouting(packet)} (i=${i}, u=${u}): ${
        packet.text.text
      }`,
    );
  }

  renderEventRouting = (packet) => {
    return `${this.renderActor(packet.routing.source)} to ${this.renderActor(
      packet.routing.target,
    )}`;
  };

  renderActor = (actor) => {
    if (actor.isPlayer) return 'Player';
    else if (actor.isCharacter) return `Character(${actor.name})`;
    else return 'Unknown';
  };
}

module.exports.Conversation = Conversation;
