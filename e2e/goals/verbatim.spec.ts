import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let npc: string = process.env.INWORLD_E2E_CHARACTER_VERB!;

jest.retryTimes(3);

test('[Verbatim] NPC should say an exact verbatim when training phrase is triggered', async () => {
  await allure.allureId('884');
  await allure.suite('Node.js SDK');
  await allure.feature('Goals');
  await allure.story('Verbatim');
  await allure.description(
    'This test confirms that NPC says correct exact verbatim when a training phrase is triggered',
  );

  const result = await sendText(key, name, npc, 'How can I get stronger?');
  expect(result[0]).toMatch('Visit the Queen Bee and get a honeybee stinger!');
}, 10000);
