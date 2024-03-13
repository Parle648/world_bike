import React from 'react';
import styles from './styles/orderForm.module.scss';
import { Link } from 'react-router-dom';
import close from '../../imgs/close.svg';
import { useLocalStorage } from '../../shared/hooks/useLocalStorage';
import { useForm } from 'react-hook-form';

type OrderFormFields = {
    name: string,
    surname: string,
    city: string,
    street: string,
    house: number,
    appartment: number,
    phone: string,
    email: string,
    comment: string,
    delivery: string,
    payment: string,
}

const OrderForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors
        }
    } = useForm<OrderFormFields>();

    function sendOrder(data: OrderFormFields) {
        console.log(data);
        
        setOpened(!opened)
    }

    const [opened, setOpened] = React.useState<boolean>(false);
    const [orderedProducts, setOrderedProducts] = useLocalStorage([], 'orderedProducts')

    function closeBlock() {
        setOrderedProducts([]);
        window.location.href = 'https://wb-build.onrender.com/catalog';
        setOpened(!opened);
    } 

    const orderAmount = JSON.parse(localStorage.orderedProducts).reduce((amount: number, product: any) => amount + product.cost * product.count, 0);
    const orderProductsCount = JSON.parse(localStorage.orderedProducts).reduce((amount: number, product: any) => amount + product.count, 0);

    const number = watch("phone");
    const email = watch("email");
    const name = watch("name");
    const surname = watch("surname");
    const city = watch("city");
    const street = watch("street");
    const house = watch("house");
    const appartment = watch("appartment");

    return (
        <form className={styles.form} onSubmit={handleSubmit(sendOrder)}>
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
                    <label className={styles.label}>
                        <input placeholder='Имя*' 
                        className={`${styles.name} ${errors.name && styles.invalidInput}`} 
                        type="text"
                        {...register('name', {
                            required: 'Введiть у дане поле iмя',
                            pattern: {
                                value: /^[А-ЯЁ][а-яё]*$/,
                                message: 'Iмя повинно бути мати наст вигляд Олександр'
                            },
                            minLength: {
                                value: 3,
                                message: 'введiть бiльше 3 символiв'
                            }
                        })} />
                        {errors.name && <h2 className={styles.errorTitle} >{errors.name.message}</h2>}
                    </label>
                   
                    <label className={styles.label}>
                        <input placeholder='Фамилия*' 
                        className={`${styles.surname} ${errors.surname && styles.invalidInput}`} 
                        type="text"
                        {...register('surname', {
                            required: 'Введiть у дане поле прiзвище',
                            pattern: {
                                value: /^[А-ЯЁ][а-яё]*$/,
                                message: 'Iмя повинно бути мати наст вигляд Олександр'
                            },
                            minLength: {
                                value: 3,
                                message: 'введiть бiльше 3 символiв'
                            }
                        })} />
                        {errors.surname && <h2 className={styles.errorTitle} >{errors.surname.message}</h2>}
                    </label>
                   
                    <label className={styles.label}>
                        <input placeholder='Город*' 
                        className={`${styles.city} ${errors.city && styles.invalidInput}`} 
                        type="text"
                        {...register('city', {
                            required: 'Введiть у дане поле мiсто',
                            pattern: {
                                value: /^[А-ЯЁ][а-яё]*$/,
                                message: 'Iмя повинно бути мати наст вигляд Олександр'
                            },
                            minLength: {
                                value: 3,
                                message: 'введiть бiльше 3 символiв'
                            }
                        })} />
                        {errors.city && <h2 className={styles.errorTitle} >{errors.city.message}</h2>}
                    </label>
                   
                    <label className={styles.label}>
                        <input placeholder='Улица*' 
                        className={`${styles.street} ${errors.street && styles.invalidInput}`} 
                        type="text"
                        {...register('street', {
                            required: 'Введiть у дане вулицю',
                            pattern: {
                                value: /^[А-ЯЁ][а-яё]*$/,
                                message: 'Iмя повинно бути мати наст вигляд Олександр'
                            },
                            minLength: {
                                value: 3,
                                message: 'введiть бiльше 3 символiв'
                            }
                        })} />
                        {errors.street && <h2 className={styles.errorTitle} >{errors.street.message}</h2>}
                    </label>
            
                    <label className={styles.label}>
                        <input placeholder='Дом*' 
                        className={`${styles.house} ${errors.house && styles.invalidInput}`} 
                        type="text"
                        {...register('house', {
                            required: 'обовязк.',
                        })} />
                        {errors.house && <h2 className={styles.errorTitle} >{errors.house.message}</h2>}
                    </label>
             
                    <label className={styles.label}>
                        <input placeholder='Кв*' 
                        className={`${styles.appartment} ${errors.appartment && styles.invalidInput}`} 
                        type="text"
                        {...register('appartment', {
                            required: 'обовязк.',
                        })} />
                        {errors.appartment && <h2 className={styles.errorTitle} >{errors.appartment.message}</h2>}
                    </label>
         
                    <label className={styles.label}>
                        <input placeholder='Телефон*' 
                        className={`${styles.phone} ${errors.phone && styles.invalidInput}`} 
                        type="text"
                        {...register('phone', {
                            required: 'Введiть свiй номер телефону',
                            pattern: {
                                value: /^\+380\d{9}$/,
                                message: 'Введiть номер у виглядi +380554832010'
                            },
                        })} />
                        {errors.phone && <h2 className={styles.errorTitle} >{errors.phone.message}</h2>}
                    </label>
          
                    <label className={styles.label}>
                        <input placeholder='E-Mail*' 
                        className={`${styles.email} ${errors.email && styles.invalidInput}`} 
                        type="text"
                        {...register('email', {
                            required: 'Введiть свiй email',
                            pattern: {
                                value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                                message: 'Введiть номер email'
                            },
                        })} />
                        {errors.email && <h2 className={styles.errorTitle} >{errors.email.message}</h2>}
                    </label>
                    <input placeholder='Оставьте свой комментарий' 
                    className={styles.textarea} 
                    type="textarea"
                    {...register('comment', {
                        required: false,
                    })} />
                </div>
            </fieldset>

            <fieldset className={styles.secondStep}>
                <h2 className={styles.firstStepTtl}>2 Детали доставки</h2>

                <h3 className={styles.stepBlockTtl}>Способ доставки</h3>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} 
                    type="radio" 
                    value='delivery'
                    {...register('delivery', {
                        required: true
                    })} />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Курьерская доставка</span>
                </label>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} 
                    type="radio" 
                    value='self-delivery'
                    {...register('delivery', {
                        required: true
                    })} />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Самовывоз</span>
                </label>

                <h3 className={styles.stepBlockTtl}>Способ оплаты</h3>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} 
                    type="radio" 
                    value='online'
                    {...register('payment', {
                        required: true
                    })} />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}> Оплата онлайн, на сайте</span>
                </label>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} 
                    type="radio" 
                    value='ofline-cart'
                    {...register('payment', {
                        required: true
                    })} />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Оплата курьеру картой</span>
                </label>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} 
                    type="radio" 
                    value='ofline-cash'
                    {...register('payment', {
                        required: true
                    })} />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Оплата курьеру наличными</span>
                </label>
                <label className={styles.radioLabel}>
                    <input className={styles.unvisibleRadio} 
                    type="radio" 
                    value='inshop'
                    {...register('payment', {
                        required: true
                    })} />
                    <div className={styles.fakeRadio}></div>
                    <span className={styles.radioTtl}>Оплата в магазине</span>
                </label>
                
            </fieldset>

            <fieldset className={styles.thirdStep}>
                <h3>3 Ваш заказ</h3>
                <div className={styles.deliveryDataBlock}>
                    <h4 className={styles.deliveryDataTtl}>Курьерская доставка</h4>

                    <ul className={styles.deliveryDataList}>
                        <li className={styles.DeliveryDataItem}>Адрес: {<span>{`мiсто ${city} вулиця ${street} будинок ${house} квартира ном ${appartment}`}</span>}</li>
                        <li className={styles.DeliveryDataItem}>Кому: {<span>{`${name} ${surname}`}</span>}</li>
                        <li className={styles.DeliveryDataItem}>Телефон: {<span>{number}</span>}</li>
                        <li className={styles.DeliveryDataItem}>E-mail: {<span>{email}</span>}</li>
                    </ul>
                </div>
                <div className={styles.submitBlock}>
                    <h3 className={styles.submitBlockTtl}>Итого {orderProductsCount} товара {orderAmount} ₽ </h3>
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