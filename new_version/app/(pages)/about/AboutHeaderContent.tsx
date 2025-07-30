import Image from "next/image";

const AboutHeaderContent = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-center max-w-3xl w-full px-4">
      <div className="w-60 h-60 relative rounded-xl overflow-hidden shadow-xl border-4 border-accent">
        <Image
          src="/terminal.gif"
          alt="Terminal GIF"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div>
        <h1 className="text-6xl font-extrabold text-accent tracking-tight">
          Anmol Jhamb
        </h1>
        <h2 className="text-2xl text-light mt-3 font-medium">
          Software Engineer • OSS Dev • Neovim Addict
        </h2>
        <p className="mt-6 text-lg text-text leading-relaxed font-normal">
          I build sharp, scalable systems — from fast APIs to terminal-first
          workflows. Currently building at{" "}
          <span className="text-accent font-semibold">ConsultAdd</span>,
          thriving in dark mode and contributing to open source.
        </p>
      </div>
    </div>
  );
};

export default AboutHeaderContent;
