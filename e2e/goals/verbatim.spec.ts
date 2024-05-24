import 'dotenv/config';

import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_VERB!;

test('Should tell player exact phrase', async () => {
  const result = await sendText(key, name, scene, 'How can I get stronger?');
  expect(result[0]).toMatch('Visit the Queen Bee and get a honeybee stinger!');
}, 10000);
