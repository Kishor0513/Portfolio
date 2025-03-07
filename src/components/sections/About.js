import React from "react";
import { motion } from "framer-motion";

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

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="section-subtitle">Who am I?</h2>
          <p className="section-text">
            I'm a passionate frontend developer with a love for creating
            immersive web experiences. My journey in web development started 5
            years ago, and I've been exploring the intersection of art and
            technology ever since.
          </p>
          <p className="section-text">
            With a background in both design and development, I bring a unique
            perspective to every project. I believe that great websites should
            not only look beautiful but also provide intuitive user experiences.
          </p>
          <p className="section-text">
            When I'm not coding, you can find me exploring new 3D modeling
            techniques, playing with my bamboo collection, or enjoying nature
            walks in the forest.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="section-subtitle">My Skills</h2>

          <div style={{ marginTop: "1.5rem" }}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                style={{ marginBottom: "1.2rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    style={{
                      height: "100%",
                      background:
                        "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
                      borderRadius: "10px",
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
