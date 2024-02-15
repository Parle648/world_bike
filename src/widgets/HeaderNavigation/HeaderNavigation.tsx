import Accessouires from './components/Accessouires/Accessouires';
import BicycleMachines from './components/BicycleMachines/BicycleMachines';
import Bikes from './components/Bikes/Bikes';
import Equipment from './components/Equipment/Equipment';
import SpareParts from './components/SpareParts/SpareParts';
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
                    <div className={styles.navigationDetails}>
                        <Bikes />
                    </div>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Запчасти</a>
                    <div className={styles.navigationDetails}>
                        <SpareParts />
                    </div>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Экипировка</a>
                    <div className={styles.navigationDetails}>
                        <Equipment />
                    </div>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Аксессуары</a>
                    <div className={styles.navigationDetails}>
                        <Accessouires />
                    </div>
                </li>
                <li className={styles.navigationListItem}>
                    <a className={styles.navigationLink} href="#!">Велостанки</a>
                    <div className={styles.navigationDetails}>
                        <BicycleMachines />
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;