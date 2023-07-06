/* eslint-disable */
import React from 'react';
import { Group, MathUtils, SkinnedMesh } from 'three';
import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { FacialEmotionMap } from './FacialEmotionMap';

interface FacialProps {
  modelRef: React.MutableRefObject<Group>;
  emotionRef: React.MutableRefObject<string>;
}
const MORPH_DURATION = 0.25;
const LERP_FACTOR = 0.25;
export function Facial(props: FacialProps) {
  const [skinnedMesh, setSknnedMesh] = useState<SkinnedMesh | null>(null);
  let lastEmo = 'Neutral';
  let currEmo = 'Neutral';
  let currMorph = 0;

  useEffect(() => {
    let modelData = props.modelRef.current;
    if (modelData) {
      const mesh = modelData.children[0].children[1] as SkinnedMesh;
      setSknnedMesh(mesh);
    }
  }, [props.modelRef.current]);

  function getIndex(morphName: string) {
    let nResult = -1;
    if (skinnedMesh) {
      for (let i = 0; i < skinnedMesh?.userData.targetNames.length; i++) {
        if (skinnedMesh?.userData.targetNames[i] === morphName) {
          nResult = i;
          break;
        }
      }
    }
    return nResult;
  }

  useFrame((state, delta) => {
    currEmo = props.emotionRef.current;
    if (currEmo != lastEmo) {
      currMorph += delta;
      // Morph Emo!
      if (FacialEmotionMap[currEmo]) {
        // Reset OLD EMO
        if (FacialEmotionMap[lastEmo]) {
          for (const [key, value] of Object.entries(
            FacialEmotionMap[lastEmo],
          )) {
            const targetVal = FacialEmotionMap[currEmo][key] ?? 0;
            const targetIndex = getIndex(key);
            if (targetIndex != -1) {
              skinnedMesh!.morphTargetInfluences![targetIndex] = MathUtils.lerp(
                skinnedMesh!.morphTargetInfluences![targetIndex],
                targetVal * 0.01,
                LERP_FACTOR,
              );
            }
          }
        }
        // APPly NEW Emo
        for (const [key, value] of Object.entries(FacialEmotionMap[currEmo])) {
          const targetIndex = getIndex(key);
          if (targetIndex != -1) {
            skinnedMesh!.morphTargetInfluences![targetIndex] = MathUtils.lerp(
              skinnedMesh!.morphTargetInfluences![targetIndex],
              value * 0.01,
              LERP_FACTOR,
            );
          }
        }
      }
      if (currMorph >= MORPH_DURATION) {
        currMorph = 0;
        lastEmo = currEmo;
      }
    }
  });

  return <></>;
}
