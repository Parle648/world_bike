import React from 'react';
import styles from './styles/additionalService.module.scss';
import arrowDown from '../../imgs/drop-down-arrow.svg';

const AdditionalService = () => {
    function bodyToggle (event: React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget.nextElementSibling?.classList.toggle(styles.openBlock)
        event.currentTarget.lastElementChild?.classList.toggle(styles.arrowOpened)
        event.currentTarget.classList.toggle(styles.headerActive)
    }

    return (
        <div className={styles.block}>
            <div className="wrapper">
                <h3 className={styles.ttl}>Дополнительные услуги</h3>
                <button className={styles.head} onClick={bodyToggle}>Ремонт привода <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <ul>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                    </ul>
                </div>
                <button className={styles.head} onClick={bodyToggle}>Рулевое управление <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <ul>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                    </ul>
                </div>
                <button className={styles.head} onClick={bodyToggle}>Колеса <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <ul>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                    </ul>
                </div>
                <button className={styles.head} onClick={bodyToggle}>Рама <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <ul>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                    </ul>
                </div>
                <button className={styles.head} onClick={bodyToggle}>Вилка <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <ul>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                    </ul>
                </div>
                <button className={styles.head} onClick={bodyToggle}>Дополнительное оборудование (аксессуары) <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <ul>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                        <li className={styles.listElement}><span>Укорачивание штока вилки</span><span>150</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdditionalService;