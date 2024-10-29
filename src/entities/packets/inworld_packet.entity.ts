import {
  Agent,
  CustomEvent,
  DataChunk,
  InworldPacket as ProtoPacket,
  LoadCharacters,
} from '@proto/ai/inworld/packets/packets_pb';

import {
  InworlControlAction,
  InworldPacketType,
} from '../../common/data_structures';
import { Character } from '../character.entity';
import { ItemOperation } from '../entities/item_operation';
import { AudioEvent } from './audio.entity';
import { CancelResponsesEvent } from './cancel_responses.entity';
import { ControlEvent } from './control.entity';
import { EmotionEvent } from './emotion/emotion.entity';
import { LatencyReportEvent } from './latency/latency_report.entity';
import { NarratedAction } from './narrated_action.entity';
import { OperationStatusEvent } from './operation_status.entity';
import { PacketId } from './packet_id.entity';
import { Routing } from './routing.entity';
import { SilenceEvent } from './silence.entity';
import { TaskEvent } from './task.entity';
import { TextEvent } from './text.entity';
import { TriggerEvent } from './trigger.entity';

export interface InworldPacketProps {
  audio?: AudioEvent;
  cancelResponses?: CancelResponsesEvent;
  control?: ControlEvent;
  task?: TaskEvent;
  trigger?: TriggerEvent;
  emotions?: EmotionEvent;
  silence?: SilenceEvent;
  packetId: PacketId;
  routing: Routing;
  text?: TextEvent;
  narratedAction?: NarratedAction;
  sceneMutation?: SceneMutation;
  entitiesItemsOperation?: ItemOperation;
  operationStatus?: OperationStatusEvent;
  latencyReport?: LatencyReportEvent;
  date: string;
  type: InworldPacketType;
  proto?: ProtoPacket;
}

export interface SceneMutation {
  name?: string;
  description?: string;
  displayName?: string;
  addedCharacterNames?: string[];
  removedCharacterIds?: string[];
  loadedCharacters?: Character[];
}

export class InworldPacket {
  private proto: ProtoPacket.AsObject;
  private type: InworldPacketType = InworldPacketType.UNKNOWN;

  readonly date: string;
  readonly packetId: PacketId;
  readonly routing: Routing;

  // Events
  readonly text: TextEvent;
  readonly audio: AudioEvent;
  readonly task: TaskEvent;
  readonly control: ControlEvent;
  readonly trigger: TriggerEvent;
  readonly emotions: EmotionEvent;
  readonly silence: SilenceEvent;
  readonly narratedAction: NarratedAction;
  readonly cancelResponses: CancelResponsesEvent;
  readonly sceneMutation: SceneMutation;
  readonly entitiesItemsOperation: ItemOperation;
  readonly operationStatus: OperationStatusEvent;
  readonly latencyReport: LatencyReportEvent;

  constructor(props: InworldPacketProps) {
    this.packetId = props.packetId;
    this.routing = props.routing;
    this.date = props.date;
    this.type = props.type;
    this.proto = props.proto.toObject();

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

    if (this.isTask()) {
      this.task = props.task;
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

    if (this.isEntitiesItemOperation()) {
      this.entitiesItemsOperation = props.entitiesItemsOperation;
    }

    if (this.isOperationStatus()) {
      this.operationStatus = props.operationStatus;
    }

    if (this.isLatencyReport()) {
      this.latencyReport = props.latencyReport;
    }
  }

  getProto() {
    return this.proto;
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

  isTask() {
    return this.type === InworldPacketType.TASK;
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

  isEntitiesItemOperation() {
    return this.type === InworldPacketType.ENTITIES_ITEM_OPERATION;
  }

  isOperationStatus() {
    return this.type === InworldPacketType.OPERATION_STATUS;
  }

  isLatencyReport() {
    return this.type === InworldPacketType.LATENCY_REPORT;
  }

  isPingPongReport() {
    return this.isLatencyReport() && !!this.latencyReport.pingPong;
  }

  isPerceivedLatencyReport() {
    return this.isLatencyReport() && !!this.latencyReport.perceivedLatency;
  }

  shouldHaveConversationId() {
    return (
      this.isAudio() ||
      this.isText() ||
      this.isTrigger() ||
      this.isTask() ||
      this.isNarratedAction() ||
      this.isSilence()
    );
  }

  static fromProto(proto: ProtoPacket): InworldPacket {
    const type = this.getType(proto);

    return new InworldPacket({
      type,
      proto,
      date: proto.getTimestamp().toDate().toISOString(),
      packetId: PacketId.fromProto(proto.getPacketId()),
      routing: Routing.fromProto(proto.getRouting()),
      ...(type === InworldPacketType.TRIGGER && {
        trigger: TriggerEvent.fromProto(proto.getCustom()),
      }),
      ...(type === InworldPacketType.TASK && {
        task: TaskEvent.fromProto(proto.getCustom()),
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
      ...(type === InworldPacketType.LATENCY_REPORT && {
        latencyReport: LatencyReportEvent.fromProto(proto.getLatencyReport()),
      }),
      ...(type === InworldPacketType.CANCEL_RESPONSE && {
        cancelResponses: CancelResponsesEvent.fromProto(proto.getMutation()),
      }),
      ...(type === InworldPacketType.NARRATED_ACTION && {
        narratedAction: NarratedAction.fromProto(proto.getAction()),
      }),
      ...(type === InworldPacketType.ENTITIES_ITEM_OPERATION && {
        entitiesItemsOperation: ItemOperation.fromProto(
          proto.getEntitiesItemsOperation(),
        ),
      }),
      ...(type === InworldPacketType.OPERATION_STATUS && {
        operationStatus: OperationStatusEvent.fromProto(
          proto.getOperationStatus(),
        ),
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
            addedCharacterNames: proto
              .getMutation()
              .getLoadCharacters()
              .getNameList()
              .map((c: LoadCharacters.CharacterName) => c.getName()),
          }),
          ...(proto.getMutation()?.hasUnloadCharacters() && {
            removedCharacterIds: proto
              .getMutation()
              .getUnloadCharacters()
              .getAgentsList()
              .map((agent: Agent) => agent.getAgentId()),
          }),
          ...(proto.getControl()?.hasCurrentSceneStatus() && {
            name: proto.getControl().getCurrentSceneStatus().getSceneName(),
            description: proto
              .getControl()
              .getCurrentSceneStatus()
              .getSceneDescription(),
            displayName: proto
              .getControl()
              .getCurrentSceneStatus()
              .getSceneDisplayName(),
            loadedCharacters: proto
              .getControl()
              .getCurrentSceneStatus()
              .getAgentsList()
              .map((agent: Agent) => Character.fromProto(agent)),
          }),
        },
      }),
    });
  }

  private static getType(packet: ProtoPacket) {
    switch (true) {
      case !!(
        packet.getMutation()?.getLoadScene() ||
        packet.getMutation()?.getLoadCharacters() ||
        packet.getMutation()?.getUnloadCharacters()
      ):
        return InworldPacketType.SCENE_MUTATION_REQUEST;
      case !!packet.getControl()?.getCurrentSceneStatus():
        return InworldPacketType.SCENE_MUTATION_RESPONSE;
      case packet.hasText():
        return InworldPacketType.TEXT;
      case packet.hasDataChunk() &&
        packet.getDataChunk().getType() === DataChunk.DataType.AUDIO:
        return InworldPacketType.AUDIO;
      case packet.hasDataChunk() &&
        packet.getDataChunk().getType() === DataChunk.DataType.SILENCE:
        return InworldPacketType.SILENCE;
      case packet.hasLatencyReport():
        return InworldPacketType.LATENCY_REPORT;
      case packet.hasCustom() &&
        packet.getCustom().getType() === CustomEvent.Type.TASK:
        return InworldPacketType.TASK;
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
      case packet.hasEntitiesItemsOperation():
        return InworldPacketType.ENTITIES_ITEM_OPERATION;
      case packet.hasOperationStatus():
        return InworldPacketType.OPERATION_STATUS;
      default:
        return InworldPacketType.UNKNOWN;
    }
  }
}
