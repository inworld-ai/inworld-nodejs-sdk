/* eslint-disable */
import { useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { MathUtils } from 'three';
import { SkinnedMesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AdditionalPhonemeInfo, EmotionEvent } from '../../types';
import { Animation } from './Animation';

interface ModelProps {
  url: string;
  onLoad?: () => void;
  phonemes: AdditionalPhonemeInfo[];
  emotionEvent?: EmotionEvent;
}

let elapsdTime: number = 0;

const END_TALKING_DEBOUNCE_TIME_MS = 500;
const EYES_CLOSED = 'eyesClosed';
const BLINK_SPEED = 1;
const BLINK_THRESH = 1000;

export function Model(props: ModelProps) {
  const modelData = useLoader(GLTFLoader, props.url).scene;
  const modelRef = useRef(modelData);
  const [eyesClosedIndex, setEyesClosedIndex] = useState(-1);
  const [skinnedMesh, setSknnedMesh] = useState<SkinnedMesh | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (modelData) {
      const mesh = modelData.children[0].children[1] as SkinnedMesh;
      setSknnedMesh(mesh);
      // iterate through blendshape names in order to find the beginning of the
      // viseme sequence (viseme_sil + 14 next)
      for (let i = 0; i < mesh.userData.targetNames.length; i++) {
        if (mesh.userData.targetNames[i] === EYES_CLOSED) {
          setEyesClosedIndex(i);
          break;
        }
      }
    }
  }, [modelData]);
  useEffect(() => {
    setTimeout(() => {
      modelRef.current = modelData;
      setTimeout(() => {
        setIsLoaded(true);
      }, END_TALKING_DEBOUNCE_TIME_MS);
      props.onLoad?.();
    }, END_TALKING_DEBOUNCE_TIME_MS);
  }, [props, modelData]);
  useFrame((_, delta) => {
    elapsdTime += delta;
    let eyeClosedVal = MathUtils.clamp(
      Math.sin(elapsdTime * BLINK_SPEED) * BLINK_THRESH - BLINK_THRESH + 1,
      0,
      1,
    );
    if (eyesClosedIndex !== -1) {
      skinnedMesh!.morphTargetInfluences![eyesClosedIndex] = eyeClosedVal;
    }
  });
  return (
    <>
      <Animation
        animations={[
          'TalkingNeutral2',
          'TalkingNeutral3',
          'TalkingNeutral4',
          'TalkingNeutral5',
          'TalkingNeutral6',
          'TalkingNeutral7',
        ]}
        modelRef={modelRef}
        phonemes={props.phonemes}
        emotionEvent={props.emotionEvent}
      />
      {isLoaded && (
        <Suspense fallback={null}>
          <primitive object={modelData} />
        </Suspense>
      )}
    </>
  );
}
