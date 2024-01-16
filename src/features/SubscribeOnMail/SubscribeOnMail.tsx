import React from 'react';
import styles from './styles/subscribeOnMail.module.scss';
import arrow from '../../imgs/checkbox-arrow.svg';

const SubscribeOnMail = () => {
    return (
       <form className={styles.form} action="post">
            <h2 className={styles.ttl}>Подпишитесь на наши новости</h2>
            <input className={styles.mail} type="mail" placeholder='E-mail' name="mail" id="mail" />
            <button className={styles.sendBtn} type="submit">Подписаться</button>
            <label className={styles.label}>
                <input className={styles.checkbox} type="checkbox" name="agree" id="agree"/>
                <span className={styles.fakeCheckbox}><img className={styles.arrow} src={arrow} alt="arrow" /></span>
                <span className={styles.agreementTtl}>Согласен(на) на обработку персональных данных</span>
            </label>
       </form>
    );
};

export default SubscribeOnMail;