import ScrollIndicator from "@/app/components/ScrollIndicator";
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
      <ScrollIndicator />
    </section>
  );
}
