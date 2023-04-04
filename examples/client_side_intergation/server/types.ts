import { InworldConnectionService } from '@inworld/nodejs-sdk';

export enum EVENT_TYPE {
  TEXT = 'text',
  AUDIO = 'audio',
  AUDIO_SESSION_END = 'audioSessionEnd',
}

export enum AUDIO_SESSION_STATE {
  PROCESSING = 'PROCESSING',
  ACTIVE = 'ACTIVE',
}

export type Connections = {
  [key: string]: InworldConnectionService;
};

export type SentState = {
  [key: string]: AUDIO_SESSION_STATE;
};
