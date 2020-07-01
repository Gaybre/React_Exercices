import React from 'react'

import './styles/General.css'

import Bienvenido from './Bienvenido'
import Noticias from './Noticias'
import Servicios from './Servicios'

const General = () => (
    <section className="general">
        <Bienvenido />
        <Noticias />
        <Servicios />
    </section>
)

export default General