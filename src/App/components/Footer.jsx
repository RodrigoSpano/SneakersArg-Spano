import { Text, Stack } from '@chakra-ui/react'
import React from 'react'

export function Footer() {
  return (
    <Stack bgColor='gray.900' w='100vw' h='40px'>
      <Text fontWeight='light' textAlign='center' color='white'>This is a footer</Text>
    </Stack>
  )
}
