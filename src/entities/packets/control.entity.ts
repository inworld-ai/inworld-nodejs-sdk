import {
  AudioSessionStartPayload,
  ControlEvent as ProtoControlEvent,
  ConversationEventPayload,
} from '@proto/ai/inworld/packets/packets_pb';

import {
  InworlControlAction,
  InworldConversationEventType,
  MicrophoneMode,
  UnderstandingMode,
} from '../../common/data_structures';
import { Actor } from './routing.entity';

export interface Conversation {
  type?: InworldConversationEventType;
  participants: Actor[];
}

export interface AudioSessionStart {
  mode?: MicrophoneMode;
  understandingMode?: UnderstandingMode;
}

export class ControlEvent {
  readonly action: InworlControlAction;
  readonly audioSessionStart?: AudioSessionStart;
  readonly description: string | undefined;
  readonly conversation: Conversation | undefined;

  constructor({
    action,
    audioSessionStart,
    description,
    conversation,
  }: {
    action: InworlControlAction;
    audioSessionStart?: AudioSessionStart;
    description?: string;
    conversation?: Conversation;
  }) {
    this.action = action;

    if (audioSessionStart) {
      this.audioSessionStart = audioSessionStart;
    }

    if (description) {
      this.description = description;
    }

    if (conversation) {
      this.conversation = conversation;
    }
  }

  static fromProto(proto: ProtoControlEvent) {
    const conversation =
      proto.getConversationUpdate() ?? proto.getConversationEvent();
    const audioSessionStart = proto.getAudioSessionStart();

    return new ControlEvent({
      action: this.getControlType(proto),
      ...(audioSessionStart && {
        audioSessionStart: {
          mode: ControlEvent.getMicrophoneMode(audioSessionStart),
          understandingMode:
            ControlEvent.getUnderstandingMode(audioSessionStart),
        },
      }),
      description: proto.getDescription(),
      ...(conversation && {
        conversation: {
          ...(proto.getConversationEvent() && {
            type: this.getConversationType(proto),
          }),
          participants:
            conversation
              .getParticipantsList()
              .map((participant) => Actor.fromProto(participant)) ?? [],
        },
      }),
    });
  }

  private static getControlType(proto: ProtoControlEvent) {
    switch (proto.getAction()) {
      case ProtoControlEvent.Action.AUDIO_SESSION_START:
        return InworlControlAction.AUDIO_SESSION_START;
      case ProtoControlEvent.Action.AUDIO_SESSION_END:
        return InworlControlAction.AUDIO_SESSION_END;
      case ProtoControlEvent.Action.INTERACTION_END:
        return InworlControlAction.INTERACTION_END;
      case ProtoControlEvent.Action.TTS_PLAYBACK_MUTE:
        return InworlControlAction.TTS_PLAYBACK_MUTE;
      case ProtoControlEvent.Action.TTS_PLAYBACK_UNMUTE:
        return InworlControlAction.TTS_PLAYBACK_UNMUTE;
      case ProtoControlEvent.Action.WARNING:
        return InworlControlAction.WARNING;
      case ProtoControlEvent.Action.CONVERSATION_UPDATE:
        return InworlControlAction.CONVERSATION_UPDATE;
      case ProtoControlEvent.Action.CONVERSATION_EVENT:
        return InworlControlAction.CONVERSATION_EVENT;
      default:
        return InworlControlAction.UNKNOWN;
    }
  }

  private static getConversationType(proto: ProtoControlEvent) {
    switch (proto.getConversationEvent().getEventType()) {
      case ConversationEventPayload.ConversationEventType.STARTED:
        return InworldConversationEventType.STARTED;
      case ConversationEventPayload.ConversationEventType.UPDATED:
        return InworldConversationEventType.UPDATED;
      case ConversationEventPayload.ConversationEventType.EVICTED:
        return InworldConversationEventType.EVICTED;
      default:
        return InworldConversationEventType.UNKNOWN;
    }
  }

  private static getMicrophoneMode(proto: AudioSessionStartPayload) {
    if (
      proto.getMode() ===
      AudioSessionStartPayload.MicrophoneMode.EXPECT_AUDIO_END
    ) {
      return MicrophoneMode.EXPECT_AUDIO_END;
    }

    return MicrophoneMode.OPEN_MIC;
  }

  private static getUnderstandingMode(proto: AudioSessionStartPayload) {
    if (
      proto.getUnderstandingMode() ===
      AudioSessionStartPayload.UnderstandingMode.SPEECH_RECOGNITION_ONLY
    ) {
      return UnderstandingMode.SPEECH_RECOGNITION_ONLY;
    }

    return UnderstandingMode.FULL;
  }
}
