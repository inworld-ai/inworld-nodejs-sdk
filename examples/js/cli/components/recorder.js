const recorder = require('node-record-lpcm16');

class Recorder {
  conversationStarted = false;
  recording = recorder.record({
    recordProgram: 'sox',
    sampleRateHertz: 16000,
    silence: '5.0',
    threshold: 0,
  });
  onData;
  onError;

  constructor(props) {
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
        .on('data', async (data) => {
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

module.exports.Recorder = Recorder;
