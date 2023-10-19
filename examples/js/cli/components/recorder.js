const recorder = require('node-record-lpcm16');

class Recorder {
  conversationStarted = false;
  options = {
    recordProgram: 'sox',
    sampleRateHertz: 16000,
    silence: '5.0',
    threshold: 0,
  };

  constructor(props) {
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
        .on('data', async (data) => {
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

module.exports.Recorder = Recorder;
