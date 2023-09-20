import {
  Actor,
  InworldPacket as ProtoPacket,
  PacketId,
  Routing,
} from '@proto/packets_pb';
import {
  AccessToken,
  CapabilitiesRequest,
  LoadSceneRequest,
  LoadSceneResponse,
  PreviousDialog as PreviousDialogProto,
  SessionContinuation,
} from '@proto/world-engine_pb';
import { v4 } from 'uuid';

import { Capabilities, Extension, User } from '../src/common/data_structures';
import { protoTimestamp } from '../src/common/helpers';
import { Character } from '../src/entities/character.entity';
import {
  DialogParticipant,
  PreviousDialog,
} from '../src/entities/continuation/previous_dialog.entity';
import { InworldPacket } from '../src/entities/inworld_packet.entity';
import { SessionToken } from '../src/entities/session_token.entity';
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
  const agent = new LoadSceneResponse.Agent();
  const assets = useAssets
    ? new LoadSceneResponse.Agent.CharacterAssets()
        .setAvatarImg(v4())
        .setAvatarImgOriginal(v4())
        .setRpmModelUri(v4())
        .setRpmImageUriPortrait(v4())
        .setRpmImageUriPosture(v4())
    : undefined;

  return agent.setAgentId(v4()).setBrainName(v4()).setCharacterAssets(assets);
};

export const convertAgentsToCharacters = (
  agents: Array<LoadSceneResponse.Agent>,
) => {
  return agents.map(
    (agent: LoadSceneResponse.Agent) =>
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
  phonemes: true,
  silence: true,
  continuation: true,
};

export const capabilities = new CapabilitiesRequest()
  .setAudio(true)
  .setContinuation(true)
  .setEmotions(true)
  .setInterruptions(true)
  .setPhonemeInfo(true)
  .setSilenceEvents(true)
  .setText(true)
  .setTriggers(true);

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

export const extendedCapabilities = new CapabilitiesRequest()
  .setAudio(true)
  .setEmotions(true)
  .setInterruptions(true)
  .setPhonemeInfo(true)
  .setSilenceEvents(true)
  .setText(true)
  .setTriggers(true)
  .setRegenerateResponse(true);

const previousDialogProto = new PreviousDialogProto().setPhrasesList([
  new PreviousDialogProto.Phrase()
    .setPhrase(v4())
    .setTalker(PreviousDialogProto.DialogParticipant.CHARACTER),
  new PreviousDialogProto.Phrase()
    .setPhrase(v4())
    .setTalker(PreviousDialogProto.DialogParticipant.PLAYER),
]);

export const sessionContinuation = new SessionContinuation().setPreviousDialog(
  previousDialogProto,
);

export const extension: Extension<ExtendedInworldPacket> = {
  convertPacketFromProto,
  afterLoadScene: jest.fn(),
  beforeLoadScene: jest.fn((req: LoadSceneRequest) => {
    req
      .setCapabilities(extendedCapabilities)
      .setSessionContinuation(sessionContinuation);

    return req;
  }),
};

export const phrases = [
  {
    talker: DialogParticipant.CHARACTER,
    phrase: v4(),
  },
  {
    talker: DialogParticipant.PLAYER,
    phrase: v4(),
  },
  {
    talker: DialogParticipant.UNKNOWN,
    phrase: v4(),
  },
];
export const previousDialog = new PreviousDialog(phrases);

export const setTimeoutMock = (callback: any) => {
  if (typeof callback === 'function') {
    callback();
  }

  return { hasRef: () => false } as NodeJS.Timeout;
};
