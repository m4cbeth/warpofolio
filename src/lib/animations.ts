import { easeOut } from "framer-motion";

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const sectionTransition = { duration: 0.6, ease: easeOut } as const;
