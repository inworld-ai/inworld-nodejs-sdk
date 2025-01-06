import 'dotenv/config';

import { MicrophoneMode } from '@inworld/nodejs-sdk';

import { Client, ClientProps } from './components/client';
import { Recorder } from './components/recorder';
import { changeCharacter, characterInfo, listCharacters } from './helpers';

const split = require('split');

const DISCONNECT_TIMEOUT = 2 * 60 * 1000; // 2 minutes

const recorder = new Recorder({
  onData: async (data: string) => connection.sendAudio(data),
  onError: console.error,
});

const props: ClientProps = {
  config: {
    capabilities: {
      audio: true,
      debugInfo: true,
      emotions: true,
      narratedActions: true,
      silence: true,
      logsWarning: true,
      logsInfo: true,
      logsDebug: true,
      logsInternal: true,
    },
    connection: {
      autoReconnect: false,
      disconnectTimeout: DISCONNECT_TIMEOUT,
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
};

const build = (props: ClientProps) => {
  const client = new Client(props);
  const connection = client.getConnection();

  return { client, connection };
};

const open = async () => {
  await connection.open();

  console.log(
    `Connection is open and will be closed in ${
      DISCONNECT_TIMEOUT / 1000
    } seconds`,
  );
};

let sessionState: string | Uint8Array | undefined;
let { client, connection } = build(props);

const run = async function () {
  console.info('Starting Client with manual reconnect.');
  console.info(`Console commands:
    |- /open - open connection.
    |- /close - close connection.
    |- /save-session-state - save session state in app memory as string.
    |- /save-session-state-bytes - save session state in app memory as bytes.
    |- /restore-session-state - restore session state from app memory.
    |- /start - starts audio capturing.
    |- /start-push-to-talk - starts audio capturing in push-to-talk mode. Send /end to stop.
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
      case '/start-push-to-talk':
        if (connection.isActive()) {
          console.log('Starting. Wait...');
          const mode =
            command === '/start-push-to-talk'
              ? MicrophoneMode.EXPECT_AUDIO_END
              : undefined;
          await connection.sendAudioSessionStart({ mode });
          console.log('Ready to listening...');
          recorder.capture();
        } else {
          console.log('Open connection first');
        }
        break;

      case '/end':
        if (connection.isActive()) {
          recorder.pause();
          await connection.sendAudioSessionEnd();
        } else {
          console.log('Open connection first');
        }

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

      case '/open':
        console.log('Opening. Wait...');
        await open();
        break;

      case '/close':
        connection.close();
        break;

      case '/save-session-state':
      case '/save-session-state-bytes':
        if (!connection.isActive() || !client.getInteractionIsEnded()) {
          console.log('Open connection first and send at least one packet');
        } else {
          console.log('Saving. Wait...');
          const state = await connection.getSessionState();
          sessionState =
            command === '/save-session-state' ? state.state : state.stateU8;
          if (sessionState) {
            console.log('State:', sessionState);
            console.log('interactionId: ', state.version?.interactionId);
          }

          console.log(
            sessionState
              ? 'Session state is saved.'
              : 'Session state is not saved',
          );
        }
        break;

      case '/restore-session-state':
        if (connection.isActive()) {
          console.log('Close connection first');
        } else {
          if (sessionState) {
            console.log('Restoring. Wait...');
            ({ client, connection } = build({
              ...props,
              previousState: sessionState,
            }));
            await open();
            console.log('Session state is restored.');
          } else {
            console.log('Nothing to restore...');
          }
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
  connection.close();
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
