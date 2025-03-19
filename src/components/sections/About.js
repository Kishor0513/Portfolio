import React from "react";
import { motion } from "framer-motion";

const About = ({ aboutRef }) => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "TypeScript", level: 75 },
    { name: "MongoDB", level: 78 },
    { name: "Express", level: 82 },
  ];

  return (
    <motion.div
      ref={aboutRef}
      id="about"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        padding: "8rem 2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background:
          "linear-gradient(to bottom, rgba(15, 14, 38, 0.8), rgba(30, 28, 76, 0.9))",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="bg-decoration"
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(138, 43, 226, 0.2), transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
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
          bottom: "20%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 105, 180, 0.15), transparent 70%)",
          filter: "blur(50px)",
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

      {/* Main container */}
      <motion.div
        className="about-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {/* Section title */}
        <motion.div
          className="section-title"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              marginBottom: "1rem",
              textAlign: "center",
              background: "linear-gradient(135deg, #8A2BE2, #FF69B4)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 15px rgba(138, 43, 226, 0.3)",
              position: "relative",
            }}
          >
            About Me
            <motion.span
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                height: "4px",
                width: "80px",
                background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
                borderRadius: "2px",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            I'm a passionate Full Stack Developer & UI/UX Designer creating
            modern web experiences.
          </p>
        </motion.div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            width: "100%",
          }}
        >
          {/* Bio section */}
          <motion.div
            className="bio"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              padding: "2.5rem",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
                color: "#ffffff",
                position: "relative",
                display: "inline-block",
              }}
            >
              Who I Am
              <motion.span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "0",
                  height: "3px",
                  width: "100%",
                  background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
                  borderRadius: "3px",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              I'm Kishor Chaudhary, a dedicated Full Stack Developer with a
              passion for creating seamless digital experiences. With a strong
              foundation in both front-end and back-end technologies, I
              specialize in building modern, responsive web applications.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.7,
              }}
            >
              My journey in web development has been driven by a fascination
              with turning complex problems into elegant solutions. I strive to
              continuously learn and adapt to emerging technologies, ensuring
              that my skills remain at the cutting edge of the industry.
            </p>
          </motion.div>

          {/* Skills section */}
          <motion.div
            className="skills"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              padding: "2.5rem",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
                color: "#ffffff",
                position: "relative",
                display: "inline-block",
              }}
            >
              My Skills
              <motion.span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "0",
                  height: "3px",
                  width: "100%",
                  background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
                  borderRadius: "3px",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </h3>

            <div
              className="skills-list"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  style={{ width: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#ffffff", fontWeight: "500" }}>
                      {skill.name}
                    </span>
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "8px",
                      width: "100%",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        height: "100%",
                        background: `linear-gradient(to right, #8A2BE2, #FF69B4)`,
                        borderRadius: "4px",
                        boxShadow: "0 0 10px rgba(138, 43, 226, 0.5)",
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education and Certification */}
        <motion.div
          className="education"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            padding: "2.5rem",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            width: "100%",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              color: "#ffffff",
              position: "relative",
              display: "inline-block",
            }}
          >
            Education & Certifications
            <motion.span
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "0",
                height: "3px",
                width: "100%",
                background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
                borderRadius: "3px",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(138, 43, 226, 0.15)",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 105, 180, 0.3))",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    color: "#ffffff",
                  }}
                >
                  2018 - 2022
                </span>
              </div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                B.Sc. Computer Science
              </h4>
              <p
                style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1rem" }}
              >
                University of Technology
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(138, 43, 226, 0.15)",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 105, 180, 0.3))",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    color: "#ffffff",
                  }}
                >
                  2023
                </span>
              </div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                Full Stack Web Development
              </h4>
              <p
                style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1rem" }}
              >
                Udemy Certification
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(138, 43, 226, 0.15)",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 105, 180, 0.3))",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    color: "#ffffff",
                  }}
                >
                  2022
                </span>
              </div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                UI/UX Design Fundamentals
              </h4>
              <p
                style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1rem" }}
              >
                Coursera Specialization
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
