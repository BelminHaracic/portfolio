import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.contactHeader}>Contact Me</h2>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles.inputField}
        />
        <textarea
          placeholder="Your Message"
          className={styles.textareaField}
        />
        <button className={styles.submitButton}>Send Message</button>
      </div>
    </section>
  );
}
