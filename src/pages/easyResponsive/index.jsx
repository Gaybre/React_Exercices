import React, { Fragment } from 'react'

import Header from './components/Header'
import Main from './components/Container'
import DatosLibro from './components/DatosLibro'
import DescripcionLibro from './components/DescripcionLibro'
import ContenidoLibro from './components/ContenidoLibro'

import './components/styles/Globales.css'
import './components/mediaQuery/MediaQuery.css'

const EasyResponsive = () => (
    <Fragment>
        <Header />
        <Main>
            <DatosLibro />
            <DescripcionLibro />
            <ContenidoLibro />
        </Main>
    </Fragment>
)

export default EasyResponsive