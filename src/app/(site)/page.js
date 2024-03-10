import styles from './page.module.css';

import Hero from '@/components/site/sections/hero/hero';
import Medlem from '@/components/site/sections/medlem/medlem';
import ProductCollection from '@/components/site/sections/product-collection/product-collection';
import Reviews from '@/components/site/sections/reviews/reviews';

const heroData = {
  title: 'Skønhed for alle',
  byline: 'Alt hvad du behøver...',
  paragraph: 'SMUK NU',
  button: 'Se udvalgte produkter',
  buttonLink: '/#udvalgtSloenhed',
  img: '/headers/front.jpg',
  imgAlt: 'hero image',
};

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero data={heroData} />
      <ProductCollection />
      <Reviews />
      <Medlem />
    </main>
  );
}
