import { useEffect, useState } from 'react';
import styles from './styles/catalogMainSection.module.scss';
import CatalogFiltersForm from '../../features/CatalogFiltersForm/CatalogFiltersForm';
import CatalogProductList from '../CatalogProductList/CatalogProductList';
import { CatalogProvider } from '../CatalogProductList/catalogProvider/catalogProvider';
import setCatalogState from '../CatalogProductList/helpers/setCatalogState';
import Spinner from '../../shared/components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { choosePage, setPages } from '../../shared/lib/slices/pagesSlice';
import { popParam, pushParam, setHasAttribute, setParam, setCost } from '../../shared/lib/slices/currentFilers';
import { updateProducts } from '../../shared/lib/slices/Products';

const CatalogMainSection = () => {
    const [loaderUnvisible, setLoaderUnvisible] = useState<boolean>(true);
    // 

    const dispatch = useDispatch();
    const reduxFilters =  useSelector((state: any) => state.currentFilters.value);
    const reduxPages =  useSelector((state: any) => state.pagesSlice.value);

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
        }
        else if (event.target.dataset.filter === "cost") {
            console.log(event.target.dataset.name, +event.target.value);
            dispatch(setCost({
                attribute: event.target.dataset.name, 
                value: +event.target.value
            }))
            // dispatch(setParam({
            //     attribute: 'sortBy', 
            //     content: event.target.innerText
            // }))
        }
    }

    return (
        <div className='wrapper'>
            <CatalogProvider.Provider value={{
      
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