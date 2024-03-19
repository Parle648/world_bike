import { useEffect, useRef, useState } from 'react';
import styles from './styles/search.module.scss';
import search from '../../imgs/search.svg';
import { useForm } from 'react-hook-form';
import { setParam } from '../../shared/lib/slices/currentFilers';
import { useDispatch } from 'react-redux';
import { Link, useHref, useNavigate } from 'react-router-dom';

const Search = () => {
    const [opened, setOpened] = useState<boolean>(false);

    function toggleForm() {
        setOpened(!opened);
    };

    const {
        register,
        handleSubmit,
    } = useForm()

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const goToCatalog = () => {navigate('/catalog')}

    function getBySearch (data: any) {
        console.log(data)
        dispatch(setParam({
            attribute: 'search', 
            content: data.search
        }));
        goToCatalog()
    }


    return (
        <div className={styles.block}>
            <button className={styles.searchTrigger} onClick={toggleForm}><img src={search} alt="search" /></button>
            <form className={`${styles.form} ${opened && styles.formActive}`} onSubmit={handleSubmit(getBySearch)}>
                <input className={`search-input ${styles.input}`} type="text" {...register('search')} />
                <button ><img className={styles.inputSearch} src={search} alt="search" /></button>
            </form>
        </div>
    );
};

export default Search;