import {
  ClientConfiguration,
  InworldClient,
  InworldConnectionService,
  InworldError,
  InworldPacket,
  status,
  TriggerParameter,
} from '@inworld/nodejs-sdk';
import * as fs from 'fs';

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
    if (packet.routing.source.isPlayer) {
      expect(packet.routing.source.name).toBe('');
      expect(packet.routing.source.isPlayer).toBeTruthy();
      expect(packet.routing.source.isCharacter).toBeFalsy();
    } else {
      expect(packet.routing.source.name).toBe(characterName);
      expect(packet.routing.source.isCharacter).toBeTruthy();
      expect(packet.routing.source.isPlayer).toBeFalsy();
    }
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
    if (packet.routing.source.isPlayer) {
      expect(packet.routing.source.name).toBe('');
      expect(packet.routing.source.isPlayer).toBeTruthy();
      expect(packet.routing.source.isCharacter).toBeFalsy();
    } else {
      expect(packet.routing.source.name).toBe(characterName);
      expect(packet.routing.source.isCharacter).toBeTruthy();
      expect(packet.routing.source.isPlayer).toBeFalsy();
    }
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
    if (packet.routing.source.isPlayer) {
      expect(packet.routing.source.name).toBe('');
      expect(packet.routing.source.isPlayer).toBeTruthy();
      expect(packet.routing.source.isCharacter).toBeFalsy();
    } else {
      expect(packet.routing.source.name).toBe(characterName);
      expect(packet.routing.source.isCharacter).toBeTruthy();
      expect(packet.routing.source.isPlayer).toBeFalsy();
    }
    // text
    expect(packet.text.text).toBeDefined();
    expect(packet.text.final).toBeDefined();
  }
}

async function testTriggerPacket(
  packet: InworldPacket,
  connection: InworldConnectionService,
  idCheck: (id: string) => boolean,
) {
  if (packet.isTrigger()) {
    // packetId
    expect(packet.packetId.interactionId).toBeDefined();
    expect(idCheck(packet.packetId.interactionId!)).toBeTruthy();
    expect(packet.packetId.conversationId).toBeDefined();
    // routing
    let characters = await connection.getCharacters();
    let characterName = characters[0].id;
    if (packet.routing.source.isPlayer) {
      expect(packet.routing.source.name).toBe('');
      expect(packet.routing.source.isPlayer).toBeTruthy();
      expect(packet.routing.source.isCharacter).toBeFalsy();
    } else {
      expect(packet.routing.source.name).toBe(characterName);
      expect(packet.routing.source.isCharacter).toBeTruthy();
      expect(packet.routing.source.isPlayer).toBeFalsy();
    }
    // trigger
    expect(packet.trigger.name).toBeDefined();
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
  config: ClientConfiguration,
) {
  let hasEmotionPacket = false;
  let hasInteraction = false;
  expect(packets.length).toBeGreaterThan(0);
  const idCheck = interactionIDCheck();
  for (let packet of packets) {
    testBasePacketStructure(packet);
    testSceneMutationPacket(packet);
    testTextPacket(packet, connection, idCheck);
    testAudioPacket(packet, connection, idCheck);
    testEmotionPacket(packet, connection, idCheck);
    testTriggerPacket(packet, connection, idCheck);
    testControlPacket(packet);

    if (packet.isEmotion()) {
      hasEmotionPacket = true;
    }
    if (packet.isInteractionEnd()) {
      hasInteraction = true;
    }
  }
  if (!!config.capabilities?.emotions && hasInteraction) {
    expect(hasEmotionPacket).toBeTruthy();
  }
}

interface InworldConnectionServiceWrapper {
  close: () => void;
  sendText: (text: string) => Promise<[string, string]>;
  sendAudio: (audio: string) => Promise<[string, string]>;
  sendTrigger: (
    trigger: string,
    parameters?: TriggerParameter[],
  ) => Promise<[string, string]>;
  changeScene: (scene: string) => Promise<void>;
}

interface ByInteractionId {
  [key: string]: InworldPacket[];
}

interface ByInteractionIdOutput {
  [key: string]: [string, string];
}

class InworldConnectionManager {
  private packets: InworldPacket[] = [];
  private byInteractionId: ByInteractionId = {};
  private connection: InworldConnectionService;
  private byInteractionIdOutput: ByInteractionIdOutput = {};

  constructor(
    private apikey: [string, string],
    private username: string,
    private npc: string,
    private config: ClientConfiguration,
  ) {}

  private async initializeConnection(): Promise<void> {
    const client = new InworldClient()
      .setApiKey({
        key: this.apikey[0],
        secret: this.apikey[1],
      })
      .setUser({ fullName: this.username })
      .setConfiguration(this.config)
      .setScene(this.npc)
      .setOnError((err: InworldError) => {
        switch (err.code) {
          case status.ABORTED:
          case status.CANCELLED:
            break;
          default:
            this.connection.close();
            throw err;
        }
      })
      .setOnMessage((packet: InworldPacket) => {
        this.packets.push(packet);

        let intId = packet.packetId.interactionId;

        if (!!intId) {
          this.byInteractionId[intId] = this.byInteractionId[intId] ?? [];
          this.byInteractionId[intId].push(packet);

          // TEXT
          if (packet.isText() && packet.routing.source.isCharacter) {
            this.byInteractionIdOutput[intId] = this.byInteractionIdOutput[
              intId
            ] ?? ['', ''];
            this.byInteractionIdOutput[intId][0] += packet.text.text + '\n';
          }

          // EMOTION
          if (packet.isEmotion()) {
            this.byInteractionIdOutput[intId] = this.byInteractionIdOutput[
              intId
            ] ?? ['', ''];
            this.byInteractionIdOutput[intId][1] +=
              packet.emotions.behavior.code + '\n';
            this.byInteractionIdOutput[intId][1] +=
              packet.emotions.strength.code + '\n';
          }
        }
      });

    this.connection = client.build();
    await this.connection.open();
    testPackets(this.packets, this.connection, this.config);
  }

  private async sendFile(file: string): Promise<void> {
    return new Promise<void>((resolve, _reject) => {
      let i = 0;
      let totalChunks = -1;
      const timeout = 200;
      const highWaterMark = 1024 * 5;

      const delay = (i: number, fn: (i: number) => Promise<void>) => {
        setTimeout(async () => await fn(i), timeout * i);
      };

      const sendChunk = (chunk: string) => {
        delay(i, async (i: number) => {
          await this.connection.sendAudio(chunk);

          if (i + 1 == totalChunks) {
            resolve();
          }
        });
        i++;
      };

      const stream = fs.createReadStream(file, { highWaterMark });

      stream.on('data', sendChunk).on('end', async () => {
        totalChunks = i;
        stream.close();
      });
    });
  }

  public async sendText(text: string): Promise<[string, string]> {
    const sent = await this.connection.sendText(text);

    return new Promise<[string, string]>((resolve, _reject) => {
      const interval = setInterval(() => {
        const lastIndex = this.byInteractionId?.[sent.packetId.interactionId!];
        const lastItem = lastIndex?.[lastIndex.length - 1];

        if (lastItem?.isInteractionEnd()) {
          clearInterval(interval);
          testPackets(
            this.byInteractionId[sent.packetId.interactionId!],
            this.connection,
            this.config,
          );
          resolve(this.byInteractionIdOutput[sent.packetId.interactionId!]);
        }
      });
    });
  }

  public async sendAudio(audio: string): Promise<[string, string]> {
    const lastIndex = this.packets.length - 1;

    await this.connection.sendAudioSessionStart();
    await this.sendFile(audio);
    await this.sendFile('e2e/connection/silence.wav');
    await this.connection.sendAudioSessionEnd();

    return new Promise<[string, string]>((resolve, _reject) => {
      const interval = setInterval(() => {
        const audioRelatedPackets = this.packets.slice(lastIndex + 1);
        const lastItem = audioRelatedPackets[audioRelatedPackets.length - 1];

        if (lastItem?.isInteractionEnd()) {
          clearInterval(interval);
          testPackets(audioRelatedPackets, this.connection, this.config);
          resolve(this.byInteractionIdOutput[lastItem.packetId.interactionId!]);
        }
      });
    });
  }

  public async sendTrigger(
    trigger: string,
    parameters?: TriggerParameter[],
  ): Promise<[string, string]> {
    const sent = await this.connection.sendTrigger(trigger, parameters);

    return new Promise<[string, string]>((resolve, _reject) => {
      const interval = setInterval(() => {
        const lastIndex = this.byInteractionId?.[sent.packetId.interactionId!];
        const lastItem = lastIndex?.[lastIndex.length - 1];

        if (lastItem?.isInteractionEnd()) {
          clearInterval(interval);
          testPackets(
            this.byInteractionId[sent.packetId.interactionId!],
            this.connection,
            this.config,
          );
          resolve(this.byInteractionIdOutput[sent.packetId.interactionId!]);
        }
      });
    });
  }

  public async changeScene(scene: string): Promise<void> {
    await this.connection.getCharacters();
    await this.connection.changeScene(scene);
  }

  public getWrapper(): InworldConnectionServiceWrapper {
    return {
      close: this.connection.close.bind(this.connection),
      sendText: this.sendText.bind(this),
      sendAudio: this.sendAudio.bind(this),
      sendTrigger: this.sendTrigger.bind(this),
      changeScene: this.changeScene.bind(this),
    };
  }

  public static async create(
    apikey: [string, string],
    username: string,
    npc: string,
    config: ClientConfiguration,
  ): Promise<InworldConnectionServiceWrapper> {
    const manager = new InworldConnectionManager(apikey, username, npc, config);
    await manager.initializeConnection();
    return manager.getWrapper();
  }
}

export async function openConnectionManually(
  apikey: [string, string],
  username: string,
  npc: string,
  config: ClientConfiguration,
): Promise<InworldConnectionServiceWrapper> {
  return InworldConnectionManager.create(apikey, username, npc, config);
}
