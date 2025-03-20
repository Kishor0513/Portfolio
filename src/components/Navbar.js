import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faUser,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({
  activeSection,
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll changes for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (scrollFunction) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    scrollFunction();
  };

  // Mobile menu animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: scrolled
          ? "rgba(10, 10, 30, 0.95)"
          : "rgba(10, 10, 30, 0.6)",
        backdropFilter: "blur(15px)",
        boxShadow: scrolled
          ? "0 10px 30px rgba(0, 0, 0, 0.3)"
          : "0 5px 20px rgba(0, 0, 0, 0.1)",
        borderBottom: scrolled
          ? "1px solid rgba(138, 43, 226, 0.4)"
          : "1px solid rgba(138, 43, 226, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{
        padding: "1.5rem 3rem",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <motion.div
        className="logo"
        onClick={() => handleNavClick(scrollToHome)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          fontSize: "2rem",
          fontWeight: "800",
          background: "linear-gradient(135deg, #8A2BE2, #FF69B4)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          cursor: "pointer",
          letterSpacing: "1px",
          textShadow: "0 0 20px rgba(138, 43, 226, 0.3)",
        }}
      >
        Key Sho Wor
      </motion.div>

      {/* Desktop Navigation */}
      <div
        className="nav-links desktop-nav"
        style={{ display: "flex", gap: "2.5rem" }}
      >
        <motion.button
          onClick={() => handleNavClick(scrollToHome)}
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            color:
              activeSection === "home" ? "#ffffff" : "rgba(255, 255, 255, 0.8)",
            fontWeight: activeSection === "home" ? "600" : "500",
            fontSize: "1.1rem",
            position: "relative",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 0",
            letterSpacing: "0.5px",
          }}
        >
          Home
        </motion.button>

        <motion.button
          onClick={() => handleNavClick(scrollToProjects)}
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            color:
              activeSection === "projects"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.8)",
            fontWeight: activeSection === "projects" ? "600" : "500",
            fontSize: "1.1rem",
            position: "relative",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 0",
            letterSpacing: "0.5px",
          }}
        >
          Projects
        </motion.button>

        <motion.button
          onClick={() => handleNavClick(scrollToAbout)}
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            color:
              activeSection === "about"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.8)",
            fontWeight: activeSection === "about" ? "600" : "500",
            fontSize: "1.1rem",
            position: "relative",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 0",
            letterSpacing: "0.5px",
          }}
        >
          About
        </motion.button>

        <motion.button
          onClick={() => handleNavClick(scrollToContact)}
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            color:
              activeSection === "contact"
                ? "#ffffff"
                : "rgba(255, 255, 255, 0.8)",
            fontWeight: activeSection === "contact" ? "600" : "500",
            fontSize: "1.1rem",
            position: "relative",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 0",
            letterSpacing: "0.5px",
          }}
        >
          Contact
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.div
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 15px rgba(138, 43, 226, 0.5)",
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: mobileMenuOpen ? 90 : 0,
          background: mobileMenuOpen
            ? "linear-gradient(135deg, rgba(255, 105, 180, 0.3), rgba(138, 43, 226, 0.3))"
            : "linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(255, 105, 180, 0.2))",
        }}
        style={{
          display: "none",
          background:
            "linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(255, 105, 180, 0.2))",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
        }}
      >
        <FontAwesomeIcon
          icon={mobileMenuOpen ? faTimes : faBars}
          color="#ffffff"
          size="lg"
        />
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="dropdown-menu"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "absolute",
              top: "80px",
              right: "20px",
            }}
          >
            <motion.div
              className="dropdown-item"
              variants={itemVariants}
              onClick={() => handleNavClick(scrollToHome)}
            >
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </motion.div>

            <motion.div
              className="dropdown-item"
              variants={itemVariants}
              onClick={() => handleNavClick(scrollToProjects)}
            >
              <FontAwesomeIcon icon={faProjectDiagram} />
              <span>Projects</span>
            </motion.div>

            <motion.div
              className="dropdown-item"
              variants={itemVariants}
              onClick={() => handleNavClick(scrollToAbout)}
            >
              <FontAwesomeIcon icon={faUser} />
              <span>About</span>
            </motion.div>

            <motion.div
              className="dropdown-item"
              variants={itemVariants}
              onClick={() => handleNavClick(scrollToContact)}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Contact</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation - Styles */}
      <style jsx>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
