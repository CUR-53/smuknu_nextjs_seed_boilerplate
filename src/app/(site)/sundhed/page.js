import HeroTwo from '@/components/site/sections/heroTwo/heroTwo';
import styles from './page.module.css';
import Accordions from '@/components/site/sections/accordions/accordions';

const heroTwoData = {
  title: 'Spørg om sundhed',
  byline: 'Herunder har vi samlet spørgsmål og svar om sundhed.',
  paragraph: 'Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion',
  img: '/headers/abouthealth.jpg',
  imgAlt: 'Hero',
};

const Page = () => {
  return (
    <div className={styles.container}>
      <HeroTwo data={heroTwoData} />
      <Accordions />
    </div>
  );
};

export default Page;
