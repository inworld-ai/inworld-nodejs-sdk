import { EmotionEvent } from '@proto/packets_pb';

export class EmotionBehavior {
  private behavior: EmotionEvent.SpaffCode;

  constructor(behavior: EmotionEvent.SpaffCode) {
    this.behavior = behavior;
  }

  isNeutral() {
    return this.behavior === EmotionEvent.SpaffCode.NEUTRAL;
  }

  isDisgust() {
    return this.behavior === EmotionEvent.SpaffCode.DISGUST;
  }

  isContempt() {
    return this.behavior === EmotionEvent.SpaffCode.CONTEMPT;
  }

  isBelligerence() {
    return this.behavior === EmotionEvent.SpaffCode.BELLIGERENCE;
  }

  isDomineering() {
    return this.behavior === EmotionEvent.SpaffCode.DOMINEERING;
  }

  isCriticism() {
    return this.behavior === EmotionEvent.SpaffCode.CRITICISM;
  }

  isAnger() {
    return this.behavior === EmotionEvent.SpaffCode.ANGER;
  }

  isTension() {
    return this.behavior === EmotionEvent.SpaffCode.TENSION;
  }

  isTenseHumor() {
    return this.behavior === EmotionEvent.SpaffCode.TENSE_HUMOR;
  }

  isDefensiveness() {
    return this.behavior === EmotionEvent.SpaffCode.DEFENSIVENESS;
  }

  isWhining() {
    return this.behavior === EmotionEvent.SpaffCode.WHINING;
  }

  isSadness() {
    return this.behavior === EmotionEvent.SpaffCode.SADNESS;
  }

  isStonewalling() {
    return this.behavior === EmotionEvent.SpaffCode.STONEWALLING;
  }

  isInterest() {
    return this.behavior === EmotionEvent.SpaffCode.INTEREST;
  }

  isValidation() {
    return this.behavior === EmotionEvent.SpaffCode.VALIDATION;
  }

  isAffection() {
    return this.behavior === EmotionEvent.SpaffCode.AFFECTION;
  }

  isHumor() {
    return this.behavior === EmotionEvent.SpaffCode.HUMOR;
  }

  isSurprise() {
    return this.behavior === EmotionEvent.SpaffCode.SURPRISE;
  }

  isJoy() {
    return this.behavior === EmotionEvent.SpaffCode.JOY;
  }
}
