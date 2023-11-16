import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import '../Style.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'
function Hiddenform(setProduct) {
  let [newproduct, setNewproduct] = useState({name:'',unitPrice:0, unitsInStock:'', unitsOnOrder:'',reorderLevel:'', discontinued:''})
  return (
  
   <>
   <Button className='hidden-form' colorScheme='teal' variant='solid' onClick={() => {
    setNewproduct(newproduct);
   }}>
    Add new product
  </Button>
{ newproduct ? <FormControl onSubmit={(e)=> {
  e.preventDefault()
  let addedProducts = axios.post("https://northwind.vercel.app/api/products/", newproduct);
  setProduct([...addedProducts, addedProducts.data]);
  setNewproduct({name:'',unitPrice:0, unitsInStock:'', unitsOnOrder:'',reorderLevel:'', discontinued:''})
  
 }}>
  <FormLabel>New product name</FormLabel>
  <Input type='text' />
  
</FormControl> : null}
   </>
  )
}

export default Hiddenform