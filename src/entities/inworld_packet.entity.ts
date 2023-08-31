import {
  Actor as ProtoActor,
  AdditionalPhonemeInfo as ProtoAdditionalPhonemeInfo,
  ControlEvent as ProtoControlEvent,
  DataChunk,
  InworldPacket as ProtoPacket,
} from '@proto/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';

import { EmotionBehavior } from './emotion-behavior.entity';
import { EmotionStrength } from './emotion-strength.entity';

export enum InworldPacketType {
  UNKNOWN = 'UNKNOWN',
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  TRIGGER = 'TRIGGER',
  EMOTION = 'EMOTION',
  CONTROL = 'CONTROL',
  SILENCE = 'SILENCE',
  CANCEL_RESPONSE = 'CANCEL_RESPONSE',
}

export enum InworlControlType {
  UNKNOWN = 'UNKNOWN',
  INTERACTION_END = 'INTERACTION_END',
  TTS_PLAYBACK_MUTE = 'TTS_PLAYBACK_MUTE',
  TTS_PLAYBACK_UNMUTE = 'TTS_PLAYBACK_UNMUTE',
}

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
  date: string;
  type: InworldPacketType;
}

export interface PacketId {
  packetId: string;
  utteranceId: string;
  interactionId: string;
}

export interface EmotionEvent {
  behavior: EmotionBehavior;
  strength: EmotionStrength;
}

export interface Routing {
  source: Actor;
  target: Actor;
}

export interface Actor {
  name: string;
  isPlayer: boolean;
  isCharacter: boolean;
}

export interface TriggerParameter {
  name: string;
  value: string;
}

export interface TextEvent {
  text: string;
  final: boolean;
}

export interface TriggerEvent {
  name: string;
  parameters?: TriggerParameter[];
}

export interface AdditionalPhonemeInfo {
  phoneme?: string;
  startOffsetS?: number;
}

export interface AudioEvent {
  chunk: string;
  additionalPhonemeInfo?: AdditionalPhonemeInfo[];
}

export interface SilenceEvent {
  durationMs: number;
}

export interface CancelResponsesEvent {
  interactionId?: string;
  utteranceId?: string[];
}

export interface ControlEvent {
  type: InworlControlType;
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
  readonly cancelResponses: CancelResponsesEvent;

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
      this.control.type === InworlControlType.INTERACTION_END
    );
  }

  isTTSPlaybackMute() {
    return (
      this.isControl() &&
      this.control.type === InworlControlType.TTS_PLAYBACK_MUTE
    );
  }

  isTTSPlaybackUnmute() {
    return (
      this.isControl() &&
      this.control.type === InworlControlType.TTS_PLAYBACK_UNMUTE
    );
  }

  isSilence() {
    return this.type === InworldPacketType.SILENCE;
  }

  isCancelResponse() {
    return this.type === InworldPacketType.CANCEL_RESPONSE;
  }

  static fromProto(proto: ProtoPacket): InworldPacket {
    const packetId = proto.getPacketId();
    const routing = proto.getRouting();
    const source = routing.getSource();
    const target = routing.getTarget();
    const type = this.getType(proto);

    const textEvent = proto.getText();
    const emotionEvent = proto.getEmotion();
    const additionalPhonemeInfo =
      proto.getDataChunk()?.getAdditionalPhonemeInfoList() ?? [];

    return new InworldPacket({
      type,
      date: proto.getTimestamp().toDate().toISOString(),
      packetId: {
        packetId: packetId.getPacketId(),
        utteranceId: packetId.getUtteranceId(),
        interactionId: packetId.getInteractionId(),
      },
      routing: {
        source: {
          name: source.getName(),
          isPlayer: source.getType() === ProtoActor.Type.PLAYER,
          isCharacter: source.getType() === ProtoActor.Type.AGENT,
        },
        target: {
          name: target.getName(),
          isPlayer: target.getType() === ProtoActor.Type.PLAYER,
          isCharacter: target.getType() === ProtoActor.Type.AGENT,
        },
      },
      ...(type === InworldPacketType.TRIGGER && {
        trigger: {
          name: proto.getCustom().getName(),
          parameters: proto
            .getCustom()
            .getParametersList()
            .map((p) => ({
              name: p.getName(),
              value: p.getValue(),
            })),
        },
      }),
      ...(type === InworldPacketType.TEXT && {
        text: {
          text: textEvent.getText(),
          final: textEvent.getFinal(),
        },
      }),
      ...(type === InworldPacketType.AUDIO && {
        audio: {
          chunk: proto.getDataChunk().getChunk_asB64(),
          additionalPhonemeInfo: additionalPhonemeInfo.map(
            (info: ProtoAdditionalPhonemeInfo) =>
              ({
                phoneme: info.getPhoneme(),
                startOffsetS: this.durationToSeconds(info.getStartOffset()),
              } as AdditionalPhonemeInfo),
          ),
        },
      }),
      ...(type === InworldPacketType.CONTROL && {
        control: {
          type: this.getControlType(proto),
        },
      }),
      ...(type === InworldPacketType.SILENCE && {
        silence: {
          durationMs: proto.getDataChunk().getDurationMs(),
        },
      }),
      ...(type === InworldPacketType.EMOTION && {
        emotions: {
          behavior: new EmotionBehavior(
            EmotionBehavior.fromProto(emotionEvent.getBehavior()),
          ),
          strength: new EmotionStrength(
            EmotionStrength.fromProto(emotionEvent.getStrength()),
          ),
        },
      }),
      ...(type === InworldPacketType.CANCEL_RESPONSE && {
        cancelResponses: {
          interactionId: proto
            .getMutation()
            .getCancelResponses()
            .getInteractionId(),
          utteranceId: proto
            .getMutation()
            .getCancelResponses()
            .getUtteranceIdList(),
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
      default:
        return InworldPacketType.UNKNOWN;
    }
  }

  private static getControlType(packet: ProtoPacket) {
    switch (packet.getControl().getAction()) {
      case ProtoControlEvent.Action.INTERACTION_END:
        return InworlControlType.INTERACTION_END;
      case ProtoControlEvent.Action.TTS_PLAYBACK_MUTE:
        return InworlControlType.TTS_PLAYBACK_MUTE;
      case ProtoControlEvent.Action.TTS_PLAYBACK_UNMUTE:
        return InworlControlType.TTS_PLAYBACK_UNMUTE;
      default:
        return InworlControlType.UNKNOWN;
    }
  }

  private static durationToSeconds(duration: Duration) {
    return duration.getSeconds() + duration.getNanos() / 1000000000;
  }
}
