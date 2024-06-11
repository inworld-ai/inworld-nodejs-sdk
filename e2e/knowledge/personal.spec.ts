import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Billy';
let scene: string = process.env.INWORLD_E2E_SCENE_MOVIESET!;

jest.retryTimes(3);

test('[Personal] NPC should know personal knowledge', async () => {
  await allure.allureId('886');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Personal');
  await allure.description(
    'This test confirms that NPC knows its own personal Knowledge',
  );

  const result = await sendText(
    key,
    name,
    scene,
    'Do you have a twin? If so what is their name?',
  );
  expect(result[0]).toContain('Johnny');
}, 10000);
