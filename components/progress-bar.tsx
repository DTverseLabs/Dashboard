"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: safeValue / 100 }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
        className="h-full origin-left rounded-full bg-gradient-to-r from-violet-300 to-blue-300"
      />
    </div>
  );
}
