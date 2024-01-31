import styles from './styles/contactsHeroSection.module.scss';
import heroBackground from '../../imgs/contacts-hero-background.png';
import { Link } from 'react-router-dom';

const ContactsHeroSection = () => {
    return (
        <div className={styles.head} style={{backgroundImage: `url(${heroBackground})`, objectFit: 'cover', backgroundPosition: 'center'}}>
            <div className="wrapper">
                <Link className={styles.link} to="/">Главная /  </Link><Link className={styles.link} to="/contacts">Контакты</Link>
                <h2 className={styles.ttl}>Контакты</h2>
            </div>
        </div>
    );
}
export default ContactsHeroSection