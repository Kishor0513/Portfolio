import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const Home = ({ pandaModel }) => {
  return (
    <div className="home-container">
      <div className="content-left">
        <motion.div
          className="home-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="highlight-box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              position: "absolute",
              width: "50%",
              height: "50%",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              background:
                "linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(255, 105, 180, 0.15))",
              top: "-20%",
              left: "-10%",
              zIndex: -1,
              filter: "blur(60px)",
            }}
          />

          <motion.h1
            className="main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              color: "#8A2BE2",
              fontSize: "4rem",
              textShadow: "0 0 30px rgba(138, 43, 226, 0.4)",
              fontWeight: "800",
              letterSpacing: "1px",
              marginBottom: "1.5rem",
              position: "relative",
            }}
          >
            Kishor Chaudhary
            <div
              style={{
                position: "absolute",
                width: "40%",
                height: "5px",
                background: "linear-gradient(to right, #8A2BE2, transparent)",
                bottom: "-10px",
                left: "0",
                borderRadius: "2px",
              }}
            />
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: "1.5rem",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "2rem",
              fontWeight: "500",
              letterSpacing: "0.5px",
            }}
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "2.5rem",
              maxWidth: "550px",
              lineHeight: "1.7",
            }}
          >
            Crafting modern web experiences with clean code and innovative
            design. Turning ideas into pixel-perfect reality.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: "flex",
              gap: "1.5rem",
            }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.9rem 2.2rem",
                background: "linear-gradient(135deg, #8A2BE2, #FF69B4)",
                color: "white",
                fontWeight: "600",
                fontSize: "1.1rem",
                borderRadius: "30px",
                textDecoration: "none",
                boxShadow: "0 10px 20px rgba(138, 43, 226, 0.3)",
                border: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.9rem 2.2rem",
                background: "transparent",
                color: "white",
                fontWeight: "600",
                fontSize: "1.1rem",
                borderRadius: "30px",
                textDecoration: "none",
                border: "2px solid rgba(138, 43, 226, 0.7)",
                transition: "all 0.3s ease",
                display: "inline-block",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "3rem",
            }}
          >
            {["github", "linkedin", "twitter", "instagram"].map(
              (platform, index) => (
                <motion.a
                  key={platform}
                  href={`#${platform}`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(138, 43, 226, 0.3)",
                  }}
                >
                  <i className={`fab fa-${platform}`}></i>
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      <div className="content-right">
        <motion.div
          className="panda-model-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <motion.div
            className="model-bg-shape"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "70%",
              height: "70%",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background:
                "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 105, 180, 0.1))",
              filter: "blur(50px)",
              zIndex: 1,
            }}
          />

          <Suspense
            fallback={<div className="loading-model">Loading Model...</div>}
          >
            <div
              style={{
                width: "100%",
                height: "400px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                shadows
                dpr={[1, 1.5]}
                style={{ width: "100%", height: "100%" }}
              >
                <ambientLight intensity={0.5} />
                <directionalLight
                  position={[0, 0, 5]}
                  intensity={1}
                  castShadow
                />
                {pandaModel}
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
                <Preload all />
              </Canvas>
            </div>
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
