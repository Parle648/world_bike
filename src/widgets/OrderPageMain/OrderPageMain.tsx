import React from 'react';
import styles from './styles/orderPageMain.module.scss';
import OrderForm from '../../features/OrderForm/OrderForm';
import { Link } from 'react-router-dom';

const OrderPageMain = () => {
    return (
        <main className={styles.block}>
            <div className='wrapper'>
                <h2 className={styles.links}><Link to='/'></Link>Главная / <Link className='orange' to='/order'>Оформление заказа</Link></h2>
                <h1 className={styles.ttl}>Оформление заказа</h1>
                <OrderForm />
            </div>
        </main>
    );
};

export default OrderPageMain;