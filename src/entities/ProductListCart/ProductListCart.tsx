import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/productListCard.module.scss';

import QuickOrderForm from '../../features/QuickOrderForm/QuickOrderForm';
import QuickBuySnippet from '../QuickBuySnippet/QuickBuySnippet';

import productCardType from './types/ProductListCartProps';

import look from '../../imgs/look.png';
import orbea from '../../imgs/orbea.png';
import scottSecond from '../../imgs/scott-second.png';
import scott from '../../imgs/scott.png';
import treck from '../../imgs/treck.png'; 
import treckFx from '../../imgs/treck-fx.png'; 
import treckMarlin from '../../imgs/treck-marlin.png'; 
import treckMarlinLumen from '../../imgs/treck-marlin-lumen.png'; 
import orbeaBlack from '../../imgs/orbea-black.png';

const bykes: {[key: string]: string} = {
    "look.png": look,
    "treck.png": treck,
    "orbea.png": orbea,
    "track-fx.png": treckFx,
    "scott.png": scott,
    "scott-second.png": scottSecond,
    "treck-marlin.png": treckMarlin,
    "treck-marlin-lumen.png": treckMarlinLumen,
    "orbea-black.png": orbeaBlack
}

const ProductListCard = ({country, soldOut, image, title, cost, id}: productCardType) => {
    const [opened, setOpened] = useState<boolean>(true);

    return (
        <div className={styles.block}>
            <Link to={`./:${id}`}>
                <img className={styles.flag} src={country} alt="country" />
                <span className={soldOut ? styles.soldOut : styles.hasAtShop}>{soldOut ? 'Распродано' : 'В наличии'}</span>
    
                <img className={styles.img} src={bykes[image]} alt="image" />
    
                <h3 className={styles.ttl}>{title}</h3>
                <h4 className={styles.cost}>{cost}</h4>
            </Link>

            <button className={styles.seeMore} onClick={(event: any) => {event.stopPropagation(); setOpened(!opened)}}>В 1 клик</button>
            <QuickBuySnippet 
                img={image} 
                title={title}
                opened={opened}
                setOpened={setOpened} >
                    <QuickOrderForm id={1} />            
            </QuickBuySnippet>
        </div>
    );
};

export default ProductListCard