'use client';
import Image from 'next/image';
import styles from './header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import Link from 'next/link';

const Header = ({ menu, logoPath, logoAlt }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logoPath} alt={logoAlt} width={200} height={200} />
            </Link>
          </div>
          <div onClick={() => setMenuOpen(!menuOpen)} className={styles.nav}>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(false)}>
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
