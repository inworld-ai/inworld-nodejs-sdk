import { AdditionalPhonemeInfo } from '../types';

interface PlayerProps {
  audio: HTMLAudioElement;
}

interface Audio {
  chunk: string;
  additionalPhonemeInfo: AdditionalPhonemeInfo[];
}

interface QueueItem {
  audio: Audio;
  onPlay: (audio: Audio) => void;
}

export class Player {
  private audioPacketQueue: QueueItem[] = [];
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

  addToQueue(packet: QueueItem): void {
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
    this.audioElement.src =
      'data:audio/wav;base64,' + currentPacket?.audio?.chunk;
    currentPacket?.onPlay?.(currentPacket?.audio);
    this.audioElement.play().catch((e) => console.error(e));
  };
}
