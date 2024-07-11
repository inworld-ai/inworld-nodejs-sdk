import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let npc: string = process.env.INWORLD_E2E_CHARACTER_SCENE!;

const config = {
  capabilities: { emotions: true },
  connection: {
    autoReconnect: false,
  },
};

jest.retryTimes(3);

test('[Common] NPC should know common knowledge', async () => {
  await allure.allureId('888');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Common');
  await allure.description(
    'This test confirms that NPC knows common knowledge',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendText('Tell me about dogs');
  connection.close();

  expect(result[0]).toContain('magic');
}, 10000);

test('[Common] NPC should know multiple lines of common knowledge', async () => {
  await allure.allureId('887');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Common');
  await allure.description(
    'This test confirms that NPC can know multiple lines of common knowledge',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendText('Can dogs fly?');
  connection.close();

  expect(result[0]).toContain('cheeseburger');
}, 10000);
