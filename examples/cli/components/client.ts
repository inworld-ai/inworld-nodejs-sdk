import {
  CancelResponsesProps,
  ClientConfiguration,
  EmotionBehavior,
  EmotionStrength,
  InworldClient,
  InworldConnectionService,
  InworldPacket,
  ServiceError,
  status,
} from '@inworld/nodejs-sdk';
import { ChildProcess, fork } from 'child_process';

import { CLIENT_ACTION, CONVERSATION_ACTION, DISPLAY_WHEN } from './types';
export class Client {
  private client: InworldClient;
  private config: ClientConfiguration | undefined;
  private connection: InworldConnectionService | null = null;
  private conversationProcess: ChildProcess;

  constructor(props: {
    config?: ClientConfiguration;
    text?: { displayWhen: DISPLAY_WHEN };
    onDisconnect: () => void;
  }) {
    this.conversationProcess = fork(`${__dirname}/conversation_process.ts`);
    this.conversationProcess.on('message', this.onConversationProcessMessage);

    if (props.text?.displayWhen) {
      this.conversationProcess.send({
        action: CONVERSATION_ACTION.SET_TEXT_DISPLAY_ORDER,
        order: props.text.displayWhen,
      });
    }

    this.client = new InworldClient()
      .setApiKey({
        key: process.env.INWORLD_KEY!,
        secret: process.env.INWORLD_SECRET!,
      })
      .setScene(process.env.INWORLD_SCENE!)
      .setOnError(this.handleError)
      .setOnDisconnect(() => {
        console.log('Disconnected');
        props.onDisconnect();
      })
      .setOnMessage(this.onMessage);

    if (props.config) {
      this.config = props.config;
      this.client.setConfiguration(this.config);
    }
  }

  closeConnection() {
    this.conversationProcess?.kill();
  }

  getConnection() {
    if (!this.connection) {
      this.connection = this.client.build();
    }

    return this.connection;
  }

  interrupt(packet: InworldPacket) {
    if (!this.config?.capabilities?.interruptions) return;

    this.conversationProcess.send({
      action: CONVERSATION_ACTION.INTERRUPT,
      packet,
    });
  }

  private onMessage = (packet: InworldPacket) => {
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
        behavior = ${this.getBehavior(packet.emotions.behavior)},
        strength = ${this.getStrength(packet.emotions.strength)}
      `);
    }

    // TRIGGER
    if (packet.isTrigger()) {
      console.log(`Trigger: ${packet.trigger.name}`);
    }

    // INTERACTION_END
    if (packet.isInteractionEnd()) {
      this.conversationProcess.send({
        action: CONVERSATION_ACTION.END_INTERACTION,
        packet,
      });
    }
  };

  private onConversationProcessMessage = (props: {
    action: CLIENT_ACTION;
    data: any;
  }) => {
    switch (props.action) {
      case CLIENT_ACTION.SEND_CANCEL_RESPONSES:
        this.getConnection().sendCancelResponse(
          props.data as unknown as CancelResponsesProps,
        );
        break;
    }
  };

  private handleError = (err: ServiceError) => {
    switch (err.code) {
      case status.ABORTED:
      case status.CANCELLED:
        break;
      default:
        console.error(`Error: ${err.message}`);
        break;
    }
  };

  private getBehavior = (behavior: EmotionBehavior) => {
    switch (true) {
      case behavior.isNeutral():
        return 'Neutral';
      case behavior.isDisgust():
        return 'Disgust';
      case behavior.isContempt():
        return 'Contempt';
      case behavior.isBelligerence():
        return 'Belligerence';
      case behavior.isDomineering():
        return 'Domineering';
      case behavior.isCriticism():
        return 'Criticism';
      case behavior.isAnger():
        return 'Anger';
      case behavior.isTension():
        return 'Tension';
      case behavior.isTenseHumor():
        return 'TenseHumor';
      case behavior.isDefensiveness():
        return 'Defensiveness';
      case behavior.isWhining():
        return 'Whining';
      case behavior.isSadness():
        return 'Sadness';
      case behavior.isStonewalling():
        return 'Stonewalling';
      case behavior.isInterest():
        return 'Interest';
      case behavior.isValidation():
        return 'Validation';
      case behavior.isAffection():
        return 'Affection';
      case behavior.isHumor():
        return 'Humor';
      case behavior.isSurprise():
        return 'Surprise';
      case behavior.isJoy():
        return 'Joy';
    }
  };

  private getStrength = (strength: EmotionStrength) => {
    switch (true) {
      case strength.isWeak():
        return 'Weak';
      case strength.isStrong():
        return 'Strong';
    }
  };
}
