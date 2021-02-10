import React from 'react'
import { Select } from "@chakra-ui/react"

function SelectValue({handleCant, setIsAlert}) {
    
    const getValue = (e) => {
        handleCant(e)
        setIsAlert(false)
    }

    return (
        <div>
            <Select  onChange={(e) => getValue(e.target.value)}>
                <option value="10">10 Pokemons!</option>
                <option value="20">20 Pokemons!</option>
                <option value="30">30 Pokemons!</option>
                <option value="40">40 Pokemons!</option>
                <option value="50">50 Pokemons!</option>
            </Select>
            
        </div>
    )
}

export default SelectValue
