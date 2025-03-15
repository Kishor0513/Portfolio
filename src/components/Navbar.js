import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({
  activeSection,
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (scrollFunction) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    scrollFunction();
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <motion.div
        className="logo"
        onClick={() => handleNavClick(scrollToHome)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Kishor Chaudhary
      </motion.div>

      {/* Desktop Navigation */}
      <div className="nav-links desktop-nav">
        <motion.button
          onClick={() => handleNavClick(scrollToHome)}
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Home
        </motion.button>
        <motion.button
          onClick={() => handleNavClick(scrollToProjects)}
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Projects
        </motion.button>
        <motion.button
          onClick={() => handleNavClick(scrollToAbout)}
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About
        </motion.button>
        <motion.button
          onClick={() => handleNavClick(scrollToContact)}
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contact
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.div 
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        whileTap={{ scale: 0.9 }}
      >
        <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => handleNavClick(scrollToHome)}
              className={`mobile-nav-link ${activeSection === "home" ? "active" : ""}`}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button
              onClick={() => handleNavClick(scrollToProjects)}
              className={`mobile-nav-link ${activeSection === "projects" ? "active" : ""}`}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.button>
            <motion.button
              onClick={() => handleNavClick(scrollToAbout)}
              className={`mobile-nav-link ${activeSection === "about" ? "active" : ""}`}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button
              onClick={() => handleNavClick(scrollToContact)}
              className={`mobile-nav-link ${activeSection === "contact" ? "active" : ""}`}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
