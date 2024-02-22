import { ClientDuplexStreamImpl } from '@grpc/grpc-js/build/src/call';
import { WorldEngineClient } from '@proto/ai/inworld/engine/world-engine_grpc_pb';
import { LoadSceneResponse } from '@proto/ai/inworld/engine/world-engine_pb';
import {
  Actor,
  InworldPacket as ProtoPacket,
  PacketId,
  Routing,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { protoTimestamp } from '../../src/common/helpers';
import { Logger } from '../../src/common/logger';
import { InworldPacket } from '../../src/entities/inworld_packet.entity';
import { Scene } from '../../src/entities/scene.entity';
import { Session } from '../../src/entities/session.entity';
import { SessionToken } from '../../src/entities/session_token.entity';
import { EventFactory } from '../../src/factories/event';
import { ConnectionService } from '../../src/services/connection.service';
import { StateSerializationClientGrpcService } from '../../src/services/gprc/state_serialization_client_grpc.service';
import { WorldEngineClientGrpcService } from '../../src/services/gprc/world_engine_client_grpc.service';
import {
  capabilities,
  convertAgentsToCharacters,
  createAgent,
  generateEmptyPacket,
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

const agents = [createAgent(), createAgent()];
const characters = convertAgentsToCharacters(agents);
const scene = new LoadSceneResponse().setAgentsList(agents);
const stream = new ClientDuplexStreamImpl(jest.fn(), jest.fn());
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
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => stream);
    const loadScene = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

    await connection.open();

    const loaded = await connection.getCharactersList();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(loadScene).toHaveBeenCalledTimes(1);
    expect(loadScene).toHaveBeenCalledWith({
      name: SCENE,
      capabilities,
      sessionToken,
      user,
    });
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(loaded[0].id).toBe(characters[0].id);
    expect(loaded[1].id).toBe(characters[1].id);
  });

  test('should call external generate session token', async () => {
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
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => stream);
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

    await connection.open();

    await connection.getCharactersList();

    expect(generateSessionToken).toHaveBeenCalledTimes(0);
    expect(generateSessionTokenFn).toHaveBeenCalledTimes(1);
  });

  test('should call getter and setter for session', async () => {
    const sessionGetterSetter = {
      get: jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          scene: Scene.fromProto(scene),
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
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => stream);
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

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
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));
    const err = new Error();
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => {
        throw err;
      });

    await connection.open();

    expect(openSession).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(err);
  });

  test('should inactivate connection on disconnect stream event', async () => {
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));
    jest
      .spyOn(WorldEngineClient.prototype, 'session')
      .mockImplementationOnce(() => stream);

    await connection.open();

    expect(connection.isActive()).toEqual(true);

    stream.emit('close');

    expect(connection.isActive()).toEqual(false);
    expect(onDisconnect).toHaveBeenCalledTimes(1);
  });

  test('should not throw error on close event without onDisconnect handler', async () => {
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
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));
    jest
      .spyOn(WorldEngineClient.prototype, 'session')
      .mockImplementationOnce(() => stream);

    await connection.open();

    expect(connection.isActive()).toEqual(true);

    stream.emit('close');

    expect(connection.isActive()).toEqual(false);
  });

  test('should not generate actual token twice', async () => {
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => stream);
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

    await connection.open();
    await connection.open();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
  });

  test('should regenerate expired token', async () => {
    const expiredSession = new SessionToken({
      ...sessionToken,
      expirationTime: new Date(),
    });
    const generateSessionToken = jest.spyOn(connection, 'generateSessionToken');

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(expiredSession));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => stream);
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

    await connection.open();

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(expiredSession));

    await connection.open();

    expect(generateSessionToken).toHaveBeenCalledTimes(2);
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

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => stream);
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

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
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

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
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => stream);
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

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
      .spyOn(WorldEngineClientGrpcService.prototype, 'session')
      .mockImplementationOnce(() => stream);
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));

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

    const loadScene = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementation(() => Promise.resolve(scene));

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementation(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'session')
      .mockImplementation(() => stream);

    const protoPackets: ProtoPacket[] = [];
    const send = () => {
      const proto = generateEmptyPacket();
      protoPackets.push(proto);
      return proto;
    };

    await Promise.all([connection.send(send), connection.send(send)]).then(
      (values) => {
        expect(loadScene).toHaveBeenCalledTimes(1);
        expect(values[0]).toEqual(InworldPacket.fromProto(protoPackets[0]));
        expect(values[1]).toEqual(InworldPacket.fromProto(protoPackets[1]));
      },
    );
  });
});

describe('message', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should receive message', async () => {
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

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene));
    jest
      .spyOn(WorldEngineClient.prototype, 'session')
      .mockImplementationOnce(() => stream);

    await connection.open();

    stream.emit('data', packet);

    expect(onMessage).toHaveBeenCalledTimes(1);
    expect(onMessage).toHaveBeenCalledWith(InworldPacket.fromProto(packet));
  });
});

describe('character list', () => {
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
    const loadScene = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'loadScene')
      .mockImplementationOnce(() => Promise.resolve(scene))
      .mockImplementationOnce(() => Promise.resolve(scene));

    const loadedCharactersFirst = await connection.getCharactersList();
    const loadedCharactersSecond = await connection.getCharactersList();

    expect(loadedCharactersFirst).toEqual(characters);
    expect(loadedCharactersSecond).toEqual(characters);
    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(loadScene).toHaveBeenCalledTimes(1);
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
