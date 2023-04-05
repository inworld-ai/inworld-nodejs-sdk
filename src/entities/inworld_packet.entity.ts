import { EmotionBehavior } from './emotion-behavior.entity';
import { EmotionStrength } from './emotion-strength.entity';

export enum InworldPacketType {
  UNKNOWN = 'UNKNOWN',
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  TRIGGER = 'TRIGGER',
  EMOTION = 'EMOTION',
  CONTROL = 'CONTROL',
  CANCEL_RESPONSE = 'CANCEL_RESPONSE',
}

export enum InworlControlType {
  UNKNOWN = 'UNKNOWN',
  INTERACTION_END = 'INTERACTION_END',
}

export interface InworldPacketProps {
  audio?: AudioEvent;
  cancelResponses?: CancelResponsesEvent;
  control?: ControlEvent;
  trigger?: TriggerEvent;
  emotions?: EmotionEvent;
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

export interface TextEvent {
  text: string;
  final: boolean;
}

export interface TriggerEvent {
  name: string;
}

export interface AudioEvent {
  chunk: string;
}

export interface CancelResponsesEvent {
  interactionId?: string;
  utteranceId?: string[];
}

export interface ControlEvent {
  type: InworlControlType;
}

export class InworldPacket {
  private type: InworldPacketType;

  date: string;
  packetId: PacketId;
  routing: Routing;

  // Events
  text: TextEvent;
  audio: AudioEvent;
  control: ControlEvent;
  trigger: TriggerEvent;
  emotions: EmotionEvent;
  cancelResponses: CancelResponsesEvent;

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

  isCancelResponse() {
    return this.type === InworldPacketType.CANCEL_RESPONSE;
  }
}
