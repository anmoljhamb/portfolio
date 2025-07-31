"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const pathProps = {
  stroke: "#f05454",
  strokeWidth: 3,
  strokeLinecap: "round",
} as const;

const topVariants: Variants = {
  closed: { d: "M 2 8 L 28 8" },
  open: { d: "M 5 25 L 25 5" },
};

const middleVariants: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0, transition: { duration: 0.1 } },
};

const bottomVariants: Variants = {
  closed: { d: "M 2 22 L 28 22" },
  open: { d: "M 5 5 L 25 22" },
};

export default function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      onClick={() => setIsOpen((old) => !old)}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      className="absolute top-6 right-4 z-10 h-10 w-10 cursor-pointer"
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        className="h-full w-full overflow-visible"
      >
        <motion.path {...pathProps} variants={topVariants} />

        <motion.path
          {...pathProps}
          d="M 2 15 L 28 15"
          variants={middleVariants}
        />
        <motion.path
          {...pathProps}
          d="M 10 15 L 28 15"
          variants={middleVariants}
        />

        <motion.path {...pathProps} variants={bottomVariants} />
      </svg>
    </motion.button>
  );
}
