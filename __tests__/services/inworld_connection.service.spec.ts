import { DataChunk } from '@proto/packets_pb';
import { v4 } from 'uuid';

import { InworldPacket } from '../../src/entities/inworld_packet.entity';
import { EventFactory } from '../../src/factories/event';
import { ConnectionService } from '../../src/services/connection.service';
import { InworldConnectionService } from '../../src/services/inworld_connection.service';
import { createCharacter, KEY, SECRET } from '../helpers';

const characters = [createCharacter(), createCharacter()];
const connection = new ConnectionService({
  apiKey: { key: KEY, secret: SECRET },
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
      .spyOn(eventFactory, 'getCurrentCharacter')
      .mockImplementationOnce(() => characters[0]);

    const result = await service.getCurrentCharacter();

    expect(result).toEqual(characters[0]);
    expect(getCurrentCharacter).toHaveBeenCalledTimes(1);
  });

  test('should set current character', async () => {
    const setCurrentCharacter = jest.spyOn(eventFactory, 'setCurrentCharacter');

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

  test('should send cancel responses', async () => {
    const sendCancelResponsesEvent = jest.spyOn(eventFactory, 'cancelResponse');

    const packet = await service.sendCancelResponse();

    expect(open).toHaveBeenCalledTimes(0);
    expect(service.isActive()).toEqual(true);
    expect(sendCancelResponsesEvent).toHaveBeenCalledTimes(1);
    expect(packet).toBeInstanceOf(InworldPacket);
  });
});
