import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/blogArticle.module.scss';

type Props = {
    background: string,
    date: string,
    hashTag: string,
    description: string,
    url: string,
}

const BlogArticle = ({background, date, hashTag, description, url}: Props) => {
    return (
        <div className={styles.block}>
            <img className={styles.background} src={background} alt="background" />
            <h3 className={styles.date}>{date}</h3>
            <h4 className={styles.hashTag}>{hashTag}</h4>
            <p className={styles.description}>{description}</p>
            <Link className={styles.link} to={url}>Подробнее</Link>
        </div>
    );
};

export default BlogArticle;