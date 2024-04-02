import { ClientDuplexStreamImpl } from '@grpc/grpc-js/build/src/call';
import { WorldEngineClient } from '@proto/ai/inworld/engine/world-engine_grpc_pb';
import {
  Actor,
  ControlEvent,
  InworldPacket as ProtoPacket,
  PacketId,
  Routing,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import {
  LoadedCharacters,
  LoadedScene,
  SessionControlResponseEvent,
} from '../../proto/ai/inworld/packets/packets_pb';
import { protoTimestamp } from '../../src/common/helpers';
import { Logger } from '../../src/common/logger';
import { Character } from '../../src/entities/character.entity';
import { InworldPacket } from '../../src/entities/packets/inworld_packet.entity';
import { Scene } from '../../src/entities/scene.entity';
import { Session } from '../../src/entities/session.entity';
import { SessionToken } from '../../src/entities/session_token.entity';
import { EventFactory } from '../../src/factories/event';
import { ConnectionService } from '../../src/services/connection.service';
import { StateSerializationClientGrpcService } from '../../src/services/gprc/state_serialization_client_grpc.service';
import { WorldEngineClientGrpcService } from '../../src/services/gprc/world_engine_client_grpc.service';
import {
  agents,
  capabilities,
  characters,
  createAgent,
  emitSessionControlResponseEvent,
  generateEmptyPacket,
  getStream,
  KEY,
  previousState,
  SCENE,
  SECRET,
  sessionProto,
  sessionToken,
  setTimeoutMock,
  user,
} from '../helpers';

const onError = jest.fn();
const onMessage = jest.fn();
const onDisconnect = jest.fn();

const sceneProto = new LoadedScene().setAgentsList(agents);
const timeoutMockCalls = (timeout: any) =>
  timeout.mock.calls.filter((ctx: any) => ctx[1] !== 0).length;
const DISCONNECT_TIMEOUT = 100;

beforeEach(() => {
  jest.clearAllMocks();
});

test('should return event factory', () => {
  const connection = new ConnectionService({
    apiKey: {
      key: KEY,
      secret: SECRET,
    },
    onError,
  });

  expect(connection.getEventFactory()).toBeInstanceOf(EventFactory);
});

test('should generate session token', async () => {
  const connection = new ConnectionService({
    apiKey: {
      key: KEY,
      secret: SECRET,
    },
    onError,
  });
  const generateSessionToken = jest
    .spyOn(connection, 'generateSessionToken')
    .mockImplementationOnce(() => Promise.resolve(sessionToken));

  const result = await connection.generateSessionToken();

  expect(generateSessionToken).toHaveBeenCalledTimes(1);
  expect(result).toEqual(sessionToken);
});

describe('message', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should receive message', async () => {
    const stream = getStream();
    const onMessage = jest.fn();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { capabilities },
      name: SCENE,
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());

    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp());

    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(
          () => new Promise(emitSessionControlResponseEvent(stream)),
          0,
        );
        return stream;
      });

    await connection.open();

    stream.emit('data', packet);

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(onMessage).toHaveBeenCalledTimes(1);
    expect(onMessage).toHaveBeenCalledWith(InworldPacket.fromProto(packet));
  });

  test('should receive warn message', async () => {
    const stream = getStream();
    const loggerWarn = jest.spyOn(Logger.prototype, 'warn');
    const onMessage = jest.fn();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { capabilities },
      name: SCENE,
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());
    const control = new ControlEvent().setAction(ControlEvent.Action.WARNING);
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setControl(control)
      .setTimestamp(protoTimestamp());

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(
          () => new Promise(emitSessionControlResponseEvent(stream)),
          0,
        );
        return stream;
      });

    await connection.open();

    stream.emit('data', packet);
    expect(onMessage).toHaveBeenCalledTimes(1);
    expect(onMessage).toHaveBeenCalledWith(InworldPacket.fromProto(packet));
    expect(loggerWarn).toHaveBeenCalledWith({
      action: 'Receive warning packet',
      data: {
        packet: packet.toObject(),
      },
      sessionId: sessionToken.sessionId,
    });
  });

  test('should replace scene characters', async () => {
    let currentCharacters: Character[];
    const newAgents = [createAgent(), createAgent()];
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities,
      },
      name: SCENE,
      user,
      onError,
      onMessage: async (packet) => {
        const newCharacters = await connection.getCharactersList();

        expect(packet.isSceneMutationResponse()).toEqual(true);
        expect(newCharacters[0].id).not.toBe(currentCharacters[0].id);
        expect(newCharacters[1].id).not.toBe(currentCharacters[1].id);
        expect(newCharacters[0].id).toEqual(newAgents[0].getAgentId());
        expect(newCharacters[1].id).toEqual(newAgents[1].getAgentId());
      },
      onDisconnect,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(
          () => new Promise(emitSessionControlResponseEvent(stream)),
          0,
        );
        return stream;
      });

    await connection.open();

    currentCharacters = await connection.getCharactersList();

    const packet = generateEmptyPacket().setSessionControlResponse(
      new SessionControlResponseEvent().setLoadedScene(
        new LoadedScene().setAgentsList(newAgents),
      ),
    );

    stream.emit('data', packet);
  });

  test('should add characters to scene', async () => {
    let currentCharacters: Character[];
    const newAgents = [createAgent(), createAgent()];
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities,
      },
      name: SCENE,
      user,
      onError,
      onMessage: async (packet) => {
        const newCharacters = await connection.getCharactersList();

        expect(packet.isSceneMutationResponse()).toEqual(true);
        expect(newCharacters[0].id).toEqual(currentCharacters[0].id);
        expect(newCharacters[1].id).toEqual(currentCharacters[1].id);
        expect(newCharacters[2].id).toEqual(newAgents[0].getAgentId());
        expect(newCharacters[3].id).toEqual(newAgents[1].getAgentId());
      },
      onDisconnect,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(
          () => new Promise(emitSessionControlResponseEvent(stream)),
          0,
        );
        return stream;
      });

    await connection.open();

    currentCharacters = await connection.getCharactersList();

    const packet = generateEmptyPacket().setSessionControlResponse(
      new SessionControlResponseEvent().setLoadedCharacters(
        new LoadedCharacters().setAgentsList(newAgents),
      ),
    );

    stream.emit('data', packet);
  });
});

describe('getSessionState', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: {
        key: KEY,
        secret: SECRET,
      },
      name: SCENE,
      onError,
    });
  });

  test('should get state', async () => {
    const sessionState = {
      state: previousState,
      creationTime: protoTimestamp().toDate().toISOString(),
    };
    const generateSessionToken = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionProto));
    const getSessionState = jest
      .spyOn(StateSerializationClientGrpcService.prototype, 'getSessionState')
      .mockImplementationOnce(() => Promise.resolve(sessionState));

    const result = await connection.getSessionState();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(getSessionState).toHaveBeenCalledTimes(1);
    expect(result).toEqual(sessionState);
  });

  test('should catch error and pass it to handler', async () => {
    const err = new Error();
    const generateSessionToken = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionProto));
    const getSessionState = jest
      .spyOn(StateSerializationClientGrpcService.prototype, 'getSessionState')
      .mockImplementationOnce(() => {
        throw err;
      });

    await connection.getSessionState();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(getSessionState).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(err);
  });
});

describe('open', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities },
      user,
      onError,
      onMessage,
      onDisconnect,
    });
  });

  test('should execute without errors', async () => {
    const stream = getStream();
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();

    const loaded = await connection.getCharactersList();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(loaded[0].id).toBe(characters[0].id);
    expect(loaded[1].id).toBe(characters[1].id);
  });

  test('should call external generate session token', async () => {
    const stream = getStream();
    const generateSessionTokenFn = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities },
      user,
      onError,
      onMessage,
      onDisconnect,
      generateSessionToken: generateSessionTokenFn,
    });

    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();

    await connection.getCharactersList();

    expect(generateSessionToken).toHaveBeenCalledTimes(0);
    expect(generateSessionTokenFn).toHaveBeenCalledTimes(1);
  });

  test('should call getter and setter for session', async () => {
    const stream = getStream();
    const sessionGetterSetter = {
      get: jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          scene: Scene.fromProto(SCENE, new LoadedScene()),
          sessionToken,
        } as Session),
      ),
      set: jest.fn(),
    };
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities },
      user,
      onError,
      onMessage,
      onDisconnect,
      sessionGetterSetter,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();

    expect(sessionGetterSetter.get).toHaveBeenCalledTimes(1);
    expect(sessionGetterSetter.set).toHaveBeenCalledTimes(1);
  });

  test('should catch error on load scene and pass it to handler', async () => {
    const err = new Error();
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.reject(err));

    await connection.open();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(err);
  });

  test('should catch error on connection establishing and pass it to handler', async () => {
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const err = new Error();
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => {
        throw err;
      });

    await connection.open();

    expect(openSession).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(err);
  });

  test('should inactivate connection on disconnect stream event', async () => {
    const stream = getStream();
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(
          () => new Promise(emitSessionControlResponseEvent(stream)),
          0,
        );
        return stream;
      });

    await connection.open();

    expect(connection.isActive()).toEqual(true);

    stream.emit('close');

    expect(connection.isActive()).toEqual(false);
    expect(onDisconnect).toHaveBeenCalledTimes(1);
  });

  test('should not throw error on close event without onDisconnect handler', async () => {
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities },
      user,
      onError,
      onMessage,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(
          () => new Promise(emitSessionControlResponseEvent(stream)),
          0,
        );
        return stream;
      });

    await connection.open();

    expect(connection.isActive()).toEqual(true);

    stream.emit('close');

    expect(connection.isActive()).toEqual(false);
  });

  test('should not generate actual token twice', async () => {
    const stream = getStream();
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();
    await connection.open();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
  });

  test('should regenerate expired token', async () => {
    const stream = getStream();
    const expiredSession = new SessionToken({
      ...sessionToken,
      expirationTime: new Date(),
    });

    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(expiredSession))
      .mockImplementationOnce(() => Promise.resolve(expiredSession));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementation(() => Promise.resolve([stream, sceneProto]));
    const reopenSession = jest.spyOn(
      WorldEngineClientGrpcService.prototype,
      'reopenSession',
    );

    await connection.open();

    connection.close();

    await connection.open();

    expect(generateSessionToken).toHaveBeenCalledTimes(2);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(reopenSession).toHaveBeenCalledTimes(1);
  });

  test('should schedule disconnect', async () => {
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities,
      },
      name: SCENE,
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    const close = jest.spyOn(connection, 'close');

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    const setTimeout = jest
      .spyOn(global, 'setTimeout')
      .mockImplementationOnce(setTimeoutMock);

    await connection.open();

    expect(timeoutMockCalls(setTimeout)).toEqual(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      DISCONNECT_TIMEOUT,
    );

    expect(close).toHaveBeenCalledTimes(1);
  });
});

describe('open manually', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { connection: { autoReconnect: false }, capabilities },
      user,
      onError,
      onMessage,
      onDisconnect,
    });
  });

  test('should throw error in case of openManually call without autoreconnect', async () => {
    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    await connection.openManually();

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toEqual(
      'Impossible to open connection manually with `autoReconnect` enabled',
    );
  });

  test('should throw error in case openManually call with active connection', async () => {
    const isActive = jest
      .spyOn(connection, 'isActive')
      .mockImplementationOnce(() => true);

    await connection.openManually();

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toEqual(
      'Connection is already open',
    );
    expect(isActive).toHaveBeenCalledTimes(1);
  });

  test('should open connection', async () => {
    const isActive = jest
      .spyOn(connection, 'isActive')
      .mockImplementationOnce(() => false);
    const open = jest
      .spyOn(ConnectionService.prototype, 'open')
      .mockImplementationOnce(jest.fn());
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    await connection.openManually();

    expect(isActive).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledTimes(1);
  });
});

describe('close', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should skip for empty stream', () => {
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      onError,
    });
    const end = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'end')
      .mockImplementationOnce(jest.fn());

    connection.close();

    expect(end).toHaveBeenCalledTimes(0);
  });

  test('should execute for existing stream', async () => {
    const stream = getStream();
    const loggerDebug = jest.spyOn(Logger.prototype, 'debug');
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities },
      user,
      onError,
      onMessage,
      onDisconnect,
    });
    const cancel = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'cancel')
      .mockImplementationOnce(jest.fn());
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();

    connection.close();

    expect(cancel).toHaveBeenCalledTimes(1);
    expect(loggerDebug).toHaveBeenCalledTimes(1);
  });
});

describe('send', () => {
  const loggerDebug = jest.spyOn(Logger.prototype, 'debug');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should skip for empty stream', async () => {
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      onError,
    });
    const write = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementationOnce(jest.fn());

    jest.spyOn(connection, 'isActive').mockImplementation(() => true);

    await connection.send(generateEmptyPacket);

    expect(write).toHaveBeenCalledTimes(0);
  });

  test('should execute for existing stream', async () => {
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities },
      user,
      onError,
      onMessage,
      onDisconnect,
    });
    const write = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementationOnce(jest.fn());
    const open = jest.spyOn(ConnectionService.prototype, 'open');
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.send(generateEmptyPacket);

    expect(open).toHaveBeenCalledTimes(1);
    expect(write).toHaveBeenCalledTimes(1);
    expect(loggerDebug).toHaveBeenCalledTimes(1);
  });

  test('should throw error in case of connection is inactive on send call', async () => {
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { connection: { autoReconnect: false }, capabilities },
      onError,
    });
    const isActive = jest
      .spyOn(connection, 'isActive')
      .mockImplementationOnce(() => false);
    const open = jest.spyOn(ConnectionService.prototype, 'open');

    await connection.send(generateEmptyPacket);

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toEqual(
      'Unable to send data due inactive connection',
    );
    expect(isActive).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledTimes(0);
  });

  test('should schedule disconnect', async () => {
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities,
      },
      name: SCENE,
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    const close = jest.spyOn(connection, 'close');

    jest.spyOn(connection, 'isActive').mockImplementation(() => true);

    const setTimeout = jest
      .spyOn(global, 'setTimeout')
      .mockImplementationOnce(setTimeoutMock);

    await connection.send(generateEmptyPacket);

    expect(timeoutMockCalls(setTimeout)).toEqual(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      DISCONNECT_TIMEOUT,
    );

    expect(close).toHaveBeenCalledTimes(1);
  });

  test('should load scene once in case of simultaneity sent packets', async () => {
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities,
      },
      name: SCENE,
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementation(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(
          () => new Promise(emitSessionControlResponseEvent(stream)),
          0,
        );
        return stream;
      });

    const protoPackets: ProtoPacket[] = [];
    const send = () => {
      const proto = generateEmptyPacket();
      protoPackets.push(proto);
      return proto;
    };

    await Promise.all([connection.send(send), connection.send(send)]).then(
      (values) => {
        expect(values[0]).toEqual(InworldPacket.fromProto(protoPackets[0]));
        expect(values[1]).toEqual(InworldPacket.fromProto(protoPackets[1]));
      },
    );
  });
});

describe('getCharactersList', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities },
      user,
      onError,
      onMessage,
      onDisconnect,
    });
  });

  test("should load scene if it's required", async () => {
    const stream = getStream();
    const getCurrentCharacter = jest.spyOn(
      EventFactory.prototype,
      'getCurrentCharacter',
    );
    const setCurrentCharacter = jest.spyOn(
      EventFactory.prototype,
      'setCurrentCharacter',
    );
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken))
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    const loadedCharactersFirst = await connection.getCharactersList();
    const loadedCharactersSecond = await connection.getCharactersList();

    expect(loadedCharactersFirst).toEqual(characters);
    expect(loadedCharactersSecond).toEqual(characters);
    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(setCurrentCharacter).toHaveBeenCalledTimes(1);
    expect(getCurrentCharacter).toHaveBeenCalledTimes(1);
  });
});

describe('character', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities },
      user,
      onError,
      onMessage,
      onDisconnect,
    });
  });

  test('should return current character', async () => {
    const getCharactersList = jest
      .spyOn(connection, 'getCharactersList')
      .mockImplementationOnce(jest.fn());

    const getCurrentCharacter = jest
      .spyOn(EventFactory.prototype, 'getCurrentCharacter')
      .mockImplementationOnce(() => characters[0]);

    const result = await connection.getCurrentCharacter();

    expect(result).toEqual(characters[0]);
    expect(getCharactersList).toHaveBeenCalledTimes(1);
    expect(getCurrentCharacter).toHaveBeenCalledTimes(1);
  });

  test('should set current character', async () => {
    const setCurrentCharacter = jest.spyOn(
      EventFactory.prototype,
      'setCurrentCharacter',
    );
    connection.setCurrentCharacter(characters[0]);

    expect(setCurrentCharacter).toHaveBeenCalledTimes(1);
    expect(setCurrentCharacter).toHaveBeenCalledWith(characters[0]);
  });
});
