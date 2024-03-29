import React, { useEffect, useState } from 'react';
import styles from './styles/busket.module.scss';
import { useLocalStorage } from '../lib/hooks/useLocalStorage';

const Busket = () => {
    const [isOrder, setIsOrder] = useState<boolean>(false);

    // useEffect(() => {
    //     if (JSON.parse(localStorage.orderedProducts).length > 0) {
    //         setIsOrder(true)
    //     } else {
    //         setIsOrder(false)
    //     };
        
    // }, [localStorage.orderedProducts])

    return (
        <div className={styles.block}>
            <a href='/busket' className={styles.busketOpen}>
                <div className={isOrder && styles.point}></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 17H6.5L4.5 3H2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.78564 5H20.9999L17.9999 14H6.07135" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="19" cy="5" r="3" fill=""/>
                </svg>
            </a>
        </div>
    );
};

export default Busket;