import { credentials } from '@grpc/grpc-js';
import { SurfaceCall } from '@grpc/grpc-js/build/src/call';
import { TokensClient } from '@proto/ai/inworld/studio/v1alpha/tokens_grpc_pb';

import { Config } from '../../../src/common/config';
import { Logger } from '../../../src/common/logger';
import { TokenClientGrpcService } from '../../../src/services/gprc/token_client_grpc.service';
import { KEY, SECRET, sessionProto } from '../../helpers';

describe('credentials', () => {
  const createSsl = jest.spyOn(credentials, 'createSsl');
  const createInsecure = jest.spyOn(credentials, 'createInsecure');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should use insecure credentials', () => {
    const generateSessionToken = jest
      .spyOn(Config.prototype, 'getStudioSsl')
      .mockImplementationOnce(() => false);

    new TokenClientGrpcService();

    expect(createSsl).toHaveBeenCalledTimes(0);
    expect(createInsecure).toHaveBeenCalledTimes(1);
    expect(generateSessionToken).toHaveBeenCalledTimes(1);
  });

  test('should use secure credentials', () => {
    const generateSessionToken = jest
      .spyOn(Config.prototype, 'getStudioSsl')
      .mockImplementationOnce(() => true);

    new TokenClientGrpcService();

    expect(createSsl).toHaveBeenCalledTimes(1);
    expect(createInsecure).toHaveBeenCalledTimes(0);
    expect(generateSessionToken).toHaveBeenCalledTimes(1);
  });
});

test('should generate token', async () => {
  const loggerDebug = jest.spyOn(Logger.prototype, 'debug');
  const generateSessionToken = jest
    .spyOn(TokensClient.prototype, 'generateSessionToken')
    .mockImplementationOnce((_request, _metadata, _options, callback) => {
      const cb = typeof _options === 'function' ? _options : callback;
      cb(null, sessionProto);
      return {} as SurfaceCall;
    });

  const service = new TokenClientGrpcService();
  const result = await service.generateSessionToken({
    key: KEY,
    secret: SECRET,
  });

  expect(generateSessionToken).toHaveBeenCalledTimes(1);
  expect(result).toEqual(sessionProto);
  expect(loggerDebug).toHaveBeenCalledTimes(1);
});
