import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Quick Links Column */}
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <a href="#about">
            <RiArrowRightSLine /> About
          </a>
          <a href="#skills">
            <RiArrowRightSLine /> Skills
          </a>
          <a href="#portfolio">
            <RiArrowRightSLine /> Projects
          </a>
          <a href="#experience">
            <RiArrowRightSLine /> Experience
          </a>
          <a href="#contact">
            <RiArrowRightSLine /> Contact
          </a>
        </div>

        {/* Contact Information Column */}
        <div className={styles.column}>
          <h4>Contact Me</h4>
          <a href="mailto:haracic.belmin.21@size.ba">
            <FaEnvelope /> haracic.belmin.21@size.ba
          </a>
          <a href="tel:+123456789">
            <FaPhone /> +387 62 586 149
          </a>
          <h4>Follow Me</h4>
          <div className={styles.footerIcons}>
            <a
              href="https://github.com/BelminHaracic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/belmin-haračić-28563a227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerLine}></div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Belmin Haračić. All rights reserved.
      </p>
    </footer>
  );
}
