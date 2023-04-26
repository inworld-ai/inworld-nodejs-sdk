import util = require('node:util');

import { EmotionEvent } from '@proto/packets_pb';

export enum EmotionStrengthCode {
  UNSPECIFIED = 'UNSPECIFIED',
  WEAK = 'WEAK',
  STRONG = 'STRONG',
  NORMAL = 'NORMAL',
}

export class EmotionStrength {
  readonly code: EmotionStrengthCode;

  constructor(strength: EmotionStrengthCode) {
    this.code = strength;
  }

  isWeak() {
    return this.code === EmotionStrengthCode.WEAK;
  }

  isStrong() {
    return this.code === EmotionStrengthCode.STRONG;
  }

  static fromProto(code: EmotionEvent.Strength) {
    switch (code) {
      case EmotionEvent.Strength.UNSPECIFIED:
        return EmotionStrengthCode.UNSPECIFIED;
      case EmotionEvent.Strength.WEAK:
        return EmotionStrengthCode.WEAK;
      case EmotionEvent.Strength.STRONG:
        return EmotionStrengthCode.STRONG;
      case EmotionEvent.Strength.NORMAL:
        return EmotionStrengthCode.NORMAL;
    }
  }
}

EmotionStrength.prototype.isWeak = util.deprecate(
  EmotionStrength.prototype.isWeak,
  'isWeak() is deprecated. Use code property instead.',
);

EmotionStrength.prototype.isStrong = util.deprecate(
  EmotionStrength.prototype.isStrong,
  'isStrong() is deprecated. Use code property instead.',
);
