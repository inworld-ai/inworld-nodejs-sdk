/* eslint-disable */
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { LinearProgress, Typography } from '@mui/material';
import { Skeleton } from '../Skeleton/Skeleton';
import { AdditionalPhonemeInfo, EmotionEvent } from '../../types';
interface InworldChar3DProps {
  url: string;
  phonemes: AdditionalPhonemeInfo[];
  emotionEvent?: EmotionEvent;
}

export default function InworldChar3D(props: InworldChar3DProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LinearProgress></LinearProgress>}
      <Suspense
        fallback={
          <Skeleton>
            <Typography color="white">Loading</Typography>
          </Skeleton>
        }
      >
        {/* <color attach="background" args={['#e0b7ff']} /> */}
        <Canvas
          style={{ height: '100%', width: '100%' }}
          camera={{ fov: 25, position: [0, 0.6, 1], rotation: [0, 0, 0] }}
        >
          {true && (
            <Suspense fallback={null}>
              <Model
                url={props.url}
                phonemes={props.phonemes}
                emotionEvent={props.emotionEvent}
                onLoad={() => {
                  setIsLoaded(true);
                }}
              />
            </Suspense>
          )}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        </Canvas>
      </Suspense>
    </>
  );
}
