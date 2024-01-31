import styles from './styles/storageHeroSection.module.scss';
import heroBackground from '../../imgs/storage-hero-section.png'

const StorageHeroSection = () => {
    return (
        <div className={styles.block}>
            <div className={styles.head} style={{backgroundImage: `url(${heroBackground})`, objectFit: 'cover', backgroundPosition: 'center'}}>
                <div className="wrapper">
                    <a className={styles.link} href="/">Главная /  </a><a className={styles.link} href="/storage">Хранение велосипеда</a>
                    <h2 className={styles.ttl}>Хранение велосипеда</h2>
                </div>
            </div>
        </div>
    );
}
export default StorageHeroSection