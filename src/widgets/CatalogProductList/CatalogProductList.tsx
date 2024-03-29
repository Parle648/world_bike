import { useContext, useState } from 'react';
import styles from './styles/catalogList.module.scss';
import ProductListCard from '../../entities/ProductListCart/ProductListCart';
import flag from '../../imgs/italy-flag.png';
import SortByFeature from '../../features/SortByFeature/SortByFeature';
import filter from '../../imgs/filter.svg';
import ListPagesFeature from '../../features/ProductListPages/ListPagesFeature';
import CatalogFiltersForm from '../../features/CatalogFiltersForm/CatalogFiltersForm';
import close from '../../imgs/close.svg';

import { CatalogProvider } from './catalogProvider/catalogProvider';
import { useSelector } from 'react-redux';
import ResetSearchFeature from '../../features/ResetSearchFeature/ResetSearchFeature';

const CatalogProductList = () => {
    const [filtersOpened, setFiltersOpened] = useState<boolean>(false);

    function openFilters() {
        setFiltersOpened(!filtersOpened);
    };

    const products = useSelector((state: any) => state.products.value)

    const [twooColumns, setTwooColumns] = useState<boolean>(false);

    function chooseLayout(event: any) {
        event.currentTarget.nextElementSibling?.classList.remove(styles.activeLayout)
        event.currentTarget.previousElementSibling?.classList.remove(styles.activeLayout)
        event.currentTarget.classList.add(styles.activeLayout);
        if ( event.currentTarget.classList.contains(styles.fourPlates)) {
            setTwooColumns(true)
        } else {
            setTwooColumns(false)
        }
    }
    return (
        <div className={styles.block}>
            <div className={styles.activities}>
                <SortByFeature />
                <ResetSearchFeature />
                <div className={styles.chooseListTemplate}>
                    <div className={`${styles.ninePlates} ${styles.activeLayout}`} onClick={chooseLayout}>
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
                    <div className={styles.fourPlates} onClick={chooseLayout}>
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
            <div className={`${styles.list} ${twooColumns && styles.twooColumns}`}>
                {/* {products.length === 0 && 
                <ImageGrid />
                } */}
                {products? products.map((product: any) => {
                    return (
                        <ProductListCard 
                            key={product.id} 
                            id={product.id} 
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
            <ListPagesFeature />
        </div>
    );
};

export default CatalogProductList;