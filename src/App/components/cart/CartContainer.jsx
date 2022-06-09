import { Stack, chakra } from '@chakra-ui/react'
import React from 'react'

export default function CartContainer() {
  return (
    <Stack minH='xs' w={{base:'sm',md:'container.md',lg:'container.lg'}} boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)' borderRadius={20} alignItems='center' justifyContent='center'>
      <chakra.span textTransform='uppercase' fontWeight='ligh' letterSpacing={2} color='gray.400'>shopping cart is empty...</chakra.span>
    </Stack>
  )
}