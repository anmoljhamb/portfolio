"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronRight,
  GraduationCap,
  Briefcase,
  Code,
  Award,
} from "lucide-react";
import { PhotoModal } from "./PhotoModal";
import ScrollIndicator from "@/app/components/ScrollIndicator";

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  desc: string;
  type: "education" | "work" | "achievement" | "future";
  icon: React.ComponentType<{ className?: string }>;
  photos: string[];
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2018",
    title: "Started College",
    desc: "Began my B.Tech journey in Computer Science at a prestigious university, diving into programming fundamentals and mathematics.",
    type: "education",
    icon: GraduationCap,
    photos: [
      "https://plus.unsplash.com/premium_photo-1750116257648-64c9c39dbd8d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1750116257648-64c9c39dbd8d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 2,
    year: "2019",
    title: "First Programming Contest",
    desc: "Participated in my first competitive programming contest, discovered my passion for problem-solving and algorithms.",
    type: "achievement",
    icon: Code,
    photos: [
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    year: "2020",
    title: "First Internship",
    desc: "Worked at a tech startup, learned React, Node.js, and backend development. Built my first full-stack application.",
    type: "work",
    icon: Briefcase,
    photos: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    year: "2021-2022",
    title: "Competition Streak",
    desc: "Won multiple hackathons and coding competitions. Built innovative projects in AI/ML and web development.",
    type: "achievement",
    icon: Award,
    photos: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    year: "2022",
    title: "Graduated with Honors",
    desc: "Completed B.Tech with distinction, published research paper on machine learning applications in web development.",
    type: "education",
    icon: GraduationCap,
    photos: [
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=600&fit=crop",
    ],
  },
];

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
      className="flex items-center w-full mb-16"
      initial="initial"
      whileInView="inView"
      viewport={{ root: containerRef, once: true, amount: 0.4 }}
      variants={cardVariants}
    >
      <div
        className={`flex w-full items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
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
          className="relative h-[calc(80vh-100px)] w-full max-w-5xl mx-auto overflow-y-auto timeline-container p-8"
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
                key={item.id}
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
      {selectedItem && (
        <PhotoModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default JourneyTimeline;
