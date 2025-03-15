import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      date: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Leading UI/UX development for enterprise applications",
      icon: "💻",
    },
    {
      id: 2,
      date: "2020 - 2022",
      title: "Web Developer",
      company: "Creative Solutions",
      description: "Built responsive websites and interactive web applications",
      icon: "🌐",
    },
    {
      id: 3,
      date: "2018 - 2020",
      title: "Junior Developer",
      company: "Digital Crafts",
      description: "Developed and maintained client websites",
      icon: "🛠️",
    },
    {
      id: 4,
      date: "2017 - 2018",
      title: "Intern",
      company: "WebTech Studios",
      description:
        "Assisted in frontend development and learned core web technologies",
      icon: "🎓",
    },
  ];

  return (
    <div className="timeline-container">
      <motion.h2
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience Roadmap
      </motion.h2>

      <div className="timeline">
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="timeline-dot">
              <span className="timeline-icon">{exp.icon}</span>
            </div>
            <motion.div 
              className="timeline-content"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(138, 43, 226, 0.2)"
              }}
            >
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">
                <span className="company-name">{exp.company}</span>
              </div>
              <p className="timeline-description">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
