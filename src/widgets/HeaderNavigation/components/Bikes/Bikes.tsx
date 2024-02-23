import React from 'react';
import stylse from './styles/bykes.module.scss';
import byke from '../../../../imgs/header-bikes.png';
import { Link } from 'react-router-dom';

const Bikes = () => {
    return (
        <div className={stylse.block}>
            <ul>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Горные велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Велосипеды для триатлона</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Городские велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Двухподвесные велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Шоссейные велосипеды</Link>
                </li>
            </ul>
            <ul>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Электровелосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Гравийные велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Женские велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Трековые велосипеды</Link>
                </li>
                <li className={stylse.listItem}>
                    <Link className={stylse.link} to='/catalog'>Детские велосипеды</Link>
                </li>
            </ul>
            <img className={stylse.background} src={byke} alt="byke" />
        </div>
    );
};

export default Bikes;