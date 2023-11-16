// import { useEffect, useState } from 'react'
// import axios from 'axios'
import ProductTable from './components/ProductTable'
import { ChakraProvider } from '@chakra-ui/react'
import Hiddenform from './components/Hiddenform'
import SearchInput from './components/SearchInput'
import GroupButton from './components/GroupButton'

function App() {

  return (
    
    <ChakraProvider>
      <>
      < Hiddenform/>
      <GroupButton/>
      <SearchInput/>
   
    <ProductTable/> 
    </>
  
    </ChakraProvider>
  
        
   
  )
}

export default App
