import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.greeting}>Hello, I'm</h1>
        <h2 className={styles.name}>Belmin Haračić</h2>
        <p className={styles.description}>Aspiring to innovate and expand my knowledge every day.</p>
        {/* Preko linka omogućavamo preuzimanje CV-a */}
        <a href="/CV_Belmin_Haracic.pdf" download className={styles.downloadButton}>
          Download CV
        </a>
        <div className={styles.socialMedia}>
          <a href="https://github.com/BelminHaracic" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/belmin-haračić-28563a227" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/slika.jpg" alt="Belmin Haračić" className={styles.profileImage} />
      </div>
    </section>
  );
}
