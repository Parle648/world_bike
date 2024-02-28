import React from 'react';
import styles from './styles/orderForm.module.scss';
import { Link } from 'react-router-dom';
import close from '../../imgs/close.svg';
import { useLocalStorage } from '../../shared/hooks/useLocalStorage';

const OrderForm = () => {
    function sendOrder(event: any) {
        event?.preventDefault();
        setOpened(!opened)
    }

    const [opened, setOpened] = React.useState<boolean>(false);
    const [orderedProducts, setOrderedProducts] = useLocalStorage([], 'orderedProducts')

    function closeBlock() {
        setOrderedProducts([]);
        window.location.href = 'https://wb-build.onrender.com/catalog';
        setOpened(!opened);
    }

    return (
        <form className={styles.form} onSubmit={sendOrder}>
            <div className={`${styles.backgroundColor} ${opened && styles.disabled}`}>
                <div className={styles.block}>
                    <button className={styles.close} onClick={closeBlock}><img src={close} alt="close" /></button>
                    <h2 className={styles.popUpTtl}>Ваш заказ подтверждён</h2>
                    <p className={styles.popUpParagraph}>
                        Lorem ipsum dolor sit amet consectetur. Congue malesuada quisque purus 
                        faucibus est adipiscing aliquam malesuada. Turpis ultricies diam at 
                        facilisis varius nunc lectus scelerisque enim. Nisl pulvinar adipiscing 
                        turpis ultricies posuere nibh faucibus. 
                    </p>
                </div>
            </div>
            <fieldset className={styles.firstStep}>

                <h2 className={styles.firstStepTtl}>1 Детали оплаты</h2>

                <div className={styles.inputs}>
                    <input placeholder='Имя*' className={styles.name} type="text" />
                    <input placeholder='Фамилия*' className={styles.surname} type="text" />
                    <input placeholder='Город*' className={styles.city} type="text" />
                    <input placeholder='улица*' className={styles.street} type="text" />
                    <input placeholder='Дом*' className={styles.house} type="number" />
                    <input placeholder='Кв*' className={styles.appartment} type="number" />
                    <input placeholder='Телефон*' className={styles.phone} type="number" />
                    <input placeholder='E-Mail*' className={styles.email} type="email" />
                    <input placeholder='Оставьте свой комментарий' className={styles.textarea} type="textarea" />
                </div>
            </fieldset>

            <fieldset className={styles.secondStep}>
                <h2 className={styles.firstStepTtl}>2 Детали доставки</h2>

                <h3 className={styles.stepBlockTtl}>Способ доставки</h3>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} type="radio" name='delivery' />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Курьерская доставка</span>
                </label>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} type="radio" name='delivery' />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Самовывоз</span>
                </label>

                <h3 className={styles.stepBlockTtl}>Способ оплаты</h3>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} type="radio" name='payment' />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}> Оплата онлайн, на сайте</span>
                </label>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} type="radio" name='payment' />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Оплата курьеру картой</span>
                </label>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} type="radio" name='payment' />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Оплата курьеру наличными</span>
                </label>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} type="radio" name='payment' />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Оплата в магазине</span>
                </label>
                
            </fieldset>

            <fieldset className={styles.thirdStep}>
                <h3>3 Ваш заказ</h3>
                <div className={styles.deliveryDataBlock}>
                    <h4 className={styles.deliveryDataTtl}>Курьерская доставка</h4>

                    <ul className={styles.deliveryDataList}>
                        <li className={styles.DeliveryDataItem}>Адрес:</li>
                        <li className={styles.DeliveryDataItem}>Кому: </li>
                        <li className={styles.DeliveryDataItem}>Телефон: </li>
                        <li className={styles.DeliveryDataItem}>E-mail:</li>
                    </ul>
                </div>
                <div className={styles.submitBlock}>
                    <h3 className={styles.submitBlockTtl}>Итого {3} товара {605150} ₽ </h3>
                    <button className={styles.submit}>Подтвердить заказ</button>
                    <p className={styles.privacyPolice}>
                        Ваши личные данные будут использоваться для обработки ваших заказов, 
                        упрощения вашей работы с сайтом и для других целей, описанных в 
                        нашей
                        <Link className={styles.privacyPolicyLink} to='./'>политике конфиденциальности</Link>
                    </p>
                </div>
            </fieldset>
        </form>
    );
};

export default OrderForm;