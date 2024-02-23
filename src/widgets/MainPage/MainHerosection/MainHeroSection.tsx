import React from 'react';
import styles from './styles/mainHero.module.scss';
import background from '../../../imgs/main-background.png';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';



const MainHeroSection = () => {
    return (
        <div className={styles.block} style={{background: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
            <Header />
            <div className="wrapper">
                <h1 className={styles.mainTtl}>Электро велосипеды</h1>
                <p className={styles.mainDescription}>
                    Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, который устанавливает новый, очень высокий 
                    стандарт для данной категории
                </p>
                <Link className={styles.btn} to='/catalog'>Подробнее</Link>
            </div>
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    <div className={styles.sliderPoints}>
                        <div className={`${styles.point} ${styles.pointActive}`}></div>
                        <div className={`${styles.point} ${styles.pointActive}`}></div>
                        <div className={`${styles.point} ${styles.pointActive}`}></div>
                    </div>
                    <div className={`${styles.sliderElem} ${styles.sliderElemActive}`}>
                        <p className={styles.sliderElemDescription}>
                            Экстремальное вождение на горном велосипеде
                        </p>
                        <Link className={styles.link} to='/catalog'>Подробнее</Link>
                    </div>
                    <div className={`${styles.sliderElem} ${styles.gray} ${styles.sliderElemActive}`}>
                        <p className={styles.sliderElemDescription}>
                            Велосипеды для профессионалов
                        </p>
                        <Link className={styles.link} to='/catalog'>Подробнее</Link>
                    </div>
                    <div className={`${styles.sliderElem} ${styles.lightGray} ${styles.sliderElemActive}`}>
                        <p className={styles.sliderElemDescription}>
                            Долгая поездка на шоссейном велосипеде
                        </p>
                        <Link className={styles.link} to='/catalog'>Подробнее</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeroSection;