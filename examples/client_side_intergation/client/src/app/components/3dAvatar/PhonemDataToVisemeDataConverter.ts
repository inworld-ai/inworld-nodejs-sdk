import { AdditionalPhonemeInfo } from '../../types';
import { phonemeToVisemeMap } from './PhonemesToVisemesMap';

const SMOOTH_FACTOR_S = 0.15;
const LAST_PHONEME_DURATION = 1;
const EXPRESSION_FACTOR = 0.5;

export const getVisemeData = function (
  offset: number,
  phonemeData: AdditionalPhonemeInfo[],
) {
  let visemeData: number[] = Array(15).fill(0);

  // exit condition 1;
  if (!phonemeData[phonemeData.length - 1]) {
    return;
  }

  // exit condition 2;
  // LAST phoneme is always '<INTERSPERSE_CHARACTER>';
  if (phonemeData[phonemeData.length - 1].startOffsetS! < offset) {
    return;
  }

  for (
    let currentIndex = 0;
    currentIndex < phonemeData.length;
    currentIndex++
  ) {
    // iterating though all phonemes, trying to calculate smoothed blendshape;
    const currentOffset = phonemeData[currentIndex].startOffsetS!;
    const nextOffset = phonemeData[currentIndex + 1]
      ? phonemeData[currentIndex + 1].startOffsetS!
      : currentOffset + LAST_PHONEME_DURATION;

    const currentPhoneme = phonemeData[currentIndex].phoneme;

    if (!currentPhoneme) {
      continue;
    }

    const currentViseme = phonemeToVisemeMap[currentPhoneme] ?? 0;
    const visemeLength = nextOffset - currentOffset;

    let visemeValue = 0;

    if (offset > currentOffset + visemeLength) {
      // phoneme finished;
      const delta = offset - currentOffset + visemeLength;
      if (delta < SMOOTH_FACTOR_S) {
        visemeValue = smooth(delta);
      }
    } else if (offset > currentOffset) {
      // phoneme started;
      visemeValue = EXPRESSION_FACTOR;
    } else {
      // phoneme NOT started;
      const delta = currentOffset - offset;
      if (delta < SMOOTH_FACTOR_S) {
        visemeValue = smooth(delta);
      }
    }

    if (visemeValue > visemeData[currentViseme]) {
      visemeData[currentViseme] = visemeValue;
    }
  }
  return visemeData;
};

const smooth = (delta: number) => {
  return (
    1 * ((100 - (100 * delta) / SMOOTH_FACTOR_S) / 100) * EXPRESSION_FACTOR
  );
};
