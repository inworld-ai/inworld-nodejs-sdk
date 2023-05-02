import 'dotenv/config';

import { InworldClient } from '@inworld/nodejs-sdk';
import * as fs from 'fs';
import { exit } from 'process';

const timeout = 200;
const highWaterMark = 1024 * 5;

const run = async function () {
  const stream = fs.createReadStream('test.wav', { highWaterMark });

  const connection = new InworldClient()
    .setApiKey({
      key: process.env.INWORLD_KEY,
      secret: process.env.INWORLD_SECRET,
    })
    .setScene(process.env.INWORLD_SCENE)
    .setOnError((err) => {
      console.error(`Error: ${err.message}`);
      exit(1);
    })
    .setOnDisconnect(() => {
      console.log('Disconnected');
    })
    .setOnMessage((packet) => {
      if (packet.isText() && packet.routing.source.isCharacter) {
        console.log(`Answer: ${packet.text.text}`);
      }

      if (packet.isInteractionEnd()) {
        connection.close();
        process.exit(0);
      }
    })
    .build();

  await connection.sendAudioSessionStart();

  let i = 0;

  stream.on('data', async (chunk) => {
    setTimeout(() => {
      connection.sendAudio(chunk);
    }, timeout * i);
    i++;
  });

  stream.on('end', async () => {
    setTimeout(() => {
      connection.sendAudioSessionEnd();
    }, timeout * (i - 1));
    stream.close();
  });
};

if (!process.env.INWORLD_KEY) {
  throw new Error('INWORLD_KEY env variable is required');
}

if (!process.env.INWORLD_SECRET) {
  throw new Error('INWORLD_SECRET env variable is required');
}

run();

process.on('unhandledRejection', (err) => {
  console.error(err.message);
  process.exit(1);
});
