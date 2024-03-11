import { useContext, useState } from 'react';
import styles from './styles/sortByfeature.module.scss';
import arrow from '../../imgs/filters-arrow.svg';
import { CatalogProvider } from '../../widgets/CatalogProductList/catalogProvider/catalogProvider';

const SortByFeature = () => {
    const [opened, setOpened] = useState<boolean>(false);

    function listToggle() {
        setOpened(!opened);
    };

    const catalogProvider = useContext(CatalogProvider);

    const [order, setOrder] = useState<string[]>(['Сортировка от последнего', 'Цены: по возрастанию', 'Цены: по убыванию'])

    function changeOrder(event: React.MouseEvent<HTMLElement>) {
        if (event.currentTarget.dataset.number === 'first') {
            setOrder(prev => [prev[1], prev[0], prev[2]])
        } else if (event.currentTarget.dataset.number === 'second') {
            setOrder(prev => [prev[2], prev[1], prev[0]])
        }
        setOpened(false)
        catalogProvider?.handleCatalogState(event)
    }

    return (
        <div>
            <button className={styles.openFilters} onClick={listToggle} >
                <span className={styles.title}>{order[0]}</span> 
                <img className={`${styles.arrow} ${opened && styles.arrowActive}`} src={arrow} alt="arrow" />
            </button>
            <ul className={`${styles.list} ${opened && styles.listOpened}`}>
                {/* <li className={styles.listItem} 
                data-filter="sort_by"
                data-value="by-popular"
                onClick={catalogProvider?.handleCatalogState}>По популярности</li>
                <li className={styles.listItem} 
                data-filter="sort_by"
                data-value="by-rating"
                onClick={catalogProvider?.handleCatalogState}>По рейтингу</li> */}
                <li className={styles.listItem} 
                data-filter="sort_by"
                data-number="first"
                onClick={changeOrder}>{order[1]}</li>
                <li className={styles.listItem} 
                data-filter="sort_by"
                data-number="second"
                onClick={changeOrder}>{order[2]}</li>
            </ul>
        </div>
    ); 
};

export default SortByFeature;