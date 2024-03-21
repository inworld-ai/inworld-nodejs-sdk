import { v4 } from 'uuid';

import {
  InworlControlType,
  InworldPacketType,
} from '../../src/common/data_structures';
import { AudioEvent } from '../../src/entities/packets/audio.entity';
import { ControlEvent } from '../../src/entities/packets/control.entity';
import { InworldPacket } from '../../src/entities/packets/inworld_packet.entity';
import { PacketId } from '../../src/entities/packets/packet_id.entity';
import { Routing } from '../../src/entities/packets/routing.entity';
import { TextEvent } from '../../src/entities/packets/text.entity';
import { TriggerEvent } from '../../src/entities/packets/trigger.entity';

const packetId: PacketId = new PacketId({
  packetId: v4(),
  interactionId: v4(),
  utteranceId: v4(),
});
const packetIdWithCorrelation = {
  ...packetId,
  correlationId: v4(),
};
const routing: Routing = {
  source: {
    name: v4(),
    isPlayer: true,
    isCharacter: false,
  },
  target: {
    name: v4(),
    isPlayer: false,
    isCharacter: true,
  },
};
const date = new Date().toISOString();

test('should get audio packet fields', () => {
  const audio = new AudioEvent({
    chunk: v4(),
  });

  const packet = new InworldPacket({
    audio,
    packetId,
    routing,
    date,
    type: InworldPacketType.AUDIO,
  });

  expect(packet.isAudio()).toEqual(true);
  expect(packet.audio).toEqual(audio);
  expect(packet.routing).toEqual(routing);
  expect(packet.date).toEqual(date);
  expect(packet.packetId).toEqual(packetId);
});

test('should get text packet fields', () => {
  const text = new TextEvent({
    text: v4(),
    final: false,
  });

  const packet = new InworldPacket({
    text,
    packetId: packetIdWithCorrelation,
    routing,
    date,
    type: InworldPacketType.TEXT,
  });

  expect(packet.isText()).toEqual(true);
  expect(packet.text).toEqual(text);
  expect(packet.routing).toEqual(routing);
  expect(packet.date).toEqual(date);
  expect(packet.packetId).toEqual(packetIdWithCorrelation);
});

test('should get trigger packet fields', () => {
  const trigger = new TriggerEvent({
    name: v4(),
  });
  const packet = new InworldPacket({
    packetId: packetIdWithCorrelation,
    routing,
    date,
    trigger,
    type: InworldPacketType.TRIGGER,
  });

  expect(packet.isTrigger()).toEqual(true);
  expect(packet.trigger).toEqual(trigger);
  expect(packet.routing).toEqual(routing);
  expect(packet.date).toEqual(date);
  expect(packet.packetId).toEqual(packetIdWithCorrelation);
});

test('should get emotion packet fields', () => {
  const packet = new InworldPacket({
    packetId,
    routing,
    date,
    type: InworldPacketType.EMOTION,
  });

  expect(packet.isEmotion()).toEqual(true);
  expect(packet.routing).toEqual(routing);
  expect(packet.date).toEqual(date);
  expect(packet.packetId).toEqual(packetId);
});

test('should get silence packet fields', () => {
  const packet = new InworldPacket({
    packetId,
    routing,
    date,
    type: InworldPacketType.SILENCE,
  });

  expect(packet.isSilence()).toEqual(true);
  expect(packet.routing).toEqual(routing);
  expect(packet.date).toEqual(date);
  expect(packet.packetId).toEqual(packetId);
});

test('should get narracted action packet fields', () => {
  const text = v4();
  const packet = new InworldPacket({
    packetId,
    routing,
    date,
    type: InworldPacketType.NARRATED_ACTION,
    narratedAction: { text },
  });

  expect(packet.isNarratedAction()).toEqual(true);
  expect(packet.routing).toEqual(routing);
  expect(packet.date).toEqual(date);
  expect(packet.packetId).toEqual(packetId);
  expect(packet.narratedAction.text).toEqual(text);
});

describe('control', () => {
  test('should get interaction end packet fields', () => {
    const packet = new InworldPacket({
      packetId,
      routing,
      date,
      type: InworldPacketType.CONTROL,
      control: new ControlEvent({ type: InworlControlType.INTERACTION_END }),
    });

    expect(packet.isControl()).toEqual(true);
    expect(packet.isInteractionEnd()).toEqual(true);
    expect(packet.routing).toEqual(routing);
    expect(packet.date).toEqual(date);
    expect(packet.packetId).toEqual(packetId);
  });

  test('should get warning packet fields', () => {
    const control = new ControlEvent({
      type: InworlControlType.WARNING,
      description: v4(),
    });
    const packet = new InworldPacket({
      packetId,
      routing,
      date,
      type: InworldPacketType.CONTROL,
      control,
    });

    expect(packet.isControl()).toEqual(true);
    expect(packet.isWarning()).toEqual(true);
    expect(packet.control).toEqual(control);
    expect(packet.routing).toEqual(routing);
    expect(packet.date).toEqual(date);
    expect(packet.packetId).toEqual(packetId);
  });
});
