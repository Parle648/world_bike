import React from 'react';
import styles from './styles/personalDataForm.module.scss';

const PersonalDataForm = () => {
    return (
        <form className={styles.form}>
            <h2 className={styles.ttl}>Персональные данные</h2>

            <fieldset className={styles.fieldset}>
                <label className={styles.inputLabel}>
                    <h3 className={styles.inputTitle}>Имя</h3>
                    <input className={styles.twinInputs} type="text" name='name'/>
                </label>
                <label className={styles.inputLabel}>
                    <h3 className={styles.inputTitle}>Фамилия</h3>
                    <input className={styles.twinInputs} type="text" name='surname'/>
                </label>
            </fieldset>
            <label className={styles.inputLabel}>
                <h3 className={styles.inputTitle}>Отображаемое имя</h3>
                <input className={styles.input} type="text" name='view-name'/>
            </label>
            <label className={styles.inputLabel}>
                <h3 className={styles.inputTitle}>Электронная почта</h3>
                <input className={styles.input} type="text" name='email'/>
            </label>
            <label className={styles.inputLabel}>
                <h3 className={styles.inputTitle}>Номер телефона</h3>
                <input className={styles.input} type="text" name='phone'/>
            </label>
            <label className={styles.inputLabel}>
                <h3 className={styles.inputTitle}>Город</h3>
                <input className={styles.input} type="text" name='city'/>
            </label>
            <label className={styles.inputLabel}>
                <h3 className={styles.inputTitle}>Улица</h3>
                <input className={styles.input} type="text" name='street'/>
            </label>
            <fieldset className={styles.fieldset}>
                <label className={styles.inputLabel}>
                    <h3 className={styles.inputTitle}>Дом</h3>
                    <input className={styles.thirdInputs} type="text" name='house'/>
                </label>
                <label className={styles.inputLabel}>
                    <h3 className={styles.inputTitle}>Этаж</h3>
                    <input className={styles.thirdInputs} type="text" name='floor'/>
                </label>
                <label className={styles.inputLabel}>
                    <h3 className={styles.inputTitle}>Квартира</h3>
                    <input className={styles.thirdInputs} type="text" name='appartment'/>
                </label>
            </fieldset>

            <button className={styles.changeDataBtn}>Изменить</button>
        </form>
    );
};

export default PersonalDataForm;