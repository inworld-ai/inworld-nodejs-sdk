import { ControlEvent as ProtoControlEvent } from '@proto/ai/inworld/packets/packets_pb';

import { InworlControlType } from '../../common/data_structures';

export class ControlEvent {
  readonly type: InworlControlType;

  constructor({ type }: { type: InworlControlType }) {
    this.type = type;
  }

  static fromProto(proto: ProtoControlEvent) {
    return new ControlEvent({
      type: this.getControlType(proto),
    });
  }

  private static getControlType(proto: ProtoControlEvent) {
    switch (proto.getAction()) {
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
}
