import {
  InworldClient,
  InworldError,
  InworldPacket,
  status,
} from '@inworld/nodejs-sdk';
import * as fs from 'fs';

export async function sendText(
  apikey: [string, string],
  username: string,
  npc: string,
  message: string,
): Promise<[string, string]> {
  let output: [string, string] = ['', ''];

  return new Promise<[string, string]>(async (resolve, reject) => {
    const client = new InworldClient()
      .setApiKey({
        key: apikey[0],
        secret: apikey[1],
      })
      .setUser({ fullName: username })
      .setConfiguration({
        capabilities: { emotions: true },
      })
      .setScene(npc)
      .setOnError((err: InworldError) => {
        switch (err.code) {
          case status.ABORTED:
          case status.CANCELLED:
            break;
          default:
            connection.close();
            reject(err);
            break;
        }
      })
      .setOnMessage((packet: InworldPacket) => {
        // TEXT
        if (packet.isText()) {
          output[0] += packet.text.text + '\n';
        }

        // EMOTION
        if (packet.isEmotion()) {
          output[1] += packet.emotions.behavior.code + '\n';
          output[1] += packet.emotions.strength.code + '\n';
        }

        // INTERACTION_END
        if (packet.isInteractionEnd()) {
          connection.close();
          resolve(output);
        }
      });

    const connection = client.build();

    await connection.sendText(message);
  });
}

export async function sendAudio(
  apikey: [string, string],
  username: string,
  npc: string,
  audio: string,
): Promise<string> {
  let output: string = '';
  const timeout = 200;
  const highWaterMark = 1024 * 5;

  return new Promise<string>(async (resolve, reject) => {
    let i = 0;

    const audioStream = fs.createReadStream(audio, { highWaterMark });
    const sendChunk = (chunk: string) => {
      setTimeout(() => {
        connection.sendAudio(chunk);
      }, timeout * i);
      i++;
    };

    const connection = new InworldClient()
      .setApiKey({
        key: apikey[0],
        secret: apikey[1],
      })
      .setScene(npc)
      .setUser({ fullName: username })
      .setOnError((err: InworldError) => {
        reject(err);
      })
      .setOnMessage((packet: InworldPacket) => {
        if (packet.isText() && packet.routing.source.isPlayer) {
          if (packet.text.final) {
            connection.sendAudioSessionEnd();
          }
        }

        if (packet.isText() && packet.routing.source.isCharacter) {
          output += packet.text.text + '\n';
        }

        if (packet.isInteractionEnd()) {
          connection.close();
          resolve(output);
        }
      })
      .build();

    await connection.sendAudioSessionStart();

    audioStream.on('data', sendChunk).on('end', async () => {
      audioStream.close();

      const silenceStream = fs.createReadStream('e2e/connection/silence.wav', {
        highWaterMark,
      });

      silenceStream
        .on('data', sendChunk)
        .on('end', () => silenceStream.close());
    });
  });
}
