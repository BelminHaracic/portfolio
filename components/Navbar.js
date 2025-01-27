import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          Belmin Haračić.
        </a>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a> 
          <a href="#education">Education</a> 
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
