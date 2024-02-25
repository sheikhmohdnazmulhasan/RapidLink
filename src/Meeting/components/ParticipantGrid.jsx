const MemoizedParticipant = React.memo(
    ParticipantView,
    (prevProps, nextProps) => {
      return prevProps.participantId === nextProps.participantId;
    }
  );

export default function ParticipantGrid() {
  return (
    <div>ParticipantGrid</div>
  )
}
