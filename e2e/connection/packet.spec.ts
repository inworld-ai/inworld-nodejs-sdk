import * as allure from 'allure-js-commons';

import {
  openConnectionManually,
  openConnectionManuallySendText,
} from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let npc: string = process.env.INWORLD_E2E_CHARACTER_TEXT!;

test('[Packet] Packet properties are correct for new connection with no text sent', async () => {
  await allure.allureId('1255');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with no text sent are correct',
  );

  const connection = await openConnectionManually(key, name, npc);
  connection.close();
}, 10000);

test('[Packet] Packet properties are correct for new connection with text sent', async () => {
  // await allure.allureId('1255');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with text sent are correct',
  );

  const connection = await openConnectionManuallySendText(key, name, npc, 'Hi');
  connection.close();
}, 10000);
