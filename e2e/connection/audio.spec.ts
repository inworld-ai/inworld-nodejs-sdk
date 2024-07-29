import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let npc: string = process.env.INWORLD_E2E_CHARACTER_AUDIO!;

const config = {
  capabilities: { emotions: true },
  connection: {
    autoReconnect: false,
  },
};

jest.retryTimes(3);

test('[Audio] NPC should return a response when sent audio', async () => {
  await allure.allureId('883');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Audio');
  await allure.description(
    'This test confirms that a response is recieved when sending audio to an NPC',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  const result = await connection.sendAudio('e2e/connection/test.wav');
  connection.close();

  expect(result[0]).not.toBe('');
}, 10000);
