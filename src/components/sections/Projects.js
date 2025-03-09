import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bamboo Forest VR Experience",
      description:
        "An immersive VR experience set in a bamboo forest with realistic physics and interactions. Users can explore the environment and interact with pandas in their natural habitat.",
      image:
        "https://unsplash.com/photos/panda-bear-sitting-on-bamboo-sticks-surrounded-with-trees-NsNRu6dfRds",
      tags: ["Three.js", "WebVR", "React"],
    },
    {
      id: 2,
      title: "Panda Chat App",
      description:
        "A real-time chat application with cute panda-themed UI and animations. Features include message encryption, file sharing, and custom panda emojis.",
      image:
        "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["React", "Firebase", "CSS Animation"],
    },
    {
      id: 3,
      title: "Anime Character Creator",
      description:
        "A web app that lets users create and customize anime-style panda characters with various options including outfits, accessories, and poses.",
      image:
        "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["JavaScript", "Canvas API", "GSAP"],
    },
    {
      id: 4,
      title: "3D Portfolio Template",
      description:
        "A customizable 3D portfolio template for creative professionals with interactive elements and panda-themed animations that respond to user interactions.",
      image:
        "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["Three.js", "React", "Framer Motion"],
    },
    {
      id: 5,
      title: "Panda Game",
      description:
        "A fun browser-based game where you play as a panda collecting bamboo and avoiding obstacles. Features multiple levels and power-ups.",
      image:
        "https://images.unsplash.com/photo-1591382386627-349b692688ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["JavaScript", "Phaser.js", "HTML5"],
    },
    {
      id: 6,
      title: "Weather App",
      description:
        "A weather application with beautiful panda animations that change based on current weather conditions. Includes forecast data and location-based services.",
      image:
        "https://images.unsplash.com/photo-1605336690991-0a59dc353602?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      tags: ["React", "OpenWeather API", "CSS"],
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
        My Projects
      </motion.h1>

      <p className="section-text">
        Here are some of my recent projects. Each one represents a unique
        challenge and learning experience.
      </p>

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
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
              width="300"
              height="200"
            />
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
