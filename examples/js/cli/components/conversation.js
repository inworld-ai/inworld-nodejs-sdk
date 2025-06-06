const { InworlControlAction } = require('@inworld/nodejs-sdk');

const { Player } = require('./player.js');
const { DISPLAY_WHEN } = require('./types.js');

class Conversation {
  player;
  order = DISPLAY_WHEN.BEFORE_AUDIO_PLAYING;
  queue = [];
  cancelResponses = {};
  multiCharacters = false;
  markPacketAsHandled;

  constructor(markPacketAsHandled) {
    this.player = new Player();
    this.markPacketAsHandled = markPacketAsHandled;
  }

  setDisplayOrder(order) {
    this.order = order;
  }

  setMultiCharacters(multiCharacters = false) {
    this.multiCharacters = multiCharacters;
  }

  playAudio(packet) {
    if (this.cancelResponses[packet.packetId.interactionId]) {
      return;
    }

    this.queue.push({ packet, isApplied: false });

    this.player.addToQueue({
      packet,
      onAfterPlaying: (packet) => {
        this.markAsApplied(
          ({ audio, packetId }) =>
            !!audio && packetId.utteranceId === packet.packetId.utteranceId,
        );

        const text = this.markAsApplied(
          ({ text, packetId }) =>
            !!text && packetId.utteranceId === packet.packetId.utteranceId,
        );

        if (text) {
          this.renderPacket(text.packet);
        }

        const action = this.markAsApplied(
          ({ narratedAction, packetId }) =>
            !!narratedAction &&
            packetId.interactionId === packet.packetId.interactionId,
        );

        if (action) {
          this.renderPacket(action.packet);
        }

        const interactionEnd = this.queue.find(
          (item) =>
            item.packet.control?.action === InworlControlAction.INTERACTION_END,
        );

        if (interactionEnd) {
          this.endInteraction(interactionEnd.packet);
        }
      },
      onBeforePlaying: (packet) => {
        this.markPacketAsHandled(packet);
        if (this.order === DISPLAY_WHEN.BEFORE_AUDIO_PLAYING) {
          const text = this.markAsApplied(
            ({ text, packetId }) =>
              !!text && packetId.utteranceId === packet.packetId.utteranceId,
          );
          if (text) {
            this.renderPacket(text.packet);
          }
        }

        const action = this.markAsApplied(
          ({ narratedAction, packetId }) =>
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

  displayText(packet, props = {}) {
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

      if (audioIsApplied || props.force) {
        this.renderPacket(packet);
      } else {
        this.queue.push({ packet, isApplied: false });
      }
    }
  }

  displayAction(packet) {
    if (packet.narratedAction?.text) {
      if (this.cancelResponses[packet.packetId.interactionId]) {
        return;
      }

      const { interactionId } = packet.packetId;

      const audioIsApplied = this.queue.find(
        (item) =>
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

  markAsApplied = (compare) => {
    const found = this.queue.find(
      (item) => !item.isApplied && compare(item.packet),
    );

    if (found) {
      found.isApplied = true;
    }

    return found;
  };

  renderPacket(packet) {
    const { interactionId, utteranceId, correlationId } = packet.packetId;

    const conversationId = this.multiCharacters
      ? packet.packetId.conversationId
      : '';
    const info = [];

    if (interactionId) {
      info.push(`i=${interactionId}`);
    }

    if (utteranceId) {
      info.push(`u=${utteranceId}`);
    }

    if (correlationId) {
      info.push(`cor=${correlationId}`);
    }

    if (this.multiCharacters) {
      info.push(`conv=${conversationId}`);
    }

    const text = (packet.text?.text || packet.narratedAction?.text)?.trim();
    const wrapper = packet.narratedAction?.text ? '*' : '';

    if (text) {
      console.log(
        `${this.renderEventRouting(packet)} (${info.join()}): ${wrapper}${text}${wrapper}`,
      );
    }
  }

  renderEventRouting = (packet) => {
    const source = this.renderActor(packet.routing.source);
    const targets = packet.routing.targets.map(this.renderActor);

    return `${source} to ${targets.join(' and ')}`;
  };

  renderActor = (actor) => {
    if (actor.isPlayer) return 'Player';
    else if (actor.isCharacter) return `Character(${actor.name})`;
    else return 'Unknown';
  };
}

module.exports.Conversation = Conversation;
