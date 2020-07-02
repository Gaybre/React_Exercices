import React from 'react'

import './Globales.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import EntradaDestacada from './components/EntradaDestacada'
import Entradas from './components/Entradas'
import EntradaRandom from './components/EntradaRandom'
import ReturnToHome from '../home/components/ReturnToHome'

const WebPage = () => (
    <div className="WebPage">
        <div className="container__WebPage">
            <Header />
            <Main>
                <EntradaDestacada />
                <Entradas />
                <EntradaRandom />
            </Main>
            <Footer />
            <ReturnToHome />
        </div>
    </div>
    ) 

export default WebPage