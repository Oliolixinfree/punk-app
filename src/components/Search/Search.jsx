import React from 'react';
import styles from './Search.module.scss';

import { IoSearch } from 'react-icons/io5';

const Search = ({ search, setSearch }) => {
  return (
    <label className={styles.inputContainer}>
      <IoSearch />
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className={styles.input}
        type="search"
        placeholder="Search for a beer..."
      />
    </label>
  );
};

export default Search;
