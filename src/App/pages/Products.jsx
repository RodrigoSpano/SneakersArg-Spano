import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import bannerProds from '../assets/heroprods.jpg'
import Filter from '../components/prods/Filter'
import ProdsContainer from '../components/prods/ProdsContainer'

export default function Products() {
  return (
    <>
    <Stack bgImage={bannerProds} w='100vw' h='md' justifyContent='center' alignItems='center'>
      <Heading as='h2' fontSize='9xl' color='blue.500' userSelect='none'>SNEAKERS</Heading>
    </Stack>
    <Stack minH='100vh' w='100vw' mt={20} direction='row' >
      <>
        <Filter />
        <ProdsContainer />
      </>
    </Stack>

    </>
  )
}
