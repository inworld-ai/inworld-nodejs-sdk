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

    if (!json) return {};

    let parsed;
    let session;

    try {
      parsed = JSON.parse(json);

      if (parsed.session) {
        session = Session.deserialize(parsed.session);
      }
    } catch (e) {}

    return {
      session,
      player: parsed.player,
      scene: parsed.scene,
      chatView: parsed.chatView,
    };
  }

  set(key, entity) {
    return this.redisClient.set(
      key,
      JSON.stringify({
        session: Session.serialize(entity.session),
        player: entity.player,
        scene: entity.scene,
        chatView: entity.chatView,
      }),
    );
  }

  delete(key) {
    this.redisClient.del(key);
  }
}
