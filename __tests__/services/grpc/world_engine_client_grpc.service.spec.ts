import { credentials } from '@grpc/grpc-js';
import {
  ClientDuplexStreamImpl,
  SurfaceCall,
} from '@grpc/grpc-js/build/src/call';
import { WorldEngineClient } from '@proto/world-engine_grpc_pb';
import {
  CapabilitiesRequest,
  ClientRequest,
  LoadSceneResponse,
} from '@proto/world-engine_pb';
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
  createAgent,
  extendedCapabilities,
  extension,
  KEY,
  phrases,
  previousDialog,
  previousState,
  SCENE,
  SECRET,
  sessionContinuation,
  sessionProto,
  sessionToken,
  user,
} from '../../helpers';

const { version } = require('@root/package.json');

const agents = [createAgent(), createAgent()];

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
  const mockLoadScene = jest.fn((_request, _metadata, _options, callback) => {
    const cb = typeof _options === 'function' ? _options : callback;
    cb(null, {
      getAgentsList: () => agents,
      toObject: () => {},
    } as LoadSceneResponse);
    return {} as SurfaceCall;
  });

  let client: WorldEngineClientGrpcService<ExtendedInworldPacket>;

  beforeEach(() => {
    jest.clearAllMocks();
    client = new WorldEngineClientGrpcService();
  });

  test('should use provided capabilities', async () => {
    const loadScene = jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    const capabilities = new CapabilitiesRequest().setEmotions(true);

    const result = await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
    });

    const loadedAgents = result.getAgentsList();
    const callCapabilities = loadScene.mock.calls[0][0].getCapabilities();

    expect(loadScene).toHaveBeenCalledTimes(1);
    expect(loadedAgents).toEqual(agents);
    expect(loadedAgents.length).toEqual(agents.length);
    expect(loadedAgents[0].getAgentId()).toEqual(agents[0].getAgentId());
    expect(loadedAgents[1].getAgentId()).toEqual(agents[1].getAgentId());
    expect(callCapabilities.getAudio()).toEqual(false);
    expect(callCapabilities.getText()).toEqual(false);
    expect(callCapabilities.getEmotions()).toEqual(true);
    expect(loadScene.mock.calls[0][0].getClient().getId()).toEqual(CLIENT_ID);
    expect(loggerDebug).toHaveBeenCalledTimes(1);
  });

  test('should use provided custom client id', async () => {
    const osType = 'Darwin';
    const osRelease = '23.1.0';
    jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    jest.spyOn(os, 'type').mockImplementationOnce(() => osType);
    jest.spyOn(os, 'release').mockImplementationOnce(() => osRelease);

    const sceneClient = new ClientRequest().setId('client-id');
    const capabilities = new CapabilitiesRequest().setEmotions(true);

    await client.loadScene({
      name: SCENE,
      client: sceneClient,
      capabilities,
      sessionToken,
      user,
    });

    const actualClient = mockLoadScene.mock.calls[0][0].getClient();

    expect(actualClient.getId()).toEqual(CLIENT_ID);
    expect(actualClient.getVersion()).toEqual(version);
    expect(actualClient.getDescription()).toEqual(
      `${CLIENT_ID}; ${version}; ${osType} ${osRelease} (Node.js ${
        process.version
      }); ${sceneClient.getId()}`,
    );
  });

  test("should not send client id if it's not provided", async () => {
    const osType = 'Darwin';
    const osRelease = '23.1.0';
    jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    jest.spyOn(os, 'type').mockImplementationOnce(() => osType);
    jest.spyOn(os, 'release').mockImplementationOnce(() => osRelease);

    const sceneClient = new ClientRequest();
    const capabilities = new CapabilitiesRequest().setEmotions(true);

    await client.loadScene({
      name: SCENE,
      client: sceneClient,
      capabilities,
      sessionToken,
      user,
    });

    const actualClient = mockLoadScene.mock.calls[0][0].getClient();

    expect(actualClient.getId()).toEqual(CLIENT_ID);
    expect(actualClient.getVersion()).toEqual(version);
    expect(actualClient.getDescription()).toEqual(
      `${CLIENT_ID}; ${version}; ${osType} ${osRelease} (Node.js ${process.version})`,
    );
  });

  test('should use provided additional props', async () => {
    jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    const capabilities = new CapabilitiesRequest().setEmotions(true);

    await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
      extension,
    });

    expect(mockLoadScene.mock.calls[0][0].getSessionContinuation()).toEqual(
      sessionContinuation,
    );
  });

  test('should send previous dialog', async () => {
    jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    const capabilities = new CapabilitiesRequest().setEmotions(true);

    await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
      sessionContinuation: new SessionContinuation({ previousDialog: phrases }),
      user,
    });

    const sentDialog = mockLoadScene.mock.calls[0][0]
      .getSessionContinuation()
      .getPreviousDialog();

    expect(PreviousDialog.fromProto(sentDialog)).toEqual(previousDialog);
  });

  test('should use provided provided user name', async () => {
    const loadScene = jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
      user: { fullName: user.fullName },
    });

    expect(loadScene).toHaveBeenCalledTimes(1);
    expect(loadScene.mock.calls[0][0].getUser().getName()).toEqual(
      user.fullName,
    );
  });

  test('should use provided provided user profile', async () => {
    const loadScene = jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
      user: { profile: user.profile },
    });

    const profileFields = loadScene.mock.calls[0][0]
      .getUserSettings()
      .getPlayerProfile()
      .getFieldsList();

    expect(loadScene).toHaveBeenCalledTimes(1);
    expect(profileFields[0].getFieldId()).toEqual(user.profile.fields[0].id);
    expect(profileFields[0].getFieldValue()).toEqual(
      user.profile.fields[0].value,
    );
  });

  test('should send previous session state', async () => {
    jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    const sessionContinuation = new SessionContinuation({
      previousState,
    });

    await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
      sessionContinuation,
      user,
    });

    const state = mockLoadScene.mock.calls[0][0]
      .getSessionContinuation()
      .getPreviousState();

    expect(state).toEqual(sessionContinuation.previousState);
  });

  test('should call extention functions', async () => {
    const loadScene = jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
      extension,
    });

    expect(loadScene).toHaveBeenCalledTimes(1);
    expect(loadScene.mock.calls[0][0].getCapabilities()).toEqual(
      extendedCapabilities,
    );
    expect(extension.beforeLoadScene).toHaveBeenCalledTimes(1);
    expect(extension.afterLoadScene).toHaveBeenCalledTimes(1);
  });
});

describe('session', () => {
  let client: WorldEngineClientGrpcService<ExtendedInworldPacket>;

  beforeEach(() => {
    jest.clearAllMocks();
    client = new WorldEngineClientGrpcService();
  });

  test('should create stream with handlers', () => {
    const stream = new ClientDuplexStreamImpl(jest.fn(), jest.fn());
    const clientSession = jest
      .spyOn(WorldEngineClient.prototype, 'session')
      .mockImplementation(() => stream);
    const on = jest.spyOn(stream, 'on');
    const onError = jest.fn();
    const onMessage = jest.fn();
    const onDisconnect = jest.fn();

    const connection = client.session({
      sessionToken,
      onError,
      onMessage,
      onDisconnect,
    });

    expect(clientSession).toHaveBeenCalledTimes(1);
    expect(on).toHaveBeenCalledTimes(3);
    expect(connection).toEqual(stream);
    expect(on.mock.calls[0][0]).toEqual('data');
    expect(on.mock.calls[1][0]).toEqual('close');
    expect(on.mock.calls[2][0]).toEqual('error');
  });

  test('should close connection on error and handle on Error', () => {
    const stream = new ClientDuplexStreamImpl(jest.fn(), jest.fn());
    const onError = jest.fn();
    const end = jest.spyOn(stream, 'end');
    jest
      .spyOn(WorldEngineClient.prototype, 'session')
      .mockImplementation(() => stream);

    client.session({
      sessionToken,
      onError,
    });

    stream.emit('error');

    expect(onError).toHaveBeenCalledTimes(1);
    expect(end).toHaveBeenCalledTimes(1);
  });

  test('should handle on Message', () => {
    const stream = new ClientDuplexStreamImpl(jest.fn(), jest.fn());
    const onMessage = jest.fn();
    jest
      .spyOn(WorldEngineClient.prototype, 'session')
      .mockImplementation(() => stream);

    client.session({
      sessionToken,
      onMessage,
    });

    stream.emit('data');

    expect(onMessage).toHaveBeenCalledTimes(1);
  });

  test('should handle on Disconnect', () => {
    const stream = new ClientDuplexStreamImpl(jest.fn(), jest.fn());
    const onDisconnect = jest.fn();
    jest
      .spyOn(WorldEngineClient.prototype, 'session')
      .mockImplementation(() => stream);

    client.session({
      sessionToken,
      onDisconnect,
    });

    stream.emit('close');

    expect(onDisconnect).toHaveBeenCalledTimes(1);
  });
});
