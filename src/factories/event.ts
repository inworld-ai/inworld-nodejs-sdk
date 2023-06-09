import {
  Actor,
  CancelResponsesEvent,
  ControlEvent,
  CustomEvent,
  DataChunk,
  InworldPacket as ProtoPacket,
  MutationEvent,
  PacketId,
  Routing,
  TextEvent,
} from '@proto/packets_pb';
import { v4 } from 'uuid';

import { CancelResponsesProps } from '../common/data_structures';
import { protoTimestamp } from '../common/helpers';
import { Character } from '../entities/character.entity';
import { TriggerParameter } from '../entities/inworld_packet.entity';

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

    return this.baseProtoPacket({
      utteranceId: false,
      interactionId: false,
    }).setDataChunk(event);
  }

  audioSessionStart(): ProtoPacket {
    const event = new ControlEvent().setAction(
      ControlEvent.Action.AUDIO_SESSION_START,
    );

    return this.baseProtoPacket({
      utteranceId: false,
      interactionId: false,
    }).setControl(event);
  }

  audioSessionEnd(): ProtoPacket {
    const event = new ControlEvent().setAction(
      ControlEvent.Action.AUDIO_SESSION_END,
    );

    return this.baseProtoPacket({
      utteranceId: false,
      interactionId: false,
    }).setControl(event);
  }

  text(text: string): ProtoPacket {
    const event = new TextEvent()
      .setText(text)
      .setSourceType(TextEvent.SourceType.TYPED_IN)
      .setFinal(true);

    return this.baseProtoPacket().setText(event);
  }

  trigger(name: string, parameters: TriggerParameter[] = []): ProtoPacket {
    const event = new CustomEvent().setName(name);

    if (parameters.length) {
      event.setParametersList(
        parameters.map((p) =>
          new CustomEvent.Parameter().setName(p.name).setValue(p.value),
        ),
      );
    }

    return this.baseProtoPacket().setCustom(event);
  }

  cancelResponse(cancelResponses?: CancelResponsesProps): ProtoPacket {
    const event = new CancelResponsesEvent();

    if (cancelResponses?.interactionId) {
      event.setInteractionId(cancelResponses.interactionId);
    }

    if (cancelResponses?.utteranceId) {
      event.setUtteranceIdList(cancelResponses.utteranceId);
    }

    return this.baseProtoPacket({
      utteranceId: false,
      interactionId: false,
    }).setMutation(new MutationEvent().setCancelResponses(event));
  }

  baseProtoPacket(props?: { utteranceId?: boolean; interactionId?: boolean }) {
    const packetId = new PacketId().setPacketId(v4());

    if (props?.utteranceId !== false) {
      packetId.setUtteranceId(v4());
    }

    if (props?.interactionId !== false) {
      packetId.setInteractionId(v4());
    }

    return new ProtoPacket()
      .setPacketId(packetId)
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
}
