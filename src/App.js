import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import PandaModel from "./components/canvas/PandaModel";
import Loader from "./components/Loader";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const appRef = useRef(null);

  // Scroll animation for panda model
  const { scrollYProgress } = useScroll({
    target: appRef,
    offset: ["start", "end"],
  });

  const pandaScale = useTransform(scrollYProgress, [0, 1], [0.5, 0.3]);
  const pandaRotateY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const pandaPositionX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to a section with animation
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle scroll events and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for navbar

      // Check which section is currently in view
      if (
        homeRef.current &&
        scrollPosition <
          homeRef.current.offsetTop + homeRef.current.offsetHeight
      ) {
        setActiveSection("home");
      } else if (
        aboutRef.current &&
        scrollPosition <
          aboutRef.current.offsetTop + aboutRef.current.offsetHeight
      ) {
        setActiveSection("about");
      } else if (
        projectsRef.current &&
        scrollPosition <
          projectsRef.current.offsetTop + projectsRef.current.offsetHeight
      ) {
        setActiveSection("projects");
      } else if (contactRef.current) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App" ref={appRef}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar
            activeSection={activeSection}
            scrollToHome={() => scrollToSection(homeRef)}
            scrollToAbout={() => scrollToSection(aboutRef)}
            scrollToProjects={() => scrollToSection(projectsRef)}
            scrollToContact={() => scrollToSection(contactRef)}
          />
          <div className="model-container">
            <Suspense fallback={<Loader />}>
              <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{ width: "100%", height: "100%", position: "fixed" }}
                shadows
              >
                <ambientLight intensity={0.5} />
                <directionalLight
                  position={[0, 0, 5]}
                  intensity={1}
                  castShadow
                />
                <motion.group
                  style={{
                    scale: pandaScale,
                    rotateY: pandaRotateY,
                    x: pandaPositionX,
                  }}
                >
                  <PandaModel />
                </motion.group>
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
                <Preload all />
              </Canvas>
            </Suspense>
          </div>
          <div className="content-container">
            <AnimatePresence>
              <motion.section
                ref={homeRef}
                id="home"
                className="section-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Home />
              </motion.section>

              <motion.section
                ref={aboutRef}
                id="about"
                className="section-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <About />
              </motion.section>

              <motion.section
                ref={projectsRef}
                id="projects"
                className="section-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Projects />
              </motion.section>

              <motion.section
                ref={contactRef}
                id="contact"
                className="section-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Contact />
              </motion.section>
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
