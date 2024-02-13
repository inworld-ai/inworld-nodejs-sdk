import { credentials, ServiceError } from '@grpc/grpc-js';
import {
  ClientDuplexStreamImpl,
  SurfaceCall,
} from '@grpc/grpc-js/build/src/call';
import { CapabilitiesConfiguration } from '@proto/ai/inworld/engine/configuration/configuration_pb';
import { WorldEngineClient } from '@proto/ai/inworld/engine/world-engine_grpc_pb';
import { ClientRequest } from '@proto/ai/inworld/engine/world-engine_pb';
import {
  Continuation,
  InworldPacket as ProtoPacket,
} from '@proto/ai/inworld/packets/packets_pb';
import os = require('os');

import { Config } from '../../../src/common/config';
import { CLIENT_ID } from '../../../src/common/constants';
import { Logger } from '../../../src/common/logger';
import { PreviousDialog } from '../../../src/entities/continuation/previous_dialog.entity';
import { SessionContinuation } from '../../../src/entities/continuation/session_continuation.entity';
import { WorldEngineClientGrpcService } from '../../../src/services/gprc/world_engine_client_grpc.service';
import { ExtendedInworldPacket } from '../../data_structures';
import {
  capabilities,
  characters,
  emitSessionControlResponseEvent,
  extendedCapabilities,
  extension,
  generateEmptyPacket,
  getStream,
  KEY,
  phrases,
  previousDialog,
  previousState,
  SCENE,
  SECRET,
  sessionControlResponseEvent,
  sessionProto,
  sessionToken,
  user,
} from '../../helpers';

const { version } = require('@root/package.json');

describe('credentials', () => {
  const createSsl = jest.spyOn(credentials, 'createSsl');
  const createInsecure = jest.spyOn(credentials, 'createInsecure');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should use insecure credentials', () => {
    const getSSL = jest
      .spyOn(Config.prototype, 'getSSL')
      .mockImplementationOnce(() => false);

    new WorldEngineClientGrpcService();

    expect(createSsl).toHaveBeenCalledTimes(0);
    expect(createInsecure).toHaveBeenCalledTimes(1);
    expect(getSSL).toHaveBeenCalledTimes(1);
  });

  test('should use secure credentials', () => {
    const getSSL = jest
      .spyOn(Config.prototype, 'getSSL')
      .mockImplementationOnce(() => true);

    new WorldEngineClientGrpcService();

    expect(createSsl).toHaveBeenCalledTimes(1);
    expect(createInsecure).toHaveBeenCalledTimes(0);
    expect(getSSL).toHaveBeenCalledTimes(1);
  });
});

describe('generateSessionToken', () => {
  test('should generate token', async () => {
    const generateSessionToken = jest
      .spyOn(WorldEngineClient.prototype, 'generateToken')
      .mockImplementationOnce((_request, _metadata, _options, callback) => {
        const cb = typeof _options === 'function' ? _options : callback;
        cb(null, sessionProto);
        return {} as SurfaceCall;
      });

    const service = new WorldEngineClientGrpcService();
    const result = await service.generateSessionToken(
      {
        key: KEY,
        secret: SECRET,
      },
      SCENE,
    );

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(result).toEqual(sessionProto);
  });
});

describe('load scene', () => {
  const loggerDebug = jest.spyOn(Logger.prototype, 'debug');

  let client: WorldEngineClientGrpcService<ExtendedInworldPacket>;

  beforeEach(() => {
    jest.clearAllMocks();
    client = new WorldEngineClientGrpcService();
  });

  test('should use provided capabilities', async () => {
    const stream = getStream();
    const openSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    const write = jest.spyOn(ClientDuplexStreamImpl.prototype, 'write');

    const capabilities = new CapabilitiesConfiguration().setEmotions(true);
    const result = await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    expect(openSession).toHaveBeenCalledTimes(1);
    expect(result[0][0]).toEqual(stream);
    expect(result[0][1].characters).toEqual(characters);
    expect(write).toHaveBeenCalledTimes(5);
    expect(
      write.mock.calls[0][0].getSessionControl().getCapabilitiesConfiguration(),
    ).toEqual(capabilities);
    expect(
      write.mock.calls[1][0]
        .getSessionControl()
        .getSessionConfiguration()
        .getGameSessionId(),
    ).toEqual(sessionToken.sessionId);
    expect(
      write.mock.calls[2][0]
        .getSessionControl()
        .getClientConfiguration()
        .getId(),
    ).toEqual(CLIENT_ID);
    expect(loggerDebug).toHaveBeenCalledTimes(1);
  });

  test('should use provided custom client id', async () => {
    const stream = getStream();
    const osType = 'Darwin';
    const osRelease = '23.1.0';
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    const write = jest.spyOn(ClientDuplexStreamImpl.prototype, 'write');
    jest.spyOn(os, 'type').mockImplementationOnce(() => osType);
    jest.spyOn(os, 'release').mockImplementationOnce(() => osRelease);

    const sceneClient = new ClientRequest().setId('client-id');
    const capabilities = new CapabilitiesConfiguration().setEmotions(true);
    await Promise.all([
      client.openSession({
        name: SCENE,
        client: sceneClient,
        capabilities,
        sessionToken,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    const actualClient = write.mock.calls[2][0]
      .getSessionControl()
      .getClientConfiguration();

    expect(actualClient.getId()).toEqual(CLIENT_ID);
    expect(actualClient.getVersion()).toEqual(version);
    expect(actualClient.getDescription()).toEqual(
      `${CLIENT_ID}; ${version}; ${osType} ${osRelease} (Node.js ${
        process.version
      }); ${sceneClient.getId()}`,
    );
  });

  test("should not send client id if it's not provided", async () => {
    const stream = getStream();
    const osType = 'Darwin';
    const osRelease = '23.1.0';
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    const write = jest.spyOn(ClientDuplexStreamImpl.prototype, 'write');
    jest.spyOn(os, 'type').mockImplementationOnce(() => osType);
    jest.spyOn(os, 'release').mockImplementationOnce(() => osRelease);

    const sceneClient = new ClientRequest();
    const capabilities = new CapabilitiesConfiguration().setEmotions(true);

    await Promise.all([
      client.openSession({
        name: SCENE,
        client: sceneClient,
        capabilities,
        sessionToken,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    const actualClient = write.mock.calls[2][0]
      .getSessionControl()
      .getClientConfiguration();

    expect(actualClient.getId()).toEqual(CLIENT_ID);
    expect(actualClient.getVersion()).toEqual(version);
    expect(actualClient.getDescription()).toEqual(
      `${CLIENT_ID}; ${version}; ${osType} ${osRelease} (Node.js ${process.version})`,
    );
  });

  test('should send previous dialog', async () => {
    const stream = getStream();
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    const write = jest.spyOn(ClientDuplexStreamImpl.prototype, 'write');

    const capabilities = new CapabilitiesConfiguration().setEmotions(true);

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        sessionContinuation: new SessionContinuation({
          previousDialog: phrases,
        }),
        user,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    const continuation = write.mock.calls[4][0]
      .getSessionControl()
      .getContinuation();
    expect(write).toHaveBeenCalledTimes(6);
    expect(continuation.getContinuationType()).toEqual(
      Continuation.ContinuationType.CONTINUATION_TYPE_DIALOG_HISTORY,
    );
    expect(PreviousDialog.fromProto(continuation.getDialogHistory())).toEqual(
      previousDialog,
    );
  });

  test('should use provided provided user name', async () => {
    const stream = getStream();
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    const write = jest.spyOn(ClientDuplexStreamImpl.prototype, 'write');

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        user: { fullName: user.fullName },
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    expect(
      write.mock.calls[3][0]
        .getSessionControl()
        .getUserConfiguration()
        .getName(),
    ).toEqual(user.fullName);
  });

  test('should use provided provided user profile', async () => {
    const stream = getStream();
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    const write = jest.spyOn(ClientDuplexStreamImpl.prototype, 'write');

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        user: { profile: user.profile },
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    const profileFields = write.mock.calls[3][0]
      .getSessionControl()
      .getUserConfiguration()
      .getUserSettings()
      .getPlayerProfile()
      .getFieldsList();

    expect(profileFields[0].getFieldId()).toEqual(user.profile?.fields[0].id);
    expect(profileFields[0].getFieldValue()).toEqual(
      user.profile?.fields[0].value,
    );
  });

  test('should send previous session state', async () => {
    const stream = getStream();
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    const write = jest.spyOn(ClientDuplexStreamImpl.prototype, 'write');
    const sessionContinuation = new SessionContinuation({
      previousState,
    });

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        sessionContinuation,
        user,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    const state = write.mock.calls[4][0]
      .getSessionControl()
      .getContinuation()
      .getExternallySavedState();

    expect(state).toEqual(sessionContinuation.previousState);
  });

  test('should call extention functions', async () => {
    const stream = getStream();
    const openSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    const write = jest.spyOn(ClientDuplexStreamImpl.prototype, 'write');

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        extension,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    expect(openSession).toHaveBeenCalledTimes(1);
    expect(write).toHaveBeenCalledTimes(5);
    expect(
      write.mock.calls[0][0].getSessionControl().getCapabilitiesConfiguration(),
    ).toEqual(extendedCapabilities);
    expect(extension.beforeLoadScene).toHaveBeenCalledTimes(1);
    expect(extension.afterLoadScene).toHaveBeenCalledTimes(1);
  });

  test('should throw error on unexpected event during scene loading', async () => {
    const stream = getStream();
    const openSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);
    let errorReceived: ServiceError;

    const capabilities = new CapabilitiesConfiguration().setEmotions(true);

    try {
      await Promise.all([
        client.openSession({
          name: SCENE,
          capabilities,
          sessionToken,
        }),
        new Promise((resolve: any) => {
          stream.emit('data', new ProtoPacket());
          resolve(true);
        }),
      ]);
    } catch (err) {
      errorReceived = err;
    }
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(errorReceived!).toEqual(
      new Error('Unexpected packet received during scene loading'),
    );
  });

  test('should propagate error on second load scene event', async () => {
    const stream = getStream();
    const openSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);

    const onError = jest.fn();
    const capabilities = new CapabilitiesConfiguration().setEmotions(true);

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        onError,
      }),
      new Promise((resolve: any) => {
        stream.emit(
          'data',
          generateEmptyPacket().setSessionControlResponse(
            sessionControlResponseEvent,
          ),
        );
        stream.emit(
          'data',
          generateEmptyPacket().setSessionControlResponse(
            sessionControlResponseEvent,
          ),
        );
        resolve(true);
      }),
    ]);

    expect(openSession).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0]).toEqual(
      new Error('Unexpected packet received during scene loading'),
    );
  });

  test('should do nothing on second load scene event if not onError is not provided', async () => {
    const stream = getStream();
    const openSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);

    const capabilities = new CapabilitiesConfiguration().setEmotions(true);

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
      }),
      new Promise((resolve: any) => {
        stream.emit(
          'data',
          generateEmptyPacket().setSessionControlResponse(
            sessionControlResponseEvent,
          ),
        );
        stream.emit(
          'data',
          generateEmptyPacket().setSessionControlResponse(
            sessionControlResponseEvent,
          ),
        );
        resolve(true);
      }),
    ]);

    expect(openSession).toHaveBeenCalledTimes(1);
  });
});

describe('session', () => {
  let client: WorldEngineClientGrpcService<ExtendedInworldPacket>;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    client = new WorldEngineClientGrpcService();
  });

  test('should create stream with handlers', async () => {
    const stream = getStream();
    const clientSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);

    const on = jest.spyOn(stream, 'on');
    const onError = jest.fn();
    const onMessage = jest.fn();
    const onDisconnect = jest.fn();

    const result = await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        onError,
        onMessage,
        onDisconnect,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    expect(clientSession).toHaveBeenCalledTimes(1);
    expect(on).toHaveBeenCalledTimes(3);
    expect(result[0][0]).toEqual(stream);
    expect(on.mock.calls[0][0]).toEqual('close');
    expect(on.mock.calls[1][0]).toEqual('error');
    expect(on.mock.calls[2][0]).toEqual('data');
  });

  test('should close connection on error and handle on Error', async () => {
    const stream = getStream();

    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);

    const onError = jest.fn();
    const end = jest.spyOn(stream, 'end');

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        onError,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);
    stream.emit('error');

    expect(onError).toHaveBeenCalledTimes(1);
    expect(end).toHaveBeenCalledTimes(1);
  });

  test('should handle on Message', async () => {
    const stream = getStream();
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);

    const onMessage = jest.fn();

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        onMessage,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    stream.emit('data');

    expect(onMessage).toHaveBeenCalledTimes(1);
  });

  test('should do nothing if onMessage is not provided', async () => {
    const stream = getStream();
    const openSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    stream.emit('data');

    expect(openSession).toHaveBeenCalledTimes(1);
  });

  test('should handle on Disconnect', async () => {
    const stream = getStream();
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementation(() => stream);

    const onDisconnect = jest.fn();

    await Promise.all([
      client.openSession({
        name: SCENE,
        capabilities,
        sessionToken,
        onDisconnect,
      }),
      new Promise(emitSessionControlResponseEvent(stream)),
    ]);

    stream.emit('close');

    expect(onDisconnect).toHaveBeenCalledTimes(1);
  });
});
