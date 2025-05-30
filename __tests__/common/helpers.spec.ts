import { Metadata, ServiceError } from '@grpc/grpc-js';
import { ErrorType, InworldStatus } from '@proto/ai/inworld/common/status_pb';
import { Status } from '@proto/google/rpc/status_pb';
import { Any } from 'google-protobuf/google/protobuf/any_pb';
import { v4 } from 'uuid';

import {
  calculateTimeDifference,
  deserializeGrpcStatusDetails,
  protoTimestamp,
} from '../../src/common/helpers';

test('should deserialize status details', () => {
  const code = 1;
  const message = v4();
  const errors = [
    new InworldStatus()
      .setMaxRetries(1)
      .setErrorType(ErrorType.SESSION_EXPIRED)
      .setReconnectTime(protoTimestamp()),
  ];
  const details = errors.map((e) => {
    const d = new Any();
    d.pack(
      e.serializeBinary(),
      'type.googleapis.com/ai.inworld.common.InworldStatus',
    );
    return d;
  });
  const status = new Status()
    .setCode(code)
    .setMessage(message)
    .setDetailsList(details);
  jest.spyOn(Status, 'deserializeBinary').mockImplementationOnce(() => status);

  const metadata = new Metadata();
  metadata.set('grpc-status-details-bin', new Buffer(v4()));
  const error = { code, metadata, details: '' } as unknown as ServiceError;

  const result = deserializeGrpcStatusDetails(error);

  expect(result?.status).toEqual(status);
  expect(result?.details).toEqual(errors);
});

test('should calculate time difference when seconds < 0 and nanos > 0', () => {
  const today = new Date();
  const from = protoTimestamp(today);
  const to = protoTimestamp(today);
  to.setSeconds(to.getSeconds() - 1);
  to.setNanos(to.getNanos() + 1);

  const result = calculateTimeDifference(from, to);

  expect(result.getSeconds()).toEqual(0);
  expect(result.getNanos()).toEqual(-999999999);
});

test('should calculate time difference when seconds > 0 and nanos < 0', () => {
  const today = new Date();
  const from = protoTimestamp(today);
  const to = protoTimestamp(today);
  to.setSeconds(to.getSeconds() + 1);
  to.setNanos(to.getNanos() - 1);

  const result = calculateTimeDifference(from, to);

  expect(result.getSeconds()).toEqual(0);
  expect(result.getNanos()).toEqual(999999999);
});
