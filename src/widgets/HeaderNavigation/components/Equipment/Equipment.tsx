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
                    <Link className={styles.link} to='/catalog'>Велокуртки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Велошлемы</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Велотрусы</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Велоперчатки</Link>
                </li>
            </ul>
            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Термобелье</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Очки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Велообувь</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Аксессуары</Link>
                </li>
            </ul>
        </div>
    );
};

export default Equipment;