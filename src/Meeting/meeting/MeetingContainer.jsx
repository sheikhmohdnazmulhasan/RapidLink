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

  return (
    <div>MeetingContainer</div>
  )
}
