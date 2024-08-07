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

test('[Personal] NPC should know personal knowledge', async () => {
  await allure.allureId('886');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Personal');
  await allure.description(
    'This test confirms that NPC knows its own personal Knowledge',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendText(
    'Do you have a twin? If so, what is their name?',
  );
  connection.close();

  expect(result[0]).toContain('Johnny');
}, 10000);
