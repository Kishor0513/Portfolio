import React from "react";
import { motion } from "framer-motion";

const PandaRunnerSVG = () => {
  // Animation for the panda's legs
  const legAnimation = {
    animate: {
      rotate: [0, 30, 0, -30, 0],
      transition: {
        repeat: Infinity,
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  // Animation for the panda's arms
  const armAnimation = {
    animate: {
      rotate: [0, -20, 0, 20, 0],
      transition: {
        repeat: Infinity,
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  // Animation for the panda's head (slight bobbing)
  const headAnimation = {
    animate: {
      y: [0, -2, 0],
      transition: {
        repeat: Infinity,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="50" cy="55" rx="20" ry="25" fill="white" />

      {/* Head */}
      <motion.g variants={headAnimation} animate="animate">
        <circle cx="50" cy="30" r="18" fill="white" />

        {/* Eyes */}
        <ellipse cx="42" cy="25" rx="6" ry="7" fill="black" />
        <ellipse cx="58" cy="25" rx="6" ry="7" fill="black" />

        {/* Eye shine */}
        <circle cx="44" cy="23" r="2" fill="white" />
        <circle cx="60" cy="23" r="2" fill="white" />

        {/* Nose */}
        <ellipse cx="50" cy="33" rx="4" ry="3" fill="black" />

        {/* Ears */}
        <circle cx="32" cy="18" r="8" fill="black" />
        <circle cx="68" cy="18" r="8" fill="black" />
      </motion.g>

      {/* Arms */}
      <motion.path
        d="M35 45 L25 55"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        variants={armAnimation}
        animate="animate"
      />
      <motion.path
        d="M65 45 L75 55"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        variants={armAnimation}
        animate="animate"
      />

      {/* Legs */}
      <motion.path
        d="M40 75 L35 90"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        variants={legAnimation}
        animate="animate"
      />
      <motion.path
        d="M60 75 L65 90"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        variants={legAnimation}
        animate="animate"
      />
    </svg>
  );
};

export default PandaRunnerSVG;
