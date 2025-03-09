import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="section-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        Hello, I'm Kishor Dev
      </motion.h1>

      <motion.h2
        className="section-subtitle"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      >
        Frontend Developer & 3D Enthusiast
      </motion.h2>

      <motion.p
        className="section-text"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
      >
        Welcome to my portfolio! I specialize in creating beautiful, interactive
        web experiences with a focus on 3D animations and user-friendly
        interfaces.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ marginTop: "2rem" }}
      >
        <motion.button
          className="submit-btn"
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(138, 43, 226, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
