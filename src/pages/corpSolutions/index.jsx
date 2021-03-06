import React from 'react'

import './Globales.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import General from './components/General'
import ReturnToHome from '../home/components/ReturnToHome'

const CorpSolutions = () => (
    <div className="background__Container">
        <div className="container">
            <Header />
            <Hero />
            <Cards />
            <General />
            <hr className="corpSolutions_hr" />
            <ReturnToHome />
        </div>
    </div>
)

export default CorpSolutions