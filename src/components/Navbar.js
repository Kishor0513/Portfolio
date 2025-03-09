import React from "react";
import { motion } from "framer-motion";

const Navbar = ({
  activeSection,
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}) => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <motion.div
        className="logo"
        onClick={scrollToHome}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Kishor Chaudhary 
      </motion.div>
      <div className="nav-links">
        <motion.button
          onClick={scrollToHome}
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Home
        </motion.button>
        <motion.button
          onClick={scrollToAbout}
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About
        </motion.button>
        <motion.button
          onClick={scrollToProjects}
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Projects
        </motion.button>
        <motion.button
          onClick={scrollToContact}
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
