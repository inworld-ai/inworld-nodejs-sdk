import { credentials, Metadata } from '@grpc/grpc-js';
import { TokensClient } from '@proto/ai/inworld/studio/v1alpha/tokens_grpc_pb';
import {
  GenerateSessionTokenRequest,
  SessionAccessToken,
} from '@proto/ai/inworld/studio/v1alpha/tokens_pb';
import { promisify } from 'util';

import { KeySignature } from '../../auth/key_signature';
import { Config } from '../../common/config';
import { ApiKey } from '../../common/data_structures';
import { grpcOptions } from '../../common/helpers';
import { Logger } from '../../common/logger';

export class TokenClientGrpcService {
  private readonly config = Config.getInstance();
  private readonly address = this.config.getStudioHost();
  private readonly ssl = this.config.getStudioSsl();
  private readonly credentials = this.ssl
    ? credentials.createSsl()
    : credentials.createInsecure();
  private readonly grpcOptions = { ...grpcOptions };
  private readonly client = new TokensClient(
    this.address,
    this.credentials,
    this.grpcOptions,
  );

  private logger = Logger.getInstance();

  public async generateSessionToken(
    apiKey: ApiKey,
  ): Promise<SessionAccessToken> {
    const metadata = new Metadata();
    const request = new GenerateSessionTokenRequest();

    request.setKey(apiKey.key);
    metadata.add(
      'authorization',
      KeySignature.getAuthorization({
        apiKey,
        host: this.config.getStudioHost(),
      }),
    );

    const response: SessionAccessToken = await promisify(
      this.client.generateSessionToken.bind(this.client),
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
}
