"use client";

import ScrollIndicator from "@/app/components/ScrollIndicator";
import * as aboutData from "@/app/data/about";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="h-screen flex flex-col justify-between items-center text-light bg-dark">
      <div className="flex-grow flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative flex flex-col items-center gap-8 text-center max-w-3xl w-full px-4 z-10">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"
                animate={{
                  maskImage: [
                    "radial-gradient(circle at 50% 50%, transparent 0%, black 150%)",
                    "radial-gradient(circle at 50% 50%, transparent 0%, black 50%)",
                    "radial-gradient(circle at 50% 50%, transparent 0%, black 150%)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <motion.div
              className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-2xl border-4 border-accent/80"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/terminal.gif"
                alt="Terminal GIF"
                fill
                className="object-cover"
                priority
                unoptimized={true}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-accent tracking-tight">
                {aboutData.FULL_NAME}
              </h1>
              <h2 className="text-lg md:text-xl text-light mt-4 font-medium tracking-wide">
                {aboutData.TAGS.join(" • ")}
              </h2>
              <p className="mt-6 text-md md:text-lg text-text leading-relaxed max-w-2xl mx-auto">
                {aboutData.SHORT_SUMMARY}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
