import React from 'react'

import './styles/Entradas.css'
import Entrada from './Entrada'

const Entradas = () => (
    <section className="webPage_main__entradas">
        <Entrada 
            fecha="El 29 de Octubre de 2012"
            autor="Ernesto G Bustamante"
            comentarios="3 comentarios"
            articleTitle="Las Bondades de HTML5"
            articleResume="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, 
            aperiam sit ab tempore, veritatis hic quis debitis beatae, mollitia 
            nobis neque aliquid non praesentium voluptatem vitae. Aliquam, 
            repudiandae nesciunt. Pariatur."
        />
        <hr className="webPage_hr"/>
        
        <Entrada 
            fecha="El 28 de Octubre de 2012"
            autor="Ernesto G Bustamante"
            comentarios="21 comentarios"
            articleTitle="HTML5 en dispositivos móviles"
            articleResume="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, 
            aperiam sit ab tempore, veritatis hic quis debitis beatae, mollitia 
            nobis neque aliquid non praesentium voluptatem vitae. Aliquam, 
            repudiandae nesciunt. Pariatur."
        />
        <hr className="webPage_hr"/>

        <Entrada 
            fecha="El 27 de Octubre de 2012"
            autor="Ernesto G Bustamante"
            comentarios="6 comentarios"
            articleTitle="Internet Explores es basura"
            articleResume="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, 
            aperiam sit ab tempore, veritatis hic quis debitis beatae, mollitia 
            nobis neque aliquid non praesentium voluptatem vitae. Aliquam, 
            repudiandae nesciunt. Pariatur."
        />
        <hr className="webPage_hr"/>

        <Entrada 
            fecha="El 26 de Octubre de 2012"
            autor="Ernesto G Bustamante"
            comentarios="2 comentarios"
            articleTitle="Diseño web en pantallas retina"
            articleResume="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, 
            aperiam sit ab tempore, veritatis hic quis debitis beatae, mollitia 
            nobis neque aliquid non praesentium voluptatem vitae. Aliquam, 
            repudiandae nesciunt. Pariatur."
        />
    </section>
)

export default Entradas