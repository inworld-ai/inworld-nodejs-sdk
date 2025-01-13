import { TextEvent as ProtoTextEvent } from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { InworldTextPacketType } from '../../../src/common/data_structures';
import { TextEvent } from '../../../src/entities/packets/text.entity';

test.each([
  {
    input: ProtoTextEvent.SourceType.SPEECH_TO_TEXT,
    expected: InworldTextPacketType.SPEECH_TO_TEXT,
  },
  {
    input: ProtoTextEvent.SourceType.TYPED_IN,
    expected: InworldTextPacketType.TYPED_IN,
  },
  {
    input: ProtoTextEvent.SourceType.GENERATED,
    expected: InworldTextPacketType.GENERATED,
  },
  {
    input: ProtoTextEvent.SourceType.FILLER,
    expected: InworldTextPacketType.FILLER,
  },
  {
    input: undefined,
    expected: InworldTextPacketType.UNKNOWN,
  },
])('should convert text event for $expected', ({ input, expected }) => {
  const text = v4();

  const proto = new ProtoTextEvent()
    .setText(text)
    .setFinal(true)
    .setSourceType(input);

  expect(TextEvent.fromProto(proto)).toEqual({
    text,
    final: true,
    type: expected,
  });
});
