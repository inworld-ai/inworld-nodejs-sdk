import { InworldClient } from '../../src/clients/inworld.client';
import { TokenClientGrpcService } from '../../src/services/gprc/token_client_grpc.service';
import {
  capabilitiesProps,
  KEY,
  SCENE,
  SECRET,
  session,
  sessionProto,
  user,
} from '../helpers';

describe('should finish with success', () => {
  let client: InworldClient;
  const onError = jest.fn();
  const onMessage = jest.fn();
  const onDisconnect = jest.fn();
  const generateSessionTokenFn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      .setConfiguration({ capabilities: capabilitiesProps })
      .setUser({ fullName: user.getName() })
      .setClient({ id: 'test-client' })
      .setOnDisconnect(onDisconnect)
      .setOnMessage(onMessage)
      .setOnError(onError)
      .setGenerateSessionToken(generateSessionTokenFn);
  });

  test('should generate session token', async () => {
    const generateSessionToken = jest
      .spyOn(TokenClientGrpcService.prototype, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionProto));

    const result = await client.generateSessionToken();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(result).toEqual(session);
  });

  test('should build', async () => {
    expect(() => client.build()).not.toThrow();
  });

  test('should now throw error is only emotion capability is set explicitly', async () => {
    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      // audio is enabled by default
      .setConfiguration({ capabilities: { emotions: true } });
    expect(() => client.build()).not.toThrow();
  });
});

describe('should throw error', () => {
  test('on empty API Key', async () => {
    const client = new InworldClient().setScene(SCENE);

    expect(() => client.build()).toThrow('Api key is required');
  });

  test('on empty key part of API Key', async () => {
    const client = new InworldClient()
      .setApiKey({ key: '', secret: SECRET })
      .setScene(SCENE);

    await expect(() => client.build()).toThrow('Api key is required');
  });

  test('on empty secret part of API Key', async () => {
    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: '' })
      .setScene(SCENE);

    await expect(() => client.build()).toThrow('Api key is required');
  });

  test('on empty character', async () => {
    const client = new InworldClient()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene('');

    await expect(() => client.build()).toThrow('Scene name is required');
  });
});
