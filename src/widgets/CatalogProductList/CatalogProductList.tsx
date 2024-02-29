import { useContext, useEffect, useState } from 'react';
import styles from './styles/catalogList.module.scss';
import ProductListCard from '../../entities/ProductListCart/ProductListCart';
import flag from '../../imgs/italy-flag.png';
import SortByFeature from '../../features/SortByFeature/SortByFeature';
import filter from '../../imgs/filter.svg';
import ListPagesFeature from '../../features/ProductListPages/ListPagesFeature';
import ImageGrid from '../../entities/ProductListSceletopLoader/ProductListSceletonLoader';
import CatalogFiltersForm from '../../features/CatalogFiltersForm/CatalogFiltersForm';
import close from '../../imgs/close.svg';

import { catalogProvider } from './catalogProvider/catalogProvider';
import provider from './catalogProvider/types/catalogProviderTypes';
import setCatalogState from './helpers/setCatalogState';

const CatalogProductList = () => {
    const [filtersOpened, setFiltersOpened] = useState<boolean>(false);

    function openFilters() {
        setFiltersOpened(!filtersOpened);
    };

    const [productListState, setproductListState] = useState<provider>({
        pagesCount: 5,
        currentPage: 1,
        currentFilters: {
            has: false,
            categories: ['bmx'],
            cost: {
                from: 0,
                to: 1200000
            },
            brands: [],
            frame_materials: [],
            sortBy: ''
        },
        currentProducts: [],
    })

    const providerData = useContext<{productListState: provider, setproductListState: any, handleCatalogState: any} | undefined>(catalogProvider);

    useEffect(() => {
        if (JSON.stringify(productListState?.currentFilters) === '{"has":false,"categories":[],"cost":{"from":0,"to":1200000},"brands":[],"frame_materials":[],"sortBy":""}') {
            new Promise((resolve, reject) => {
                try {
                    resolve(fetch(`http://localhost:3002/api/products/pages/:${1}`))
                } catch (error) {
                    reject(console.error(error));
                }
            })
            .then((response: any) => response.json())
            .then((data: any) => {
                setproductListState(prev => {
                    return ({
                        ...prev, 
                        ["currentProducts"]: data.products, 
                        ["pagesCount"]: data.pages,
                        ["currentPage"]: 1,
                    })
                });
            });
        } else {
            new Promise((resolve, reject) => {
                try {
                    resolve(fetch(`http://localhost:3002/api/getproducts/filters?filters=${JSON.stringify(productListState.currentFilters)}&currentPage=${productListState.currentPage}`));
                } catch (error) {
                    reject(console.error(error));
                };
            })
            .then((response: any) => response.json())
            .then((data: any) => {
                setproductListState(prev => {
                    return ({
                        ...prev, 
                        ["currentProducts"]: JSON.parse(data.data), 
                        ["pagesCount"]: data.pagesCount <= 0 ? 1 : data.pagesCount,
                        ["currentPage"]: 1,
                    })
                });
            })
        }
    }, [])

    function handleCatalogState(event: any) {
        console.log(event.target.dataset);
        
        if ( event.target.dataset.element === "pagebtn" ) {
            console.log(setCatalogState(productListState, setproductListState, +event.target.dataset.value));
        } else if (event.target.dataset.filter === "has") {
            console.log(event.target.checked);
        }
    }

    return (
        <catalogProvider.Provider value={{productListState, setproductListState, handleCatalogState}}
        >
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
                    {/* {products.length === 0 && 
                    <ImageGrid />
                    } */}
                    {productListState ? productListState.currentProducts.map((product: any) => {
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
        </catalogProvider.Provider>
    );
};

export default CatalogProductList;