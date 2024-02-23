import { Link } from 'react-router-dom';
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
                    <Link className={styles.navigationLink} to="/catalog">Trade In</Link>
                </li>
                <li className={styles.navigationListItem}>
                    <Link className={styles.navigationLink} to="/catalog">Велосипеды</Link>
                    <div className={styles.navigationDetails}>
                        <Bikes />
                    </div>
                </li>
                <li className={styles.navigationListItem}>
                    <Link className={styles.navigationLink} to="/catalog">Запчасти</Link>
                    <div className={styles.navigationDetails}>
                        <SpareParts />
                    </div>
                </li>
                <li className={styles.navigationListItem}>
                    <Link className={styles.navigationLink} to="/catalog">Экипировка</Link>
                    <div className={styles.navigationDetails}>
                        <Equipment />
                    </div>
                </li>
                <li className={styles.navigationListItem}>
                    <Link className={styles.navigationLink} to="/catalog">Аксессуары</Link>
                    <div className={styles.navigationDetails}>
                        <Accessouires />
                    </div>
                </li>
                <li className={styles.navigationListItem}>
                    <Link className={styles.navigationLink} to="/catalog">Велостанки</Link>
                    <div className={styles.navigationDetails}>
                        <BicycleMachines />
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;