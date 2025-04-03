import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Provera širine ekrana prilikom učitavanja i promene veličine
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Početna provera
    checkScreenSize();
    
    // Osluškivač za promenu veličine prozora
    window.addEventListener('resize', checkScreenSize);
    
    // Čišćenje osluškivača
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Funkcija za zatvaranje menija nakon klika na link
  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          Belmin Haračić.
        </a>
        
        {/* Hamburger ikona za mobilne uređaje */}
        {isMobile && (
          <div 
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        
        {/* Linkovi - različito prikazani za mobilne i desktop uređaje */}
        <div className={`
          ${styles.links} 
          ${isMobile ? styles.mobileLinks : ''} 
          ${menuOpen ? styles.showMenu : ''}
        `}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a> 
          <a href="#education" onClick={handleLinkClick}>Education</a> 
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
}