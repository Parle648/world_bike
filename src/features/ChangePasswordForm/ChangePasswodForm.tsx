import React from 'react';
import styles from './styles/changePasswordForm.module.scss';

const ChangePasswodForm = () => {
    return (
        <form className={styles.form}>
            <h2 className={styles.ttl}>Смена Пароля</h2>
            <label className={styles.label}>
                <h3 className={styles.inputTtl}>Старый пароль</h3>
                <input className={styles.input} type="text" />
            </label>
            <label className={styles.label}>
                <h3 className={styles.inputTtl}>Новый пароль</h3>
                <input className={styles.input} type="text" />
            </label>
            <label className={styles.label}>
                <h3 className={styles.inputTtl}>Повторите пароль</h3>
                <input className={styles.input} type="text" />
            </label>
            <button className={styles.submitBtn}>Изменить</button>
        </form>
    );
};

ChangePasswodForm.propTypes = {
    
};

export default ChangePasswodForm;