import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Billy';
let scene: string = process.env.INWORLD_E2E_SCENE_MOVIESET!;

test('Should know personal knowledge', async () => {
  const result = await sendText(key, name, scene, 'Do you have a twin?');
  expect(result[0]).toContain('Johnny');
}, 10000);
