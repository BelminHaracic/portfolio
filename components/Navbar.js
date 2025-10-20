import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);

  // Provera širine ekrana
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className={styles.icon} />,
      url: 'https://github.com/BelminHaracic',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin className={styles.icon} />,
      url: 'https://www.linkedin.com/in/belmin-haračić-28563a227',
      label: 'LinkedIn'
    }
  ];

  return (
    <nav 
      ref={navbarRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}
    >
      {/* Animated background elements */}
      <div className={styles.navbarBackground}></div>
      <div className={styles.navbarGlow}></div>
      
      <div className={styles.container}>
        {/* Logo with extreme effects */}
        <a 
          href="#home" 
          className={styles.logo}
          onClick={() => handleLinkClick('home')}
        >
          <span className={styles.logoIcon}><FaCode /></span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Belmin</span>
            <span className={styles.logoLastName}>Haračić</span>
          </span>
          <div className={styles.logoGlow}></div>
        </a>
        
        {/* Main navigation */}
        <div className={`
          ${styles.navContent} 
          ${isMobile ? styles.mobileNavContent : ''}
        `}>
          {/* Navigation links */}
          <div className={`
            ${styles.links} 
            ${isMobile ? styles.mobileLinks : ''} 
            ${menuOpen ? styles.showMenu : ''}
          `}>
            {navItems.map((item, index) => (
              <a 
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${activeSection === item.href.substring(1) ? styles.active : ''}`}
                onClick={() => handleLinkClick(item.href.substring(1))}
                style={{ '--i': index }}
              >
                <span className={styles.linkText}>{item.label}</span>
                <span className={styles.linkHover}></span>
              </a>
            ))}
            
            {/* Social media icons in mobile menu - OVO JE NOVO */}
            {isMobile && (
              <div className={styles.mobileSocialSection}>
                <div className={styles.socialTitle}>Follow Me</div>
                <div className={styles.mobileSocialLinks}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social media icons - desktop */}
          {!isMobile && (
            <div className={styles.socialMedia}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Extreme hamburger menu */}
        {isMobile && (
          <div 
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={styles.hamburgerBox}>
              <div className={styles.hamburgerInner}></div>
            </div>
            <div className={styles.hamburgerGlow}></div>
          </div>
        )}
      </div>

      {/* Mobile menu overlay */}
      {isMobile && menuOpen && (
        <div 
          className={styles.menuOverlay}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}