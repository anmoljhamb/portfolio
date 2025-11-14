"use client";

import { timeline } from "@/app/data/timeline";
import { TimelineItem } from "@/app/types";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";
import { PhotoModal } from "./PhotoModal";

const ScrollIndicator = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("tech-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
      <motion.button
        onClick={handleScroll}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="cursor-pointer hover:opacity-70 transition-opacity"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-text/30 hover:text-accent transition-colors" />
      </motion.button>
    </div>
  );
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  onPhotoClick: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  item,
  index,
  onPhotoClick,
  containerRef,
}) => {
  const isLeft = index % 2 === 0;
  const IconComponent = item.icon;

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.div
      className="relative flex justify-between items-start w-full mb-16 last:mb-0"
      initial="initial"
      whileInView="inView"
      viewport={{ root: containerRef, once: true, amount: 0.4 }}
      variants={cardVariants}
    >
      <div
        className={`hidden md:block w-5/12 ${isLeft ? "order-3" : "order-1"}`}
      />
      <div className="z-10 hidden md:block flex items-center order-2 w-8 h-8 md:w-auto">
        <div
          className="w-4 h-4 rounded-full border-4 border-accent bg-dark"
          style={{ boxShadow: "0 0 20px rgba(240, 84, 84, 0.7)" }}
        />
      </div>
      <div
        className={`w-full md:w-5/12 order-1 ${
          isLeft ? "md:order-1" : "md:order-3"
        }`}
      >
        <div className="bg-steel/20 backdrop-blur-sm rounded-xl p-6 shadow-2xl transition-all duration-300 hover:shadow-accent/20 hover:scale-[1.02] border border-steel/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-dark/50 p-3 rounded-full border border-light/10">
              <IconComponent className="w-6 h-6 text-accent" />
            </div>
            <span className="text-accent font-mono text-lg font-bold">
              {item.year}
            </span>
          </div>
          <h3 className="text-light text-2xl font-bold mb-3">{item.title}</h3>
          <p className="text-text text-base leading-relaxed mb-5">
            {item.desc}
          </p>
          <div className="flex flex-wrap gap-4 justify-between items-center">
            {item.extraText && item.extraLink && (
              <a
                href={item.extraLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:text-light transition-colors duration-300 flex items-center gap-1 group"
              >
                {item.extraText}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-x-1 rotate-[-90deg]" />
              </a>
            )}
            {item.photos && item.photos.length > 0 && (
              <button
                onClick={onPhotoClick}
                className="font-semibold text-accent hover:text-light transition-colors duration-300 flex items-center gap-1 group ml-auto"
              >
                View Photos
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-x-1 rotate-[-90deg]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const progressBarHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  const handlePhotoClick = (item: TimelineItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section className="relative w-full bg-dark py-16 sm:py-24 px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            My Journey
          </h2>
          <p className="text-text max-w-2xl mx-auto text-lg">
            From a kid building his own <i>Jarvis</i> to a developer shaping the
            future. Here are the milestones that made me.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[70vh] overflow-y-auto no-scroll-bar"
          >
            <div className="relative w-full mx-auto px-4 sm:px-0">
              <div className="absolute hidden md:block left-3.5 md:left-1/2 top-2 bottom-2 transform md:-translate-x-1/2 w-1 bg-steel/50 rounded-full z-0" />
              <motion.div
                className="absolute hidden md:block left-3.5 md:left-1/2 top-2 transform md:-translate-x-1/2 w-1 bg-accent z-0"
                style={{
                  height: progressBarHeight,
                  boxShadow: "0 0 20px rgba(240, 84, 84, 0.5)",
                }}
              />

              <div className="relative flex flex-col items-center pt-4">
                {timeline.map((item, index) => (
                  <TimelineCard
                    key={`${item.title}-${index}`}
                    item={item}
                    index={index}
                    onPhotoClick={() => handlePhotoClick(item)}
                    containerRef={containerRef}
                  />
                ))}
              </div>
            </div>
          </div>
          <ScrollIndicator />
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <PhotoModal item={selectedItem} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default JourneyTimeline;
