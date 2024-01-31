import styles from './styles/contactUs.module.scss';
import background from '../../imgs/contact-us-background.png';
import ContactUsForm from '../../features/ContactUsForm/ContactUsForm';

const ContactUsWidget = () => {
    return (
        <div className={styles.block}>
            <div className="wrapper">
                <ContactUsForm />
            </div>
            <img className={styles.background} src={background} alt="background" />
        </div>
    );
};

export default ContactUsWidget;