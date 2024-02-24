import React from 'react';
import styles from './styles/productIntroduction.module.scss';

import bicycle from '../../../imgs/product-page-img.png';
import getProductInform from './api/getProductInform';
import productInformProps from './types/productInformProps';

const ProducIntoduction = () => {
    const [productInfrom, setProductInform] = React.useState<productInformProps>();
    const productId = +window.location.href.split('/')[4].slice(1)

    React.useEffect(() => {
        getProductInform(productId).then((data: any) => setProductInform(data[0]));
    }, [])
    
    return (
        <div className="wrapper">
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

                    <p className={productInfrom?.in_stock ? styles.has : styles.hasnt}>
                        {productInfrom?.in_stock ? 'В наличии' : 'Не в наличии'}
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
                        <div className={styles.counter}>
                            <button className={styles.counterBtn}>-</button>
                            1
                            <button className={styles.counterBtn}>+</button>
                        </div>

                        <button className={styles.addToBusket}>В корзину</button>

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