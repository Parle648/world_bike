import React from 'react';
import styles from './styles/productSlippet.module.scss';
import propsTypes from './types/productSnippetProps';
import close from '../../imgs/close.svg';

const ProductSnippet = ({img, title, productCount, cost, costLineThrough}: propsTypes) => {
    return (
        <section className={`${styles.block} ${styles.buyPage}`}>
            <button className={styles.close}><img src={close} alt="close" /></button>
            <div className={`${styles.innerBlock} ${styles.buyPageInnerBlock}`}>
                <img className={styles.img} src={img} alt={`${img}`} />
                <h2 className={styles.ttl}>{title}</h2>
                <div className={styles.costBlockContainer}>
                    {productCount && 
                    <div className={styles.productcounter}>
                        <button className={styles.counterBtn}>-</button>
                        <span>{productCount}</span>
                        <button className={styles.counterBtn}>+</button>
                    </div>
                    }
                   <div className={styles.costBlock}>
                        <span className={styles.cost}>{cost}₴</span>
                        {costLineThrough && 
                            <span className={styles.costLineThrough}>{costLineThrough}₴</span>
                        }
                   </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSnippet;