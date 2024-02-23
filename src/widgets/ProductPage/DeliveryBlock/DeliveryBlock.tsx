import React from 'react';
import styles from './styles/deliveryBlock.module.scss';
import background from '../../../imgs/prodcut-page-delivery-background.png';
import { Link } from 'react-router-dom';

const DeliveryBlock = () => {
    return (
        <section className={styles.block}>
            <div className="wrapper">
                <h2 className={styles.ttl}>Доставка</h2>
                <img className={styles.img} src={background} alt="background" />

                <h3 className={styles.deliveryTypeTtl}>Для удобства покупателей действует несколько способов доставки товаров</h3>
            
                <ol className={styles.deliveryTypes}>
                    <li className={styles.deliveryType}>Доставка по Киеву</li>
                    <li className={styles.deliveryType}>Доставка по Киевской области</li>
                    <li className={styles.deliveryType}>Доставка в другие регионы Украины</li>
                </ol>

                <p className={styles.note}>
                    Любой из способов доступен при оформление заказа через сайт или у операторов
                </p>
                <p className={styles.additionalInfo}>
                    Велосипеды и вело-станки доставляются в собранном и настроенном виде.
                </p>
                <p className={styles.additionalInfo}>
                    На любые вопросы по правилам и стоимости доставки ответят оператор: <Link className='orange' to='#!'>+7 (495) 055-75-86</Link>
                </p>
                <p className={styles.attention}>
                    Для любого заказа возможен самовывоз из магазина
                </p>
            </div>
        </section>
    );
};

export default DeliveryBlock;