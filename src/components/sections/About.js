import React from "react";
import { motion } from "framer-motion";
import Timeline from "../Timeline";

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Three.js", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "CSS/SCSS", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "3D Modeling", level: 75 },
  ];

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
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        About Me
      </motion.h1>

      <div className="about-content-centered">
        <motion.div
          className="about-bio"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="section-subtitle">Who am I?</h2>
          <p className="section-text">
            Frontend developer passionate about creating immersive web
            experiences. I specialize in React and Three.js, bringing designs to
            life with clean code and smooth animations.
          </p>
        </motion.div>

        {/* Timeline Component - Centered */}
        <motion.div
          className="experience-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Timeline />
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="section-subtitle">Skills</h2>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
