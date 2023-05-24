import { InworldPacket } from '../src/entities/inworld_packet.entity';

export interface RegenerateResponse {
  interactionId?: string;
}

export interface MutationEvent {
  regenerateResponse?: RegenerateResponse;
}

export interface ExtendedInworldPacket extends InworldPacket {
  mutation: MutationEvent;
}
