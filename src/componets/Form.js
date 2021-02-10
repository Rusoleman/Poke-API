import React, { useState } from 'react'
import { useDisclosure } from "@chakra-ui/react"
import SelectValue from './SelectValue.js'
import { CgPokemon } from 'react-icons/cg'
import './Form.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    FormControl,
    FormLabel,
    Button,
  } from "@chakra-ui/react"
import ResetButton from './ResetButton.js'

  function Form({handleSearch, clearList, handleCant, setIsloading, setIsAlert}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState("")
    const [isClear, setIsClear] = useState(false)
    
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const handlePokemon = (e) => {
        e.preventDefault()
        setIsloading(true)

        setTimeout(() => {
          handleSearch(value)
          setIsloading(false)
          setIsClear(true)
        }, 2000);

        setValue("")
        onClose()
    }

    const resetPokemon = () => {
        clearList([])
        setIsClear(false)
        setIsAlert(false)
    }

    const handleOpen = () => {
        onOpen()
        clearList([])
        setIsClear(false)
        setIsAlert(false)
    }
  
    return (
      <>
        <Button className="button__search" onClick={handleOpen}><CgPokemon /></Button>
        {isClear && <ResetButton reset={resetPokemon}/>}
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Pokemons!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={(e) => handlePokemon(e)}>
                <FormControl>
                    <FormLabel>Select Cant Pokemon</FormLabel>
                    <SelectValue handleCant={handleCant}/>
                    <FormLabel>Write Pokemon Type..</FormLabel>
                    <Input value={value} ref={initialRef} placeholder="Type..." onChange={(e) => setValue(e.target.value)}/>
                </FormControl>
              </form>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={(e) => {
                  handlePokemon(e)
                  onClose()
              }}>
                Search
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Form