import React, { useState } from 'react';
import styles from './styles/contactUsForm.module.scss';
import { useForm } from 'react-hook-form';
import postContactUsForm from './api/postContactUsForm';
import Spinner from '../../shared/components/Spinner/Spinner';

type ContactUsFormFields = {
    name: string,
    email: string,
    phone: string,
    company: string,
    comment: string
}

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
    } = useForm<ContactUsFormFields>();

    const [unvisible, setUnvisible] = useState<boolean>(true);

    function postContactusForm (data: ContactUsFormFields) {
        setUnvisible(false)
        postContactUsForm(data)
        .then((response: any) => {
            if (response.created) {
                setUnvisible(true)
                reset()
            }
        })
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(postContactusForm)}>
            <Spinner loaderUnvisible={unvisible} />
            <h2 className={styles.ttl}>СВЯЖИТЕСЬ С НАМИ ПО ЛЮБЫМ ВОПРОСАМ</h2>
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>
                    <input className={`${styles.input} ${errors.name && styles.invalidInput}`} 
                    type="text" 
                    placeholder='Имя'
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
                    })}/>
                    {errors.name && <h2 className={styles.errorTitle}>{errors.name.message}</h2>}
                </label>
                <label className={styles.label}>
                    <input className={`${styles.input} ${errors.email && styles.invalidInput}`} 
                    type="text" 
                    placeholder='E-mail'
                    {...register('email', {
                        required: 'Введiть свiй email',
                        pattern: {
                            value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                            message: 'Введiть номер email'
                        },
                    })}/>
                    {errors.email && <h2 className={styles.errorTitle}>{errors.email.message}</h2>}
                </label>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>
                    <input className={`${styles.input} ${errors.phone && styles.invalidInput}`} 
                    type="text" 
                    placeholder='Телефон'
                    {...register('phone', {
                        required: 'Введiть свiй номер телефону',
                        pattern: {
                            value: /^\+380\d{9}$/,
                            message: 'Введiть номер у виглядi +380554832010'
                        },
                    })}/>
                    {errors.phone && <h2 className={styles.errorTitle}>{errors.phone.message}</h2>}
                </label>
                <label className={styles.label}>
                    <input className={`${styles.input} ${errors.company && styles.invalidInput}`} 
                    type="text" 
                    placeholder='Компания'
                    {...register('company', {
                        required: true,
                    })}/>
                    {errors.company && <h2 className={styles.errorTitle}>{errors.company.message}</h2>}
                </label>
            </fieldset>
            <label className={styles.label}>
                <textarea className={`${styles.textArea} ${errors.comment && styles.invalidInput}`} 
                cols={56} rows={10} 
                placeholder='Сообщение'
                {...register('comment')}></textarea>
                {errors.comment && <h2 className={styles.errorTitle}>{errors.comment.message}</h2>}
            </label>
            <button className={styles.submit}>Задать вопрос</button>
        </form>
    );
};

export default ContactUsForm;