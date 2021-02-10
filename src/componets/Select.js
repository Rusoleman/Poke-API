import React from 'react'

function Select({handleCant}) {

    const getValue = (e) => {
        handleCant(e)
    }

    return (
        <div>
            <h3>Selecciona!</h3>
            <select onSubmit={(e) => getValue(e.target.value)}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        </div>
    )
}

export default Select
