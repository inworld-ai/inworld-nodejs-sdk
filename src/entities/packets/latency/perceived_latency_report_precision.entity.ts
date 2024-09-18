import { PerceivedLatencyReport as ProtoPerceivedLatencyReport } from '@proto/ai/inworld/packets/packets_pb';

export enum PerceivedLatencyReportPrecisionType {
  UNSPECIFIED = 'UNSPECIFIED',
  FINE = 'FINE',
  ESTIMATED = 'ESTIMATED',
  PUSH_TO_TALK = 'PUSH_TO_TALK',
  NON_SPEECH = 'NON_SPEECH',
}

export class PerceivedLatencyReportPrecision {
  readonly precision: PerceivedLatencyReportPrecisionType;

  constructor(precision: PerceivedLatencyReportPrecisionType) {
    this.precision = precision;
  }

  static fromProto(precision: ProtoPerceivedLatencyReport.Precision) {
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
