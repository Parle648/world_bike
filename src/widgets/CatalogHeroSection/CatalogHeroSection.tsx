import React from 'react';
import styles from './styles/catalogHero.module.scss';
import heroBackground from '../../imgs/catalog-background.png';
import { Link } from 'react-router-dom';

const CatalogHeroSection = () => {
    return (
        <section className={styles.head} style={{backgroundImage: `url(${heroBackground})`, objectFit: 'cover', backgroundPosition: 'center'}}>
            <div className="wrapper">
                <Link className={styles.link} to="/">Главная /  </Link><Link className={styles.link} to="/catalog">Каталог</Link>
                <h2 className={styles.ttl}>Каталог</h2>
            </div>
        </section>
    );
};

export default CatalogHeroSection;