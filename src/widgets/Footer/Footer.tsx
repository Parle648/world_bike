import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../shared/Logo/Logo';
import styles from './styles/footer.module.scss';
import phone from '../../imgs/phone.svg'
import navigation from '../../imgs/navigation.svg'
import mail from '../../imgs/mail.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Logo />
                <p className={styles.companyDescription}>
                    Компания World-bikes специализируется на продаже товаров для велосипедного спорта.
                </p>
            </div>
            <div className={styles.additionalLists}>
                <h3 className={styles.listTtl}>Каталог</h3>
                <ul>
                    <li><Link className={styles.listLink} to='/catalog'>Trade-in</Link></li>
                    <li><Link className={styles.listLink} to='/catalog'>Велосипеды</Link></li>
                    <li><Link className={styles.listLink} to='/catalog'>Экипировка</Link></li>
                    <li><Link className={styles.listLink} to='/catalog'>Запчасти</Link></li>
                    <li><Link className={styles.listLink} to='/catalog'>Велостанки</Link></li>
                    <li><Link className={styles.listLink} to='/catalog'>Аксессуары</Link></li>
                </ul>
            </div>
            <div className={styles.additionalLists}>
                <h3 className={styles.listTtl}>Для клиента</h3>
                <ul>
                    <li><Link className={styles.listLink} to='/about-us'>О нас</Link></li>
                    <li><Link className={styles.listLink} to='/delivery'>Доставка и оплата</Link></li>
                    <li><Link className={styles.listLink} to='/blog'>Блог</Link></li>
                    <li><Link className={styles.listLink} to='/contacts'>Контакты</Link></li>
                    <li><Link className={styles.listLink} to='/bicycle-workshop'>Веломастерская</Link></li>
                    <li><Link className={styles.listLink} to='/storage'>Хранение</Link></li>
                    <li><Link className={styles.listLink} to='/guarantee'>Гарантии</Link></li>
                </ul>
            </div>
            <div>
                <h3 className={styles.listTtl}>Контакты</h3>
                <ul>
                    <li className={styles.contactListItem}>
                        <img src={phone} alt="phone" />
                        <div className={styles.contactListText}>
                            +380 0055-75-86
                            +380 0142-22-99
                        </div>
                    </li>
                    <li className={styles.contactListItem}>
                        <img src={navigation} alt="navigation" />
                        <div className={styles.contactListText}>г. Киев, ул. Шевченка, 7/8 с1</div>
                    </li>
                    <li className={styles.contactListItem}>
                        <img src={mail} alt="mail" />
                        <div className={styles.contactListText}>order@world-bike.ru</div>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;