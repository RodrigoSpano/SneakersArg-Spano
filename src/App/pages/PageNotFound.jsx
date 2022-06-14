import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function PageNotFound() {
  return (
    <Stack h='70vh' justifyContent='center' alignItems='center'>
        <Text userSelect='none' textTransform='uppercase' fontSize='3xl' fontFamily='open sans' color='gray.400' >404 - Page Not Found</Text>
    </Stack>
  )
}
