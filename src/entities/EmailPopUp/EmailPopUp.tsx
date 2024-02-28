import { useEffect } from 'react';
import styles from './styles/emailPopUp.module.scss';
import close from '../../imgs/close.svg';
import checkmark from '../../imgs/mail-checkmark.png';
import emailPopUpProps from './types/emailPopUpProps';

const EmailPopUp = ({opened, setOpened}: emailPopUpProps) => {
    useEffect(() => {
        if (!opened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [opened])

    function closeBlock() {
        setOpened(!opened)
    }

    return (
        <div className={`${styles.backgroundColor} ${opened && styles.disabled}`}>
            <div className={styles.block}>
                <button className={styles.close} onClick={closeBlock}><img src={close} alt="close" /></button>
                <img src={checkmark} alt="checkmark" />
                <h2 className={styles.ttl}>Благодарим за подписку!</h2>
            </div>
        </div>
    );
};

export default EmailPopUp;