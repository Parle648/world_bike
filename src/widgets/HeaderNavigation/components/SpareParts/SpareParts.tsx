import React from 'react';
import styles from './styles/spareParts.module.scss';
import tires from '../../../../imgs/tires.png';
import { Link } from 'react-router-dom';

const SpareParts = () => {
    return (
        <div className={styles.block}>
            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Группы оборудования</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Манетки/Шифтеры</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Рамы</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Педали</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Вилки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Переключатели скоростей</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Запчасти для электронных групп</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Покрышки</Link>
                </li>
            </ul>
            <ul>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Сёдла и штыри</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Каретки</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Системы шатунов</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Камеры</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Тормоза</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Кассеты</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Цепи</Link>
                </li>
                <li className={styles.listItem}>
                    <Link className={styles.link} to='./'>Колёса</Link>
                </li>
            </ul>
            <img className={styles.background} src={tires} alt="tires" />
        </div>
    );
};

export default SpareParts;