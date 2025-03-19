import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      date: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading UI/UX development for enterprise applications with a focus on React and Three.js. Created immersive 3D experiences for web applications.",
      icon: "💻",
      color: "#8A2BE2",
    },
    {
      id: 2,
      date: "2020 - 2022",
      title: "Web Developer",
      company: "Creative Solutions",
      description:
        "Built responsive websites and interactive web applications using modern JavaScript frameworks. Implemented custom animations and UI components.",
      icon: "🌐",
      color: "#FF69B4",
    },
    {
      id: 3,
      date: "2018 - 2020",
      title: "Junior Developer",
      company: "Digital Crafts",
      description:
        "Developed and maintained client websites. Collaborated with designers to implement pixel-perfect interfaces and seamless user experiences.",
      icon: "🛠️",
      color: "#00BFFF",
    },
    {
      id: 4,
      date: "2017 - 2018",
      title: "Intern",
      company: "WebTech Studios",
      description:
        "Assisted in frontend development and learned core web technologies. Gained hands-on experience with HTML, CSS, JavaScript, and modern development workflows.",
      icon: "🎓",
      color: "#32CD32",
    },
  ];

  return (
    <div
      className="timeline-container"
      style={{
        width: "100%",
        padding: "40px",
        position: "relative",
        background: "rgba(15, 14, 38, 0.8)",
        borderRadius: "20px",
        boxShadow:
          "0 15px 35px rgba(0, 0, 0, 0.2), 0 0 20px rgba(138, 43, 226, 0.15)",
        overflow: "hidden",
        border: "1px solid rgba(138, 43, 226, 0.3)",
        backdropFilter: "blur(15px)",
      }}
    >
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            borderRadius: "50%",
            background: `rgba(${Math.random() * 138}, ${Math.random() * 43}, ${
              Math.random() * 226
            }, ${Math.random() * 0.2 + 0.1})`,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            zIndex: "0",
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.7, 0.1, 0.7],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, rgba(255, 105, 180, 0.08) 50%, transparent 70%)",
          filter: "blur(30px)",
          zIndex: "0",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 105, 180, 0.15) 0%, rgba(138, 43, 226, 0.08) 50%, transparent 70%)",
          filter: "blur(25px)",
          zIndex: "0",
        }}
      ></div>

      <motion.h2
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          color: "white",
          fontWeight: "800",
          fontSize: "2.8rem",
          textAlign: "center",
          marginBottom: "50px",
          position: "relative",
          zIndex: "1",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "0 0 20px rgba(138, 43, 226, 0.5)",
        }}
      >
        Professional Journey
        <div
          style={{
            width: "120px",
            height: "5px",
            background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
            margin: "15px auto 0",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(138, 43, 226, 0.5)",
          }}
        />
      </motion.h2>

      <div
        className="timeline"
        style={{
          position: "relative",
          margin: "0 auto",
          maxWidth: "1000px",
          zIndex: "1",
        }}
      >
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: "22px",
            top: "10px",
            height: "calc(100% - 20px)",
            width: "6px",
            background: "linear-gradient(to bottom, #8A2BE2, #FF69B4)",
            zIndex: "1",
            boxShadow: "0 0 15px rgba(138, 43, 226, 0.6)",
            borderRadius: "3px",
          }}
        ></div>

        {experiences.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={exp.id}
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
              marginBottom: "50px",
              paddingLeft: "70px",
              position: "relative",
              zIndex: "2",
            }}
          >
            <motion.div
              className="timeline-dot"
              whileHover={{ scale: 1.2 }}
              style={{
                position: "absolute",
                left: "10px",
                top: "15px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${exp.color}, #FF69B4)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "2",
                boxShadow: `0 0 20px ${exp.color}80`,
                animation: "pulse 2s infinite",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <span
                className="timeline-icon"
                style={{
                  fontSize: "16px",
                  filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))",
                }}
              >
                {exp.icon}
              </span>
            </motion.div>

            <motion.div
              className="timeline-content"
              whileHover={{
                scale: 1.03,
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.25), 0 0 20px ${exp.color}40`,
              }}
              transition={{ duration: 0.4 }}
              style={{
                background: "rgba(30, 28, 50, 0.9)",
                borderRadius: "16px",
                padding: "30px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                border: `1px solid ${exp.color}40`,
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Hover effect overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(135deg, ${exp.color}10, ${exp.color}01)`,
                  zIndex: 0,
                }}
              />

              {/* Decorative corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "80px",
                  height: "80px",
                  background: `linear-gradient(135deg, transparent 50%, ${exp.color}20 50%)`,
                  zIndex: 0,
                }}
              />

              <div
                className="timeline-date"
                style={{
                  color: exp.color,
                  fontWeight: "bold",
                  marginBottom: "12px",
                  fontSize: "1.1rem",
                  position: "relative",
                  zIndex: "1",
                  display: "inline-block",
                  padding: "6px 16px",
                  background: `${exp.color}15`,
                  borderRadius: "20px",
                  boxShadow: `0 3px 10px ${exp.color}20`,
                  border: `1px solid ${exp.color}30`,
                  letterSpacing: "1px",
                }}
              >
                {exp.date}
              </div>

              <h3
                className="timeline-title"
                style={{
                  marginBottom: "10px",
                  fontSize: "2rem",
                  background: `linear-gradient(135deg, white, ${exp.color})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  position: "relative",
                  zIndex: "1",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                {exp.title}
              </h3>

              <h4
                className="timeline-company"
                style={{
                  marginBottom: "15px",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.3rem",
                  position: "relative",
                  zIndex: "1",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                }}
              >
                @ {exp.company}
              </h4>

              <p
                className="timeline-description"
                style={{
                  lineHeight: "1.8",
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "1.05rem",
                  position: "relative",
                  zIndex: "1",
                  padding: "5px 0",
                }}
              >
                {exp.description}
              </p>

              {/* Skills tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "20px",
                }}
              >
                {["React", "JavaScript", "UI/UX", "Three.js"].map((skill) => (
                  <div
                    key={skill}
                    style={{
                      background: `${exp.color}20`,
                      padding: "4px 12px",
                      borderRadius: "15px",
                      fontSize: "0.85rem",
                      color: "rgba(255, 255, 255, 0.9)",
                      border: `1px solid ${exp.color}30`,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Add a dedicated CSS style for the pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(138, 43, 226, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(138, 43, 226, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(138, 43, 226, 0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Timeline;
