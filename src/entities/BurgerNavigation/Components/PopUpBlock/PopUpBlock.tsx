import MobileBlock from '../MobileBlock/MobileBlock';
import Navigation from '../Navigation/Navigation';
import styles from './styles/popUpBlock.module.scss';
import PopUpProps from './types/popUpProps';

const PopUpBlock = ({opened, children}: PopUpProps) => {
    return (
        <div className={`${styles.navigation} ${opened && styles.navigationOpened}`}>
            <>
                <div className={styles.close}>{children}</div>
                <div className={styles.desktop}>
                    <h2 className={styles.ttl} >Доп. Информация</h2>
                </div>

                <MobileBlock />
                <Navigation />
            </>
        </div>
    );
};

export default PopUpBlock;