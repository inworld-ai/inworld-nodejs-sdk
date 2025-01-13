import { PerceivedLatencyReport as ProtoPerceivedLatencyReport } from '@proto/ai/inworld/packets/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';

import {
  PerceivedLatencyReport,
  PerceivedLatencyReportPrecisionType,
} from '../../../../src/entities/packets/latency/perceived_latency_report';

test.each([
  {
    input: ProtoPerceivedLatencyReport.Precision.FINE,
    expected: PerceivedLatencyReportPrecisionType.FINE,
  },
  {
    input: ProtoPerceivedLatencyReport.Precision.ESTIMATED,
    expected: PerceivedLatencyReportPrecisionType.ESTIMATED,
  },
  {
    input: ProtoPerceivedLatencyReport.Precision.PUSH_TO_TALK,
    expected: PerceivedLatencyReportPrecisionType.PUSH_TO_TALK,
  },
  {
    input: ProtoPerceivedLatencyReport.Precision.NON_SPEECH,
    expected: PerceivedLatencyReportPrecisionType.NON_SPEECH,
  },
  {
    input: undefined,
    expected: PerceivedLatencyReportPrecisionType.UNSPECIFIED,
  },
])(
  'should convert proto perceived latency for $expected',
  ({ input, expected }) => {
    const duration = new Duration().setSeconds(1).setNanos(1);
    const proto = new ProtoPerceivedLatencyReport()
      .setPrecision(input)
      .setLatency(duration);

    expect(PerceivedLatencyReport.fromProto(proto)).toEqual({
      latency: duration,
      precision: expected,
    });
  },
);

test.each([
  {
    input: PerceivedLatencyReportPrecisionType.FINE,
    expected: ProtoPerceivedLatencyReport.Precision.FINE,
  },
  {
    input: PerceivedLatencyReportPrecisionType.ESTIMATED,
    expected: ProtoPerceivedLatencyReport.Precision.ESTIMATED,
  },
  {
    input: PerceivedLatencyReportPrecisionType.PUSH_TO_TALK,
    expected: ProtoPerceivedLatencyReport.Precision.PUSH_TO_TALK,
  },
  {
    input: PerceivedLatencyReportPrecisionType.NON_SPEECH,
    expected: ProtoPerceivedLatencyReport.Precision.NON_SPEECH,
  },
  {
    input: undefined,
    expected: ProtoPerceivedLatencyReport.Precision.UNSPECIFIED,
  },
])(
  'should convert perceived latency persicion to proto one for $expected',
  ({ input, expected }) => {
    expect(
      PerceivedLatencyReport.getProtoPerceivedLatencyReportPrecision(input),
    ).toEqual(expected);
  },
);
