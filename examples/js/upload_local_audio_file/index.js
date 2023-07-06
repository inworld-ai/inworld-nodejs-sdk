import 'dotenv/config';

import { InworldClient } from '@inworld/nodejs-sdk';
import * as fs from 'fs';
import { exit } from 'process';

const timeout = 200;
const highWaterMark = 1024 * 5;

const run = async function () {
  let i = 0;

  const audioStream = fs.createReadStream('test.wav', { highWaterMark });
  const sendChunk = (chunk) => {
    setTimeout(() => {
      connection.sendAudio(chunk);
    }, timeout * i);
    i++;
  };

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
      if (packet.isText() && packet.routing.source.isPlayer) {
        console.log(
          `Recognized: ${packet.text.text}${packet.text.final ? '' : '...'}`,
        );

        if (packet.text.final) {
          connection.sendAudioSessionEnd();
        }
      }

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

  audioStream.on('data', sendChunk).on('end', async () => {
    audioStream.close();

    const silenceStream = fs.createReadStream('silence.wav', {
      highWaterMark,
    });

    silenceStream.on('data', sendChunk).on('end', () => silenceStream.close());
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
