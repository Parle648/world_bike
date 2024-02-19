import React from 'react';
import styles from './styles/sortByfeature.module.scss';
import arrow from '../../imgs/filters-arrow.svg';

const SortByFeature = () => {

    const [opened, setOpened] =React.useState(false);

    function listToggle() {
        setOpened(!opened);
    };

    return (
        <div>
            <button className={styles.openFilters} onClick={listToggle} >
                <span className={styles.title}>Сортировка от последнего</span> 
                <img className={`${styles.arrow} ${opened && styles.arrowActive}`} src={arrow} alt="arrow" />
            </button>
            <ul className={`${styles.list} ${opened && styles.listOpened}`}>
                <li className={styles.listItem}>По популярности</li>
                <li className={styles.listItem}>По рейтингу</li>
                <li className={styles.listItem}>Цены: по возрастанию</li>
                <li className={styles.listItem}>Цены: по убыванию</li>
            </ul>
        </div>
    ); 
};

export default SortByFeature;