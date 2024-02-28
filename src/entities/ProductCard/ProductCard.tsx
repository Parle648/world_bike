import { useState } from 'react';
import styles from './styles/productCard.module.scss';
import productCardType from './types/productCartProps';
import QuickBuySnippet from '../QuickBuySnippet/QuickBuySnippet';
import QuickOrderForm from '../../features/QuickOrderForm/QuickOrderForm';
import bicycle from '../../imgs/bike-img.png';

const ProductListCart = ({country, soldOut, image, title, cost}: productCardType) => {
    const [opened, setOpened] = useState<boolean>(true);

    function openOrderBlock() {
        setOpened(!opened);
    };

    return (
        <div className={styles.block}>
            <img className={styles.flag} src={country} alt="country" />
            <span className={soldOut ? styles.soldOut : styles.hasAtShop}>{soldOut ? 'Распродано' : 'В наличии'}</span>
            <img className={styles.img} src={image} alt="image" />
            <h3 className={styles.ttl}>{title}</h3>
            <h4 className={styles.cost}>{cost}</h4>
            <button className={styles.seeMore} onClick={openOrderBlock}>В 1 клик</button>
            <QuickBuySnippet 
                img={bicycle} 
                title="Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018"
                opened={opened}
                setOpened={setOpened} >
                    <QuickOrderForm id={1} />            
            </QuickBuySnippet>
        </div>
    );
};

export default ProductListCart;