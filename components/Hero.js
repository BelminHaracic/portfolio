import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer za animacije pri skrolovanju
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      {/* Floating background elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
        <div className={styles.floatingElement4}></div>
      </div>
      
      {/* Animated gradient background */}
      <div className={styles.animatedBackground}></div>
      
      <div className={`${styles.textContainer} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.textContent}>
          <h1 className={styles.greeting}>
            <span className={styles.greetingText}>Hello, I'm</span>
            <span className={styles.wave}>👋</span>
          </h1>
          <h2 className={styles.name}>
            <span className={styles.namePart1}>Belmin</span>
            <span className={styles.namePart2}>Haračić</span>
          </h2>
          <div className={styles.typingContainer}>
            <p className={styles.description}>
              Aspiring to innovate and expand my knowledge every day.
            </p>
          </div>
          
          {/* Download CV button with icon */}
          <a href="/CV_Belmin_Haracic.pdf" download className={styles.downloadButton}>
            <FaDownload className={styles.buttonIcon} />
            Download CV
          </a>
          
          {/* Social media links */}
          <div className={styles.socialMedia}>
            <a href="https://github.com/BelminHaracic" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub className={styles.icon} />
              <span className={styles.socialText}>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/belmin-haračić-28563a227" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin className={styles.icon} />
              <span className={styles.socialText}>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className={`${styles.imageContainer} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.imageWrapper}>
          <img src="/images/slika.jpg" alt="Belmin Haračić" className={styles.profileImage} />
          <div className={styles.imageGlow}></div>
        </div>
        
        
      </div>
      
      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
}