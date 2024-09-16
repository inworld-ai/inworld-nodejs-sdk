import {
  ActionEvent,
  Actor,
  Agent,
  AudioSessionStartPayload,
  CancelResponsesEvent,
  ControlEvent,
  ConversationUpdatePayload,
  CustomEvent,
  DataChunk,
  InworldPacket as ProtoPacket,
  LoadCharacters,
  LoadScene,
  MutationEvent,
  NarratedAction,
  PacketId,
  Routing,
  SessionConfigurationPayload,
  TextEvent,
  UnloadCharacters,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import {
  ConversationParticipant,
  ItemsInEntitiesOperationType,
  MicrophoneMode,
  SendAudioSessionStartPacketParams,
  SendCustomPacketParams,
  SendPacketParams,
  SessionControlProps,
  UnderstandingMode,
} from '../common/data_structures';
import { protoTimestamp } from '../common/helpers';
import { Character } from '../entities/character.entity';
import { EntityItem } from '../entities/entities/entity_item';
import { ItemOperation } from '../entities/entities/item_operation';

export interface SendCancelResponsePacketParams {
  interactionId?: string;
  utteranceId?: string[];
  character: Character;
}

export class EventFactory {
  private character: Character | undefined = undefined;
  private characters: Character[] = [];

  getCurrentCharacter(): Character {
    return this.character;
  }

  setCurrentCharacter(character: Character) {
    this.character = character;
  }

  setCharacters(characters: Character[]) {
    this.characters = characters;
  }

  getCharacters() {
    return this.characters;
  }

  dataChunk(
    chunk: string,
    type: DataChunk.DataType,
    params: SendPacketParams,
  ): ProtoPacket {
    const event = new DataChunk().setType(type).setChunk(chunk);

    return this.baseProtoPacket({
      utteranceId: false,
      interactionId: false,
      conversationId: params.conversationId,
    }).setDataChunk(event);
  }

  audioSessionStart(params: SendAudioSessionStartPacketParams): ProtoPacket {
    return this.audioSession(ControlEvent.Action.AUDIO_SESSION_START, params);
  }

  audioSessionEnd(params: SendPacketParams): ProtoPacket {
    return this.audioSession(ControlEvent.Action.AUDIO_SESSION_END, params);
  }

  mutePlayback(isMuted: boolean, params: SendPacketParams): ProtoPacket {
    const event = new ControlEvent().setAction(
      isMuted
        ? ControlEvent.Action.TTS_PLAYBACK_MUTE
        : ControlEvent.Action.TTS_PLAYBACK_UNMUTE,
    );

    return this.baseProtoPacket({
      utteranceId: false,
      interactionId: false,
      conversationId: params.conversationId,
    }).setControl(event);
  }

  text(text: string, params: SendPacketParams): ProtoPacket {
    const event = new TextEvent()
      .setText(text)
      .setSourceType(TextEvent.SourceType.TYPED_IN)
      .setFinal(true);

    return this.baseProtoPacket({
      correlationId: true,
      conversationId: params.conversationId,
    }).setText(event);
  }

  trigger(name: string, params: SendCustomPacketParams): ProtoPacket {
    return this.customEvent(name, CustomEvent.Type.TRIGGER, params);
  }

  cancelResponse(params: SendCancelResponsePacketParams): ProtoPacket {
    const event = new CancelResponsesEvent();

    if (params.interactionId) {
      event.setInteractionId(params.interactionId);
    }

    if (params.utteranceId) {
      event.setUtteranceIdList(params.utteranceId);
    }

    return this.baseProtoPacket({
      utteranceId: false,
      interactionId: false,
      correlationId: true,
    })
      .setMutation(new MutationEvent().setCancelResponses(event))
      .setRouting(
        this.routing({
          character: params.character,
        }),
      );
  }

  narratedAction(content: string, params: SendPacketParams): ProtoPacket {
    const event = new ActionEvent().setNarratedAction(
      new NarratedAction().setContent(content),
    );

    return this.baseProtoPacket({
      correlationId: true,
      conversationId: params.conversationId,
    }).setAction(event);
  }

  static conversation(
    participants: string[],
    params: SendPacketParams,
  ): ProtoPacket {
    const control = new ControlEvent()
      .setAction(ControlEvent.Action.CONVERSATION_UPDATE)
      .setConversationUpdate(
        new ConversationUpdatePayload().setParticipantsList(
          participants.map((p) =>
            p === ConversationParticipant.USER
              ? new Actor().setType(Actor.Type.PLAYER)
              : new Actor().setName(p).setType(Actor.Type.AGENT),
          ),
        ),
      );

    return new ProtoPacket()
      .setPacketId(
        new PacketId()
          .setPacketId(v4())
          .setConversationId(params.conversationId),
      )
      .setTimestamp(protoTimestamp())
      .setControl(control);
  }

  static sessionControl(props: SessionControlProps): ProtoPacket {
    const event = new SessionConfigurationPayload();

    if (props.capabilities) {
      event.setCapabilitiesConfiguration(props.capabilities);
    }

    if (props.sessionConfiguration) {
      event.setSessionConfiguration(props.sessionConfiguration);
    }

    if (props.clientConfiguration) {
      event.setClientConfiguration(props.clientConfiguration);
    }

    if (props.userConfiguration) {
      event.setUserConfiguration(props.userConfiguration);
    }

    if (props.continuation) {
      event.setContinuation(props.continuation);
    }

    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.worldRouting())
      .setTimestamp(protoTimestamp())
      .setControl(
        new ControlEvent()
          .setAction(ControlEvent.Action.SESSION_CONFIGURATION)
          .setSessionConfiguration(event),
      );
  }

  static loadScene(name: string): ProtoPacket {
    const mutation = new MutationEvent().setLoadScene(
      new LoadScene().setName(name),
    );

    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.worldRouting())
      .setTimestamp(protoTimestamp())
      .setMutation(mutation);
  }

  static loadCharacters(names: string[]): ProtoPacket {
    const characters = new LoadCharacters().setNameList(
      names.map((name) => new LoadCharacters.CharacterName().setName(name)),
    );
    const mutation = new MutationEvent().setLoadCharacters(characters);

    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.worldRouting())
      .setTimestamp(protoTimestamp())
      .setMutation(mutation);
  }

  static unloadCharacters(ids: string[]): ProtoPacket {
    const agents = ids.map((agentId) => new Agent().setAgentId(agentId));
    const mutation = new MutationEvent().setUnloadCharacters(
      new UnloadCharacters().setAgentsList(agents),
    );

    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.worldRouting())
      .setTimestamp(protoTimestamp())
      .setMutation(mutation);
  }

  static createOrUpdateItems(props: {
    items: EntityItem[];
    addToEntities: string[];
  }): ProtoPacket {
    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.worldRouting())
      .setTimestamp(protoTimestamp())
      .setEntitiesItemsOperation(
        new ItemOperation({
          createOrUpdateItems: props,
        }).toProto(),
      );
  }

  static removeItems(ids: string[]): ProtoPacket {
    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.worldRouting())
      .setTimestamp(protoTimestamp())
      .setEntitiesItemsOperation(
        new ItemOperation({
          removeItems: { itemIds: ids },
        }).toProto(),
      );
  }

  static itemsInEntities(props: {
    type: ItemsInEntitiesOperationType;
    itemIds: string[];
    entityNames: string[];
  }): ProtoPacket {
    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.worldRouting())
      .setTimestamp(protoTimestamp())
      .setEntitiesItemsOperation(
        new ItemOperation({
          itemsInEntities: props,
        }).toProto(),
      );
  }

  baseProtoPacket(props?: {
    utteranceId?: boolean;
    interactionId?: boolean;
    correlationId?: boolean;
    conversationId?: string;
  }) {
    const packetId = new PacketId().setPacketId(v4());

    if (props?.utteranceId !== false) {
      packetId.setUtteranceId(v4());
    }

    if (props?.interactionId !== false) {
      packetId.setInteractionId(v4());
    }

    if (props?.correlationId) {
      packetId.setCorrelationId(v4());
    }

    if (props?.conversationId) {
      packetId.setConversationId(props.conversationId);
    }

    return new ProtoPacket()
      .setPacketId(packetId)
      .setRouting(this.routing())
      .setTimestamp(protoTimestamp());
  }

  private audioSession(
    action:
      | ControlEvent.Action.AUDIO_SESSION_START
      | ControlEvent.Action.AUDIO_SESSION_END,
    params: SendAudioSessionStartPacketParams,
  ): ProtoPacket {
    const event = new ControlEvent().setAction(action);

    if (action === ControlEvent.Action.AUDIO_SESSION_START) {
      let protoMode;
      switch (params.mode) {
        case MicrophoneMode.EXPECT_AUDIO_END:
          protoMode = AudioSessionStartPayload.MicrophoneMode.EXPECT_AUDIO_END;
          break;
        default:
          protoMode = AudioSessionStartPayload.MicrophoneMode.OPEN_MIC;
          break;
      }

      let protoUnderstandingMode;

      switch (params.understandingMode) {
        case UnderstandingMode.SPEECH_RECOGNITION_ONLY:
          protoUnderstandingMode =
            AudioSessionStartPayload.UnderstandingMode.SPEECH_RECOGNITION_ONLY;
          break;
        default:
          protoUnderstandingMode =
            AudioSessionStartPayload.UnderstandingMode.FULL;
          break;
      }

      event.setAudioSessionStart(
        new AudioSessionStartPayload()
          .setMode(protoMode)
          .setUnderstandingMode(protoUnderstandingMode),
      );
    }

    return this.baseProtoPacket({
      utteranceId: false,
      interactionId: false,
      conversationId: params.conversationId,
    }).setControl(event);
  }

  private customEvent(
    name: string,
    type: CustomEvent.Type,
    params: SendCustomPacketParams,
  ): ProtoPacket {
    const { parameters = [], character, conversationId } = params;

    const event = new CustomEvent().setName(name).setType(type);

    if (parameters.length) {
      event.setParametersList(
        parameters.map((p) =>
          new CustomEvent.Parameter().setName(p.name).setValue(p.value),
        ),
      );
    }

    const base = this.baseProtoPacket({
      correlationId: true,
      conversationId,
    }).setCustom(event);

    if (character) {
      base.setRouting(this.routing({ character }));
    }

    return base;
  }

  private routing(props?: { character: Character }): Routing {
    const routing = new Routing().setSource(
      new Actor().setType(Actor.Type.PLAYER),
    );

    if (props?.character) {
      routing.setTarget(
        new Actor().setType(Actor.Type.AGENT).setName(props.character.id),
      );
    }

    return routing;
  }

  private static worldRouting(): Routing {
    const source = new Actor().setType(Actor.Type.PLAYER);
    const target = new Actor().setType(Actor.Type.WORLD);

    return new Routing().setSource(source).setTarget(target);
  }
}
