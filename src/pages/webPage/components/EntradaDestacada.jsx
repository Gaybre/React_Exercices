import React from 'react'

import Person from '../img/person.png'

import './styles/EntradaDestacada.css'

const EntradaDestacada = () => (
    <section class="webPage_main__entradaDestacada">
        <div class="webPage_main__entradaDestacada-info">
            <h4>
                Entrada destacada
            </h4>
            <h2 class="webPage_articleTitle">
                Crea un sitio web usando HTML5
            </h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, 
                aperiam sit ab tempore, veritatis hic quis debitis beatae, mollitia 
                nobis neque aliquid non praesentium voluptatem vitae. Aliquam, 
                repudiandae nesciunt. Pariatur.
            </p>
        </div>
        <figure class="webPage_main__entradaDestacada-img">
            <img src={ Person } alt="people" />
        </figure>
    </section>
)

export default EntradaDestacada