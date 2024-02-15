import React from 'react';
import styles from './styles/catalogForm.module.scss';
import { useForm } from 'react-hook-form';

import arrow from '../../imgs/filters-arrow.svg';

const CatalogFiltersForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
      
    const onSubmit = (data: any) => console.log(data);

    const [maxCost,setMaxCost] = React.useState(0);
    const [minCost,setMinCost] = React.useState(1300000);
    

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}> 
            <label className={styles.hasOnlyLabel}>
                <h2 className={styles.formTtl}>Только в наличии</h2>
                <input className={styles.hasOnly} type="checkbox" {...register("hasOnly")} id="hasOnly" />
                <div className={styles.fakeCheckbox} id={styles.fakeCheckbox}></div>
            </label>
            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Категории товара <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Велосипеды для триатлона</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Горные велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Городские велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Гравийные велосипеды</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Двухподвесные велосипеды</h2>
                </label>
            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Цена <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <div className={styles.costSlider}>
                    <div className={styles.costMin}></div>
                    <div className={styles.rangeBlock}></div>
                    <div className={styles.costMax}></div>
                </div>

                <div className={styles.costInputsContainer}>
                    <input className={styles.costInput} type="number" placeholder={`${maxCost}`} value={maxCost} {...register('checkbox')}/>
                    -
                    <input className={styles.costInput} type="number" placeholder={`${minCost}`} value={minCost} {...register('checkbox')}/>
                </div>

            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Бренд <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Bianci</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>BMC</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Ciclistino</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Cipollini</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Colnago</h2>
                </label>
            </div>

            <div className={styles.checkboxBlock}>
                <h2 className={styles.formTtl}>Материал рамы <img className={styles.arrow} src={arrow} alt="arrow" /></h2>

                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Алюминий</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Карбон</h2>
                </label>
                <label className={styles.checkboxLabel}>
                    <input className={styles.input} type="checkbox" {...register('checkbox')} id="" />
                    <div className={styles.fakeSquareCheckbox}>✓</div>
                    <h2 className={styles.formCheckboxTtl}>Сталь</h2>
                </label>
            </div>

            <button className={styles.removeFilters}>Сбросить фильтры</button>
        </form>
    );
};

export default CatalogFiltersForm;