import { LoadedScene } from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { ConversationState } from '../../src/common/data_structures';
import { MULTI_CHAR_NARRATED_ACTIONS } from '../../src/common/errors';
import { EventFactory } from '../../src/factories/event';
import { ConnectionService } from '../../src/services/connection.service';
import { ConversationService } from '../../src/services/conversation.service';
import { WorldEngineClientGrpcService } from '../../src/services/gprc/world_engine_client_grpc.service';
import {
  capabilities,
  conversationId,
  conversationUpdated,
  convertAgentsToCharacters,
  createAgent,
  createCharacter,
  getStream,
  KEY,
  SCENE,
  SECRET,
} from '../helpers';

const onError = jest.fn();
const agents = [createAgent(), createAgent()];
const characters = convertAgentsToCharacters(agents);

let connection: ConnectionService;

beforeEach(() => {
  connection = new ConnectionService({
    apiKey: {
      key: KEY,
      secret: SECRET,
    },
    config: {
      capabilities,
    },
    name: SCENE,
    onError,
  });

  connection.conversations.clear();

  jest
    .spyOn(connection, 'getCharactersByResourceNames')
    .mockImplementation((names: string[]) =>
      characters.filter((character) => names.includes(character.resourceName)),
    );
});

test('should create service', () => {
  const conversation = new ConversationService(connection, {
    participants: characters.map((c) => c.resourceName),
    addCharacters: jest.fn(),
  });
  const conversationCharacters = conversation.getCharacters();

  expect(conversation.getConversationId()).toBeDefined();
  expect(conversationCharacters[0].id).toBe(characters[0].id);
  expect(conversationCharacters[1].id).toBe(characters[1].id);
});

describe('update participants', () => {
  let service: ConversationService;
  let addCharacters = jest.fn();

  beforeEach(() => {
    jest.spyOn(ConnectionService.prototype, 'send').mockImplementation(() =>
      Promise.resolve({
        packetId: {
          conversationId: conversationId,
        },
      }),
    );

    jest
      .spyOn(ConversationService.prototype, 'getConversationId')
      .mockImplementation(() => conversationId);

    addCharacters = jest.fn();
    service = new ConversationService(connection, {
      participants: [characters[0].resourceName],
      addCharacters,
    });
  });

  test('should throw error if conversation is missing', async () => {
    expect(
      async () =>
        await service.updateParticipants([characters[1].resourceName]),
    ).rejects.toThrow(`Conversation ${service.getConversationId()} not found`);
  });

  test('should do nothing if conversation is already in progress', async () => {
    expect(service.getCharacters()).toEqual([characters[0]]);

    connection.conversations.set(conversationId, {
      service: service,
      state: ConversationState.PROCESSING,
    });

    await service.updateParticipants([characters[1].resourceName]);

    expect(service.getCharacters()).toEqual([characters[0]]);
  });

  test('should work without errors', async () => {
    const stream = getStream();
    const sceneProto = new LoadedScene().setAgentsList(agents);
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));
    const sendAudioSessionEnd = jest
      .spyOn(ConversationService.prototype, 'sendAudioSessionEnd')
      .mockImplementation(jest.fn());
    const sendAudioSessionStart = jest
      .spyOn(ConversationService.prototype, 'sendAudioSessionStart')
      .mockImplementation(jest.fn());

    expect(service.getCharacters()).toEqual([characters[0]]);

    connection.conversations.set(conversationId, {
      service: service,
      state: ConversationState.INACTIVE,
    });

    await Promise.all([
      service.updateParticipants([characters[1].resourceName]),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.conversations.set(conversationId, {
            service: service,
            state: ConversationState.ACTIVE,
          });
          resolve();
        }, 0);
      }),
    ]);

    expect(service.getCharacters()).toEqual([characters[1]]);
    expect(sendAudioSessionEnd).toHaveBeenCalledTimes(0);
    expect(sendAudioSessionStart).toHaveBeenCalledTimes(0);
  });

  test('should add characters to scene automatically', async () => {
    const newCharacter = createCharacter();

    expect(service.getCharacters()).toEqual([characters[0]]);

    connection.conversations.set(conversationId, {
      service: service,
      state: ConversationState.INACTIVE,
    });

    await Promise.all([
      service.updateParticipants([
        characters[0].resourceName,
        newCharacter.resourceName,
      ]),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.conversations.set(conversationId, {
            service: service,
            state: ConversationState.ACTIVE,
          });
          resolve();
        }, 0);
      }),
    ]);

    expect(addCharacters).toHaveBeenCalledTimes(1);
  });
});

describe('send', () => {
  test('should throw error if conversation is missing', async () => {
    const service = new ConversationService(connection, {
      participants: [characters[0].resourceName],
      addCharacters: jest.fn(),
    });

    expect(async () => await service.sendText(v4())).rejects.toThrow(
      `Conversation ${service.getConversationId()} not found`,
    );
  });

  test('should throw error if narrated action is sent for multi-agents', async () => {
    const service = new ConversationService(connection, {
      participants: characters.map((c) => c.resourceName),
      addCharacters: jest.fn(),
    });

    connection.conversations.set(conversationId, {
      service: service,
      state: ConversationState.ACTIVE,
    });

    expect(async () => {
      await service.sendNarratedAction(v4());
    }).rejects.toThrow(MULTI_CHAR_NARRATED_ACTIONS);
  });

  test('should skip cancel response sending for multi-agent', async () => {
    const cancelResponse = jest.spyOn(EventFactory.prototype, 'cancelResponse');

    const service = new ConversationService(connection, {
      participants: characters.map((c) => c.resourceName),
      addCharacters: jest.fn(),
    });

    connection.conversations.set(conversationId, {
      service: service,
      state: ConversationState.ACTIVE,
    });

    await service.sendCancelResponse();

    expect(cancelResponse).toHaveBeenCalledTimes(0);
  });

  test('should keep packages in queue until conversation is active', async () => {
    jest.spyOn(ConnectionService.prototype, 'send').mockImplementation(() =>
      Promise.resolve({
        packetId: {
          conversationId: conversationId,
        },
      }),
    );
    jest
      .spyOn(ConversationService.prototype, 'getConversationId')
      .mockImplementation(() => conversationId);

    const service = new ConversationService(connection, {
      participants: characters.map((c) => c.resourceName),
      addCharacters: jest.fn(),
    });

    connection.conversations.set(conversationId, {
      service: service,
      state: ConversationState.INACTIVE,
    });

    await Promise.all([
      Promise.all([service.sendText(v4()), service.sendText(v4())]),
      new Promise((resolve: any) => {
        setTimeout(() => {
          expect(connection.conversations.get(conversationId)?.state).toEqual(
            ConversationState.PROCESSING,
          );
          connection.onMessage!(conversationUpdated);
          connection.conversations.set(conversationId, {
            service: service,
            state: ConversationState.ACTIVE,
          });
          resolve();
        }, 0);
      }),
    ]);

    expect(connection.conversations.get(conversationId)?.state).toEqual(
      ConversationState.ACTIVE,
    );
  });
});
