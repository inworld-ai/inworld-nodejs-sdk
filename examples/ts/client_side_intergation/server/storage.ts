import { Session } from '@inworld/nodejs-sdk';
import { createClient } from 'redis';

import { CHAT_VIEW } from './types';

interface StorageValue {
  session: string;
  player?: string;
  scene?: string;
  chatView?: CHAT_VIEW;
}

interface StorageRecord {
  session?: Session;
  player?: string;
  scene?: string;
  chatView?: CHAT_VIEW;
}

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

    if (!json) return {};

    let parsed: StorageValue;
    let session: Session;

    try {
      parsed = JSON.parse(json) as StorageValue;

      if (parsed.session) {
        session = Session.deserialize(parsed.session);
      }
    } catch (e) {}

    return {
      session,
      player: parsed.player,
      scene: parsed.scene,
      chatView: parsed.chatView,
    } as StorageRecord;
  }

  set(key: string, entity: StorageRecord) {
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

  delete(key: string) {
    this.redisClient.del(key);
  }
}
