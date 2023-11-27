import { EmotionEvent } from '@proto/ai/inworld/packets/packets_pb';

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
