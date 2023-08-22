import { DialogPhrase } from '@inworld/nodejs-sdk';
import { createClient } from 'redis';

export class Storage {
  private redisClient = createClient();

  async connect({ onError }: { onError?: (err: Error) => void }) {
    await this.redisClient.connect();

    if (onError) {
      this.redisClient.on('error', onError);
    }
  }

  disconnect() {
    this.redisClient.disconnect();
  }

  async get(key: string) {
    const json = (await this.redisClient.get(key)) || '';

    return Storage.deserialize(json);
  }

  set(key: string, phrases: DialogPhrase[]) {
    this.redisClient.set(key, JSON.stringify(phrases));
  }

  delete(key: string) {
    this.redisClient.del(key);
  }

  static deserialize(json: string) {
    let phrases: DialogPhrase[] = [];

    try {
      phrases = (JSON.parse(json) as DialogPhrase[]) || [];
    } catch (e) {}

    return phrases;
  }
}
