import React from 'react'
import PrincipalLeft from './PrincipalLeft'
import PrincipalCenter from './PrincipalCenter'
import PrincipalRigth from './PrincipalRigth'

import './styles/Principal.css'

const Principal = () => (
    <div className="principal">
        <PrincipalLeft />
        <PrincipalCenter />
        <PrincipalRigth />
    </div>
)

export default Principal