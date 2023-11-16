import React from 'react'
import { Button } from '@chakra-ui/react'

function GroupButton() {
  return (
   <div className='buttons'>
    <Button colorScheme='teal' variant='outline'>
    Sort by name
  </Button>
   <Button colorScheme='teal' variant='outline'>
   Sort by price
 </Button>
  <Button colorScheme='teal' variant='outline'>
  isDiscontinued
</Button>
 <Button colorScheme='teal' variant='outline'>
 Button
</Button>
   </div>
  )
}

export default GroupButton