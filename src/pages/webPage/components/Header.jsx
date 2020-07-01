import React from 'react'

import './styles/Header.css'

const Header = () => (
    <header className="WebPage_header">
        <div className="WebPage_header__titles">
            <h1 className="WebPage_header__title">
                Ejercicio Web
            </h1>
            <h3 className="WebPage_header__subtitle">
                Página creada con html5
            </h3>
        </div>
        <nav className="WebPage_nav">
            <a className="WebPage_nav__ancla WebPage_ancla-first" href="#">Home</a>
            <a className="WebPage_nav__ancla" href="#">Acerca de</a>
            <a className="WebPage_nav__ancla" href="#">Portafolio</a>
            <a className="WebPage_nav__ancla" href="#">Blog</a>
            <a className="WebPage_nav__ancla WebPage_ancla-last" href="#">Contacto</a>
        </nav>
    </header>
)

export default Header