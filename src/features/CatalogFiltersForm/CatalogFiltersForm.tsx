import React from 'react';
import styles from './styles/catalogForm.module.scss';
import { useForm } from 'react-hook-form';
import { useLocalStorage } from '../../shared/hooks/useLocalStorage';
import arrow from '../../imgs/filters-arrow.svg';
import getProductsByProps from './api/getProductsByProps';

const CatalogFiltersForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
      
    const onSubmit = (data: any) => console.log(data);

    const [cost, setCost] = React.useState([0, 950000])
    
    React.useEffect(() => {
        getProductsByProps('').then((data: any) => console.log(data))
    }, [])

    const [storage, setLocalStorage] = useLocalStorage({
        'has': false, 
        "categories": [], 
        "cost": {
            'from': 0, 
            'to': 1200000
        }, 
        "brands": [], 
        "frame_materials": [] }, 'filters');

    React.useEffect(() => {
        setLocalStorage({
            'has': false, 
            "categories": [], 
            "cost": {
                'from': 0, 
                'to': 1200000
            }, 
            "brands": [], 
            "frame_materials": [] })
    }, [])
    
    const [products, setProducts] = useLocalStorage({}, 'products')

    function getByFilters(event: any): void {
        const newStorage: {[key: string]: any} = {
            has: storage.has, 
            categories: storage.categories, 
            cost: storage.cost, 
            brands: storage.brands, 
            frame_materials: storage.frame_materials
        }

        if (event.target.dataset.filter === 'has') {
            newStorage.has = !storage.has;
            event.target.nextElementSibling.classList.toggle(styles.hasActive)            
        } else {
            console.log(event.target.checked);
            event.target.nextElementSibling.classList.toggle(styles.radioActive);

            event.target.nextElementSibling.classList.contains(styles.radioActive) ? 
            newStorage[event.target.dataset.filter].push(event.target.dataset.name) : 
            newStorage[event.target.dataset.filter] = newStorage[event.target.dataset.filter].filter((type: string) => type !== event.target.dataset.name);
        }
     
        setLocalStorage(newStorage);
        getProductsByProps(`filters=${JSON.stringify(newStorage)}`).then((data: any) => setProducts(data))
    }

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

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}> 
            <label className={styles.hasOnlyLabel}>
                <h2 className={styles.formTtl}>Только в наличии</h2>
                <input className={`${styles.hasOnly} ${storage.has && styles.hasActive}`} checked={storage.has} data-filter='has' type="checkbox" {...register("hasOnly")} id="hasOnly" onChange={getByFilters}/>
                <div className={styles.fakeCheckbox} id={styles.fakeCheckbox}></div>
            </label>
            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Категории товара <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} data-name='triatlon' data-filter='categories' type="checkbox" {...register('checkbox')} onChange={getByFilters} id="" />
                    <div className={`${styles.fakeSquareCheckbox} ${storage.categories.some((string: string) => string === 'triatlon') && styles.radioActive}}`}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Велосипеды для триатлона</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} data-name='mountain' data-filter='categories' type="checkbox" {...register('checkbox', {
                        onChange: getByFilters,
                    })} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Горные велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} data-name='city' data-filter='categories' type="checkbox" {...register('checkbox', {
                        onChange: getByFilters,
                    })} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Городские велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} data-name='gravel' data-filter='categories' type="checkbox" {...register('checkbox', {
                        onChange: getByFilters,
                    })} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Гравийные велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} data-name='twise-suspension' data-filter='categories' type="checkbox" {...register('checkbox', {
                        onChange: getByFilters,
                    })} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Двухподвесные велосипеды</h2>
                </label>
            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Цена <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                {/* <div className={styles.costSlider}>
                    <input className={styles.range} onChange={rangeInteract} type="range" name="min" min={0} max={1300000}  id="" />
                    <div className={styles.rangeBlock} style={{left: `${margins[0]*100}%`, right: `${margins[1]*100}%`}}></div>
                    <input className={styles.range} onChange={rangeInteract} type="range" name="max"  min={0} max={1300000}  id="" />
                </div> */}

                <div className={styles.costInputsContainer}>
                    <input className={styles.costInput} 
                    type="number" 
                    id='first-input'
                    placeholder={``} 
                    value={storage.cost.from}
                    {...register('first')} 
                    onInput={((event: any) => {
                        const newStorage: {[key: string]: any} = {
                            has: storage.has, 
                            categories: storage.categories, 
                            cost: storage.cost, 
                            brands: storage.brands, 
                            frame_materials: storage.frame_materials
                        }

                        setCost([event.target.value, cost[1]]);

                        newStorage.cost.from = event.target.value;

                        setLocalStorage(newStorage);
                    })}
                    onBlur={() => {
                        getProductsByProps(`filters=${JSON.stringify(storage)}`).then((data: any) => console.log(data))
                    }} />
                    
                    -

                    <input className={styles.costInput} 
                    type="number" 
                    id='second-input'
                    placeholder={`${cost[1]}`} 
                    value={storage.cost.to}
                    {...register('second')} 
                    onInput={((event: any) => {
                        const newStorage: {[key: string]: any} = {
                            has: storage.has, 
                            categories: storage.categories, 
                            cost: storage.cost, 
                            brands: storage.brands, 
                            frame_materials: storage.frame_materials
                        }

                        setCost([cost[0], event.target.value]);
                        

                        newStorage.cost.to = event.target.value;

                        setLocalStorage(newStorage);
                    })} 
                    onBlur={() => {
                        getProductsByProps(`filters=${JSON.stringify(storage)}`).then((data: any) => console.log(data))
                    }} />
                </div>

            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Бренд <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" data-name='Bianci' data-filter='brands' {...register('checkbox', {onChange: getByFilters})} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Bianci</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" data-name='BMC' data-filter='brands' {...register('checkbox', {onChange: getByFilters})} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>BMC</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" data-name='Ciclistino' data-filter='brands' {...register('checkbox', {onChange: getByFilters})} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Ciclistino</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" data-name='Cipollini' data-filter='brands' {...register('checkbox', {onChange: getByFilters})} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Cipollini</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" data-name='Colnago' data-filter='brands' {...register('checkbox', {onChange: getByFilters})} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Colnago</h2>
                </label>
            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Материал рамы <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" data-name='lumuni' data-filter='frame_materials' {...register('checkbox', {onChange: getByFilters})} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Алюминий</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" data-name='carbon' data-filter='frame_materials' {...register('checkbox', {onChange: getByFilters})} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Карбон</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" data-name='steel' data-filter='frame_materials' {...register('checkbox', {onChange: getByFilters})} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Сталь</h2>
                </label>
            </div>

            <button className={styles.removeFilters}>Сбросить фильтры</button>
        </form>
    );
};

export default CatalogFiltersForm;