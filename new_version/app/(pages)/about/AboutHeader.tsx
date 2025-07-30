import AboutHeaderContent from "./AboutHeaderContent";
import AnimatedWrapper from "@/app/components/AnimatedWrappr";

export default function HomePage() {
  return (
    <section className="h-screen flex flex-col justify-between items-center text-light bg-dark">
      <div className="flex-grow flex justify-center items-center">
        <AnimatedWrapper>
          <AboutHeaderContent />
        </AnimatedWrapper>
      </div>

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
    </section>
  );
}
