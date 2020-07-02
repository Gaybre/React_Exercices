import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../img/back.png'

import './styles/ReturnToHome.css'

const ReturnToHome = () => (
    <section className="back">
        <Link to="/">
            <span>Volver a inicio</span>
            <img src={ Back } alt="back" />
        </Link>
    </section>
)

export default ReturnToHome