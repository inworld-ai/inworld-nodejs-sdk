import { InworldPacket } from '@inworld/nodejs-sdk';

const recorder = require('node-record-lpcm16');

interface RecorderProps {
  onData?: (data: string) => Promise<InworldPacket>;
  onError?: (err: Error) => void;
}

export class Recorder {
  private conversationStarted = false;
  private options = {
    recordProgram: 'sox',
    sampleRateHertz: 16000,
    silence: '5.0',
    threshold: 0,
  };

  private recording: any;
  private onData: ((data: string) => Promise<InworldPacket>) | undefined;
  private onError: ((err: Error) => void) | undefined;

  constructor(props: RecorderProps) {
    this.onData = props.onData;
    this.onError = props.onError;
  }

  capture = () => {
    if (this.isActive()) {
      this.stop();
    } else {
      this.recording = recorder.record(this.options);
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
    // `node-record-lpcm16` doesn't support pause/resume for Windows
    this.stop();
  };

  stop = () => {
    if (this.isActive()) {
      this.recording.stream().removeAllListeners();
      this.recording.stop();
      this.conversationStarted = false;
    }
  };

  isActive() {
    return this.conversationStarted;
  }
}
