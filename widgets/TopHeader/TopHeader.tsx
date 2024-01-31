import styles from './styles/topHeader.module.scss';
import Logo from '../../shared/Logo/Logo';
import ShopingToolbar from '../ShopingToolbar/ShopingToolbar';
import BurgerNavigation from '../../entities/BurgerNavigation/BurgerNavigation';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';

const TopHeader = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <HeaderNavigation />
            <ShopingToolbar />
            <BurgerNavigation />
        </header>
    );
};


export default TopHeader;