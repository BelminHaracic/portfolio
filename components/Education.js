import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Education.module.css';
import { FaGraduationCap, FaUniversity, FaCalendar, FaAward, FaCode, FaBolt } from 'react-icons/fa';

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const educationRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      institution: "University of Zenica, Polytechnic Faculty",
      degree: "Master of Software Engineering",
      date: "November 2024 - Present",
      duration: "Ongoing",
      description: "Continuing specialization in software engineering with focus on advanced web technologies, system design, and AI-driven solutions.",
      icon: <FaCode />,
      type: "university",
      status: "In Progress"
    },
    {
      institution: "University of Zenica, Polytechnic Faculty",
      degree: "Software Engineering",
      date: "October 2021 - November 2024",
      duration: "3 Years",
      description: "Comprehensive software engineering program focusing on modern development practices, algorithms, and system design.",
      icon: <FaCode />,
      type: "university",
      status: "Completed"
    },
    {
      institution: "STŠ 'Kemal Kapetanović' Kakanj",
      degree: "Electrical Energy Technician",
      date: "September 2017 - June 2021",
      duration: "4 Years",
      description: "Technical education focused on electrical systems, power distribution, and energy management.",
      icon: <FaBolt />,
      type: "technical",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className={styles.education} ref={educationRef}>
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
            <span className={styles.titleText}>Education Journey</span>
            <span className={styles.titleSub}>Academic Background</span>
          </h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* Education Timeline */}
        <div className={styles.timeline}>
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${isVisible ? styles.visible : ''} ${isMobile ? styles.mobileItem : ''}`}
              style={{ '--delay': `${index * 0.3}s` }}
            >
              {/* Timeline Line - Hide on mobile */}
              {!isMobile && <div className={styles.timelineLine}></div>}
              
              {/* Timeline Dot */}
              <div className={`${styles.timelineDot} ${isMobile ? styles.mobileDot : ''}`}>
                <div className={styles.dotIcon}>{edu.icon}</div>
                <div className={styles.dotGlow}></div>
              </div>

              {/* Education Card */}
              <div className={`${styles.educationCard} ${isMobile ? styles.mobileCard : ''}`}>
                {/* Card Glow Effect */}
                <div className={styles.cardGlow}></div>

                {/* Card Header */}
                <div className={`${styles.cardHeader} ${isMobile ? styles.mobileHeader : ''}`}>
                  <div className={styles.institutionInfo}>
                    <div className={`${styles.institutionHeader} ${isMobile ? styles.mobileInstitutionHeader : ''}`}>
                      <FaUniversity className={styles.institutionIcon} />
                      <h3 className={styles.institution}>{edu.institution}</h3>
                    </div>
                    <div className={`${styles.degreeSection} ${isMobile ? styles.mobileDegreeSection : ''}`}>
                      <FaGraduationCap className={styles.degreeIcon} />
                      <p className={styles.degree}>{edu.degree}</p>
                      <div className={`${styles.statusBadge} ${edu.status === 'In Progress' ? styles.inProgress : ''}`}>
                        <FaAward className={styles.statusIcon} />
                        <span>{edu.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${styles.dateSection} ${isMobile ? styles.mobileDateSection : ''}`}>
                    <div className={styles.dateInfo}>
                      <FaCalendar className={styles.dateIcon} />
                      <span className={styles.date}>{edu.date}</span>
                      <span className={styles.duration}>{edu.duration}</span>
                    </div>
                    <div className={styles.typeBadge}>
                      {edu.icon}
                      <span>{edu.type}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className={`${styles.description} ${isMobile ? styles.mobileDescription : ''}`}>{edu.description}</p>

                {/* Hover Effect - Hide on mobile */}
                {!isMobile && <div className={styles.cardHoverEffect}></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}