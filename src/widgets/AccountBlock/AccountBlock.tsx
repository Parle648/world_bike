import React from 'react';
import styles from './styles/accountBlock.module.scss';

const AccountBlock = () => {
    return (
        <div className='wrapper'>
            <main className={styles.block}>
                <div className={styles.navigationBlock}>
                    <h2 className={styles.ttl}>Мой аккаунт</h2>
                    <ul className={styles.navigation}>
                        <li className={styles.navSection}>История заказов</li>
                        <li className={styles.navSection}>Персональные данные</li>
                        <li className={`${styles.navSection} ${styles.navSectionActive}`}>Смена пароля</li>
                        <li className={styles.navSection}>Список желаний</li>
                        <li >
                            <button className={styles.quitBtn}>Выйти</button>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default AccountBlock;