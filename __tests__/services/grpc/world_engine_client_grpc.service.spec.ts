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
import { v4 } from 'uuid';

import { Config } from '../../../src/common/config';
import { CLIENT_ID } from '../../../src/common/constants';
import { WorldEngineClientGrpcService } from '../../../src/services/gprc/world_engine_client_grpc.service';
import {
  createAgent,
  extension,
  sessionContinuation,
  sessionToken,
  user,
} from '../../helpers';
const SCENE = v4();

const agents = [createAgent(), createAgent()];

describe('credentials', () => {
  const createSsl = jest.spyOn(credentials, 'createSsl');
  const createInsecure = jest.spyOn(credentials, 'createInsecure');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should use insecure credentials', () => {
    const generateSessionToken = jest
      .spyOn(Config.prototype, 'getEngineSsl')
      .mockImplementationOnce(() => false);

    new WorldEngineClientGrpcService();

    expect(createSsl).toHaveBeenCalledTimes(0);
    expect(createInsecure).toHaveBeenCalledTimes(1);
    expect(generateSessionToken).toHaveBeenCalledTimes(1);
  });

  test('should use secure credentials', () => {
    const generateSessionToken = jest
      .spyOn(Config.prototype, 'getEngineSsl')
      .mockImplementationOnce(() => true);

    new WorldEngineClientGrpcService();

    expect(createSsl).toHaveBeenCalledTimes(1);
    expect(createInsecure).toHaveBeenCalledTimes(0);
    expect(generateSessionToken).toHaveBeenCalledTimes(1);
  });
});

describe('load scene', () => {
  const mockLoadScene = jest.fn((_request, _metadata, _options, callback) => {
    const cb = typeof _options === 'function' ? _options : callback;
    cb(null, {
      getAgentsList: () => agents,
    } as LoadSceneResponse);
    return {} as SurfaceCall;
  });

  let client: WorldEngineClientGrpcService;

  beforeEach(() => {
    jest.clearAllMocks();
    client = new WorldEngineClientGrpcService();
  });

  test('should use provided capabilities', async () => {
    const loadScene = jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    const capabilities = new CapabilitiesRequest()
      .setAnimations(true)
      .setEmotions(true);

    const result = await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
      user,
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
    expect(callCapabilities.getAnimations()).toEqual(true);
    expect(loadScene.mock.calls[0][0].getClient().getId()).toEqual(CLIENT_ID);
  });

  test('should use provided custom client id', async () => {
    jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    const sceneClient = new ClientRequest().setId('client-id');
    const capabilities = new CapabilitiesRequest()
      .setAnimations(true)
      .setEmotions(true);

    await client.loadScene({
      name: SCENE,
      client: sceneClient,
      capabilities,
      sessionToken,
      user,
    });

    expect(mockLoadScene.mock.calls[0][0].getClient()).toEqual(sceneClient);
  });

  test('should use provided additional props', async () => {
    jest
      .spyOn(WorldEngineClient.prototype, 'loadScene')
      .mockImplementationOnce(mockLoadScene);

    const capabilities = new CapabilitiesRequest()
      .setAnimations(true)
      .setEmotions(true);

    await client.loadScene({
      name: SCENE,
      capabilities,
      sessionToken,
      setLoadSceneProps: extension.setLoadSceneProps,
    });

    expect(mockLoadScene.mock.calls[0][0].getSessionContinuation()).toEqual(
      sessionContinuation,
    );
  });
});

describe('session', () => {
  let client: WorldEngineClientGrpcService;

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
