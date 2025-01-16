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

test('[Trigger] NPC should give quest when training phrase is triggered', async () => {
  await allure.allureId('885');
  await allure.suite('Node.js SDK');
  await allure.feature('Goals');
  await allure.story('Trigger');
  await allure.description(
    'This test confirms that NPC says correct keyword when triggering a training phrase',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendText('Give me a quest');
  connection.close();

  expect(result[0]).toContain('jewel');
}, 10000);
