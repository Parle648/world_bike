import React from 'react';
import styles from './styles/productSlippet.module.scss';
import propsTypes from './types/productSnippetProps';

const ProductSnippet = ({img, title, productCount, cost, costLineThrough}: propsTypes) => {
    return (
        <section className={styles.block}>
            <div className={styles.innerBlock}>
                <img className={styles.img} src={img} alt={`${img}`} />
                <h2 className={styles.ttl}>{title}</h2>
                {productCount && <></>}
                <div className={styles.costBlock}>
                    <span className={styles.cost}>{cost}₴</span>
                    {costLineThrough && 
                        <span className={styles.costLineThrough}>{costLineThrough}₴</span>
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductSnippet;