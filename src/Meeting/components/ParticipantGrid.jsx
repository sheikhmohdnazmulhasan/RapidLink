const MemoizedParticipant = React.memo(
    ParticipantView,
    (prevProps, nextProps) => {
      return prevProps.participantId === nextProps.participantId;
    }
  );

  const { sideBarMode } = useMeetingAppContext();
  const isMobile = window.matchMedia(
    "only screen and (max-width: 768px)"
  ).matches;

  const perRow =
    isMobile || isPresenting
      ? participantIds.length < 4
        ? 1
        : participantIds.length < 9
        ? 2
        : 3
      : participantIds.length < 5
      ? 2
      : participantIds.length < 7
      ? 3
      : participantIds.length < 9
      ? 4
      : participantIds.length < 10
      ? 3
      : participantIds.length < 11
      ? 4
      : 4;

export default function ParticipantGrid() {
  return (
    <div>ParticipantGrid</div>
  )
}
