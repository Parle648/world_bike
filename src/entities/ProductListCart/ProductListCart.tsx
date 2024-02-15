import QuickOrderForm from '../../features/QuickOrderForm/QuickOrderForm';
import QuickBuySnippet from '../QuickBuySnippet/QuickBuySnippet';
import styles from './styles/productListCard.module.scss';
import bicycle from '../../imgs/bike-img.png';
import { Dispatch, SetStateAction } from 'react';

type ProductCardType = {
    country: string,
    soldOut: boolean,
    image: string,
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>,
    title: string,
    cost: string,
}

const ProductListCard = ({country, soldOut, image, opened, setOpened, title, cost}: ProductCardType) => {

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

export default ProductListCard