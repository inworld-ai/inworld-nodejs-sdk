import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

let key: [string, string] = [
  process.env.STUDIO_INTEGRATIONS_API_KEY!,
  process.env.STUDIO_INTEGRATIONS_API_SECRET!,
];
let name: string = 'Tester';
let npc: string = 'workspaces/integrations_testing/characters/text';
let npc2: string = 'workspaces/integrations_testing/characters/narrator';
let npc3: string = 'workspaces/integrations_testing/characters/verb';

const config = {
  capabilities: { emotions: true },
  connection: {
    autoReconnect: false,
  },
};

const config2 = {
  capabilities: { emotions: true, narratedActions: true },
  connection: {
    autoReconnect: false,
  },
};

test('[Packet] Packet properties are correct for new connection with nothing sent', async () => {
  await allure.allureId('1255');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with nothing sent are correct',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  connection.close();
}, 10000);

test('[Packet] Packet properties are correct for new connection with text sent', async () => {
  await allure.allureId('1354');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with text sent are correct',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  await connection.sendText('Hi');
  connection.close();
}, 10000);

test('[Packet] Packet properties are correct for new connection with audio sent', async () => {
  await allure.allureId('1457');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with audio sent are correct',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  await connection.sendAudio('e2e/connection/test.wav');
  connection.close();
}, 30000);

test('[Packet] Packet properties are correct for new connection with narrated actions sent', async () => {
  await allure.allureId('1633');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with narrated actions sent are correct',
  );

  const connection = await openConnectionManually(key, name, npc2, config2);
  await connection.sendNarrated(
    '{character}s neighbour Paul was murdered in his apartment. {player}, who is a detective, responsible for investigating the case, meets {character} near entrance of their apartment.',
  );
  await connection.sendText('Hello');
  connection.close();
}, 10000);

test('[Packet] Packet properties are correct for new connection with trigger sent', async () => {
  await allure.allureId('1682');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with trigger sent are correct',
  );

  const connection = await openConnectionManually(key, name, npc3, config);
  await connection.sendTrigger('greeting');
  connection.close();
}, 10000);
