import {
  Agent,
  DataChunk,
  InworldPacket as ProtoPacket,
  LoadCharacters,
} from '@proto/ai/inworld/packets/packets_pb';

import {
  InworlControlAction,
  InworldPacketType,
} from '../../common/data_structures';
import { Character } from '../character.entity';
import { AudioEvent } from './audio.entity';
import { CancelResponsesEvent } from './cancel_responses.entity';
import { ControlEvent } from './control.entity';
import { EmotionEvent } from './emotion/emotion.entity';
import { NarratedAction } from './narrated_action.entity';
import { PacketId } from './packet_id.entity';
import { Routing } from './routing.entity';
import { SilenceEvent } from './silence.entity';
import { TextEvent } from './text.entity';
import { TriggerEvent } from './trigger.entity';

export interface InworldPacketProps {
  audio?: AudioEvent;
  cancelResponses?: CancelResponsesEvent;
  control?: ControlEvent;
  trigger?: TriggerEvent;
  emotions?: EmotionEvent;
  silence?: SilenceEvent;
  packetId: PacketId;
  routing: Routing;
  text?: TextEvent;
  narratedAction?: NarratedAction;
  sceneMutation?: SceneMutation;
  date: string;
  type: InworldPacketType;
}

export interface SceneMutation {
  name?: string;
  description?: string;
  displayName?: string;
  characterNames?: string[];
  loadedCharacters?: Character[];
  addedCharacters?: Character[];
  removedCharacterIds?: string[];
}

export class InworldPacket {
  private type: InworldPacketType = InworldPacketType.UNKNOWN;

  readonly date: string;
  readonly packetId: PacketId;
  readonly routing: Routing;

  // Events
  readonly text: TextEvent;
  readonly audio: AudioEvent;
  readonly control: ControlEvent;
  readonly trigger: TriggerEvent;
  readonly emotions: EmotionEvent;
  readonly silence: SilenceEvent;
  readonly narratedAction: NarratedAction;
  readonly cancelResponses: CancelResponsesEvent;
  readonly sceneMutation: SceneMutation;

  constructor(props: InworldPacketProps) {
    this.packetId = props.packetId;
    this.routing = props.routing;
    this.date = props.date;
    this.type = props.type;

    if (this.isText()) {
      this.text = props.text;
    }

    if (this.isAudio()) {
      this.audio = props.audio;
    }

    if (this.isControl()) {
      this.control = props.control;
    }

    if (this.isEmotion()) {
      this.emotions = props.emotions;
    }

    if (this.isTrigger()) {
      this.trigger = props.trigger;
    }

    if (this.isSilence()) {
      this.silence = props.silence;
    }

    if (this.isCancelResponse()) {
      this.cancelResponses = props.cancelResponses;
    }

    if (this.isNarratedAction()) {
      this.narratedAction = props.narratedAction;
    }

    if (this.isSceneMutationResponse() || this.isSceneMutationRequest()) {
      this.sceneMutation = props.sceneMutation;
    }
  }

  isText() {
    return this.type === InworldPacketType.TEXT;
  }

  isAudio() {
    return this.type === InworldPacketType.AUDIO;
  }

  isControl() {
    return this.type === InworldPacketType.CONTROL;
  }

  isTrigger() {
    return this.type === InworldPacketType.TRIGGER;
  }

  isEmotion() {
    return this.type === InworldPacketType.EMOTION;
  }

  isInteractionEnd() {
    return (
      this.isControl() &&
      this.control.action === InworlControlAction.INTERACTION_END
    );
  }

  isTTSPlaybackMute() {
    return (
      this.isControl() &&
      this.control.action === InworlControlAction.TTS_PLAYBACK_MUTE
    );
  }

  isTTSPlaybackUnmute() {
    return (
      this.isControl() &&
      this.control.action === InworlControlAction.TTS_PLAYBACK_UNMUTE
    );
  }

  isWarning() {
    return (
      this.isControl() && this.control.action === InworlControlAction.WARNING
    );
  }

  isSilence() {
    return this.type === InworldPacketType.SILENCE;
  }

  isCancelResponse() {
    return this.type === InworldPacketType.CANCEL_RESPONSE;
  }

  isNarratedAction() {
    return this.type === InworldPacketType.NARRATED_ACTION;
  }

  isSceneMutationRequest() {
    return this.type === InworldPacketType.SCENE_MUTATION_REQUEST;
  }

  isSceneMutationResponse() {
    return this.type === InworldPacketType.SCENE_MUTATION_RESPONSE;
  }

  shouldHaveConversationId() {
    return (
      this.isAudio() ||
      this.isText() ||
      this.isTrigger() ||
      this.isNarratedAction() ||
      this.isSilence()
    );
  }

  static fromProto(proto: ProtoPacket): InworldPacket {
    const type = this.getType(proto);

    return new InworldPacket({
      type,
      date: proto.getTimestamp().toDate().toISOString(),
      packetId: PacketId.fromProto(proto.getPacketId()),
      routing: Routing.fromProto(proto.getRouting()),
      ...(type === InworldPacketType.TRIGGER && {
        trigger: TriggerEvent.fromProto(proto.getCustom()),
      }),
      ...(type === InworldPacketType.TEXT && {
        text: TextEvent.fromProto(proto.getText()),
      }),
      ...(type === InworldPacketType.AUDIO && {
        audio: AudioEvent.fromProto(proto.getDataChunk()),
      }),
      ...(type === InworldPacketType.CONTROL && {
        control: ControlEvent.fromProto(proto.getControl()),
      }),
      ...(type === InworldPacketType.SILENCE && {
        silence: SilenceEvent.fromProto(proto.getDataChunk()),
      }),
      ...(type === InworldPacketType.EMOTION && {
        emotions: EmotionEvent.fromProto(proto.getEmotion()),
      }),
      ...(type === InworldPacketType.CANCEL_RESPONSE && {
        cancelResponses: CancelResponsesEvent.fromProto(proto.getMutation()),
      }),
      ...(type === InworldPacketType.NARRATED_ACTION && {
        narratedAction: NarratedAction.fromProto(proto.getAction()),
      }),
      ...([
        InworldPacketType.SCENE_MUTATION_REQUEST,
        InworldPacketType.SCENE_MUTATION_RESPONSE,
      ].includes(type) && {
        sceneMutation: {
          ...(proto.getMutation()?.hasLoadScene() && {
            name: proto.getMutation().getLoadScene().getName(),
          }),
          ...(proto.getMutation()?.hasLoadCharacters() && {
            characterNames: proto
              .getMutation()
              .getLoadCharacters()
              .getNameList()
              .map((c: LoadCharacters.CharacterName) => c.getName()),
          }),
          ...(proto.getSessionControlResponse()?.hasLoadedScene() && {
            loadedCharacters: proto
              .getSessionControlResponse()
              .getLoadedScene()
              .getAgentsList()
              .map((agent: Agent) => Character.fromProto(agent)),
            name: proto
              .getSessionControlResponse()
              .getLoadedScene()
              .getSceneName(),
            description: proto
              .getSessionControlResponse()
              .getLoadedScene()
              .getSceneDescription(),
            displayName: proto
              .getSessionControlResponse()
              .getLoadedScene()
              .getSceneDisplayName(),
          }),
          ...(proto.getSessionControlResponse()?.hasLoadedCharacters() && {
            addedCharacters: proto
              .getSessionControlResponse()
              .getLoadedCharacters()
              .getAgentsList()
              .map((agent: Agent) => Character.fromProto(agent)),
          }),
          ...(proto.getMutation()?.hasUnloadCharacters() && {
            removedCharacterIds: proto
              .getMutation()
              .getUnloadCharacters()
              .getAgentsList()
              .map((agent: Agent) => agent.getAgentId()),
          }),
        },
      }),
    });
  }

  private static getType(packet: ProtoPacket) {
    switch (true) {
      case packet.hasText():
        return InworldPacketType.TEXT;
      case packet.hasDataChunk() &&
        packet.getDataChunk().getType() === DataChunk.DataType.AUDIO:
        return InworldPacketType.AUDIO;
      case packet.hasDataChunk() &&
        packet.getDataChunk().getType() === DataChunk.DataType.SILENCE:
        return InworldPacketType.SILENCE;
      case packet.hasCustom():
        return InworldPacketType.TRIGGER;
      case packet.hasControl():
        return InworldPacketType.CONTROL;
      case packet.hasEmotion():
        return InworldPacketType.EMOTION;
      case packet.getMutation()?.hasCancelResponses():
        return InworldPacketType.CANCEL_RESPONSE;
      case packet.getAction()?.hasNarratedAction():
        return InworldPacketType.NARRATED_ACTION;
      case packet.getSessionControlResponse()?.hasLoadedScene():
      case packet.getSessionControlResponse()?.hasLoadedCharacters():
        return InworldPacketType.SCENE_MUTATION_RESPONSE;
      case packet.getMutation()?.hasLoadCharacters():
      case packet.getMutation()?.hasLoadScene():
      case packet.getMutation()?.hasUnloadCharacters():
        return InworldPacketType.SCENE_MUTATION_REQUEST;
      default:
        return InworldPacketType.UNKNOWN;
    }
  }
}
