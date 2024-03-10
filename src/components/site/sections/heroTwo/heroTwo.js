import Image from 'next/image';
import styles from './heroTwo.module.css';

const HeroTwo = ({ data }) => {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image src={data.img} alt={data.imgAlt} width={2000} height={1000} />
        <div className={styles.text}>
          <h1>{data.title}</h1>
          <p className={styles.byline}>{data.byline}</p>
          <p className={styles.paragraph}>{data.paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
