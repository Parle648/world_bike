import React from 'react';
import styles from './styles/productIntroduction.module.scss';

import bicycle from '../../../imgs/product-page-img.png';

const ProducIntoduction = () => {
    return (
        <div className="wrapper">
            <div className={styles.block}>
                <div className={styles.galary}>
                    <img className={styles.img} src={bicycle} alt="" />
                </div>
                <div className={styles.description}>
                    <h2 className={styles.descriptionTtl}>Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</h2>
                
                    <p className={styles.brand}>
                    Scott
                    </p>

                    <p className={styles.articul}>
                        123213213
                    </p>

                    <p className={styles.has}>
                        В наличии
                    </p>

                    <div className={styles.costBlock}>
                        <span className={styles.cost}>435 000 ₽</span>
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
        </div>
    );
};

export default ProducIntoduction;