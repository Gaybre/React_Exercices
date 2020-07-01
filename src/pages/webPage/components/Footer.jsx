import React from 'react'
import Twitter from '../icons/tw.png'
import Linkedin from '../icons/lk.png'
import Github from '../icons/gh.png'
import Youtube from '../icons/youtube.png'

import './styles/Footer.css'

const Footer = () => (
    <footer className="footer">
        <div className="footer__redes">
            <a href="https://twitter.com/JuanGaybre" className="redes redes__tw">
                <img src={ Twitter } alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/juangaybre/" className="redes redes__lk">
                <img src={ Linkedin } alt="linkedin" />
            </a>
            <a href="https://github.com/Gaybre" className="redes redes__gh">
                <img src={ Github } alt="github" />
            </a>
            <a href="#" className="redes redes__yt">
                <img src={ Youtube } alt="youtube" />
            </a>
        </div>
        <p>
            <small>©2020 Todos los derechos reservados</small>
        </p>
    </footer>
)

export default Footer