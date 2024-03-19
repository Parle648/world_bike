import React from 'react';
import styles from './styles/busketPageMain.module.scss';
import bike from '../../imgs/bike-img.png';
import ProductSnippet from '../../entities/ProductSnippet/ProductSnippet';
import { Link } from 'react-router-dom';
import BusketInfo from './Components/BusketInfo/BusketInfo';
import NewBikes from '../MainPage/NewBikes/NewBikes';
import { useLocalStorage } from '../../shared/lib/hooks/useLocalStorage';

const BusketPageMain = () => {
    const [orderedProducts, setOrderedProducts] = useLocalStorage([], 'orderedProducts');

    const orderAmount = orderedProducts.reduce((amount: number, item: any) => {
        return amount + +item.cost * +item.count
    }, 0);
    
    function updateOrderdProducts(event: any) {
        if (event.target.dataset.type === 'close') {
            setOrderedProducts((prev: any )=> prev.filter((product: any) => event.target.dataset.title !== product.title))
        } 
        if (event.target.dataset.type === 'increment') {
            setOrderedProducts((prev: any )=> prev.filter((product: any) => {
                if (event.target.dataset.title === product.title) {
                    product.count += 1;
                }
                return product
            }))
        } 
        if (event.target.dataset.type === 'decrement') {
            setOrderedProducts((prev: any )=> prev.map((product: any) => {
                if (event.target.dataset.title === product.title) {
                    if(product.count > 1) {
                        product.count -= 1;
                    }
                }
                return product
            }))
        }
    }

    function deleteAllProducts() {
        setOrderedProducts([]);
    }

    return (
        <main className={styles.block}>
            <div className="wrapper">
                <h2 className={styles.ttl}>Корзина</h2>
                <div className={styles.busketBlock}>
                    <div className={styles.orderedProducts}>
                        <Link className={styles.backToCatalog} to='./'>Вернуться к покупкам</Link>
                        <button className={styles.clearBusket} onClick={deleteAllProducts} >Очистить корзину</button>
                        {orderedProducts.length > 0 ? orderedProducts.map((product: any) => {
                            return (
                                <ProductSnippet
                                updateOrderdProducts={updateOrderdProducts}
                                img={bike}
                                title={`${product.title}`}
                                productCount={product.count}
                                cost={`${product.cost}`}
                                costLineThrough={null} />
                            )
                        }):
                        <h2>Отличная возможность добавить товары в корзину</h2>
                        }
                    </div>
                    <BusketInfo orderNumber={10223658} orderAmount={orderAmount} orderOff={0} />
                </div>
            </div>
            <NewBikes />
        </main>
        );
}
    

export default BusketPageMain;