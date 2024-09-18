import { LatencyReportEvent as ProtoLatencyReportEvent } from '@proto/ai/inworld/packets/packets_pb';

import { PerceivedLatencyReport } from './perceived_latency_report';
import { PingPongReport } from './ping_pong_report.entity';

export class LatencyReportEvent {
  readonly pingPong?: PingPongReport;
  readonly perceivedLatency?: PerceivedLatencyReport;

  constructor({
    pingPong,
    perceivedLatency,
  }: {
    pingPong?: PingPongReport;
    perceivedLatency?: PerceivedLatencyReport;
  }) {
    if (pingPong) {
      this.pingPong = pingPong;
    }

    if (perceivedLatency) {
      this.perceivedLatency = perceivedLatency;
    }
  }

  static fromProto(proto: ProtoLatencyReportEvent) {
    return new LatencyReportEvent({
      ...(proto.getPingPong() && {
        pingPong: PingPongReport.fromProto(proto.getPingPong()),
      }),
      ...(proto.getPerceivedLatency() && {
        perceivedLatency: PerceivedLatencyReport.fromProto(
          proto.getPerceivedLatency(),
        ),
      }),
    });
  }
}
