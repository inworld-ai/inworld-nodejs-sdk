import * as crypto from 'crypto';
import { v4 } from 'uuid';

import { KeySignature } from '../../src/auth/key_signature';

const HOST = 'localhost';
const API_KEY = { key: 'KEY', secret: 'SECRET' };
const DATETIME = '20220601123658';

class MockDate extends Date {
  constructor() {
    super('2022-06-01T12:36:58.135Z');
  }
}
// @ts-ignore
global.Date = MockDate;

test('should generate signature key', () => {
  expect(
    KeySignature.getSignatureKey(API_KEY.secret, [
      DATETIME,
      HOST,
      'ai.inworld.studio.v1alpha.Tokens/GenerateSessionToken',
    ]),
  ).toEqual('648908d6ef4b44b922f5ca5f7df1183c0d7455312fea3eb03e4aa1b9385efd6c');
});

test('should generate authorization key', () => {
  const randomString = 'randomString';
  const signature = v4();

  jest.spyOn(crypto, 'randomBytes').mockImplementationOnce(() => randomString);
  jest
    .spyOn(KeySignature, 'getSignatureKey')
    .mockImplementationOnce(() => signature);

  const nonce = randomString.slice(1, 12);
  const generated = `IW1-HMAC-SHA256 ApiKey=${API_KEY.key},DateTime=${DATETIME},Nonce=${nonce},Signature=${signature}`;

  expect(
    KeySignature.getAuthorization({ host: HOST, apiKey: API_KEY }),
  ).toEqual(generated);
});
