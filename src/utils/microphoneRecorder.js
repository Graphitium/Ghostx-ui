class MicrophoneRecorder {
  constructor() {
    this.mediaRecorder = null;
    this.audioContext = new AudioContext();
    this.workletNode = null;
  }

  async start(onprocess) {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.start(50);

    // this.mediaRecorder.ondataavailable = onprocess

    const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);

    const bufferSize = 4096;
    const scriptNode = context.createScriptProcessor(bufferSize, 1, 1);

    source.connect(scriptNode);
    scriptNode.connect(context.destination);

    scriptNode.onaudioprocess = function (e) {
      const inputBuffer = e.inputBuffer;
      const channelData = inputBuffer.getChannelData(0);
      let sumOfSquares = 0;
      for (let i = 0; i < channelData.length; i++) {
        sumOfSquares += Math.pow(channelData[i], 2);
      }
      const rms = Math.sqrt(sumOfSquares / channelData.length);
      const volume = Math.min(Math.round(rms * 200), 100);

      onprocess(volume);
    };
  }

  stop() {
    this.mediaRecorder.stop();
  }
}


export default new MicrophoneRecorder();