import Search from '../../features/Search/Search';
import Busket from '../../shared/Busket/Busket';
import Prefer from '../../shared/Prefer/Prefer';
import styles from './styles/shopingToolbar.module.scss';

const ShopingToolbar = () => {
    return (
        <div className={styles.block}>
            <Search />
            <Prefer />
            <Busket />
        </div>
    );
};

export default ShopingToolbar;