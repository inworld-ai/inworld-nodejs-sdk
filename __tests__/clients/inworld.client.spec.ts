import { v4 } from 'uuid';

import { InworldClient } from '../../src/clients/inworld.client';
import { GetterSetter } from '../../src/common/data_structures';
import { Logger } from '../../src/common/logger';
import { Session } from '../../src/entities/session.entity';
import { ConnectionService } from '../../src/services/connection.service';
import { WorldEngineClientGrpcService } from '../../src/services/gprc/world_engine_client_grpc.service';
import {
  capabilitiesProps,
  extension,
  KEY,
  phrases,
  previousState,
  SCENE,
  SECRET,
  sessionProto,
  sessionToken,
  user,
} from '../helpers';

describe('should finish with success', () => {
  let client: InworldClient;
  const onError = jest.fn();
  const onMessage = jest.fn();
  const onDisconnect = jest.fn();
  const generateSessionTokenFn = jest.fn();
  const sessionGetterSetter = {
    get: jest.fn(),
    set: jest.fn(),
  } as GetterSetter<Session>;

  beforeEach(() => {
    jest.clearAllMocks();
    client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      .setConfiguration({
        capabilities: capabilitiesProps,
        gameSessionId: v4(),
      })
      .setUser({ fullName: user.fullName })
      .setClient({ id: 'test-client' })
      .setOnDisconnect(onDisconnect)
      .setOnMessage(onMessage)
      .setOnError(onError)
      .setOnSession(sessionGetterSetter)
      .setExtension(extension)
      .setGenerateSessionToken(generateSessionTokenFn)
      .setSessionContinuation({ previousDialog: phrases, previousState });
  });

  test('should generate session token', async () => {
    const generateSessionToken = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionProto));

    const result = await client.generateSessionToken();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(result).toEqual(sessionToken);
  });

  test('should build', async () => {
    expect(() => client.build()).not.toThrow();
  });

  test('should throw error is only emotion capability is set explicitly', async () => {
    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      // audio is enabled by default
      .setConfiguration({ capabilities: { emotions: true } });
    expect(() => client.build()).not.toThrow();
  });

  test('shoud print a warning if logs capability is set', async () => {
    const consoleWarn = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      .setConfiguration({ capabilities: { logs: true } });

    expect(() => client.build()).not.toThrow();
    expect(consoleWarn).toHaveBeenCalledTimes(1);
    expect(consoleWarn).toHaveBeenCalledWith(
      'logs capability is deprecated. Please use logsDebug, logsInfo, logsWarning instead',
    );
  });

  test('should disable latency capabilities', async () => {
    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      .setConfiguration({
        capabilities: { perceivedLatencyReport: false, pingPongReport: false },
      });

    const result = client.build();

    expect(result.getCapabilities()?.perceivedLatencyReport).toBeFalsy();
    expect(result.getCapabilities()?.pingPongReport).toBeFalsy();
  });
});

describe('should throw error', () => {
  test('on empty API Key', async () => {
    const client = new InworldClient().setScene(SCENE);

    expect(() => client.build()).toThrow('Api key is required');
  });

  test('on empty key part of API Key', () => {
    const client = new InworldClient()
      .setApiKey({ key: '', secret: SECRET })
      .setScene(SCENE);

    expect(() => client.build()).toThrow('Api key is required');
  });

  test('on empty secret part of API Key', () => {
    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: '' })
      .setScene(SCENE);

    expect(() => client.build()).toThrow('Api key is required');
  });

  test('on empty scene', () => {
    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene('');

    expect(() => client.build()).toThrow('Scene name is required');
  });

  test('on wrong scene format', () => {
    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(v4());

    expect(() => client.build()).toThrow('Scene name has wrong format');
  });
});

describe('catch error in runtime', () => {
  const onError = jest.fn();
  const consoleErr = jest.spyOn(console, 'error').mockImplementation(() => {});
  const loggerError = jest.spyOn(Logger.prototype, 'error');

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = {};
  });

  test('should pass error to console.error', async () => {
    jest
      .spyOn(ConnectionService.prototype, 'isActive')
      .mockImplementation(() => true);
    const consoleErr = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const loggerError = jest.spyOn(Logger.prototype, 'error');
    const connection = new InworldClient()
      .setConfiguration({ connection: { autoReconnect: false } })
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      .build();
    await connection.open();

    expect(loggerError).toHaveBeenCalledTimes(1);
    expect(consoleErr).toHaveBeenCalledTimes(1);
    expect(consoleErr).toHaveBeenCalledWith(
      new Error('Connection is already open'),
    );
  });

  test('should pass error to custom error callback', async () => {
    jest
      .spyOn(ConnectionService.prototype, 'isActive')
      .mockImplementation(() => true);

    const connection = new InworldClient()
      .setConfiguration({ connection: { autoReconnect: false } })
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      .setOnError(onError)
      .build();
    await connection.open();

    expect(onError).toHaveBeenCalledTimes(1);
    expect(loggerError).toHaveBeenCalledTimes(1);
    expect(consoleErr).toHaveBeenCalledTimes(0);
    expect(onError).toHaveBeenCalledWith(
      new Error('Connection is already open'),
    );
  });
});
