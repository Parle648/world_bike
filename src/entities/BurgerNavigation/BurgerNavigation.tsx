import React from 'react';
import styles from './styles/burgerNavigation.module.scss';
import burgerTrigger from '../../imgs/burger-trigger.png';

const BurgerNavigation = () => {
    return (
        <div className="">
            <button className={styles.openNavigation}>
                <img src={burgerTrigger} alt="burgerTrigger" />
            </button>
            <nav className={styles.navigation}>
                
            </nav>
        </div>
    );
};

export default BurgerNavigation;