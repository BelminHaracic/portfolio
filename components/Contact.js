import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Contact.module.css';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully! 🚀');
    }, 2000);
  };

  return (
    <section id="contact" className={styles.contact} ref={contactRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.techGrid}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>Get In Touch</span>
            <span className={styles.titleSub}>Let's Build Something Amazing</span>
          </h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.content}>
          {/* Contact Form - Centered */}
          <div className={`${styles.formContainer} ${isVisible ? styles.visible : ''}`}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              {/* Form Glow Effect */}
              <div className={styles.formGlow}></div>

              <h3 className={styles.formTitle}>Send Message</h3>
              
              {/* Name Field */}
              <div className={styles.inputGroup}>
                <div className={styles.inputIcon}>
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  required
                />
                <div className={styles.inputFocusLine}></div>
              </div>

              {/* Email Field */}
              <div className={styles.inputGroup}>
                <div className={styles.inputIcon}>
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  required
                />
                <div className={styles.inputFocusLine}></div>
              </div>

              {/* Message Field */}
              <div className={styles.inputGroup}>
                <div className={styles.inputIcon}>
                  <FaComment />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textareaField}
                  rows="5"
                  required
                ></textarea>
                <div className={styles.inputFocusLine}></div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className={styles.buttonIcon} />
                    Send Message
                  </>
                )}
                <div className={styles.buttonGlow}></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}