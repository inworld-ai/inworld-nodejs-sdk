/* eslint-disable */
import { AnimationClip } from 'three';

// The Data would be loaded via JSON.
export function AnimationLoader(animations: any[]) {
  let animationClip: AnimationClip | null = null;
  animations.forEach((animation) => {
    if (animation.tracks.length > 0) {
      animationClip = AnimationClip.parse(animation);
    }
  });
  return animationClip;
}
