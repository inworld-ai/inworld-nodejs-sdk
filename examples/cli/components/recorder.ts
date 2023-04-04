import { InworldPacket } from '@inworld/nodejs-sdk';

const recorder = require('node-record-lpcm16');

interface RecorderProps {
  onData?: (data: string) => Promise<InworldPacket>;
  onError?: (err: Error) => void;
}

export class Recorder {
  private conversationStarted = false;
  private recording = recorder.record({
    recordProgram: 'sox',
    sampleRateHertz: 16000,
    silence: '5.0',
    threshold: 0,
  });
  private onData: ((data: string) => Promise<InworldPacket>) | undefined;
  private onError: ((err: Error) => void) | undefined;

  constructor(props: RecorderProps) {
    this.onData = props.onData;
    this.onError = props.onError;
  }

  capture = () => {
    if (this.conversationStarted) {
      if (this.recording.isPaused()) {
        this.recording.resume();
      }
    } else {
      this.recording
        .stream()
        .on('data', async (data: string) => {
          await this.onData?.(data);
        })
        .on('error', this.onError);
      this.conversationStarted = true;
    }
  };

  pause = () => {
    if (!this.recording.isPaused()) {
      this.recording.pause();
    }
  };

  stop = () => {
    this.recording.stop();
  };

  isActive() {
    return this.conversationStarted && !this.recording.isPaused();
  }
}
