import React from 'react'

const Card = (props) => (
    <div className="cards__item">
        <figure>
            <img 
                src={ props.imagen } 
                className="cards__item-img" 
                alt="card-img" 
            />
        </figure>
        <div className="cards__item-details">
            <h3 className={`cards-title-${props.item}`}>
                { props.title }
            </h3>
            <hr className="corpSolutions_hr" />
            <p className="corpSolutions_p">
                {props.description}
            </p>
        </div>
    </div>
)

export default Card