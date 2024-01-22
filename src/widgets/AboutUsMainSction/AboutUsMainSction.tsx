import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/aboutUsMainSction.module.scss';
import blockDecoration from '../../imgs/block-decoration.svg';
import someWords from '../../imgs/some-words-background.png';
import telegram from '../../imgs/telegram.svg';
import whatsap from '../../imgs/whatsap.svg';
import viber from '../../imgs/wiber.svg';
import bestFromBykes from '../../imgs/best-from-byke-world.png';
import haveQuestion from '../../imgs/abou-us-question-background.png';

const AboutUsMainSction = () => {
    return (
        <main>
            <div className="wrapper">
                <h2 className={styles.whatsBicyclettl}><span className='orange'>Велосипед</span> – это не просто средство передвижения!</h2>

                <div className={styles.whatsBicycleSliderWrapper}>
                    <article className={styles.whatsBicycleSlider}>
                        <section className={styles.whatsItem}>
                            <h3 className={styles.whatsItemTtl}>Хранение</h3>
                            <p className={styles.whatsItemDescription}>
                                Любишь кататься — люби и велосипед в квартире на зиму парковать или сдавай к нам на хранение и обслуживание.
                            </p>
                            <Link className={styles.whatsItemLink} to={'#!'}>Подробнее</Link>
                            <img className={styles.blockDecoration} src={blockDecoration} alt="blockDecoration" />
                        </section>
                        <section className={`${styles.whatsItem} ${styles.whatsDarkItem}`}>
                            <h3 className={styles.whatsItemTtl}>Веломастерская</h3>
                            <p className={styles.whatsItemDescription}>
                                Если вы купили велосипед в нашем магазине, то то можете не волноваться о настройке и проверке, так как мы это выполняем в рамках предпродажной подготовки.
                            </p>
                            <Link className={styles.whatsItemLink} to={'#!'}>Подробнее</Link>
                            <img className={styles.blockDecoration} src={blockDecoration} alt="blockDecoration" />
                        </section>
                        <section className={`${styles.whatsItem} ${styles.whatsOrangeItem}`}>
                            <h3 className={styles.whatsItemTtl}>Гарантия</h3>
                            <p className={styles.whatsItemDescription}>
                                Также, для удобства покупателей, наш магазин помогает (участвует) в формирование гарантийных запросов по всем нижеперечисленным брендам. При любом гарантийном случае можно обращаться напрямую к нам
                            </p>
                            <Link className={styles.whatsItemLink} to={'#!'}>Подробнее</Link>
                            <img className={styles.blockDecoration} src={blockDecoration} alt="blockDecoration" />
                        </section>
                    </article>
                </div>
            </div>
            <section className={styles.someWords}>
                <div className="wrapper">
                    <h3 className={styles.someWordsTtl}>НЕСКОЛЬКО СЛОВ О НАС И НАШЕМ ДЕЛЕ</h3>
                    <p className={styles.someWordsSubttl}>
                        Велосипед — это не просто средство передвижения. Мы, команда World-Bike, уверены в этом. Для нас велосипед — это целая жизнь, полная свободы, драйва, приключений и новых открытий. 
                    </p>
                    <p className={styles.someWordsSubttl}>
                        Мы искренне любим своё дело и стараемся, чтобы и для вас велосипед стал неотъемлемой частью жизни.
                    </p>
                    <div className={styles.socialMedias}>
                        <Link to='@!'>
                            <img src={telegram} alt="" />
                        </Link>
                        <Link to='@!'>
                            <img src={whatsap} alt="" />
                        </Link>
                        <Link to='@!'>
                            <img src={viber} alt="" />
                        </Link>
                    </div>
                </div>
                <img className={styles.someWordsBacground} src={someWords} alt="someWords" />
            </section>

            <section className={styles.bestBycycles}>
                <div className="wrapper">
                    <h3 className={styles.bestBycyclesTtl}>МЫ СОБРАЛИ ДЛЯ ВАС ЛУЧШЕЕ ИЗ ВЕЛОСИПЕДНОГО МирА</h3>

                    <div className={styles.bestBycyclesDescript}>
                        <p className={styles.bestBycyclesParagr}>
                            World-Bike специализируется на продаже и обслуживании велосипедов, запчастей, аксессуаров для них и экипировки
                        </p>
                        <p className={styles.bestBycyclesParagr}>
                            Мы знаем цену качеству. Поэтому в World-Bike только качественные премиальные товары по соответствующим ценам. А под заказ мы соберём для вас кастомный велосипед с уникальным дизайном и техническими характеристиками!
                        </p>
                    </div>

                </div>
                <img className={styles.bestBycyclesImg} src={bestFromBykes} alt="bestFromBykes" />
            </section>

            <section className={styles.weTheBest}>
                    <div className='wrapper'>
                        <h3 className={styles.weTheBestTtl}>Мы — официальные дилеры лучших брендов:</h3>
                    </div>

                    <div className={styles.weTheBestSlider}>
                        <div className={styles.weTheBestSliderLine}>
                            <div className={styles.weTheBestSliderItem}>
                                <h4 className={styles.weTheBestSliderTtl}>Велосипеды</h4>
                                <ul className={styles.weTheBestSliderList}>
                                    <li><Link className={styles.weTheBestLink} to=''>BMC</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Cervelo</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Cipollini</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Colnago</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Early Rider</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Giant</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Look</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Orbea</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Pinarello</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Scott</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Wilier</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Officine Mattio</Link></li>
                                </ul>
                            </div>
                            <div className={styles.weTheBestSliderItem}>
                                <h4 className={styles.weTheBestSliderTtl}>Велосипеды</h4>
                                <ul className={styles.weTheBestSliderList}>
                                    <li><Link className={styles.weTheBestLink} to=''>BMC</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Cervelo</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Cipollini</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Colnago</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Early Rider</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Giant</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Look</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Orbea</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Pinarello</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Scott</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Wilier</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Officine Mattio</Link></li>
                                </ul>
                            </div>
                            <div className={styles.weTheBestSliderItem}>
                                <h4 className={styles.weTheBestSliderTtl}>Велосипеды</h4>
                                <ul className={styles.weTheBestSliderList}>
                                    <li><Link className={styles.weTheBestLink} to=''>BMC</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Cervelo</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Cipollini</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Colnago</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Early Rider</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Giant</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Look</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Orbea</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Pinarello</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Scott</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Wilier</Link></li>
                                    <li><Link className={styles.weTheBestLink} to=''>Officine Mattio</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>

            <section className={styles.haveQuestion}>
                <div className="wrapper">
                    <h3 className={styles.haveQuestionTtl}>Остались вопросы? </h3>
                    <h4 className={styles.callUsTtl}>Позвоните нам по номеру</h4>
                    <Link className={styles.number} to='#!'>+7 (495) 055-75-86</Link>
                    <p className={styles.haveQuestionParagr}>
                        Мы к вашим услугам! И, конечно же, приходите в наш магазин, чтобы посмотреть товары вживую, лично оценить качество и 
                        сделать правильный выбор!
                    </p>
                </div>
                <img className={styles.haveQuestionImg} src={haveQuestion} alt="haveQuestion" />
            </section>
        </main>
    );
};

export default AboutUsMainSction;