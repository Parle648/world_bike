import React from 'react';
import styles from './styles/dropDown.module.scss';
import dropDownProps from './types/dropDownProps';
import orangeArrow from '../../imgs/orange-arrow.svg';

const OrderDropDown = ({order_date, order_id, order_amount, order_status, trigger_bacground, children}: dropDownProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function openBody() {
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles.block}>
            <button className={styles.openBody} onClick={openBody} style={{background: `${trigger_bacground}`}}>
                <span className={styles.openBodyItem}>{order_date}</span>
                <span className={styles.openBodyItem}>{order_id}</span>
                <span className={styles.openBodyItem}>{order_amount}</span>
                <span className={styles.openBodyItem}>{order_status}</span>
                <img className={isOpen && styles.bodyArrowOpened} src={orangeArrow} alt="orangeArrow" />
            </button>
            <div className={`${styles.list} ${isOpen && styles.listOpened}`}>
                {children}
            </div>
        </div>
    );
};

export default OrderDropDown;