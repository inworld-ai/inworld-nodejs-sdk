import { PerceivedLatencyReport as ProtoPerceivedLatencyReport } from '@proto/ai/inworld/packets/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';

export enum PerceivedLatencyReportPrecisionType {
  UNSPECIFIED = 'UNSPECIFIED',
  FINE = 'FINE',
  ESTIMATED = 'ESTIMATED',
  PUSH_TO_TALK = 'PUSH_TO_TALK',
  NON_SPEECH = 'NON_SPEECH',
}

export class PerceivedLatencyReport {
  readonly latency: Duration;
  readonly precision: PerceivedLatencyReportPrecisionType;

  constructor({
    latency,
    precision,
  }: {
    latency: Duration;
    precision: PerceivedLatencyReportPrecisionType;
  }) {
    this.latency = latency;
    this.precision = precision;
  }

  static fromProto(proto: ProtoPerceivedLatencyReport) {
    return new PerceivedLatencyReport({
      latency: proto.getLatency(),
      precision: this.getPerceivedLatencyReportPrecision(proto.getPrecision()),
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

  static getProtoPerceivedLatencyReportPrecision(
    precision: PerceivedLatencyReportPrecisionType,
  ) {
    switch (precision) {
      case PerceivedLatencyReportPrecisionType.FINE:
        return ProtoPerceivedLatencyReport.Precision.FINE;
      case PerceivedLatencyReportPrecisionType.ESTIMATED:
        return ProtoPerceivedLatencyReport.Precision.ESTIMATED;
      case PerceivedLatencyReportPrecisionType.PUSH_TO_TALK:
        return ProtoPerceivedLatencyReport.Precision.PUSH_TO_TALK;
      case PerceivedLatencyReportPrecisionType.NON_SPEECH:
        return ProtoPerceivedLatencyReport.Precision.NON_SPEECH;
      default:
        return ProtoPerceivedLatencyReport.Precision.UNSPECIFIED;
    }
  }
}
