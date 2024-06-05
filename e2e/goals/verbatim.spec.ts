import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_CASTLE!;

test('[Verbatim] Should tell player exact phrase', async () => {
  await allure.allureId('884');
  await allure.suite('Node.js SDK');
  await allure.feature('Goals');
  await allure.story('Verbatim');
  await allure.description(
    'This test confirms that NPC says correct exact phrase when triggering goal',
  );

  const result = await sendText(key, name, scene, 'How can I get stronger?');
  expect(result[0]).toMatch('Visit the Queen Bee and get a honeybee stinger!');
}, 10000);
