import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

let key: [string, string] = [
  process.env.STUDIO_INTEGRATIONS_API_KEY!,
  process.env.STUDIO_INTEGRATIONS_API_SECRET!,
];
let name: string = 'Tester';
let npc: string = 'workspaces/integrations_testing/characters/text';

const config = {
  capabilities: { emotions: true },
  connection: {
    autoReconnect: false,
  },
};

jest.retryTimes(3);

test('[Text] NPC should return a response when sent a message', async () => {
  await allure.allureId('925');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Text');
  await allure.description(
    'This test confirms that a response is recieved when sending text to an NPC',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendText('Hello');
  connection.close();

  expect(result[0]).not.toBe('');
}, 10000);
