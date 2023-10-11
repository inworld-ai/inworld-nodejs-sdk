import {
  CancelResponsesProps,
  ClientConfiguration,
  InworldClient,
  InworldConnectionService,
  InworldPacket,
  ServiceError,
  status,
} from '@inworld/nodejs-sdk';
import { ChildProcess, fork } from 'child_process';
import * as kill from 'tree-kill';

import { CLIENT_ACTION, CONVERSATION_ACTION, DISPLAY_WHEN } from './types';

export interface ClientProps {
  config?: ClientConfiguration;
  previousState?: string;
  text?: { displayWhen: DISPLAY_WHEN };
  onDisconnect: () => void;
}
export class Client {
  private client: InworldClient;
  private config: ClientConfiguration | undefined;
  private connection: InworldConnectionService | null = null;
  private conversationProcess: ChildProcess;
  private interactionIsEnded: boolean = false;

  constructor(props: ClientProps) {
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

  interrupt(packet: InworldPacket) {
    if (!this.config?.capabilities?.interruptions) return;

    this.conversationProcess.send({
      action: CONVERSATION_ACTION.INTERRUPT,
      packet,
    });
  }

  getInteractionIsEnded() {
    return this.interactionIsEnded;
  }

  private onMessage = (packet: InworldPacket) => {
    this.interactionIsEnded = false;

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
        behavior = ${packet.emotions.behavior.code},
        strength = ${packet.emotions.strength.code}
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

    // INTERACTION_END
    if (packet.isInteractionEnd()) {
      this.interactionIsEnded = true;
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
}
