const ScrollIndicator = () => {
  return (
    <div className="h-20 flex flex-col items-center justify-center text-text animate-bounce">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
      <span className="text-xs mt-1 tracking-wide">Scroll</span>
    </div>
  );
};

export default ScrollIndicator;
