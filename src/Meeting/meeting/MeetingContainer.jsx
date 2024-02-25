import React from 'react'

export default function MeetingContainer() {

    const { useRaisedHandParticipants } = useMeetingAppContext();
    const { getVideoTrack } = useMediaStream();

    const bottomBarHeight = 60;

    const [containerHeight, setContainerHeight] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [localParticipantAllowedJoin, setLocalParticipantAllowedJoin] =
      useState(null);
    const [meetingErrorVisible, setMeetingErrorVisible] = useState(false);
    const [meetingError, setMeetingError] = useState(false);

    const mMeetingRef = useRef();
    const containerRef = createRef();
    const containerHeightRef = useRef();
    const containerWidthRef = useRef();

    useEffect(() => {
      containerHeightRef.current = containerHeight;
      containerWidthRef.current = containerWidth;
    }, [containerHeight, containerWidth]);

    const isMobile = useIsMobile();
    const isTab = useIsTab();
    const isLGDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
    const isXLDesktop = useMediaQuery({ minWidth: 1440 });

    useEffect(() => {
        containerRef.current?.offsetHeight &&
          setContainerHeight(containerRef.current.offsetHeight);
        containerRef.current?.offsetWidth &&
          setContainerWidth(containerRef.current.offsetWidth);

        window.addEventListener("resize", ({ target }) => {
          containerRef.current?.offsetHeight &&
            setContainerHeight(containerRef.current.offsetHeight);
          containerRef.current?.offsetWidth &&
            setContainerWidth(containerRef.current.offsetWidth);
        });
      }, [containerRef]);


      function onEntryResponded(participantId, name) {
        // console.log(" onEntryResponded", participantId, name);
        if (mMeetingRef.current?.localParticipant?.id === participantId) {
          if (name === "allowed") {
            setLocalParticipantAllowedJoin(true);
          } else {
            setLocalParticipantAllowedJoin(false);
            setTimeout(() => {
              _handleMeetingLeft();
            }, 3000);
          }
        }
      }

      async function onMeetingJoined() {
        // console.log("onMeetingJoined");
        const { changeWebcam, changeMic, muteMic, disableWebcam } =
          mMeetingRef.current;

        if (webcamEnabled && selectedWebcam.id) {
          await new Promise((resolve) => {
            let track;
            disableWebcam();
            setTimeout(async () => {
              track = await getVideoTrack({
                webcamId: selectedWebcam.id,
                encoderConfig: "h540p_w960p",
              });
              changeWebcam(track);
              resolve();
            }, 500);
          });
        }

        if (micEnabled && selectedMic.id) {
          await new Promise((resolve) => {
            muteMic();
            setTimeout(() => {
              changeMic(selectedMic.id);
              resolve();
            }, 500);
          });
        }
      }

  return (
    <div>MeetingContainer</div>
  )
}
