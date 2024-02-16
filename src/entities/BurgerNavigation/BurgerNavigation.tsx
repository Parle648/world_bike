import React from 'react';
import styles from './styles/burgerNavigation.module.scss';
import burgerTrigger from '../../imgs/burger-trigger.png';
import close from '../../imgs/close.svg';
import { Link } from 'react-router-dom';
import MobileDropDown from './MobileDropDown/MobileDropDown';
import blackLogo from '../../imgs/black-logo.png';

const BurgerNavigation = () => {
    const [opened, setOpened] = React.useState(false);

    function navigationToggle() {
        setOpened(!opened);
    };


    React.useEffect(() => {
        if(opened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [opened])

    return (
        <div className={styles.block}>
            <button className={styles.openNavigation} onClick={navigationToggle}>
                <img src={burgerTrigger} alt="burgerTrigger" />
            </button>
            <div className={`${styles.navigation} ${opened && styles.navigationOpened}`}>
                <div className="">
                    <button className={styles.close} onClick={navigationToggle}>
                        <img src={close} alt="" />
                    </button>
                    <div className={styles.desktop}>
                        <h2 className={styles.ttl} >Доп. Информация</h2>
                    </div>

                    <div className={styles.mobile}>
                        <img className={styles.blackLogo} src={blackLogo} alt="blackLogo" />
                        <MobileDropDown 
                            title='Экипировка' 
                            links={["Велокуртки", "Велотрусы", "Термобелье", "Велообувь", "Велошлемы", "Велоперчатки", "Очки", "Аксессуары"]}
                        />
                        <MobileDropDown 
                            title='Велосипеды' 
                            links={[
                                "Горные велосипеды",
                                "Велосипеды для триатлона",
                                "Городские велосипеды",
                                "Двухподвесные велосипеды",
                                "Шоссейные велосипеды",
                                "Электровелосипеды",
                                "Гравийные велосипеды",
                                "Женские велосипеды",
                                "Трековые велосипеды",
                                "Детские велосипеды"
                            ]}
                        />
                        <MobileDropDown 
                            title='Запчасти' 
                            links={[
                                "Группы оборудования",
                                "Манетки/Шифтеры",
                                "Рамы",
                                "Педали",
                                "Вилки",
                                "Переключатели скоростей",
                                "Запчасти для электронных групп",
                                "Покрышки",
                                "Сёдла и штыри",
                                "Каретки",
                                "Системы шатунов",
                                "Камеры",
                                "Тормоза",
                                "Кассеты",
                                "Цепи",
                                "Колёса",
                            ]}
                        />
                        <MobileDropDown 
                            title='Велостанки' 
                            links={["Аксессуары для велостанков"]}
                        />
                        <MobileDropDown 
                            title='Экипировка' 
                            links={[
                                "Велокомпьютеры",
                                "Инструменты",
                                "Вилки",
                                "Велочехлы",
                                "Крылья",
                                "Насосы",
                                "Фляги, держатели",
                            ]}
                        />
                    </div>

                    <nav>
                        <ul>
                            <li className={styles.listItem}>
                                <Link className={styles.link} to='./'>О нас</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.link} to='./'>Веломастерская</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.link} to='./'>Хранение</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.link} to='./'>Гарантии</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.link} to='./'>Пользовательское соглашение</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.link} to='./'>Доставка и оплата</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.link} to='./'>Блог</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link className={styles.link} to='./'>Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default BurgerNavigation;