import {
  ControlEvent as ProtoControlEvent,
  ConversationEventPayload,
} from '@proto/ai/inworld/packets/packets_pb';

import {
  InworlControlAction,
  InworldConversationEventType,
} from '../../common/data_structures';
import { Actor } from './routing.entity';

export interface Conversation {
  type?: InworldConversationEventType;
  participants: Actor[];
}

export class ControlEvent {
  readonly action: InworlControlAction;
  readonly description: string | undefined;
  readonly conversation: Conversation | undefined;

  constructor({
    action,
    description,
    conversation,
  }: {
    action: InworlControlAction;
    description?: string;
    conversation?: Conversation;
  }) {
    this.action = action;

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

    return new ControlEvent({
      action: this.getControlType(proto),
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
}
