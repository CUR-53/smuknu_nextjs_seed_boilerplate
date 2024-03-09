import Header from '@/components/site/common/header/header';

const menuData = [
  {
    id: 1,
    title: 'Forside',
    url: '/',
  },
  {
    id: 2,
    title: 'Om os',
    url: '/om-os',
  },
  {
    id: 3,
    title: 'Kontakt',
    url: '/kontakt',
  },
];

const logoPath = '/logo/smuknu_logo.png';
const logoAlt = 'Smuknu logo';

export default function siteLayout({ children }) {
  return (
    <div>
      <Header menu={menuData} logoPath={logoPath} logoAlt={logoAlt} />
      {children}
    </div>
  );
}
