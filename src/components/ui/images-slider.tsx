"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Import Variants
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  showOverlay = true, // Renamed from 'overlay' to clarify it's a boolean flag
  customOverlay, // New prop for a custom ReactNode overlay
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  showOverlay?: boolean; // Type is now explicitly boolean
  customOverlay?: React.ReactNode; // New prop for custom overlay content
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false); // Consider if you need this state if you're preloading
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, [images]); // Added 'images' to dependency array for robustness

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loaded) => {
        setLoadedImages(loaded as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: NodeJS.Timeout | number | undefined; // More specific type for interval ID
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) { // Only clear if interval was actually set
        clearInterval(interval as number); // Cast to number for browser clearInterval
      }
    };
  }, [autoplay, images.length]); // Add autoplay and images.length to dependencies

  const slideVariants: Variants = { // Explicitly type slideVariants as Variants
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        // Cast the ease array to the expected tuple type for Framer Motion
        ease: [0.645, 0.045, 0.355, 1.0] as [number, number, number, number],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Render children only if images are loaded */}
      {areImagesLoaded && children}

      {/* Render default overlay if showOverlay is true and images are loaded */}
      {areImagesLoaded && showOverlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {/* Render custom overlay if provided and images are loaded */}
      {areImagesLoaded && customOverlay && (
        <div className={cn("absolute inset-0 z-40", overlayClassName)}>
          {customOverlay}
        </div>
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};