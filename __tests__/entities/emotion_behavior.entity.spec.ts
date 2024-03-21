import { EmotionEvent } from '@proto/ai/inworld/packets/packets_pb';

import {
  EmotionBehavior,
  EmotionBehaviorCode,
} from '../../src/entities/packets/emotion/emotion_behavior.entity';

const mappingTestTable = [
  {
    input: EmotionEvent.SpaffCode.NEUTRAL,
    expected: EmotionBehaviorCode.NEUTRAL,
  },
  {
    input: EmotionEvent.SpaffCode.DISGUST,
    expected: EmotionBehaviorCode.DISGUST,
  },
  {
    input: EmotionEvent.SpaffCode.CONTEMPT,
    expected: EmotionBehaviorCode.CONTEMPT,
  },
  {
    input: EmotionEvent.SpaffCode.BELLIGERENCE,
    expected: EmotionBehaviorCode.BELLIGERENCE,
  },
  {
    input: EmotionEvent.SpaffCode.DOMINEERING,
    expected: EmotionBehaviorCode.DOMINEERING,
  },
  {
    input: EmotionEvent.SpaffCode.CRITICISM,
    expected: EmotionBehaviorCode.CRITICISM,
  },
  {
    input: EmotionEvent.SpaffCode.ANGER,
    expected: EmotionBehaviorCode.ANGER,
  },
  {
    input: EmotionEvent.SpaffCode.TENSION,
    expected: EmotionBehaviorCode.TENSION,
  },
  {
    input: EmotionEvent.SpaffCode.TENSE_HUMOR,
    expected: EmotionBehaviorCode.TENSE_HUMOR,
  },
  {
    input: EmotionEvent.SpaffCode.DEFENSIVENESS,
    expected: EmotionBehaviorCode.DEFENSIVENESS,
  },
  {
    input: EmotionEvent.SpaffCode.WHINING,
    expected: EmotionBehaviorCode.WHINING,
  },
  {
    input: EmotionEvent.SpaffCode.SADNESS,
    expected: EmotionBehaviorCode.SADNESS,
  },
  {
    input: EmotionEvent.SpaffCode.STONEWALLING,
    expected: EmotionBehaviorCode.STONEWALLING,
  },
  {
    input: EmotionEvent.SpaffCode.INTEREST,
    expected: EmotionBehaviorCode.INTEREST,
  },
  {
    input: EmotionEvent.SpaffCode.VALIDATION,
    expected: EmotionBehaviorCode.VALIDATION,
  },
  {
    input: EmotionEvent.SpaffCode.AFFECTION,
    expected: EmotionBehaviorCode.AFFECTION,
  },
  {
    input: EmotionEvent.SpaffCode.HUMOR,
    expected: EmotionBehaviorCode.HUMOR,
  },
  {
    input: EmotionEvent.SpaffCode.SURPRISE,
    expected: EmotionBehaviorCode.SURPRISE,
  },
  {
    input: EmotionEvent.SpaffCode.JOY,
    expected: EmotionBehaviorCode.JOY,
  },
];

test.each(mappingTestTable)(
  'should correctly convert $input',
  ({ input, expected }) => {
    expect(EmotionBehavior.fromProto(input)).toEqual(expected);
  },
);
