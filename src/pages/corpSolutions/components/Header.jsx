import React from 'react'

import './styles/Header.css'

const Header = () => (
    <header className="header">

        <div className="header__logo">
            Empresa<span>.com</span>
        </div>

        <nav className="header__nav">
            <a href="#" className="header__nav-item nav-item-active">
                Inicio
            </a>
            <a href="#" className="header__nav-item">
                Acerca
            </a>
            <a href="#" className="header__nav-item">
                Servicios
            </a>
            <a href="#" className="header__nav-item">
                Productos
            </a>
            <a href="#" className="header__nav-item">
                Contacto
            </a>
        </nav>

    </header>
)

export default Header