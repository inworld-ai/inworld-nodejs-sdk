import {
  ActionEvent,
  Actor,
  AdditionalPhonemeInfo,
  Agent,
  ControlEvent,
  ConversationEventPayload,
  ConversationUpdatePayload,
  CurrentSceneStatus,
  DataChunk,
  EmotionEvent,
  InworldPacket as ProtoPacket,
  LoadCharacters,
  LoadScene,
  MutationEvent,
  NarratedAction,
  PacketId,
  Routing,
} from '@proto/ai/inworld/packets/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import { v4 } from 'uuid';

import { InworldConversationEventType } from '../../src/common/data_structures';
import { protoTimestamp } from '../../src/common/helpers';
import { InworldPacket } from '../../src/entities/packets/inworld_packet.entity';
import { EventFactory } from '../../src/factories/event';
import {
  agents,
  characters,
  conversationId,
  createCharacter,
} from '../helpers';

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

test('should set and get characters', () => {
  const characters = [createCharacter(), createCharacter()];

  factory.setCharacters(characters);

  const found = factory.getCharacters();

  expect(found).toEqual(characters);
  expect(found[0].id).toEqual(characters[0].id);
  expect(found[1].id).toEqual(characters[1].id);
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
    const event = factory.dataChunk(chunk, DataChunk.DataType.AUDIO, {
      conversationId,
    });
    const packetId = event.getPacketId();

    expect(event.hasDataChunk()).toEqual(true);
    expect(event.getDataChunk().getChunk()).toEqual(chunk);
    expect(event.getDataChunk().getType()).toEqual(DataChunk.DataType.AUDIO);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate audio session start', () => {
    const event = factory.audioSessionStart({
      conversationId,
    });
    const packetId = event.getPacketId();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.AUDIO_SESSION_START,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate audio session end', () => {
    const event = factory.audioSessionEnd({
      conversationId,
    });
    const packetId = event.getPacketId();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.AUDIO_SESSION_END,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate mute', () => {
    const event = factory.mutePlayback(true, {
      conversationId,
    });
    const packetId = event.getPacketId();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.TTS_PLAYBACK_MUTE,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate unmute', () => {
    const event = factory.mutePlayback(false, {
      conversationId,
    });
    const packetId = event.getPacketId();

    expect(event.hasControl()).toEqual(true);
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.TTS_PLAYBACK_UNMUTE,
    );
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate text event', () => {
    const text = v4();
    const event = factory.text(text, {
      conversationId,
    });
    const packetId = event.getPacketId();

    expect(event.hasText()).toEqual(true);
    expect(event.getText().getText()).toEqual(text);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate trigger event without parameters', () => {
    const name = v4();
    const event = factory.trigger(name, {
      conversationId,
    });
    const packetId = event.getPacketId();

    expect(event.hasCustom()).toEqual(true);
    expect(event.getCustom().getName()).toEqual(name);
    expect(event.getCustom().getParametersList()).toEqual([]);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate trigger event with parameters', () => {
    const name = v4();
    const parameters = [{ name: v4(), value: v4() }];
    const event = factory.trigger(name, {
      parameters,
      conversationId,
    });
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
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate cancel response event for all answers', () => {
    const event = factory.cancelResponse({
      character,
    });
    const packetId = event.getPacketId();

    expect(event.getMutation().hasCancelResponses()).toEqual(true);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getName()).toEqual(character?.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate cancel response event for all specific answers', () => {
    const props = {
      interactionId: v4(),
      utteranceId: [v4()],
      character,
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
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate cancel response event for all specific answers', () => {
    const props = {
      interactionId: v4(),
      utteranceId: [v4()],
      character,
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
    expect(event.getRouting().getTarget().getName()).toEqual(character.id);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate narrated action event', () => {
    const text = v4();
    const event = factory.narratedAction(text, {
      conversationId,
    });
    const packetId = event.getPacketId();

    expect(event.getAction().hasNarratedAction()).toEqual(true);
    expect(event.getAction().getNarratedAction().getContent()).toEqual(text);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeDefined();
    expect(packetId.getUtteranceId()).toBeDefined();
    expect(packetId.getCorrelationId()).toBeDefined();
    expect(packetId.getConversationId()).toEqual(conversationId);
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget()).toBeFalsy();
    expect(event.getRouting().getTargetsList()).toEqual([]);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate load characters event', () => {
    const names = [v4(), v4()];
    const event = EventFactory.loadCharacters(names);
    const packetId = event.getPacketId();

    expect(event.getMutation().hasLoadCharacters()).toEqual(true);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getType()).toEqual(Actor.Type.WORLD);
    expect(
      event
        .getMutation()
        .getLoadCharacters()
        .getNameList()
        .map((n: LoadCharacters.CharacterName) => n.getName()),
    ).toEqual(names);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate unload characters event', () => {
    const ids = [v4(), v4()];
    const event = EventFactory.unloadCharacters(ids);
    const packetId = event.getPacketId();

    expect(event.getMutation().hasUnloadCharacters()).toEqual(true);
    expect(packetId.getPacketId()).toBeDefined();
    expect(packetId.getInteractionId()).toBeFalsy();
    expect(packetId.getUtteranceId()).toBeFalsy();
    expect(packetId.getCorrelationId()).toBeFalsy();
    expect(event.hasRouting()).toEqual(true);
    expect(event.getRouting().getTarget().getType()).toEqual(Actor.Type.WORLD);
    expect(
      event
        .getMutation()
        .getUnloadCharacters()
        .getAgentsList()
        .map((n: Agent) => n.getAgentId()),
    ).toEqual(ids);
    expect(event.hasTimestamp()).toEqual(true);
  });

  test('should generate conversation start event', () => {
    const characters = [v4(), v4()];
    const event = EventFactory.conversation(characters, {
      conversationId,
    });
    expect(event.getControl().getAction()).toEqual(
      ControlEvent.Action.CONVERSATION_UPDATE,
    );
    expect(
      event.getControl().getConversationUpdate().getParticipantsList(),
    ).toEqual(
      characters.map((p) => new Actor().setName(p).setType(Actor.Type.AGENT)),
    );
    expect(event.getPacketId().getConversationId()).toEqual(conversationId);
  });

  test('should generate base packet without conversationId', () => {
    const event = factory.baseProtoPacket();

    expect(event.getPacketId().getConversationId()).toBeFalsy();
  });

  test('should generate base packet with conversationId', () => {
    const event = factory.baseProtoPacket({
      conversationId,
    });

    expect(event.getPacketId().getConversationId()).toEqual(conversationId);
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
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isAudio()).toEqual(true);
  });

  test('text', () => {
    const result = InworldPacket.fromProto(
      factory.text(v4(), {
        conversationId,
      }),
    );

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isText()).toEqual(true);
  });

  test('trigger without parameters', () => {
    const result = InworldPacket.fromProto(
      factory.trigger(v4(), {
        conversationId,
      }),
    );

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isTrigger()).toEqual(true);
  });

  test('trigger with parameters', () => {
    const result = InworldPacket.fromProto(
      factory.trigger(v4(), {
        parameters: [{ name: v4(), value: v4() }],
        conversationId,
      }),
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

    const result = InworldPacket.fromProto(packet);

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
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isSilence()).toEqual(true);
  });

  test('narrated action', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());
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

  test('scene mutation request with name', () => {
    const name = v4();
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());
    const mutation = new MutationEvent().setLoadScene(
      new LoadScene().setName(name),
    );
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setMutation(mutation);
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isSceneMutationRequest()).toEqual(true);
    expect(result.sceneMutation.name).toEqual(name);
  });

  test('scene mutation request with characters', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());
    const mutation = new MutationEvent().setLoadCharacters(
      new LoadCharacters().setNameList(
        characters.map((c) =>
          new LoadCharacters.CharacterName().setName(c.resourceName),
        ),
      ),
    );
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setMutation(mutation);
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isSceneMutationRequest()).toEqual(true);
    expect(result.sceneMutation.addedCharacterNames).toEqual(
      characters.map((c) => c.resourceName),
    );
  });

  test('scene mutation response with loaded characters', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());
    const event = new ControlEvent()
      .setAction(ControlEvent.Action.CURRENT_SCENE_STATUS)
      .setCurrentSceneStatus(new CurrentSceneStatus().setAgentsList(agents));
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setControl(event);
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isSceneMutationResponse()).toEqual(true);
    expect(result.sceneMutation.loadedCharacters).toEqual(characters);
  });

  test('scene mutation response with added characters', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());
    const event = new ControlEvent()
      .setAction(ControlEvent.Action.CURRENT_SCENE_STATUS)
      .setCurrentSceneStatus(new CurrentSceneStatus().setAgentsList(agents));
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(rounting)
      .setTimestamp(protoTimestamp())
      .setControl(event);
    const result = InworldPacket.fromProto(packet);

    expect(result).toBeInstanceOf(InworldPacket);
    expect(result.isSceneMutationResponse()).toEqual(true);
    expect(result.sceneMutation.loadedCharacters).toEqual(characters);
  });

  test('unknown', () => {
    const rounting = new Routing()
      .setSource(new Actor())
      .setTarget(new Actor());

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
        .setRouting(new Routing().setSource(new Actor()).setTarget(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.isInteractionEnd()).toEqual(true);
      expect(result.date).toEqual(today.toISOString());
    });

    test('warning', () => {
      const today = new Date();
      const event = new ControlEvent().setAction(ControlEvent.Action.WARNING);
      const packet = new ProtoPacket()
        .setControl(event)
        .setPacketId(new PacketId())
        .setRouting(new Routing().setSource(new Actor()).setTarget(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.isWarning()).toEqual(true);
      expect(result.date).toEqual(today.toISOString());
    });

    test('outgoing conversation', () => {
      const today = new Date();
      const actors = [
        new Actor().setName(v4()).setType(Actor.Type.AGENT),
        new Actor().setName(v4()).setType(Actor.Type.AGENT),
      ];
      const event = new ControlEvent()
        .setAction(ControlEvent.Action.CONVERSATION_UPDATE)
        .setConversationUpdate(
          new ConversationUpdatePayload().setParticipantsList(actors),
        );
      const packet = new ProtoPacket()
        .setControl(event)
        .setPacketId(new PacketId().setConversationId(conversationId))
        .setRouting(new Routing().setSource(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.packetId.conversationId).toEqual(conversationId);
      expect(result.date).toEqual(today.toISOString());
    });

    test('incoming conversation started', () => {
      const today = new Date();
      const actors = [
        new Actor().setName(v4()).setType(Actor.Type.AGENT),
        new Actor().setName(v4()).setType(Actor.Type.AGENT),
      ];
      const event = new ControlEvent()
        .setAction(ControlEvent.Action.CONVERSATION_EVENT)
        .setConversationEvent(
          new ConversationEventPayload()
            .setEventType(
              ConversationEventPayload.ConversationEventType.STARTED,
            )
            .setParticipantsList(actors),
        );
      const packet = new ProtoPacket()
        .setControl(event)
        .setPacketId(new PacketId().setConversationId(conversationId))
        .setRouting(new Routing().setSource(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.packetId.conversationId).toEqual(conversationId);
      expect(result.control.conversation.type).toEqual(
        InworldConversationEventType.STARTED,
      );
      expect(result.date).toEqual(today.toISOString());
    });

    test('incoming conversation updated', () => {
      const today = new Date();
      const event = new ControlEvent()
        .setAction(ControlEvent.Action.CONVERSATION_EVENT)
        .setConversationEvent(
          new ConversationEventPayload().setEventType(
            ConversationEventPayload.ConversationEventType.UPDATED,
          ),
        );
      const packet = new ProtoPacket()
        .setControl(event)
        .setPacketId(new PacketId().setConversationId(conversationId))
        .setRouting(new Routing().setSource(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.packetId.conversationId).toEqual(conversationId);
      expect(result.control.conversation.type).toEqual(
        InworldConversationEventType.UPDATED,
      );
      expect(result.date).toEqual(today.toISOString());
    });

    test('incoming conversation evicted', () => {
      const today = new Date();
      const event = new ControlEvent()
        .setAction(ControlEvent.Action.CONVERSATION_EVENT)
        .setConversationEvent(
          new ConversationEventPayload().setEventType(
            ConversationEventPayload.ConversationEventType.EVICTED,
          ),
        );
      const packet = new ProtoPacket()
        .setControl(event)
        .setPacketId(new PacketId().setConversationId(conversationId))
        .setRouting(new Routing().setSource(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.packetId.conversationId).toEqual(conversationId);
      expect(result.control.conversation.type).toEqual(
        InworldConversationEventType.EVICTED,
      );
      expect(result.date).toEqual(today.toISOString());
    });

    test('incoming conversation unknown', () => {
      const today = new Date();
      const event = new ControlEvent()
        .setAction(ControlEvent.Action.CONVERSATION_EVENT)
        .setConversationEvent(new ConversationEventPayload());
      const packet = new ProtoPacket()
        .setControl(event)
        .setPacketId(new PacketId().setConversationId(conversationId))
        .setRouting(new Routing().setSource(new Actor()))
        .setTimestamp(protoTimestamp(today));

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.packetId.conversationId).toEqual(conversationId);
      expect(result.control.conversation.type).toEqual(
        InworldConversationEventType.UNKNOWN,
      );
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

      const result = InworldPacket.fromProto(packet);

      expect(result).toBeInstanceOf(InworldPacket);
      expect(result.isControl()).toEqual(true);
      expect(result.isInteractionEnd()).toEqual(false);
      expect(result.date).toEqual(today.toISOString());
    });
  });
});
