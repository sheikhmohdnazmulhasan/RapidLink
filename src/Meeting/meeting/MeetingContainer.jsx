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

  return (
    <div>MeetingContainer</div>
  )
}
