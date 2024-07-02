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

async function testEmotionPacket(
  packet: InworldPacket,
  connection: InworldConnectionService,
  idCheck: (id: string) => boolean,
) {
  if (packet.isEmotion()) {
    // packetId
    expect(packet.packetId.interactionId).toBeDefined();
    expect(idCheck(packet.packetId.interactionId!)).toBeTruthy();
    expect(packet.packetId.conversationId).toBeDefined();
    // routing
    let characters = await connection.getCharacters();
    let characterName = characters[0].id;
    expect(packet.routing.source.name).toBe(characterName);
    expect(packet.routing.source.isCharacter).toBeTruthy();
    expect(packet.routing.source.isPlayer).toBeFalsy();
    // emotion
    expect(packet.emotions.behavior).toBeDefined();
    expect(packet.emotions.strength).toBeDefined();
  }
}

async function testAudioPacket(
  packet: InworldPacket,
  connection: InworldConnectionService,
  idCheck: (id: string) => boolean,
) {
  if (packet.isAudio()) {
    // packetId
    expect(packet.packetId.interactionId).toBeDefined();
    expect(idCheck(packet.packetId.interactionId!)).toBeTruthy();
    expect(packet.packetId.conversationId).toBeDefined();
    // routing
    let characters = await connection.getCharacters();
    let characterName = characters[0].id;
    expect(packet.routing.source.name).toBe(characterName);
    expect(packet.routing.source.isCharacter).toBeTruthy();
    expect(packet.routing.source.isPlayer).toBeFalsy();
    // audio
    expect(packet.audio.chunk).toBeDefined();
  }
}

async function testControlPacket(packet: InworldPacket) {
  if (packet.isControl()) {
    // control
    expect(packet.isControl).toBeTruthy();
    expect(packet.control.action).toBeDefined();
    if (!packet.isInteractionEnd() || !!packet.control.conversation) {
      expect(packet.control.conversation?.participants).toBeDefined();
      expect(packet.control.conversation?.type).toBeDefined();
    } else {
      expect(packet.control.action).toBe('INTERACTION_END');
    }
    // packetId
    expect(packet.packetId.conversationId).toBeDefined();
    if (!packet.isInteractionEnd() || !!packet.control.conversation) {
      expect(packet.routing.source.isCharacter).toBeFalsy();
      expect(packet.routing.source.isPlayer).toBeFalsy();
    } else {
      expect(packet.routing.source.isCharacter).toBeTruthy();
    }
  }
}

async function testTextPacket(
  packet: InworldPacket,
  connection: InworldConnectionService,
  idCheck: (id: string) => boolean,
) {
  if (packet.isText()) {
    // packetId
    expect(packet.packetId.interactionId).toBeDefined();
    expect(idCheck(packet.packetId.interactionId!)).toBeTruthy();
    expect(packet.packetId.conversationId).toBeDefined();
    // routing
    let characters = await connection.getCharacters();
    let characterName = characters[0].id;
    expect(packet.routing.source.name).toBe(characterName);
    expect(packet.routing.source.isCharacter).toBeTruthy();
    expect(packet.routing.source.isPlayer).toBeFalsy();
    // text
    expect(packet.text.text).toBeDefined();
    expect(packet.text.final).toBeDefined();
  }
}

export function interactionIDCheck() {
  let initialValue: string | undefined = undefined;
  let isFirstCall = true;

  return function (value: string): boolean {
    if (isFirstCall) {
      initialValue = value;
      isFirstCall = false;
      return true;
    } else {
      return value === initialValue;
    }
  };
}

function testPackets(
  packets: InworldPacket[],
  connection: InworldConnectionService,
) {
  expect(packets.length).toBeGreaterThan(0);
  const idCheck = interactionIDCheck();
  for (let packet of packets) {
    testBasePacketStructure(packet);
    testSceneMutationPacket(packet);
    testTextPacket(packet, connection, idCheck);
    testAudioPacket(packet, connection, idCheck);
    testEmotionPacket(packet, connection, idCheck);
    testControlPacket(packet);
  }
}

export async function openConnectionManually(
  apikey: [string, string],
  username: string,
  npc: string,
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
        packets.push(packet);
      });

    const connection = client.build();
    await connection.open();
    testPackets(packets, connection);
    resolve(connection);
  });
}

export async function openConnectionManuallySendText(
  apikey: [string, string],
  username: string,
  npc: string,
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
        packets.push(packet);
        if (packet.isInteractionEnd()) {
          testPackets(packets, connection);
          resolve(connection);
        }
      });

    const connection = client.build();
    await connection.open();
    await connection.sendText(message);
  });
}
