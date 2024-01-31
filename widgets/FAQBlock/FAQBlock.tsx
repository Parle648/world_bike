import React from 'react';
import styles from './styles/faqBlock.module.scss';
import arrowDown from '../../imgs/drop-down-arrow.svg';

const FAQBlock = () => {
    function bodyToggle (event: React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget.nextElementSibling?.classList.toggle(styles.openBlock)
        event.currentTarget.lastElementChild?.classList.toggle(styles.arrowOpened)
        event.currentTarget.classList.toggle(styles.headerActive)
    }

    return (
        <div className={styles.block}>
            <div className='wrapper'>
                <h2 className={styles.blockttl}>Часто задаваемые вопросы</h2>
                <button className={styles.head} onClick={bodyToggle}>Получу ли я тот же товар, что и на картинке? <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <div className={styles.listElement}>
                        Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                        Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                    </div>
                </div>
                <button className={styles.head} onClick={bodyToggle}>Где я могу посмотреть чек о продаже? <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <div className={styles.listElement}>
                        Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                        Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                    </div>
                </div>
                <button className={styles.head} onClick={bodyToggle}>Как я могу вернуть товар? <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <div className={styles.listElement}>
                        Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                        Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                    </div>
                </div>
                <button className={styles.head} onClick={bodyToggle}>Будете ли вы пополнять запасы товаров, помеченных как «нет в наличии»? <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <div className={styles.listElement}>
                        Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                        Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                    </div>
                </div>
                <button className={styles.head} onClick={bodyToggle}>С какими видами доставки вы работаете? <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
                <div className={styles.body}>
                    <div className={styles.listElement}>
                        Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                        Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQBlock;