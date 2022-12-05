import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';

import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { IoIosBeer } from 'react-icons/io';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/logo.svg';

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
          <Link className={styles.title} to="/">
            <IoIosBeer size={'35px'} />
            {/* <Logo width={'18px'} height={'40px'} /> */}
            <span>Punk Beer</span>
          </Link>
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
