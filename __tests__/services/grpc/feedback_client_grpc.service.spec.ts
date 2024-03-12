import { credentials } from '@grpc/grpc-js';
import { SurfaceCall } from '@grpc/grpc-js/build/src/call';
import { FeedbackClient } from '@proto/ai/inworld/engine/v1/feedback_grpc_pb';
import {
  InteractionDislikeType,
  InteractionFeedback,
} from '@proto/ai/inworld/engine/v1/feedback_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import { v4 } from 'uuid';

import { Config } from '../../../src/common/config';
import { SCENE_PATTERN } from '../../../src/common/constants';
import { Feedback } from '../../../src/entities/feedback.entity';
import { FeedbackClientGrpcService } from '../../../src/services/gprc/feedback_client_grpc.service';
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

    new FeedbackClientGrpcService();

    expect(createSSL).toHaveBeenCalledTimes(0);
    expect(createInsecure).toHaveBeenCalledTimes(1);
    expect(getSSL).toHaveBeenCalledTimes(1);
  });

  test('should use secure credentials', () => {
    const getSSL = jest
      .spyOn(Config.prototype, 'getSSL')
      .mockImplementationOnce(() => true);

    new FeedbackClientGrpcService();

    expect(createSSL).toHaveBeenCalledTimes(1);
    expect(createInsecure).toHaveBeenCalledTimes(0);
    expect(getSSL).toHaveBeenCalledTimes(1);
  });
});

describe('createInteractionFeedback', () => {
  let interactionId: string;
  let correlationId: string;
  let comment: string;
  let interactionFeedback: InteractionFeedback;
  let workspace: string;

  beforeEach(() => {
    jest.clearAllMocks();

    interactionId = v4();
    correlationId = v4();
    comment = v4();
    workspace = SCENE_PATTERN.exec(SCENE)[1];

    interactionFeedback = new InteractionFeedback()
      .setIsLike(true)
      .setTypeList([
        InteractionDislikeType.INTERACTION_DISLIKE_TYPE_IRRELEVANT,
        InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNSAFE,
      ])
      .setComment(comment);
  });

  test('should work with correlationId', async () => {
    const expectedResult = new InteractionFeedback();
    const createInteractionFeedback = jest
      .spyOn(FeedbackClient.prototype, 'createInteractionFeedback')
      .mockImplementationOnce((_request, _metadata, _options, callback) => {
        const cb = typeof _options === 'function' ? _options : callback;
        cb(null, expectedResult);
        return {} as SurfaceCall;
      });

    const service = new FeedbackClientGrpcService();
    const result = await service.createInteractionFeedback({
      scene: SCENE,
      interactionId,
      sessionToken,
      correlationId,
      interactionFeedback,
    });

    expect(createInteractionFeedback).toHaveBeenCalledTimes(1);
    expect(
      createInteractionFeedback.mock.calls[0][0].toObject().parent,
    ).toEqual(
      `workspaces/${workspace}/sessions/${sessionToken.sessionId}/interactions/${interactionId}/groups/${correlationId}`,
    );
    expect(result).toEqual(Feedback.fromProto(expectedResult));
  });

  test('should work without correlationId', async () => {
    const expectedResult = new InteractionFeedback();
    const createInteractionFeedback = jest
      .spyOn(FeedbackClient.prototype, 'createInteractionFeedback')
      .mockImplementationOnce((_request, _metadata, _options, callback) => {
        const cb = typeof _options === 'function' ? _options : callback;
        cb(null, expectedResult);
        return {} as SurfaceCall;
      });

    const service = new FeedbackClientGrpcService();
    const result = await service.createInteractionFeedback({
      scene: SCENE,
      interactionId,
      sessionToken,
      interactionFeedback,
    });

    expect(createInteractionFeedback).toHaveBeenCalledTimes(1);
    expect(
      createInteractionFeedback.mock.calls[0][0].toObject().parent,
    ).toEqual(
      `workspaces/${workspace}/sessions/${sessionToken.sessionId}/interactions/${interactionId}/groups/default`,
    );
    expect(result).toEqual(Feedback.fromProto(expectedResult));
  });
});

describe('deleteInteractionFeedback', () => {
  test('should run without errors', async () => {
    const name = v4();
    const expectedResult = new google_protobuf_empty_pb.Empty();
    const deleteInteractionFeedback = jest
      .spyOn(FeedbackClient.prototype, 'deleteInteractionFeedback')
      .mockImplementationOnce((_request, _metadata, _options, callback) => {
        const cb = typeof _options === 'function' ? _options : callback;
        cb(null, expectedResult);
        return {} as SurfaceCall;
      });

    const service = new FeedbackClientGrpcService();
    await service.deleteInteractionFeedback({ name, sessionToken });

    expect(deleteInteractionFeedback).toHaveBeenCalledTimes(1);
  });
});
