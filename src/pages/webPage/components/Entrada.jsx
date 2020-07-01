import React from 'react'

const Entrada = (props) => (
    <article className="webPage_article">
        <div className="webPage_article__data">
            <p>
                { props.fecha }
                <br />por<span> { props.autor }</span>
            </p>
            <p><small>{ props.comentarios }</small></p>
        </div>
        <div className="webPage_article__resume">
            <h2 className="webPage_articleTitle">
                { props.articleTitle }
            </h2>
            <p>
                { props.articleResume }
            </p>
            <p className="webPage_verMas">
                Leer mas
            </p>
        </div>
    </article>
)

export default Entrada