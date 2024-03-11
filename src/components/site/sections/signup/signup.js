'use client';
import styles from './signup.module.css';

const SignupMedlem = () => {
  return (
    <section>
      <form className={styles.container}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Fulde navn</label>
          <input type="text" id="fullName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Ris og/eller ros</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Opret
        </button>
      </form>
    </section>
  );
};

export default SignupMedlem;
