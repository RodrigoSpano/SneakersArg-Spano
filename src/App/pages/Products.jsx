import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Filter from '../components/prods/Filter'
import ProdsContainer from '../components/prods/ProdsContainer'

export default function Products() {
  return (
    <Stack minH='100vh' w='100vw' mt={20} direction='row' >
    //todo poner un banner para esa pagina
      <Filter />
      <ProdsContainer />
    </Stack>
  )
}
