import { Button, Box, Flex, chakra, Text } from '@chakra-ui/react'
import React from 'react'

const ItemCounter = ({counter, setCounter, max, handleAdd, size, stock,  setPickedSize, pickedSize }) => {
  const handleIncrease = () => {
    counter < max && setCounter(counter + 1)
  }

  const handleDecrease = () => {
    counter > 1 && setCounter(counter - 1)
  }



  return(
    <Flex direction='column' maxW='sm' gap={5}>
      <Text fontFamily='open sans' > {stock > 0 ? `Available Stock: ${stock} unit..` : 'INSUFICIENT STOCK'}</Text>

      <Flex direction='column' fontFamily='open sans'>
        <Text fontWeight='bold'>Availables sizes:</Text>
        <Box display='flex' gap={2} userSelect='none'>
          {
            size.map( (el) => (
              <Button key={el} onClick={() => setPickedSize(el)} bgColor={pickedSize === el ? 'yellow.400' : 'blue.100'} p={2} fontSize='12px' >{el}</Button>
            ) )
          }
        </Box>
      </Flex>

      <Box display='flex' flexDirection='row' alignItems='center' gap={2} maxW='sm'>
        <Button onClick={handleDecrease} variant='inc' >-</Button>
        <chakra.span fontSize='30px' fontFamily='Open Sans' >{counter}</chakra.span>
        <Button onClick={handleIncrease} variant='inc' >+</Button>
        <Button onClick={handleAdd} disabled={stock <= 0} variant='cart'>Add to cart</Button>
      </Box>

    </Flex>
  )
}

export default ItemCounter;