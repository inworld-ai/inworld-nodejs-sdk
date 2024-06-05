import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_MOVIESET!;

test('[Scene] Should know scene location', async () => {
  await allure.allureId('892');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Scene');
  await allure.description('This test confirms that NPC knows scene location');

  const result = await sendText(
    key,
    name,
    scene,
    'Do you know where our physical location is?',
  );
  expect(result[0]).toContain('Hollywood');
}, 10000);
