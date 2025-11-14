const ScrollIndicator = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("journey");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="h-20 flex flex-col items-center justify-center text-text animate-bounce cursor-pointer hover:text-accent transition-colors duration-300 group"
      aria-label="Scroll to next section"
    >
      <svg
        className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
      <span className="text-xs mt-1 tracking-wide">Scroll</span>
    </button>
  );
};

export default ScrollIndicator;
