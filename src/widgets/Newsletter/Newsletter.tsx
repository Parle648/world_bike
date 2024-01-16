import React from 'react';
import styles from './styles/newsletter.module.scss';
import background from '../../imgs/newsletter-background.png';
import SubscribeOnMail from '../../features/SubscribeOnMail/SubscribeOnMail';

const Newsletter = () => {
    return (
        <div className={styles.block}>
            <div className="wrapper">
                <SubscribeOnMail />
                <img className={styles.background} src={background} alt="newsletter" />
            </div>
        </div>
    );
};

export default Newsletter;