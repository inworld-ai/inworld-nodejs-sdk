import { CHAT_VIEW } from './app/types';
import { config } from './config';

export const configuration = {
  character: { name: config.INWORLD_CHARACTER },
  chatView: CHAT_VIEW.TEXT,
  scene: { name: config.INWORLD_SCENE },
  player: { name: 'Participant' },
};

export const DEFAULT_RPM_AVATAR =
  'https://assets.inworld.ai/models/Default.glb';
