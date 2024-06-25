import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let npc: string = process.env.INWORLD_E2E_CHARACTER_VERB!;

jest.retryTimes(3);

test('[Emotion] NPC should change emotion upon triggering training phrase', async () => {
  await allure.allureId('889');
  await allure.suite('Node.js SDK');
  await allure.feature('Goals');
  await allure.story('Emotion');
  await allure.description(
    'This test confirms that emotion changes when triggering a training phrase with an NPC',
  );

  const emotion = await sendText(key, name, npc, 'Hi');

  const emotionChange = await sendText(
    key,
    name,
    npc,
    'How can I get stronger?',
  );

  expect(emotion[1]).not.toMatch(emotionChange[1]);
}, 10000);
