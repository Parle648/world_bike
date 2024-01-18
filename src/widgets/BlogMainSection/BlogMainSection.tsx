import React from 'react';
import BlogArticle from '../../entities/BlogArticle/BlogArticle';
import styles from './styles/blogMainSection.module.scss';

import articleImg from '../../imgs/article-img.png';

const BlogMainSection = () => {
    return (
        <div className="wrapper">
            <main >
                <div className={styles.articles}>
                    <BlogArticle hashTag='#smth' url='/12' description='Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего поколения, сохраняя возможность выбора ободного тормоза!' date='12.02.3526' background={articleImg}/>
                    <BlogArticle hashTag='#smth' url='/12' description='Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего поколения, сохраняя возможность выбора ободного тормоза!' date='12.02.3526' background={articleImg}/>
                    <BlogArticle hashTag='#smth' url='/12' description='Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего поколения, сохраняя возможность выбора ободного тормоза!' date='12.02.3526' background={articleImg}/>
                    <BlogArticle hashTag='#smth' url='/12' description='Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего поколения, сохраняя возможность выбора ободного тормоза!' date='12.02.3526' background={articleImg}/>
                    <BlogArticle hashTag='#smth' url='/12' description='Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего поколения, сохраняя возможность выбора ободного тормоза!' date='12.02.3526' background={articleImg}/>
                    <BlogArticle hashTag='#smth' url='/12' description='Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего поколения, сохраняя возможность выбора ободного тормоза!' date='12.02.3526' background={articleImg}/>
                </div>
            </main>
        </div>
    );
};

export default BlogMainSection;