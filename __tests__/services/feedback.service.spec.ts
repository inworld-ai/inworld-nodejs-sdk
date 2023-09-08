import {
  InteractionDislikeType,
  InteractionFeedback,
} from '@proto/feedback_pb';
import { v4 } from 'uuid';

import { ConnectionService } from '../../src/services/connection.service';
import {
  DislikeType,
  FeedbackService,
} from '../../src/services/feedback.service';
import { FeedbackClientGrpcService } from '../../src/services/gprc/feedback_client_grpc.service';
import { createCharacter, KEY, SCENE, SECRET, sessionToken } from '../helpers';

describe('should create interaction feedback', () => {
  const interactionId = v4();
  const characterId = v4();
  const comment = v4();
  const types = [
    DislikeType.IRRELEVANT,
    DislikeType.UNSAFE,
    DislikeType.UNTRUE,
    DislikeType.INCORRECT_USE_KNOWLEDGE,
    DislikeType.UNEXPECTED_ACTION,
    DislikeType.UNEXPECTED_GOAL_BEHAVIOR,
    DislikeType.REPETITION,
    '' as DislikeType,
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
      .mockImplementationOnce(() => Promise.resolve());

    await new FeedbackService(connection).like({
      interactionId,
      characterId,
    });

    expect(createInteractionFeedback).toHaveBeenCalledTimes(1);
    expect(createInteractionFeedback).toHaveBeenCalledWith({
      sessionToken,
      characterId,
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
      .mockImplementationOnce(() => Promise.resolve());

    await new FeedbackService(connection).dislike({
      interactionId,
      types,
      comment,
    });

    expect(createInteractionFeedback).toHaveBeenCalledTimes(1);
    expect(createInteractionFeedback).toHaveBeenCalledWith({
      characterId: character.id,
      sessionToken,
      interactionId,
      interactionFeedback,
    });
  });
});
