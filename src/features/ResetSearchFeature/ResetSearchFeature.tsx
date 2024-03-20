import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setParam } from '../../shared/lib/slices/currentFilers';
import styles from './styles/resetSearch.module.scss';

const ResetSearchFeature = () => {
    const dispatch = useDispatch();
    const searchProps = useSelector((state: any) => state.currentFilters.value.search);

    function resetSearchProps(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch(setParam({
            attribute: 'search', 
            content: ''
        }))
    }
    
    return (
        <>
            <button className={styles.btn} onClick={resetSearchProps}>
                {searchProps.length > 0 &&
                    <h2>очистить фильрацию по поиску "{searchProps}"</h2>
                }
            </button>
        </>
    );
};

export default ResetSearchFeature;