import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_MOVIESET!;

jest.retryTimes(3);

test('[Common] NPC should know common knowledge', async () => {
  await allure.allureId('888');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Common');
  await allure.description(
    'This test confirms that NPC knows common knowledge',
  );

  const result = await sendText(key, name, scene, 'Tell me about dogs');
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

  const result = await sendText(key, name, scene, 'Can dogs fly?');
  expect(result[0]).toContain('cheeseburger');
}, 10000);
