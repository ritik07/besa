"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  isVisible?: boolean; // Prop to control animation visibility
}

const BlurIn = ({ word, className, variant, duration = 1, isVisible = true }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"} // Control animation based on isVisible prop
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-xs font-bold tracking-[-0.02em] drop-shadow-sm md:text-xs md:leading-[5rem]",
        className,
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
