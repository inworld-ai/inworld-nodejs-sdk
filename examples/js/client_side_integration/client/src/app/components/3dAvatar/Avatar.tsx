import { Box } from '@mui/material';

import { AdditionalPhonemeInfo, EmotionEvent } from '../../types';
import InworldChar3D from './InworldChar3D';

export function Avatar({
  emotionEvent,
  phonemes,
  visible,
  url,
}: {
  emotionEvent?: EmotionEvent;
  phonemes: AdditionalPhonemeInfo[];
  visible: boolean;
  url: string;
}) {
  return (
    <Box
      className="avatar"
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: visible ? 'flex' : 'none',
        zIndex: '1',
      }}
    >
      <Box
        sx={{
          borderRadius: '1.75rem',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(122,101,241,0.1) 0%, #221E39 100%)',
          width: '100%',
          height: '100%',
        }}
      >
        <InworldChar3D
          url={url}
          phonemes={phonemes}
          emotionEvent={emotionEvent}
        />
      </Box>
    </Box>
  );
}
