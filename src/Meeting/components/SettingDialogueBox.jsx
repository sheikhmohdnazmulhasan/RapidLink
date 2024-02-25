import React from 'react'


const AudioAnalyser = ({ audioTrack }) => {
    const audioTrackRef = useRef();
    const audioAnalyserIntervalRef = useRef();

    const [volume, setVolume] = useState(null);

    const analyseAudio = (audioTrack) => {
      const audioStream = new MediaStream([audioTrack]);
      const audioContext = new AudioContext();

      const audioSource = audioContext.createMediaStreamSource(audioStream);
      const analyser = audioContext.createAnalyser();

      analyser.fftSize = 512;
      analyser.minDecibels = -127;
      analyser.maxDecibels = 0;
      analyser.smoothingTimeConstant = 0.4;

      audioSource.connect(analyser);

      const volumes = new Uint8Array(analyser.frequencyBinCount);
      const volumeCallback = () => {
        analyser.getByteFrequencyData(volumes);

        const volumeSum = volumes.reduce((sum, vol) => sum + vol);
        const averageVolume = volumeSum / volumes.length;

        setVolume(averageVolume);
      };

      audioAnalyserIntervalRef.current = setInterval(volumeCallback, 100);
    };

export default function SettingDialogueBox() {
  return (
    <div>SettingDialogueBox</div>
  )
}
