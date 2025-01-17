import * as allure from 'allure-js-commons';

import { openConnectionManually } from '../e2e_helpers';

let key: [string, string] = [
  process.env.STUDIO_INTEGRATIONS_API_KEY!,
  process.env.STUDIO_INTEGRATIONS_API_SECRET!,
];
let name: string = 'Tester';
let npc: string = 'workspaces/integrations_testing/characters/scene';
let scene: string = 'workspaces/integrations_testing/scenes/movie_set';

const config = {
  capabilities: { emotions: false },
  connection: {
    autoReconnect: false,
  },
};

jest.retryTimes(3);

test('[Scene] NPC should know scene location', async () => {
  await allure.allureId('892');
  await allure.suite('Node.js SDK');
  await allure.feature('Knowledge');
  await allure.story('Scene');
  await allure.description(
    'This test confirms that NPC knows the scene location',
  );

  const connection = await openConnectionManually(key, name, npc, config);
  await connection.changeScene(scene);
  const result = await connection.sendText(
    'Do you know where we currently are?',
  );
  connection.close();

  expect(result[0]).toContain('Hollywood');
}, 10000);
