import {
  ActionEvent,
  Actor,
  AdditionalPhonemeInfo,
  ControlEvent,
  DataChunk,
  EmotionEvent,
  InworldPacket as ProtoPacket,
  NarratedAction,
  PacketId,
  Routing,
} from '@proto/ai/inworld/packets/packets_pb';
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
    const packetId = event.getPacketId();

    expect(event.hasDataChunk()).toEqual(true);
    expect(event.getDataChunk().getChunk()).toEqual(chunk);
    expect(event.getDataChunk().getType()).toEqual(DataChunk.DataType.AUDIO);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate audio session start', () => {
    const event = factory.audioSessionStart();
    const packetId = event.getPacketId();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.AUDIO_SESSION_START,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate audio session end', () => {
    const event = factory.audioSessionEnd();
    const packetId = event.getPacketId();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.AUDIO_SESSION_END,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate mute', () => {
    const event = factory.mutePlayback(true);
    const packetId = event.getPacketId();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.TTS_PLAYBACK_MUTE,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate unmute', () => {
    const event = factory.mutePlayback(false);
    const packetId = event.getPacketId();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.TTS_PLAYBACK_UNMUTE,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate text event', () => {
    const text = v4();
    const event = factory.text(text);
    const packetId = event.getPacketId();

    expect(event.hasText()).toEqual(true);
    expect(event.getText().getText()).toEqual(text);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate trigger event without parameters', () => {
    const name = v4();
    const event = factory.trigger(name);
    const packetId = event.getPacketId();

    expect(event.hasCustom()).toEqual(true);
    expect(event.getCustom().getName()).toEqual(name);
    expect(event.getCustom().getParametersList()).toEqual([]);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate trigger event with parameters', () => {
    const name = v4();
    const parameters = [{ name: v4(), value: v4() }];
    const event = factory.trigger(name, parameters);
    const packetId = event.getPacketId();

    expect(event.hasCustom()).toEqual(true);
    expect(event.getCustom().getName()).toEqual(name);
    expect(event.getCustom().getParametersList()[0].getName()).toEqual(
      parameters[0].name,
    );
    expect(event.getCustom().getParametersList()[0].getValue()).toEqual(
      parameters[0].value,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate cancel response event for all answers', () => {
    const event = factory.cancelResponse();
    const packetId = event.getPacketId();

    expect(event.getMutation().hasCancelResponses()).toEqual(true);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character?.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate cancel response event for all specific answers', () => {
    const props = {
      interactionId: v4(),
      utteranceId: [v4()],
    };
    const event = factory.cancelResponse(props);
    const mutation = event.getMutation();
    const packetId = event.getPacketId();

    expect(mutation.hasCancelResponses()).toEqual(true);
    expect(mutation.getCancelResponses().getInteractionId()).toEqual(
      props.interactionId,
    );
    expect(mutation.getCancelResponses().getUtteranceIdList()).toEqual(
      props.utteranceId,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should not use character id if character is not set', () => {
    factory.setCurrentCharacter(null);
    const event = factory.cancelResponse();
    const packetId = event.getPacketId();

    expect(event.getMutation().hasCancelResponses()).toEqual(true);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual('');
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate narrated action event', () => {
    const text = v4();
    const event = factory.narratedAction(text);
    const packetId = event.getPacketId();

    expect(event.getAction().hasNarratedAction()).toEqual(true);
    expect(event.getAction().getNarratedAction().getContent()).toEqual(text);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTargetsList()[0].getName()).toEqual(
      character.id,
    );
    expect(event.hasTimestamp()).toEqual(true);
  });
});

describe('convert packet to external one', () => {
  test('audio', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTargetsList([new Actor()]);
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
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isAudio()).toEqual(true);
  });

  test('text', () => {
    const result = InworldPacket.fromProto(factory.text(v4()));

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isText()).toEqual(true);
  });

  test('trigger without parameters', () => {
    const result = InworldPacket.fromProto(factory.trigger(v4()));

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isTrigger()).toEqual(true);
  });

  test('trigger with parameters', () => {
    const result = InworldPacket.fromProto(
      factory.trigger(v4(), [{ name: v4(), value: v4() }]),
    );

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isTrigger()).toEqual(true);
  });

  test('emotion', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTargetsList([new Actor()]);

    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setEmotion(new EmotionEvent());

    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isEmotion()).toEqual(true);
  });

  test('silence', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTargetsList([new Actor()]);
    const dataChunk = new DataChunk()
      .setType(DataChunk.DataType.SILENCE)
      .setDurationMs(100);
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setDataChunk(dataChunk);
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isSilence()).toEqual(true);
  });

  test('narrated action', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTargetsList([new Actor()]);
    const action = new ActionEvent().setNarratedAction(
      new NarratedAction().setContent(v4()),
    );
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setAction(action);
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isNarratedAction()).toEqual(true);
  });

  test('unknown', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTargetsList([new Actor()]);

    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp());

    const result = InworldPacket.fromProto(packet);

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
        .setRouting(
          new Routing().setSource(new Actor()).setTargetsList([new Actor()]),
        )
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

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
        .setRouting(
          new Routing().setSource(new Actor()).setTargetsList([new Actor()]),
        )
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.isInteractionEnd()).toEqual(false);
      expect(result.date).toEqual(today.toISOString());
    });
  });
});
