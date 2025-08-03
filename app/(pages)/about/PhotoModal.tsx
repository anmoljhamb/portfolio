import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TimelineItem } from "@/app/types";

interface PhotoModalProps {
  item: TimelineItem;
  onClose: () => void;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    y: "50px",
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    y: "50px",
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.2 },
  },
} as const;

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export const PhotoModal: React.FC<PhotoModalProps> = ({ item, onClose }) => {
  const [[currentPhotoIndex, direction], setCurrentPhoto] = useState([0, 0]);

  const setPhoto = (newIndex: number, newDirection: number) => {
    setCurrentPhoto([newIndex, newDirection]);
  };

  const nextPhoto = () => {
    const newIndex = (currentPhotoIndex + 1) % item.photos.length;
    setPhoto(newIndex, 1);
  };

  const prevPhoto = () => {
    const newIndex =
      (currentPhotoIndex - 1 + item.photos.length) % item.photos.length;
    setPhoto(newIndex, -1);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-dark/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-steel rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-light/20"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex items-center justify-between p-6 border-b border-light/20">
          <div>
            <h3 className="text-light text-xl font-bold">{item.title}</h3>
            <span className="text-accent text-sm font-mono">{item.year}</span>
          </div>
          <button
            onClick={onClose}
            className="text-light hover:text-accent transition-colors p-2 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {item.photos.length > 0 && (
            <div className="relative h-[60vh] max-h-[400px] flex items-center justify-center overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentPhotoIndex}
                  className="absolute w-full h-full"
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <Image
                    src={item.photos[currentPhotoIndex]}
                    alt={`${item.title} - Photo ${currentPhotoIndex + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>

              {item.photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark/70 hover:bg-dark text-light p-2 rounded-full transition-all z-10"
                    aria-label="Previous photo"
                  >
                    <ChevronRight className="w-5 h-5 transform rotate-180" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark/70 hover:bg-dark text-light p-2 rounded-full transition-all z-10"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          )}
          <p className="text-text leading-relaxed">{item.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
