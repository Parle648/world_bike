import React from 'react';
import styles from './styles/deliveryInform.module.scss';
import arrowDown from '../../imgs/drop-down-arrow.svg';

const DeliveryInform = () => {
    function bodyToggle (event: React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget.nextElementSibling?.classList.toggle(styles.openBlock)
        event.currentTarget.lastElementChild?.classList.toggle(styles.arrowOpened)
        event.currentTarget.classList.toggle(styles.headerActive)
    }

    return (
        <div className='wrapper'>
            <h2 className={styles.ttl}>Информация о доставке</h2>
            <p className={styles.subttl}>
                Для удобства покупателей действует несколько способов доставки товаров. Существует доставка по Москве и М.О., доставка по регионам России и самовывоз. Любой из способов доступен при оформление заказа через сайт или у операторов.
            </p>
            <p className={styles.subttl}>
                Велосипеды и вело-станки доставляются в собранном и настроенном виде.
            </p>
            <p className={styles.subttl}>
                На любые вопросы по правилам и стоимости доставки ответят оператор: <a className={styles.number} href='#!'>+ 380 (495)055-75-86  </a>
            </p>
            <button className={styles.head} onClick={bodyToggle}>Доставка по Киеву, в пределах области<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Доставка по Киевской Области<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Доставка в другие регионы України<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Магазин — пункт самовывоза в Киеве<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>

            <h2 className={`${styles.ttl} ${styles.lastTtl}`} >Информаци об оплате</h2>
            <p className={styles.subttl}>
                Для удобства покупателей действует несколько способов доставки товаров. Существует доставка по Москве и М.О., доставка по регионам России и самовывоз. Любой из способов доступен при оформление заказа через сайт или у операторов.
            </p>
            <button className={styles.head} onClick={bodyToggle}>Оплата наличными<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Оплата банковскими картами <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Оплата через сайт <img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Безопасность электронных платежей<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Оплата в рассрочку картой «Халва»<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Оплата заказов при доставке по России<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
            <button className={styles.head} onClick={bodyToggle}>Покупка в кредит<img className={styles.arrow} src={arrowDown} alt="arrowDown" /></button>
            <div className={styles.body}>
                <div className={styles.listElement}>
                    Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.
                    Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.
                </div>
            </div>
        </div>
    );
};

export default DeliveryInform;