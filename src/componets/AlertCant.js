import React from 'react'
import './PokeBox.css'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"

function AlertCant() {
    return (
        <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Ops..!</AlertTitle>
            <AlertDescription>Try again with another type of pokemon.</AlertDescription>
        </Alert>
    )
}

export default AlertCant
