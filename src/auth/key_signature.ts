import { TokensService } from '@proto/ai/inworld/studio/v1alpha/tokens_grpc_pb';
import * as crypto from 'crypto';
import { HmacSHA256 } from 'crypto-js';

import { ApiKey } from '../common/interfaces';

export interface KeySignatureProps {
  host: string;
  apiKey: ApiKey;
}

export class KeySignature {
  static getAuthorization({ host, apiKey }: KeySignatureProps) {
    const { key, secret } = apiKey;
    const { path } = TokensService.generateSessionToken;

    const datetime = this.getDateTime();
    const nonce = crypto.randomBytes(16).toString('hex').slice(1, 12);
    const method = path.substring(1, path.length);

    const signature = this.getSignatureKey(secret, [
      datetime,
      host.replace(':443', ''),
      method,
      nonce,
    ]);

    return `IW1-HMAC-SHA256 ApiKey=${key},DateTime=${datetime},Nonce=${nonce},Signature=${signature}`;
  }

  static getSignatureKey(key: string, params: string[]) {
    var signature: string | CryptoJS.lib.WordArray = `IW1${key}`;

    params.forEach((p) => {
      signature = HmacSHA256(p, signature);
    });

    return HmacSHA256('iw1_request', signature).toString();
  }

  private static getDateTime() {
    const parts = new Date().toISOString().split('T');
    const date = parts[0].replace(/-/g, '');
    const time = parts[1].replace(/:/g, '').substring(0, 6);

    return `${date}${time}`;
  }
}
