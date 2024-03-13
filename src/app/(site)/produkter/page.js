import styles from './page.module.css';
import HeroTwo from '@/components/site/sections/heroTwo/heroTwo';
import ProductCollection from '@/components/site/sections/product-collection/product-collection';
import Medlem from '@/components/site/sections/medlem/medlem';

export const metadata = {
  title: 'MediaCollege Denmark products',
  description: 'Vi arbejder...',
};

const heroTwoData = {
  title: 'Skønne produkter',
  byline: 'Herunder finder du alle vores produkter',
  paragraph: '',
  img: '/headers/products.jpg',
  imgAlt: 'product image',

  titleColor: 'var(--color-white)',
  bylineColor: 'var(--color-white)',
  paragraphColor: 'var(--color-white)',
  backgroundColor: 'var(--color-shadow)',
};

const productCollectionData = {
  title: 'Alt er',
  colorTitle: 'skønhed',
};

const Page = () => {
  return (
    <div className={styles.container}>
      <HeroTwo data={heroTwoData} />
      <ProductCollection data={productCollectionData} />
      <Medlem />
    </div>
  );
};

export default Page;
