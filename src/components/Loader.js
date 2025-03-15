import React from "react";
import { motion } from "framer-motion";
import PandaRunnerSVG from "./PandaRunnerSVG";

const Loader = () => {
  // Animation for the bamboo loading bar
  const loadingBarVariants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="loader">
      <div className="loader-content">
        <h2 className="loader-title">Loading Portfolio</h2>

        <div className="panda-runner-container">
          <motion.div
            className="panda-runner"
            animate={{
              x: ["-50%", "150%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3,
                  ease: "linear",
                },
              },
            }}
          >
            <PandaRunnerSVG />
          </motion.div>

          <motion.div
            className="loading-bar"
            variants={loadingBarVariants}
            initial="initial"
            animate="animate"
          />
        </div>

        <p className="loader-text">Please wait while the bamboo loads...</p>
      </div>
    </div>
  );
};

export default Loader;
