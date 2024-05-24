import 'dotenv/config';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Billy';
let scene: string = process.env.INWORLD_E2E_SCENE_SCENE!;

test('Should know NPCs name', async () => {
  const result = await sendText(key, name, scene, 'Whats your name?');
  expect(result[0]).toContain('Scene');
}, 10000);

test('Should know player name', async () => {
  const result = await sendText(key, name, scene, 'Whats my name?');
  expect(result[0]).toContain('Billy');
}, 10000);
