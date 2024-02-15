import React from 'react';
import styles from './styles/listPages.module.scss';
import twinArrow from '../../imgs/twin-arrow-btn.svg';
import singleArrow from '../../imgs/list-page-arrow.svg';

const ListPagesFeature = () => {
    return (
        <div className={styles.block}>
            <img className={styles.slideBtn} src={twinArrow} alt="twinArrow" />
            <img className={styles.slideBtn} src={singleArrow} alt="singleArrow" />
            <div className={styles.pagesContainer}>
                <div className={styles.pages}>
                    <button className={`${styles.page} ${styles.currentPage}`}>1</button>
                    <button className={styles.page}>2</button>
                    <button className={styles.page}>3</button>
                    <button className={styles.page}>4</button>
                    <button className={styles.page}>...</button>
                </div>
            </div>
            <img className={styles.reversedArow} src={singleArrow} alt="singleArrow" />
            <img className={styles.reversedArow} src={twinArrow} alt="twinArrow" />
        </div>
    );
};

export default ListPagesFeature;