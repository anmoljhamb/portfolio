"use client";

import ScrollIndicator from "@/app/components/ScrollIndicator";
import { timeline } from "@/app/data/timeline";
import { TimelineItem } from "@/app/types";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { PhotoModal } from "./PhotoModal";

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onPhotoClick: () => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  item,
  index,
  containerRef,
  onPhotoClick,
}) => {
  const isLeft = index % 2 === 0;
  const IconComponent = item.icon;

  const cardVariants = {
    initial: { opacity: 0, y: 60, scale: 0.8 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.div
      className="flex items-center w-full mb-16"
      initial="initial"
      whileInView="inView"
      viewport={{ root: containerRef, amount: 0.4 }}
      variants={cardVariants}
    >
      <div
        className={`flex w-full items-center ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-5/12">
          <div className="bg-steel/70 backdrop-blur-md rounded-xl p-6 shadow-2xl transition-all duration-300 hover:shadow-accent/20 hover:scale-[1.02]">
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
            <div className="flex justify-between">
              {item.extraText && item.extraLink && (
                <a
                  href={item.extraLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:text-light transition-colors duration-300 flex items-center gap-2"
                >
                  {item.extraText} <ChevronRight className="w-4 h-4" />
                </a>
              )}
              {item.photos.length > 0 && (
                <button
                  onClick={onPhotoClick}
                  className="font-semibold text-accent hover:text-light transition-colors duration-300 flex items-center gap-2"
                >
                  View Photos <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-2/12 flex justify-center">
          <div
            className="w-4 h-4 rounded-full border-4 border-accent bg-dark z-10"
            style={{ boxShadow: "0 0 20px rgba(240, 84, 84, 0.7)" }}
          />
        </div>
        <div className="w-5/12" />
      </div>
    </motion.div>
  );
};

const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
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
      <div className="p-4 md:p-8 bg-dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-light mb-4">My Journey</h2>
          <p className="text-text max-w-2xl mx-auto">
            A timeline of my professional and personal growth, from college days
            to becoming a tech leader.
          </p>
        </div>
        <div
          ref={containerRef}
          className="relative h-[calc(80vh-100px)] w-full max-w-5xl mx-auto overflow-y-auto p-8 no-scroll-bar"
        >
          <div className="relative w-full">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-steel z-0" />
            <motion.div
              className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-accent z-0"
              style={{
                height: progressBarHeight,
                boxShadow: "0 0 10px rgba(240, 84, 84, 0.3)",
              }}
            />
            {timeline.map((item, index) => (
              <TimelineCard
                key={item.title}
                item={item}
                index={index}
                containerRef={containerRef}
                onPhotoClick={() => handlePhotoClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
      <ScrollIndicator />
      <AnimatePresence>
        {selectedItem && (
          <PhotoModal item={selectedItem} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default JourneyTimeline;
