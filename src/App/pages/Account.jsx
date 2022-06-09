import { Stack, chakra, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Account() {
  return (
    <Stack h='100vh' justifyContent='center' alignItems='center'>
      <chakra.span color='gray.400' textTransform='uppercase' fontWeight='light' letterSpacing={2} fontSize='4xl'> 
      in progress...
      <Spinner size={'lg'} />
      </chakra.span>
    </Stack>
  )
}
