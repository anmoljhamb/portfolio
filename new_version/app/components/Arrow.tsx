export default function Arrow({
  reverse = false,
  onClick,
}: {
  reverse?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`group arrow${reverse ? " arrow-reverse" : ""}`}
      onClick={onClick}
    >
      <div className="arrow-line rotate-45 origin-bottom-right" />
      <div className="arrow-line -rotate-45 origin-top-right" />
    </button>
  );
}
