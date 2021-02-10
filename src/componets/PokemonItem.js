import React from 'react'

function PokemonItem({name, img, types}) {
    return (
        <div>
            <p>{types}</p>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
        </div>
    )
}

export default PokemonItem
