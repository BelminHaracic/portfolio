import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Experience.module.css';
import { FaCar, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Embedded Systems Intern",
      company: "Maasu Group BH d.o.o.",
      date: "October 2023 - December 2023",
      location: "Bosnia and Herzegovina",
      description: "Contributed to the automotive inverter controller project during an eight-week internship. Applied VHDL code using Vivado on the PYNQ-Z2 FPGA board, demonstrating technical expertise.",
      achievements: [
        "Managed project phases using V-model, Confluence, and Jira",
        "Applied industry standards: ASPICE, ISO 26262, ISO 9001, and TISAX",
        "Conducted unit, integration, and system testing with mentor support",
        "Demonstrated commitment and innovation in automotive embedded systems"
      ],
      technologies: ["VHDL", "Vivado", "PYNQ-Z2 FPGA", "ASPICE", "ISO 26262", "ISO 9001", "TISAX"],
      icon: <FaCar />,
      category: "Embedded Systems"
    }
  ];

  return (
    <section id="experience" className={styles.experience} ref={experienceRef}>
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
            <span className={styles.titleText}>Professional Experience</span>
            <span className={styles.titleSub}>My Journey & Growth</span>
          </h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.content}>
          {/* Main Experience Timeline */}
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`${styles.experienceItem} ${isVisible ? styles.visible : ''}`}
                style={{ '--delay': `${index * 0.3}s` }}
              >
                {/* Timeline Line */}
                <div className={styles.timelineLine}></div>
                
                {/* Timeline Dot */}
                <div className={styles.timelineDot}>
                  <div className={styles.dotIcon}>{exp.icon}</div>
                  <div className={styles.dotGlow}></div>
                </div>

                {/* Experience Card */}
                <div className={styles.experienceCard}>
                  {/* Card Glow Effect */}
                  <div className={styles.cardGlow}></div>

                  {/* Card Header */}
                  <div className={styles.cardHeader}>
                    <div className={styles.titleSection}>
                      <h3 className={styles.jobTitle}>{exp.title}</h3>
                      <div className={styles.companyInfo}>
                        <FaMapMarkerAlt className={styles.locationIcon} />
                        <span className={styles.company}>{exp.company}</span>
                        <span className={styles.location}>{exp.location}</span>
                      </div>
                    </div>
                    <div className={styles.dateSection}>
                      <FaCalendar className={styles.dateIcon} />
                      <span className={styles.date}>{exp.date}</span>
                      <div className={styles.categoryBadge}>
                        {exp.icon}
                        <span>{exp.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={styles.description}>{exp.description}</p>

                  {/* Key Achievements */}
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>Key Achievements</h4>
                    <div className={styles.achievementsGrid}>
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className={styles.achievementItem}>
                          <div className={styles.achievementIcon}>✓</div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className={styles.technologies}>
                    <h4 className={styles.technologiesTitle}>Technologies & Standards</h4>
                    <div className={styles.techTags}>
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={styles.cardHoverEffect}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}