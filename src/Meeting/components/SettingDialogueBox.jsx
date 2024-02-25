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


    const stopAudioAnalyse = () => {
        clearInterval(audioAnalyserIntervalRef.current);
      };

      useEffect(() => {
        audioTrackRef.current = audioTrack;

        if (audioTrack) {
          analyseAudio(audioTrack);
        } else {
          stopAudioAnalyse();
        }
      }, [audioTrack]);

      return (
        <div className="relative w-20 h-[100px]">
          {[
            {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              top: 0,
              alignItems: "flex-end",
            },
            {
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              top: "50%",
              alignItems: "flex-start",
            },
          ].map(
            (
              {
                alignItems,
                top,
                borderBottomLeftRadius,
                borderBottomRightRadius,
                borderTopLeftRadius,
                borderTopRightRadius,
              },
              i
            ) => (
              <div
                key={`audio_analyzer_i_${i}`}
                className={`h-1/2 flex justify-evenly left-0 right-0 absolute`}
                style={{ alignItems, top }}
              >
                {[40, 70, 100, 100, 70, 40].map((height, j) => (
                  <div
                    key={`audio_analyzer_j_${j}`}
                    style={{
                      borderBottomLeftRadius,
                      borderBottomRightRadius,
                      borderTopLeftRadius,
                      borderTopRightRadius,
                      backgroundColor: "#1178F8",
                      width: 80 / 12,
                      height: `${(volume / 256) * height}%`,
                      transition: "all 50ms",
                      transitionTimingFunction: "ease-in",
                    }}
                  ></div>
                ))}
              </div>
            )
          )}
        </div>
      );
    };

export default function SettingDialogueBox() {
  return (
    <div>SettingDialogueBox</div>
  )
}
