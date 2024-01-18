import styles from './styles/blogHeroSection.module.scss';
import heroBackground from '../../imgs/blog-hero-background.png';
import { Link } from 'react-router-dom';

const BlogHero = () => {
    return (
        <div className={styles.block}>
            <div className={styles.head} style={{backgroundImage: `url(${heroBackground})`, objectFit: 'cover', backgroundPosition: 'center'}}>
                <div className="wrapper">
                    <Link className={styles.link} to="/">Главная /  </Link><Link className={styles.link} to="/blog">Блог</Link>
                    <h2 className={styles.ttl}>Блог</h2>
                </div>
            </div>
        </div>
    );
}
export default BlogHero