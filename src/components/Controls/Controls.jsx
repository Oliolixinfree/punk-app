import React, { useState } from 'react';
import Search from '../Search/Search';
import styles from './Controls.module.scss';

const Controls = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <Search search={search} setSearch={setSearch} />
    </>
  );
};

export default Controls;
