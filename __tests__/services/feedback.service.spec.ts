import {
  InteractionDislikeType,
  InteractionFeedback,
} from '@proto/ai/inworld/engine/v1/feedback_pb';
import { v4 } from 'uuid';

import { DislikeType, Feedback } from '../../src/entities/feedback.entity';
import { ConnectionService } from '../../src/services/connection.service';
import { FeedbackService } from '../../src/services/feedback.service';
import { FeedbackClientGrpcService } from '../../src/services/gprc/feedback_client_grpc.service';
import { createCharacter, KEY, SCENE, SECRET, sessionToken } from '../helpers';

describe('should create interaction feedback', () => {
  const interactionId = v4();
  const correlationId = v4();
  const comment = v4();
  const types = [
    DislikeType.IRRELEVANT,
    DislikeType.UNSAFE,
    DislikeType.UNTRUE,
    DislikeType.INCORRECT_USE_KNOWLEDGE,
    DislikeType.UNEXPECTED_ACTION,
    DislikeType.UNEXPECTED_GOAL_BEHAVIOR,
    DislikeType.REPETITION,
    DislikeType.UNSPECIFIED,
  ];
  const protoTypes = [
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_IRRELEVANT,
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNSAFE,
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNTRUE,
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_INCORRECT_USE_KNOWLEDGE,
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNEXPECTED_ACTION,
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNEXPECTED_GOAL_BEHAVIOR,
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_REPETITION,
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNSPECIFIED,
  ];
  const connection = new ConnectionService({
    apiKey: { key: KEY, secret: SECRET },
    name: SCENE,
    onError: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('like', async () => {
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const interactionFeedback = new InteractionFeedback().setIsLike(true);

    const createInteractionFeedback = jest
      .spyOn(FeedbackClientGrpcService.prototype, 'createInteractionFeedback')
      .mockImplementationOnce(() => Promise.resolve(new Feedback()));

    await new FeedbackService(connection).like({
      interactionId,
      correlationId,
    });

    expect(createInteractionFeedback).toHaveBeenCalledTimes(1);
    expect(createInteractionFeedback).toHaveBeenCalledWith({
      scene: SCENE,
      sessionToken,
      correlationId,
      interactionId,
      interactionFeedback,
    });
  });

  test('dislike', async () => {
    const character = createCharacter();

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(connection, 'getCurrentCharacter')
      .mockImplementationOnce(() => Promise.resolve(character));
    const interactionFeedback = new InteractionFeedback()
      .setIsLike(false)
      .setComment(comment)
      .setTypeList(protoTypes);

    const createInteractionFeedback = jest
      .spyOn(FeedbackClientGrpcService.prototype, 'createInteractionFeedback')
      .mockImplementationOnce(() => Promise.resolve(new Feedback()));

    await new FeedbackService(connection).dislike({
      interactionId,
      correlationId,
      types,
      comment,
    });

    expect(createInteractionFeedback).toHaveBeenCalledTimes(1);
    expect(createInteractionFeedback).toHaveBeenCalledWith({
      scene: SCENE,
      correlationId,
      sessionToken,
      interactionId,
      interactionFeedback,
    });
  });

  test('delete', async () => {
    const name = v4();
    const deleteInteractionFeedback = jest
      .spyOn(FeedbackClientGrpcService.prototype, 'deleteInteractionFeedback')
      .mockImplementationOnce(() => Promise.resolve());

    await new FeedbackService(connection).undo(name);

    expect(deleteInteractionFeedback).toHaveBeenCalledTimes(1);
    expect(deleteInteractionFeedback).toHaveBeenCalledWith({
      name,
      sessionToken,
    });
  });
});
