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
  scene: string,
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
  scene: string,
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
      .setScene(scene)
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

function testBasePacket(packet: InworldPacket) {
  if (packet.isSceneMutationResponse()) {
    // control
    expect(packet.isSceneMutationResponse).toBeTruthy();
    // packetId
    expect(packet.packetId.packetId).toBeDefined();
    expect(packet.packetId.utteranceId).toBeDefined();
    expect(packet.packetId.correlationId).toBeDefined();
    // routing
    expect(packet.routing.source).toBeDefined();
    expect(packet.routing.targets).toBeDefined();
    expect(packet.routing.source.isCharacter).toBeFalsy();
    expect(packet.routing.source.isPlayer).toBeFalsy();
    // date
    expect(packet.date).toBeDefined();
    expect(packet.sceneMutation.name).toBeDefined();
    expect(packet.sceneMutation.description).toBeDefined();
    expect(packet.sceneMutation.displayName).toBeDefined();
    expect(packet.sceneMutation.loadedCharacters).toBeDefined();
  }
}

function testTextPacket(packet: InworldPacket) {
  if (packet.isControl()) {
    // control
    expect(packet.isControl).toBeTruthy();
    expect(packet.control.action).toBeDefined();
    if (!packet.isInteractionEnd()) {
      expect(packet.control.conversation?.participants).toBeDefined();
      expect(packet.control.conversation?.type).toBeDefined();
    } else {
      expect(packet.control.action).toBe('INTERACTION_END');
    }
    // packetId
    expect(packet.packetId.packetId).toBeDefined();
    expect(packet.packetId.utteranceId).toBeDefined();
    expect(packet.packetId.correlationId).toBeDefined();
    expect(packet.packetId.conversationId).toBeDefined();
    // routing
    expect(packet.routing.source).toBeDefined();
    expect(packet.routing.targets).toBeDefined();
    if (!packet.isInteractionEnd()) {
      expect(packet.routing.source.isCharacter).toBeFalsy();
      expect(packet.routing.source.isPlayer).toBeFalsy();
    } else {
      expect(packet.routing.source.isCharacter).toBeTruthy();
    }
    // date
    expect(packet.date).toBeDefined();
  }
  if (packet.isText()) {
    // packetId
    expect(packet.packetId.packetId).toBeDefined();
    expect(packet.packetId.utteranceId).toBeDefined();
    expect(packet.packetId.interactionId).toBeDefined();
    expect(packet.packetId.correlationId).toBeDefined();
    expect(packet.packetId.conversationId).toBeDefined();
    // routing
    expect(packet.routing.source.name).toBeDefined();
    expect(packet.routing.source.isCharacter).toBeTruthy();
    expect(packet.routing.source.isPlayer).toBeFalsy();
    expect(packet.routing.targets).toBeDefined();
    // date
    expect(packet.date).toBeDefined();
    // text
    expect(packet.text.text).toBeDefined();
    expect(packet.text.final).toBeDefined();
  }
  if (packet.isEmotion()) {
    // packetId
    expect(packet.packetId.packetId).toBeDefined();
    expect(packet.packetId.utteranceId).toBeDefined();
    expect(packet.packetId.interactionId).toBeDefined();
    expect(packet.packetId.correlationId).toBeDefined();
    expect(packet.packetId.conversationId).toBeDefined();
    // routing
    expect(packet.routing.source.name).toBeDefined();
    expect(packet.routing.source.isCharacter).toBeTruthy();
    expect(packet.routing.source.isPlayer).toBeFalsy();
    expect(packet.routing.targets).toBeDefined();
    // date
    expect(packet.date).toBeDefined();
    // emotion
    expect(packet.emotions.behavior).toBeDefined();
    expect(packet.emotions.strength).toBeDefined();
  }
  if (packet.isAudio()) {
    // packetId
    expect(packet.packetId.packetId).toBeDefined();
    expect(packet.packetId.utteranceId).toBeDefined();
    expect(packet.packetId.interactionId).toBeDefined();
    expect(packet.packetId.correlationId).toBeDefined();
    expect(packet.packetId.conversationId).toBeDefined();
    // routing
    expect(packet.routing.source.name).toBeDefined();
    expect(packet.routing.source.isCharacter).toBeTruthy();
    expect(packet.routing.source.isPlayer).toBeFalsy();
    expect(packet.routing.targets).toBeDefined();
    // date
    expect(packet.date).toBeDefined();
    // audio
    expect(packet.audio.chunk).toBeDefined();
  }
}

function testPackets(packets: InworldPacket[]) {
  expect(packets.length).toBeGreaterThan(0);

  for (let packet of packets) {
    testBasePacket(packet);
    testTextPacket(packet);
    // console.log(packet);
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
    expect(packets.length).toBeGreaterThan(0);
    testPackets(packets);
    resolve(connection);
  });
}

export async function openConnectionManuallySendText(
  apikey: [string, string],
  username: string,
  scene: string,
  message: string,
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
        // console.log(packet);
        if (packet.isInteractionEnd()) {
          testPackets(packets);
          resolve(connection);
        }
      });

    const connection = client.build();
    await connection.open();
    expect(packets.length).toBeGreaterThan(0);
    await connection.sendText(message);
  });
}
