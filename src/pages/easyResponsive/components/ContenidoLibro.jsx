import React from 'react'

const ContenidoLibro = () => (
    <section className="container__ContenidoLibro">
        <h2>Contenido del libro</h2>
        <p>
            El contenido de este libro se estructura en tres apartados bien diferenciados:
        </p>

        <ul>
            <li>
                En la primera parte del libro se trabajan conceptos generales que son 
                necesarios para poder desarrollar páginas web, se explican conceptos 
                de estructura física y estructura lógica (o estructura de navegación) 
                de un sitio web. Se detalla cómo influye la estructura física en las 
                URL o direcciones que se emplean a la hora de crear los enlaces de un 
                sitio web. Pasando por el concepto de "estándar web", un término general 
                que se emplea para refererirse a los estándares que define su 
                funcionamiento como HTML y CSS, empleados para el desarrollo de las 
                páginas web en el lado del cliente.
            </li>
            <li>
                En la segunda parte se trabaja HTML. Partiendo de la estructura básica 
                de una página web, se explican las etiquetas de HTML que se utilizan 
                para definir el texto, los enlaces, las listas, las tablas, los 
                formularios y los elementos multimedia.
            </li>
            <li>
                En la tercera y última parte se explica CSS, el lenguaje que se emplea 
                para definir el formato y la presentación de una página web. Se explica 
                cómo utilizar el color, cómo definir la presentación del texto, de las 
                tablas y de los formularios; cómo realizar transformaciones y transiciones 
                con el fin de diseñar una página web.
            </li>
        </ul>
    </section>
)

export default ContenidoLibro