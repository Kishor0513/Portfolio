import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      text: "Kathmandu, Nepal",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "kishor.chaudhary@example.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "+977 9800123456",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/",
      color: "#0077B5",
      name: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/",
      color: "#333",
      name: "GitHub",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/",
      color: "#1DA1F2",
      name: "Twitter",
    },
  ];

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 5px 15px rgba(138, 43, 226, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
  };

  return (
    <motion.div
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        padding: "6rem 1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background:
          "linear-gradient(to bottom, rgba(30, 28, 76, 0.9), rgba(15, 14, 38, 0.8))",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="bg-decoration"
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(138, 43, 226, 0.15), transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
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
          bottom: "15%",
          right: "10%",
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

      {/* Contact container */}
      <motion.div
        className="contact-container"
        style={{
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
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
              fontSize: "2.5rem",
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
            Get In Touch
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
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 2rem auto",
              lineHeight: 1.7,
            }}
          >
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat!
          </p>
        </motion.div>

        {/* Contact left-right layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "2rem",
            width: "100%",
            padding: "0",
          }}
        >
          {/* Contact information - Left side */}
          <motion.div
            className="contact-info"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
              padding: "3.5rem",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "var(--border-radius-lg)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              height: "100%",
              flex: "1",
              maxWidth: "49%",
            }}
          >
            <h3
              style={{
                fontSize: "1.7rem",
                marginBottom: "1rem",
                color: "#fff",
              }}
            >
              Contact Information
            </h3>

            {/* Contact details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(138, 43, 226, 0.8), rgba(255, 105, 180, 0.8))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      {info.title}
                    </h4>
                    <p
                      style={{
                        margin: "0.3rem 0 0 0",
                        fontSize: "0.95rem",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      {info.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ marginTop: "1rem" }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                Connect With Me
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      color: "#fff",
                      background: `rgba(255, 255, 255, 0.1)`,
                      border: `1px solid ${social.color}40`,
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form - Right side */}
          <motion.div
            className="contact-form"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              padding: "3.5rem",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "var(--border-radius-lg)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              height: "100%",
              flex: "1",
              maxWidth: "49%",
            }}
          >
            <h3
              style={{
                fontSize: "1.7rem",
                marginBottom: "1.8rem",
                color: "#fff",
              }}
            >
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <motion.div
                  whileHover="focus"
                  variants={inputVariants}
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem 1.2rem",
                      fontSize: "1.1rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box",
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover="focus"
                  variants={inputVariants}
                  style={{
                    position: "relative",
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem 1.2rem",
                      fontSize: "1.1rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box",
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover="focus"
                  variants={inputVariants}
                  style={{
                    position: "relative",
                  }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem 1.2rem",
                      fontSize: "1.1rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                      outline: "none",
                      transition: "all 0.3s ease",
                      minHeight: "180px",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: "1rem 2.5rem",
                    background: "linear-gradient(135deg, #8A2BE2, #FF69B4)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "inline-block",
                    transition: "all 0.3s ease",
                    boxShadow: "0 6px 20px rgba(138, 43, 226, 0.4)",
                    alignSelf: "flex-start",
                    opacity: isSubmitting ? 0.7 : 1,
                    marginTop: "0.5rem",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: "0.8rem",
                      background: "rgba(0, 200, 83, 0.1)",
                      border: "1px solid rgba(0, 200, 83, 0.3)",
                      borderRadius: "8px",
                      color: "#00c853",
                      fontSize: "0.9rem",
                      marginTop: "1rem",
                    }}
                  >
                    Your message has been sent successfully!
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
