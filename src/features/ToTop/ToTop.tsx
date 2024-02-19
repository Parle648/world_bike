import React from 'react';
import styles from './styles/arrowTop.module.scss';
import arrow from '../../imgs/arrow-top.svg';

const ToTop = () => {
    function toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button className={styles.block} onClick={toTop}>
            <img src={arrow} alt="" />
        </button>
    );
};

export default ToTop;