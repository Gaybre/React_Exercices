import React from 'react'

import TMEC from '../img/T-mec.jpg'
// import TMEC from 'https://www.lavanguardia.com/r/GODO/LV/p3/WebSite/2016/06/29/Recortada/Canada_United_States_Mexico-02d81_20160629202855-khZG-U402853447182TkE-992x558@LaVanguardia-Web.jpg'
import './styles/ArticleOne.css'

const ArticleOne = () => (
    <article className="article__one">
        <figure>
            <img src={ TMEC } alt="photo-T-MEC" />
        </figure>
        <div class="article__one-description">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto officiis sed quod odio fugit pariatur beatae possimus nulla deleniti molestias, soluta facere similique quo hic! Voluptatibus fuga ipsa vitae harum?</p>
        </div>
    </article>
)

export default ArticleOne