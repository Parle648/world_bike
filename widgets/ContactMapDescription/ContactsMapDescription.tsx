import React from 'react';
import styles from './styles/mapDescription.module.scss';

const ContactsMapDescription = () => {
    return (
        <div className='wrapper'>
            <div className={styles.block}>
                <ul className={styles.column}>
                    <li>
                        <h2 className={styles.ttl}>Адрес магазина:</h2>
                        <p className={styles.paragraph}>
                            Украина, Львов, ул. Street, дом 7/8 с1
                        </p>
                    </li>
                    <li>
                        <h2 className={styles.ttl}>График работы:</h2>
                        <p className={styles.paragraph}>
                            Понедельник — Воскресение с 10:00 до 20:00 часа <br />
                            БЕЗ ВЫХОДНЫХ
                        </p>
                    </li>
                    <li>
                        <h2 className={styles.ttl}>Телефоны:</h2>
                        <p className={styles.paragraph}>
                            +38 (095) 055-75-86 <br />
                            +38 (065) 142-22-99
                        </p>
                    </li>
                    <li>
                        <h2 className={styles.ttl}>E-mail:</h2>
                        <p className={styles.paragraph}>
                            order@world-bike.ru — заказы <br />
                            nfo@world-bike.ru — информация <br />
                            opt@world-bike.ru — опт
                        </p>
                    </li>
                </ul>
                <ul className={styles.column}>
                    <li>
                        <h2 className={styles.ttl}>Юридическая информация:</h2>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                    <li className={styles.informItem}>
                        <span className={styles.paragraph}>Наименование: </span><span className={styles.paragraph}>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactsMapDescription;