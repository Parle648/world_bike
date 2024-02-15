import styles from './styles/productListCard.module.scss';

type ProductCardType = {
    country: string,
    soldOut: boolean,
    image: string,
    title: string,
    cost: string,
}

const ProductCard = ({country, soldOut, image, title, cost}: ProductCardType) => {
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