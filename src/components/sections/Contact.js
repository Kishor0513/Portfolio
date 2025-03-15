import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "panda@example.com",
      link: "mailto:panda@example.com",
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Kathmandu, Nepal",
      link: "https://maps.google.com/?q=Kathmandu,Nepal",
    },
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
        Contact
      </motion.h1>

      <div className="contact-container">
        <div className="contact-info-container">
          <h3 className="contact-subtitle">Get in Touch</h3>
          <p className="contact-text">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="contact-info-list">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-info-item"
                target={info.icon === "fas fa-map-marker-alt" ? "_blank" : ""}
                rel={info.icon === "fas fa-map-marker-alt" ? "noopener noreferrer" : ""}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
              >
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </motion.div>
        </div>

        <div className="contact-form-container">
          {isSubmitted ? (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Thank you!</h3>
              <p>Your message has been sent successfully. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="form-row">
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
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (123) 456-7890"
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
                  rows="5"
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(138, 43, 226, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span className="loading-spinner">
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
