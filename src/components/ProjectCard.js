import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(10px)",
        position: "relative",
      }}
    >
      {/* Decorative gradient element */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
          zIndex: 1,
        }}
      />

      {/* Project image */}
      <motion.div
        className="project-image-container"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "100%",
          height: "200px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 0.5s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent, rgba(15, 14, 38, 0.8))",
          }}
        />
      </motion.div>

      {/* Project info */}
      <div
        className="project-info"
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Tags */}
        <div
          className="project-tags"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              viewport={{ once: true }}
              style={{
                padding: "0.3rem 0.8rem",
                background:
                  "linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(255, 105, 180, 0.2))",
                color: "white",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: "500",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "0.8rem",
            color: "white",
            letterSpacing: "0.5px",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: "1.6",
            flex: 1,
            marginBottom: "1.5rem",
          }}
        >
          {project.description}
        </p>

        {/* Links */}
        <div
          className="project-links"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "white",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "500",
              background: "rgba(30, 28, 76, 0.5)",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <FaGithub size={16} />
            <span>Source Code</span>
          </motion.a>

          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "white",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "500",
              background:
                "linear-gradient(135deg, rgba(138, 43, 226, 0.7), rgba(255, 105, 180, 0.7))",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(138, 43, 226, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            <FaExternalLinkAlt size={14} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
