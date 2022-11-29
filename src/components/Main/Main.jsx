import React from 'react';
import Container from '../Container/Container';
import styles from './Main.module.scss';

const Main = ({ children }) => {
  return (
    <main className={styles.wrapper}>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
