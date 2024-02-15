import React from 'react';
import stylse from './styles/bykes.module.scss';
import byke from '../../../../imgs/header-bikes.png';
import { Link } from 'react-router-dom';

const Bikes = () => {
    return (
        <div className={stylse.block}>
            <ul>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Горные велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Велосипеды для триатлона</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Городские велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Двухподвесные велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Шоссейные велосипеды</Link>
                </li>
            </ul>
            <ul>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Электровелосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Гравийные велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Женские велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Трековые велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='./'>Детские велосипеды</Link>
                </li>
            </ul>
            <img className={stylse.background} src={byke} alt="byke" />
        </div>
    );
};

export default Bikes;