import { memo, useContext, useRef, useState } from 'react';
import styles from './styles/catalogForm.module.scss';
// import { useLocalStorage } from '../../shared/hooks/useLocalStorage';
// import getProductsByProps from './api/getProductsByProps';
import arrow from '../../imgs/filters-arrow.svg';
import { CatalogProvider } from '../../widgets/CatalogProductList/catalogProvider/catalogProvider';

const CatalogFiltersForm = memo(() => {
    const [cost, setCost] = useState<number[]>([0, 950000])
    const [loaderUnvisible, setLoaderUnvisible] = useState<boolean>(true)
    // const unvisible = useRef<boolean>(true)

    // const [storage, setLocalStorage] = useLocalStorage({
    //     'has': false, 
    //     "categories": [''], 
    //     "cost": {
    //         'from': 0, 
    //         'to': 1200000
    //     }, 
    //     "brands": [''], 
    //     "frame_materials": [''] }, 'filters');
    
    const catalogStore = useContext(CatalogProvider);
    // function getByFilters(event: any): void {
        
    //     // const newStorage: {[key: string]: any} = {
    //     //     has: storage.has, 
    //     //     categories: storage.categories, 
    //     //     cost: storage.cost, 
    //     //     brands: storage.brands, 
    //     //     frame_materials: storage.frame_materials
    //     // }

    //     if (event.target.dataset.filter === 'has') {
    //         console.log(catalogStore);

    //         console.log({
    //             ...catalogStore?.productListState,
    //             // ["currentFilters"]: {
    //             //     ...catalogStore?.productListState.currentFilters, 
    //             //     ["has"]: event.target.checked
    //             // }
    //         });
            
    //         catalogStore?.setproductListState((prev: any) => {
    //             return ({
    //                 ...prev,
    //                 ["currentFilters"]: {
    //                     ...prev.currentFilters, 
    //                     ["has"]: event.target.checked
    //                 }
    //             })
    //         });
    //         catalogStore?.setproductListState((prev: any) => {
    //             console.log(prev);
    //             return (prev);
    //         })
    //     } else {
    //     }
    //     // setLoaderUnvisible(unvisible.current = false)
     
    //     // setLocalStorage(newStorage);
    //     // getProductsByProps(`filters=${JSON.stringify(newStorage)}`).then((data: any) => {setProducts(JSON.parse(data.data)); setLoaderUnvisible(unvisible.current = true)})
    // }

    // const [margins, setMargins] = React.useState([0, 0.25])

    // function rangeInteract(event: any) {
    //     const percent = (event.target.value / 1300000);
        
    //     if (event.target.dataset.name === 'min') {
    //         setMargins([margins[0] = percent, margins[1]])
    //         setMinCost(event.target.value)
    //     } else {
    //         setMargins([margins[0], margins[1] = (1 - percent)])
    //         setMaxCost(event.target.value)
    //     }
    // }

    // function getByFilters(evetn: any) {
        
    // }

    return (
        <form className={styles.form}> 
            <div className={`${styles.loaderContainer} ${loaderUnvisible && styles.diabled}`}>
                <span className={styles.loader}></span>
            </div>
            <label className={styles.hasOnlyLabel}>
                <h2 className={styles.formTtl}>Только в наличии</h2>
                <input className={`${styles.hasOnly}`} 
                // checked={catalogStore?.productListState.currentFilters.has} 
                data-filter='has' 
                type="checkbox" 
                name='hasOnly' 
                id="hasOnly" 
                onChange={catalogStore?.handleCatalogState}
                />
                <div className={styles.fakeCheckbox} id={styles.fakeCheckbox}></div>
            </label>
            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Категории товара <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    data-name='triatlon' 
                    data-filter='categories' 
                    type="checkbox"
                    name='categories' 
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={`${styles.fakeSquareCheckbox}`}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Велосипеды для триатлона</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    data-name='mountain' 
                    data-filter='categories' 
                    type="checkbox"
                    name='categories'
                    onChange={catalogStore?.handleCatalogState}
                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Горные велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    data-name='city' 
                    data-filter='categories' 
                    type="checkbox"
                    name='categories'  
                    onChange={catalogStore?.handleCatalogState}
                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Городские велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    data-name='gravel' 
                    data-filter='categories' 
                    type="checkbox"
                    name='categories' 
                    onChange={catalogStore?.handleCatalogState}
                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Гравийные велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    data-name='twise-suspension' 
                    data-filter='categories' 
                    type="checkbox"
                    name='categories' 
                    onChange={catalogStore?.handleCatalogState}
                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Двухподвесные велосипеды</h2>
                </label>
            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Цена <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                {/* <div className={styles.costSlider}>
                    <input className={styles.range} onChange={rangeInteract} type="range" name="min" min={0} max={1300000}  />
                    <div className={styles.rangeBlock} style={{left: `${margins[0]*100}%`, right: `${margins[1]*100}%`}}></div>
                    <input className={styles.range} onChange={rangeInteract} type="range" name="max"  min={0} max={1300000}  />
                </div> */}

                <div className={styles.costInputsContainer}>
                    <input className={styles.costInput} 
                    type="number" 
                    id='first-input'
                    placeholder={``} 
                    name='first'
                    data-filter='cost'
                    data-name='from'
                    onBlur={catalogStore?.handleCatalogState} />
                    
                    -

                    <input className={styles.costInput} 
                    type="number" 
                    id='second-input'
                    placeholder={`${cost[1]}`} 
                    name='second'
                    data-filter='cost'
                    data-name='to'
                    onBlur={catalogStore?.handleCatalogState} />
                </div>

            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Бренд <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='look' 
                    data-filter='brands' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Look</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='trek' 
                    data-filter='brands' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Trek</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='orbea' 
                    data-filter='brands' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Orbea</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='scott' 
                    data-filter='brands' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Scott</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='black' 
                    data-filter='brands' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Black</h2>
                </label>
            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Материал рамы <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='Aluminum' 
                    data-filter='frame_materials' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Алюминий</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='Carbon Fiber' 
                    data-filter='frame_materials' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Карбон</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='Steel' 
                    data-filter='frame_materials' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Сталь</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} 
                    type="checkbox" 
                    data-name='Titanium' 
                    data-filter='frame_materials' 
                    name='checkbox'
                    onChange={catalogStore?.handleCatalogState}

                    />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Титан</h2>
                </label>
            </div>

            <button className={styles.removeFilters}>Сбросить фильтры</button>
        </form>
    );
});

export default CatalogFiltersForm;