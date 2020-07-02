import React from 'react'

import './styles/Footer.css'

import Github from '../img/gh.png'
import Linkedin from '../img/lk.png'
import Twitter from '../img/tw.png'
import Instagram from '../img/ig.png'

const Footer = () => (
    <footer className="Home_footer">
        <p>
            <small>
                Mis redes sociales
            </small>
        </p> 
        <div className="footer__redes">    
            <a href="https://github.com/Gaybre">
                <img src={ Github } alt="icon-redes" />
            </a>
            <a href="https://www.linkedin.com/in/juangaybre/" >
                <img src={ Linkedin } alt="icon-redes" />
            </a>
            <a href="https://twitter.com/JuanGaybre">
                <img src={ Twitter } alt="icon-redes" />
            </a>
            <a href="https://www.instagram.com/juangaybre/">
                <img src={ Instagram } alt="icon-redes" />
            </a>
        </div>
    </footer>
)

export default Footer