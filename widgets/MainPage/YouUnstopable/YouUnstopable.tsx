import React from 'react';
import styles from './styles/youUnstopable.module.scss';
import poster from '../../../imgs/video-background.png';
import playBtn from '../../../imgs/video-play-btn.svg';
import brilliant from '../../../imgs/brilliant.png';
import checkmark from '../../../imgs/check-mark.png';
import settings from '../../../imgs/settings-icon.png';
import allDaySupport from '../../../imgs/24-hours-icon.png';

const YouUnstopable = () => {
    function videoPlay(event: React.MouseEvent<HTMLElement>) {
        event.currentTarget?.nextElementSibling?.classList.add(styles.videoActive);
        event.currentTarget?.classList.add(styles.hidden);
        event.currentTarget?.previousElementSibling?.classList.add(styles.hidden);
    }
    return (
        <section className={styles.block}>
            <div className='wrapper'>
                <div className={styles.flex}>
                    <h2 className={styles.ttl}>Ничего не сможет остановить вас</h2>
                    <p className={styles.description}>
                        Наша компания специализируется на продаже товаров для велосипедного спорта — велосипедов, запасных частей, аксессуаров и различного спортивного 
                        инвентаря для активного спорта и отдыха.
                    </p>
                </div>
            </div>

            <div className={styles.videoContainer}>
                <img className={styles.poster} src={poster} alt="poster" />
                <button className={styles.playBtn} style={{backgroundImage: playBtn}} onClick={videoPlay} />
                <iframe 
                    className={styles.video}
                    style={{backgroundImage: poster}}
                    src="https://www.youtube.com/embed/qz5wbZB5FBA?si=34ljRQEitB9Ht0g9" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
            </div>

            <div className={styles.advantages}>
                <div className="wrapper">
                    <div className={styles.advantagesFlex}>
                        <div className={styles.advantagesElement}>
                            <h3 className={styles.advantagesttl}><img src={brilliant} alt='brilliant' className={styles.advantagesImg}></img>Европейские бренды</h3>
                            <p className={styles.advantagesDescription}>
                                Представляем десятки европейских брендов
                            </p>
                        </div>
                        <div className={styles.advantagesElement}>
                            <h3 className={styles.advantagesttl}><img src={checkmark} alt='checkmark' className={styles.advantagesImg}></img>Вечная гарантия</h3>
                            <p className={styles.advantagesDescription}>
                                На некоторые бренды предоставляем пожизненную гарантию
                            </p>
                        </div>
                        <div className={styles.advantagesElement}>
                            <h3 className={styles.advantagesttl}><img src={settings} alt='settings' className={styles.advantagesImg}></img>Предпродажная настройка</h3>
                            <p className={styles.advantagesDescription}>
                                Специалисты настроят ваш велосипед наилучшим образом
                            </p>
                        </div>
                        <div className={styles.advantagesElement}>
                            <h3 className={styles.advantagesttl}><img src={allDaySupport} alt='allDaySupport' className={styles.advantagesImg}></img>Доставка за 24 часа</h3>
                            <p className={styles.advantagesDescription}>
                                Доставляем товар всеми популярными транспортными компаниями
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YouUnstopable;