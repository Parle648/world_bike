import React from 'react';
import styles from './styles/mainHero.module.scss';
import background from '../../../imgs/main-background.png';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const MainHeroSection = () => {
    const [sliderBlocks, setSliderBlocks] = React.useState([true, false, false])

    // setInterval(() => {
    //     setSliderBlocks(prev => {
    //         if (prev[0]) {
    //             return [false, true, false]
    //         } else if (prev[1]) {
    //             return [false, false, true]
    //         } else {
    //             return [true, false, false]
    //         };
    //     });
    // }, 2000)

    return (
        <div className={styles.block}>
            <Header />
            <div className="wrapper">
                <h1 className={styles.mainTtl}>Электро велосипеды</h1>
                <p className={styles.mainDescription}>
                    Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, который устанавливает новый, очень высокий 
                    стандарт для данной категории
                </p>
                <Link className={styles.btn} to='#!'>Подробнее</Link>
            </div>
            <img className={styles.background} src={background} alt="background" />
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    <div className={styles.sliderPoints}>
                        <div className={`${styles.point} ${sliderBlocks[0] && styles.pointActive}`}></div>
                        <div className={`${styles.point} ${sliderBlocks[1] && styles.pointActive}`}></div>
                        <div className={`${styles.point} ${sliderBlocks[2] && styles.pointActive}`}></div>
                    </div>
                    <div className={`${styles.sliderElem} ${sliderBlocks[0] && styles.sliderElemActive}`}>
                        <p className={styles.sliderElemDescription}>
                            Экстремальное вождение на горном велосипеде
                        </p>
                        <Link className={styles.link} to='#!'>Подробнее</Link>
                    </div>
                    <div className={`${styles.sliderElem} ${styles.gray} ${sliderBlocks[1] && styles.sliderElemActive}`}>
                        <p className={styles.sliderElemDescription}>
                            Велосипеды для профессионалов
                        </p>
                        <Link className={styles.link} to='#!'>Подробнее</Link>
                    </div>
                    <div className={`${styles.sliderElem} ${styles.lightGray} ${sliderBlocks[2] && styles.sliderElemActive}`}>
                        <p className={styles.sliderElemDescription}>
                            Долгая поездка на шоссейном велосипеде
                        </p>
                        <Link className={styles.link} to='#!'>Подробнее</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeroSection;