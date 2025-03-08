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
import "./components/SplitLayout.css";
import "./ScrollFix.css";

function App() {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const appRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll animation for panda model - optimized
  const { scrollYProgress } = useScroll({
    target: appRef,
    offset: ["start", "end"],
  });

  const pandaScale = useTransform(scrollYProgress, [0, 1], [0.5, 0.3]);
  const pandaRotateY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const pandaPositionX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  useEffect(() => {
    // Simulate loading time - reduced for better performance
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to a section with animation
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle scroll events and update active section - optimized
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for navbar
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledToBottom =
        scrollPosition + windowHeight >= documentHeight - 100;

      // Show scroll to top button when at the last section or scrolled near bottom
      if (activeSection === "contact" || scrolledToBottom) {
        setShowScrollTop(true);
      } else if (scrollPosition > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

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

    // Throttle scroll event for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]);

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

          {/* Scroll to Top Button */}
          <motion.div
            className={`scroll-to-top ${
              activeSection === "contact" ? "last-section" : ""
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: showScrollTop ? 1 : 0,
              scale: showScrollTop ? 1 : 0,
              y: activeSection === "contact" ? [0, -10, 0] : 0,
            }}
            transition={{
              duration: 0.3,
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onClick={scrollToTop}
          >
            <i className="fas fa-arrow-up"></i>
          </motion.div>

          <div className="model-container">
            <Suspense fallback={<Loader />}>
              <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{ width: "100%", height: "100%", position: "fixed" }}
                shadows
                dpr={[1, 2]} // Optimize for different device pixel ratios
                performance={{ min: 0.5 }} // Performance optimization
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
                className="section-container split-layout"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="content-left">
                  <Home />
                </div>
                <div className="content-right model-focus">
                  <div className="home-model"></div>
                </div>
              </motion.section>

              <motion.section
                ref={aboutRef}
                id="about"
                className="section-container split-layout about-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="content-left-40 model-focus">
                  <div className="image-container about-image">
                    <img
                      src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                      alt="Cute panda"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                  </div>
                </div>
                <div className="content-right-60">
                  <About />
                </div>
              </motion.section>

              <motion.section
                ref={projectsRef}
                id="projects"
                className="section-container full-width-section"
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
                className="section-container split-layout contact-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="content-left-40 model-focus">
                  <div className="image-container contact-image">
                    <img
                      src="https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                      alt="Panda eating bamboo"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                  </div>
                </div>
                <div className="content-right-60">
                  <Contact />
                </div>
              </motion.section>
            </AnimatePresence>

            {/* Footer */}
            <footer
              className="footer"
              style={{ width: "100%", boxSizing: "border-box" }}
            >
              <p>
                Made with <span className="heart">❤</span> by Key Sho Wor &copy;{" "}
                {new Date().getFullYear()}
              </p>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
