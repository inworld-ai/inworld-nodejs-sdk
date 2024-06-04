import { ClientDuplexStreamImpl } from '@grpc/grpc-js/build/src/call';
import {
  ControlEvent,
  ConversationEventPayload,
  CurrentSceneStatus,
  DataChunk,
  MutationEvent,
  RegenerateResponse,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { ConversationState } from '../../src/common/data_structures';
import { InworldPacket } from '../../src/entities/packets/inworld_packet.entity';
import { EventFactory } from '../../src/factories/event';
import { ConnectionService } from '../../src/services/connection.service';
import { ConversationService } from '../../src/services/conversation.service';
import { WorldEngineClientGrpcService } from '../../src/services/gprc/world_engine_client_grpc.service';
import { InworldConnectionService } from '../../src/services/inworld_connection.service';
import { ExtendedInworldPacket } from '../data_structures';
import {
  agents,
  conversationId,
  convertAgentsToCharacters,
  extension,
  getStream,
  KEY,
  SCENE,
  SECRET,
} from '../helpers';

const characters = convertAgentsToCharacters(agents);
const connection = new ConnectionService({
  apiKey: { key: KEY, secret: SECRET },
  onError: jest.fn(),
  name: SCENE,
});
const eventFactory = new EventFactory();
const sceneProto = new CurrentSceneStatus().setAgentsList(agents);

beforeEach(() => {
  jest.clearAllMocks();
});

test('should open connection', async () => {
  const service = new InworldConnectionService(connection);
  const open = jest
    .spyOn(ConnectionService.prototype, 'openManually')
    .mockImplementationOnce(jest.fn());

  await service.open();

  expect(open).toHaveBeenCalledTimes(1);
});

test('close', () => {
  const service = new InworldConnectionService(connection);
  const close = jest
    .spyOn(connection, 'close')
    .mockImplementationOnce(jest.fn());
  service.close();

  expect(close).toHaveBeenCalledTimes(1);
});

test('should get session state', async () => {
  const service = new InworldConnectionService(connection);
  const getSessionState = jest
    .spyOn(ConnectionService.prototype, 'getSessionState')
    .mockImplementationOnce(jest.fn());

  await service.getSessionState();

  expect(getSessionState).toHaveBeenCalledTimes(1);
});

describe('character', () => {
  let service: InworldConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    jest
      .spyOn(ConnectionService.prototype, 'getCharactersList')
      .mockImplementation(() => Promise.resolve(characters));
    jest
      .spyOn(ConnectionService.prototype, 'getEventFactory')
      .mockImplementation(() => eventFactory);
    jest
      .spyOn(connection, 'getCharactersByResourceNames')
      .mockImplementation((names: string[]) =>
        characters.filter((character) =>
          names.includes(character.resourceName),
        ),
      );
    jest
      .spyOn(connection, 'getCharactersByIds')
      .mockImplementation((ids: string[]) =>
        characters.filter((character) => ids.includes(character.id)),
      );

    service = new InworldConnectionService(connection);
  });

  test('should return characters', async () => {
    const result = await service.getCharacters();

    expect(result).toEqual(characters);
  });

  test('should find character by id', () => {
    expect(service.getCharacterById(characters[0].id)).toEqual(characters[0]);
    expect(service.getCharacterById(characters[1].id)).toEqual(characters[1]);
  });

  test('should find character by resource name', () => {
    expect(
      service.getCharacterByResourceName(characters[0].resourceName),
    ).toEqual(characters[0]);
    expect(
      service.getCharacterByResourceName(characters[1].resourceName),
    ).toEqual(characters[1]);
  });

  test('should return undefined if character is not found', () => {
    expect(service.getCharacterById(v4())).toBeUndefined();
    expect(service.getCharacterByResourceName(v4())).toBeUndefined();
  });

  test('should return current character', async () => {
    const getCurrentCharacter = jest
      .spyOn(ConnectionService.prototype, 'getCurrentCharacter')
      .mockImplementation(() => Promise.resolve(characters[0]));

    const result = await service.getCurrentCharacter();

    expect(result).toEqual(characters[0]);
    expect(getCurrentCharacter).toHaveBeenCalledTimes(1);
  });

  test('should set current character', async () => {
    const setCurrentCharacter = jest.spyOn(
      ConnectionService.prototype,
      'setCurrentCharacter',
    );

    service.setCurrentCharacter(characters[0]);

    expect(setCurrentCharacter).toHaveBeenCalledTimes(1);
    expect(setCurrentCharacter).toHaveBeenCalledWith(characters[0]);
  });

  test('should change current character for existing one-to-one conversation', async () => {
    jest
      .spyOn(service, 'getCurrentCharacter')
      .mockImplementationOnce(() => Promise.resolve(characters[0]));
    jest
      .spyOn(ConversationService.prototype, 'sendText')
      .mockImplementationOnce(jest.fn());

    await service.sendText(v4());

    let conversation = await service.getCurrentConversation();

    expect(conversation.getCharacters()).toEqual([characters[0]]);

    await service.setCurrentCharacter(characters[1]);

    expect(conversation.getCharacters()).toEqual([characters[1]]);
  });
});

describe('send', () => {
  let connection: ConnectionService;
  let service: InworldConnectionService;

  const incoming = eventFactory
    .baseProtoPacket({ conversationId })
    .setControl(
      new ControlEvent().setConversationEvent(
        new ConversationEventPayload()
          .setEventType(ConversationEventPayload.ConversationEventType.STARTED)
          .setParticipantsList([]),
      ),
    );

  const open = jest
    .spyOn(ConnectionService.prototype, 'open')
    .mockImplementationOnce(jest.fn());

  beforeEach(() => {
    jest.clearAllMocks();
    jest
      .spyOn(ConnectionService.prototype, 'isActive')
      .mockImplementation(() => true);
    jest
      .spyOn(ConnectionService.prototype, 'getEventFactory')
      .mockImplementation(() => eventFactory);
    jest
      .spyOn(ConnectionService.prototype, 'getCurrentCharacter')
      .mockImplementation(() => Promise.resolve(characters[0]));
    jest
      .spyOn(ConnectionService.prototype, 'getCharactersByResourceNames')
      .mockImplementation((names: string[]) =>
        characters.filter((character) =>
          names.includes(character.resourceName),
        ),
      );
    jest
      .spyOn(ConversationService.prototype, 'getConversationId')
      .mockImplementation(() => conversationId);
    jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementationOnce(jest.fn());

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      onError: jest.fn(),
      name: SCENE,
    });
    service = new InworldConnectionService(connection);
  });

  test('should send audio', async () => {
    const dataChunk = jest.spyOn(eventFactory, 'dataChunk');

    jest
      .spyOn(service, 'getCurrentCharacter')
      .mockImplementation(() => Promise.resolve(characters[0]));

    jest
      .spyOn(ConversationService.prototype, 'getConversationId')
      .mockImplementation(() => conversationId);

    const chunk = v4();

    const [packet] = await Promise.all([
      service.sendAudio(chunk),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(dataChunk).toHaveBeenCalledTimes(1);
    expect(dataChunk).toHaveBeenCalledWith(chunk, DataChunk.DataType.AUDIO, {
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.audio.chunk).toEqual(chunk);
    expect(packet.isAudio()).toEqual(true);
  });

  test('should send text', async () => {
    const sendTextEvent = jest.spyOn(eventFactory, 'text');

    const text = v4();

    const [packet] = await Promise.all([
      service.sendText(text),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(sendTextEvent).toHaveBeenCalledTimes(1);
    expect(sendTextEvent).toHaveBeenCalledWith(text, {
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.text.text).toEqual(text);
    expect(packet.isText()).toEqual(true);
  });

  test('should send trigger without parameters', async () => {
    const sendTrigger = jest.spyOn(eventFactory, 'trigger');

    const name = v4();

    const [packet] = await Promise.all([
      service.sendTrigger(name),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendTrigger).toHaveBeenCalledTimes(1);
    expect(sendTrigger).toHaveBeenCalledWith(name, {
      conversationId,
      character: characters[0],
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.trigger.name).toEqual(name);
    expect(packet.isTrigger()).toEqual(true);

    service.setCurrentCharacter(characters[1]);

    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[1]],
      },
    ]);
  });

  test('should send trigger with parameters in the old way', async () => {
    const sendTrigger = jest.spyOn(eventFactory, 'trigger');
    const warn = jest.spyOn(global.console, 'warn').mockImplementation();

    const name = v4();
    const parameters = [{ name: v4(), value: v4() }];

    const [packet] = await Promise.all([
      service.sendTrigger(name, parameters),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(sendTrigger).toHaveBeenCalledTimes(1);
    expect(sendTrigger).toHaveBeenCalledWith(name, {
      parameters,
      character: characters[0],
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.trigger.name).toEqual(name);
    expect(packet.isTrigger()).toEqual(true);
  });

  test('should send trigger with parameters in the new way', async () => {
    const sendTrigger = jest.spyOn(eventFactory, 'trigger');
    const warn = jest.spyOn(global.console, 'warn').mockImplementation();

    const name = v4();
    const parameters = [{ name: v4(), value: v4() }];

    const [packet] = await Promise.all([
      service.sendTrigger(name, { parameters }),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(warn).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(sendTrigger).toHaveBeenCalledTimes(1);
    expect(sendTrigger).toHaveBeenCalledWith(name, {
      parameters,
      character: characters[0],
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.trigger.name).toEqual(name);
    expect(packet.isTrigger()).toEqual(true);
  });

  test('should send audio session start', async () => {
    const sendAudioSessionStart = jest.spyOn(eventFactory, 'audioSessionStart');

    const [packet] = await Promise.all([
      service.sendAudioSessionStart(),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(sendAudioSessionStart).toHaveBeenCalledTimes(1);
    expect(sendAudioSessionStart).toHaveBeenLastCalledWith({
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.isControl()).toEqual(true);
  });

  test('should send audio session end', async () => {
    const sendAudioSessionEnd = jest.spyOn(eventFactory, 'audioSessionEnd');

    const [packet] = await Promise.all([
      service.sendAudioSessionEnd(),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(sendAudioSessionEnd).toHaveBeenCalledTimes(1);
    expect(sendAudioSessionEnd).toHaveBeenLastCalledWith({
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.isControl()).toEqual(true);
  });

  test('should send tts playback mute', async () => {
    const mutePlayback = jest.spyOn(eventFactory, 'mutePlayback');

    const [packet] = await Promise.all([
      service.sendTTSPlaybackMute(true),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(mutePlayback).toHaveBeenCalledTimes(1);
    expect(mutePlayback).toHaveBeenLastCalledWith(true, {
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isTTSPlaybackMute()).toEqual(true);
  });

  test('should send tts playback unmute', async () => {
    const mutePlayback = jest.spyOn(eventFactory, 'mutePlayback');

    const [packet] = await Promise.all([
      service.sendTTSPlaybackMute(false),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(mutePlayback).toHaveBeenCalledTimes(1);
    expect(mutePlayback).toHaveBeenLastCalledWith(false, {
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isTTSPlaybackUnmute()).toEqual(true);
  });

  test('should send cancel responses', async () => {
    const sendCancelResponsesEvent = jest.spyOn(eventFactory, 'cancelResponse');

    const [packet] = await Promise.all([
      service.sendCancelResponse(),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(sendCancelResponsesEvent).toHaveBeenCalledTimes(1);
    expect(sendCancelResponsesEvent).toHaveBeenCalledWith({
      character: characters[0],
    });
    expect(packet).toBeInstanceOf(InworldPacket);
  });

  test('should send narrated action', async () => {
    const sendNarratedAction = jest.spyOn(eventFactory, 'narratedAction');

    const text = v4();

    const [packet] = await Promise.all([
      service.sendNarratedAction(text),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(sendNarratedAction).toHaveBeenCalledTimes(1);
    expect(sendNarratedAction).toHaveBeenCalledWith(text, {
      conversationId,
    });
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.narratedAction.text).toEqual(text);
    expect(packet?.isNarratedAction()).toEqual(true);
  });

  test('should send custom packet', async () => {
    const connection = new ConnectionService<ExtendedInworldPacket>({
      apiKey: { key: KEY, secret: SECRET },
      extension,
      onError: jest.fn(),
    });
    const service = new InworldConnectionService<ExtendedInworldPacket>(
      connection,
    );

    const interactionId = v4();
    const customPacket = service.baseProtoPacket({ conversationId });
    const mutation = new MutationEvent().setRegenerateResponse(
      new RegenerateResponse().setInteractionId(interactionId),
    );

    customPacket.setMutation(mutation);
    customPacket.getPacketId().setInteractionId(interactionId);

    const [packet] = await Promise.all([
      service.sendCustomPacket(() => customPacket),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(service.getConversations()).toEqual([
      {
        conversationId,
        characters: [characters[0]],
      },
    ]);
    expect(packet.mutation).toEqual({ regenerateResponse: { interactionId } });
  });

  test('should reload scene', async () => {
    const stream = getStream();
    jest.spyOn(console, 'warn').mockImplementationOnce(jest.fn());
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    jest
      .spyOn(EventFactory.prototype, 'getCharacters')
      .mockReturnValueOnce(characters);
    const change = jest
      .spyOn(ConnectionService.prototype, 'change')
      .mockImplementationOnce(jest.fn());

    await service.reloadScene();
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledTimes(0);
    expect(change).toHaveBeenCalledTimes(1);
  });

  test('should throw error in case wrong scene format', async () => {
    jest.spyOn(EventFactory, 'loadScene');

    await expect(service.changeScene(v4())).rejects.toEqual(
      new Error('Scene name has wrong format'),
    );
  });

  test('should add character', async () => {
    const stream = getStream();

    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));
    jest
      .spyOn(EventFactory.prototype, 'getCharacters')
      .mockReturnValueOnce(characters);
    jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementationOnce(jest.fn());

    const names = [agents[0].getBrainName(), agents[1].getBrainName()];

    const [packet] = await Promise.all([
      await service.addCharacters(names),
      new Promise((resolve: any) => {
        setTimeout(() => {
          connection.onMessage!(incoming);
          resolve(true);
        }, 0);
      }),
    ]);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isSceneMutationRequest()).toEqual(true);
  });

  test('should remove character', async () => {
    const stream = getStream();

    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));
    jest
      .spyOn(EventFactory.prototype, 'getCharacters')
      .mockReturnValueOnce(characters);
    jest
      .spyOn(InworldConnectionService.prototype, 'getCharacters')
      .mockImplementation(() => Promise.resolve(characters));
    jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementationOnce(jest.fn());

    const names = [agents[0].getBrainName()];
    const ids = [agents[0].getAgentId()];

    const conversationService = new ConversationService(connection, {
      participants: [characters[0].resourceName, characters[1].resourceName],
      addCharacters: jest.fn(),
    });

    connection.conversations.set(conversationService.getConversationId(), {
      service: conversationService,
      state: ConversationState.ACTIVE,
    });

    const packet = await service.removeCharacters(names);

    expect(open).toHaveBeenCalledTimes(0);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isSceneMutationRequest()).toEqual(true);
    expect(packet?.sceneMutation?.removedCharacterIds).toEqual(ids);
  });

  test('should throw error in case wrong character format on add', async () => {
    jest.spyOn(EventFactory, 'loadCharacters');

    await expect(service.addCharacters([v4()])).rejects.toEqual(
      new Error('Character name has wrong format'),
    );
  });

  test('should throw error in case wrong character format on remove', async () => {
    jest.spyOn(EventFactory, 'loadCharacters');

    await expect(service.removeCharacters([v4()])).rejects.toEqual(
      new Error('Character name has wrong format'),
    );
  });

  test('should start conversation', async () => {
    expect(service.getConversations()).toEqual([]);

    service.startConversation([characters[0].resourceName]);

    expect(service.getConversations()).toEqual([
      {
        conversationId: expect.anything(),
        characters: [characters[0]],
      },
    ]);
  });

  test('should throw error if character is not set', async () => {
    const conversationService = new ConversationService(connection, {
      participants: [characters[0].resourceName],
      addCharacters: jest.fn(),
    });
    jest
      .spyOn(ConversationService.prototype, 'getConversationId')
      .mockImplementation(() => conversationId);
    jest
      .spyOn(connection, 'getCurrentCharacter')
      .mockImplementationOnce(() => Promise.resolve(undefined!));

    connection.conversations.set(conversationService.getConversationId(), {
      service: conversationService,
      state: ConversationState.ACTIVE,
    });

    expect(async () => {
      await service.sendText(v4());
    }).rejects.toThrow('Current character is not set');
  });
});
