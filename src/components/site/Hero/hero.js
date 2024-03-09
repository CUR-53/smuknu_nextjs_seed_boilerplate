import Image from 'next/image';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image src="/headers/front.jpg" alt="Hero" width={2000} height={1000} />
        <div className={styles.text}>
          <h1>Skønhed for alle</h1>
          <p>alt hvad du behøver...</p>
          <p>SMUK NU</p>
          <button>Se udvalgte produkter</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
