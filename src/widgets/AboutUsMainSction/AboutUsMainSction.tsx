import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/aboutUsMainSction.module.scss';
import blockDecoration from '../../imgs/block-decoration.svg';

const AboutUsMainSction = () => {
    return (
        <main>
            <div className="wrapper">
                <h2 className={styles.whatsBicyclettl}><span className='orange'>Велосипед</span> – это не просто средство передвижения!</h2>

                <div className={styles.whatsBicycleSliderWrapper}>
                    <div className={styles.whatsBicycleSlider}>
                        <div className={styles.whatsItem}>
                            <h3 className={styles.whatsItemTtl}>Хранение</h3>
                            <p className={styles.whatsItemDescription}>
                                Любишь кататься — люби и велосипед в квартире на зиму парковать или сдавай к нам на хранение и обслуживание.
                            </p>
                            <Link className={styles.whatsItemLink} to={'#!'}>Подробнее</Link>
                            <img className={styles.blockDecoration} src={blockDecoration} alt="blockDecoration" />
                        </div>
                        <div className={`${styles.whatsItem} ${styles.whatsDarkItem}`}>
                            <h3 className={styles.whatsItemTtl}>Веломастерская</h3>
                            <p className={styles.whatsItemDescription}>
                                Если вы купили велосипед в нашем магазине, то то можете не волноваться о настройке и проверке, так как мы это выполняем в рамках предпродажной подготовки.
                            </p>
                            <Link className={styles.whatsItemLink} to={'#!'}>Подробнее</Link>
                            <img className={styles.blockDecoration} src={blockDecoration} alt="blockDecoration" />
                        </div>
                        <div className={`${styles.whatsItem} ${styles.whatsOrangeItem}`}>
                            <h3 className={styles.whatsItemTtl}>Гарантия</h3>
                            <p className={styles.whatsItemDescription}>
                                Также, для удобства покупателей, наш магазин помогает (участвует) в формирование гарантийных запросов по всем нижеперечисленным брендам. При любом гарантийном случае можно обращаться напрямую к нам
                            </p>
                            <Link className={styles.whatsItemLink} to={'#!'}>Подробнее</Link>
                            <img className={styles.blockDecoration} src={blockDecoration} alt="blockDecoration" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUsMainSction;