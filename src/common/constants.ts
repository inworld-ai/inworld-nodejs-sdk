export const CLIENT_ID = 'node-js';
export const SCENE_PATTERN = RegExp(
  '^workspaces/([a-z0-9-_]{1,61})/(characters|scenes)/([a-z0-9-_]{0,61})$',
);
export const CHARACTER_PATTERN =
  /^workspaces\/([a-z0-9-_]{1,61})\/characters\/([a-z0-9-_]{0,61})$/iu;
