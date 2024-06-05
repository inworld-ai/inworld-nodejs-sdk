import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Billy';
let scene: string = process.env.INWORLD_E2E_SCENE_MOVIESET!;

test('[Name] Should know NPCs name', async () => {
  await allure.allureId('891');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Name');
  await allure.description('This test confirms that NPC knows its own name');

  const result = await sendText(key, name, scene, 'Whats your name?');
  expect(result[0]).toContain('Scene');
}, 10000);

test('[Name] Should know player name', async () => {
  await allure.allureId('890');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Name');
  await allure.description('This test confirms that NPC knows player name');

  const result = await sendText(key, name, scene, 'Can you say my name?');
  expect(result[0]).toContain('Billy');
}, 10000);
