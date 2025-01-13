import { LogsEvent as ProtoLogsEvent } from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { LogLevel } from '../../../src/common/data_structures';
import { LogsEvent } from '../../../src/entities/packets/log.entity';

test.each([
  {
    input: ProtoLogsEvent.LogLevel.WARNING,
    expected: LogLevel.WARNING,
  },
  {
    input: ProtoLogsEvent.LogLevel.INFO,
    expected: LogLevel.INFO,
  },
  {
    input: ProtoLogsEvent.LogLevel.DEBUG,
    expected: LogLevel.DEBUG,
  },
  {
    input: ProtoLogsEvent.LogLevel.INTERNAL,
    expected: LogLevel.INTERNAL,
  },
  {
    input: undefined,
    expected: LogLevel.UNSPECIFIED,
  },
])('should convert log event for $expected', ({ input, expected }) => {
  const text = v4();
  const details = [{ text: v4() }];

  const proto = new ProtoLogsEvent()
    .setText(text)
    .setLevel(input)
    .setDetailsList(
      details.map((d) => new ProtoLogsEvent.LogDetail().setText(d.text)),
    );

  expect(LogsEvent.fromProto(proto)).toEqual({
    text,
    level: expected,
    details,
    metadata: {},
  });
});
