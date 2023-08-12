import { credentials } from '@grpc/grpc-js';
import { SurfaceCall } from '@grpc/grpc-js/build/src/call';
import { StateSerializationClient } from '@proto/state_serialization_grpc_pb';
import { SessionState } from '@proto/state_serialization_pb';
import { v4 } from 'uuid';

import { Config } from '../../../src/common/config';
import { StateSerializationClientGrpcService } from '../../../src/services/gprc/state_serialization_grpc.service';
import { SCENE, sessionToken } from '../../helpers';

describe('credentials', () => {
  const createSSL = jest.spyOn(credentials, 'createSsl');
  const createInsecure = jest.spyOn(credentials, 'createInsecure');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should use insecure credentials', () => {
    const getSSL = jest
      .spyOn(Config.prototype, 'getSSL')
      .mockImplementationOnce(() => false);

    new StateSerializationClientGrpcService();

    expect(createSSL).toHaveBeenCalledTimes(0);
    expect(createInsecure).toHaveBeenCalledTimes(1);
    expect(getSSL).toHaveBeenCalledTimes(1);
  });

  test('should use secure credentials', () => {
    const getSSL = jest
      .spyOn(Config.prototype, 'getSSL')
      .mockImplementationOnce(() => true);

    new StateSerializationClientGrpcService();

    expect(createSSL).toHaveBeenCalledTimes(1);
    expect(createInsecure).toHaveBeenCalledTimes(0);
    expect(getSSL).toHaveBeenCalledTimes(1);
  });
});

describe('getSessionState', () => {
  test('should return session state', async () => {
    const state = new SessionState().setState(v4());
    const generateSessionToken = jest
      .spyOn(StateSerializationClient.prototype, 'getSessionState')
      .mockImplementationOnce((_request, _metadata, _options, callback) => {
        const cb = typeof _options === 'function' ? _options : callback;
        cb(null, state);
        return {} as SurfaceCall;
      });

    const service = new StateSerializationClientGrpcService();
    const result = await service.getSessionState({
      scene: SCENE,
      sessionToken,
    });

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(result).toEqual(state);
  });
});
