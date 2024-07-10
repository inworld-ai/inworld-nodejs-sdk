import * as allure from 'allure-js-commons';

import { changeSceneSendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let npc: string = process.env.INWORLD_E2E_CHARACTER_SCENE!;
let scene: string = process.env.INWORLD_E2E_SCENE_MOVIESET!;

jest.retryTimes(3);

test('[Scene] NPC should know scene location', async () => {
  await allure.allureId('892');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Scene');
  await allure.description(
    'This test confirms that NPC knows the scene location',
  );

  const result = await changeSceneSendText(
    key,
    name,
    npc,
    scene,
    'Where are we?',
  );
  expect(result[0]).toContain('Hollywood');
}, 10000);
