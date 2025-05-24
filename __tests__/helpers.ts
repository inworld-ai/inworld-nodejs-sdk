import {
  ClientDuplexStream,
  ClientDuplexStreamImpl,
} from '@grpc/grpc-js/build/src/call';
import { CapabilitiesConfiguration } from '@proto/ai/inworld/engine/configuration/configuration_pb';
import { AccessToken } from '@proto/ai/inworld/engine/world-engine_pb';
import {
  Actor,
  Agent,
  ControlEvent,
  ConversationEventPayload,
  CurrentSceneStatus,
  InworldPacket as ProtoPacket,
  PacketId,
  Routing,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { Capabilities, User } from '../src/common/data_structures';
import { Extension } from '../src/common/data_structures/extension';
import { protoTimestamp } from '../src/common/helpers';
import { Character } from '../src/entities/character.entity';
import {
  DialogParticipant,
  PreviousDialog,
} from '../src/entities/continuation/previous_dialog.entity';
import { InworldPacket } from '../src/entities/packets/inworld_packet.entity';
import { SessionToken } from '../src/entities/session_token.entity';
import { EventFactory } from '../src/factories/event';
import { ExtendedInworldPacket } from './data_structures';

const today = new Date();
today.setHours(today.getHours() + 1);

export const KEY = v4();
export const SECRET = v4();
export const SCENE = `workspaces/${v4()}/characters/${v4()}`;

export const createCharacter = () =>
  new Character({
    id: v4(),
    assets: {
      avatarImg: v4(),
      avatarImgOriginal: v4(),
      rpmModelUri: v4(),
      rpmImageUriPortrait: v4(),
      rpmImageUriPosture: v4(),
    },
    resourceName: v4(),
    displayName: v4(),
  });

export const createAgent = (useAssets: boolean = true) => {
  const agent = new Agent();
  const assets = useAssets
    ? new Agent.CharacterAssets()
        .setAvatarImg(v4())
        .setAvatarImgOriginal(v4())
        .setRpmModelUri(v4())
        .setRpmImageUriPortrait(v4())
        .setRpmImageUriPosture(v4())
    : undefined;

  return agent
    .setAgentId(v4())
    .setBrainName(`workspaces/${v4()}/characters/${v4()}`)
    .setCharacterAssets(assets);
};

export const convertAgentsToCharacters = (agents: Array<Agent>) => {
  return agents.map(
    (agent: Agent) =>
      new Character({
        id: agent.getAgentId(),
        assets: {
          avatarImg: agent.getCharacterAssets()?.getAvatarImg(),
          avatarImgOriginal: agent.getCharacterAssets()?.getAvatarImgOriginal(),
          rpmModelUri: agent.getCharacterAssets()?.getRpmModelUri(),
          rpmImageUriPortrait: agent
            .getCharacterAssets()
            ?.getRpmImageUriPortrait(),
          rpmImageUriPosture: agent
            .getCharacterAssets()
            ?.getRpmImageUriPosture(),
        },
        resourceName: agent.getBrainName(),
        displayName: agent.getGivenName(),
      }),
  );
};

export const generateEmptyPacket = () => {
  const rounting = new Routing().setSource(new Actor()).setTarget(new Actor());

  return new ProtoPacket()
    .setPacketId(new PacketId().setPacketId(v4()))
    .setRouting(rounting)
    .setTimestamp(protoTimestamp());
};

export const sessionProto = new AccessToken()
  .setSessionId(v4())
  .setToken(v4())
  .setType('Bearer')
  .setExpirationTime(protoTimestamp(today));

export const sessionToken = new SessionToken({
  sessionId: sessionProto.getSessionId(),
  token: sessionProto.getToken(),
  type: sessionProto.getType(),
  expirationTime: sessionProto.getExpirationTime().toDate(),
});

export const capabilitiesProps: Capabilities = {
  emotions: true,
  audio: true,
  interruptions: true,
  narratedActions: true,
  phonemes: true,
  multiModalActionPlanning: true,
  silence: true,
  debugInfo: true,
};

export const capabilities = new CapabilitiesConfiguration()
  .setAudio(true)
  .setContinuation(true)
  .setEmotions(true)
  .setInterruptions(true)
  .setPhonemeInfo(true)
  .setMultiModalActionPlanning(true)
  .setSilenceEvents(true)
  .setContinuation(true);

export const user: User = {
  fullName: 'Name',
  profile: { fields: [{ id: 'field_1', value: 'value_1' }] },
};

export const convertPacketFromProto = (proto: ProtoPacket) => {
  const packet = InworldPacket.fromProto(proto) as ExtendedInworldPacket;

  if (proto.getMutation()?.hasRegenerateResponse()) {
    const mutation = {
      regenerateResponse: {
        interactionId: proto
          .getMutation()
          .getRegenerateResponse()
          .getInteractionId(),
      },
    };
    packet.mutation = mutation;
  }

  return packet;
};

export const extendedCapabilities = new CapabilitiesConfiguration()
  .setAudio(true)
  .setEmotions(true)
  .setInterruptions(true)
  .setPhonemeInfo(true)
  .setSilenceEvents(true)
  .setRegenerateResponse(true);

export const previousState = v4();

export const extension: Extension<ExtendedInworldPacket> = {
  convertPacketFromProto,
  afterLoadScene: jest.fn(),
  beforeLoadScene: jest.fn((packets: ProtoPacket[]) => {
    return packets.map((packet: ProtoPacket) => {
      if (packet.getControl()?.hasSessionConfiguration()) {
        packet
          .getControl()
          .getSessionConfiguration()
          .setCapabilitiesConfiguration(extendedCapabilities);
      }

      return packet;
    });
  }),
};

export const simpleExtension: Extension<ExtendedInworldPacket> = {
  convertPacketFromProto,
};

const characterDisplayName = v4();
const playerDisplayName = v4();
export const phrases = [
  {
    talker: DialogParticipant.CHARACTER,
    phrase: v4(),
    talkerDisplayName: characterDisplayName,
  },
  {
    talker: DialogParticipant.PLAYER,
    phrase: v4(),
    talkerDisplayName: playerDisplayName,
  },
  {
    talker: DialogParticipant.UNKNOWN,
    phrase: v4(),
    talkerDisplayName: '',
  },
];
export const previousDialog = new PreviousDialog(phrases);

export const setTimeoutMock = (callback: any) => {
  if (typeof callback === 'function') {
    callback();
  }

  return { hasRef: () => false } as NodeJS.Timeout;
};

export const agents = [createAgent(), createAgent()];
export const characters = convertAgentsToCharacters(agents);
export const getStream = () => new ClientDuplexStreamImpl(jest.fn(), jest.fn());
export const sceneStatusEvent = new ControlEvent()
  .setAction(ControlEvent.Action.CURRENT_SCENE_STATUS)
  .setCurrentSceneStatus(new CurrentSceneStatus().setAgentsList(agents));
export const emitSceneStatusEvent =
  (stream: ClientDuplexStream<ProtoPacket, ProtoPacket>) => (resolve: any) => {
    stream.emit('data', generateEmptyPacket().setControl(sceneStatusEvent));
    resolve(true);
  };

const eventFactory = new EventFactory();
export const conversationId = v4();
export const conversationUpdated = eventFactory
  .baseProtoPacket({ conversationId })
  .setControl(
    new ControlEvent().setConversationEvent(
      new ConversationEventPayload().setEventType(
        ConversationEventPayload.ConversationEventType.UPDATED,
      ),
    ),
  );
