import React from 'react'

import './Globales.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import EntradaDestacada from './components/EntradaDestacada'
import Entradas from './components/Entradas'
import EntradaRandom from './components/EntradaRandom'


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
        </div>
    </div>
    ) 

export default WebPage