import React from 'react';
import styles from './styles/productSlippet.module.scss';
import propsTypes from './types/productSnippetProps';
import close from '../../imgs/close.svg';

const ProductSnippet = ({img, title, productCount, cost, costLineThrough, updateOrderdProducts}: propsTypes) => {
    
    return (
        <section className={`${styles.block} ${styles.buyPage}`}>
            <button className={styles.close}><img src={close} alt="close" data-title={title} data-type='close' onClick={updateOrderdProducts}/></button>
            <div className={`${styles.innerBlock} ${styles.buyPageInnerBlock}`}>
                <img className={styles.img} src={img} alt={`${img}`} />
                <h2 className={styles.ttl}>{title}</h2>
                <div className={styles.costBlockContainer}>
                    {productCount && 
                    <div className={styles.productcounter}>
                        <button className={styles.counterBtn} data-title={title} data-type='decrement' onClick={updateOrderdProducts}>-</button>
                        <span>{productCount}</span>
                        <button className={styles.counterBtn} data-title={title} data-type='increment' onClick={updateOrderdProducts}>+</button>
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