import * as allure from 'allure-js-commons';

import { sendAudio } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_MOVIESET!;

test('[Audio] Should return a response', async () => {
  await allure.allureId('883');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Audio');
  await allure.description(
    'This test confirms that a response is recieved when sending audio to an NPC',
  );
  const result = await sendAudio(key, name, scene, 'e2e/connection/test.wav');
  expect(result[0]).not.toBe('');
}, 10000);
