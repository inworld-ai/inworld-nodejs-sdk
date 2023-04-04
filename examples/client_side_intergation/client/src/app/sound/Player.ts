interface PlayerProps {
  audio: HTMLAudioElement;
}

export class Player {
  private audioPacketQueue: string[] = [];
  private isPlaying = false;
  private audioElement!: HTMLAudioElement;

  preparePlayer(props: PlayerProps): void {
    this.audioElement = props.audio;
    this.audioElement.onended = () => {
      this.playQueue();
    };
  }

  getIsPlaying(): boolean {
    return this.isPlaying;
  }

  stop() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }

  addToQueue(packet: string): void {
    this.audioPacketQueue.push(packet);
    if (!this.isPlaying) {
      this.playQueue();
    }
  }

  clearQueue() {
    this.isPlaying = false;
    this.audioPacketQueue = [];
  }

  private playQueue = (): void => {
    if (!this.audioPacketQueue.length) {
      this.isPlaying = false;
      this.audioElement.src = '';
      return;
    }

    const currentPacket = this.audioPacketQueue.shift();

    this.isPlaying = true;
    this.audioElement.src = 'data:audio/wav;base64,' + currentPacket;
    this.audioElement.play().catch((e) => console.error(e));
  };
}
