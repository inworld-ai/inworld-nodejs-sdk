import { EmotionEvent } from '@proto/packets_pb';

export class EmotionStrength {
  private strength: EmotionEvent.Strength;

  constructor(strength: EmotionEvent.Strength) {
    this.strength = strength;
  }

  isWeak() {
    return this.strength === EmotionEvent.Strength.WEAK;
  }

  isStrong() {
    return this.strength === EmotionEvent.Strength.STRONG;
  }
}
