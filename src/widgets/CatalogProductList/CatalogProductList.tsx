import React from 'react';
import styles from './styles/catalogList.module.scss';
import ProductListCard from '../../entities/ProductListCart/ProductListCart';
import flag from '../../imgs/italy-flag.png';
import bike from '../../imgs/bike-img.png';
import SortByFeature from '../../features/SortByFeature/SortByFeature';
import filter from '../../imgs/filter.svg';
import ListPagesFeature from '../../features/ProductListPages/ListPagesFeature';

const CatalogProductList = () => {
    const [opened, setOpened] = React.useState(true);


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
                <button className={styles.filtersOpen}>
                    <img src={filter} alt="filter" />
                </button>
            </div>
            <div className={styles.list}>
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                <ProductListCard opened={opened} setOpened={setOpened} country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
            </div>
            <ListPagesFeature />
        </div>
    );
};

export default CatalogProductList;