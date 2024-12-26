import { PingPongReport as ProtoPingPongReport } from '@proto/ai/inworld/packets/packets_pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

import { PacketId } from '../packet_id.entity';

export enum PingPongType {
  // No type is specified, means this is empty report.
  UNSPECIFIED = 'UNSPECIFIED',
  // Sent from the server to the client.
  PING = 'PING',
  // Upon receiving a ping, the client has to send back a pong packet.
  PONG = 'PONG',
}

export class PingPongReport {
  readonly packetId: PacketId | null;
  readonly pingTimestamp: Timestamp;
  readonly type: PingPongType;

  constructor({
    packetId,
    pingTimestamp,
    type,
  }: {
    packetId: PacketId | null;
    pingTimestamp: Timestamp;
    type: PingPongType;
  }) {
    this.packetId = packetId;
    this.pingTimestamp = pingTimestamp;
    this.type = type;
  }

  static fromProto(proto: ProtoPingPongReport) {
    return new PingPongReport({
      packetId: proto.getPingPacketId()
        ? PacketId.fromProto(proto.getPingPacketId())
        : null,
      pingTimestamp: proto.getPingTimestamp(),
      type: this.getProtoPingPongReportType(proto.getType()),
    });
  }

  static getProtoPingPongReportType(type: ProtoPingPongReport.Type) {
    switch (type) {
      case ProtoPingPongReport.Type.PING:
        return PingPongType.PING;
      case ProtoPingPongReport.Type.PONG:
        return PingPongType.PONG;
      default:
        return PingPongType.UNSPECIFIED;
    }
  }
}
