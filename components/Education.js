import styles from '../styles/Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>
      <div className={styles.educationItem}>
        <h3>University of Zenica, Polytechnic Faculty</h3>
        <p className={styles.degree}>Software Engineering</p>
        <p className={styles.date}>October 2021 - November 2024</p>
      </div>
      <div className={styles.educationItem}>
        <h3>STŠ "Kemal Kapetanović" Kakanj</h3>
        <p className={styles.degree}>Electrical Energy Technician</p>
        <p className={styles.date}>September 2017 - June 2021</p>
      </div>
    </section>
  );
}
