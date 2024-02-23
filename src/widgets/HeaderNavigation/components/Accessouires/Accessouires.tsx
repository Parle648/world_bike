import React from 'react';
import styles from './styles/accessouires.module.scss';
import { Link } from 'react-router-dom';
import accessouires from '../../../../imgs/header-accesouires.png';

const Accessouires = () => {
    return (
        <div className={styles.block}>
            <img className={styles.background} src={accessouires} alt="accessouires" />
            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Велокомпьютеры</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Инструменты</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Вилки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Велочехлы</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Крылья</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Насосы</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Фляги, держатели</Link>
                </li>
            </ul>
        </div>
    );
};

export default Accessouires;