import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_CASTLE!;

jest.retryTimes(5);

test('[Trigger] NPC should give quest when training phrase is triggered', async () => {
  await allure.allureId('885');
  await allure.suite('Node.js SDK');
  await allure.feature('Goals');
  await allure.story('Trigger');
  await allure.description(
    'This test confirms that NPC says correct keyword when triggering a training phrase',
  );

  const result = await sendText(key, name, scene, 'Give me a quest');
  expect(result[0]).toContain('jewel');
}, 10000);
