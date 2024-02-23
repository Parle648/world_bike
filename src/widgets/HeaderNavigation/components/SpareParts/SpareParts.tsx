import React from 'react';
import styles from './styles/spareParts.module.scss';
import tires from '../../../../imgs/tires.png';
import { Link } from 'react-router-dom';

const SpareParts = () => {
    return (
        <div className={styles.block}>
            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Группы оборудования</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Манетки/Шифтеры</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Рамы</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Педали</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Вилки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Переключатели скоростей</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Запчасти для электронных групп</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Покрышки</Link>
                </li>
            </ul>
            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Сёдла и штыри</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Каретки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Системы шатунов</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Камеры</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Тормоза</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Кассеты</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Цепи</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='/catalog'>Колёса</Link>
                </li>
            </ul>
            <img className={styles.background} src={tires} alt="tires" />
        </div>
    );
};

export default SpareParts;