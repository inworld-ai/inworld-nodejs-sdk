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
  TEXT = 'text',
  TRIGGER_EVENT = 'trigger',
  INTERACTION_END = 'interaction_end',
}

export type HistoryItemBase = {
  date: Date;
  id: string;
  interactionId?: string;
  type: CHAT_HISTORY_TYPE;
};

export type HistoryItemText = HistoryItemBase & {
  type: CHAT_HISTORY_TYPE.TEXT;
  text: string;
  isRecognizing?: boolean;
  author?: string;
  source: Actor;
};

export type HistoryItemTrigger = HistoryItemBase & {
  type: CHAT_HISTORY_TYPE.TRIGGER_EVENT;
  name: string;
  outgoing?: boolean;
  source: Actor;
};

export type HistoryItemInteractionEnd = HistoryItemBase & {
  type: CHAT_HISTORY_TYPE.INTERACTION_END;
};

export type ChatHistoryItem =
  | HistoryItemText
  | HistoryItemTrigger
  | HistoryItemInteractionEnd;
