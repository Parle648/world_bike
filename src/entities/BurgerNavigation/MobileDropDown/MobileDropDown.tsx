import React from 'react';
import styles from './styles/mobileDropDown.module.scss';
import dropDownArrow from '../../../imgs/drop-down-arrow.svg';
import mobileDropDownProps from './types/mobileDropDownProps';
import { Link } from 'react-router-dom';

const MobileDropDown = ({title, links}: mobileDropDownProps) => {
    const [dropDownOpened, setDropDownOpened] = React.useState(false);
    function openDropDown() {
        setDropDownOpened(!dropDownOpened);
    };
    return (
        <div>
            <button className={`${styles.dropDownBtn} ${dropDownOpened && styles.dropDownBtnOpened}`} onClick={openDropDown} >
                <span className={styles.openBodyItem}>{title}</span>
                <img className={dropDownOpened && styles.bodyArrowOpened} src={dropDownArrow} alt="orangeArrow" />
            </button>
            <ul className={`${styles.list} ${dropDownOpened && styles.listOpened}`}>
                    {links && links.map(link => {
                        return (
                            <li className={styles.listItem} key={link}>
                                <Link className={styles.link} to='/catalog'>{link}</Link>
                            </li>
                        )
                    })}
            </ul>
        </div>
    );
};

MobileDropDown.propTypes = {
    
};

export default MobileDropDown;