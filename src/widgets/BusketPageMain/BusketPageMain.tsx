import React from 'react';
import styles from './styles/busketPageMain.module.scss';
import bike from '../../imgs/bike-img.png';
import ProductSnippet from '../../entities/ProductSnippet/ProductSnippet';
import { Link } from 'react-router-dom';
import BusketInfo from './Components/BusketInfo/BusketInfo';
import NewBikes from '../MainPage/NewBikes/NewBikes';

const BusketPageMain = () => (
    <main className={styles.block}>
        <div className="wrapper">
            <h2 className={styles.ttl}>Корзина</h2>
            <div className={styles.busketBlock}>
                <div className={styles.orderedProducts}>
                    <Link className={styles.backToCatalog} to='./'>Вернуться к покупкам</Link>
                    <button className={styles.clearBusket}>Очистить корзину</button>
                    <ProductSnippet
                        img={bike}
                        title='Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018'
                        productCount={1}
                        cost='152000'
                        costLineThrough={null} />
                    <ProductSnippet
                        img={bike}
                        title='Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018'
                        productCount={1}
                        cost='152000'
                        costLineThrough={null} />
                    <ProductSnippet
                        img={bike}
                        title='Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018'
                        productCount={1}
                        cost='152000'
                        costLineThrough={null} />
                </div>
                <BusketInfo orderNumber={10223658} orderAmount={51263} orderOff={0} />
            </div>
        </div>
        <NewBikes />
    </main>
);

export default BusketPageMain;