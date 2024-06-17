import {
  ApiKey,
  DialogPhrase,
  InworldClient,
  InworldConnectionService,
  InworldError,
  InworldPacket,
} from '@inworld/nodejs-sdk';
import { DMChannel, Message, TextChannel, ThreadChannel } from 'discord.js';

interface Interaction {
  text: string[];
  isEnd: boolean;
  isSent: boolean;
  sentCount: number;
  sentMessage?: Message;
  thread?: ThreadChannel;
}

interface Interactions {
  [key: string]: Interaction;
}

interface InworlConnectionProps {
  apiKey: ApiKey;
  threadName: string;
  previousDialog?: DialogPhrase[];
  message: Message;
  onMessage?: (packet: InworldPacket) => void;
  onError?: (err: InworldError) => void;
  onDisconnect?: () => void;
  scene: string;
}

export class InworlConnection {
  private mention: string;
  private connection: InworldConnectionService;
  private interactions: Interactions = {};

  constructor(props: InworlConnectionProps) {
    const {
      apiKey,
      threadName,
      message,
      onMessage,
      onError,
      onDisconnect,
      scene,
    } = props;
    const { author, guild } = message;

    const fullName =
      guild?.members.cache.get(author.id).nickname ??
      author.tag ??
      author.username ??
      '';

    const client = new InworldClient()
      .setApiKey(apiKey)
      .setConfiguration({ capabilities: { audio: false } })
      .setScene(scene)
      .setOnError(onError)
      .setOnDisconnect(() => onDisconnect?.())
      .setOnMessage((packet: InworldPacket) => {
        onMessage?.(packet);
        this.handlePacket({ message, threadName, packet });
      });

    if (props.previousDialog) {
      client.setSessionContinuation({ previousDialog: props.previousDialog });
    }

    if (fullName) {
      client.setUser({ fullName });
    }

    this.connection = client.build();
    this.mention =
      message.channel instanceof DMChannel ? '' : `${author.toString()} `;
  }

  getConnection() {
    return this.connection;
  }

  private textMessage(text: string[]) {
    return `${this.mention}${text.join('')}`;
  }

  private async handlePacket({
    message,
    packet,
    threadName,
  }: {
    message: Message;
    packet: InworldPacket;
    threadName?: string;
  }) {
    const id = packet.packetId.interactionId;

    switch (true) {
      // Interaction ends.
      case packet.isInteractionEnd():
        this.interactions[id].isEnd = true;

        if (this.interationIsDone(id)) {
          delete this.interactions[id];
        }

        this.connection.close();

        break;

      // It's a text.
      case packet.isText():
        this.interactions[id] = this.interactions[id] || {
          text: [],
          isEnd: false,
          isSent: false,
          sentCount: 0,
        };

        const { text, isSent, thread } = this.interactions[id];

        this.interactions[id].text.push(packet.text.text);

        // First sending.
        if (!isSent) {
          const textMessage = this.textMessage(text);
          this.interactions[id].isSent = true;

          if (
            !message.channel.isThread() &&
            !(message.channel instanceof DMChannel) &&
            !thread
          ) {
            this.interactions[id].thread = await (
              message.channel as TextChannel
            ).threads.create({
              name: threadName,
              startMessage: message,
            });
          }

          this.interactions[id].sentMessage = await (this.interactions[id]
            .thread
            ? this.interactions[id].thread.send(textMessage)
            : message.reply(textMessage));
          this.interactions[id].sentCount++;

          if (this.interationIsDone(id)) {
            delete this.interactions[id];
            return;
          }

          // It's possible to have not sent text here because prev sending was done in async way.
          // So edit prev message.
          if (text.length > 1) {
            await this.editMessage(id, text);
          }
          // Edit prev message.
        } else if (this.interactions[id].sentMessage) {
          await this.editMessage(id, text);
        }

        break;
    }
  }

  private interationIsDone(id: string) {
    const interaction = this.interactions[id];

    return (
      interaction.isEnd && interaction.sentCount === interaction.text.length
    );
  }

  private async editMessage(id: string, text: string[]) {
    await this.interactions[id].sentMessage.edit(this.textMessage(text));

    this.interactions[id].sentCount++;

    if (this.interationIsDone(id)) {
      delete this.interactions[id];
    }
  }
}
