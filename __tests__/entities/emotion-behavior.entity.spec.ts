import { EmotionEvent } from '@proto/packets_pb';

import { EmotionBehavior } from '../../src/entities/emotion-behavior.entity';

test('should be neutral', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.NEUTRAL);

  expect(behavior.isNeutral()).toEqual(true);
});

test('should be disgust', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.DISGUST);

  expect(behavior.isDisgust()).toEqual(true);
});

test('should be contempt', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.CONTEMPT);

  expect(behavior.isContempt()).toEqual(true);
});

test('should be belligerence', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.BELLIGERENCE);

  expect(behavior.isBelligerence()).toEqual(true);
});

test('should be domineering', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.DOMINEERING);

  expect(behavior.isDomineering()).toEqual(true);
});

test('should be criticism', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.CRITICISM);

  expect(behavior.isCriticism()).toEqual(true);
});

test('should be anger', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.ANGER);

  expect(behavior.isAnger()).toEqual(true);
});

test('should be tension', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.TENSION);

  expect(behavior.isTension()).toEqual(true);
});

test('should be tense humor', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.TENSE_HUMOR);

  expect(behavior.isTenseHumor()).toEqual(true);
});

test('should be defensiveness', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.DEFENSIVENESS);

  expect(behavior.isDefensiveness()).toEqual(true);
});

test('should be whining', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.WHINING);

  expect(behavior.isWhining()).toEqual(true);
});

test('should be sadness', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.SADNESS);

  expect(behavior.isSadness()).toEqual(true);
});

test('should be stonewalling', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.STONEWALLING);

  expect(behavior.isStonewalling()).toEqual(true);
});

test('should be interest', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.INTEREST);

  expect(behavior.isInterest()).toEqual(true);
});

test('should be validation', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.VALIDATION);

  expect(behavior.isValidation()).toEqual(true);
});

test('should be affection', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.AFFECTION);

  expect(behavior.isAffection()).toEqual(true);
});

test('should be humor', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.HUMOR);

  expect(behavior.isHumor()).toEqual(true);
});

test('should be surprise', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.SURPRISE);

  expect(behavior.isSurprise()).toEqual(true);
});

test('should be joy', () => {
  const behavior = new EmotionBehavior(EmotionEvent.SpaffCode.JOY);

  expect(behavior.isJoy()).toEqual(true);
});
