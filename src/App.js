import * as React from "react"
import './App.css';
import PokeBox from './componets/PokeBox';

import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <ChakraProvider >
      <PokeBox />
    </ChakraProvider>
  );
}

export default App;
