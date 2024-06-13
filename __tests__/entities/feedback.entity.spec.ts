import {
  InteractionDislikeType,
  InteractionFeedback,
} from '@proto/ai/inworld/engine/v1/feedback_pb';
import { v4 } from 'uuid';

import { DislikeType, Feedback } from '../../src/entities/feedback.entity';

let name: string;
let isLike: boolean;
let comment: string;
let feedback: Feedback;

beforeEach(() => {
  isLike = true;
  comment = v4();
  name = v4();

  feedback = new Feedback({
    isLike,
    comment,
    types: [DislikeType.INCORRECT_USE_KNOWLEDGE],
    name,
  });
});

test('should get feedback fields with all set data', () => {
  expect(feedback.isLike).toEqual(isLike);
  expect(feedback.comment).toEqual(comment);
  expect(feedback.types).toEqual([DislikeType.INCORRECT_USE_KNOWLEDGE]);
  expect(feedback.name).toEqual(name);
});

test('should get feedback fields without any data', () => {
  const feedback = new Feedback();
  expect(feedback.isLike).toEqual(false);
  expect(feedback.comment).toEqual(undefined);
  expect(feedback.types).toEqual([]);
  expect(feedback.name).toEqual(undefined);
});

test('should convert to proto', () => {
  const proto = feedback.toProto();

  expect(proto.getIsLike()).toEqual(isLike);
  expect(proto.getComment()).toEqual(comment);
  expect(proto.getTypeList()).toEqual([
    InteractionDislikeType.INTERACTION_DISLIKE_TYPE_INCORRECT_USE_KNOWLEDGE,
  ]);
  expect(proto.getName()).toEqual(name);
});

test('should convert from proto', () => {
  const proto = new InteractionFeedback()
    .setIsLike(isLike)
    .setComment(comment)
    .setTypeList([
      InteractionDislikeType.INTERACTION_DISLIKE_TYPE_INCORRECT_USE_KNOWLEDGE,
      InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNSAFE,
      InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNTRUE,
      InteractionDislikeType.INTERACTION_DISLIKE_TYPE_IRRELEVANT,
      InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNEXPECTED_ACTION,
      InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNEXPECTED_GOAL_BEHAVIOR,
      InteractionDislikeType.INTERACTION_DISLIKE_TYPE_REPETITION,
      InteractionDislikeType.INTERACTION_DISLIKE_TYPE_UNSPECIFIED,
    ])
    .setName(name);

  const feedback = Feedback.fromProto(proto);

  expect(feedback.isLike).toEqual(isLike);
  expect(feedback.comment).toEqual(comment);
  expect(feedback.types).toEqual([
    DislikeType.INCORRECT_USE_KNOWLEDGE,
    DislikeType.UNSAFE,
    DislikeType.UNTRUE,
    DislikeType.IRRELEVANT,
    DislikeType.UNEXPECTED_ACTION,
    DislikeType.UNEXPECTED_GOAL_BEHAVIOR,
    DislikeType.REPETITION,
    DislikeType.UNSPECIFIED,
  ]);
  expect(feedback.name).toEqual(name);
});
