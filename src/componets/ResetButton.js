import React from 'react'
import { Button } from "@chakra-ui/react"
import './ResetButton.css'

function ResetButton({reset}) {
    return (
        <div>
            <Button onClick={reset} className="reset__button">Clear</Button>
        </div>
    )
}

export default ResetButton
