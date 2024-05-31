import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_HOUSE!;

test('Should return a response', async () => {
  const result = await sendText(key, name, scene, 'Hi there!');
  expect(result[0]).not.toBe('');
}, 10000);
