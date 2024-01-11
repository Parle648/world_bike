import styles from './styles/headerNavigation.module.scss';

const HeaderNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Trade In</a>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Велосипеды</a>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Запчасти</a>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Экипировка</a>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Аксессуары</a>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Велостанки</a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;