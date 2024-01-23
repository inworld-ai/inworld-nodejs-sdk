import 'dotenv/config';

import { Client } from './components/client';
import { Recorder } from './components/recorder';
import { changeCharacter, characterInfo, listAll } from './helpers';

const split = require('split');

const recorder = new Recorder({
  onData: async (data: string) => connection.sendAudio(data),
  onError: console.error,
});

const client = new Client({
  config: {
    capabilities: {
      audio: true,
      emotions: true,
      narratedActions: true,
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
  console.info('Starting Client with auto reconnect.');
  console.info(`Console commands:
    |- /start - starts audio capturing.
    |- /end - ends audio capturing.
    |- /trigger - send trigger.
    |- /narration - send narrated action.
    |- /info - shows current character.
    |- /list-all - shows available characters (created within the scene).
    |- /character %character-id% - id of the target character (Get full list using /list-all command).
    |- c - cancel current response.
    |- <any other text> - sends text event to server.
  `);

  process.stdin.pipe(split()).on('data', async (line: string) => {
    const [command, ...args] = line.trim().split(' ');

    switch (command) {
      case '/start':
        await connection.sendAudioSessionStart();
        recorder.capture();
        break;

      case '/end':
        recorder.pause();
        await connection.sendAudioSessionEnd();
        break;

      case '/list-all':
        listAll(connection);
        break;

      case '/info':
        const character = await connection.getCurrentCharacter();
        console.log(characterInfo(character));
        console.log('------------------------------');
        break;

      case '/character':
        changeCharacter(connection, args[0]);
        break;

      case 'c':
        await connection.sendCancelResponse();
        break;

      case '/trigger':
        if (args[0]) {
          await connection.sendTrigger(args[0]);
        } else {
          console.log('/trigger requires trigger id name');
        }
        break;

      case '/narration':
        if (args.length) {
          await connection.sendNarratedAction(args.join(' '));
          console.log('Narration sent');
        } else {
          console.log('/narration requires text');
        }
        break;

      default:
        if (line) {
          await connection.sendText(line);
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
process.on('unhandledRejection', (err: Error) => {
  console.error(err.message);
  done();
  process.exit(1);
});
