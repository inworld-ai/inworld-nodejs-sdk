import 'dotenv/config';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_KEY_TEXT!,
  process.env.INWORLD_SECRET_TEXT!,
];
let name: string = 'Billy';
let scene: string = process.env.INWORLD_SCENE_TEXT!;

test('Get stronger', async () => {
  const result = await sendText(key, name, scene, 'How do i get stronger?');
  expect(result[0]).toContain('Queen Bee');
}, 10000);

test('Where are we', async () => {
  const result = await sendText(key, name, scene, 'Describe where we are at');
  expect(result[0]).toContain('glass');
}, 10000);
