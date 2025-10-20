import { useState, useEffect, useRef } from 'react';
import { FaCode, FaGraduationCap, FaRocket, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';
import styles from '../styles/About.module.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const skills = [
    { icon: <FaCode />, name: 'Full-Stack Development', level: 90 },
    { icon: <FaUsers />, name: 'Team Collaboration', level: 95 },
    { icon: <FaLightbulb />, name: 'Problem Solving', level: 88 },
    { icon: <FaRocket />, name: 'Innovation', level: 92 }
  ];

  return (
    <section className={styles.about} id="about" ref={aboutRef}>
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.gridOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              <span className={styles.titleMain}>About Me</span>
              <span className={styles.titleSub}>My Journey & Passion</span>
            </h2>
            <div className={styles.titleLine}></div>
          </div>
        </div>

        <div className={styles.content}>
          {/* Main Content Grid */}
          <div className={styles.contentGrid}>
            {/* Text Content */}
            <div className={`${styles.textContent} ${isVisible ? styles.visible : ''}`}>
              <div className={styles.intro}>
                <div className={styles.education}>
                  <FaGraduationCap className={styles.educationIcon} />
                  Software Engineering Graduate from Polytechnic Faculty
                </div>
              </div>

              <div className={styles.description}>
                <p className={styles.paragraph}>
                  I'm a <strong>passionate software engineer</strong> dedicated to crafting 
                  exceptional digital experiences. My journey in technology is driven by 
                  <strong> curiosity and innovation</strong>, constantly pushing boundaries 
                  to create solutions that matter.
                </p>

                <p className={styles.paragraph}>
                  What sets me apart is my <strong>unwavering commitment to growth</strong>. 
                  I thrive in collaborative environments where ideas flourish, and I'm 
                  always eager to take on challenges that stretch my capabilities. 
                  <strong> Teamwork and communication</strong> are at the core of my approach.
                </p>

                <div className={styles.mission}>
                  <FaHeart className={styles.missionIcon} />
                  <span>
                    My mission: <strong>Transform complex problems into elegant solutions</strong> 
                    through creativity and technical excellence.
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Visualization */}
            <div className={`${styles.skillsContainer} ${isVisible ? styles.visible : ''}`}>
              <h3 className={styles.skillsTitle}>Core Competencies</h3>
              <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className={styles.skillItem}
                    style={{ '--delay': index * 0.2 + 's' }}
                  >
                    <div className={styles.skillHeader}>
                      <div className={styles.skillIcon}>{skill.icon}</div>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}