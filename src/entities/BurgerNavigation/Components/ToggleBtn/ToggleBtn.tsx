import styles from './styles/toggleBtn.module.scss';
import OpentButtonProps from './types/openButtonProps';

export default function ToggleBtn({navigationToggle, children}: OpentButtonProps) {
    return (
        <button className={styles.openNavigation} onClick={navigationToggle}>
            {children}
        </button>
    );
};