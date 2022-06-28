import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useCartContext } from '../../context/CartContext'

export const CartResume = () => {

  const {cart} = useCartContext()

  return (
    <Stack borderRadius={10} minW={{base:'xs', md: 'sm'}}>
      <Heading textAlign='center' textTransform='uppercase' >Cart resume</Heading>
      {
        cart.map( (el) => (
          <Flex direction='column' fontFamily='open sans' borderRadius='none' bgColor='blue.200' alignItems='center' justifyContent='center' userSelect='none'>
            <Text key={el.id} fontWeight='bold' >{el.name}</Text>
            <Text fontSize='sm' >$${el.price} | size: {el.size}</Text>
          </Flex>
        ) )
      }
    </Stack>
  )
}
