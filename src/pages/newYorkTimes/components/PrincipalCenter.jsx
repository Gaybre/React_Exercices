import React from 'react'
import ArticleOne from './ArticleOne'
import ArticleTwo from './ArticleTwo'
import ArticleTrhee from './ArticleThree'

import './styles/PrincipalCenter.css'

const PrincipalCenter = () => (
    <section className="tNYT_principal__center">
        <ArticleOne />
        <ArticleTwo />
        <ArticleTrhee />
    </section>
)

export default PrincipalCenter