import React from 'react';
import styles from './styles/benefits.module.scss';
import background from '../../../imgs/benefits-background.png';
import { Link } from 'react-router-dom';

const Benefits = () => {
    return (
        <section className={styles.block}>
            <div className="wrapper">
                <h2 className={styles.ttl}>Преимущества</h2>
            </div>

            <div className={styles.line}>
                <img className={styles.img} src={background} alt="" />
                <div className={styles.flex}>
                    <div className={styles.flexItem}>
                        <h3 className={styles.flexTtl}>БЕСПЛАТНАЯ ДОСТАВКА</h3>
                        <p className={styles.flexParagraph}>
                            Мы пользуемся всеми популярными видами доставки
                        </p>
                        <Link className={styles.link} to=''>Подробнее</Link>
                    </div>
                    <div className={styles.flexItem}>
                        <h3 className={styles.flexTtl}>БЕСПЛАТНАЯ ДОСТАВКА</h3>
                        <p className={styles.flexParagraph}>
                            Мы пользуемся всеми популярными видами доставки
                        </p>
                        <Link className={styles.link} to=''>Подробнее</Link>
                    </div>
                    <div className={styles.flexItem}>
                        <h3 className={styles.flexTtl}>БЕСПЛАТНАЯ ДОСТАВКА</h3>
                        <p className={styles.flexParagraph}>
                            Мы пользуемся всеми популярными видами доставки
                        </p>
                        <Link className={styles.link} to=''>Подробнее</Link>
                    </div>
                    <div className={styles.flexItem}>
                        <h3 className={styles.flexTtl}>БЕСПЛАТНАЯ ДОСТАВКА</h3>
                        <p className={styles.flexParagraph}>
                            Мы пользуемся всеми популярными видами доставки
                        </p>
                        <Link className={styles.link} to=''>Подробнее</Link>
                    </div>
                </div>
                <img className={styles.img} src={background} alt="" />
            </div>
        </section>
    );
};

export default Benefits;