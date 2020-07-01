import React, { Fragment } from 'react'

import './styles/Header.css'

const Header = () => (
    <Fragment>
        <div className="tNYT_title-header">
            <h1 className="tNYT_h1">The New York Times</h1>
        </div>
        <div className="tNYT_subtitle-header">
            Contenido de subcabecera
        </div>
    </Fragment>
)

export default Header