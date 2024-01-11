import React from 'react';
import logo from '../../imgs/logo.svg';
import styles from './styles/logo.module.scss';

const Logo = () => {
    return (
        <a href='/'>
            <img className={styles.logo} src={logo} alt="logo" />
        </a>
    );
};

Logo.propTypes = {
    
};

export default Logo;