import { Capability } from '../../../src/entities/capability.entity';

test('should convert empty capabilities to proto', () => {
  const proto = Capability.toProto({});

  expect(proto.toObject()).toMatchObject({
    audio: true,
    debugInfo: false,
    emotions: false,
    interruptions: false,
    logs: true,
    logsWarning: true,
    logsInfo: true,
    logsDebug: false,
    logsInternal: false,
    multiAgent: true,
    multiModalActionPlanning: false,
    narratedActions: false,
    perceivedLatencyReport: true,
    phonemeInfo: false,
    pingPongReport: true,
    silenceEvents: false,
  });
});

test('should convert logsInfo capabilities to proto', () => {
  const capabilities = {
    logsWarning: false,
    logsInfo: true,
    logsDebug: false,
    logsInternal: false,
  };

  const proto = Capability.toProto(capabilities);

  expect(proto.getLogs()).toEqual(true);
  expect(proto.getLogsWarning()).toEqual(false);
  expect(proto.getLogsInfo()).toEqual(true);
  expect(proto.getLogsDebug()).toEqual(false);
  expect(proto.getLogsInternal()).toEqual(false);
});

test('should convert logsDebug capabilities to proto', () => {
  const capabilities = {
    logsWarning: false,
    logsInfo: false,
    logsDebug: true,
    logsInternal: false,
  };

  const proto = Capability.toProto(capabilities);

  expect(proto.getLogs()).toEqual(true);
  expect(proto.getLogsWarning()).toEqual(false);
  expect(proto.getLogsInfo()).toEqual(false);
  expect(proto.getLogsDebug()).toEqual(true);
  expect(proto.getLogsInternal()).toEqual(false);
});

test('should convert logsInternal capabilities to proto', () => {
  const capabilities = {
    logsWarning: false,
    logsInfo: false,
    logsDebug: false,
    logsInternal: true,
  };

  const proto = Capability.toProto(capabilities);

  expect(proto.getLogs()).toEqual(true);
  expect(proto.getLogsWarning()).toEqual(false);
  expect(proto.getLogsInfo()).toEqual(false);
  expect(proto.getLogsDebug()).toEqual(false);
  expect(proto.getLogsInternal()).toEqual(true);
});
