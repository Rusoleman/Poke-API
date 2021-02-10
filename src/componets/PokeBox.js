import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './PokeBox.css'
import Pokemon from './Pokemon'
import Form from './Form'
import AlertCant from './AlertCant'
import { Spinner } from "@chakra-ui/react"


function PokeBox() {
    const [isPokemon, setIsPokemon] = useState([])
    const [query, setQuery] = useState("")
    const [cant, setCant] = useState(10)
    const [isLoading, setIsloading] = useState(false)
    const [isAlert, setIsAlert] = useState(false)

    useEffect(() => {
        if(query) {
            const getData =  async () => {
                try {
                    const res = await axios.get(`https://pokeapi.co/api/v2/type/${query}/`)
                    setIsPokemon(res.data.pokemon.slice(0, cant))

                }
                catch(err) {
                    if(err.response.status) {
                        setIsAlert(true)
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
            <div className="alert__box">
                {isAlert && <AlertCant setIsAlert={setIsAlert} isAlert={isAlert}/>}
            </div>
            <img src="https://tecnogeek.net/wp-content/uploads/2016/07/Pokemon-GO.jpg" alt="Icon Pokemon"/>
            <Form handleSearch={setQuery} clearList={setIsPokemon} handleCant={setCant} setIsloading={setIsloading} setIsAlert={setIsAlert}/>
            {/* <Form handleSearch={setQuery} clearList={setIsPokemon} handleCant={setCant}/> */}
            {isLoading && <Spinner />}
            <div className="container__pokemon">
                {isPokemon.length > 0 && myPokemonsGo} 
            </div> 
            
        </div>
    )
}

export default PokeBox
