import {
  CancelResponsesProps,
  ClientConfiguration,
  InworldClient,
  InworldConnectionService,
  InworldError,
  InworldPacket,
  status,
} from '@inworld/nodejs-sdk';
import { ChildProcess, fork } from 'child_process';
import * as kill from 'tree-kill';

import { characterInfo } from '../helpers';
import { CLIENT_ACTION, CONVERSATION_ACTION, DISPLAY_WHEN } from './types';

export interface ClientProps {
  multiCharacters?: boolean;
  config?: ClientConfiguration;
  previousState?: string | Uint8Array;
  text?: { displayWhen: DISPLAY_WHEN };
  onDisconnect?: () => void;
  onMessage?: (
    packet: InworldPacket,
    conversationProcess?: ChildProcess,
  ) => void;
}
export class Client {
  private client: InworldClient;
  private config: ClientConfiguration | undefined;
  private connection: InworldConnectionService | null = null;
  private conversationProcess: ChildProcess;
  private interactionIsEnded: boolean = false;
  private notHandledPackets: InworldPacket[] = [];

  constructor(props: ClientProps) {
    this.conversationProcess = fork(`${__dirname}/conversation_process.ts`);
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
        key: process.env.INWORLD_KEY!,
        secret: process.env.INWORLD_SECRET!,
      })
      .setScene(process.env.INWORLD_SCENE!)
      .setOnError(this.handleError)
      .setOnDisconnect(() => {
        console.log('Disconnected');
        props.onDisconnect?.();
      })
      .setOnMessage((packet: InworldPacket) => {
        const callback = props.onMessage ?? this.onMessage;

        callback(packet, this.conversationProcess);
      });

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
      console.log(`Log: ${JSON.stringify(packet.log, null, 2)}`);
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

  private handleError = (err: InworldError) => {
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
