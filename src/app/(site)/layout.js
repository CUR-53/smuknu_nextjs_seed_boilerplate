import Footer from '@/components/site/common/footer/footer';
import Header from '@/components/site/common/header/header';

const menuData = [
  {
    id: 1,
    title: 'Forside',
    url: '/',
  },
  {
    id: 2,
    title: 'Vores Produkter',
    url: '/produkter',
  },
  {
    id: 3,
    title: 'Spørg om sundhed',
    url: '/sundhed',
  },
  {
    id: 4,
    title: 'Blev medlem',
    url: '/medlem',
  },
];

const logoPath = '/logo/smuknu_logo.png';
const logoAlt = 'Smuknu logo';

export default function siteLayout({ children }) {
  return (
    <div>
      <Header menu={menuData} logoPath={logoPath} logoAlt={logoAlt} />
      {children}
      <Footer />
    </div>
  );
}
