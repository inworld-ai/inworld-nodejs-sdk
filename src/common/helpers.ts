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
