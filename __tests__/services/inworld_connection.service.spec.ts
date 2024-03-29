import {
  DataChunk,
  MutationEvent,
  RegenerateResponse,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { SCENE_NAME_THE_SAME } from '../../src/common/errors';
import { InworldPacket } from '../../src/entities/packets/inworld_packet.entity';
import { EventFactory } from '../../src/factories/event';
import { ConnectionService } from '../../src/services/connection.service';
import { InworldConnectionService } from '../../src/services/inworld_connection.service';
import { ExtendedInworldPacket } from '../data_structures';
import { createCharacter, extension, KEY, SCENE, SECRET } from '../helpers';

const characters = [createCharacter(), createCharacter()];
const connection = new ConnectionService({
  apiKey: { key: KEY, secret: SECRET },
  onError: jest.fn(),
  name: SCENE,
});
const eventFactory = new EventFactory();

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

    service = new InworldConnectionService(connection);
  });

  test('should return characters', async () => {
    const result = await service.getCharacters();

    expect(result).toEqual(characters);
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
});

describe('send', () => {
  let service: InworldConnectionService;

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
    service = new InworldConnectionService(connection);
  });

  test('should send audio', async () => {
    const dataChunk = jest.spyOn(eventFactory, 'dataChunk');

    const chunk = v4();

    const packet = await service.sendAudio(chunk);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(dataChunk).toHaveBeenCalledTimes(1);
    expect(dataChunk).toHaveBeenCalledWith(chunk, DataChunk.DataType.AUDIO);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.audio.chunk).toEqual(chunk);
    expect(packet.isAudio()).toEqual(true);
  });

  test('should send text', async () => {
    const sendTextEvent = jest.spyOn(eventFactory, 'text');

    const text = v4();

    const packet = await service.sendText(text);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendTextEvent).toHaveBeenCalledTimes(1);
    expect(sendTextEvent).toHaveBeenCalledWith(text);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.text.text).toEqual(text);
    expect(packet.isText()).toEqual(true);
  });

  test('should send trigger without parameters', async () => {
    const sendTrigger = jest.spyOn(eventFactory, 'trigger');

    const name = v4();

    const packet = await service.sendTrigger(name);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendTrigger).toHaveBeenCalledTimes(1);
    expect(sendTrigger).toHaveBeenCalledWith(name, undefined);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.trigger.name).toEqual(name);
    expect(packet.isTrigger()).toEqual(true);
  });

  test('should send trigger with parameters', async () => {
    const sendTrigger = jest.spyOn(eventFactory, 'trigger');

    const name = v4();
    const parameters = [{ name: v4(), value: v4() }];

    const packet = await service.sendTrigger(name, parameters);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendTrigger).toHaveBeenCalledTimes(1);
    expect(sendTrigger).toHaveBeenCalledWith(name, parameters);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.trigger.name).toEqual(name);
    expect(packet.isTrigger()).toEqual(true);
  });

  test('should send audio session start', async () => {
    const sendAudioSessionStart = jest.spyOn(eventFactory, 'audioSessionStart');

    const packet = await service.sendAudioSessionStart();

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendAudioSessionStart).toHaveBeenCalledTimes(1);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.isControl()).toEqual(true);
  });

  test('should send audio session end', async () => {
    const sendAudioSessionEnd = jest.spyOn(eventFactory, 'audioSessionEnd');

    const packet = await service.sendAudioSessionEnd();

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendAudioSessionEnd).toHaveBeenCalledTimes(1);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet.isControl()).toEqual(true);
  });

  test('should send tts playback mute', async () => {
    const mutePlayback = jest.spyOn(eventFactory, 'mutePlayback');

    const packet = await service.sendTTSPlaybackMute(true);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(mutePlayback).toHaveBeenCalledTimes(1);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isTTSPlaybackMute()).toEqual(true);
  });

  test('should send tts playback unmute', async () => {
    const mutePlayback = jest.spyOn(eventFactory, 'mutePlayback');

    const packet = await service.sendTTSPlaybackMute(false);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(mutePlayback).toHaveBeenCalledTimes(1);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isTTSPlaybackUnmute()).toEqual(true);
  });

  test('should send cancel responses', async () => {
    const sendCancelResponsesEvent = jest.spyOn(eventFactory, 'cancelResponse');

    const packet = await service.sendCancelResponse();

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendCancelResponsesEvent).toHaveBeenCalledTimes(1);
    expect(packet).toBeInstanceOf(InworldPacket);
  });

  test('should send narrated action', async () => {
    const sendNarratedAction = jest.spyOn(eventFactory, 'narratedAction');

    const text = v4();

    const packet = await service.sendNarratedAction(text);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendNarratedAction).toHaveBeenCalledTimes(1);
    expect(sendNarratedAction).toHaveBeenCalledWith(text);
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
    const customPacket = service.baseProtoPacket();
    const mutation = new MutationEvent().setRegenerateResponse(
      new RegenerateResponse().setInteractionId(interactionId),
    );

    customPacket.setMutation(mutation);
    customPacket.getPacketId().setInteractionId(interactionId);

    const packet = await service.sendCustomPacket(() => customPacket);
    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(packet.mutation).toEqual({ regenerateResponse: { interactionId } });
  });

  test('should reload scene', async () => {
    const loadScene = jest.spyOn(EventFactory, 'loadScene');

    const packet = await service.reloadScene();

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(loadScene).toHaveBeenCalledTimes(1);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isSceneMutationRequest()).toEqual(true);
  });

  test('should change scene', async () => {
    const scene = `workspaces/${v4()}/scenes/${v4()}`;
    const changeScene = jest.spyOn(EventFactory, 'loadScene');

    const packet = await service.changeScene(scene);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(changeScene).toHaveBeenCalledTimes(1);
    expect(changeScene).toHaveBeenCalledWith(scene);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isSceneMutationRequest()).toEqual(true);
  });

  test('should throw error in case of the same scene for change', async () => {
    jest.spyOn(EventFactory, 'loadScene');

    await expect(service.changeScene(SCENE)).rejects.toEqual(
      new Error(SCENE_NAME_THE_SAME),
    );
  });

  test('should throw error in case wrong scene format', async () => {
    jest.spyOn(EventFactory, 'loadScene');

    await expect(service.changeScene(v4())).rejects.toEqual(
      new Error('Scene name has wrong format'),
    );
  });

  test('should add character', async () => {
    const characters = [
      `workspaces/${v4()}/characters/${v4()}`,
      `workspaces/${v4()}/characters/${v4()}`,
    ];
    const addCharacters = jest.spyOn(EventFactory, 'loadCharacters');

    const packet = await service.addCharacters(characters);

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(addCharacters).toHaveBeenCalledTimes(1);
    expect(addCharacters).toHaveBeenCalledWith(characters);
    expect(packet).toBeInstanceOf(InworldPacket);
    expect(packet?.isSceneMutationRequest()).toEqual(true);
  });

  test('should throw error in case wrong character format', async () => {
    jest.spyOn(EventFactory, 'loadCharacters');

    await expect(service.addCharacters([v4()])).rejects.toEqual(
      new Error('Character name has wrong format'),
    );
  });
});
