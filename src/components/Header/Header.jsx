import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';

import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import Container from '../Container/Container';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <a className={styles.title} href="/">
            Punk Beer
          </a>
          <div className={styles.modeSwitcher} onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size={'16px'} /> : <IoMoon size={'16px'} />}
            {theme} Theme
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
