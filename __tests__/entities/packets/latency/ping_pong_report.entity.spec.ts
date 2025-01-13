import {
  PacketId,
  PingPongReport as ProtoPingPongReport,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { protoTimestamp } from '../../../../src/common/helpers';
import {
  PingPongReport,
  PingPongType,
} from '../../../../src/entities/packets/latency/ping_pong_report.entity';

test.each([
  {
    input: ProtoPingPongReport.Type.PING,
    expected: PingPongType.PING,
  },
  {
    input: ProtoPingPongReport.Type.PONG,
    expected: PingPongType.PONG,
  },
  {
    input: undefined,
    expected: PingPongType.UNSPECIFIED,
  },
])('should convert ping pong latency for $expected', ({ input, expected }) => {
  const id = v4();
  const packetId = new PacketId().setPacketId(id);
  const pingTimestamp = protoTimestamp();
  const proto = new ProtoPingPongReport()
    .setType(input)
    .setPingPacketId(packetId)
    .setPingTimestamp(pingTimestamp);

  expect(PingPongReport.fromProto(proto)).toEqual({
    type: expected,
    packetId: { packetId: id },
    pingTimestamp: pingTimestamp,
  });
});

test('should convert ping pong latency for empty packetId', () => {
  const pingTimestamp = protoTimestamp();
  const proto = new ProtoPingPongReport()
    .setType(ProtoPingPongReport.Type.PING)
    .setPingTimestamp(pingTimestamp);

  expect(PingPongReport.fromProto(proto)).toEqual({
    type: PingPongType.PING,
    packetId: null,
    pingTimestamp: pingTimestamp,
  });
});
