import React from 'react';
import styles from './styles/search.module.scss';
import search from '../../imgs/search.svg';

const Search = () => {
    const [opened, setOpened] = React.useState(false);

    function toggleForm() {
        setOpened(!opened);
    };

    return (
        <div className={styles.block}>
            <button className={styles.searchTrigger} onClick={toggleForm}><img src={search} alt="search" /></button>
            <form className={`${styles.form} ${opened && styles.formActive}`}>
                <input className={styles.input} type="text" onBlur={toggleForm} />
                <img className={styles.inputSearch} src={search} alt="search" />
            </form>
        </div>
    );
};

export default Search;