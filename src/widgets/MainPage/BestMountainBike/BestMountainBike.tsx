import React from 'react';
import styles from './styles/bestMountainBykes.module.scss';

import byke from '../../../imgs/bike.svg';
import bortComputer from '../../../imgs/bort-computer.svg';
import chain from '../../../imgs/chain.svg';
import gear from '../../../imgs/gear.svg';

import whyMountainExactly from '../../../imgs/mountain-bike-block.png';
import { Link } from 'react-router-dom';

const BestMountainBike = () => {
    return (
        <section className={styles.block}>
            <div className="wrapper">
                <h2 className={styles.ttl}>Горные велосипеды</h2>    

                <div className={styles.contant}>
                    <div className={styles.bykePartsContainer}>
                        <div className={styles.bikeParts}>
                            <div className={styles.bikePart}>
                                <h3 className={styles.bikePartTtl}>Рама <img src={byke} alt="" /></h3>
                                <p className={styles.bikePartDescription}>
                                    It is a long established fact that a reader will be distracted by the readable content of
                                </p>
                            </div>
                            <div className={styles.bikePart}>
                                <h3 className={styles.bikePartTtl}>Бортовой компьютер <img src={bortComputer} alt="" /></h3>
                                <p className={styles.bikePartDescription}>
                                    The point of using lorem ipsum is that it has a more-or-less normal distribution of letters
                                </p>
                            </div>
                            <div className={styles.bikePart}>
                                <h3 className={styles.bikePartTtl}>Трансмиссия <img src={chain} alt="" /></h3>
                                <p className={styles.bikePartDescription}>
                                    Many desktop publishing packages and web page editors now use lorem ipsum as 
                                </p>
                            </div>
                            <div className={styles.bikePart}>
                                <h3 className={styles.bikePartTtl}>Оборудование <img src={gear} alt="" /></h3>
                                <p className={styles.bikePartDescription}>
                                    Contrary to popular belief, lorem ipsum is not simply random text. It has roots in
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.whyMountainExactly}>
                        <img className={styles.whyMountainImg} src={whyMountainExactly} alt="whyMountainExactly" />
                        <p className={styles.whyMountainDescription}>
                            Горный велосипед несмотря на свое название часто и активно используются в условиях города, так как обладает рядом 
                            характеристик, позволяющих сделать велопрогулку максимально приятной и комфортной
                        </p>
                        <Link className={styles.catalogLink} to='/catalog'>Каталог</Link>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default BestMountainBike;