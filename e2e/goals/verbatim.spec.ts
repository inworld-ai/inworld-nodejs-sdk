import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

let key: [string, string] = [
  process.env.STUDIO_INTEGRATIONS_API_KEY!,
  process.env.STUDIO_INTEGRATIONS_API_SECRET!,
];
let name: string = 'Tester';
let npc: string = 'workspaces/integrations_testing/characters/verb';

const config = {
  capabilities: { emotions: true },
  connection: {
    autoReconnect: false,
  },
};

jest.retryTimes(3);

test('[Verbatim] NPC should say an exact verbatim when training phrase is triggered', async () => {
  await allure.allureId('884');
  await allure.suite('Node.js SDK');
  await allure.feature('Goals');
  await allure.story('Verbatim');
  await allure.description(
    'This test confirms that NPC says correct exact verbatim when a training phrase is triggered',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendText('How can I get stronger?');
  connection.close();

  expect(result[0]).toMatch('Visit the Queen Bee and get a honeybee stinger!');
}, 10000);
