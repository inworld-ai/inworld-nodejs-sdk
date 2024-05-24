import 'dotenv/config';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_SCENE!;

test('Should know common knowledge about dogs', async () => {
  const result = await sendText(key, name, scene, 'Tell me about dogs');
  expect(result[0]).toContain('magic');
}, 10000);

test('Should know common knowledge about dogs flying', async () => {
  const result = await sendText(key, name, scene, 'Can dogs fly?');
  expect(result[0]).toContain('cheeseburger');
}, 10000);
