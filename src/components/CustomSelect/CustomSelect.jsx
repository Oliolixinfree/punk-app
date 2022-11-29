import React, { useState } from 'react';
import styles from './CustomSelect.module.scss';

import Select from 'react-select';
import { options } from '../Controls/Controls';

const testStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'var(--colors-ui-base)',
    color: 'var(--colors-text)',
    borderRadius: 'var(--radi)',
    padding: '0.25rem',
    border: 'none',
    boxShadow: 'var(--shadow)',
    height: '50px',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: 'var(--colors-text) !important',
    backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    border: 'none',
    fontFamily: 'var(--family)',
    fontSize: 'var(--fs-md)',
    // borderRadius: 'var(--radi)',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--colors-text)',
    borderRadius: 'var(--radi)',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'var(--colors-ui-base)',
    // boxShadow: 'var(--shadow)',
  }),
};

const CustomSelect = () => {
  const [something, setSomething] = useState('');

  return (
    <Select
      className={styles.customSelect}
      options={options}
      styles={testStyles}
      placeholder="Filter something"
      isClearable
      isSearchable={false}
      value={something}
      onChange={setSomething}
    />
  );
};

export default CustomSelect;
