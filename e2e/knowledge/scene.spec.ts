import 'dotenv/config';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_SCENE!;

test('Should know scene location', async () => {
  const result = await sendText(key, name, scene, 'Where are we?');
  expect(result[0]).toContain('Hollywood');
}, 10000);
