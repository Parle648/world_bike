import React from 'react';
import styles from './styles/catalogList.module.scss';
import ProductListCard from '../../entities/ProductListCart/ProductListCart';
import flag from '../../imgs/italy-flag.png';
import SortByFeature from '../../features/SortByFeature/SortByFeature';
import filter from '../../imgs/filter.svg';
import ListPagesFeature from '../../features/ProductListPages/ListPagesFeature';
import ProductListSceletonLoader from '../../entities/ProductListSceletopLoader/ProductListSceletonLoader';
import ImageGrid from '../../entities/ProductListSceletopLoader/ProductListSceletonLoader';
import CatalogFiltersForm from '../../features/CatalogFiltersForm/CatalogFiltersForm';
import close from '../../imgs/close.svg';

const CatalogProductList = () => {
    const [products, setProducts] = React.useState([]);
    const [filtersOpened, setFiltersOpened] = React.useState<boolean>(false);

    function openFilters() {
        setFiltersOpened(!filtersOpened);
    };

    React.useEffect(() => {
        const handler = () => {
            setProducts(JSON.parse(localStorage.products.data))
        }
		window.addEventListener('storage', handler)
        return () => window.removeEventListener('storage', handler)
	}, [])

    return (
        <div className={styles.block}>
            <div className={styles.activities}>
                <SortByFeature />
                <div className={styles.chooseListTemplate}>
                    <div className={styles.ninePlates}>
                        <div className={styles.ninePlatesItem}></div>
                        <div className={styles.ninePlatesItem}></div>
                        <div className={styles.ninePlatesItem}></div>
                        <div className={styles.ninePlatesItem}></div>
                        <div className={styles.ninePlatesItem}></div>
                        <div className={styles.ninePlatesItem}></div>
                        <div className={styles.ninePlatesItem}></div>
                        <div className={styles.ninePlatesItem}></div>
                        <div className={styles.ninePlatesItem}></div>
                    </div>
                    <div className={styles.fourPlates}>
                        <div className={styles.fourPlatesItem}></div>
                        <div className={styles.fourPlatesItem}></div>
                        <div className={styles.fourPlatesItem}></div>
                        <div className={styles.fourPlatesItem}></div>
                    </div>
                </div>
                <button className={styles.filtersOpen} onClick={openFilters}>
                    <img src={filter} alt="filter" />
                </button>
                <div className={`${styles.mobileFilters} ${filtersOpened && styles.disbled}`}>
                    <button className={styles.filtersOpen} onClick={openFilters}><img src={close} alt="" /></button>
                    <CatalogFiltersForm />
                </div>
            </div>
            <div className={styles.list}>
                {products.length === 0 && 
                <ImageGrid />
                }
                {localStorage.products.data && JSON.parse(localStorage.products.data).map((product: any) => {
                    return (
                        <ProductListCard 
                        key={product.id} 
                        country={flag} 
                        soldOut={product.in_stock} 
                        image={product.background_img} 
                        title={product.title} 
                        cost={product.cost} />
                    );
                })}
                {products ? products.map((product: any) => {
                    return (
                        <ProductListCard 
                        key={product.id} 
                        country={flag} 
                        soldOut={product.in_stock} 
                        image={product.background_img} 
                        title={product.title} 
                        cost={product.cost} />
                    );
                    }) : 
                    null
                }
            </div>
            <ListPagesFeature setProducts={setProducts} />
        </div>
    );
};

export default CatalogProductList;