// import 'dotenv/config';

import { sendAudio } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Billy';
let scene: string = process.env.INWORLD_E2E_SCENE_SCENE!;

test('Get stronger', async () => {
  const result = await sendAudio(key, name, scene, 'e2e/audio/test.wav');
  expect(result[0]).not.toBe('');
}, 10000);
