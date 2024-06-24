import * as allure from 'allure-js-commons';

import { getPacketsNewChat } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_HOUSE!;

test('[Packet] Packet properties are correct for new connection with no text sent', async () => {
  await allure.allureId('1255');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with no text sent are correct',
  );

  const result = await getPacketsNewChat(key, name, scene);

  result.forEach((packet) => {
    if (packet.isSceneMutationResponse()) {
      // control
      expect(packet.isSceneMutationResponse).toBeTruthy();
      // packetId
      expect(packet.packetId.packetId).toBeDefined();
      expect(packet.packetId.utteranceId).toBeDefined();
      expect(packet.packetId.correlationId).toBeDefined();
      // routing
      expect(packet.routing.source).toBeDefined();
      expect(packet.routing.targets).toBeDefined();
      expect(packet.routing.source.isCharacter).toBeFalsy();
      expect(packet.routing.source.isPlayer).toBeFalsy();
      // date
      expect(packet.date).toBeDefined();
      expect(packet.sceneMutation.name).toBeDefined();
      expect(packet.sceneMutation.description).toBeDefined();
      expect(packet.sceneMutation.displayName).toBeDefined();
      expect(packet.sceneMutation.loadedCharacters).toBeDefined();
    }
  });
}, 10000);
