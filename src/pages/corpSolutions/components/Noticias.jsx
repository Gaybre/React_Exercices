import React from 'react'

const Noticias = () => (
    <article class="general__article general__noticias">
        <div>
            <h2 class="general__article__title">Noticias Recientes</h2>
            <hr className="corpSolutions_hr" />
            
            <div class="general__noticias-noticia">
                <h4 class="general__noticias-fecha">Publicada: 09.09.2012</h4>
                <p className="corpSolutions_p">
                    Nam liber tempor cum soluta nobis dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad consequat.
                </p>
            </div>
            
            <div class="general__noticias-noticia">
                <h4 class="general__noticias-fecha">Publicada: 09.09.2012</h4>
                <p className="corpSolutions_p">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt
                </p>
            </div>

        </div>
        <button>Más noticias</button>
    </article>
)

export default Noticias