import { ServiceError } from '@grpc/grpc-js';
import { InworldStatus as ProtoInworldStatus } from '@proto/ai/inworld/common/status_pb';
import { Status } from '@proto/google/rpc/status_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

const { version } = require('@root/package.json');

export const protoTimestamp = (date?: Date): Timestamp => {
  const timestamp = new Timestamp();
  timestamp.fromDate(date ? date : new Date());

  return timestamp;
};

export const grpcOptions = {
  'grpc.primary_user_agent': `inworld-nodejs-sdk/${version}`,
};

export const deserializeGrpcStatusDetails = (error: ServiceError) => {
  const buffer = error.metadata?.get('grpc-status-details-bin')?.[0];

  if (!buffer || typeof buffer === 'string') {
    return null;
  }

  const status = Status.deserializeBinary(buffer);

  const details = status
    .getDetailsList()
    .map((detail) =>
      detail.unpack(ProtoInworldStatus.deserializeBinary, detail.getTypeName()),
    )
    .filter((detail) => detail !== null && detail !== undefined);

  return {
    status,
    details,
  };
};

export const calculateTimeDifference = (from: Timestamp, to: Timestamp) => {
  const duration = new Duration();
  duration.setSeconds(to.getSeconds() - from.getSeconds());
  duration.setNanos(to.getNanos() - from.getNanos());

  if (duration.getSeconds() < 0 && duration.getNanos() > 0) {
    duration.setSeconds(duration.getSeconds() + 1);
    duration.setNanos(duration.getNanos() - 1000000000);
  } else if (duration.getSeconds() > 0 && duration.getNanos() < 0) {
    duration.setSeconds(duration.getSeconds() - 1);
    duration.setNanos(duration.getNanos() + 1000000000);
  }

  return duration;
};
