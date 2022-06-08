import { Button, Box, Flex, chakra, Text } from '@chakra-ui/react'
import React from 'react'

const ItemCounter = ({counter, setCounter, max, handleAdd, size }) => {
  const handleIncrease = () => {
    counter < max && setCounter(counter + 1)
  }

  const handleDecrease = () => {
    counter > 1 && setCounter(counter - 1)
  }




  return(
    <Flex direction='column' maxW='sm' gap={5}>
      <Text fontFamily='open sans' >Availables sizes: {size}</Text>
      <Box display='flex' flexDirection='row' alignItems='center' gap={2} maxW='sm'>
        <Button onClick={handleDecrease} variant='inc' >-</Button>
        <chakra.span fontSize='30px' fontFamily='Open Sans' >{counter}</chakra.span>
        <Button onClick={handleIncrease} variant='inc' >+</Button>
        <Button onClick={handleAdd} variant='cart'>Add to cart</Button>
      </Box>

    </Flex>
  )
}

export default ItemCounter;