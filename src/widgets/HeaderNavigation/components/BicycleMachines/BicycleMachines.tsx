import React from 'react';
import styles from './styles/bicycleMachines.module.scss';
import bicycleMachines from '../../../../imgs/header-bicycle-machine.png';
import { Link } from 'react-router-dom';

const BicycleMachines = () => {
    return (
        <div className={styles.block}>
            <img className={styles.background} src={bicycleMachines} alt="bicycleMachines" />

            <ul>
                <li className={styles.listItem}><Link className={styles.link} to='./'>Аксессуары для велостанков</Link></li>
            </ul>
        </div>
    );
};

export default BicycleMachines;