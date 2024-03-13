'use client';
import { useEffect } from 'react';
import styles from './signup.module.css';

const SignupMedlem = () => {
  useEffect(() => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      fetch('/api/subscriber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
    });
  }, []);

  return (
    <section>
      <form className={styles.container}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Fulde navn</label>
          <input type="text" id="name" />
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
