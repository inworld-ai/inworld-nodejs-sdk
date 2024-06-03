import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_CASTLE!;

test('Should tell player to visit castle and retrieve jewel', async () => {
  const result = await sendText(key, name, scene, 'Give me a quest');
  expect(result[0]).toContain('jewel');
}, 10000);
