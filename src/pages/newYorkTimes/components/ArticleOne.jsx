import React from 'react'

import TMEC from '../img/T-mec.jpg'
import './styles/ArticleOne.css'

const ArticleOne = () => (
    <article className="tNYT_article__one">
        <figure className="tNYT_figure">
            <img src={ TMEC } alt="photo-T-MEC" />
        </figure>
        <div class="tNYT_article__one-description">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto officiis sed quod odio fugit pariatur beatae possimus nulla deleniti molestias, soluta facere similique quo hic! Voluptatibus fuga ipsa vitae harum?</p>
        </div>
    </article>
)

export default ArticleOne