"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LayoutTextFlipProps {
  text: string;
  words: string[];
  className?: string;
}

export const LayoutTextFlip: React.FC<LayoutTextFlipProps> = ({
  text,
  words,
  className,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-col items-start">
      <span className={cn("text-white font-inter font-bold leading-tight", className)}>{text}</span>
      <div className="relative inline-block min-w-[200px] min-h-[1.2em] mt-4">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex}
            initial={{ y: 20, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -20, opacity: 0, rotateX: 90 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className={cn("inline-block text-white font-inter font-bold leading-tight", className)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
