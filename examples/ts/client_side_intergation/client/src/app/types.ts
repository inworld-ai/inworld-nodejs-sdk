export enum CHAT_VIEW {
  TEXT = 'Text',
  AVATAR = 'Avatar',
}

export type ConfigurationCharacter = {
  name?: string;
};

export type ConfigurationScene = {
  name?: string;
};

export type ConfigurationPlayer = {
  name?: string;
};

export type Configuration = {
  character?: ConfigurationCharacter;
  scene?: ConfigurationScene;
  player?: ConfigurationPlayer;
  chatView?: CHAT_VIEW;
};

export type Assets = {
  avatarImg?: string;
  avatarImgOriginal?: string;
  rpmModelUri?: string;
  rpmImageUriPortrait?: string;
  rpmImageUriPosture?: string;
};

export type Character = {
  displayName?: string;
  id?: string;
  resourceName?: string;
  assets?: Assets;
};

export type Actor = {
  name: string;
  isPlayer: boolean;
  isCharacter: boolean;
};

export enum CHAT_HISTORY_TYPE {
  ACTOR = 'actor',
  TEXT = 'text',
  TRIGGER_EVENT = 'trigger',
  INTERACTION_END = 'interaction_end',
}

export type HistoryItemBase = {
  date: Date;
  id: string;
  interactionId?: string;
  source: Actor;
  type: CHAT_HISTORY_TYPE;
};

export type HistoryItemActor = HistoryItemBase & {
  type: CHAT_HISTORY_TYPE.ACTOR;
  text: string;
  isRecognizing?: boolean;
  author?: string;
  source: Actor;
};

export type HistoryItemTrigger = HistoryItemBase & {
  type: CHAT_HISTORY_TYPE.TRIGGER_EVENT;
  name: string;
  outgoing?: boolean;
};

export type HistoryItemInteractionEnd = HistoryItemBase & {
  type: CHAT_HISTORY_TYPE.INTERACTION_END;
};

export type ChatHistoryItem =
  | HistoryItemActor
  | HistoryItemTrigger
  | HistoryItemInteractionEnd;

export type AdditionalPhonemeInfo = {
  phoneme?: string;
  startOffsetS?: number;
};

export enum EmotionBehaviorCode {
  NEUTRAL = 'NEUTRAL',
  DISGUST = 'DISGUST',
  CONTEMPT = 'CONTEMPT',
  BELLIGERENCE = 'BELLIGERENCE',
  DOMINEERING = 'DOMINEERING',
  CRITICISM = 'CRITICISM',
  ANGER = 'ANGER',
  TENSION = 'TENSION',
  TENSE_HUMOR = 'TENSE_HUMOR',
  DEFENSIVENESS = 'DEFENSIVENESS',
  WHINING = 'WHINING',
  SADNESS = 'SADNESS',
  STONEWALLING = 'STONEWALLING',
  INTEREST = 'INTEREST',
  VALIDATION = 'VALIDATION',
  AFFECTION = 'AFFECTION',
  HUMOR = 'HUMOR',
  SURPRISE = 'SURPRISE',
  JOY = 'JOY',
}

export enum EmotionStrengthCode {
  UNSPECIFIED = 'UNSPECIFIED',
  WEAK = 'WEAK',
  STRONG = 'STRONG',
  NORMAL = 'NORMAL',
}

export class EmotionBehavior {
  readonly code: EmotionBehaviorCode;

  constructor(code: EmotionBehaviorCode) {
    this.code = code;
  }
}

export class EmotionStrength {
  private code: EmotionStrengthCode;

  constructor(code: EmotionStrengthCode) {
    this.code = code;
  }
}

export type EmotionEvent = {
  behavior: EmotionBehavior;
  strength: EmotionStrength;
};

export interface EmotionsMap {
  [key: string]: EmotionEvent;
}
