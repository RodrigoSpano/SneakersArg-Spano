import { Box, Heading, Spinner, Stack } from '@chakra-ui/react'
import React, { useState, useEffect} from 'react'
import { requestPopular } from '../mock/request'
import ItemCard from './ItemCard'



export default function MostPopular() {

  const [popular, setPopular] = useState([])
  const [load, setLoad] = useState( true )

  useEffect(() => {

    try{
      requestPopular()
      .then((data) => {
        setPopular( data )
      })
      .catch((err) => console.log(err))
      .finally(()=>{
        setLoad( false )
      })
    } catch(err) {
      console.log(err)
    }
  }, [])

  return (
    <Stack h='100vh' bg='gray.100' pt={10}>
      <Heading textAlign='center' letterSpacing={1} fontWeight='light'>Most Popular Products</Heading>
      <Box w='100vw' h='md' m={5} display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
        
        {
          load ?
          <Spinner m='auto'/>:
          popular.map(el => (
            <ItemCard 
              name={el.name}
              price={el.price}
              img={el.img}
              key={el.id}
              id={el.id}
            />
          ))
        }
        
      </Box>
    </Stack>
  )
}
