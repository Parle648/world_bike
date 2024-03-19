import React, { useEffect, useState } from 'react';
import styles from './styles/catalogMainSection.module.scss';
import CatalogFiltersForm from '../../features/CatalogFiltersForm/CatalogFiltersForm';
import CatalogProductList from '../CatalogProductList/CatalogProductList';
import { useLocalStorage } from '../../shared/lib/hooks/useLocalStorage';
import { CatalogProvider } from '../CatalogProductList/catalogProvider/catalogProvider';
import provider from '../CatalogProductList/catalogProvider/types/catalogProviderTypes';
import setCatalogState from '../CatalogProductList/helpers/setCatalogState';
import Spinner from '../../shared/components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { choosePage, setPages } from '../../shared/lib/slices/pagesSlice';
import { popParam, pushParam, setHasAttribute, setParam } from '../../shared/lib/slices/currentFilers';
import { updateProducts } from '../../shared/lib/slices/Products';

const CatalogMainSection = () => {
    const [products, setProducts] = useLocalStorage([], 'products')
    
    const [productListState, setproductListState] = useState<provider>({
        pagesCount: 4,
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
            sortBy: '',
            search: ''
        },
        currentProducts: [],
    })
    
    const [filters, setFilters] = useLocalStorage(!localStorage.filters ? productListState.currentFilters : JSON.parse(localStorage.filters), 'filters')

    const [loaderUnvisible, setLoaderUnvisible] = useState<boolean>(true);

    // 

    const dispatch = useDispatch();
    const reduxFilters =  useSelector((state: any) => state.currentFilters.value);
    const reduxPages =  useSelector((state: any) => state.pagesSlice.value);

    console.log(JSON.stringify(reduxFilters));

    useEffect(() => {
        setLoaderUnvisible(false)
        setCatalogState(reduxFilters, reduxPages.currentPage)
        .then((data) => {
            dispatch(updateProducts(JSON.parse(data.data)))
            dispatch(setPages(JSON.parse(data.pagesCount)))
            setLoaderUnvisible(true)
            return data
        });
    }, [reduxFilters, reduxPages])
    

    const handleCatalogState = (event: any) => {
        if ( event.target.dataset.element === "pagebtn" ) {
            setLoaderUnvisible(false);
            dispatch(choosePage(+event.target.dataset.value))
        } else if (event.target.dataset.filter === "has") {
            setLoaderUnvisible(false);
            dispatch(setHasAttribute(event.target.checked))

        } else if (event.target.dataset.filter === "categories") {
            if (event.target.checked) {
                dispatch(pushParam({
                    value: event.target.dataset.name, 
                    type: event.target.dataset.filter,
                }))
            } else {
                dispatch(popParam({
                    value: event.target.dataset.name, 
                    type: event.target.dataset.filter,
                }))
            }
        } else if (event.target.dataset.filter === "brands") {
            if (event.target.checked) {
                dispatch(pushParam({
                    value: event.target.dataset.name, 
                    type: event.target.dataset.filter,
                }))
            } else {
                dispatch(popParam({
                    value: event.target.dataset.name, 
                    type: event.target.dataset.filter,
                }))
            }
        } else if (event.target.dataset.filter === "frame_materials") {
            if (event.target.checked) {
                dispatch(pushParam({
                    value: event.target.dataset.name, 
                    type: event.target.dataset.filter,
                }))
            } else {
                dispatch(popParam({
                    value: event.target.dataset.name, 
                    type: event.target.dataset.filter,
                }))
            }
        } else if (event.target.dataset.filter === "sort_by") {
            dispatch(setParam({
                attribute: 'sortBy', 
                content: event.target.innerText
        }))
            // setproductListState((prev: any) => {
            //     setCatalogState({
            //         ...prev,
            //         ["currentFilters"]: {
            //             ...prev.currentFilters,
            //             ["sortBy"]: event.target.innerText
            //         }
            //     }, setproductListState, 1).then(() => setLoaderUnvisible(true));
            //     return ({
            //         ...prev,
            //         ["currentFilters"]: {
            //             ...prev.currentFilters,
            //             ["sortBy"]: event.target.innerText
            //         }
            //     })
            // })
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

    // useEffect(() => {
    //     setFilters(productListState)
    // }, [productListState])

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