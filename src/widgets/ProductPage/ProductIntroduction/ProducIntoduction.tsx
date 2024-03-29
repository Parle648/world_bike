import React, { useState } from 'react';
import styles from './styles/productIntroduction.module.scss';

import bicycle from '../../../imgs/product-page-img.png';
import getProductInform from './api/getProductInform';
import productInformProps from './types/productInformProps';
import { useLocalStorage } from '../../../shared/lib/hooks/useLocalStorage';
import Spinner from '../../../shared/components/Spinner/Spinner';

const ProducIntoduction = () => {
    const [productInfrom, setProductInform] = React.useState<productInformProps>();
    const productId = +window.location.href.split('/')[4].slice(1)
    
    const [productCount, setProductCount] = React.useState(1);

    function choseCount(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.currentTarget.dataset.type === 'increment') {
            setProductCount(prev => prev += 1)
        } else if (productCount !== 1) {
            setProductCount(prev => prev -= 1)
        }
    }

    const [orderedProducts, setOprderedProducts] = useLocalStorage([], 'orderedProducts');

    function addToBusket() {
        setOprderedProducts([...JSON.parse(localStorage.orderedProducts), {...productInfrom, count: productCount}])
        setIsChoosed(true);
    }

    const [loaderUnvisible, setLoaderUnvisible] = useState<boolean>(true);
    const [isChoosed, setIsChoosed] = useState<boolean>(false);

    React.useEffect(() => {
        setLoaderUnvisible(false);
        getProductInform(productId)
        .then((data: any) => setProductInform(data[0]))
        .then(() => setLoaderUnvisible(true))
        .then(() => {
            if (orderedProducts.some((product: any) => product.id === productId)) {
                setIsChoosed(true);
            };
        })
    }, [])
    
    return (
        <div className="wrapper">
            <Spinner loaderUnvisible={loaderUnvisible} />
            <div className={styles.block}>
                <div className={styles.galary}>
                    <img className={styles.img} src={bicycle} alt="" />
                </div>
                <div className={styles.description}>
                    <h2 className={styles.descriptionTtl}>{productInfrom ? productInfrom.title : 'title is not defined'}</h2>
                
                    <p className={styles.brand}>
                        {productInfrom && productInfrom.title}
                    </p>

                    <p className={styles.articul}>
                        {productInfrom && productInfrom.articul}
                    </p>

                    <p className={!productInfrom?.in_stock ? styles.has : styles.hasnt}>
                        {!productInfrom?.in_stock ? 'В наличии' : 'Не в наличии'}
                    </p>

                    <div className={styles.costBlock}>
                        <span className={styles.cost}>{productInfrom && productInfrom.cost}</span>
                        <span className={styles.costThrougthLine}>522 000 ₽</span>
                    </div>

                    <p className={styles.descriptionParagraph}>
                        Профессиональный гоночный хардтейл для 
                        кросс-кантри уровня Чемпионата 
                        и Кубка Мира. Одна из самых легких рам 
                        среди гоночных хардтейлов для кросс-кантри.    
                    </p>

                    <h2 className={styles.sizesTtl}>Размер:</h2>

                    <ul className={styles.sizes}>
                        <li className={styles.size}>
                            S
                        </li>
                        <li className={styles.size}>
                            M-L
                        </li>
                        <li className={styles.size}>
                            M
                        </li>
                        <li className={styles.size}>
                            L
                        </li>
                        <li className={styles.size}>
                            XL
                        </li>
                    </ul>
                    

                    <div className={styles.actions}>
                    {!isChoosed &&
                        <div className={styles.counter}>
                            <button className={styles.counterBtn} data-type='decrement' onClick={choseCount}>-</button>
                            {productCount}
                            <button className={styles.counterBtn} data-type='increment' onClick={choseCount}>+</button>
                        </div>
                    }

                        <button className={`${styles.addToBusket} ${isChoosed && styles.addToBusketActive}`} onClick={addToBusket}>
                            {isChoosed ? 'Придбано' : 'В корзину'}
                        </button>

                        <button className={styles.addToPrefer}>♥</button>
                    </div>

                </div>
            </div>
            <h2 className={styles.descriptionTtl}>Описание</h2>
            <p className={styles.descriptionParagraph}>{productInfrom?.description}</p>
        </div>
    );
};

export default ProducIntoduction;