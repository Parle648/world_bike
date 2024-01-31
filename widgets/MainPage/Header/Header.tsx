import BurgerNavigation from '../../../entities/BurgerNavigation/BurgerNavigation';
import Logo from '../../../shared/Logo/Logo';
import HeaderNavigation from '../../HeaderNavigation/HeaderNavigation';
import ShopingToolbar from '../../ShopingToolbar/ShopingToolbar';
import styles from './styles/header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <HeaderNavigation />
            <ShopingToolbar />
            <BurgerNavigation />
        </header>
    );
};

export default Header;