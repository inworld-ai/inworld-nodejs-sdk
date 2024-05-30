import { sendText } from '../e2e_helpers';

let key: [string, string] = [
  process.env.INWORLD_E2E_KEY!,
  process.env.INWORLD_E2E_SECRET!,
];
let name: string = 'Tester';
let scene: string = process.env.INWORLD_E2E_SCENE_VERB!;

test('Should change emotion', async () => {
  const emotion = await sendText(key, name, scene, 'Hi');

  const emotionChange = await sendText(
    key,
    name,
    scene,
    'How can I get stronger?',
  );

  expect(emotion[1]).not.toMatch(emotionChange[1]);
}, 10000);
