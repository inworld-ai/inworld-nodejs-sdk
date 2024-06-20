import * as allure from 'allure-js-commons';

import { getPacketsNewChat } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_HOUSE!;

test('[Packet] Packet properties exist for new connection with no text sent', async () => {
  // await allure.allureId('');
  await allure.suite('Node.js SDK');
  await allure.feature('Connection');
  await allure.story('Packet');
  await allure.description(
    'This test confirms that all packet properties for a new connection with no text sent exist and are not Null',
  );

  const result = await getPacketsNewChat(key, name, scene);

  result.forEach((packet) => {
    if (packet.isSceneMutationResponse()) {
      // packetId
      expect(packet.packetId.packetId).not.toBeNull();
      expect(packet.packetId.packetId).not.toBeUndefined();
      expect(packet.packetId.utteranceId).not.toBeNull();
      expect(packet.packetId.utteranceId).not.toBeUndefined();
      expect(packet.packetId.correlationId).not.toBeNull();
      expect(packet.packetId.correlationId).not.toBeUndefined();
      // routing
      expect(packet.routing.source).not.toBeNull();
      expect(packet.routing.source).not.toBeUndefined();
      expect(packet.routing.targets).not.toBeNull();
      expect(packet.routing.targets).not.toBeUndefined();
      expect(packet.routing.source.isCharacter).toBeFalsy();
      expect(packet.routing.source.isPlayer).toBeFalsy();
      // date
      expect(packet.date).not.toBeNull();
      expect(packet.date).not.toBeUndefined();
      // sceneMutation
      expect(packet.sceneMutation.name).toMatch(scene);
      expect(packet.sceneMutation.description).toMatch('Bookstore');
      expect(packet.sceneMutation.displayName).toMatch("Text's House");
      expect(packet.sceneMutation.loadedCharacters).not.toBeNull();
      expect(packet.sceneMutation.loadedCharacters).not.toBeUndefined();
    }
  });
}, 40000);
