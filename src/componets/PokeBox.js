import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './PokeBox.css'
import Pokemon from './Pokemon'
import Form from './Form'

function PokeBox() {
    const [isPokemon, setIsPokemon] = useState([])
    const [query, setQuery] = useState("")
    const [cant, setCant] = useState(10)


    useEffect(() => {
        if(query) {
            const getData =  async () => {
                try {
                    const res = await axios.get(`https://pokeapi.co/api/v2/type/${query}/`)
                    setIsPokemon(res.data.pokemon.slice(0, cant))

                }
                catch(err) {
                    if(err.response.status) {
                        alert("The type doesn't found...!")
                    }
                }
 
            }
            getData()
        }      
    }, [query, cant])

    

    
    const myPokemonsGo = isPokemon.map((value) => {
        return <Pokemon name={value.pokemon.name} url={value.pokemon.url} key={value.pokemon.name}/>
    })
 

    return (
        <div className="poke__box">
            <h1>Pokemons</h1>
            <Form handleSearch={setQuery} clearList={setIsPokemon} handleCant={setCant}/>
            {isPokemon.length > 0 && myPokemonsGo}  
        </div>
    )
}

export default PokeBox
