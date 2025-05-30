const { InworldClient, status } = require('@inworld/nodejs-sdk');
const { fork } = require('child_process');
const kill = require('tree-kill');

const { CLIENT_ACTION, CONVERSATION_ACTION } = require('./types.js');
const { characterInfo } = require('../helpers.js');

class Client {
  client;
  config;
  connection = null;
  conversationProcess;
  interactionIsEnded = false;
  notHandledPackets = [];

  constructor(props) {
    this.conversationProcess = fork(`${__dirname}/conversation_process.js`);
    this.conversationProcess.on('message', this.onConversationProcessMessage);

    if (props.text?.displayWhen) {
      this.conversationProcess.send({
        action: CONVERSATION_ACTION.SET_TEXT_DISPLAY_ORDER,
        order: props.text.displayWhen,
      });
    }

    if (props.multiCharacters) {
      this.conversationProcess.send({
        action: CONVERSATION_ACTION.SET_MULTI_CHARACTERS,
        multiCharacters: props.multiCharacters,
      });
    }

    this.client = new InworldClient()
      .setApiKey({
        key: process.env.INWORLD_KEY,
        secret: process.env.INWORLD_SECRET,
      })
      .setScene(process.env.INWORLD_SCENE)
      .setOnError(this.handleError)
      .setOnDisconnect(() => {
        console.log('Disconnected');
        props.onDisconnect();
      })
      .setOnMessage(this.onMessage);

    if (props.previousState) {
      this.client.setSessionContinuation({
        previousState: props.previousState,
      });
    }

    if (props.config) {
      this.config = props.config;
      this.client.setConfiguration(this.config);
    }
  }

  closeConnection() {
    if (this.conversationProcess?.pid) {
      kill(this.conversationProcess.pid);
    }
  }

  getConnection() {
    if (!this.connection) {
      this.connection = this.client.build();
    }

    return this.connection;
  }

  interrupt(packet) {
    if (!this.config?.capabilities?.interruptions) return;

    this.conversationProcess.send({
      action: CONVERSATION_ACTION.INTERRUPT,
      packet,
    });
  }

  getInteractionIsEnded() {
    return this.interactionIsEnded;
  }

  onMessage = (packet) => {
    this.interactionIsEnded = false;

    // These packets will be handled later in the conversation process.
    if (!packet.isAudio() && !packet.isText() && !packet.isNarratedAction()) {
      this.connection?.markPacketAsHandled(packet);
    } else {
      this.notHandledPackets.push(packet);
    }

    // TEXT
    if (packet.isText()) {
      if (packet.routing.source.isPlayer) {
        this.interrupt(packet);

        const textEvent = packet.text;
        if (textEvent.final) {
          console.log(
            `Recognized: ${textEvent.text}, final=${textEvent.final}`,
          );
        }
      } else {
        this.conversationProcess.send({
          action: CONVERSATION_ACTION.DISPLAY_TEXT,
          packet,
          force: !this.connection?.getCapabilities().audio,
        });
      }
    }

    // AUDIO
    if (packet.isAudio()) {
      this.conversationProcess.send({
        action: CONVERSATION_ACTION.PLAY_AUDIO,
        packet,
      });
    }

    // EMOTION
    if (packet.isEmotion()) {
      console.log(`Emotions:
        behavior = ${packet.emotions.behavior.code},
        strength = ${packet.emotions.strength.code}
      `);
    }

    // LOG
    if (packet.isLog()) {
      console.log(`Log: 
        text: ${packet.log.text}
        level: ${packet.log.level}
        metadata: ${JSON.stringify(packet.log.metadata)}
      `);
    }

    // TRIGGER
    if (packet.isTrigger()) {
      console.log(`Trigger: ${packet.trigger.name}`);
    }

    if (packet.isSilence()) {
      this.conversationProcess.send({
        action: CONVERSATION_ACTION.SILENCE,
        packet,
      });
    }

    // NARRATED_ACTION
    if (packet.isNarratedAction()) {
      this.conversationProcess.send({
        action: CONVERSATION_ACTION.NARRATED_ACTION,
        packet,
      });
    }

    // CHANGES IN SCENE
    if (packet.isSceneMutationResponse()) {
      const { loadedCharacters } = packet.sceneMutation;

      if (loadedCharacters?.length) {
        console.log('List of current scene characters:');
        for (const character of loadedCharacters) {
          console.log(characterInfo(character));
        }
      }
    }

    // INTERACTION_END
    if (packet.isInteractionEnd()) {
      this.interactionIsEnded = true;
      this.conversationProcess.send({
        action: CONVERSATION_ACTION.END_INTERACTION,
        packet,
      });
    }

    // WARNING
    if (packet.isWarning()) {
      console.log(`Warning: ${packet.control.description}`);
    }
  };

  onConversationProcessMessage = (props) => {
    switch (props.action) {
      case CLIENT_ACTION.SEND_CANCEL_RESPONSES:
        this.getConnection().sendCancelResponse(props.data);
        break;
      case CLIENT_ACTION.MARK_PACKET_AS_HANDLED:
        const found = this.notHandledPackets.filter(
          (packet) => packet.packetId.packetId === props.data.packetId.packetId,
        );

        if (found[0]) {
          this.getConnection().markPacketAsHandled(found[0]);
        }
        break;
    }
  };

  handleError = (err) => {
    switch (err.code) {
      case status.ABORTED:
      case status.CANCELLED:
        break;
      default:
        console.error(`Error: ${JSON.stringify(err, null, 2)}`);
        break;
    }
  };
}

module.exports.Client = Client;
