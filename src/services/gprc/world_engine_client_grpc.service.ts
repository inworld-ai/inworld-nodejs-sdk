import {
  ClientDuplexStream,
  credentials,
  Metadata,
  ServiceError,
} from '@grpc/grpc-js';
import {
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
import { InworldPacket } from '../../entities/inworld_packet.entity';
import { Scene } from '../../entities/scene.entity';
import { SessionToken } from '../../entities/session_token.entity';
import { EventFactory } from '../../factories/event';

const { version } = require('@root/package.json');

export interface SessionProps<
  InworldPacketT extends InworldPacket = InworldPacket,
> {
  name: string;
  client?: ClientRequest;
  user?: User;
  sessionToken: SessionToken;
  sessionContinuation?: SessionContinuation;
  config: InternalClientConfiguration;
  extension?: Extension<InworldPacketT>;
  onDisconnect?: () => Awaitable<void>;
  onError?: (err: ServiceError) => Awaitable<void>;
  onMessage?: (message: ProtoPacket) => Awaitable<void>;
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
        metadata: metadata.toJSON(),
        request: request.toObject(),
        response: response.toObject(),
      },
    });

    return response;
  }

  openSession(
    props: SessionProps<InworldPacketT>,
  ): Promise<[ClientDuplexStream<ProtoPacket, ProtoPacket>, Scene]> {
    const { sessionToken, onDisconnect, onError, onMessage } = props;

    const metadata = this.getMetadata(sessionToken);
    const connection = this.client.openSession(metadata);

    this.logger.debug({
      action: 'Open session',
      data: {
        address: this.address,
        ssl: this.ssl,
        grpcOptions: this.grpcOptions,
        metadata: metadata.toJSON(),
      },
      sessionId: sessionToken.sessionId,
    });

    const finalPackets = this.getPackets(props);

    if (onDisconnect) {
      connection.on('close', onDisconnect);
    }

    if (onError) {
      connection.on('error', (err: ServiceError) => {
        onError(err);
        connection.end();
      });
    }

    let loaded = false;

    return new Promise((resolve, reject) => {
      connection.on('data', async (packet: ProtoPacket) => {
        if (!loaded && packet?.hasSessionControlResponse()) {
          loaded = true;

          const sceneProto = packet.getSessionControlResponse();

          props.extension?.afterLoadScene?.(sceneProto);

          connection.removeAllListeners('data');

          if (onMessage) {
            connection.addListener('data', onMessage);
          }

          resolve([connection, Scene.fromProto(sceneProto)]);
        } else {
          const err = new Error(
            'Unexpected packet received during scene loading',
          );

          reject(err);
        }
      });

      for (const packet of finalPackets) {
        connection.write(packet);
      }
    });
  }

  private getMetadata(sessionToken: SessionToken) {
    const metadata = new Metadata();

    metadata.add('session-id', sessionToken.sessionId);
    metadata.add('authorization', `${sessionToken.type} ${sessionToken.token}`);

    return metadata;
  }

  private getClient(props: SessionProps<InworldPacketT>) {
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

  private getUserConfiguration(props: SessionProps<InworldPacketT>) {
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

  private getContinuation(props: SessionProps<InworldPacketT>) {
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

    return continuation;
  }

  private getPackets(props: SessionProps<InworldPacketT>) {
    const packets: ProtoPacket[] = [
      EventFactory.sessionControl({
        capabilities: props.config.capabilities,
      }),
    ];

    if (props.config.gameSessionId) {
      packets.push(
        EventFactory.sessionControl({
          sessionConfiguration: new SessionConfiguration().setGameSessionId(
            props.config.gameSessionId,
          ),
        }),
      );
    }

    packets.push(
      EventFactory.sessionControl({
        clientConfiguration: this.getClient(props),
      }),
      EventFactory.sessionControl({
        userConfiguration: this.getUserConfiguration(props),
      }),
    );

    const continuation = this.getContinuation(props);

    if (continuation.getContinuationType()) {
      packets.push(
        EventFactory.sessionControl({
          continuation: this.getContinuation(props),
        }),
      );
    }

    packets.push(EventFactory.loadScene(props.name));

    return props.extension?.beforeLoadScene?.(packets) || packets;
  }
}
