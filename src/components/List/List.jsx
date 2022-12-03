import React from 'react';

import styles from './List.module.scss';

const List = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

export default List;
