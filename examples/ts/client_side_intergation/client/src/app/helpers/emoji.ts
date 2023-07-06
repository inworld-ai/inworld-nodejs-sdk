import { EmotionBehavior } from '../types';

export const EMOJIS: { [key: string]: string[] } = {
  AFFECTION: ['🥰', '😊', '😘', '😍', '🤗'],
  ANGER: ['😤', '😠', '😡', '🤬'],
  BELLIGERENCE: ['😡'],
  CONTEMPT: ['😠'],
  CRITICISM: ['👎'],
  DEFENSIVENESS: ['✋'],
  DISGUST: ['🤢', '🤮', '😖'],
  DOMINEERING: ['😠'],
  HUMOR: ['😆 ', '😅', '😂', '🤣'],
  INTEREST: ['🧐', '🤔', '🤨'],
  JOY: ['😀', '😃', '😄', '😁', '😆'],
  SADNESS: ['😞', '😔', '😟', '😕', '🙁'],
  STONEWALLING: ['🤐', '😶', '🤫'],
  SURPRISE: ['😲', '😮', '😧', '😳', '🤯'],
  TENSE: ['😬'],
  TENSION: ['😬', '😰'],
  VALIDATION: ['👍', '👌'],
  WHINING: ['😩', '🥺', '😢', '😭', '😮‍💨'],
};

export function getEmoji(behavior: EmotionBehavior): string | null {
  const emoji = EMOJIS[behavior.code];

  if (!emoji?.length) return null;

  return emoji.length < 2
    ? emoji[0]
    : emoji[Math.floor(Math.random() * emoji.length)];
}
