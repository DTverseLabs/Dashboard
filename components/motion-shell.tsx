"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionShellProps = {
  children: ReactNode;
  className?: string;
};

export function MotionShell({ children, className }: MotionShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
