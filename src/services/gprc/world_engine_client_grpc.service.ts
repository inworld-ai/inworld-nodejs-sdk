import {
  ClientDuplexStream,
  credentials,
  Metadata,
  ServiceError,
} from '@grpc/grpc-js';
import {
  CapabilitiesConfiguration,
  SessionConfiguration,
  UserConfiguration,
} from '@proto/ai/inworld/engine/configuration/configuration_pb';
import { WorldEngineClient } from '@proto/ai/inworld/engine/world-engine_grpc_pb';
import {
  AccessToken,
  ClientRequest,
  GenerateTokenRequest,
  UserSettings,
} from '@proto/ai/inworld/engine/world-engine_pb';
import {
  Continuation,
  CurrentSceneStatus,
  InworldPacket as ProtoPacket,
} from '@proto/ai/inworld/packets/packets_pb';
import { promisify } from 'util';
import os = require('os');

import { KeySignature } from '../../auth/key_signature';
import { Config } from '../../common/config';
import { CLIENT_ID, SCENE_PATTERN } from '../../common/constants';
import {
  ApiKey,
  Awaitable,
  Extension,
  InternalClientConfiguration,
  User,
} from '../../common/data_structures';
import { grpcOptions } from '../../common/helpers';
import { Logger } from '../../common/logger';
import { SessionContinuation } from '../../entities/continuation/session_continuation.entity';
import { InworldPacket } from '../../entities/packets/inworld_packet.entity';
import { SessionToken } from '../../entities/session_token.entity';
import { EventFactory } from '../../factories/event';

const { version } = require('@root/package.json');

export interface OpenSessionProps<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  name: string;
  client?: ClientRequest;
  user?: User;
  sessionToken: SessionToken;
  sessionContinuation?: SessionContinuation;
  config: InternalClientConfiguration;
  extension: Extension<InworldPacketT>;
  onDisconnect?: () => Awaitable<void>;
  onError?: (err: ServiceError) => Awaitable<void>;
  onMessage: (message: ProtoPacket) => Awaitable<void>;
}

export interface ReopenSessionProps {
  sessionToken: SessionToken;
  onDisconnect?: () => Awaitable<void>;
  onError?: (err: ServiceError) => Awaitable<void>;
  onMessage: (message: ProtoPacket) => Awaitable<void>;
}

interface UpdateSessionProps<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  sessionToken: SessionToken;
  connection: ClientDuplexStream<ProtoPacket, ProtoPacket>;
  name: string;
  extension: Extension<InworldPacketT>;
  gameSessionId?: string;
  capabilities?: CapabilitiesConfiguration;
  sessionContinuation?: SessionContinuation;
  onMessage: (message: ProtoPacket) => Awaitable<void>;
}

export class WorldEngineClientGrpcService<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  private readonly config = Config.getInstance();
  private readonly address = this.config.getHost();
  private readonly ssl = this.config.getSSL();
  private readonly grpcOptions = { ...grpcOptions };
  private readonly client = new WorldEngineClient(
    this.config.getHost(),
    this.ssl ? credentials.createSsl() : credentials.createInsecure(),
    { ...grpcOptions },
  );

  private logger = Logger.getInstance();

  async generateSessionToken(
    apiKey: ApiKey,
    scene: string,
  ): Promise<AccessToken> {
    const metadata = new Metadata();
    const request = new GenerateTokenRequest();
    const resource = `workspaces/${SCENE_PATTERN.exec(scene)[1]}`;

    request.setKey(apiKey.key);
    request.setResourcesList([resource]);
    metadata.add(
      'authorization',
      KeySignature.getAuthorization({
        apiKey,
        host: this.config.getHost(),
      }),
    );

    const response: AccessToken = await promisify(
      this.client.generateToken.bind(this.client),
    )(request, metadata);

    this.logger.debug({
      action: 'Generate token',
      data: {
        address: this.address,
        ssl: this.ssl,
        request: request.toObject(),
        response: response.toObject(),
      },
    });

    return response;
  }

  openSession(
    props: OpenSessionProps<InworldPacketT>,
  ): Promise<
    [ClientDuplexStream<ProtoPacket, ProtoPacket>, CurrentSceneStatus]
  > {
    const { sessionToken, onDisconnect, onError, onMessage } = props;

    const metadata = this.getMetadata(sessionToken);
    const connection = this.client.openSession(metadata);

    this.logger.debug({
      action: 'Open session',
      data: {
        address: this.address,
        ssl: this.ssl,
        grpcOptions: this.grpcOptions,
      },
      sessionId: sessionToken.sessionId,
    });

    if (onDisconnect) {
      connection.on('close', onDisconnect);
    }

    if (onError) {
      connection.on('error', (err: ServiceError) => {
        onError(err);
        connection.end();
      });
    }

    this.writeInitialPackets({
      extension: props.extension,
      capabilities: props.config.capabilities,
      client: props.client,
      gameSessionId: props.config.gameSessionId,
      name: props.name,
      sessionContinuation: props.sessionContinuation,
      user: props.user,
      useDefaultClient: !props.client,
      sessionToken,
      connection,
    });

    return new Promise((resolve) => {
      connection.on(
        'data',
        this.onLoadScene({
          connection,
          resolve,
          onMessage,
        }),
      );
    });
  }

  reopenSession(
    props: ReopenSessionProps,
  ): ClientDuplexStream<ProtoPacket, ProtoPacket> {
    const { sessionToken, onDisconnect, onError, onMessage } = props;

    const metadata = this.getMetadata(sessionToken);
    const connection = this.client.openSession(metadata);

    this.logger.debug({
      action: 'Reopen session',
      data: {
        address: this.address,
        ssl: this.ssl,
        grpcOptions: this.grpcOptions,
      },
      sessionId: sessionToken.sessionId,
    });

    if (onDisconnect) {
      connection.on('close', onDisconnect);
    }

    if (onError) {
      connection.on('error', (err: ServiceError) => {
        onError(err);
        connection.end();
      });
    }

    if (onMessage) {
      connection.on('data', onMessage);
    }

    return connection;
  }

  updateSession(
    props: UpdateSessionProps<InworldPacketT>,
  ): Promise<
    [ClientDuplexStream<ProtoPacket, ProtoPacket>, CurrentSceneStatus]
  > {
    const { connection, onMessage, sessionToken } = props;

    this.logger.debug({
      action: 'Update session',
      data: {
        address: this.address,
        ssl: this.ssl,
        grpcOptions: this.grpcOptions,
      },
      sessionId: sessionToken.sessionId,
    });

    connection.removeAllListeners('data');

    this.writeInitialPackets({
      extension: props.extension,
      capabilities: props.capabilities,
      gameSessionId: props.gameSessionId,
      name: props.name,
      sessionContinuation: props.sessionContinuation,
      sessionToken,
      connection,
    });

    return new Promise((resolve) => {
      connection.on(
        'data',
        this.onLoadScene({
          connection,
          resolve,
          onMessage,
        }),
      );
    });
  }

  private onLoadScene(props: {
    connection: ClientDuplexStream<ProtoPacket, ProtoPacket>;
    resolve: (
      value: [ClientDuplexStream<ProtoPacket, ProtoPacket>, CurrentSceneStatus],
    ) => void;
    onMessage: (message: ProtoPacket) => Awaitable<void>;
  }) {
    let loaded = false;

    const { connection, onMessage, resolve } = props;

    return (packet: ProtoPacket) => {
      onMessage(packet);

      if (!loaded && packet?.getControl()?.hasCurrentSceneStatus()) {
        loaded = true;

        connection.removeAllListeners('data');

        if (onMessage) {
          connection.on('data', onMessage);
        }

        resolve([connection, packet.getControl().getCurrentSceneStatus()]);
      }
    };
  }

  private getMetadata(sessionToken: SessionToken) {
    const metadata = new Metadata();

    metadata.add('session-id', sessionToken.sessionId);
    metadata.add('authorization', `${sessionToken.type} ${sessionToken.token}`);

    return metadata;
  }

  private getClient(props: { client?: ClientRequest }) {
    const containerInfo = `${os.type()} ${os.release()} (Node.js ${
      process.version
    })`;
    const description = [CLIENT_ID, version, containerInfo];

    if (props.client?.getId()) {
      description.push(props.client.getId());
    }

    return new ClientRequest()
      .setId(CLIENT_ID)
      .setVersion(version)
      .setDescription(description.join('; '));
  }

  private getUserConfiguration(props: { user?: User }) {
    const { user } = props;

    const userConfiguration = new UserConfiguration();

    if (user?.profile?.fields?.length) {
      const settings = new UserSettings().setPlayerProfile(
        new UserSettings.PlayerProfile().setFieldsList(
          user.profile.fields.map(({ id, value }) =>
            new UserSettings.PlayerProfile.PlayerField()
              .setFieldId(id)
              .setFieldValue(value),
          ),
        ),
      );

      userConfiguration.setUserSettings(settings);
    }

    if (user?.fullName) {
      userConfiguration.setName(user.fullName);
    }

    return userConfiguration;
  }

  private getContinuation(props: {
    sessionContinuation?: SessionContinuation;
  }) {
    const { sessionContinuation } = props;

    const continuation = new Continuation();

    if (sessionContinuation?.previousState) {
      continuation
        .setContinuationType(
          Continuation.ContinuationType
            .CONTINUATION_TYPE_EXTERNALLY_SAVED_STATE,
        )
        .setExternallySavedState(sessionContinuation.previousState);
    } else if (sessionContinuation?.previousDialog) {
      continuation
        .setContinuationType(
          Continuation.ContinuationType.CONTINUATION_TYPE_DIALOG_HISTORY,
        )
        .setDialogHistory(sessionContinuation.previousDialog.toProto());
    }

    return continuation.getContinuationType() ? continuation : undefined;
  }

  private writeInitialPackets(props: {
    name: string;
    capabilities?: CapabilitiesConfiguration;
    client?: ClientRequest;
    user?: User;
    sessionContinuation?: SessionContinuation;
    gameSessionId?: string;
    useDefaultClient?: boolean;
    extension: Extension<InworldPacketT>;
    sessionToken: SessionToken;
    connection: ClientDuplexStream<ProtoPacket, ProtoPacket>;
  }) {
    const continuation = this.getContinuation(props);

    const packets: ProtoPacket[] = [
      EventFactory.sessionControl({
        ...(props.capabilities && {
          capabilities: props.capabilities,
        }),
        ...(props.gameSessionId && {
          sessionConfiguration: new SessionConfiguration().setGameSessionId(
            props.gameSessionId,
          ),
        }),
        ...((props.client || props.useDefaultClient) && {
          clientConfiguration: this.getClient({
            client: props.client,
          }),
        }),
        ...(props.user && {
          userConfiguration: this.getUserConfiguration(props),
        }),
        ...(continuation && { continuation }),
      }),
      EventFactory.loadScene(props.name),
    ];

    const finalPackets = props.extension.beforeLoadScene?.(packets) || packets;

    for (const packet of finalPackets) {
      props.connection.write(packet);

      this.logger.debug({
        action: 'Send packet',
        data: {
          packet: packet.toObject(),
        },
        sessionId: props.sessionToken.sessionId,
      });
    }
  }
}
