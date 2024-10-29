require('dotenv').config();

const {
  DislikeType,
  MicrophoneMode,
  UnderstandingMode,
} = require('@inworld/nodejs-sdk');

const { Client } = require('./components/client');
const { Recorder } = require('./components/recorder');
const {
  changeCharacter,
  characterInfo,
  changeScene,
  addCharacters,
  listCharacters,
} = require('./helpers');

const split = require('split');

const recorder = new Recorder({
  onData: async (data) => connection.sendAudio(data),
  onError: console.error,
});

const client = new Client({
  config: {
    capabilities: {
      audio: true,
      emotions: true,
      narratedActions: true,
      silence: true,
      debugInfo: true,
      logs: true,
      logsWarning: true,
      logsInfo: true,
      logsDebug: true,
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
    |- /start-push-to-talk - starts audio capturing in push-to-talk mode. Send /end to stop.
    |- /start-recognition-only - starts audio capturing in recognition-only mode. Send /end to stop.
    |- /end - ends audio capturing.
    |- /trigger %name% %params%  - send trigger with name and params. (Params should be in JSON format such as [{"name":"value","value":"invalid"}]. Params are optional.)
    |- /narration - send narrated action.
    |- /info - shows current character.
    |- /list-all - shows available characters (created within the scene).
    |- /character %character-id% - id of the target character (Get full list using /list-all command).
    |- /like %interaction-id% %correlation-id% - send feedback for the interaction (%correlation-id% is optional).
    |- /dislike %interaction-id% %type% %correlation-id% - send feedback for the interaction (%correlation-id% is optional).
        Type can be one of the following: ${Object.keys(DislikeType).join(
          ', ',
        )}.
    |- /undo-feedback %name% - undo like or dislike.
    |- /change-scene %scene% - scene resource name to be loaded: workspaces/{workspace}/scenes/{scene}
    |- /add-characters %characters% - list of characters to be loaded: workspaces/{workspace}/characters/{character}. Use comma to separate characters.
    |- c - cancel current response.
    |- <any other text> - sends text event to server.
  `);

  process.stdin.pipe(split()).on('data', async (line) => {
    const [command, ...args] = line.trim().split(' ');

    switch (command) {
      case '/start':
      case '/start-push-to-talk':
      case '/start-recognition-only':
        const mode =
          command === '/start-push-to-talk'
            ? MicrophoneMode.EXPECT_AUDIO_END
            : undefined;
        const understandingMode =
          command === '/start-recognition-only'
            ? UnderstandingMode.SPEECH_RECOGNITION_ONLY
            : undefined;
        await connection.sendAudioSessionStart({ mode, understandingMode });
        recorder.capture();
        break;

      case '/end':
        recorder.pause();
        await connection.sendAudioSessionEnd();
        break;

      case '/list-all':
        listCharacters(connection);
        break;

      case '/info':
        const character = await connection.getCurrentCharacter();
        console.log(characterInfo(character));
        console.log('------------------------------');
        break;

      case '/character':
        changeCharacter(connection, args[0]);
        break;

      case '/like':
      case '/dislike':
        console.log('Sending. Wait...');

        let feedback;

        if (command === '/like') {
          feedback = connection.feedback.like({
            interactionId: args[0],
            correlationId: args[1],
          });
        } else {
          feedback = connection.feedback.dislike({
            comment: 'Test example',
            interactionId: args[0],
            types: [DislikeType[args[1]]],
            correlationId: args[2],
          });
        }

        await feedback
          .then((sent) =>
            console.log('Feedback sent successfully with name', sent.name),
          )
          .catch((err) =>
            console.log('Feedback was not sent successfully: ', err.message),
          );
        break;

      case '/undo-feedback':
        console.log('Undoing. Wait...');

        await connection.feedback
          .undo(args[0])
          .then(() => console.log('Feedback undone successfully'))
          .catch((err) =>
            console.log('Feedback was not undone successfully: ', err.message),
          );
        break;

      case '/change-scene':
        changeScene(connection, args[0]);
        break;

      case '/add-characters':
        if (args.length) {
          await addCharacters(connection, args);
        } else {
          console.log('/add-characters requires characters list');
        }
        break;

      case 'c':
        await connection.sendCancelResponse();
        break;

      case '/trigger':
        if (args[0]) {
          await connection.sendTrigger(args[0], {
            parameters: args[1] ? JSON.parse(args[1]) : [],
          });
        } else {
          console.log('/trigger requires trigger name');
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
process.on('unhandledRejection', (err) => {
  console.error(err.message);
  done();
  process.exit(1);
});
