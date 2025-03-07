import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
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
        Contact Me
      </motion.h1>

      <p className="section-text">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: "2rem",
            background: "rgba(138, 43, 226, 0.1)",
            borderRadius: "10px",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
            Thank you for your message!
          </h3>
          <p>I'll get back to you as soon as possible.</p>
        </motion.div>
      ) : (
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-color)", fontSize: "1.5rem" }}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-color)", fontSize: "1.5rem" }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-color)", fontSize: "1.5rem" }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="mailto:panda@example.com"
          style={{ color: "var(--text-color)", fontSize: "1.5rem" }}
        >
          <i className="fas fa-envelope"></i>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
