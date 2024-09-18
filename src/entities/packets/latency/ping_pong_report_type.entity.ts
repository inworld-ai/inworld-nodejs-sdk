import { PingPongReport as ProtoPingPongReport } from '@proto/ai/inworld/packets/packets_pb';

export enum PingPongType {
  // No type is specified, means this is empty report.
  UNSPECIFIED = 'UNSPECIFIED',
  // Sent from the server to the client.
  PING = 'PING',
  // Upon receiving a ping, the client has to send back a pong packet.
  PONG = 'PONG',
}

export class PingPongReportType {
  readonly type: PingPongType;

  constructor(type: PingPongType) {
    this.type = type;
  }

  static fromProto(type: ProtoPingPongReport.Type) {
    switch (type) {
      case ProtoPingPongReport.Type.UNSPECIFIED:
        return PingPongType.UNSPECIFIED;
      case ProtoPingPongReport.Type.PING:
        return PingPongType.PING;
      case ProtoPingPongReport.Type.PONG:
        return PingPongType.PONG;
      default:
        return PingPongType.UNSPECIFIED;
    }
  }
}
