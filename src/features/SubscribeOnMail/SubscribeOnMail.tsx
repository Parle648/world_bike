import { useState } from 'react';
import styles from './styles/subscribeOnMail.module.scss';
import arrow from '../../imgs/checkbox-arrow.svg';
import EmailPopUp from '../../entities/EmailPopUp/EmailPopUp';
import { useForm } from 'react-hook-form';
import postEmail from './api/postEmail';
import Spinner from '../../shared/components/Spinner/Spinner';

type MailForm = {
    email: string,
    agree: boolean,
}

const SubscribeOnMail = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm<MailForm>();

    const [opened, setOpened] = useState<boolean>(true);
    const [loaderUnvisible, setLoaderUnvisible] = useState<boolean>(true);

    function sendData(data: any) {
        setLoaderUnvisible(false);
        postEmail(data)
        .then((response: any) => {
            if (response.created) {
                setOpened(false);
            } else {
                alert('что то пошло не так')
            };
        })
        .then(() => reset())
        .then(() => setLoaderUnvisible(true));
    };
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(sendData)}>
                <h2 className={styles.ttl}>Подпишитесь на наши новости</h2>
                <label className={styles.label}>
                    <input className={`${styles.mail} ${errors.email && styles.invalidInput}`} 
                    type="mail"
                    placeholder='E-mail'
                    {...register('email', {
                        required: 'Введiть свiй email',
                        pattern: {
                            value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                            message: 'Введiть свiй email'
                        },
                    })} />
                    {errors.email && <h2 className={styles.mailError}>{errors.email.message}</h2>}
                </label>
                <button className={styles.sendBtn} type="submit">Подписаться</button>
                <label className={styles.label}>
                    <input className={styles.checkbox} 
                    type="checkbox" 
                    {...register('agree', {
                        required: 'погодьтесь з обробкой персональних даних'
                    })}/>
                    {errors.agree && <h2 className={styles.agreeError}>{errors.agree.message}</h2>}
                    <span className={styles.fakeCheckbox}><img className={styles.arrow} src={arrow} alt="arrow" /></span>
                    <span className={styles.agreementTtl}>Согласен(на) на обработку персональных данных</span>
                </label>
    
            </form>
            <Spinner loaderUnvisible={loaderUnvisible} />
            <EmailPopUp opened={opened} setOpened={setOpened} />
        </>
    );
};

export default SubscribeOnMail;