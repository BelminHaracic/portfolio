import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Projects.module.css";
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe, FaStar, FaCalendar } from "react-icons/fa";

// Dynamically import the icons
const FaReact = dynamic(() => import("react-icons/fa").then((mod) => mod.FaReact), { ssr: false });
const FaNodeJs = dynamic(() => import("react-icons/fa").then((mod) => mod.FaNodeJs), { ssr: false });
const SiAngular = dynamic(() => import("react-icons/si").then((mod) => mod.SiAngular), { ssr: false });
const SiMongodb = dynamic(() => import("react-icons/si").then((mod) => mod.SiMongodb), { ssr: false });
const SiExpress = dynamic(() => import("react-icons/si").then((mod) => mod.SiExpress), { ssr: false });
const SiNextdotjs = dynamic(() => import("react-icons/si").then((mod) => mod.SiNextdotjs), { ssr: false });
const SiTypescript = dynamic(() => import("react-icons/si").then((mod) => mod.SiTypescript), { ssr: false });

export default function Projects() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const projectsRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

const projects = [
    {
      title: "e-Bus Management System",
      description: "Complete bus management platform with user administration, route planning, and real-time ticket validation system.",
      image: "/images/1.jpg",
      githubLink: "https://github.com/BelminHaracic/inf_sistem_screenshots_beta.git",
      liveLink: "#",
      technologies: [<SiAngular key="angular" />, <SiMongodb key="mongo" />, <FaNodeJs key="node" />, <SiExpress key="express" />, <SiTypescript key="ts" />],
      type: "web",
      category: "Full Stack",
      featured: true,
      year: "2024",
      status: "Completed"
    },
    {
      title: "Mini Webshop - Full Stack",
      description: "Complete e-commerce platform with product management, shopping cart, order processing, and admin dashboard.",
      image: "/images/webshop.jpg", // Dodaj sliku u public/images folder
      githubLink: "https://github.com/BelminHaracic/mini-webshop-frontend",
      liveLink: "https://mini-webshop.web.app/",
      technologies: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiTypescript key="ts" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />],
      type: "web",
      category: "Full Stack",
      featured: true,
      year: "2024",
      status: "Completed",
      features: [
        "Product catalog & shopping cart",
        "User order management", 
        "Admin product management",
        "Order processing system",
        "Firebase deployment"
      ]
    },
    {
      title: "Mobile Ticket App",
      description: "Passenger mobile application with QR ticket validation, route viewing, and reservation management.",
      image: "/images/app.jpg",
      githubLink: "https://github.com/BelminHaracic/inf_sistem_screenshots_beta.git",
      liveLink: "#",
      technologies: [<FaReact key="react" />, <SiMongodb key="mongo" />, <FaNodeJs key="node" />, <SiExpress key="express" />],
      type: "mobile",
      category: "Mobile App",
      featured: true,
      year: "2024",
      status: "Completed"
    },
    {
      title: "Driver Mobile App",
      description: "Driver application for QR validation and real-time passenger management with offline capabilities.",
      image: "/images/app2.jpg",
      githubLink: "https://github.com/BelminHaracic/inf_sistem_screenshots_beta.git",
      liveLink: "#",
      technologies: [<FaReact key="react" />, <SiMongodb key="mongo" />, <FaNodeJs key="node" />, <SiExpress key="express" />],
      type: "mobile",
      category: "Mobile App",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      title: "Windows 11 Simulation",
      description: "Interactive Windows 11 desktop simulation built with Angular and Next.js, replicating the modern Windows 11 UI experience in browser.",
      image: "/images/windows11.jpg", // Dodaj sliku u public/images folder
      githubLink: "https://github.com/BelminHaracic/win11-simulator",
      liveLink: "https://win11-simulator.vercel.app/",
      technologies: [<SiAngular key="angular" />, <SiNextdotjs key="next" />, <SiTypescript key="ts" />, <FaReact key="react" />],
      type: "web",
      category: "Frontend",
      featured: true,
      year: "2024",
      status: "In Progress",
      features: [
        "Fully interactive desktop environment",
        "Start menu with app launcher",
        "Draggable and resizable windows",
        "Taskbar with system tray",
        "File explorer simulation",
        "Settings panel replica",
        "Responsive design"
      ]
    },
    {
      title: "Tourist Website",
      description: "Modern travel platform with trip filtering, ratings system, and seamless booking experience.",
      image: "/images/webtravel.jpg",
      githubLink: "https://github.com/BelminHaracic/webtravel_302.git",
      liveLink: "#",
      technologies: [<SiAngular key="angular" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />, <SiExpress key="express" />],
      type: "web",
      category: "Full Stack",
      featured: true,
      year: "2023",
      status: "Completed"
    },
    {
      title: "JoyOfFastDelivery",
      description: "Food delivery mobile app with restaurant browsing, order management, and real-time tracking.",
      image: "/images/joy.jpg",
      githubLink: "https://github.com/BelminHaracic/JoyOfFastDelivery-.NET-MAUI.git",
      liveLink: "#",
      technologies: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiTypescript key="ts" />],
      type: "mobile",
      category: "Mobile App",
      featured: false,
      year: "2023",
      status: "Completed"
    },
  ];

  const getProjectTypeIcon = (type) => {
    switch (type) {
      case 'mobile': return <FaMobile />;
      case 'web': return <FaGlobe />;
      default: return <FaCode />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#00ffaa';
      case 'In Progress': return '#ffaa00';
      case 'Planned': return '#00f0ff';
      default: return '#ffffff';
    }
  };

  return (
    <section id="projects" className={styles.projects} ref={projectsRef}>
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
            <span className={styles.titleText}>My Projects</span>
            <span className={styles.titleSub}>Creative Development Work</span>
          </h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* Projects Grid/Scroll */}
        <div 
          ref={scrollContainerRef}
          className={`${styles.projectsContainer} ${isMobile ? styles.mobileScroll : ''}`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${isVisible ? styles.visible : ''} ${project.featured ? styles.featured : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className={styles.featuredBadge}>
                  <FaStar />
                  <span>Featured</span>
                </div>
              )}

              {/* Card Glow Effect */}
              <div className={styles.cardGlow}></div>
              
              {/* Project Image */}
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}></div>
                
                {/* Project Type Badge */}
                <div className={styles.projectBadge}>
                  {getProjectTypeIcon(project.type)}
                  <span>{project.category}</span>
                </div>

                {/* Project Status */}
                <div 
                  className={styles.statusBadge}
                  style={{ '--status-color': getStatusColor(project.status) }}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectYear}>
                      <FaCalendar />
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>

                {/* Technologies */}
                <div className={styles.technologies}>
                  {isClient && project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techIcon}>
                      {tech}
                      <div className={styles.techGlow}></div>
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubButton}
                  >
                    <FaGithub className={styles.buttonIcon} />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={styles.cardHoverEffect}></div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        {isMobile && (
          <div className={styles.scrollIndicator}>
            <span>← Scroll to view more projects →</span>
          </div>
        )}
      </div>
    </section>
  );
}
