import {
  ActionEvent,
  Actor,
  CancelResponsesEvent,
  ControlEvent,
  CustomEvent,
  DataChunk,
  InworldPacket as ProtoPacket,
  LoadScene,
  MutationEvent,
  NarratedAction,
  PacketId,
  Routing,
  SessionControlEvent,
  TextEvent,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import {
  CancelResponsesProps,
  SessionControlProps,
} from '../common/data_structures';
import { protoTimestamp } from '../common/helpers';
import { Character } from '../entities/character.entity';
import { TriggerParameter } from '../entities/packets/trigger.entity';

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

  mutePlayback(isMuted: boolean): ProtoPacket {
    const event = new ControlEvent().setAction(
      isMuted
        ? ControlEvent.Action.TTS_PLAYBACK_MUTE
        : ControlEvent.Action.TTS_PLAYBACK_UNMUTE,
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

    return this.baseProtoPacket({ correlationId: true }).setText(event);
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

    return this.baseProtoPacket({ correlationId: true }).setCustom(event);
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
      correlationId: true,
    }).setMutation(new MutationEvent().setCancelResponses(event));
  }

  narratedAction(content: string): ProtoPacket {
    const event = new ActionEvent().setNarratedAction(
      new NarratedAction().setContent(content),
    );

    return this.baseProtoPacket({ correlationId: true }).setAction(event);
  }

  static sessionControl(props: SessionControlProps): ProtoPacket {
    const event = new SessionControlEvent();

    switch (true) {
      case !!props.capabilities:
        event.setCapabilitiesConfiguration(props.capabilities);
        break;
      case !!props.sessionConfiguration:
        event.setSessionConfiguration(props.sessionConfiguration);
        break;
      case !!props.clientConfiguration:
        event.setClientConfiguration(props.clientConfiguration);
        break;
      case !!props.userConfiguration:
        event.setUserConfiguration(props.userConfiguration);
        break;
      case !!props.continuation:
        event.setContinuation(props.continuation);
        break;
    }

    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.openSessionRouting())
      .setTimestamp(protoTimestamp())
      .setSessionControl(event);
  }

  static loadScene(name: string): ProtoPacket {
    const mutation = new MutationEvent().setLoadScene(
      new LoadScene().setName(name),
    );

    return new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(this.openSessionRouting())
      .setTimestamp(protoTimestamp())
      .setMutation(mutation);
  }

  baseProtoPacket(props?: {
    utteranceId?: boolean;
    interactionId?: boolean;
    correlationId?: boolean;
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

  private static openSessionRouting(): Routing {
    const source = new Actor().setType(Actor.Type.PLAYER);
    const target = new Actor().setType(Actor.Type.WORLD);

    return new Routing().setSource(source).setTarget(target);
  }
}
