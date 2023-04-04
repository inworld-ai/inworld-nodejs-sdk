import { EmotionEvent } from '@proto/packets_pb';

import { EmotionStrength } from '../../src/entities/emotion-strength.entity';

test('should be weak', () => {
  const strength = new EmotionStrength(EmotionEvent.Strength.WEAK);

  expect(strength.isWeak()).toEqual(true);
});

test('should be disgust', () => {
  const behavior = new EmotionStrength(EmotionEvent.Strength.STRONG);

  expect(behavior.isStrong()).toEqual(true);
});
