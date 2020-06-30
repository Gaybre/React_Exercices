import React from 'react'

const Main = (props) => (
    <div className="main">
        <div className="container">
            { props.children }
        </div>
    </div>
)

export default Main