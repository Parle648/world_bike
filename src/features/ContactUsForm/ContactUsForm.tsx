import React from 'react';
import styles from './styles/contactUsForm.module.scss';

const ContactUsForm = () => {
    return (
        <form className={styles.form}>
            <h2 className={styles.ttl}>СВЯЖИТЕСЬ С НАМИ ПО ЛЮБЫМ ВОПРОСАМ</h2>
            <fieldset className={styles.fieldset}>
                <input className={styles.input} type="text" placeholder='Имя'/>
                <input className={styles.input} type="text" placeholder='E-mail'/>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <input className={styles.input} type="text" placeholder='Телефон'/>
                <input className={styles.input} type="text" placeholder='Компания'/>
            </fieldset>
            <textarea className={styles.textArea} name="comment" id="comment" cols={30} rows={10} placeholder='Сообщение'></textarea>
            <button className={styles.submit} type="submit">Задать вопрос</button>
        </form>
    );
};

export default ContactUsForm;