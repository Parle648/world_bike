import React from 'react';
import styles from './styles/catalogSection.module.scss';
import first from '../../../imgs/bicycles-grid-block.png';
import trandeIn from '../../../imgs/main-trade-in.png';
import tools from '../../../imgs/tools.png';
import tires from '../../../imgs/tires.png';
import equipment from '../../../imgs/equipment.png';
import bicycleMachine from '../../../imgs/bicycle-machine.png';

const CatalogSection = () => {
    return (
        <section className={styles.block}>
            <div className="wrapper">
                <h2 className={styles.ttl}>Каталог</h2>
                <div className={styles.gridContainer}>
                    <div className={styles.gridFirst}>
                        <h3 className={styles.grindTtl}>Велосипеды</h3>
                        <img className={styles.img} src={first} alt="first" />
                    </div>
                    <div className={styles.gridTradeIn}>
                        <h3 className={styles.grindTtl}>Trade-in</h3>
                        <img className={styles.img} src={trandeIn} alt="trandeIn" />
                    </div>
                    <div className={styles.gridTools}>
                        <h3 className={styles.grindTtl}>Запчасти</h3>
                        <img className={styles.img} src={tires} alt="tires" />
                    </div>
                    <div className={styles.gridEquip}>
                        <h3 className={styles.grindTtl}>Экипировка</h3>
                        <img className={styles.img} src={equipment} alt="equipment" />
                    </div>
                    <div className={styles.gridMachines}>
                        <h3 className={styles.grindTtl}>Велостанки</h3>
                        <img className={styles.img} src={bicycleMachine} alt="bicycleMachine" />
                    </div>
                    <div className={styles.gridAccessories}>
                        <h3 className={styles.grindTtl}>Аксессуары</h3>
                        <img className={styles.toolsImg} src={tools} alt="tools" />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default CatalogSection;