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
    const json = (await this.redisClient.get(key)) || '';

    return Storage.deserialize(json);
  }

  set(key, phrases) {
    this.redisClient.set(key, JSON.stringify(phrases));
  }

  delete(key) {
    this.redisClient.del(key);
  }

  static deserialize(json) {
    let phrases = [];

    try {
      phrases = JSON.parse(json) || [];
    } catch (e) {}

    return phrases;
  }
}
