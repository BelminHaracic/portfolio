import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <div className={styles.content}>
        <p>
          Hi, I'm <strong>Belmin Haračić</strong>. I graduated from 
          the Polytechnic Faculty with a degree in Software Engineering.
        </p>
        <p>
          I'm ambitious, dedicated to learning, innovation, and continuous professional development. 
          I am responsible, organized, communicative, and always ready to collaborate. 
          I thrive in team environments and am eager to contribute to success through creative and practical solutions.
        </p>
      </div>
    </section>
  );
}
