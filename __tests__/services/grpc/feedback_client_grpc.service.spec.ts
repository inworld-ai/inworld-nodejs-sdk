import { credentials } from '@grpc/grpc-js';
import { SurfaceCall } from '@grpc/grpc-js/build/src/call';
import { FeedbackClient } from '@proto/feedback_grpc_pb';
import {
  InteractionDislikeType,
  InteractionFeedback,
} from '@proto/feedback_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import { v4 } from 'uuid';

import { Config } from '../../../src/common/config';
import { FeedbackClientGrpcService } from '../../../src/services/gprc/feedback_client_grpc.service';
import { sessionToken } from '../../helpers';

describe('credentials', () => {
  const createSSL = jest.spyOn(credentials, 'createSsl');
  const createInsecure = jest.spyOn(credentials, 'createInsecure');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should use insecure credentials', () => {
    const getSSL = jest
      .spyOn(Config.prototype, 'getSsl')
      .mockImplementationOnce(() => false);

    new FeedbackClientGrpcService();

    expect(createSSL).toHaveBeenCalledTimes(0);
    expect(createInsecure).toHaveBeenCalledTimes(1);
    expect(getSSL).toHaveBeenCalledTimes(1);
  });

  test('should use secure credentials', () => {
    const getSSL = jest
      .spyOn(Config.prototype, 'getSsl')
      .mockImplementationOnce(() => true);

    new FeedbackClientGrpcService();

    expect(createSSL).toHaveBeenCalledTimes(1);
    expect(createInsecure).toHaveBeenCalledTimes(0);
    expect(getSSL).toHaveBeenCalledTimes(1);
  });
});

describe('createInteractionFeedback', () => {
  test('should run without errors', async () => {
    const interactionId = v4();
    const characterId = v4();
    const comment = v4();
    const interactionFeedback = new InteractionFeedback()
      .setIsLike(true)
      .setTypeList([
        InteractionDislikeType.INTERACTION_DISLIKE_TYPE_IRRELEVANT,
        InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNSAFE,
      ])
      .setComment(comment);
    const expectedResult = new google_protobuf_empty_pb.Empty();
    const createInteractionFeedback = jest
      .spyOn(FeedbackClient.prototype, 'createInteractionFeedback')
      .mockImplementationOnce((_request, _metadata, _options, callback) => {
        const cb = typeof _options === 'function' ? _options : callback;
        cb(null, expectedResult);
        return {} as SurfaceCall;
      });

    const service = new FeedbackClientGrpcService();
    const result = await service.createInteractionFeedback({
      interactionId,
      sessionToken,
      characterId,
      interactionFeedback,
    });

    expect(createInteractionFeedback).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expectedResult);
  });
});
