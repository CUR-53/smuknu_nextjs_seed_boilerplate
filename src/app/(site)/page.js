import Hero from '@/components/site/Hero/hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
    </main>
  );
}
