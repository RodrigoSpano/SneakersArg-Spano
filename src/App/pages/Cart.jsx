import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import CartContainer from '../components/cart/CartContainer'

export default function Cart() {
  return (
    <Stack minH='80vh' justifyContent='center' alignItems='center'>
      <Box>
        <Heading as='h2' fontWeight='light' textTransform='uppercase' fontSize={{base:'20px', md:'36px'}}>| Shopping Cart |</Heading>
      </Box>
      <CartContainer />
    </Stack>
  )
}
