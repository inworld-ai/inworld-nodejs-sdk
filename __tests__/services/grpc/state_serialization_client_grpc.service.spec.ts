import { credentials } from '@grpc/grpc-js';
import { SurfaceCall } from '@grpc/grpc-js/build/src/call';
import { StateSerializationClient } from '@proto/ai/inworld/engine/v1/state_serialization_grpc_pb';
import { SessionState } from '@proto/ai/inworld/engine/v1/state_serialization_pb';
import { v4 } from 'uuid';

import { Config } from '../../../src/common/config';
import { protoTimestamp } from '../../../src/common/helpers';
import { StateSerializationClientGrpcService } from '../../../src/services/gprc/state_serialization_client_grpc.service';
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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return full session state', async () => {
    const interactionId = v4();
    const sessionState = new SessionState()
      .setState(v4())
      .setCreationTime(protoTimestamp())
      .setVersion(new SessionState.Version().setInteractionId(interactionId));
    const generateSessionToken = jest
      .spyOn(StateSerializationClient.prototype, 'getSessionState')
      .mockImplementationOnce((_request, _metadata, _options, callback) => {
        const cb = typeof _options === 'function' ? _options : callback;
        cb(null, sessionState);
        return {} as SurfaceCall;
      });

    const service = new StateSerializationClientGrpcService();
    const result = await service.getSessionState({
      scene: SCENE,
      sessionToken,
    });

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(result.state).toEqual(sessionState.getState_asB64());
    expect(result.stateU8).toEqual(sessionState.getState_asU8());
    expect(result.creationTime).toEqual(
      sessionState.getCreationTime().toDate().toISOString(),
    );
    expect(result.version?.interactionId).toEqual(interactionId);
  });

  test('should return session with state only', async () => {
    const sessionState = new SessionState().setState(v4());
    const generateSessionToken = jest
      .spyOn(StateSerializationClient.prototype, 'getSessionState')
      .mockImplementationOnce((_request, _metadata, _options, callback) => {
        const cb = typeof _options === 'function' ? _options : callback;
        cb(null, sessionState);
        return {} as SurfaceCall;
      });

    const service = new StateSerializationClientGrpcService();
    const result = await service.getSessionState({
      scene: SCENE,
      sessionToken,
    });

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(result.state).toEqual(sessionState.getState_asB64());
    expect(result.stateU8).toEqual(sessionState.getState_asU8());
    expect(result.creationTime).toBeUndefined();
    expect(result.version).toBeUndefined();
  });
});
