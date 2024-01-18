import { Pic } from "../assets";
import { heroWords } from "../constants";
import HeroBgAnimation from "./HeroBgAnimation";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: heroWords,
    delaySpeed: 2500,
    loop: 0,
  });

  return (
    <>
      <section id="hero">
        <div className="my-6 overflow-hidden mx-auto relative flex flex-row justify-center items-center w-full h-96">
          <div className="w-64 h-64 rounded-full bg-text-primary z-10 border-[3px] border-brand overflow-hidden">
            <img src={Pic} alt="" />
          </div>
          <HeroBgAnimation />
        </div>
        <div className="text-5xl text-center font-semibold">
          Hey!
          <div className="inline-block animate-wiggle">👋</div>
          <div className="">
            I am <span className="text-brand font-bold">Anmol Jhamb</span>
          </div>
          <div className="text-3xl text-text-primary">
            {text}
            <span className="text-text-primary">
              <Cursor />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
