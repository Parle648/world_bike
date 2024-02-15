import React from 'react';
import styles from './styles/quickOrderForm.module.scss';
import { Link } from 'react-router-dom';
import quickOrderFormProps from './types/quickOrderForm';

const QuickOrderForm = ({id}: quickOrderFormProps) => {
    return (
        <form className={styles.form}>
            <p className={styles.description}>
                Укажите ваше имя и телефон, и наш менеджер 
                свяжется с вами для оформления заказа.
            </p>
            <input className={styles.input} type="text" placeholder='Имя' />
            <input className={styles.input} type="text" placeholder='Телефон' />
            <p className={styles.privacyPolicy}>
                Нажимая на кнопку «Заказать» я даю своё согласие на обработку персональных данных и принимаю
                <Link className={styles.privacyPolicyLink} to='privacy-policy'> условия соглашения</Link>
            </p>
            <button className={styles.submitBtn}>Заказать</button>
        </form>
    );
};

export default QuickOrderForm;