import { SessionAccessToken } from '@proto/ai/inworld/studio/v1alpha/tokens_pb';
import {
  Actor,
  InworldPacket as ProtoPacket,
  PacketId,
  Routing,
} from '@proto/packets_pb';
import {
  CapabilitiesRequest,
  LoadSceneResponse,
  UserRequest,
} from '@proto/world-engine_pb';
import { v4 } from 'uuid';

import { protoTimestamp } from '../src/common/helpers';
import { Capabilities } from '../src/common/interfaces';
import { Character } from '../src/entities/character.entity';
import { SessionToken } from '../src/entities/session_token.entity';

const today = new Date();
today.setHours(today.getHours() + 1);

export const KEY = v4();
export const SECRET = v4();
export const SCENE = v4();

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

export const sessionProto = new SessionAccessToken()
  .setSessionId(v4())
  .setToken(v4())
  .setType('Bearer')
  .setExpirationTime(protoTimestamp(today));

export const session = new SessionToken({
  sessionId: sessionProto.getSessionId(),
  token: sessionProto.getToken(),
  type: sessionProto.getType(),
  expirationTime: sessionProto.getExpirationTime().toDate(),
});

export const capabilitiesProps: Capabilities = {
  emotions: true,
  audio: true,
  interruptions: true,
};

export const capabilities = new CapabilitiesRequest()
  .setAudio(true)
  .setEmotions(true)
  .setInterruptions(true)
  .setText(true)
  .setTriggers(true);

export const user = new UserRequest().setName('Name');
