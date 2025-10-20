import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Skills.module.css';
import { FaReact, FaNodeJs, FaHtml5, FaPython, FaGithub, FaCode, FaDatabase, FaMobile, FaPalette } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiFigma, SiCplusplus, SiPhp, SiExpress, SiAngular, SiDotnet, SiNextdotjs, SiCanva } from 'react-icons/si';

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const skillsRef = useRef(null);

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
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories = {
    frontend: { icon: <FaCode />, color: '#00f0ff', name: 'Frontend' },
    backend: { icon: <FaNodeJs />, color: '#00ffaa', name: 'Backend' },
    database: { icon: <FaDatabase />, color: '#ff00ff', name: 'Database' },
    mobile: { icon: <FaMobile />, color: '#ff6b00', name: 'Mobile' },
    design: { icon: <FaPalette />, color: '#ffd700', name: 'Design' },
    tools: { icon: <FaGithub />, color: '#9370db', name: 'Tools' }
  };

  const skills = [
    // Frontend
    { name: "HTML & CSS", icon: <FaHtml5 />, description: "Semantic markup and modern styling", category: "frontend" },
    { name: "JavaScript", icon: <SiJavascript />, description: "ES6+ and modern JavaScript", category: "frontend" },
    { name: "React.js", icon: <FaReact />, description: "Component-based UI development", category: "frontend" },
    { name: "Angular", icon: <SiAngular />, description: "Enterprise frontend framework", category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, description: "Full-stack React framework", category: "frontend" },

    // Backend
    { name: "Node.js", icon: <FaNodeJs />, description: "Server-side JavaScript runtime", category: "backend" },
    { name: "Express.js", icon: <SiExpress />, description: "Web framework for Node.js", category: "backend" },
    { name: "Python", icon: <FaPython />, description: "Versatile programming language", category: "backend" },
    { name: "C++", icon: <SiCplusplus />, description: "System programming", category: "backend" },
    { name: "PHP", icon: <SiPhp />, description: "Server-side scripting", category: "backend" },
    { name: ".NET MAUI", icon: <SiDotnet />, description: "Cross-platform development", category: "backend" },

    // Database
    { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL document database", category: "database" },
    { name: "MySQL", icon: <SiMysql />, description: "Relational database", category: "database" },
    { name: "SQL Server", icon: <SiMongodb />, description: "Enterprise database", category: "database" },

    // Mobile
    { name: "React Native", icon: <FaReact />, description: "Mobile app development", category: "mobile" },

    // Design
    { name: "Figma", icon: <SiFigma />, description: "UI/UX design tool", category: "design" },
    { name: "Canva", icon: <SiCanva />, description: "Graphic design platform", category: "design" },

    // Tools
    { name: "Git & GitHub", icon: <FaGithub />, description: "Version control system", category: "tools" },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className={styles.skills} id="skills" ref={skillsRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>Tech Stack</span>
            <span className={styles.titleSub}>Technologies I Work With</span>
          </h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* Category Filter - Optimized for Mobile */}
        <div className={`${styles.categoryFilter} ${isVisible ? styles.visible : ''}`}>
          <button
            className={`${styles.categoryButton} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <FaCode className={styles.categoryIcon} />
            <span>All</span>
          </button>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`${styles.categoryButton} ${activeCategory === key ? styles.active : ''}`}
              onClick={() => setActiveCategory(key)}
              style={{ '--category-color': category.color }}
            >
              {category.icon}
              <span>{isMobile ? category.name.substring(0, 3) : category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid - Fully Responsive */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`${styles.skillCard} ${isVisible ? styles.visible : ''}`}
              style={{
                '--delay': `${index * 0.1}s`,
                '--category-color': skillCategories[skill.category]?.color || '#00f0ff'
              }}
              data-category={skill.category}
            >
              <div className={styles.cardGlow}></div>
              
              <div className={styles.skillIconContainer}>
                <div className={styles.iconWrapper}>
                  {skill.icon}
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.skillBadge}>
                  {skillCategories[skill.category]?.icon}
                </div>
              </div>

              <div className={styles.skillInfo}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>

              <div className={styles.cardHoverEffect}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}