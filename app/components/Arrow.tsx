import { motion, Variants } from "framer-motion";

const pathVariants: Variants = {
  initial: {
    pathLength: 0,
  },
  hover: {
    pathLength: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function Arrow({
  reverse = false,
  onClick,
}: {
  reverse?: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 400 } }}
      className={`group absolute top-1/2 -translate-y-1/2 w-16 h-32 cursor-pointer ${
        reverse ? "left-4" : "right-4"
      }`}
      style={{ scaleX: reverse ? -1 : 1 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 64" // A viewbox that fits our desired arrow shape
        className="w-full h-full"
      >
        <motion.path
          d="M12 22 L20 32 L12 42" // Defines the ">" shape
          fill="none"
          strokeWidth="2"
          stroke="#dddddd"
        />
        <motion.path
          d="M12 22 L20 32 L12 42"
          fill="none"
          strokeWidth="2"
          stroke="#f05454"
          variants={pathVariants} // Link our variants to this path
        />
      </svg>
    </motion.button>
  );
}
