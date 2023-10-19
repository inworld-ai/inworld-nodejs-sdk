require('dotenv').config();

const { Client } = require('./components/client');
const { Recorder } = require('./components/recorder');
const { changeCharacter, characterInfo, listAll } = require('./helpers');
const { DISPLAY_WHEN } = require('./components/types');

const split = require('split');

const recorder = new Recorder({
  onData: async (data) => connection.sendAudio(data),
  onError: console.error,
});

const client = new Client({
  config: {
    capabilities: { audio: true, interruptions: true },
  },
  text: { displayWhen: DISPLAY_WHEN.AFTER_AUDIO_PLAYING },
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
  console.info('Starting Client with interruptions.');
  console.info(`Console commands:
    |- /start - starts audio capturing.
    |- /end - ends audio capturing.
    |- /info - shows current character.
    |- /list-all - shows available characters (created within the scene).
    |- /character %character-id% - id of the target character (Get full list using /list-all command).
  `);

  process.stdin.pipe(split()).on('data', async (line) => {
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

      default:
        console.log(`Not supported command: ${line}`);
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
