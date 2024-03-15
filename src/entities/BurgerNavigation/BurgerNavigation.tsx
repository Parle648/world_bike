import { useEffect, useState } from 'react';
import styles from './styles/burgerNavigation.module.scss';
import burgerTrigger from '../../imgs/burger-trigger.png';
import close from '../../imgs/close.svg';
import PopUpBlock from './Components/PopUpBlock/PopUpBlock';
import ToggleBtn from './Components/ToggleBtn/ToggleBtn';

const BurgerNavigation = () => {
    const [opened, setOpened] = useState<boolean>(false);

    function navigationToggle() {
        setOpened(!opened);
    };

    useEffect(() => {
        if(opened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [opened])

    return (
        <div className={styles.block}>
            <ToggleBtn navigationToggle={navigationToggle} >
                <img src={burgerTrigger} alt="burgerTrigger" />
            </ToggleBtn>
            <PopUpBlock opened={opened}> 
                <ToggleBtn navigationToggle={navigationToggle} >
                    <img src={close} alt="close-btn" />
                </ToggleBtn>
            </PopUpBlock>
        </div>
    );
};

export default BurgerNavigation;