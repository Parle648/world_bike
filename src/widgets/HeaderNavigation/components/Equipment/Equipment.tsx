import React from 'react';
import styles from './styles/equipment.module.scss';
import equipment from '../../../../imgs/equipment.png';
import { Link } from 'react-router-dom';

const Equipment = () => {
    return (
        <div className={styles.block}>
            <img className={styles.background} src={equipment} alt="equipment" />

            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Велокуртки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Велошлемы</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Велотрусы</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Велоперчатки</Link>
                </li>
            </ul>
            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Термобелье</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Очки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Велообувь</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Аксессуары</Link>
                </li>
            </ul>
        </div>
    );
};

export default Equipment;