import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let npc: string = process.env.INWORLD_E2E_CHARACTER_VERB!;

const config = {
  capabilities: { emotions: true },
  connection: {
    autoReconnect: false,
  },
};

jest.retryTimes(3);

test('[Emotion] NPC should change emotion upon triggering training phrase', async () => {
  await allure.allureId('889');
  await allure.suite('Node.js SDK');
  await allure.feature('Goals');
  await allure.story('Emotion');
  await allure.description(
    'This test confirms that emotion changes when triggering a training phrase with an NPC',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  const emotion = await connection.sendText('Hi');
  const emotionChange = await connection.sendText(
    'Whats the best weapon I can get?',
  );
  connection.close();

  expect(emotion[1]).not.toMatch(emotionChange[1]);
}, 10000);
