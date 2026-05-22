import type { Variants, Transition } from "motion/react";

export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay, delayChildren: 0.05 },
  },
});

export const transition: Transition = { duration: 0.55, ease: easeOut };

export const inView = { once: true, margin: "0px 0px -10% 0px" } as const;
