import { useEffect } from 'react';
import styles from './styles/quickBuySnippet.module.scss';
import quickBuyProps from './types/quickBuyProps';

import close from  '../../imgs/close.svg';
import look from '../../imgs/look.png';
import orbea from '../../imgs/orbea.png';
import scottSecond from '../../imgs/scott-second.png';
import scott from '../../imgs/scott.png';
import treck from '../../imgs/treck.png'; 
import treckFx from '../../imgs/treck-fx.png'; 
import treckMarlin from '../../imgs/treck-marlin.png'; 
import treckMarlinLumen from '../../imgs/treck-marlin-lumen.png'; 
import orbeaBlack from '../../imgs/orbea-black.png';

const bykes: {[key: string]: string} = {
    "look.png": look,
    "treck.png": treck,
    "orbea.png": orbea,
    "track-fx.png": treckFx,
    "scott.png": scott,
    "scott-second.png": scottSecond,
    "treck-marlin.png": treckMarlin,
    "treck-marlin-lumen.png": treckMarlinLumen,
    "orbea-black.png": orbeaBlack
}

const QuickBuySnippet = ({img, title, opened, setOpened, children}: quickBuyProps) => {
    useEffect(() => {
        if (!opened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [opened])

    function closePopUp() {
        setOpened(!opened);
    }

    return (
       <div className={`${styles.blockBackroundShadow} ${opened && styles.blockDisabled}`} >
            <div className={styles.block}>
                <button className={styles.closeBtn} onClick={closePopUp}><img src={close} alt="close" /></button>
    
                <div className="">
                    <h2 className={styles.blockTtl}>Заказ в один клик</h2>
                    <img className={styles.img} src={bykes[img]} alt="img" />
                    <h2 className={styles.productTtle}>{title}</h2>
                </div>
                <div className={styles.inputs}>
                    {children}
                </div>
            </div>
       </div>
    );
};

export default QuickBuySnippet;