import { EmotionEvent } from '@proto/ai/inworld/packets/packets_pb';

export enum EmotionBehaviorCode {
  NEUTRAL = 'NEUTRAL',
  DISGUST = 'DISGUST',
  CONTEMPT = 'CONTEMPT',
  BELLIGERENCE = 'BELLIGERENCE',
  DOMINEERING = 'DOMINEERING',
  CRITICISM = 'CRITICISM',
  ANGER = 'ANGER',
  TENSION = 'TENSION',
  TENSE_HUMOR = 'TENSE_HUMOR',
  DEFENSIVENESS = 'DEFENSIVENESS',
  WHINING = 'WHINING',
  SADNESS = 'SADNESS',
  STONEWALLING = 'STONEWALLING',
  INTEREST = 'INTEREST',
  VALIDATION = 'VALIDATION',
  AFFECTION = 'AFFECTION',
  HUMOR = 'HUMOR',
  SURPRISE = 'SURPRISE',
  JOY = 'JOY',
}

export class EmotionBehavior {
  readonly code: EmotionBehaviorCode;

  constructor(behavior: EmotionBehaviorCode) {
    this.code = behavior;
  }

  static fromProto(code: EmotionEvent.SpaffCode) {
    switch (code) {
      case EmotionEvent.SpaffCode.NEUTRAL:
        return EmotionBehaviorCode.NEUTRAL;
      case EmotionEvent.SpaffCode.DISGUST:
        return EmotionBehaviorCode.DISGUST;
      case EmotionEvent.SpaffCode.CONTEMPT:
        return EmotionBehaviorCode.CONTEMPT;
      case EmotionEvent.SpaffCode.BELLIGERENCE:
        return EmotionBehaviorCode.BELLIGERENCE;
      case EmotionEvent.SpaffCode.DOMINEERING:
        return EmotionBehaviorCode.DOMINEERING;
      case EmotionEvent.SpaffCode.CRITICISM:
        return EmotionBehaviorCode.CRITICISM;
      case EmotionEvent.SpaffCode.ANGER:
        return EmotionBehaviorCode.ANGER;
      case EmotionEvent.SpaffCode.TENSION:
        return EmotionBehaviorCode.TENSION;
      case EmotionEvent.SpaffCode.TENSE_HUMOR:
        return EmotionBehaviorCode.TENSE_HUMOR;
      case EmotionEvent.SpaffCode.DEFENSIVENESS:
        return EmotionBehaviorCode.DEFENSIVENESS;
      case EmotionEvent.SpaffCode.WHINING:
        return EmotionBehaviorCode.WHINING;
      case EmotionEvent.SpaffCode.SADNESS:
        return EmotionBehaviorCode.SADNESS;
      case EmotionEvent.SpaffCode.STONEWALLING:
        return EmotionBehaviorCode.STONEWALLING;
      case EmotionEvent.SpaffCode.INTEREST:
        return EmotionBehaviorCode.INTEREST;
      case EmotionEvent.SpaffCode.VALIDATION:
        return EmotionBehaviorCode.VALIDATION;
      case EmotionEvent.SpaffCode.AFFECTION:
        return EmotionBehaviorCode.AFFECTION;
      case EmotionEvent.SpaffCode.HUMOR:
        return EmotionBehaviorCode.HUMOR;
      case EmotionEvent.SpaffCode.SURPRISE:
        return EmotionBehaviorCode.SURPRISE;
      case EmotionEvent.SpaffCode.JOY:
        return EmotionBehaviorCode.JOY;
    }
  }
}
