import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartContainer from '../components/cart/CartContainer'


export default function Cart() {

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Stack minH='80vh' justifyContent='center' alignItems='center'>
      <Flex justifyContent='space-between' alignItems='center' w={{base:'sm',md:'container.md',lg:'container.lg'}}>
        <Heading as='h2' fontWeight='light' letterSpacing={5} textTransform='uppercase' fontSize={{base:'20px', md:'36px'}}> Shopping Cart </Heading>
        <Button onClick={handleBack} alignSelf='flex-start' mr={5} mt={10} variant='back' w='50px' fontSize='12px' textTransform='uppercase'>⬅ back</Button>
      </Flex>
      <CartContainer />
    </Stack>
  )
}
