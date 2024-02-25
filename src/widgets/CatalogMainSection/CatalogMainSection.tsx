import React from 'react';
import styles from './styles/catalogMainSection.module.scss';
import CatalogFiltersForm from '../../features/CatalogFiltersForm/CatalogFiltersForm';
import CatalogProductList from '../CatalogProductList/CatalogProductList';
import { useLocalStorage } from '../../shared/hooks/useLocalStorage';

const CatalogMainSection = () => {
    const [products, setProducts] = useLocalStorage([], 'products')

    return (
        <div className='wrapper'>
            <main className={styles.block}>
                <div className={styles.desctopFilter}>
                    <CatalogFiltersForm products={products} setProducts={setProducts} />
                </div>
                <CatalogProductList products={products} setProducts={setProducts} />
            </main>
        </div>
    );
};

export default CatalogMainSection;