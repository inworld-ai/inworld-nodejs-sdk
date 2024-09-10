export enum DISPLAY_WHEN {
  AFTER_AUDIO_PLAYING = 'AFTER_AUDIO_PLAYING',
  BEFORE_AUDIO_PLAYING = 'BEFORE_AUDIO_PLAYING',
}

export enum CONVERSATION_ACTION {
  END_INTERACTION = 'END_INTERACTION',
  DISPLAY_TEXT = 'DISPLAY_TEXT',
  INTERRUPT = 'INTERRUPT',
  NARRATED_ACTION = 'NARRATED_ACTION',
  PLAY_AUDIO = 'PLAY_AUDIO',
  SET_TEXT_DISPLAY_ORDER = 'SET_TEXT_DISPLAY_ORDER',
  SILENCE = 'SILENCE',
  SET_MULTI_CHARACTERS = 'SET_MULTI_CHARACTERS',
}

export enum CLIENT_ACTION {
  SEND_CANCEL_RESPONSES = 'SEND_CANCEL_RESPONSES',
}

export enum MapSimulatorTriggers {
  Start = 'start',
  TaskFailed = 'inworld.task.failed',
  TaskSucceeded = 'inworld.task.succeeded',
}

export const actionFunctions = [
  'from',
  'to',
  'where',
  'who',
  'what',
  'about',
  'with',
];

export const compatibleTasks = [
  'go',
  'take',
  'examine',
  'use',
  'turn_on',
  'turn_off',
  'open',
  'close',
  'consume',
  'put',
  'give',
  'throw',
  'steal',
  'attack',
  'hug',
  'dig',
  'pour',
  'fill',
];

export const consumeTasks = ['consume', 'use'];
