import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonItem from './PokemonItem'

function Pokemon({name, url, type}) {
    const [isImg, setIsImg] = useState("")
    const [types, setTypes] = useState([])
    

    useEffect(() => {
        const getUrlImg = async () => {
            const promise = await axios.get(url)
                setIsImg(promise.data.sprites.front_shiny)
                setTypes(promise.data.types[0].type.name)
        }
        getUrlImg()
    }, [url])

    return (
        <div className="content__box">
            <PokemonItem types={types} type={type} name={name} img={isImg}/>
        </div>
    )
}

export default Pokemon
