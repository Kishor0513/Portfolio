import React, { Suspense, useState, useEffect, useRef, lazy } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { debugSectionDetection } from "./debugging";

// CSS imports
import "./App.css";
import "./components/SplitLayout.css";
import "./ScrollFix.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import Loader from "./components/Loader";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import BackgroundCanvas from "./components/canvas/BackgroundCanvas";

// Lazy load components for better performance
const PandaModel = lazy(() => import("./components/canvas/PandaModel"));

function App() {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const appRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // For scroll tracking
  useScroll({
    target: appRef,
    offset: ["start", "end"],
  });

  useEffect(() => {
    // Set a minimum loading time of 1 second
    const timer = setTimeout(() => {
      // Check if all assets are loaded before hiding the loader
      if (document.readyState === "complete") {
        setLoading(false);
      } else {
        // For slow connections, add an event listener to hide loader when everything is loaded
        const handleLoad = () => setLoading(false);
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Debug section detection
  useEffect(() => {
    // Add this line to enable section detection debugging
    debugSectionDetection();
  }, []);

  // Function to scroll to a section with animation
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle scroll events and update active section - optimized with requestAnimationFrame
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

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]);

  return (
    <div className="App" ref={appRef}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Background Panda Model - Positioned at the top for proper layering */}
          <BackgroundCanvas />

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
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.div>

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
                <Home pandaModel={<PandaModel />} />
              </motion.section>

              <Suspense
                fallback={<div className="section-loading">Loading...</div>}
              >
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
                  ref={aboutRef}
                  id="about"
                  className="section-container full-width-section"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <About />
                </motion.section>

                <motion.section
                  ref={contactRef}
                  id="contact"
                  className="section-container full-width-section"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Contact contactRef={contactRef} />
                </motion.section>
              </Suspense>
            </AnimatePresence>

            {/* Footer */}
            <footer
              className="footer"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "2rem 1.5rem",
                background:
                  "linear-gradient(to bottom, rgba(30, 28, 76, 0.9), rgba(15, 14, 38, 1))",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative elements */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "10%",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(138, 43, 226, 0.15), transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "10%",
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 105, 180, 0.15), transparent 70%)",
                  filter: "blur(45px)",
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      background: "linear-gradient(135deg, #8A2BE2, #FF69B4)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Kishor Chaudhary
                  </div>

                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      margin: "0.5rem 0",
                      fontSize: "0.95rem",
                      maxWidth: "500px",
                    }}
                  >
                    Made with{" "}
                    <span
                      className="heart"
                      style={{
                        color: "#ff6b6b",
                        fontSize: "1.1rem",
                        position: "relative",
                        top: "2px",
                        display: "inline-block",
                        animation: "heartbeat 1.5s ease infinite",
                      }}
                    >
                      ❤
                    </span>{" "}
                    by Kishor Chaudhary &copy; {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
