import React, { Fragment } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeCard from './components/HomeCard'

import NewYorkTimes from './img/newYorkTimes.png'
import EasyResponsive from './img/easyResponsive.png'
import WebPage from './img/webPage.png'
import CorpSolutions from './img/corpSolutions.png'

import './components/styles/HomeCard.css'

const Home = () => (
    <Fragment>
        <Header />
        <div className="home__container">
            <HomeCard 
                enlace="/newYorkTimes"
                portada= { NewYorkTimes }
                descripcion="The New York Times"
            />
            <HomeCard 
                enlace="/easyResponsive"
                portada= { EasyResponsive }
                descripcion="Easy responsive"
            />
            <HomeCard 
                enlace="/webPage"
                portada= { WebPage }
                descripcion="Web Page"
            />
            <HomeCard 
                enlace="/corpSolutions"
                portada= { CorpSolutions }
                descripcion="Corp Solutions"
            />
        </div>
        <Footer />
    </Fragment>
)

export default Home