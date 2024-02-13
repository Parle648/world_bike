import React from 'react';
import styles from './styles/catalogMainSection.module.scss';
import CatalogFiltersForm from '../../features/CatalogFiltersForm/CatalogFiltersForm';
import CatalogProductList from '../CatalogProductList/CatalogProductList';

const CatalogMainSection = () => {
    return (
        <div className='wrapper'>
            <main className={styles.block}>
                <div className={styles.desctopFilter}>
                    <CatalogFiltersForm />
                </div>
                <CatalogProductList />
            </main>
        </div>
    );
};

export default CatalogMainSection;