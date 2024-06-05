import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_CASTLE!;

test('[Emotion] Should change emotion', async () => {
  await allure.allureId('889');
  await allure.suite('Node.js SDK');
  await allure.feature('Goals');
  await allure.story('Emotion');
  await allure.description(
    'This test confirms that emotion changes when triggering a goal with an NPC',
  );

  const emotion = await sendText(key, name, scene, 'Hi');

  const emotionChange = await sendText(
    key,
    name,
    scene,
    'How can I get stronger?',
  );

  expect(emotion[1]).not.toMatch(emotionChange[1]);
}, 10000);
