import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Billy';
let npc: string = process.env.INWORLD_E2E_CHARACTER_SCENE!;

const config = {
  capabilities: { emotions: true },
  connection: {
    autoReconnect: false,
  },
};

jest.retryTimes(3);

test('[Name] NPC should know its own name', async () => {
  await allure.allureId('891');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Name');
  await allure.description('This test confirms that NPC knows its own name');

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendText('Whats your name?');
  connection.close();

  result[0] = result[0].toLowerCase();
  expect(result[0]).toContain('scene');
}, 10000);

test('[Name] NPC should know player name', async () => {
  await allure.allureId('890');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Name');
  await allure.description('This test confirms that NPC knows player name');

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendText('Can you say my name?');
  connection.close();

  result[0] = result[0].toLowerCase();
  expect(result[0]).toContain('billy');
}, 10000);
