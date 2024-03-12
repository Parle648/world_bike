import React, { useEffect, useState } from 'react';
import styles from './styles/catalogMainSection.module.scss';
import CatalogFiltersForm from '../../features/CatalogFiltersForm/CatalogFiltersForm';
import CatalogProductList from '../CatalogProductList/CatalogProductList';
import { useLocalStorage } from '../../shared/hooks/useLocalStorage';
import { CatalogProvider } from '../CatalogProductList/catalogProvider/catalogProvider';
import provider from '../CatalogProductList/catalogProvider/types/catalogProviderTypes';
import setCatalogState from '../CatalogProductList/helpers/setCatalogState';
import Spinner from '../../shared/components/Spinner/Spinner';

const CatalogMainSection = () => {
    const [products, setProducts] = useLocalStorage([], 'products')
    
    const [productListState, setproductListState] = useState<provider>({
        pagesCount: 5,
        currentPage: 1,
        currentFilters: {
            has: false,
            categories: [],
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

    const [loaderUnvisible, setLoaderUnvisible] = useState<boolean>(true);

    const handleCatalogState = (event: any) => {
        if ( event.target.dataset.element === "pagebtn" ) {
            setLoaderUnvisible(false);
            setproductListState((prev: any) => {
                return ({
                    ...prev,
                    ["currentPage"]: +event.target.dataset.value,
                })
            })
            setCatalogState(productListState, setproductListState, +event.target.dataset.value).then(() => setLoaderUnvisible(true));
        } else if (event.target.dataset.filter === "has") {
            setLoaderUnvisible(false);
            setproductListState((prev: any) => {
                setCatalogState({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["has"]: event.target.checked,
                    }
                }, setproductListState, 1).then(() => setLoaderUnvisible(true));
                return ({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["has"]: event.target.checked,
                    }
                })
            })
        } else if (event.target.dataset.filter === "categories") {
            setLoaderUnvisible(false);
            setproductListState((prev: any) => {
                const categories = prev.currentFilters.categories;
                setCatalogState({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["categories"]: event.target.checked ? 
                        [...prev.currentFilters.categories, event.target.dataset.name] : 
                        categories.filter((string: string) => string !== event.target.dataset.name)
                    }
                }, setproductListState, 1).then(() => setLoaderUnvisible(true));
                return ({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["categories"]: event.target.checked ? 
                        [...prev.currentFilters.categories, event.target.dataset.name] : 
                        categories.filter((string: string) => string !== event.target.dataset.name)
                    }
                })
            })
        } else if (event.target.dataset.filter === "brands") {
            setLoaderUnvisible(false);
            setproductListState((prev: any) => {
                const brands = prev.currentFilters.brands;
                setCatalogState({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["brands"]: event.target.checked ? 
                        [...prev.currentFilters.brands, event.target.dataset.name] : 
                        brands.filter((string: string) => string !== event.target.dataset.name)
                    }
                }, setproductListState, 1).then(() => setLoaderUnvisible(true));
                return ({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["brands"]: event.target.checked ? 
                        [...prev.currentFilters.brands, event.target.dataset.name] : 
                        brands.filter((string: string) => string !== event.target.dataset.name)
                    }
                })
            })
        } else if (event.target.dataset.filter === "frame_materials") {
            setLoaderUnvisible(false);
            setproductListState((prev: any) => {
                const frame_materials = prev.currentFilters.frame_materials;
                setCatalogState({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["frame_materials"]: event.target.checked ? 
                        [...prev.currentFilters.frame_materials, event.target.dataset.name] : 
                        frame_materials.filter((string: string) => string !== event.target.dataset.name)
                    }
                }, setproductListState, 1).then(() => setLoaderUnvisible(true));
                return ({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["frame_materials"]: event.target.checked ? 
                        [...prev.currentFilters.frame_materials, event.target.dataset.name] : 
                        frame_materials.filter((string: string) => string !== event.target.dataset.name)
                    }
                })
            })
        } else if (event.target.dataset.filter === "sort_by") {
            setLoaderUnvisible(false);
            setproductListState((prev: any) => {
                setCatalogState({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["sortBy"]: event.target.innerText
                    }
                }, setproductListState, 1).then(() => setLoaderUnvisible(true));
                return ({
                    ...prev,
                    ["currentFilters"]: {
                        ...prev.currentFilters,
                        ["sortBy"]: event.target.innerText
                    }
                })
            })
        }
    }

    useEffect(() => {
        setLoaderUnvisible(false);
        if (JSON.stringify(productListState?.currentFilters) === '{"has":false,"categories":[],"cost":{"from":0,"to":1200000},"brands":[],"frame_materials":[],"sortBy":""}') {
            new Promise((resolve, reject) => {
                try {
                    resolve(fetch(`http://localhost:3001/api/products/pages/:${1}`))
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
            })
            .then(() => setLoaderUnvisible(true));
        } else {
            new Promise((resolve, reject) => {
                try {
                    resolve(fetch(`http://localhost:3001/api/getproducts/filters?filters=${JSON.stringify(productListState.currentFilters)}&currentPage=${productListState.currentPage}`));
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
            .then(() => setLoaderUnvisible(true));
        }
    }, [])

    return (
        <div className='wrapper'>
            <CatalogProvider.Provider value={{
            productListState, 
            setproductListState, 
            handleCatalogState
        }}>
                <main className={styles.block}>
                    <Spinner loaderUnvisible={loaderUnvisible} />
                    <div className={styles.desctopFilter}>
                        <CatalogFiltersForm />
                    </div>
                    <CatalogProductList />
                </main>
            </CatalogProvider.Provider>
        </div>
    );
};

export default CatalogMainSection;