import {
  Actor,
  AdditionalPhonemeInfo,
  ControlEvent,
  DataChunk,
  EmotionEvent,
  InworldPacket as ProtoPacket,
  PacketId,
  Routing,
} from '@proto/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import { v4 } from 'uuid';

import { protoTimestamp } from '../../src/common/helpers';
import { InworldPacket } from '../../src/entities/inworld_packet.entity';
import { EventFactory } from '../../src/factories/event';
import { createCharacter } from '../helpers';

let factory: EventFactory;

beforeEach(() => {
  factory = new EventFactory();
});

test('should set and get character', () => {
  const character = createCharacter();

  factory.setCurrentCharacter(character);

  const found = factory.getCurrentCharacter();

  expect(found).toEqual(character);
  expect(found.id).toEqual(character.id);
});

describe('event types', () => {
  const character = createCharacter();

  beforeEach(() => {
    jest.clearAllMocks();
    factory.setCurrentCharacter(character);
  });
  character;

  test('should generate audio event', () => {
    const chunk = v4();
    const event = factory.dataChunk(chunk, DataChunk.DataType.AUDIO);

    expect(event.hasDataChunk()).toEqual(true);
    expect(event.getDataChunk().getChunk()).toEqual(chunk);
    expect(event.getDataChunk().getType()).toEqual(DataChunk.DataType.AUDIO);
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate audio session start', () => {
    const event = factory.audioSessionStart();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.AUDIO_SESSION_START,
    );
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate audio session end', () => {
    const event = factory.audioSessionEnd();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.AUDIO_SESSION_END,
    );
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate text event', () => {
    const text = v4();
    const event = factory.text(text);

    expect(event.hasText()).toEqual(true);
    expect(event.getText().getText()).toEqual(text);
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate trigger event without parameters', () => {
    const name = v4();
    const event = factory.trigger(name);

    expect(event.hasCustom()).toEqual(true);
    expect(event.getCustom().getName()).toEqual(name);
    expect(event.getCustom().getParametersList()).toEqual([]);
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate trigger event with parameters', () => {
    const name = v4();
    const parameters = [{ name: v4(), value: v4() }];
    const event = factory.trigger(name, parameters);

    expect(event.hasCustom()).toEqual(true);
    expect(event.getCustom().getName()).toEqual(name);
    expect(event.getCustom().getParametersList()[0].getName()).toEqual(
      parameters[0].name,
    );
    expect(event.getCustom().getParametersList()[0].getValue()).toEqual(
      parameters[0].value,
    );
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate trigger event', () => {
    const name = v4();
    const event = factory.trigger(name);

    expect(event.hasCustom()).toEqual(true);
    expect(event.getCustom().getName()).toEqual(name);
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate cancel response event for all answers', () => {
    const event = factory.cancelResponse();

    expect(event.hasCancelresponses()).toEqual(true);
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate cancel response event for all specific answers', () => {
    const event = factory.cancelResponse({
      interactionId: v4(),
      utteranceId: [v4()],
    });

    expect(event.hasCancelresponses()).toEqual(true);
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should not use character id if character is not set', () => {
    factory.setCurrentCharacter(null);
    const event = factory.cancelResponse();

    expect(event.hasCancelresponses()).toEqual(true);
    expect(event.hasPacketId()).toEqual(true);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual('');
    expect(event.hasTimestamp()).toEqual(true);
  });
});

describe('convert packet to external one', () => {
  test('audio', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());
    const dataChunk = new DataChunk()
      .setType(DataChunk.DataType.AUDIO)
      .setChunk(v4())
      .setAdditionalPhonemeInfoList([
        new AdditionalPhonemeInfo()
          .setPhoneme(v4())
          .setStartOffset(new Duration().setSeconds(100).setNanos(10)),
      ]);
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setDataChunk(dataChunk);
    const result = EventFactory.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isAudio()).toEqual(true);
  });

  test('text', () => {
    const result = EventFactory.fromProto(factory.text(v4()));

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isText()).toEqual(true);
  });

  test('trigger without parameters', () => {
    const result = EventFactory.fromProto(factory.trigger(v4()));

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isTrigger()).toEqual(true);
  });

  test('trigger with parameters', () => {
    const result = EventFactory.fromProto(
      factory.trigger(v4(), [{ name: v4(), value: v4() }]),
    );

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isTrigger()).toEqual(true);
  });

  test('emotion', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());

    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setEmotion(new EmotionEvent());

    const result = EventFactory.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isEmotion()).toEqual(true);
  });

  test('silence', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());
    const dataChunk = new DataChunk()
      .setType(DataChunk.DataType.SILENCE)
      .setDurationMs(100);
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setDataChunk(dataChunk);
    const result = EventFactory.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isSilence()).toEqual(true);
  });

  test('unknown', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());

    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp());

    const result = EventFactory.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isEmotion()).toEqual(false);
    expect(result.isAudio()).toEqual(false);
    expect(result.isText()).toEqual(false);
    expect(result.isControl()).toEqual(false);
    expect(result.isTrigger()).toEqual(false);
  });

  describe('control', () => {
    test('interaction end', () => {
      const today = new Date();
      const event = new ControlEvent().setAction(
        ControlEvent.Action.INTERACTION_END,
      );
      const packet = new ProtoPacket()
        .setControl(event)
        .setPacketId(new PacketId())
        .setRouting(new Routing().setSource(new Actor()).setTarget(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = EventFactory.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.isInteractionEnd()).toEqual(true);
      expect(result.date).toEqual(today.toISOString());
    });

    test('unknown', () => {
      const today = new Date();
      const event = new ControlEvent().setAction(ControlEvent.Action.UNKNOWN);
      const packet = new ProtoPacket()
        .setControl(event)
        .setPacketId(new PacketId())
        .setRouting(new Routing().setSource(new Actor()).setTarget(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = EventFactory.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.isInteractionEnd()).toEqual(false);
      expect(result.date).toEqual(today.toISOString());
    });
  });
});
