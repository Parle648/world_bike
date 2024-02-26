import React from 'react';
import styles from './styles/ordersHistory.module.scss';
import DropDown from '../../features/OrderDropDown/OrderDropDown';
import ProductSnippet from '../../entities/ProductSnippet/ProductSnippet';
import bike from '../../imgs/bike-img.png';

const OrdersHistory = () => {
    return (
        <div className={styles.block}>
            <h2 className={styles.ttl}>История заказов</h2>
            <div className={styles.tableHeader}>
                <span className={styles.tableHeaderItem}>Дата</span>
                <span className={styles.tableHeaderItem}>Номер заказа</span>
                <span className={styles.tableHeaderItem}>Стоимость</span>
                <span className={styles.tableHeaderItem}>Статус</span>
            </div>
            <DropDown 
                    order_date='23.10.2034'
                    order_id='123 675' 
                    order_amount='605 000' 
                    order_status='Новый заказ'
                    trigger_bacground='#fff'
                > 
                    <ProductSnippet 
                        updateOrderdProducts={null}
                        img={bike} 
                        title='Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018' 
                        productCount={null} 
                        cost='123444'
                        costLineThrough={null}/>
                    <ProductSnippet
                        updateOrderdProducts={null} 
                    img={bike} 
                    title='Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018' 
                    productCount={null} 
                    cost='120 999'
                    costLineThrough='200 000'/>
                </DropDown>
                <DropDown 
                    order_date='23.10.2034'
                    order_id='123 675' 
                    order_amount='605 000' 
                    order_status='Новый заказ'
                    trigger_bacground='#F8F8F8'
                > 
                    <ProductSnippet
                        updateOrderdProducts={null} 
                        img={bike} 
                        title='Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018' 
                        productCount={null} 
                        cost='123444'
                        costLineThrough={null}/>
                    <ProductSnippet
                        updateOrderdProducts={null} 
                    img={bike} 
                    title='Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018' 
                    productCount={null} 
                    cost='120 999'
                    costLineThrough='200 000'/>
                </DropDown>
        </div>
    );
};

export default OrdersHistory;