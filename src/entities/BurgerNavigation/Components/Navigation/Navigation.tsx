import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/burgerNavigation.module.scss';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/about-us'>О нас</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/bicycle-workshop'>Веломастерская</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/storage'>Хранение</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/guarantee'>Гарантии</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/privacy-policy'>Пользовательское соглашение</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/delivery'>Доставка и оплата</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/blog'>Блог</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/contacts'>Контакты</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;