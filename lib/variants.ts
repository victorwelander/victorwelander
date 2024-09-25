import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, top: -10 },
  show: { opacity: 1, top: 0 },
};
