import React from 'react';
import styles from './styles/busketInfo.module.scss';
import busketInformProps from './types/busketInfoProps';
import { Link } from 'react-router-dom';

const BusketInfo = ({orderNumber, orderAmount, orderOff}: busketInformProps) => {
    return (
        <div className={styles.block}>

            <div className={styles.field}>
                <h3 className={styles.ttl}>Номер заказа</h3>
                <h4 className={styles.data}>{orderNumber}</h4>
            </div>
            <div className={styles.field}>
                <h3 className={styles.ttl}>Сумма заказа (без скидки)</h3>
                <h4 className={styles.data}>{orderAmount}₴</h4>
            </div>
            <div className={styles.field}>
                <h3 className={styles.ttl}>Скидка</h3>
                <h4 className={styles.data}>{orderOff}₴</h4>
            </div>

            <div className={styles.conclusionBlock}>
                <h3 className={styles.conclusionTtl}>Итого</h3>
                <h4 className={styles.conclusionData}>{orderAmount - orderOff} ₴</h4>
            </div>

            <Link className={styles.orderLink} to='/order'>Оформить заказ</Link>
        </div>
    );
};

export default BusketInfo;