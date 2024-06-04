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
  await allure.label('component', 'Text');
  await allure.description(
    'This test attempts to log into the website using a login and a password. Fails if any error happens.\n\nNote that this test does not test 2-Factor Authentication.',
  );
  await allure.owner('John Doe');
}, 10000);
