import React from 'react';
import styles from './styles/sortByfeature.module.scss';
import arrow from '../../imgs/filters-arrow.svg';

const SortByFeature = () => {
    return (
        <div>
            <button className={styles.openFilters}><span className={styles.title}>Сортировка от последнего</span> <img className={styles.arrow} src={arrow} alt="arrow" /></button>
        </div>
    );
};

export default SortByFeature;