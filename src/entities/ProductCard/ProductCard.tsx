import React from 'react';
import styles from './styles/productCard.module.scss';
import productCardType from './types/productCartProps';

const ProductCard = ({country, soldOut, image, title, cost}: productCardType) => {
    return (
        <div className={styles.block}>
            <img className={styles.flag} src={country} alt="country" />
            <span className={soldOut ? styles.soldOut : styles.hasAtShop}>{soldOut ? 'Распродано' : 'В наличии'}</span>
            <img className={styles.img} src={image} alt="image" />
            <h3 className={styles.ttl}>{title}</h3>
            <h4 className={styles.cost}>{cost}</h4>
            <button className={styles.seeMore}>В 1 клик</button>
        </div>
    );
};

export default ProductCard