import Image from 'next/image';
import styles from './hero.module.css';
import Link from 'next/link';

const Hero = ({ data }) => {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image src={data.img} alt={data.imgAlt} width={2000} height={1000} />
        <div className={styles.text}>
          <h1>{data.title}</h1>
          <p>{data.byline}</p>
          <p>{data.paragraph}</p>
          <Link className={styles.buttonContainer} href={data.buttonLink}>
            <button>{data.button}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
