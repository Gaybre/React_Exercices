import React from 'react'
import Header from './components/Header'
import Principal from './components/Principal'
import ReturnToHome from '../home/components/ReturnToHome'

import './Globales.css'

const TheNewYorkTimes = () => (
    <div className="tNYT_container">
        <Header />
        <Principal />
        <ReturnToHome />
    </div>
)

export default TheNewYorkTimes