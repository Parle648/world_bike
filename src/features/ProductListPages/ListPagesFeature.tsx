import React from 'react';
import styles from './styles/listPages.module.scss';
import twinArrow from '../../imgs/twin-arrow-btn.svg';
import singleArrow from '../../imgs/list-page-arrow.svg';
import getProductsPage from './api/getProducts';
import productPageInterface from './types/productPageInterface';
import productListPagesProps from './types/productListPagesProps';

const ListPagesFeature = ({setProducts}: productListPagesProps) => {
    const [page, setPage] = React.useState<number>(1);

    React.useEffect(() => {
        getProductsPage(page).then((data: productPageInterface) => setProducts(data));
    }, [page]);

    function choosePage(event: React.MouseEvent<HTMLButtonElement>) {
        setPage(+event.currentTarget.innerHTML);
    };

    return (
        <div className={styles.block}>
            <img className={styles.slideBtn} src={twinArrow} alt="twinArrow" />
            <img className={styles.slideBtn} src={singleArrow} alt="singleArrow" />
            <div className={styles.pagesContainer}>
                <div className={styles.pages}>
                    <button className={`${styles.page} ${page === 1 && styles.currentPage}`} onClick={choosePage} >1</button>
                    <button className={`${styles.page} ${page === 2 && styles.currentPage}`} onClick={choosePage} >2</button>
                    <button className={`${styles.page} ${page === 3 && styles.currentPage}`} onClick={choosePage} >3</button>
                    <button className={`${styles.page} ${page === 4 && styles.currentPage}`} onClick={choosePage} >4</button>
                    <button className={`${styles.page} ${page === 5 && styles.currentPage}`} onClick={choosePage} >...</button>
                </div>
            </div>
            <img className={styles.reversedArow} src={singleArrow} alt="singleArrow" />
            <img className={styles.reversedArow} src={twinArrow} alt="twinArrow" />
        </div>
    );
};

export default ListPagesFeature;