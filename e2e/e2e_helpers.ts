import {
  InworldClient,
  InworldConnectionService,
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

function testBasePacketStructure(packet: InworldPacket) {
  // packetId
  expect(packet.packetId.packetId).toBeDefined();
  expect(packet.packetId.utteranceId).toBeDefined();
  expect(packet.packetId.correlationId).toBeDefined();
  // routing
  expect(packet.routing.source).toBeDefined();
  expect(packet.routing.targets).toBeDefined();
  // date
  expect(packet.date).toBeDefined();
}

function testSceneMutationPacket(packet: InworldPacket) {
  if (packet.isSceneMutationResponse()) {
    expect(packet.isSceneMutationResponse()).toBeTruthy();
    // routing
    expect(packet.routing.source.isCharacter).toBeFalsy();
    expect(packet.routing.source.isPlayer).toBeFalsy();
    // sceneMutation
    expect(packet.sceneMutation.name).toBeDefined();
    expect(packet.sceneMutation.description).toBeDefined();
    expect(packet.sceneMutation.displayName).toBeDefined();
    expect(packet.sceneMutation.loadedCharacters).toBeDefined();
  }
}

function testInitialPackets(packets: InworldPacket[]) {
  expect(packets.length).toBeGreaterThan(0);

  for (let packet of packets) {
    testBasePacketStructure(packet);
    testSceneMutationPacket(packet);
  }
}

export async function openConnectionManually(
  apikey: [string, string],
  username: string,
  scene: string,
): Promise<InworldConnectionService> {
  let packets: InworldPacket[] = [];

  return new Promise<InworldConnectionService>(async (resolve, reject) => {
    const client = new InworldClient()
      .setApiKey({
        key: apikey[0],
        secret: apikey[1],
      })
      .setUser({ fullName: username })
      .setConfiguration({
        capabilities: { emotions: true },
        connection: {
          autoReconnect: false,
        },
      })
      .setScene(scene)
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
        packets.push(packet);
      });

    const connection = client.build();
    await connection.open();
    testInitialPackets(packets);
    resolve(connection);
  });
}
