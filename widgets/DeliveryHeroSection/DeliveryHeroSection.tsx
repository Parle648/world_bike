import styles from './styles/deliveryHeroSection.module.scss';
import heroBackground from '../../imgs/delivery-hero-section.png';
import { Link } from 'react-router-dom';

const DeliveryHeroSection = () => {
    return (
        <div className={styles.block}>
            <div className={styles.head} style={{backgroundImage: `url(${heroBackground})`, objectFit: 'cover', backgroundPosition: 'center'}}>
                <div className="wrapper">
                    <Link className={styles.link} to="/">Главная /  </Link><Link className={styles.link} to="/delivery">Доставка и оплата</Link>
                    <h2 className={styles.ttl}>Доставка и оплата</h2>
                </div>
            </div>
        </div>
    );
}
export default DeliveryHeroSection