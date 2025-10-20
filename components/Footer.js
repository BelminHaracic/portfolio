import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp, FaCode, FaHeart } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.footerOrb1}></div>
        <div className={styles.footerOrb2}></div>
      </div>

      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={`${styles.footerContent} ${isVisible ? styles.visible : ''}`}>
          
          {/* Brand Column */}
          <div className={styles.column}>
            <div className={styles.brandSection}>
              <div className={styles.brandLogo}>
                <FaCode className={styles.logoIcon} />
                <span className={styles.brandName}>Belmin Haračić</span>
              </div>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/BelminHaracic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/belmin-haračić-28563a227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navigation</h4>
            <div className={styles.linksList}>
              {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={styles.navLink}
                >
                  <RiArrowRightSLine className={styles.linkIcon} />
                  <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                  <div className={styles.linkHover}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:haracic.belmin.21@size.ba" className={styles.contactLink}>
                <div className={styles.contactIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>haracic.belmin.21@size.ba</span>
                </div>
              </a>
              
              <a href="tel:+38762586149" className={styles.contactLink}>
                <div className={styles.contactIcon}>
                  <FaPhone />
                </div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>+387 62 586 149</span>
                </div>
              </a>
            </div>

            <div className={styles.availability}>
              <div className={styles.availabilityDot}></div>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerDivider}></div>
          
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <span>&copy; {new Date().getFullYear()} Belmin Haračić. All rights reserved.</span>
              <div className={styles.madeWith}>
                Made with <FaHeart className={styles.heartIcon} /> and passion
              </div>
            </div>
            
            {/* Scroll to Top Button */}
            {showScrollTop && (
              <button onClick={scrollToTop} className={styles.scrollTop}>
                <FaArrowUp className={styles.scrollIcon} />
                <span>Back to Top</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}