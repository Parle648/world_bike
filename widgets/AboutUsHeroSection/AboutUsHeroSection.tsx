import styles from './styles/aboutUsHeroSection.module.scss';
import heroBackground from '../../imgs/about-us-background.png';
import { Link } from 'react-router-dom';;

const AboutUsHeroSection = () => {
    return (
        <div className={styles.block}>
            <div className={styles.head} style={{backgroundImage: `url(${heroBackground})`, objectFit: 'cover', backgroundPosition: 'center'}}>
                <div className="wrapper">
                    <Link className={styles.link} to="/">Главная /  </Link><Link className={styles.link} to="/adout-us">О нас</Link>
                    <h2 className={styles.ttl}>О нас</h2>
                </div>
            </div>
        </div>
    );
}
export default AboutUsHeroSection