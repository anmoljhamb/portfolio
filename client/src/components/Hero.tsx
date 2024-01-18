import { Pic } from "../assets";
import HeroBgAnimation from "./HeroBgAnimation";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="text-6xl">
          Hi!
          <div className="inline-block animate-wiggle">👋</div>
          <div className="my-6 overflow-hidden mx-auto relative flex flex-row justify-center items-center w-full h-96">
            <div className="w-72 h-72 rounded-full bg-text-primary z-10 border-[3px] border-brand overflow-hidden">
              <img src={Pic} alt="" />
            </div>
            <HeroBgAnimation />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
