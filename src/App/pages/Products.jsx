import { Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import bannerProds from '../assets/heroprods.jpg'
import Filter from '../components/prods/Filter'
import ProdsContainer from '../components/prods/ProdsContainer'

export default function Products() {

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <>
    <Stack bgImage={bannerProds} w='100vw' h='md' justifyContent='center' alignItems='center'>
      <Heading as='h2' fontSize='9xl' color='blue.500' userSelect='none'>SNEAKERS</Heading>
    </Stack>
    <Button onClick={handleBack} alignSelf='flex-start' ml={5} mt={5} variant='back' w='50px' fontSize='12px' textTransform='uppercase'>⬅ back</Button>
    <Stack minH='100vh' w='100vw' mt={20} direction='row' >
      <>
        <Filter />
        <ProdsContainer />
      </>
    </Stack>

    </>
  )
}
