import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      id="home"
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background:
          "linear-gradient(to bottom, rgba(10, 10, 30, 0.8), rgba(5, 5, 15, 0.9))",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="bg-decoration"
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(138, 43, 226, 0.15), transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="bg-decoration"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 105, 180, 0.15), transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Home content container */}
      <div
        className="home-content"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          width: "100%",
          padding: "0 2rem",
        }}
      >
        {/* Left content - Name and info */}
        <motion.div
          className="content-left"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: "600px",
            width: "50%",
          }}
        >
          <h1
            className="main-title"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #8A2BE2, #FF69B4)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 20px rgba(138, 43, 226, 0.3)",
              lineHeight: 1.2,
              textAlign: "left",
            }}
          >
            Kishor Chaudhary
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "1.5rem",
              lineHeight: 1.6,
              maxWidth: "550px",
              textAlign: "left",
            }}
          >
            Full Stack Developer | UI/UX Designer | Creative Problem Solver
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "2.5rem",
              lineHeight: 1.8,
              maxWidth: "550px",
              textAlign: "left",
            }}
          >
            Transforming ideas into elegant, efficient, and user-friendly
            digital experiences. Passionate about creating seamless interfaces
            and powerful web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2rem",
              justifyContent: "flex-start",
            }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.8rem 2rem",
                background: "linear-gradient(135deg, #8A2BE2, #FF69B4)",
                color: "#fff",
                borderRadius: "50px",
                fontWeight: "600",
                textDecoration: "none",
                boxShadow: "0 10px 20px rgba(138, 43, 226, 0.3)",
                transition: "all 0.3s ease",
                border: "none",
                display: "inline-block",
              }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.8rem 2rem",
                background: "transparent",
                color: "#fff",
                borderRadius: "50px",
                fontWeight: "600",
                textDecoration: "none",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-start",
            }}
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                color: "#fff",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
              }}
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                color: "#fff",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right content - Reserved for future image */}
        <motion.div
          className="content-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            width: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Reserved space for future image */}
          <div
            style={{
              width: "100%",
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px dashed rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
            }}
          >
            <p style={{ color: "rgba(255, 255, 255, 0.4)" }}>
              Future image will go here
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
