import util = require('node:util');

import { EmotionEvent } from '@proto/packets_pb';

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

  isNeutral() {
    return this.code === EmotionBehaviorCode.NEUTRAL;
  }

  isDisgust() {
    return this.code === EmotionBehaviorCode.DISGUST;
  }

  isContempt() {
    return this.code === EmotionBehaviorCode.CONTEMPT;
  }

  isBelligerence() {
    return this.code === EmotionBehaviorCode.BELLIGERENCE;
  }

  isDomineering() {
    return this.code === EmotionBehaviorCode.DOMINEERING;
  }

  isCriticism() {
    return this.code === EmotionBehaviorCode.CRITICISM;
  }

  isAnger() {
    return this.code === EmotionBehaviorCode.ANGER;
  }

  isTension() {
    return this.code === EmotionBehaviorCode.TENSION;
  }

  isTenseHumor() {
    return this.code === EmotionBehaviorCode.TENSE_HUMOR;
  }

  isDefensiveness() {
    return this.code === EmotionBehaviorCode.DEFENSIVENESS;
  }

  isWhining() {
    return this.code === EmotionBehaviorCode.WHINING;
  }

  isSadness() {
    return this.code === EmotionBehaviorCode.SADNESS;
  }

  isStonewalling() {
    return this.code === EmotionBehaviorCode.STONEWALLING;
  }

  isInterest() {
    return this.code === EmotionBehaviorCode.INTEREST;
  }

  isValidation() {
    return this.code === EmotionBehaviorCode.VALIDATION;
  }

  isAffection() {
    return this.code === EmotionBehaviorCode.AFFECTION;
  }

  isHumor() {
    return this.code === EmotionBehaviorCode.HUMOR;
  }

  isSurprise() {
    return this.code === EmotionBehaviorCode.SURPRISE;
  }

  isJoy() {
    return this.code === EmotionBehaviorCode.JOY;
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

EmotionBehavior.prototype.isNeutral = util.deprecate(
  EmotionBehavior.prototype.isNeutral,
  'isNeutral() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isDisgust = util.deprecate(
  EmotionBehavior.prototype.isDisgust,
  'isDisgust() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isContempt = util.deprecate(
  EmotionBehavior.prototype.isContempt,
  'isContempt() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isBelligerence = util.deprecate(
  EmotionBehavior.prototype.isBelligerence,
  'isBelligerence() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isDomineering = util.deprecate(
  EmotionBehavior.prototype.isDomineering,
  'isDomineering() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isCriticism = util.deprecate(
  EmotionBehavior.prototype.isCriticism,
  'isCriticism() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isAnger = util.deprecate(
  EmotionBehavior.prototype.isAnger,
  'isAnger() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isTension = util.deprecate(
  EmotionBehavior.prototype.isTension,
  'isTension() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isTenseHumor = util.deprecate(
  EmotionBehavior.prototype.isTenseHumor,
  'isTenseHumor() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isDefensiveness = util.deprecate(
  EmotionBehavior.prototype.isDefensiveness,
  'isDefensiveness() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isWhining = util.deprecate(
  EmotionBehavior.prototype.isWhining,
  'isWhining() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isSadness = util.deprecate(
  EmotionBehavior.prototype.isSadness,
  'isSadness() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isStonewalling = util.deprecate(
  EmotionBehavior.prototype.isStonewalling,
  'isStonewalling() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isInterest = util.deprecate(
  EmotionBehavior.prototype.isInterest,
  'isInterest() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isValidation = util.deprecate(
  EmotionBehavior.prototype.isValidation,
  'isValidation() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isAffection = util.deprecate(
  EmotionBehavior.prototype.isAffection,
  'isAffection() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isHumor = util.deprecate(
  EmotionBehavior.prototype.isHumor,
  'isHumor() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isSurprise = util.deprecate(
  EmotionBehavior.prototype.isSurprise,
  'isSurprise() is deprecated. Use code property instead.',
);

EmotionBehavior.prototype.isJoy = util.deprecate(
  EmotionBehavior.prototype.isJoy,
  'isJoy() is deprecated. Use code property instead.',
);
