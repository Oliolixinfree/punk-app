import React, { useEffect, useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import Search from '../Search/Search';
import styles from './Controls.module.scss';

export const options = [
  { value: 'Test1', label: 'Test1' },
  { value: 'Test2', label: 'Test2' },
  { value: 'Test3', label: 'Test3' },
  { value: 'Test4', label: 'Test4' },
];

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  // const [something, setSomething] = useState('');

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <div className={styles.wrapper}>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect options={options} />
    </div>
  );
};

export default Controls;
