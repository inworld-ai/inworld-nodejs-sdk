import { EmotionEvent } from '@proto/ai/inworld/packets/packets_pb';

import {
  EmotionStrength,
  EmotionStrengthCode,
} from '../../src/entities/packets/emotion/emotion_strength.entity';

const mappingTestTable = [
  {
    input: EmotionEvent.Strength.WEAK,
    expected: EmotionStrengthCode.WEAK,
  },
  {
    input: EmotionEvent.Strength.STRONG,
    expected: EmotionStrengthCode.STRONG,
  },
  {
    input: EmotionEvent.Strength.NORMAL,
    expected: EmotionStrengthCode.NORMAL,
  },
  {
    input: EmotionEvent.Strength.UNSPECIFIED,
    expected: EmotionStrengthCode.UNSPECIFIED,
  },
];

test('should be weak', () => {
  const strength = new EmotionStrength(EmotionStrengthCode.WEAK);

  expect(strength.code).toEqual(EmotionStrengthCode.WEAK);
});

test('should be strong', () => {
  const strength = new EmotionStrength(EmotionStrengthCode.STRONG);

  expect(strength.code).toEqual(EmotionStrengthCode.STRONG);
});

test('should be normal', () => {
  const strength = new EmotionStrength(EmotionStrengthCode.NORMAL);

  expect(strength.code).toEqual(EmotionStrengthCode.NORMAL);
});

test('should be unspecified', () => {
  const strength = new EmotionStrength(EmotionStrengthCode.UNSPECIFIED);

  expect(strength.code).toEqual(EmotionStrengthCode.UNSPECIFIED);
});

test.each(mappingTestTable)(
  'should correctly convert $input',
  ({ input, expected }) => {
    expect(EmotionStrength.fromProto(input)).toEqual(expected);
  },
);
