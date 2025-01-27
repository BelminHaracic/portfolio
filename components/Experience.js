import styles from '../styles/Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      <div className={styles.experienceItem}>
        <h3>Embedded Systems Intern</h3>
        <p className={styles.company}>Maasu Group BH d.o.o.</p>
        <p className={styles.date}>October 2023 - December 2023</p>
        <p className={styles.description}>
          Contributed to the automotive inverter controller project during an eight-week internship. 
          Applied VHDL code using Vivado on the PYNQ-Z2 FPGA board, demonstrating technical expertise.
          Managed project phases using the V-model, Confluence, and Jira. 
          Demonstrated knowledge of industry standards such as ASPICE, ISO 26262, ISO 9001, and TISAX. 
          Involved in unit, integration, and system testing with mentor support.
          This internship reflected commitment, innovation, and contribution to the project's success.
        </p>
      </div>
    </section>
  );
}
