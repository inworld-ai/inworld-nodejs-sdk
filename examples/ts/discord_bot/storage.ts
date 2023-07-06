import { Session } from '@inworld/nodejs-sdk';
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
    const json = await this.redisClient.get(key);

    return Session.deserialize(json);
  }

  set(key: string, entity: Session) {
    this.redisClient.set(key, Session.serialize(entity));
  }

  delete(key: string) {
    this.redisClient.del(key);
  }
}
