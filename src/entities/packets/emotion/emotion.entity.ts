import { EmotionEvent as ProtoEmotionEvent } from '@proto/ai/inworld/packets/packets_pb';

import { EmotionBehavior } from './emotion_behavior.entity';
import { EmotionStrength } from './emotion_strength.entity';

export class EmotionEvent {
  readonly behavior: EmotionBehavior;
  readonly strength: EmotionStrength;

  constructor({
    behavior,
    strength,
  }: {
    behavior: EmotionBehavior;
    strength: EmotionStrength;
  }) {
    this.behavior = behavior;
    this.strength = strength;
  }

  static fromProto(proto: ProtoEmotionEvent) {
    return new EmotionEvent({
      behavior: new EmotionBehavior(
        EmotionBehavior.fromProto(proto.getBehavior()),
      ),
      strength: new EmotionStrength(
        EmotionStrength.fromProto(proto.getStrength()),
      ),
    });
  }
}
