import React from 'react'
import { Table,TableContainer, TableCaption, Thead, Tbody, Tfoot, Tr, Th, Td  } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Hiddenform from './Hiddenform'
import axios from 'axios'
import '../Style.css';
import { color } from 'framer-motion'

function ProductTable() {
    let [products, setProduct] = useState([])
    useEffect(()=>{
        axios.get ("https://northwind.vercel.app/api/products").then((res)=>{
            setProduct(res.data)
        })
    },[])
  return (
    <>
    <TableContainer className='table'>
    <Table variant='simple'>
      <TableCaption>Products</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Discontinued</Th>
          <Th>unitsInStock</Th>
          <Th>edit</Th>
          <Th>delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((product)=>(
        <Tr key={product.id} style={{color: product.unitsInStock<20? 'red':'black'}}>
        <Td>{product.id}</Td>
              <Td>{product.name}</Td>
              <Td>{product.unitPrice}</Td>
              <Td>{product.discontinued ? 'Yes' : 'No'}</Td>
              <Td>{product.unitsInStock}</Td>
              <Td>
              <Button colorScheme='teal' variant='outline'>
              Edit
  </Button>
              </Td>
              <Td>
              <Button colorScheme='red' id={product.id} onClick={(e)=>{
                let arr = [...products]
                let deletedproducts = arr.filter((product)=> product.id != e.target.id)
                setProduct(deletedproducts)
                axios.delete(`https://northwind.vercel.app/api/products/${product.id}`)
              }} >Delete</Button>
              </Td>
        </Tr>
         ))}
      </Tbody>
      <Tfoot>
        <Tr>
         
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
<Hiddenform  setProduct={setProduct}/>
    </>
  )
}

export default ProductTable