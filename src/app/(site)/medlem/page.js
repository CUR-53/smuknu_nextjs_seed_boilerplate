'use client';
import styles from './page.module.css';
import HeroTwo from '@/components/site/sections/heroTwo/heroTwo';
import SignupMedlem from '@/components/site/sections/signup/signup';

const heroTwoData = {
  title: 'Bliv medlem',
  byline: 'Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi har dem.',
  paragraph: 'Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog.',
  img: '/headers/subscribers.jpg',
  imgAlt: 'medlem image',

  titleColor: 'var(--color-pink)',
  bylineColor: 'var(--color-black)',
  paragraphColor: 'var(--color-black)',
  backgroundColor: 'var(--color-white)',
};

const Page = () => {
  return (
    <div className={styles.container}>
      <HeroTwo data={heroTwoData} />
      <SignupMedlem />
    </div>
  );
};

export default Page;
