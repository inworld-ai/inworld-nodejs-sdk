import { InworldPacket } from '@inworld/nodejs-sdk';
import { ChildProcess, exec } from 'child_process';
import * as fs from 'fs';
import { promisify } from 'util';
import { v4 } from 'uuid';

const writeFile = promisify(fs.writeFile);

interface PlayerQueueItem {
  packet: InworldPacket;
  onAfterPlaying?: (packet: InworldPacket) => void;
  onBeforePlaying?: (packet: InworldPacket) => void;
}

interface CurrentPlayerItem {
  packet: InworldPacket;
  filename: string;
}

export class Player {
  private queue: PlayerQueueItem[] = [];
  private isPlaying = false;
  private child: ChildProcess | undefined;
  private currentItem: CurrentPlayerItem | undefined;

  async addToQueue(data: PlayerQueueItem) {
    this.queue.push(data);

    if (!this.isPlaying) {
      await this.playQueue();
    }
  }

  stop() {
    this.child?.kill();
    this.isPlaying = false;
    this.queue = [];

    this.resetCurrentItem();
  }

  getIsPlaying() {
    return this.isPlaying;
  }

  getPacketsInQueue() {
    return this.queue.map((item: PlayerQueueItem) => item.packet);
  }

  getCurrentPacket() {
    return this.currentItem?.packet;
  }

  private resetCurrentItem() {
    if (this.currentItem?.filename) {
      fs.unlink(this.currentItem.filename, () => {});
    }

    this.currentItem = undefined;
  }

  private async playQueue() {
    this.isPlaying = false;

    if (!this.queue.length) {
      return;
    }

    const data = this.queue.shift();
    this.isPlaying = true;

    if (data?.packet?.audio?.chunk) {
      this.currentItem = {
        filename: `${v4()}.mp3`,
        packet: data.packet,
      };
      await writeFile(
        this.currentItem.filename,
        Buffer.from(data.packet.audio.chunk, 'base64'),
        'binary',
      );

      if (this.currentItem?.filename) {
        data.onBeforePlaying?.(data.packet);

        this.child = exec(
          `sox ${this.currentItem.filename} -d`,
          async (err?: any) => {
            if (!err) {
              data.onAfterPlaying?.(data.packet);
              this.resetCurrentItem();
              await this.playQueue();
            }
          },
        );
      }
    } else if (data?.packet?.silence?.durationMs) {
      setTimeout(async () => {
        this.resetCurrentItem();
        await this.playQueue();
      }, data.packet.silence.durationMs);
    }
  }
}
