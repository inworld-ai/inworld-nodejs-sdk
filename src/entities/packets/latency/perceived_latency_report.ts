import { PerceivedLatencyReport as ProtoPerceivedLatencyReport } from '@proto/ai/inworld/packets/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';

import { PerceivedLatencyReportPrecision } from './perceived_latency_report_precision.entity';

export enum PerceivedLatencyReportPrecisionType {
  UNSPECIFIED = 'UNSPECIFIED',
  FINE = 'FINE',
  ESTIMATED = 'ESTIMATED',
  PUSH_TO_TALK = 'PUSH_TO_TALK',
  NON_SPEECH = 'NON_SPEECH',
}

export class PerceivedLatencyReport {
  readonly latency: Duration;
  readonly precision: PerceivedLatencyReportPrecision;

  constructor({
    latency,
    precision,
  }: {
    latency: Duration;
    precision: PerceivedLatencyReportPrecision;
  }) {
    this.latency = latency;
    this.precision = precision;
  }

  static fromProto(proto: ProtoPerceivedLatencyReport) {
    return new PerceivedLatencyReport({
      latency: proto.getLatency(),
      precision: new PerceivedLatencyReportPrecision(
        this.getPerceivedLatencyReportPrecision(proto.getPrecision()),
      ),
    });
  }

  static getPerceivedLatencyReportPrecision(
    precision: ProtoPerceivedLatencyReport.Precision,
  ) {
    switch (precision) {
      case ProtoPerceivedLatencyReport.Precision.FINE:
        return PerceivedLatencyReportPrecisionType.FINE;
      case ProtoPerceivedLatencyReport.Precision.ESTIMATED:
        return PerceivedLatencyReportPrecisionType.ESTIMATED;
      case ProtoPerceivedLatencyReport.Precision.PUSH_TO_TALK:
        return PerceivedLatencyReportPrecisionType.PUSH_TO_TALK;
      case ProtoPerceivedLatencyReport.Precision.NON_SPEECH:
        return PerceivedLatencyReportPrecisionType.NON_SPEECH;
      default:
        return PerceivedLatencyReportPrecisionType.UNSPECIFIED;
    }
  }
}
