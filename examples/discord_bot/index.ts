import 'dotenv/config';

import {
  InworldClient,
  InworldPacket,
  ServiceError,
  SessionToken,
  status,
} from '@inworld/nodejs-sdk';
import {
  Client,
  DMChannel,
  GatewayIntentBits,
  Message,
  Partials,
  TextChannel,
} from 'discord.js';
import { createClient } from 'redis';

const redisClient = createClient();
const discordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessageReactions,
  ],
  partials: [Partials.Channel],
});

const run = async function () {
  await redisClient.connect();

  discordClient.on('ready', () => {
    console.log("I'm ready!");
  });

  discordClient.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return;

    if (message.channel instanceof DMChannel) {
      sendMessage(message, true);
    } else if (discordClient.user && message.mentions.has(discordClient.user)) {
      sendMessage(message);
    }
  });

  discordClient.login(process.env.DISCORD_BOT_TOKEN);
};

if (!process.env.INWORLD_KEY) {
  throw new Error('INWORLD_KEY env variable is required');
}

if (!process.env.INWORLD_SECRET) {
  throw new Error('INWORLD_SECRET env variable is required');
}

if (!process.env.INWORLD_SCENE) {
  throw new Error('INWORLD_SCENE env variable is required');
}

run();

const sendMessage = async (message: Message, direct?: boolean) => {
  const content = message.content.replace(`<@${discordClient.user?.id}>`, '');

  const client = await createInworldClient({ direct, message });

  client.sendText(content);
};

const getKey = (message: Message) =>
  `${message.channel.id}_${message.author.id}`;

const generateSessionToken = (key: string) => {
  return async () => {
    const client = new InworldClient().setApiKey({
      key: process.env.INWORLD_KEY!,
      secret: process.env.INWORLD_SECRET!,
    });
    const token = await client.generateSessionToken();

    const sessionId = await redisClient.get(key);
    const actualToken = new SessionToken({
      expirationTime: token.getExpirationTime(),
      token: token.getToken(),
      type: token.getType(),
      sessionId: sessionId ?? token.getSessionId(),
    });

    if (!sessionId) {
      redisClient.set(key, actualToken.getSessionId());
    }

    return actualToken;
  };
};

const createInworldClient = async (props: {
  message: Message;
  direct?: boolean;
}) => {
  const { message, direct } = props;

  const key = getKey(message);
  const client = new InworldClient()
    .setGenerateSessionToken(generateSessionToken(key))
    .setConfiguration({
      capabilities: { audio: false },
      ...(!direct && { connection: { disconnectTimeout: 5 * 1000 } }),
    })
    .setScene(process.env.INWORLD_SCENE!)
    .setOnError(handleError(message))
    .setOnMessage((packet: InworldPacket) => {
      if (!direct && packet.isInteractionEnd()) {
        client.close();
        return;
      }

      if (packet.isText() && packet.text.final) {
        (message.channel as TextChannel).send(packet.text.text);
      }
    })
    .build();

  return client;
};

const handleError = (message: Message, direct?: boolean) => {
  return (err: ServiceError) => {
    switch (err.code) {
      case status.ABORTED:
      case status.CANCELLED:
        break;
      case status.FAILED_PRECONDITION:
        redisClient.del(getKey(message));
        sendMessage(message, direct);
        break;
      default:
        console.error(`Error: ${err.message}`);
        break;
    }
  };
};

const done = () => {
  redisClient.disconnect();
  discordClient.destroy();
};

redisClient.on('error', (err) => console.log('Redis Client Error', err));

process.on('SIGINT', done);
process.on('SIGTERM', done);
process.on('SIGUSR2', done);
process.on('unhandledRejection', (err: Error) => {
  console.error(err.message);
  done();
  process.exit(1);
});
