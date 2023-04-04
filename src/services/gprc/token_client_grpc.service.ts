import { credentials, Metadata } from '@grpc/grpc-js';
import { TokensClient } from '@proto/ai/inworld/studio/v1alpha/tokens_grpc_pb';
import {
  GenerateSessionTokenRequest,
  SessionAccessToken,
} from '@proto/ai/inworld/studio/v1alpha/tokens_pb';
import { promisify } from 'util';

import { KeySignature } from '../../auth/key_signature';
import { Config } from '../../common/config';
import { grpcOptions } from '../../common/helpers';
import { ApiKey } from '../../common/interfaces';

export class TokenClientGrpcService {
  private readonly config = Config.getInstance();
  private readonly client = new TokensClient(
    this.config.getStudioHost(),
    this.config.getStudioSsl()
      ? credentials.createSsl()
      : credentials.createInsecure(),
    { ...grpcOptions },
  );

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

    return promisify(this.client.generateSessionToken.bind(this.client))(
      request,
      metadata,
    );
  }
}
