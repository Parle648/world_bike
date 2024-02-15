import React from 'react';
import styles from './styles/quickBuySnippet.module.scss';
import close from  '../../imgs/close.svg';
import quickBuyProps from './types/quickBuyProps';

const QuickBuySnippet = ({img, title, opened, setOpened, children}: quickBuyProps) => {
    

    React.useEffect(() => {
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
                    <img className={styles.img} src={img} alt="img" />
                    <h2 className={styles.productTtle}>{title}</h2>
                </div>
                <div className="">
                    {children}
                </div>
            </div>
       </div>
    );
};

export default QuickBuySnippet;