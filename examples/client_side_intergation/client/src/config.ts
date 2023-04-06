export const config = {
  INWORLD_CHARACTER: process.env.REACT_APP_INWORLD_CHARACTER,
  INWORLD_SCENE: process.env.REACT_APP_INWORLD_SCENE,
  LOAD_URL: process.env.REACT_APP_LOAD_URL || 'http://localhost:4000/load',
  SESSION_URL:
    process.env.REACT_APP_SESSION_URL || 'ws://localhost:4000/session',
};
