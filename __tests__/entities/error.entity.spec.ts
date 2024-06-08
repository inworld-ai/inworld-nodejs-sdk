/* eslint-disable */
import { deserializeGrpcStatusDetails } from '../mocks/grpc-details.mock';
/* eslint-enable */

import { Metadata, ServiceError } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import {
  ErrorType as ProtoErrorType,
  ReconnectionType as ProtoErrorReconnectionType,
  ResourceType as ProtoErrorResourceType,
} from '@proto/ai/inworld/common/status_pb';
import { v4 } from 'uuid';

import {
  ErrorReconnectionType,
  ErrorResourceType,
  ErrorType,
  InworldError,
} from '../../src/entities/error.entity';

const errorTypeTestTable = [
  {
    input: ProtoErrorType.SESSION_TOKEN_EXPIRED,
    expected: ErrorType.SESSION_TOKEN_EXPIRED,
  },
  {
    input: ProtoErrorType.SESSION_TOKEN_INVALID,
    expected: ErrorType.SESSION_TOKEN_INVALID,
  },
  {
    input: ProtoErrorType.SESSION_RESOURCES_EXHAUSTED,
    expected: ErrorType.SESSION_RESOURCES_EXHAUSTED,
  },
  {
    input: ProtoErrorType.BILLING_TOKENS_EXHAUSTED,
    expected: ErrorType.BILLING_TOKENS_EXHAUSTED,
  },
  {
    input: ProtoErrorType.ACCOUNT_DISABLED,
    expected: ErrorType.ACCOUNT_DISABLED,
  },
  {
    input: ProtoErrorType.SESSION_INVALID,
    expected: ErrorType.SESSION_INVALID,
  },
  {
    input: ProtoErrorType.RESOURCE_NOT_FOUND,
    expected: ErrorType.RESOURCE_NOT_FOUND,
  },
  {
    input: ProtoErrorType.SAFETY_VIOLATION,
    expected: ErrorType.SAFETY_VIOLATION,
  },
  {
    input: ProtoErrorType.SESSION_EXPIRED,
    expected: ErrorType.SESSION_EXPIRED,
  },
  {
    input: ProtoErrorType.AUDIO_SESSION_EXPIRED,
    expected: ErrorType.AUDIO_SESSION_EXPIRED,
  },
  {
    input: ProtoErrorType.SESSION_PAUSED,
    expected: ErrorType.SESSION_PAUSED,
  },
  {
    input: '-1',
  },
];

const reconnectTypeTestTable = [
  {
    input: ProtoErrorReconnectionType.UNDEFINED,
    expected: ErrorReconnectionType.UNDEFINED,
  },
  {
    input: ProtoErrorReconnectionType.NO_RETRY,
    expected: ErrorReconnectionType.NO_RETRY,
  },
  {
    input: ProtoErrorReconnectionType.IMMEDIATE,
    expected: ErrorReconnectionType.IMMEDIATE,
  },
  {
    input: ProtoErrorReconnectionType.TIMEOUT,
    expected: ErrorReconnectionType.TIMEOUT,
  },
  {
    input: '-1',
  },
];

const resourceId = v4();
const resourceTypeTestTable = [
  {
    input: {
      resourceType: ProtoErrorResourceType.RESOURCE_TYPE_UNDEFINED,
      resourceId,
    },
    expected: {
      resourceType: ErrorResourceType.RESOURCE_TYPE_UNDEFINED,
      resourceId,
    },
  },
  {
    input: {
      resourceType: ProtoErrorResourceType.RESOURCE_TYPE_CONVERSATION,
      resourceId,
    },
    expected: {
      resourceType: ErrorResourceType.RESOURCE_TYPE_CONVERSATION,
      resourceId,
    },
  },
  {
    input: {
      resourceType: ProtoErrorResourceType.RESOURCE_TYPE_CONVERSATION,
    },
    expected: {
      resourceType: ErrorResourceType.RESOURCE_TYPE_CONVERSATION,
    },
  },
];

beforeEach(() => {
  jest.clearAllMocks();
});

test.each(errorTypeTestTable)(
  'should correctly convert type $expected',
  ({ input, expected }) => {
    const protoErr = {
      message: v4(),
      code: Status.FAILED_PRECONDITION,
      details: JSON.stringify({ errorType: input }),
      metadata: new Metadata(),
    } as unknown as ServiceError;

    const err = InworldError.fromProto(protoErr);

    expect(err.message).toEqual(protoErr.message);
    expect(err.code).toEqual(protoErr.code);
    expect(err.details).toHaveLength(1);
    expect(err.details[0].errorType).toEqual(expected);
    expect(deserializeGrpcStatusDetails).toHaveBeenCalledTimes(1);
  },
);

test.each(reconnectTypeTestTable)(
  'should correctly convert reconnect type $expected',
  ({ input, expected }) => {
    const protoErr = {
      message: v4(),
      code: Status.FAILED_PRECONDITION,
      details: JSON.stringify({
        reconnectType: input,
        ...(input !== ProtoErrorReconnectionType.TIMEOUT && {
          reconnectTime: new Date().toISOString(),
        }),
      }),
      metadata: new Metadata(),
    } as unknown as ServiceError;

    const err = InworldError.fromProto(protoErr);

    expect(err.message).toEqual(protoErr.message);
    expect(err.code).toEqual(protoErr.code);
    expect(err.details).toHaveLength(1);
    expect(err.details[0].reconnectType).toEqual(expected);
    expect(deserializeGrpcStatusDetails).toHaveBeenCalledTimes(1);
  },
);

test.each(resourceTypeTestTable)(
  'should correctly convert resource type $expected',
  ({ input, expected }) => {
    const protoErr = {
      message: v4(),
      code: Status.FAILED_PRECONDITION,
      details: JSON.stringify({
        resourceNotFound: input,
      }),
      metadata: new Metadata(),
    } as unknown as ServiceError;

    const err = InworldError.fromProto(protoErr);

    expect(err.message).toEqual(protoErr.message);
    expect(err.code).toEqual(protoErr.code);
    expect(err.details).toHaveLength(1);
    expect(err.details[0].resourceNotFound).toEqual(expected);
    expect(deserializeGrpcStatusDetails).toHaveBeenCalledTimes(1);
  },
);

it('should ignore undefined details', () => {
  const protoErr = {
    message: v4(),
    code: Status.FAILED_PRECONDITION,
    metadata: new Metadata(),
  } as unknown as ServiceError;

  const err = InworldError.fromProto(protoErr);

  expect(err.message).toEqual(protoErr.message);
  expect(err.code).toEqual(protoErr.code);
  expect(err.details).toBeUndefined();
  expect(deserializeGrpcStatusDetails).toHaveBeenCalledTimes(1);
});

it('should ignore empty details array', () => {
  const protoErr = {
    message: v4(),
    code: Status.FAILED_PRECONDITION,
    metadata: new Metadata(),
  } as unknown as ServiceError;

  const err = InworldError.fromProto(protoErr);

  expect(err.message).toEqual(protoErr.message);
  expect(err.code).toEqual(protoErr.code);
  expect(err.details).toBeUndefined();
  expect(deserializeGrpcStatusDetails).toHaveBeenCalledTimes(1);
});
