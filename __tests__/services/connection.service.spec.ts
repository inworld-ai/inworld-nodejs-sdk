import { ClientDuplexStreamImpl } from '@grpc/grpc-js/build/src/call';
import { WorldEngineClient } from '@proto/ai/inworld/engine/world-engine_grpc_pb';
import {
  ActionEvent,
  Actor,
  ControlEvent,
  CurrentSceneStatus,
  CustomEvent,
  InworldPacket as ProtoPacket,
  LatencyReportEvent,
  LoadedScene,
  NarratedAction,
  PacketId,
  PerceivedLatencyReport,
  PingPongReport,
  Routing,
  TextEvent,
} from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { ConversationState } from '../../src/common/data_structures';
import {
  calculateTimeDifference,
  protoTimestamp,
} from '../../src/common/helpers';
import { Logger } from '../../src/common/logger';
import { Character } from '../../src/entities/character.entity';
import { InworldError } from '../../src/entities/error.entity';
import { InworldPacket } from '../../src/entities/packets/inworld_packet.entity';
import { Scene } from '../../src/entities/scene.entity';
import { Session } from '../../src/entities/session.entity';
import { SessionToken } from '../../src/entities/session_token.entity';
import { EventFactory } from '../../src/factories/event';
import { ConnectionService } from '../../src/services/connection.service';
import { ConversationService } from '../../src/services/conversation.service';
import { StateSerializationClientGrpcService } from '../../src/services/gprc/state_serialization_client_grpc.service';
import { WorldEngineClientGrpcService } from '../../src/services/gprc/world_engine_client_grpc.service';
import {
  agents,
  capabilitiesProps,
  characters,
  conversationId,
  createAgent,
  emitSceneStatusEvent,
  generateEmptyPacket,
  getStream,
  KEY,
  previousState,
  SCENE,
  SECRET,
  sessionProto,
  sessionToken,
  setTimeoutMock,
  user,
} from '../helpers';

// eslint-disable-next-line no-console
const onErrorLog = (err: InworldError) => console.log(err.message);
const onError = jest.fn();
const onMessage = jest.fn();
const onDisconnect = jest.fn();

const sceneProto = new LoadedScene().setAgentsList(agents);
const timeoutMockCalls = (timeout: any) =>
  timeout.mock.calls.filter((ctx: any) => ctx[1] !== 0).length;
const DISCONNECT_TIMEOUT = 100;

beforeEach(() => {
  jest.clearAllMocks();
});

test('should return event factory', () => {
  const connection = new ConnectionService({
    apiKey: {
      key: KEY,
      secret: SECRET,
    },
    onError: onErrorLog,
  });

  expect(connection.getEventFactory()).toBeInstanceOf(EventFactory);
});

test('should generate session token', async () => {
  const connection = new ConnectionService({
    apiKey: {
      key: KEY,
      secret: SECRET,
    },
    onError: onErrorLog,
  });
  const generateSessionToken = jest
    .spyOn(connection, 'generateSessionToken')
    .mockImplementationOnce(() => Promise.resolve(sessionToken));

  const result = await connection.generateSessionToken();

  expect(generateSessionToken).toHaveBeenCalledTimes(1);
  expect(result).toEqual(sessionToken);
});

describe('message', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should receive message', async () => {
    const stream = getStream();
    const onMessage = jest.fn();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { capabilities: capabilitiesProps },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const routing = new Routing().setSource(new Actor()).setTarget(new Actor());

    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(routing)
      .setTimestamp(protoTimestamp());

    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    const openSession = jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    stream.emit('data', packet);

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(onMessage).toHaveBeenCalledTimes(2);
    expect(onMessage.mock.calls[1][0]).toEqual(InworldPacket.fromProto(packet));
  });

  test('should receive warn message', async () => {
    const stream = getStream();
    const loggerWarn = jest.spyOn(Logger.prototype, 'warn');
    const onMessage = jest.fn();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { capabilities: capabilitiesProps },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const routing = new Routing().setSource(new Actor()).setTarget(new Actor());
    const control = new ControlEvent().setAction(ControlEvent.Action.WARNING);
    const packet = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(routing)
      .setControl(control)
      .setTimestamp(protoTimestamp());

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    stream.emit('data', packet);
    expect(onMessage).toHaveBeenCalledTimes(2);
    expect(onMessage).toHaveBeenCalledWith(InworldPacket.fromProto(packet));
    expect(loggerWarn).toHaveBeenCalledWith({
      action: 'Receive warning packet',
      data: {
        packet: packet.toObject(),
      },
      sessionId: sessionToken.sessionId,
    });
  });

  test('should send perceived latency event for text', async () => {
    jest
      .spyOn(ConversationService.prototype, 'getConversationId')
      .mockImplementation(() => conversationId);

    const stream = getStream();

    const write = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementation(jest.fn());

    const onMessage = jest.fn();

    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { capabilities: capabilitiesProps },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const routing = new Routing().setSource(new Actor()).setTarget(new Actor());

    const message = new TextEvent();
    message.setText(JSON.stringify(v4()));

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    const interactionId = v4();

    const packetIDRequest = new PacketId()
      .setPacketId(v4())
      .setInteractionId(interactionId);

    const packetRequest = new ProtoPacket()
      .setPacketId(packetIDRequest)
      .setText(message)
      .setRouting(routing)
      .setTimestamp(protoTimestamp());

    await connection.send(() => packetRequest);

    expect(write).toHaveBeenCalled();

    const packetIDResponse = new PacketId()
      .setPacketId(v4())
      .setInteractionId(interactionId);

    const packetResponse = new ProtoPacket()
      .setPacketId(packetIDResponse)
      .setText(message)
      .setRouting(routing)
      .setTimestamp(protoTimestamp());

    stream.emit('data', packetResponse);

    const resultReport =
      write.mock.calls[write.mock.calls.length - 1][0].toObject();
    const perceivedLatency = resultReport.latencyReport.perceivedLatency;

    const duration = calculateTimeDifference(
      packetRequest.getTimestamp(),
      packetResponse.getTimestamp(),
    );

    expect(onMessage).toHaveBeenCalledTimes(2);
    expect(onMessage).toHaveBeenCalledWith(
      InworldPacket.fromProto(packetResponse),
    );
    expect(perceivedLatency.latency.seconds).toEqual(duration.getSeconds());
    expect(perceivedLatency.latency.nanos).toEqual(duration.getNanos());
    expect(perceivedLatency.precision).toEqual(
      PerceivedLatencyReport.Precision.NON_SPEECH,
    );
    expect(resultReport.packetId.interactionId).toEqual(
      packetResponse.getPacketId().getInteractionId(),
    );
  });

  test('should send perceived latency event for trigger', async () => {
    jest
      .spyOn(ConversationService.prototype, 'getConversationId')
      .mockImplementation(() => conversationId);

    const stream = getStream();

    const write = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementation(jest.fn());

    const onMessage = jest.fn();

    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { capabilities: capabilitiesProps },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const routing = new Routing().setSource(new Actor()).setTarget(new Actor());

    const message = new CustomEvent();
    message.setName(JSON.stringify(v4())).setType(CustomEvent.Type.TRIGGER);

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    const interactionId = v4();

    const packetIDRequest = new PacketId()
      .setPacketId(v4())
      .setInteractionId(interactionId);

    const packetRequest = new ProtoPacket()
      .setPacketId(packetIDRequest)
      .setCustom(message)
      .setRouting(routing)
      .setTimestamp(protoTimestamp());

    await connection.send(() => packetRequest);

    expect(write).toHaveBeenCalled();

    const packetIDResponse = new PacketId()
      .setPacketId(v4())
      .setInteractionId(interactionId);

    const packetResponse = new ProtoPacket()
      .setPacketId(packetIDResponse)
      .setControl(
        new ControlEvent().setAction(ControlEvent.Action.INTERACTION_END),
      )
      .setRouting(routing)
      .setTimestamp(protoTimestamp());

    stream.emit('data', packetResponse);

    const resultReport =
      write.mock.calls[write.mock.calls.length - 1][0].toObject();
    const perceivedLatency = resultReport.latencyReport.perceivedLatency;

    const duration = calculateTimeDifference(
      packetRequest.getTimestamp(),
      packetResponse.getTimestamp(),
    );

    expect(onMessage).toHaveBeenCalledTimes(2);
    expect(onMessage).toHaveBeenCalledWith(
      InworldPacket.fromProto(packetResponse),
    );
    expect(perceivedLatency.latency.seconds).toEqual(duration.getSeconds());
    expect(perceivedLatency.latency.nanos).toEqual(duration.getNanos());
    expect(perceivedLatency.precision).toEqual(
      PerceivedLatencyReport.Precision.NON_SPEECH,
    );
    expect(resultReport.packetId.interactionId).toEqual(
      packetResponse.getPacketId().getInteractionId(),
    );
  });

  test('should send perceived latency event for narrated action', async () => {
    jest
      .spyOn(ConversationService.prototype, 'getConversationId')
      .mockImplementation(() => conversationId);

    const stream = getStream();

    const write = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementation(jest.fn());

    const onMessage = jest.fn();

    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { capabilities: capabilitiesProps },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const routing = new Routing().setSource(new Actor()).setTarget(new Actor());

    const message = new ActionEvent();
    message.setNarratedAction(new NarratedAction().setContent(v4()));

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    const interactionId = v4();

    const packetIDRequest = new PacketId()
      .setPacketId(v4())
      .setInteractionId(interactionId);

    const packetRequest = new ProtoPacket()
      .setPacketId(packetIDRequest)
      .setAction(message)
      .setRouting(routing)
      .setTimestamp(protoTimestamp());

    await connection.send(() => packetRequest);

    expect(write).toHaveBeenCalled();

    const packetIDResponse = new PacketId()
      .setPacketId(v4())
      .setInteractionId(interactionId);

    const packetResponse = new ProtoPacket()
      .setPacketId(packetIDResponse)
      .setControl(
        new ControlEvent().setAction(ControlEvent.Action.INTERACTION_END),
      )
      .setRouting(routing)
      .setTimestamp(protoTimestamp());

    stream.emit('data', packetResponse);

    const resultReport =
      write.mock.calls[write.mock.calls.length - 1][0].toObject();
    const perceivedLatency = resultReport.latencyReport.perceivedLatency;

    const duration = calculateTimeDifference(
      packetRequest.getTimestamp(),
      packetResponse.getTimestamp(),
    );

    expect(onMessage).toHaveBeenCalledTimes(2);
    expect(onMessage).toHaveBeenCalledWith(
      InworldPacket.fromProto(packetResponse),
    );
    expect(perceivedLatency.latency.seconds).toEqual(duration.getSeconds());
    expect(perceivedLatency.latency.nanos).toEqual(duration.getNanos());
    expect(perceivedLatency.precision).toEqual(
      PerceivedLatencyReport.Precision.NON_SPEECH,
    );
    expect(resultReport.packetId.interactionId).toEqual(
      packetResponse.getPacketId().getInteractionId(),
    );
  });

  test('should receive ping and send pong event', async () => {
    const stream = getStream();
    const write = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementation(jest.fn());
    const onMessage = jest.fn();

    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: { capabilities: capabilitiesProps },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const routing = new Routing().setSource(new Actor()).setTarget(new Actor());

    const packetId = new PacketId().setPacketId(v4());
    const timestamp = protoTimestamp();

    const eventRequest = new LatencyReportEvent().setPingPong(
      new PingPongReport()
        .setPingPacketId(packetId)
        .setPingTimestamp(timestamp)
        .setType(PingPongReport.Type.PING),
    );

    const packetRequest = new ProtoPacket()
      .setPacketId(new PacketId().setPacketId(v4()))
      .setRouting(routing)
      .setLatencyReport(eventRequest)
      .setTimestamp(timestamp);

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    stream.emit('data', packetRequest);

    expect(write).toHaveBeenCalledTimes(3);
    const result = write.mock.calls[write.mock.calls.length - 1][0].toObject();
    expect(result.latencyReport.pingPong.type).toEqual(
      PingPongReport.Type.PONG,
    );
    expect(result.latencyReport.pingPong.pingPacketId.packetId).toEqual(
      packetRequest.getPacketId().getPacketId(),
    );
  });

  test('should replace scene characters', async () => {
    let count = 0;
    let currentCharacters: Character[];
    const newAgents = [createAgent(), createAgent()];
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities: capabilitiesProps,
      },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage: async (packet) => {
        count++;

        if (count === 2) {
          const newCharacters = await connection.getCharactersList();

          expect(packet.isSceneMutationResponse()).toEqual(true);
          expect(newCharacters[0].id).not.toBe(currentCharacters[0].id);
          expect(newCharacters[1].id).not.toBe(currentCharacters[1].id);
          expect(newCharacters[0].id).toEqual(newAgents[0].getAgentId());
          expect(newCharacters[1].id).toEqual(newAgents[1].getAgentId());
        }
      },
      onDisconnect,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    currentCharacters = await connection.getCharactersList();

    const packet = generateEmptyPacket().setControl(
      new ControlEvent()
        .setAction(ControlEvent.Action.CURRENT_SCENE_STATUS)
        .setCurrentSceneStatus(
          new CurrentSceneStatus().setAgentsList(newAgents),
        ),
    );

    stream.emit('data', packet);
  });

  test('should add and remove characters', async () => {
    let count = 0;
    let currentCharacters: Character[];
    const newAgents = [createAgent(), createAgent()];
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities: capabilitiesProps,
      },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage: async (packet) => {
        count++;

        if (count === 2) {
          const newCharacters = await connection.getCharactersList();

          expect(packet.isSceneMutationResponse()).toEqual(true);
          expect(newCharacters[0].id).toEqual(currentCharacters[0].id);
          expect(newCharacters[1].id).toEqual(currentCharacters[1].id);
          expect(newCharacters[2].id).toEqual(newAgents[0].getAgentId());
          expect(newCharacters[3].id).toEqual(newAgents[1].getAgentId());

          connection.removeCharacters([
            newCharacters[0].resourceName,
            newCharacters[1].resourceName,
          ]);
          expect((await connection.getCharactersList()).length).toEqual(2);
        }
      },
      onDisconnect,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    currentCharacters = await connection.getCharactersList();

    const packet = generateEmptyPacket().setControl(
      new ControlEvent()
        .setAction(ControlEvent.Action.CURRENT_SCENE_STATUS)
        .setCurrentSceneStatus(
          new CurrentSceneStatus().setAgentsList([...agents, ...newAgents]),
        ),
    );

    stream.emit('data', packet);
  });
});

describe('getSessionState', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: {
        key: KEY,
        secret: SECRET,
      },
      name: SCENE,
      onError: onErrorLog,
    });
  });

  test('should get state', async () => {
    const sessionState = {
      state: previousState,
      creationTime: protoTimestamp().toDate().toISOString(),
    };
    const generateSessionToken = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionProto));
    const getSessionState = jest
      .spyOn(StateSerializationClientGrpcService.prototype, 'getSessionState')
      .mockImplementationOnce(() => Promise.resolve(sessionState));

    const result = await connection.getSessionState();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(getSessionState).toHaveBeenCalledTimes(1);
    expect(result).toEqual(sessionState);
  });

  test('should catch error and pass it to handler', async () => {
    connection = new ConnectionService({
      apiKey: {
        key: KEY,
        secret: SECRET,
      },
      name: SCENE,
      onError,
    });

    const err = new Error();
    const generateSessionToken = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionProto));
    const getSessionState = jest
      .spyOn(StateSerializationClientGrpcService.prototype, 'getSessionState')
      .mockImplementationOnce(() => {
        throw err;
      });

    await connection.getSessionState();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(getSessionState).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(err);
  });
});

describe('open', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });
  });

  test('should execute without errors', async () => {
    const stream = getStream();
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();

    const loaded = await connection.getCharactersList();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(loaded[0].id).toBe(characters[0].id);
    expect(loaded[1].id).toBe(characters[1].id);
  });

  test('should call external generate session token', async () => {
    const stream = getStream();
    const generateSessionTokenFn = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
      generateSessionToken: generateSessionTokenFn,
    });

    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();

    await connection.getCharactersList();

    expect(generateSessionToken).toHaveBeenCalledTimes(0);
    expect(generateSessionTokenFn).toHaveBeenCalledTimes(1);
  });

  test('should call getter and setter for session', async () => {
    const stream = getStream();
    const sessionGetterSetter = {
      get: jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          scene: Scene.fromProto(new LoadedScene().setSceneName(SCENE)),
          sessionToken,
        } as Session),
      ),
      set: jest.fn(),
    };
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
      sessionGetterSetter,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();

    expect(sessionGetterSetter.get).toHaveBeenCalledTimes(1);
    expect(sessionGetterSetter.set).toHaveBeenCalledTimes(1);
  });

  test('should catch error on load scene and pass it to handler', async () => {
    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    const err = new Error();
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.reject(err));

    await connection.open();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(err);
  });

  test('should catch error on connection establishing and pass it to handler', async () => {
    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const err = new Error();
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => {
        throw err;
      });

    await connection.open();

    expect(openSession).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(err);
  });

  test('should inactivate connection on disconnect stream event', async () => {
    const stream = getStream();

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    const conversationService = new ConversationService(connection, {
      participants: [characters[0].resourceName, characters[1].resourceName],
      addCharacters: jest.fn(),
    });

    connection.conversations.set(conversationService.getConversationId(), {
      service: conversationService,
      state: ConversationState.ACTIVE,
    });

    await connection.open();

    expect(connection.isActive()).toEqual(true);

    stream.emit('close');

    expect(connection.isActive()).toEqual(false);
    expect(onDisconnect).toHaveBeenCalledTimes(1);
    expect(
      connection.conversations.get(conversationService.getConversationId())
        ?.state,
    ).toEqual(ConversationState.INACTIVE);
  });

  test('should not throw error on close event without onDisconnect handler', async () => {
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError,
      onMessage,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    await connection.open();

    expect(connection.isActive()).toEqual(true);

    stream.emit('close');

    expect(connection.isActive()).toEqual(false);
  });

  test('should not generate actual token twice', async () => {
    const stream = getStream();
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();
    await connection.open();

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
  });

  test('should regenerate expired token', async () => {
    const stream = getStream();
    const expiredSession = new SessionToken({
      ...sessionToken,
      expirationTime: new Date(),
    });

    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(expiredSession))
      .mockImplementationOnce(() => Promise.resolve(expiredSession));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementation(() => Promise.resolve([stream, sceneProto]));
    const reopenSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'reopenSession')
      .mockImplementation(() => stream);

    await connection.open();

    connection.close();

    await connection.open();

    expect(generateSessionToken).toHaveBeenCalledTimes(2);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(reopenSession).toHaveBeenCalledTimes(1);
  });

  test('should schedule disconnect', async () => {
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities: capabilitiesProps,
      },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const close = jest.spyOn(connection, 'close');

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    const setTimeout = jest
      .spyOn(global, 'setTimeout')
      .mockImplementationOnce(setTimeoutMock);

    await connection.open();

    expect(timeoutMockCalls(setTimeout)).toEqual(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      DISCONNECT_TIMEOUT,
    );

    expect(close).toHaveBeenCalledTimes(1);
  });
});

describe('open manually', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should throw error in case of openManually call without autoreconnect', async () => {
    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    await connection.openManually();

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toEqual(
      'Impossible to open connection manually with `autoReconnect` enabled',
    );
  });

  test('should throw error in case openManually call with active connection', async () => {
    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: {
        connection: { autoReconnect: false },
        capabilities: capabilitiesProps,
      },
      user,
      onError,
      onMessage,
      onDisconnect,
    });

    const isActive = jest
      .spyOn(connection, 'isActive')
      .mockImplementationOnce(() => true);

    await connection.openManually();

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toEqual(
      'Connection is already open',
    );
    expect(isActive).toHaveBeenCalledTimes(1);
  });

  test('should open connection', async () => {
    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: {
        connection: { autoReconnect: false },
        capabilities: capabilitiesProps,
      },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const isActive = jest
      .spyOn(connection, 'isActive')
      .mockImplementationOnce(() => false);
    const open = jest
      .spyOn(ConnectionService.prototype, 'open')
      .mockImplementationOnce(jest.fn());
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));

    await connection.openManually();

    expect(isActive).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledTimes(1);
  });
});

describe('change scene', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });
  });

  test('should execute without errors', async () => {
    const stream = getStream();
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));
    const updateSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'updateSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();
    await connection.change(`workspaces/${v4()}/characters/${v4()}`);

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(updateSession).toHaveBeenCalledTimes(1);
  });

  test('should reopen connection at first', async () => {
    const stream = getStream();
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));
    const updateSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'updateSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));
    const reopenSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'reopenSession')
      .mockImplementationOnce(jest.fn());

    await connection.open();

    jest.spyOn(connection, 'isActive').mockImplementation(() => false);

    await connection.change(`workspaces/${v4()}/characters/${v4()}`);

    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(reopenSession).toHaveBeenCalledTimes(1);
    expect(updateSession).toHaveBeenCalledTimes(1);
  });

  test('should throw error if scene is not loaded yet', async () => {
    await expect(
      connection.change(`workspaces/${v4()}/characters/${v4()}`),
    ).rejects.toEqual(
      new Error('Unable to change scene that is not loaded yet'),
    );
  });
});

describe('close', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should skip for empty stream', () => {
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      onError: onErrorLog,
    });
    const end = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'end')
      .mockImplementationOnce(jest.fn());

    connection.close();

    expect(end).toHaveBeenCalledTimes(0);
  });

  test('should execute for existing stream', async () => {
    const stream = getStream();
    const loggerDebug = jest.spyOn(Logger.prototype, 'debug');
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });
    const cancel = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'cancel')
      .mockImplementationOnce(jest.fn());
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.open();

    connection.close();

    expect(cancel).toHaveBeenCalledTimes(1);
    expect(loggerDebug).toHaveBeenCalledTimes(1);
  });
});

describe('send', () => {
  const loggerDebug = jest.spyOn(Logger.prototype, 'debug');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should skip for empty stream', async () => {
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      onError: onErrorLog,
    });
    const write = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementationOnce(jest.fn());

    jest.spyOn(connection, 'isActive').mockImplementation(() => true);

    await connection.send(generateEmptyPacket);

    expect(write).toHaveBeenCalledTimes(0);
  });

  test('should execute for existing stream', async () => {
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });
    const write = jest
      .spyOn(ClientDuplexStreamImpl.prototype, 'write')
      .mockImplementationOnce(jest.fn());
    const open = jest.spyOn(ConnectionService.prototype, 'open');
    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    await connection.send(generateEmptyPacket);

    expect(open).toHaveBeenCalledTimes(1);
    expect(write).toHaveBeenCalledTimes(1);
    expect(loggerDebug).toHaveBeenCalledTimes(1);
  });

  test('should throw error in case of connection is inactive on send call', async () => {
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { autoReconnect: false },
        capabilities: capabilitiesProps,
      },
      onError,
    });
    const isActive = jest
      .spyOn(connection, 'isActive')
      .mockImplementationOnce(() => false);
    const open = jest.spyOn(ConnectionService.prototype, 'open');

    await connection.send(generateEmptyPacket);

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0].message).toEqual(
      'Unable to send data due inactive connection',
    );
    expect(isActive).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledTimes(0);
  });

  test('should schedule disconnect', async () => {
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities: capabilitiesProps,
      },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    const close = jest.spyOn(connection, 'close');

    jest.spyOn(connection, 'isActive').mockImplementation(() => true);

    const setTimeout = jest
      .spyOn(global, 'setTimeout')
      .mockImplementationOnce(setTimeoutMock);

    await connection.send(generateEmptyPacket);

    expect(timeoutMockCalls(setTimeout)).toEqual(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      DISCONNECT_TIMEOUT,
    );

    expect(close).toHaveBeenCalledTimes(1);
  });

  test('should load scene once in case of simultaneously sent packets', async () => {
    const stream = getStream();
    const connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      config: {
        connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        capabilities: capabilitiesProps,
      },
      name: SCENE,
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });

    jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementation(() => Promise.resolve(sessionToken));

    jest
      .spyOn(WorldEngineClient.prototype, 'openSession')
      .mockImplementationOnce(() => {
        setTimeout(() => new Promise(emitSceneStatusEvent(stream)), 0);
        return stream;
      });

    const protoPackets: ProtoPacket[] = [];
    const send = () => {
      const proto = generateEmptyPacket();
      protoPackets.push(proto);
      return proto;
    };

    await Promise.all([connection.send(send), connection.send(send)]).then(
      (values) => {
        expect(values[0]).toEqual(InworldPacket.fromProto(protoPackets[0]));
        expect(values[1]).toEqual(InworldPacket.fromProto(protoPackets[1]));
      },
    );
  });
});

describe('getCharactersList', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });
  });

  test("should load scene if it's required", async () => {
    const stream = getStream();
    const getCurrentCharacter = jest.spyOn(
      EventFactory.prototype,
      'getCurrentCharacter',
    );
    const setCurrentCharacter = jest.spyOn(
      EventFactory.prototype,
      'setCurrentCharacter',
    );
    const generateSessionToken = jest
      .spyOn(connection, 'generateSessionToken')
      .mockImplementationOnce(() => Promise.resolve(sessionToken))
      .mockImplementationOnce(() => Promise.resolve(sessionToken));
    const openSession = jest
      .spyOn(WorldEngineClientGrpcService.prototype, 'openSession')
      .mockImplementationOnce(() => Promise.resolve([stream, sceneProto]));

    const loadedCharactersFirst = await connection.getCharactersList();
    const loadedCharactersSecond = await connection.getCharactersList();

    expect(loadedCharactersFirst).toEqual(characters);
    expect(loadedCharactersSecond).toEqual(characters);
    expect(generateSessionToken).toHaveBeenCalledTimes(1);
    expect(openSession).toHaveBeenCalledTimes(1);
    expect(setCurrentCharacter).toHaveBeenCalledTimes(1);
    expect(getCurrentCharacter).toHaveBeenCalledTimes(1);
  });
});

describe('character', () => {
  let connection: ConnectionService;

  beforeEach(() => {
    jest.clearAllMocks();

    connection = new ConnectionService({
      apiKey: { key: KEY, secret: SECRET },
      name: SCENE,
      config: { capabilities: capabilitiesProps },
      user,
      onError: onErrorLog,
      onMessage,
      onDisconnect,
    });
  });

  test('should return current character', async () => {
    const getCharactersList = jest
      .spyOn(connection, 'getCharactersList')
      .mockImplementationOnce(jest.fn());

    const getCurrentCharacter = jest
      .spyOn(EventFactory.prototype, 'getCurrentCharacter')
      .mockImplementationOnce(() => characters[0]);

    const result = await connection.getCurrentCharacter();

    expect(result).toEqual(characters[0]);
    expect(getCharactersList).toHaveBeenCalledTimes(1);
    expect(getCurrentCharacter).toHaveBeenCalledTimes(1);
  });

  test('should set current character', async () => {
    const setCurrentCharacter = jest.spyOn(
      EventFactory.prototype,
      'setCurrentCharacter',
    );
    connection.setCurrentCharacter(characters[0]);

    expect(setCurrentCharacter).toHaveBeenCalledTimes(1);
    expect(setCurrentCharacter).toHaveBeenCalledWith(characters[0]);
  });

  test('should find character by id', () => {
    jest
      .spyOn(Scene.prototype, 'getCharactersByIds')
      .mockImplementation((ids) => {
        return characters.filter((character) => ids.includes(character.id));
      });

    expect(connection.getCharactersByIds([characters[0].id])[0]).toEqual(
      characters[0],
    );
    expect(connection.getCharactersByIds([characters[1].id])[0]).toEqual(
      characters[1],
    );
  });

  test('should find character by resource name', () => {
    jest
      .spyOn(Scene.prototype, 'getCharactersByResourceNames')
      .mockImplementation((names) => {
        return characters.filter((character) =>
          names.includes(character.resourceName),
        );
      });

    expect(
      connection.getCharactersByResourceNames([characters[0].resourceName])[0],
    ).toEqual(characters[0]);
    expect(
      connection.getCharactersByResourceNames([characters[1].resourceName])[0],
    ).toEqual(characters[1]);
  });

  test('should return undefined if character is not found', () => {
    expect(connection.getCharactersByIds([v4()])).toEqual([]);
    expect(connection.getCharactersByResourceNames([v4()])).toEqual([]);
  });
});
