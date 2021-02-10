import React, { useState } from 'react'
import Select from './Select'

function Form({handleSearch, clearList, handleCant}) {
    const [value, setValue] = useState("")

    const handlePokemon = (e) => {
        e.preventDefault()
        handleSearch(value)
        setValue("")
    }

    const resetPokemon = () => {
        clearList([])
    }


    return (
        <div>
            <form>
                <Select handleCant={handleCant}/>
                <input required value={value} type="text" onChange={(e) => setValue(e.target.value)}/>
                <button onClick={(e) => handlePokemon(e)}>Search</button>
            </form>

            <button onClick={resetPokemon}>Clear</button>
        </div>
    )
}

export default Form
