"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUp, transition, inView } from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <As className={className}>{children}</As>;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={fadeUp}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
