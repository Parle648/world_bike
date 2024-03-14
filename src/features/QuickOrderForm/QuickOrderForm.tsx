import React from 'react';
import styles from './styles/quickOrderForm.module.scss';
import { Link } from 'react-router-dom';
import quickOrderFormProps from './types/quickOrderForm';
import { useForm } from 'react-hook-form';
import postQuickOrderRequest from './api/postQuickOrder';

type QuickOrderForm = {
    name: string,
    phone: string,
}

const QuickOrderForm = ({id}: quickOrderFormProps) => {
    
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm<QuickOrderForm>();

    function postQuickOrder(data: any) {
        console.log(data);
        
        postQuickOrderRequest(data)
        .then((response: any) => console.log(response.created));
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(postQuickOrder)}>
            <p className={styles.description}>
                Укажите ваше имя и телефон, и наш менеджер 
                свяжется с вами для оформления заказа.
            </p>
            <label className={styles.label}>
                <input className={`${styles.input} ${errors.name && styles.invalidInput}`} 
                type="text" 
                placeholder='Имя'
                {...register('name', {
                    required: 'this field shouldnt be empty',
                    pattern: {
                        value: /^[А-ЯЁ][а-яё]*$/,
                        message: 'Iмя повинно бути мати наст вигляд Олександр'
                    }
                })} />
                {errors.name && <h2 className={styles.error}>{errors.name.message}</h2>}
            </label>
            <label className={styles.label}>
                <input className={`${styles.input} ${errors.phone && styles.invalidInput}`} 
                type="text" 
                placeholder='Телефон'
                {...register('phone', {
                    required: 'this field shouldnt be empty',
                    pattern: {
                        value: /^\+380\d{9}$/,
                        message: 'Введiть номер у виглядi +380554832010',
                    }
                })} />
                {errors.phone && <h2 className={styles.error}>{errors.phone.message}</h2>}
            </label>
            <p className={styles.privacyPolicy}>
                Нажимая на кнопку «Заказать» я даю своё согласие на обработку персональных данных и принимаю
                <Link className={styles.privacyPolicyLink} to='privacy-policy'> условия соглашения</Link>
            </p>
            <button className={styles.submitBtn}>Заказать</button>
        </form>
    );
};

export default QuickOrderForm;