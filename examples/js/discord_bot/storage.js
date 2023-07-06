import { Session } from '@inworld/nodejs-sdk';
import { createClient } from 'redis';

export class Storage {
  redisClient = createClient();

  async connect({ onError }) {
    await this.redisClient.connect();

    if (onError) {
      this.redisClient.on('error', onError);
    }
  }

  disconnect() {
    this.redisClient.disconnect();
  }

  async get(key) {
    const json = await this.redisClient.get(key);

    return Session.deserialize(json);
  }

  set(key, entity) {
    this.redisClient.set(key, Session.serialize(entity));
  }

  delete(key) {
    this.redisClient.del(key);
  }
}
