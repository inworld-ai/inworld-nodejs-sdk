import {
  Actor,
  AdditionalPhonemeInfo as ProtoAdditionalPhonemeInfo,
  CancelResponsesEvent,
  ControlEvent,
  CustomEvent,
  DataChunk,
  InworldPacket as ProtoPacket,
  PacketId,
  Routing,
  TextEvent,
} from '@proto/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import { v4 } from 'uuid';

import { protoTimestamp } from '../common/helpers';
import { CancelResponsesProps } from '../common/interfaces';
import { Character } from '../entities/character.entity';
import { EmotionBehavior } from '../entities/emotion-behavior.entity';
import { EmotionStrength } from '../entities/emotion-strength.entity';
import {
  AdditionalPhonemeInfo,
  InworlControlType,
  InworldPacket,
  InworldPacketType,
} from '../entities/inworld_packet.entity';

export class EventFactory {
  private character: Character = null;

  getCurrentCharacter(): Character {
    return this.character;
  }

  setCurrentCharacter(character: Character) {
    this.character = character;
  }

  dataChunk(chunk: string, type: DataChunk.DataType): ProtoPacket {
    const event = new DataChunk().setType(type).setChunk(chunk);

    return this.protoPacket().setDataChunk(event);
  }

  audioSessionStart(): ProtoPacket {
    const event = new ControlEvent().setAction(
      ControlEvent.Action.AUDIO_SESSION_START,
    );

    return this.protoPacket().setControl(event);
  }

  audioSessionEnd(): ProtoPacket {
    const event = new ControlEvent().setAction(
      ControlEvent.Action.AUDIO_SESSION_END,
    );

    return this.protoPacket().setControl(event);
  }

  text(text: string): ProtoPacket {
    const event = new TextEvent()
      .setText(text)
      .setSourceType(TextEvent.SourceType.TYPED_IN)
      .setFinal(true);
    const packet = this.packet().setUtteranceId(v4()).setInteractionId(v4());

    return this.protoPacket().setPacketId(packet).setText(event);
  }

  trigger(name: string): ProtoPacket {
    const event = new CustomEvent().setName(name);

    const packet = this.packet().setUtteranceId(v4()).setInteractionId(v4());

    return this.protoPacket().setCustom(event).setPacketId(packet);
  }

  cancelResponse(cancelResponses?: CancelResponsesProps): ProtoPacket {
    const event = new CancelResponsesEvent();

    if (cancelResponses?.interactionId) {
      event.setInteractionId(cancelResponses.interactionId);
    }

    if (cancelResponses?.utteranceId) {
      event.setUtteranceIdList(cancelResponses.utteranceId);
    }

    return this.protoPacket().setCancelresponses(event);
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
          isPlayer: source.getType() === Actor.Type.PLAYER,
          isCharacter: source.getType() === Actor.Type.AGENT,
        },
        target: {
          name: target.getName(),
          isPlayer: target.getType() === Actor.Type.PLAYER,
          isCharacter: target.getType() === Actor.Type.AGENT,
        },
      },
      ...(type === InworldPacketType.TRIGGER && {
        trigger: {
          name: proto.getCustom().getName(),
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
      ...(type === InworldPacketType.EMOTION && {
        emotions: {
          behavior: new EmotionBehavior(emotionEvent.getBehavior()),
          strength: new EmotionStrength(emotionEvent.getStrength()),
        },
      }),
      ...(type === InworldPacketType.CANCEL_RESPONSE && {
        cancelResponses: {
          interactionId: proto.getCancelresponses().getInteractionId(),
          utteranceId: proto.getCancelresponses().getUtteranceIdList(),
        },
      }),
    });
  }

  private protoPacket(): ProtoPacket {
    return new ProtoPacket()
      .setPacketId(this.packet())
      .setRouting(this.routing())
      .setTimestamp(protoTimestamp());
  }

  private routing(): Routing {
    const source = new Actor().setType(Actor.Type.PLAYER);

    const target = new Actor()
      .setType(Actor.Type.AGENT)
      .setName(this.character?.id);

    return new Routing().setSource(source).setTarget(target);
  }

  private packet(): PacketId {
    return new PacketId().setPacketId(v4());
  }

  private static getType(packet: ProtoPacket) {
    switch (true) {
      case packet.hasText():
        return InworldPacketType.TEXT;
      case packet.hasDataChunk() &&
        packet.getDataChunk().getType() === DataChunk.DataType.AUDIO:
        return InworldPacketType.AUDIO;
      case packet.hasCustom():
        return InworldPacketType.TRIGGER;
      case packet.hasControl():
        return InworldPacketType.CONTROL;
      case packet.hasEmotion():
        return InworldPacketType.EMOTION;
      case packet.hasCancelresponses():
        return InworldPacketType.CANCEL_RESPONSE;
      default:
        return InworldPacketType.UNKNOWN;
    }
  }

  private static getControlType(packet: ProtoPacket) {
    switch (packet.getControl().getAction()) {
      case ControlEvent.Action.INTERACTION_END:
        return InworlControlType.INTERACTION_END;
      default:
        return InworlControlType.UNKNOWN;
    }
  }

  private static durationToSeconds(duration: Duration) {
    return duration.getSeconds() + duration.getNanos() / 1000000000;
  }
}
