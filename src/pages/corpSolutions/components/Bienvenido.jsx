import React from 'react'

const Bienvenido = () => (
    <article class="general__article general__bienvenido">
        <div>
            <h2 class="general__article__title">¡Bienvenido!</h2>
            <hr className="corpSolutions_hr" />
            <p className="corpSolutions_p">
                Lorem ipsum dolor sit amet consectetur, adipisicing. 
                Animi sapiente perferendis enim dolor 
                <span>
                    {' Aenean massa '} 
                </span>
                fugiat earum, 
                provident veniam magni nihil fugit! Eligendi 
                sunt quae, placeat officiis quos.
            </p>
            <p className="corpSolutions_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Enim veniam, consequat.  
                <span>
                    {' Nullam dictum '}
                </span>
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident.
            </p>
        </div>
        <button>Leer más</button>
    </article>
)

export default Bienvenido