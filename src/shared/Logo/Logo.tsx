import React from 'react';
import logo from '../../imgs/logo.svg';
import styles from './styles/logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <img className={styles.logo} src={logo} alt="logo" />
        </Link>
    );
};

export default Logo;