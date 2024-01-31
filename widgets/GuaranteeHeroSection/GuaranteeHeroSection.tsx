import styles from './styles/guaranteeHeroSection.module.scss';
import heroBackground from '../../imgs/guarantee-hero-section.png'

const GuaranteeHeroSection = () => {
    return (
        <div className={styles.block}>
            <div className={styles.head} style={{backgroundImage: `url(${heroBackground})`, objectFit: 'cover', backgroundPosition: 'center'}}>
                <div className="wrapper">
                    <a className={styles.link} href="/">Главная /  </a><a className={styles.link} href="guarantee">Гарантии</a>
                    <h2 className={styles.ttl}>Гарантии</h2>
                </div>
            </div>
        </div>
    );
}
export default GuaranteeHeroSection