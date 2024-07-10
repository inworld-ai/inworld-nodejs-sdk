import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

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

  const config = {
    capabilities: { emotions: false },
    connection: {
      autoReconnect: false,
    },
  };

  const connection = await openConnectionManually(key, name, npc, config);
  await connection.changeScene(scene);
  const result = await connection.sendText('Do you know where we are?');
  connection.close();

  expect(result[0]).toContain('Hollywood');
}, 10000);
