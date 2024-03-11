import Link from 'next/link';
import styles from './medlem.module.css';

const Medlem = () => {
  return (
    <section className={styles.container}>
      <h2>Medlem?</h2>
      <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
      <Link href="/medlem">
        <button>Blev medlem af kundeklubben</button>
      </Link>
    </section>
  );
};

export default Medlem;
