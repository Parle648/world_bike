import React, { ReactNode } from 'react';
import styles from './styles/accountBlock.module.scss';
import PersonalDataForm from '../../features/PersonalDataForm/PersonalDataForm';
import OrdersHistory from '../OrdersHistory/OrdersHistory';
import ChangePasswodForm from '../../features/ChangePasswordForm/ChangePasswodForm';

const bodyTrigger: ObjectInterface = {
    history: <OrdersHistory />,
    personal: <PersonalDataForm />,
    password: <ChangePasswodForm />,
}

interface ObjectInterface {
    [key: string]: ReactNode;
}

const AccountBlock = () => {
    const [section, setSection] = React.useState("history")

    function chooseSection(event: React.MouseEvent<HTMLElement>) {
        const dataName = event.currentTarget.dataset.name || 'nothing';
        setSection(dataName);
    }

    return (
        <div className='wrapper'>
            <main className={styles.block}>
                <div className={styles.navigationBlock}>
                    <h2 className={styles.ttl}>Мой аккаунт</h2>
                    <ul className={styles.navigation}>
                        <li className={`${styles.navSection} ${section === 'history' && styles.navSectionActive}`} data-name='history' onClick={chooseSection}>История заказов</li>
                        <li className={`${styles.navSection} ${section === 'personal' && styles.navSectionActive}`} data-name='personal' onClick={chooseSection}>Персональные данные</li>
                        <li className={`${styles.navSection} ${section === 'password' && styles.navSectionActive}`} data-name='password' onClick={chooseSection}>Смена пароля</li>
                        <li className={`${styles.navSection} ${section === 'prefer_list' && styles.navSectionActive}`} data-name='prefer_list'>Список желаний</li>
                        <li >
                            <button className={styles.quitBtn}>Выйти</button>
                        </li>
                    </ul>
                </div>
                {bodyTrigger[section] && bodyTrigger[section]}
            </main>
        </div>
    );
};

export default AccountBlock;