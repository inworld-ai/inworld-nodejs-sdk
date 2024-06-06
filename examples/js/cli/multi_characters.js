require('dotenv').config();

const { InworldTriggers, MicrophoneMode } = require('@inworld/nodejs-sdk');
const { Client } = require('./components/client');
const { Recorder } = require('./components/recorder');
const {
  conversationInfo,
  listConversations,
  listCharacters,
} = require('./helpers');

const split = require('split');

const conversations = [];
let currentConversationIndex = -1;

const recorder = new Recorder({
  onData: async (data) =>
    conversations[currentConversationIndex]?.sendAudio(data),
  onError: console.error,
});

const client = new Client({
  multiCharacters: true,
  config: {
    capabilities: {
      audio: true,
      debugInfo: true,
      emotions: true,
      silence: true,
    },
  },
  onDisconnect: () => {
    if (recorder.isActive()) {
      console.log(
        'Please execute /start again if you would like to continue audio capturing.',
      );
      recorder.pause();
    }
  },
});

const connection = client.getConnection();

const run = async function () {
  console.info('Starting Client with multi characters support.');
  console.info(`Console commands:
    |- /list-characters - shows available characters (created within the scene).
    |- /list-conversations - shows available conversations.
    |- /info - shows current conversation.
    |- /start-conversation %names% - character resource names of the characters splitted by comma (Get full list using /list-characters command).
    |- /update-conversation %conversation-id% %names% - character resource names  of the characters splitted by comma (Get full list using /list-characters command).
    |- /conversation %conversation-id% - id of the target conversation (Get full list using /list-conversations command).
    |- /next-turn - sends next turn event to force conversation between characters.
    |- /start - starts audio capturing.
    |- /start-push-to-talk - starts audio capturing in push-to-talk mode. Send /end to stop.
    |- /end - ends audio capturing.
    |- <any other text> - sends text event to server.
  `);

  process.stdin.pipe(split()).on('data', async (line) => {
    const [command, ...args] = line.trim().split(' ');
    const currentConversation = conversations[currentConversationIndex];
    let found;

    switch (command) {
      case '/list-characters':
        listCharacters(connection);
        break;

      case '/list-conversations':
        listConversations(connection);
        break;

      case '/info':
        if (currentConversation) {
          conversationInfo(currentConversation);
        } else {
          console.log('No conversation selected');
        }
        break;

      case '/start-conversation':
        const characters = (
          args[0]?.replace(/\s/g, '').split(',') || []
        ).filter((name) => name);

        if (!characters.length) {
          console.log('Please provide characters ids');
          break;
        }

        const conversation = connection.startConversation(characters);

        console.log(
          'Conversation will be started with id:',
          conversation.getConversationId(),
        );
        conversations.push(conversation);
        currentConversationIndex++;
        console.log('------------------------------');
        break;

      case '/update-conversation':
        found = conversations.find((conversation, index) => {
          if (conversation.getConversationId() === args[0]) {
            currentConversationIndex = index;
            return true;
          }
        });

        if (!found) {
          console.log('Conversation not found');
          break;
        }

        const toUpdate = (args[1]?.replace(/\s/g, '').split(',') || []).filter(
          (name) => name,
        );

        const data = await found.updateParticipants(toUpdate);
        console.log(data ? 'Conversation updated' : 'Conversation not updated');
        break;

      case '/conversation':
        found = conversations.find((conversation, index) => {
          if (conversation.getConversationId() === args[0]) {
            currentConversationIndex = index;
            return true;
          }
        });

        console.log(found ? 'Conversation selected' : 'Conversation not found');
        console.log('------------------------------');
        break;

      case '/next-turn':
        if (!currentConversation) {
          console.log('No conversation selected');
          break;
        }

        await currentConversation.sendTrigger(
          InworldTriggers.CONVERSATION_NEXT_TURN,
        );
        break;

      case '/start':
      case '/start-push-to-talk':
        if (!currentConversation) {
          console.log('No conversation selected');
          break;
        }

        const mode =
          command === '/start-push-to-talk'
            ? MicrophoneMode.EXPECT_AUDIO_END
            : undefined;
        await currentConversation.sendAudioSessionStart({ mode });
        recorder.capture();
        break;

      case '/end':
        if (!currentConversation) {
          console.log('No conversation selected');
          break;
        }

        recorder.pause();
        await currentConversation.sendAudioSessionEnd();
        break;

      default:
        if (line && currentConversation) {
          await currentConversation.sendText(line);
        } else if (line && !currentConversation) {
          console.log('No conversation selected');
        }
    }
  });
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

const done = () => {
  recorder.stop();
  client.closeConnection();
  process.exit(0);
};

process.on('SIGINT', done);
process.on('SIGTERM', done);
process.on('SIGUSR2', done);
process.on('unhandledRejection', (err) => {
  console.error(err.message);
  done();
  process.exit(1);
});
