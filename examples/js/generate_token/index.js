import 'dotenv/config';

import { InworldClient } from '@inworld/nodejs-sdk';

const run = async function () {
  const token = await getToken();
  console.log(token);
  process.exit(0);
};

const getToken = async function () {
  const client = new InworldClient()
    .setApiKey({
      key: process.env.INWORLD_KEY,
      secret: process.env.INWORLD_SECRET,
    })
    .setScene(process.env.INWORLD_SCENE);

  return client.generateSessionToken();
};

if (!process.env.INWORLD_KEY) {
  throw new Error('INWORLD_KEY env variable is required');
}

if (!process.env.INWORLD_SECRET) {
  throw new Error('INWORLD_SECRET env variable is required');
}

if (!process.env.INWORLD_SCENE) {
  throw new Error('INWORLD_SCENE env variable is required');
}

run();

process.on('unhandledRejection', (err) => {
  console.error(err.message);
  process.exit(1);
});