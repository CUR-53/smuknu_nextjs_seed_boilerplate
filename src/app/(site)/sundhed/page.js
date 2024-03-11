import HeroTwo from '@/components/site/sections/heroTwo/heroTwo';
import styles from './page.module.css';
import Accordions from '@/components/site/sections/accordions/accordions';
import Medlem from '@/components/site/sections/medlem/medlem';

const heroTwoData = {
  title: 'Spørg om sundhed',
  byline: 'Herunder har vi samlet spørgsmål og svar om sundhed.',
  paragraph: 'Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion',
  img: '/headers/abouthealth.jpg',
  imgAlt: 'Hero',

  titleColor: 'var(--color-white)',
  bylineColor: 'var(--color-white)',
  paragraphColor: 'var(--color-white)',
  backgroundColor: 'var(--color-pink)',
};

const Page = () => {
  return (
    <div className={styles.container}>
      <HeroTwo data={heroTwoData} />
      <Accordions />
      <Medlem />
    </div>
  );
};

export default Page;
