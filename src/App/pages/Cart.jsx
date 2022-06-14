import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartContainer from '../components/cart/CartContainer'
import { useCartContext } from '../context/CartContext'


export default function Cart() {

  const {totalQuantity} = useCartContext()

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Stack minH='80vh' justifyContent='center' alignItems='center' userSelect='none' p={10}>
      <Flex justifyContent='space-between' alignItems='center' w={{base:'sm',md:'container.md',lg:'container.lg'}}>
        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
          <Heading as='h2' fontWeight='light' letterSpacing={5} textTransform='uppercase' fontSize={{base:'20px', md:'36px'}}> Shopping Cart </Heading>
          <Text color='black' h='50px' w='50px' textAlign='center' fontWeight='bold'>{totalQuantity()} 👟</Text>
        </Box>
        <Button onClick={handleBack} alignSelf='flex-start' mr={5} mt={10} variant='back' w='50px' fontSize='12px' textTransform='uppercase'>⬅ back</Button>
      </Flex>
      <CartContainer />
    </Stack>
  )
}
