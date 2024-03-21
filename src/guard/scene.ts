import { CHARACTER_PATTERN, SCENE_PATTERN } from '../common/constants';

export const sceneHasValidFormat = (name: string) => SCENE_PATTERN.test(name);
export const characterHasValidFormat = (name: string) =>
  CHARACTER_PATTERN.test(name);
