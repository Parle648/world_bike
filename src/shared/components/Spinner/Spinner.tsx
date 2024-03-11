import styles from './styles/spinner.module.scss';

type SpinnerPropsType = {
    loaderUnvisible: boolean,
}

export default function Spinner({loaderUnvisible}: SpinnerPropsType) {
    return (
        <div className={`${styles.loaderContainer} ${loaderUnvisible && styles.diabled}`}>
            <span className={styles.loader}></span>
        </div>
    );
};