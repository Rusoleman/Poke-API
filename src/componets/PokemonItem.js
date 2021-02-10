import React from 'react'
import './PokemonItem.css'

function PokemonItem({name, img, types}) {
    return (
        <div className="pokemon__item">
            <div className="pokemon__dats">
                <h2>{name}</h2>
                <span>{types}</span>
            </div>
            <div className="pokemon__img">
                <img src={img} alt={name}/> 
            </div>
        </div>
    )
}

export default PokemonItem
