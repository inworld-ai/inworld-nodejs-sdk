const fs = require('fs');

const { exec } = require('child_process');
const { promisify } = require('util');
const { v4 } = require('uuid');

const writeFile = promisify(fs.writeFile);

class Player {
  queue = [];
  isPlaying = false;
  child;
  currentItem;

  async addToQueue(data) {
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
    return this.queue.map((item) => item.packet);
  }

  getCurrentPacket() {
    return this.currentItem?.packet;
  }

  resetCurrentItem() {
    if (this.currentItem?.filename) {
      fs.unlink(this.currentItem.filename, () => {});
    }

    this.currentItem = undefined;
  }

  async playQueue() {
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
          async (err) => {
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

module.exports.Player = Player;
