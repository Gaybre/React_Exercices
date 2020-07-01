import React from'react'

import './styles/Cards.css'

import Consultoria from '../img/consultoria.png'
import Formacion from '../img/formacion.png'
import Analisis from '../img/analisis.png'
import Investigacion from '../img/investigacion.png'
import Card from './Card'

const Cards = () => (
    <section className="cards">
        <Card
            item="1"
            imagen={ Consultoria } 
            title={ 'Consultoría' }
            description={ 'Natus ut temporibus repellat vero neque reiciendis.' }
        />
        <Card
            item="2"
            imagen={ Formacion } 
            title={ 'Formación' }
            description={ 'Repellat vero neque reiciendis dolorum voluptatum dolores.' }
        />
        <Card
            item="3"
            imagen={ Analisis } 
            title={ 'Análisis' }
            description={ 'Temporibus repellat vero neque reiciendis dolorum.' }
        />
        <Card
            item="4"
            imagen={ Investigacion } 
            title={ 'Investigación' }
            description={ 'Voluptatum ut temporibus repellat vero neque reiciendis.' }
        />
    </section>
)

export default Cards