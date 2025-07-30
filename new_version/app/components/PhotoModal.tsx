import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";
import { TimelineItem } from "./JourneyTimeline"; // Assuming you export the type

interface PhotoModalProps {
  item: TimelineItem;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ item, onClose }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % item.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prev) => (prev - 1 + item.photos.length) % item.photos.length,
    );
  };

  return (
    <div
      className="fixed inset-0 bg-dark/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-steel rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-light/20"
        onClick={(e) => e.stopPropagation()}
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
            <div className="relative">
              <Image
                src={item.photos[currentPhotoIndex]}
                alt={`${item.title} - Photo ${currentPhotoIndex + 1}`}
                width={600}
                height={400}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
              />
              {item.photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark/70 hover:bg-dark text-light p-2 rounded-full transition-all"
                    aria-label="Previous photo"
                  >
                    <ChevronRight className="w-5 h-5 transform rotate-180" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark/70 hover:bg-dark text-light p-2 rounded-full transition-all"
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
      </div>
    </div>
  );
};
