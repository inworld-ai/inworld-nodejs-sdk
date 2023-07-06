/* eslint-disable */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { LipSync } from './Lipsync';
import {
  AnimationClip,
  AnimationMixer,
  Bone,
  Group,
  LoopPingPong,
  Vector3,
} from 'three';
import { Facial } from './Facial';
import { BehaviorToFacial } from './FacialEmotionMap';
import { AnimationLoader } from './AnimationLoader';
import { AdditionalPhonemeInfo, EmotionEvent } from '../../types';

interface AnimationProps {
  animations: string[];
  modelRef: React.MutableRefObject<Group>;
  phonemes: AdditionalPhonemeInfo[];
  emotionEvent?: EmotionEvent;
}

let talkingCountDown = 0;
let phonemeData: AdditionalPhonemeInfo[] = [];
let emotion: string = 'Neutral';
let idleTimeout: NodeJS.Timeout | null = null;

export function Animation(props: AnimationProps) {
  const [isLoaded, setLoaded] = useState(false);
  const [animationMixer, setAnimationMixer] = useState<AnimationMixer | null>(
    null,
  );
  const [head, setHead] = useState<Bone | null>(null);
  const [animationClips, updateAnimationClips] = useState<{
    [key: string]: AnimationClip | null;
  }>({});
  const MODELS_URI_PREFIX = 'https://assets.inworld.ai/models';
  const ANIMATION_FADE_TIME_S = 0.5;
  const END_TALKING_DEBOUNCE_TIME_MS = 500;
  const phonemes = useRef(phonemeData);
  const emotionRef = useRef(emotion);

  let lastClipName: string | null = null;

  const getTalkingClipName = () => {
    // At least 2 animations to rotate!
    if (props.animations!.length < 2) return '';
    return props.animations[
      Math.floor(Math.random() * (props.animations.length - 1))
    ];
  };

  const playStill = (fadeInTime: number) => {
    if (talkingCountDown > 0 || lastClipName === 'Idle') {
      return;
    }
    if (animationMixer) {
      if (lastClipName) {
        animationMixer
          .clipAction(animationClips[lastClipName]!)
          .fadeOut(ANIMATION_FADE_TIME_S);
      }
      let clipName = 'Idle';
      if (animationClips[clipName]) {
        const durationSeconds = animationClips[clipName]!.duration;
        animationMixer
          .clipAction(animationClips[clipName]!)
          .reset()
          .fadeIn(fadeInTime)
          .play();
        lastClipName = clipName;
        idleTimeout = setTimeout(startIdleAnimation, durationSeconds * 1000);
      }
    }
  };

  // Load Animation
  useEffect(() => {
    const updateClips = async () => {
      const updatedClips = { ...animationClips };

      const idleResponse = await fetch(
        `${MODELS_URI_PREFIX}/idle/IdleNeutral.json`,
      ).then((response) => response.json());

      updatedClips['Idle'] = AnimationLoader(idleResponse);

      await Promise.all(
        props.animations.map((name) =>
          fetch(`${MODELS_URI_PREFIX}/talking/${name}.json`).then(
            async (response) => {
              updatedClips[name] = AnimationLoader(await response.json());
            },
          ),
        ),
      );

      updateAnimationClips(updatedClips);

      setLoaded(true);
    };

    let modelData = props.modelRef.current;
    if (modelData) {
      setAnimationMixer(new AnimationMixer(modelData));
      const head = modelData.getObjectByName('Head');
      setHead(head as Bone);
      updateClips();
    }
  }, [props.modelRef.current]);

  const startTalkingAnimation = useCallback(() => {
    if (idleTimeout !== null) {
      clearTimeout(idleTimeout);
    }
    let clipName = '';
    while (!clipName || clipName === lastClipName) {
      clipName = getTalkingClipName();
    }

    if (animationMixer) {
      if (lastClipName) {
        animationMixer
          .clipAction(animationClips[lastClipName]!)
          .fadeOut(ANIMATION_FADE_TIME_S);
      }
      animationMixer
        .clipAction(animationClips[clipName]!)
        .reset()
        .fadeIn(ANIMATION_FADE_TIME_S)
        .setLoop(LoopPingPong, 20)
        .play();
      lastClipName = clipName;
    }
  }, [animationClips, animationMixer]);

  const startIdleAnimation = useCallback(
    () => playStill(0.5),
    [animationClips, animationMixer],
  );

  useEffect(() => {
    if (animationMixer) {
      setTimeout(startIdleAnimation, END_TALKING_DEBOUNCE_TIME_MS);
    }
  }, [startIdleAnimation, props, animationMixer, animationClips]);

  useEffect(() => {
    if (isLoaded && props.phonemes.length > 0) {
      phonemes.current = props.phonemes;
      talkingCountDown += props.phonemes.length;
      startTalkingAnimation();
    }
  }, [isLoaded, props.phonemes, startTalkingAnimation]);

  useEffect(() => {
    if (props.emotionEvent) {
      emotionRef.current = BehaviorToFacial[props.emotionEvent.behavior.code];
    }
  }, [props.emotionEvent]);

  useFrame((state, delta) => {
    if (animationMixer instanceof AnimationMixer) {
      animationMixer.update(delta);
    }
    if (head) {
      let headWorldPos: Vector3 = new Vector3(0, 0, 0);
      head.getWorldPosition(headWorldPos);
      state.camera.position.set(headWorldPos.x, headWorldPos.y + 0.05, 1);
    }
    if (talkingCountDown > 0) {
      talkingCountDown -= 0.9999; // Not Integer to make sure the timing "count down < 0" can happen only once per sentence.
    }
    if (talkingCountDown < 0) {
      talkingCountDown = 0;
      emotionRef.current = 'Neutral';
      setTimeout(startIdleAnimation, END_TALKING_DEBOUNCE_TIME_MS);
    }
  });

  return (
    <>
      <LipSync modelRef={props.modelRef} phonemeRef={phonemes} />
      <Facial modelRef={props.modelRef} emotionRef={emotionRef} />
    </>
  );
}
