import React from 'react';
import styles from './styles/search.module.scss';
import search from '../../imgs/search.svg';

const Search = () => {
    return (
        <div className={styles.block}>
            <button className={styles.searchTrigger}><img src={search} alt="search" /></button>
        </div>
    );
};

export default Search;