import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bamboo Forest VR",
      description:
        "Immersive VR experience with realistic physics and panda interactions.",
      image:
        "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["Three.js", "WebVR", "React"],
      link: "#",
    },
    {
      id: 2,
      title: "Panda Chat",
      description:
        "Real-time messaging with panda-themed UI, encryption and file sharing.",
      image:
        "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["React", "Firebase", "CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Anime Creator",
      description:
        "Create custom anime-style panda characters with various customization options.",
      image:
        "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["JavaScript", "Canvas", "GSAP"],
      link: "#",
    },
    {
      id: 4,
      title: "3D Portfolio",
      description:
        "Interactive 3D portfolio template with responsive panda animations.",
      image:
        "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["Three.js", "React", "Framer"],
      link: "#",
    },
    {
      id: 5,
      title: "Panda Game",
      description:
        "Browser game featuring a panda collecting bamboo with multiple levels.",
      image:
        "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["JavaScript", "Phaser", "HTML5"],
      link: "#",
    },
    {
      id: 6,
      title: "Weather App",
      description:
        "Weather app with panda animations that change based on conditions.",
      image:
        "https://images.unsplash.com/photo-1605336690991-0a59dc353602?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["React", "API", "CSS"],
      link: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

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
        Projects
      </motion.h1>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
                width="300"
                height="180"
              />
              <div className="project-overlay">
                <a href={project.link} className="project-link-btn" aria-label="View project">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
