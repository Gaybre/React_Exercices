import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = (props) => (
    <Link to={ props.enlace }>
            <section className="home__card">
                <img src={ props.portada } alt="card" />
                <hr className="home__card-hr" />
                <p>
                    { props.descripcion }
                </p>
            </section>
    </Link>
)

export default HomeCard