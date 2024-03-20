import React, { useContext } from 'react';
import styles from './styles/listPages.module.scss';
import twinArrow from '../../imgs/twin-arrow-btn.svg';
import singleArrow from '../../imgs/list-page-arrow.svg';
import getProductsPage from './api/getProducts';
import productPageInterface from './types/productPageInterface';
import productListPagesProps from './types/productListPagesProps';
import { CatalogProvider } from '../../widgets/CatalogProductList/catalogProvider/catalogProvider';
import { useDispatch, useSelector } from 'react-redux';
import { choosePage, decrementPage, incrementPage } from '../../shared/lib/slices/pagesSlice';

const ListPagesFeature = () => {
    const dispatch = useDispatch();
    const {currentPage, pagesCount} = useSelector((state: any) => state.pagesSlice.value)
    
    const [page, setPage] = React.useState<number>(1);

    // React.useEffect(() => {
    //     getProductsPage(page).then((data: productPageInterface) => setProducts(data));
    // }, [page]);

    // function choosePage(event: React.MouseEvent<HTMLButtonElement>) {
    //     setPage(+event.currentTarget.innerHTML);
    // };

    const catalogStore = useContext(CatalogProvider);

    const pages = [];

    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }
    const pagesSlice = useSelector((state: any) => state.pagesSlice.value)

    function handlePage(event: any) {
        console.log(event.currentTarget.dataset.name);
        switch (event.currentTarget.dataset.name) {
            case 'tofirst':
                dispatch(choosePage(1))
                break
            case 'toprevious':
                dispatch(decrementPage());
                break
            case 'tonext':
                if (pagesSlice.currentPage !== pagesSlice.pagesCount) {
                    dispatch(incrementPage());
                }
                break
            case 'tolast':
                dispatch(choosePage(pagesSlice.pagesCount))
                break
            default:
                break;
        }
    }

    return (
        <div className={styles.block}>
            <img className={styles.slideBtn} data-name='tofirst' onClick={handlePage} src={twinArrow} alt="twinArrow" />
            <img className={styles.slideBtn} data-name='toprevious' onClick={handlePage} src={singleArrow} alt="singleArrow" />
            <div className={styles.pagesContainer}>
                <div className={styles.pages}>
                    {pages.map((pageNumber: number) => {
                        return (
                            <button 
                            className={`${styles.page} ${pageNumber === currentPage && styles.currentPage}`} 
                            data-element='pagebtn'
                            data-value={pageNumber}
                            onClick={catalogStore?.handleCatalogState} 
                            >
                                {pageNumber}
                            </button>
                        )
                    })}
                </div>
            </div>
            <img className={styles.reversedArow} data-name='tonext' onClick={handlePage} src={singleArrow} alt="singleArrow" />
            <img className={styles.reversedArow} data-name='tolast' onClick={handlePage} src={twinArrow} alt="twinArrow" />
        </div>
    );
};

export default ListPagesFeature;