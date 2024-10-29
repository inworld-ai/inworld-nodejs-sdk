import 'dotenv/config';

import {
  EntityItemProps,
  InworldConnectionService,
  InworldPacket,
} from '@inworld/nodejs-sdk';
import { ChildProcess } from 'child_process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Client } from './components/client';
import {
  actionFunctions,
  compatibleTasks,
  consumeTasks,
  CONVERSATION_ACTION,
  MapSimulatorTriggers,
} from './components/types';
import { addItems, characterInfo, listItems } from './helpers';

const split = require('split');

const argv = yargs(hideBin(process.argv))
  .command('start:map', 'Starts the map simulator')
  .version(false)
  .option('e', {
    type: 'string',
    description: 'Path to YAML entities file',
    demandOption: true,
  })
  .help()
  .parse();

let items: EntityItemProps[] = [];
const currentState: Record<string, any> = {};

let connection: InworldConnectionService;
const client = new Client({
  config: {
    capabilities: {
      debugInfo: true,
      emotions: true,
      multiModalActionPlanning: true,
      logs: true,
      logsWarning: true,
      logsInfo: true,
      logsDebug: true,
    },
  },
  onMessage: async (
    packet: InworldPacket,
    conversationProcess?: ChildProcess,
  ) => {
    if (packet.isText()) {
      console.log(packet.text.text);
      conversationProcess?.send({
        action: CONVERSATION_ACTION.DISPLAY_TEXT,
        packet,
      });
    } else if (packet.isTrigger()) {
      console.log(`Trigger: ${packet.trigger.name}`);
    } else if (packet.isTask()) {
      const name = packet.task.name.replace('inworld.task.', '');
      if (compatibleTasks.includes(name)) {
        if (consumeTasks.includes(name)) {
          const id = packet.task.parameters?.find(
            (p: any) => p.name === 'what',
          )?.value;
          if (id) {
            await connection.entity.removeItems([id]);
            items = items.filter((i) => i.id !== id);
          }
        }

        connection.sendTrigger(MapSimulatorTriggers.TaskSucceeded, {
          parameters: [
            { name: 'task', value: packet.task.name },
            { name: 'outcome', value: 'succeeded' },
            ...(packet.task.parameters ?? []),
          ],
        });

        packet.task.parameters?.forEach((value: any) => {
          if (actionFunctions.includes(value.name)) {
            currentState[value.name] = value.value;
          }
        });

        console.log(
          `Task: ${packet.task.name}`,
          JSON.stringify(packet.task.parameters, null, 2),
        );
      } else {
        connection.sendTrigger(MapSimulatorTriggers.TaskFailed, {
          parameters: [
            { name: 'task', value: packet.task.name },
            { name: 'outcome', value: 'failed' },
            { name: 'reason', value: 'Task not supported' },
            ...(packet.task.parameters ?? []),
          ],
        });
      }
    }
  },
});
connection = client.getConnection();

const run = async function () {
  console.info('Starting MAP Client');
  console.info(`Console commands:
    |- /items - List of available items.
    |- <any other text> - sends text event to server.
  `);
  console.log('Loading characters...');

  // Load characters
  const characters = await connection.getCharacters();
  if (characters.length === 0) {
    console.log('No characters found');
    return process.exit(0);
  } else if (characters.length > 1) {
    console.log(
      'Multiple characters found. Current character is the following.',
    );
  }
  const character = await connection.getCurrentCharacter();
  console.log(characterInfo(character));

  // Load items
  // @ts-ignore
  items = await addItems(connection, argv.e);
  listItems(items);

  process.stdin.pipe(split()).on('data', async (line: string) => {
    const [command] = line.trim().split(' ');

    switch (command) {
      case '/items':
        listItems(items);
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
