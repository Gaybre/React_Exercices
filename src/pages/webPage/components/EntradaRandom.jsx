import React from 'react'

import './styles/EntradaRandom.css'
import Cat from '../img/cat.png'

const EntradaRandom = () => (
    <section className="webPage_main__entradaRandom">
        <article className="webPage_entradaRandom">
            <figure className="webPage_entradaRandom__container">
                <img src={ Cat } alt="cat" />
            </figure>
            <div className="webPage_entradaRandom__resume">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, 
                    aperiam sit ab tempore, veritatis hic quis debitis beatae
                </p>
            </div>
        </article>
    </section>
)

export default EntradaRandom