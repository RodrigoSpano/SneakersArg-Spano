import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Filter from '../components/prodsPage/Filter'

export default function Products() {
  return (
    <Stack h='100vh' w='100vw' mt={20}>
      <Filter />
    </Stack>
  )
}
