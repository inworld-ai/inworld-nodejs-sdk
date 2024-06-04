// import 'dotenv/config';

import * as allure from 'allure-js-commons';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_HOUSE!;

test('Should return a response', async () => {
  const result = await sendText(key, name, scene, 'Hi there!');
  expect(result[0]).not.toBe('');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Text');
  await allure.description(
    'This test confirms that a response is recieved when sending text to an NPC',
  );
  await allure.displayName(
    'Node js > Connection >Text: Should return a response',
  );
  await allure.testCaseId('925');
}, 10000);
